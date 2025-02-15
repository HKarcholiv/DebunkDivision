document.getElementById("convertBtn").addEventListener("click", async function () {
    let youtubeUrl = document.getElementById("youtubeUrl").value.trim();
    let format = document.getElementById("format").value;
    let quality = document.getElementById("quality").value;
    let downloadDiv = document.getElementById("downloadLink");

    if (!youtubeUrl.match(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/)) {
        downloadDiv.innerHTML = "<p>❌ Invalid YouTube URL!</p>";
        return;
    }

    downloadDiv.innerHTML = "<p>🔄 Fetching video details...</p>";

    try {
        let response = await fetch(`https://yt1s.com/api/ajaxSearch/index?url=${encodeURIComponent(youtubeUrl)}`);
        let data = await response.json();

        if (!data || !data.links || !data.links[format]) {
            downloadDiv.innerHTML = "<p>❌ Error fetching download link!</p>";
            return;
        }

        let availableQualities = Object.keys(data.links[format]);
        let selectedQuality = availableQualities.includes(quality) ? quality : availableQualities[0];

        let downloadUrl = data.links[format][selectedQuality].url;

        downloadDiv.innerHTML = `
            <p>✅ Video Ready!</p>
            <a href="${downloadUrl}" target="_blank" class="download-button">⬇️ Download ${format.toUpperCase()} (${selectedQuality})</a>
        `;
    } catch (error) {
        console.error("❌ Error fetching video:", error);
        downloadDiv.innerHTML = "<p>❌ Error processing video!</p>";
    }
});