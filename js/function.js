function openPopup() {
    popup.classList.add("active");
    setTimeout(function () {
        popup.classList.add("show");
    }, 100)
}
function closePopup() {
    popup.classList.remove("show")
    setTimeout(function () {
        popup.classList.remove("active");
    }, 1000)
}
function updateImg(imgsrc) {
    popupImg.setAttribute("src", imgsrc)
}
function updateIndicators() {
    let newIndicator = popupList[currentImgIndex];
    let oldIndicator = popup.querySelector("ul li.active");

    oldIndicator.classList.remove("active");
    newIndicator.classList.add("active");

}
















