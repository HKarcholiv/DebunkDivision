document.getElementById("deleteBtn").addEventListener("click", async function () {
    let input = document.getElementById("webhookList").value.trim();
    let statusDiv = document.getElementById("status");
    statusDiv.innerHTML = ""; 

    if (!input) {
        statusDiv.innerHTML = "<p>❌ No webhooks entered!</p>";
        return;
    }

    let webhooks = input.split("\n").map(url => url.trim()).filter(url => url);
    let validWebhookRegex = /^https:\/\/discord\.com\/api\/webhooks\/\d+\/[\w-]+$/;
    let results = [];

    for (let webhook of webhooks) {
        if (!validWebhookRegex.test(webhook)) {
            results.push(`<p>❌ Invalid URL: ${webhook}</p>`);
            continue;
        }

        try {
            let response = await fetch(webhook, { method: "DELETE" });
            results.push(response.ok ? `<p>✅ Deleted: ${webhook}</p>` : `<p>⚠️ Failed: ${webhook}</p>`);
        } catch {
            results.push(`<p>❌ Error: ${webhook}</p>`);
        }
    }

    statusDiv.innerHTML = results.join("");
});
