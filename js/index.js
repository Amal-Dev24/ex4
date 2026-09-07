let popupkeys = document.querySelectorAll("section .row .popupkey"),
    popup = document.querySelector(".popup"),
    popupbox = popup.querySelector(".box"),
    popupexit = popup.querySelector(".close"),
    popupnext = popup.querySelector(".next"),
    popupprev = popup.querySelector(".prev"),
    popupimg = popup.querySelector("img"),
    popuplist = popup.querySelectorAll("ul li"),
    sectionimgs = document.querySelectorAll("section img"),
    currentimgindex;
popupkeys.forEach(function (popupkey) {
    popupkey.addEventListener("click", function () {
        let currentimg = popupkey.parentElement.previousElementSibling,
            currentimgsrc = currentimg.getAttribute(("src")),
            sectionimgsarr = Array.from(sectionimgs);
        currentimgindex = sectionimgsarr.indexOf(currentimg);

        updateindicators();
        updateimg(currentimgsrc);
        openpopup();
    })
});

popup.addEventListener("click", closepopup)

popupbox.addEventListener("click", function (e) {
    e.stopPropagation();
})

popupexit.addEventListener("click", closepopup)

popupnext.addEventListener("click", function () {
    currentimgindex = ++currentimgindex % (sectionimgs.length - 1);
    let nextimgindex = currentimgindex,
        nextimg = sectionimgs[nextimgindex],
        nextimgsrc = nextimg.getAttribute("src");

    updateindicators();
    updateimg(nextimgsrc);
})

popupprev.addEventListener("click", function () {
    currentimgindex = (--currentimgindex + (sectionimgs.length - 1)) % (sectionimgs.length - 1);
    let previmgindex = currentimgindex,
        prevtimg = sectionimgs[previmgindex],
        previmgsrc = prevtimg.getAttribute("src");

    updateindicators();
    updateimg(previmgsrc);
})

popuplist.forEach(function (popupindicator, currentindicatorindex) {
    popupindicator.addEventListener("click", function () {
        let newimg = sectionimgs[currentindicatorindex],
            newimgsrc = newimg.getAttribute("src");
        currentimgindex = currentindicatorindex;
        updateimg(newimgsrc);
        updateindicators();
    })
})































