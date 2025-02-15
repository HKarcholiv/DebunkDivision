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
            console.log(`🔍 Fetching data for: ${ip}`);

            let response = await fetch(`https://ipwho.is/${ip}`);
            let geoResponse = await response.json();

            console.log("🌍 API Response:", geoResponse); // Debugging step

            if (!geoResponse.success) {
                console.error(`❌ API Error for ${ip}:`, geoResponse);
                ipDiv.innerHTML += `<p>❌ Error: ${geoResponse.message || "Unknown API Error"}</p>`;
                return;
            }

            let mapUrl = `https://www.google.com/maps/search/?api=1&query=${geoResponse.latitude},${geoResponse.longitude}`;

            ipDiv.innerHTML += `
                <p><strong>📍 Location:</strong> ${geoResponse.city || "Unknown"}, ${geoResponse.region || "Unknown"}, ${geoResponse.country || "Unknown"} (${geoResponse.country_code || "N/A"})</p>
                <p><strong>🏢 ISP:</strong> ${geoResponse.connection?.isp || "Unknown"} (${geoResponse.connection?.org || "Unknown"})</p>
                <p><strong>📡 ASN:</strong> ${geoResponse.connection?.asn || "Unknown"}</p>
                <p><strong>🌍 Latitude, Longitude:</strong> <a href="${mapUrl}" target="_blank">${geoResponse.latitude || "N/A"}, ${geoResponse.longitude || "N/A"}</a></p>
                <p><strong>⏰ Timezone:</strong> ${geoResponse.timezone?.id || "Unknown"} (UTC ${geoResponse.timezone?.utc || "Unknown"})</p>
                <p><strong>📌 ZIP Code:</strong> ${geoResponse.postal || "N/A"}</p>
                <p><strong>🕵️‍♂️ Proxy Detection:</strong> ${geoResponse.security?.is_proxy ? "✅ Yes (Detected)" : "❌ No"}</p>
                <p><strong>🛡️ VPN Detection:</strong> ${geoResponse.security?.is_vpn ? "✅ Yes (Detected)" : "❌ No"}</p>
                <p><strong>🕵️‍♂️ Tor Detection:</strong> ${geoResponse.security?.is_tor ? "✅ Yes (Detected)" : "❌ No"}</p>
            `;

        } catch (error) {
            console.error(`❌ Error fetching data for ${ip}:`, error);
            ipDiv.innerHTML += "<p>❌ API Request Failed! Check console.</p>";
        }

        completedChecks++;
        let progressPercent = Math.round((completedChecks / totalChecks) * 100);
        progressBar.style.width = `${progressPercent}%`;
        progressText.innerText = `Searching... (${completedChecks}/${totalChecks} completed)`;
    });

    await Promise.all(ipPromises);
    progressText.innerText = "✅ Lookup Complete!";
});
