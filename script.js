document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".sidebar a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

 
    function updateTime() {
        let now = new Date();
        let formattedTime = now.toLocaleTimeString();
        let formattedDate = now.toLocaleDateString();
        document.getElementById("timeWidget").innerText = `${formattedDate} | ${formattedTime}`;
    }
    updateTime();
    setInterval(updateTime, 1000);


    let browserInfo = navigator.userAgent;
    let platform = navigator.platform;
    document.getElementById("systemInfo").innerText = `Platform: ${platform}\nBrowser: ${browserInfo}`;
});
