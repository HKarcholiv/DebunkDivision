const VPNAPI_KEY = "226a179cfebd471895d9b53993c62f4c ";
const BLACKLIST_APIS = [
    "https://www.abuseipdb.com/check/",
    "https://ipapi.co/",
    "https://api.threatintelligenceplatform.com/v1/reputation?apiKey=demo&ip="
];

document.getElementById("lookupBtn").addEventListener("click", async function () {
    let input = document.getElementById("ipInput").value.trim();
    let resultsDiv = document.getElementById("ipResults");
    let progressBar = document.getElementById("progressBar");
    let progressText = document.getElementById("progressText");

    resultsDiv.innerHTML = "";
    progressBar.style.width = "0%";
    progressText.innerText = "Starting lookup...";

    if (!input) {
        resultsDiv.innerHTML = "<p>❌ No IP addresses entered!</p>";
        return;
    }

    let ips = input.split("\n").map(ip => ip.trim()).filter(ip => ip.match(/^(\d{1,3}\.){3}\d{1,3}$|^[a-fA-F0-9:]+$/));

    let totalChecks = ips.length;
    let completedChecks = 0;

    let ipPromises = ips.map(async ip => {
        let ipDiv = document.createElement("div");
        ipDiv.classList.add("ip-result");
        ipDiv.innerHTML = `<h3>🔍 Checking: ${ip}</h3>`;
        resultsDiv.appendChild(ipDiv);

        try {
            let [geoData, vpnData, blacklistStatus] = await Promise.all([
                fetch(`http://ip-api.com/json/${ip}?fields=66847743`).then(res => res.json()),
                fetch(`https://vpnapi.io/api/${ip}?key=${VPNAPI_KEY}`).then(res => res.json()),
                checkBlacklist(ip)
            ]);

            if (geoData.status === "fail") {
                ipDiv.innerHTML += `<p>❌ Error: ${geoData.message}</p>`;
                return;
            }

            let mapUrl = `https://www.google.com/maps/search/?api=1&query=${geoData.lat},${geoData.lon}`;

            ipDiv.innerHTML += `
                <p><strong>📍 Location:</strong> ${geoData.city}, ${geoData.regionName}, ${geoData.country} (${geoData.countryCode})</p>
                <p><strong>🏢 ISP:</strong> ${geoData.isp}</p>
                <p><strong>📡 ASN:</strong> ${geoData.as}</p>
                <p><strong>🌍 Latitude, Longitude:</strong> <a href="${mapUrl}" target="_blank">${geoData.lat}, ${geoData.lon}</a></p>
                <p><strong>⏰ Timezone:</strong> ${geoData.timezone}</p>
                <p><strong>💰 Currency:</strong> ${geoData.currency}</p>
                <p><strong>📌 ZIP Code:</strong> ${geoData.zip ? geoData.zip : "N/A"}</p>
                <p><strong>🕵️‍♂️ Proxy/VPN:</strong> ${vpnData.security.vpn ? "✅ Yes (VPN)" : vpnData.security.proxy ? "✅ Yes (Proxy)" : vpnData.security.tor ? "✅ Yes (Tor)" : "❌ No"}</p>
                <p><strong>⚠️ Threat Level:</strong> ${geoData.threat ? geoData.threat.level : "Unknown"}</p>
                <p><strong>🚨 ISP Reputation:</strong> ${geoData.ispRisk ? "⚠️ High Risk" : "✅ Clean"}</p>
                <p><strong>📡 Reverse DNS:</strong> ${geoData.reverse ? geoData.reverse : "Not Available"}</p>
                <p><strong>🚨 Blacklist Status:</strong> ${blacklistStatus}</p>
            `;

        } catch (error) {
            ipDiv.innerHTML += "<p>❌ Error fetching IP data!</p>";
        }

        completedChecks++;
        let progressPercent = Math.round((completedChecks / totalChecks) * 100);
        progressBar.style.width = `${progressPercent}%`;
        progressText.innerText = `Searching... (${completedChecks}/${totalChecks} completed)`;
    });

    await Promise.all(ipPromises);
    progressText.innerText = "✅ Lookup Complete!";
});

async function checkBlacklist(ip) {
    let results = await Promise.all(
        BLACKLIST_APIS.map(async api => {
            try {
                let response = await fetch(`${api}${ip}`);
                return response.ok ? "✅ Blacklisted" : "❌ Not Listed";
            } catch {
                return null;
            }
        })
    );

    if (results.includes("✅ Blacklisted")) {
        return "✅ Blacklisted";
    } else if (results.includes("❌ Not Listed")) {
        return "❌ Not Listed";
    } else {
        return "⚠️ No Data Available";
    }
}
