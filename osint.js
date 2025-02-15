const SOURCES = {
    "GitHub": "https://github.com/",
	"GitLab": "https://gitlab.com/",
    "Twitter": "https://twitter.com/",
    "Reddit": "https://www.reddit.com/user/",
    "Instagram": "https://www.instagram.com/",
    "TikTok": "https://www.tiktok.com/@",
    "Pinterest": "https://www.pinterest.com/",
    "PornHub": "https://www.pornhub.com/users/",
	"Chess.com": "https://www.chess.com/member/",
	"Threads": "https://www.threads.net/@",
	"Xbox Gamertag": "https://www.xboxgamertag.com/",
	"Streamlabs": "https://streamlabs.com/",
	"Twitter/X": "https://x.com/",
    "OnlyFans": "https://onlyfans.com/",
	"Youtube": "https://youtube.com/@",
	"Twitch": "https://www.twitch.tv/",
	"Adultism": "https://www.adultism.com/profile/",
	"7Cups": "https://www.7cups.com/@",
	"Alik": "https://www.alik.cz/u/",
	"Allmylinks": "https://allmylinks.com/",
	"Audiojungle": "https://audiojungle.net/user/",
	"Ameblo": "https://ameblo.jp/",
	"Bandlab": "https://www.bandlab.com/",
	"Bluesky": "https://bsky.app/profile/",
	"BoardGameGeek": "https://boardgamegeek.com/user/",
	"Cafecito": "https://cafecito.app/",
	"Calendy": "https://calendly.com/",
	"Chaturbate": "https://chaturbate.com/",
	"Clubhouse": "https://www.clubhouse.com/@",
	"chomikuj.pl": "https://chomikuj.pl/",
	"Codewars": "https://www.codewars.com/users/",
	"BodyBuilding.com": "http://bodyspace.bodybuilding.com/",
	"Cults3D": "https://cults3d.com/en/users/",
	"Archiveofourown.org": "https://archiveofourown.org/users/",
	"Community Adobe": "https://community.adobe.com/t5/forums/searchpage/tab/user?q=",
	"Dating.ru": "https://dating.ru/",
	"Datezone": "https://www.datezone.com/users/",
	"social.network.europa.eu": "https://social.network.europa.eu/",
    "Disqus": "https://disqus.com/by/",
	"Duolingo": "https://www.duolingo.com/profile/",
	"Donation Alerts": "https://www.donationalerts.com/r/",
	"EPORNER": "https://www.eporner.com/profile/",
	"Fansly": "https://fansly.com/",
	"Eyeem": "https://www.eyeem.com/u/",
	"Freelancer": "https://www.freelancer.com/u/",
	"FurAffinity": "https://www.furaffinity.net/user/",
	"Flipboard": "https://flipboard.com/@",
	"FreeSound": "https://freesound.org/people/",
	"Geocaching": "https://www.geocaching.com/p/?u=",
	"GDBrowser": "https://gdbrowser.com/u/",
	"Giters": "https://giters.com/crip",
    "Habbo.nl": "https://www.habbo.nl/profile/",
	"Habbo.es": "https://www.habbo.es/profile/",
	"Habr": "https://habr.com/ru/users/",
	"HomeDesign3D": "https://en.homedesign3d.net/user/",
	"IFTTT": "https://ifttt.com/p/",
	"InkBunny": "https://inkbunny.net/",
	"Inautralist": "https://inaturalist.nz/people/",
	"Houzz": "https://www.houzz.com/user/",
	"Independent Academis": "https://independent.academia.edu/",
	"Interpals": "https://www.interpals.net/",
	"Internet Archive": "https://archive.org/search.php?query=",
	"JBZD": "https://jbzd.com.pl/uzytkownik/",
	"ISUU": "https://issuu.com/",
	"Letterboxd": "https://letterboxd.com/",
	"Kwejk.pl": "https://kwejk.pl/uzytkownik/",
	"LibraryThing": "https://www.librarything.com/profile/",
    "Lemon8": "https://www.lemon8-app.com/",
	"Kongegrate": "https://www.kongregate.com/accounts/",
    "MCUUID(Minecraft)": "https://mcuuid.net/?q=",
	"Mixlr": "http://mixlr.com/",
	"Mixcloud": "https://www.mixcloud.com/",
	"Mistrowzie": "https://mistrzowie.org/user/",
	"My_instants": "https://www.myinstants.com/en/profile/",
	"Mod DB": "https://www.moddb.com/members/",
    "MyAnimeList": "https://myanimelist.net/profile/",
    "Nairaland": "https://www.nairaland.com/",
	"Naver": "https://blog.naver.com/",
	"OnlySearch": "https://onlysearch.co/profiles?keyword=",
    "npm": "https://www.npmjs.com/~",
    "McName": "https://pastebin.com/u/",
    "Palnet": "https://www.palnet.io/@",
	"Peing": "https://peing.net/",
    "Patreon": "https://www.patreon.com/",
    "MySpace": "https://myspace.com/",
    "Polarsteps": "https://www.polarsteps.com/",
    "Pronouns.Page": "https://pronouns.page/@",
	"Pronouny": "https://pronouny.xyz/api/users/profile/username/",
	"Public.com": "https://public.com/@",
	"RumbleUser": "https://rumble.com/user/",
	"rsi": "https://robertsspaceindustries.com/citizens/",
	"Setlist": "https://www.setlist.fm/user/",
	"Smule": "https://www.smule.com/",
	"Shesfreaky": "https://www.shesfreaky.com/profile/",
	"Solo.to": "https://solo.to/",
	"Steam": "https://steamcommunity.com/id/",
	"Substack": "https://substack.com/@",
	"TETR.IO": "https://ch.tetr.io/u/",
	"tabletoptournament": "https://www.tabletoptournaments.net/eu/player/",
	"Theguardian": "https://www.theguardian.com/profile/",
    "Themeforest": "https://themeforest.net/user/",
	"Tenor": "https://tenor.com/users/",
	"Totalwar": "https://forums.totalwar.com/profile/",
	"Trello": "https://trello.com/",
	"TryHackMe": "https://tryhackme.com/r/p/",
	"Ultimate Guitar": "https://www.ultimate-guitar.com/u/",
	"Untappd": "https://untappd.com/user/",
	"Vivino": "https://www.vivino.com/users/",
	"xHamster": "https://xhamster.com/users/",
	"WordPress": "https://profiles.wordpress.org/",
	"WordPress Support": "https://wordpress.org/support/users/",
	"XVideos": "https://www.xvideos.com/profiles/",
	"Zepeto": "https://web.zepeto.me/share/user/profile/",
	"YouNow": "https://www.younow.com/",
	"Zhihu": "https://www.zhihu.com/people/",
	"Zbinorik": "https://mini.zbiornik.com/",
	"Osu!" : "https://osu.ppy.sh/users/",
	"Albicla": "https://albicla.com/",
	"Zoomit": "https://www.zoomit.ir/user/",
};

// NSFW Platforms
const NSFW_SOURCES = ["PornHub", "OnlyFans", "Adultism", "Chaturbate", "Datezone", "EPORNER", "Fansly", "InkBunny", "OnlySearch", "Shesfreaky", "xHamster", "XVideos"];

// Free CORS Proxy (Avoids Site Restrictions)
const PROXY_URL = "https://corsproxy.io/?";

async function checkUsername(source, url) {
    try {
        const response = await fetch(`${PROXY_URL}${encodeURIComponent(url)}`, { method: "GET" });
        return { source, url, exists: response.ok };
    } catch {
        return { source, url, exists: false };
    }
}

document.getElementById("searchBtn").addEventListener("click", async function () {
    let input = document.getElementById("usernameList").value.trim();
    let resultsDiv = document.getElementById("osintResults");
    let progressBar = document.getElementById("progressBar");
    let progressText = document.getElementById("progressText");
    let nsfwToggle = document.getElementById("nsfwToggle").checked;

    resultsDiv.innerHTML = ""; // Clear previous results
    progressBar.style.width = "0%";
    progressText.innerText = "Starting search...";

    if (!input) {
        resultsDiv.innerHTML = "<p>❌ No usernames entered!</p>";
        return;
    }

    let usernames = input.split("\n").map(u => u.trim()).filter(u => u);
    let sourcesToCheck = Object.entries(SOURCES).filter(([source]) => nsfwToggle ? !NSFW_SOURCES.includes(source) : true);
    let totalChecks = usernames.length * sourcesToCheck.length;
    let completedChecks = 0;

    for (let username of usernames) {
        let userResultDiv = document.createElement("div");
        userResultDiv.classList.add("user-result");
        userResultDiv.innerHTML = `<h3>🔎 Results for: ${username}</h3>`;
        resultsDiv.appendChild(userResultDiv);

        for (let [source, baseUrl] of sourcesToCheck) {
            let url = `${baseUrl}${username}`;
            let result = await checkUsername(source, url);

            let resultItem = document.createElement("div");
            resultItem.classList.add("result-item");
            resultItem.innerHTML = `<strong>${result.source}:</strong> ${result.exists ? `<a href="${result.url}" target="_blank">✅ Found</a>` : "❌ Not Found"}`;
            userResultDiv.appendChild(resultItem);

            completedChecks++;
            let progressPercent = Math.round((completedChecks / totalChecks) * 100);
            progressBar.style.width = `${progressPercent}%`;
            progressText.innerText = `Searching... (${completedChecks}/${totalChecks} completed)`;
        }
    }

    progressText.innerText = "✅ Search Complete!";
});
