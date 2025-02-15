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
            let response = await fetch(`https://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,mobile,proxy,hosting`);
            let geoResponse = await response.json();

            if (!geoResponse || geoResponse.status === "fail") {
                console.error(`❌ IP-API Error for ${ip}:`, geoResponse);
                ipDiv.innerHTML += `<p>❌ Error: ${geoResponse.message || "Unknown API Error"}</p>`;
                return;
            }

            let mapUrl = `https://www.google.com/maps/search/?api=1&query=${geoResponse.lat},${geoResponse.lon}`;

            ipDiv.innerHTML += `
                <p><strong>📍 Location:</strong> ${geoResponse.city}, ${geoResponse.regionName}, ${geoResponse.country} (${geoResponse.countryCode})</p>
                <p><strong>🏢 ISP:</strong> ${geoResponse.isp} (${geoResponse.org})</p>
                <p><strong>📡 ASN:</strong> ${geoResponse.as}</p>
                <p><strong>🌍 Latitude, Longitude:</strong> <a href="${mapUrl}" target="_blank">${geoResponse.lat}, ${geoResponse.lon}</a></p>
                <p><strong>⏰ Timezone:</strong> ${geoResponse.timezone}</p>
                <p><strong>📌 ZIP Code:</strong> ${geoResponse.zip ? geoResponse.zip : "N/A"}</p>
                <p><strong>📱 Mobile Network:</strong> ${geoResponse.mobile ? "✅ Yes" : "❌ No"}</p>
                <p><strong>🛡️ Hosting Provider:</strong> ${geoResponse.hosting ? "✅ Yes" : "❌ No"}</p>
                <p><strong>🕵️‍♂️ Proxy Detection:</strong> ${geoResponse.proxy ? "✅ Yes (Detected)" : "❌ No"}</p>
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
