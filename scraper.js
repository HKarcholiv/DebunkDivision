let scrapedData = [];

document.getElementById("scrapeBtn").addEventListener("click", async function () {
    let input = document.getElementById("scrapeURLs").value.trim();
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<p>🔄 Scraping websites...</p>";
    scrapedData = [];

    if (!input) {
        resultsDiv.innerHTML = "<p>❌ No URLs entered!</p>";
        return;
    }

    let urls = input.split("\n").map(url => url.trim()).filter(url => url);
    let fetchPromises = [];

    urls.forEach(url => {
        if (!url.startsWith("http")) {
            resultsDiv.innerHTML += `<p>❌ Invalid URL: ${url}</p>`;
            return;
        }

        fetchPromises.push(
            fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
                .then(response => response.json())
                .then(data => processPageData(url, data.contents))
                .catch(() => resultsDiv.innerHTML += `<p>❌ Failed to fetch: ${url}</p>`)
        );
    });

    await Promise.all(fetchPromises);
    resultsDiv.innerHTML += "<p>✅ Scraping complete!</p>";
});



function processPageData(url, pageContent) {
    let resultsDiv = document.getElementById("results");
    let titleMatch = pageContent.match(/<title>(.*?)<\/title>/);
    let title = titleMatch ? titleMatch[1] : "No Title Found";

    let links = [...pageContent.matchAll(/<a\s+(?:[^>]*?\s+)?href=["'](.*?)["']/g)].map(m => m[1]);
    let images = [...pageContent.matchAll(/<img\s+(?:[^>]*?\s+)?src=["'](.*?)["']/g)].map(m => m[1]);

    let resultObj = { url, title, links, images };
    scrapedData.push(resultObj);

    let resultHTML = `
        <div class="result-card">
            <h3>🌍 ${url}</h3>
            <p>🔎 Title: ${title}</p>
            <p>🔗 ${links.length} Links Found</p>
            <p>🖼 ${images.length} Images Found</p>
        </div>
    `;

    resultsDiv.innerHTML += resultHTML;
}


document.getElementById("downloadBtn").addEventListener("click", function () {
    if (scrapedData.length === 0) {
        alert("No data to download! Scrape some websites first.");
        return;
    }

    let format = document.getElementById("downloadFormat").value;
    let content = "";
    let filename = `scraped_data.${format}`;

    if (format === "txt") {
        content = scrapedData.map(site => `URL: ${site.url}\nTitle: ${site.title}\nLinks: ${site.links.length}\nImages: ${site.images.length}\n`).join("\n----------------\n");
    } else if (format === "html") {
        content = `<html><head><title>Scraped Data</title></head><body>${scrapedData.map(site => `<h2>${site.url}</h2><p><strong>Title:</strong> ${site.title}</p><p><strong>Links:</strong> ${site.links.length}</p><p><strong>Images:</strong> ${site.images.length}</p>`).join("<hr>")}</body></html>`;
    } else if (format === "csv") {
        content = "URL,Title,Links Found,Images Found\n" + scrapedData.map(site => `"${site.url}","${site.title}",${site.links.length},${site.images.length}`).join("\n");
    } else if (format === "json") {
        content = JSON.stringify(scrapedData, null, 2);
    }

    let blob = new Blob([content], { type: format === "json" ? "application/json" : "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
});
