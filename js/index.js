let popupkeys = document.querySelectorAll("section .row .popupkey"),
    popup = document.querySelector(".popup"),
    popupBox = popup.querySelector(".box"),
    popupExite = popup.querySelector(".close"),
    popupNext = popup.querySelector(".next"),
    popupPrev = popup.querySelector(".prev"),
    popupImg = popup.querySelector("img"),

    popupIndicator = popup.querySelector("ul"),
    sectionImgs = document.querySelectorAll("section .row img"),
    currentImgIndex;


for (let i = 0; i < sectionImgs.length; i++) {
    let newIndicator = document.createElement("li");
    newIndicator.textContent = i + 1;
    if (i == 0) {
        newIndicator.classList.add("active");
    }
    popupIndicator.append(newIndicator);
}

let popupList = popup.querySelectorAll("ul li");

popupkeys.forEach(function (popupkey) {
    popupkey.addEventListener("click", function () {
        let currentImg = popupkey.parentElement.previousElementSibling,
            currentImgSrc = currentImg.getAttribute(("src")),
            sectionImgsArr = Array.from(sectionImgs);
        currentImgIndex = sectionImgsArr.indexOf(currentImg);
        updateIndicators();
        updateImg(currentImgSrc);
        openPopup();
    })
});

popup.addEventListener("click", closePopup)
popupBox.addEventListener("click", function (e) {
    e.stopPropagation();
})

popupExite.addEventListener("click", closePopup)

popupNext.addEventListener("click", function () {
    currentImgIndex = ++currentImgIndex % sectionImgs.length;

    let nextImgIndex = currentImgIndex,
        nextImg = sectionImgs[nextImgIndex],
        nextImgsrc = nextImg.getAttribute("src");


    updateIndicators();
    updateImg(nextImgsrc);
})

popupPrev.addEventListener("click", function () {
    currentImgIndex = (--currentImgIndex + sectionImgs.length) % sectionImgs.length;
    console.log(sectionImgs.length);
    let prevImgIndex = currentImgIndex,
        prevImg = sectionImgs[prevImgIndex],
        prevImgSrc = prevImg.getAttribute("src");
    updateIndicators();
    updateImg(prevImgSrc);
})

popupList.forEach(function (popupIndicators, currentIndicatorsIndex) {
    popupIndicators.addEventListener("click", function () {
        let newImg = sectionImgs[currentIndicatorsIndex],
            newImgSrc = newImg.getAttribute("src");
        currentImgIndex = currentIndicatorsIndex;
        updateImg(newImgSrc);
        updateIndicators();
    })
})



































