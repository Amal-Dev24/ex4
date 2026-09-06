function openpopup() {
    popup.classList.add("active");
    setTimeout(function () {
        popup.classList.add("show");
    }, 100)
}
function closepopup() {
    popup.classList.remove("show")
    setTimeout(function () {
        popup.classList.remove("active");
    }, 1000)
}
function updateimg(imgsrc) {
    popupimg.setAttribute("src", imgsrc)
}
function updateindicators() {
    let newindicator = popuplist[currentimgindex],
        oldindicator = popup.querySelector("ul li.active");
    oldindicator.classList.remove("active");
    newindicator.classList.add("active");

}
















