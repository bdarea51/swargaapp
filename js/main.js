const hamBtn = document.querySelector("#hambtn"),
    sidebarBgOverlay = document.querySelector("#sidebar-bg-overlay"),
    sidebar = document.querySelector("#sidebar");
hamBtn.addEventListener("click", function () {
    document.querySelector("#line-1").classList.toggle("line-1-c"), document.querySelector("#line-2").classList.toggle("line-2-c"), document.querySelector("#line-3").classList.toggle("line-3-c"), sidebarBgOverlay.style.display = "none" === sidebarBgOverlay.style.display ? "block" : "none", sidebar.style.transform = "translateX(-280px)" === sidebar.style.transform ? "translateX(0px)" : "translateX(-280px)"
}), sidebarBgOverlay.addEventListener("click", function () {
    document.querySelector("#line-1").classList.remove("line-1-c"), document.querySelector("#line-2").classList.remove("line-2-c"), document.querySelector("#line-3").classList.remove("line-3-c"), sidebarBgOverlay.style.display = "none", sidebar.style.transform = "translateX(-280px)"
}), document.querySelector("#red-box").addEventListener("click", function () {
    window.close()
});
const demo = document.querySelector("#demo");
demo.innerText = "Dev Feedback"; demo.addEventListener("click", function () {
    window.open("https://m.me/yoamishishir", "_blank");
});
document.querySelector(".amishishir").addEventListener("click",function(){
window.open("https://www.facebook.com/yoamishishir","_blank");
});
const body = document.querySelector("body");
const passBox = prompt("Give password for accese this page");
if (passBox == "naughty america") {
    body.style.display = "block";
} else {
    location.reload();
}
