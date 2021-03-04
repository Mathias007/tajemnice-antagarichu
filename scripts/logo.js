const titleEl = document.getElementById("brdtitle");
const logoData = {
    aHref: "forums.php",
    imgSrc: "https://egildia.pl/forum/ta-logo2.png",
    alt:
        "Tajemnice Antagarichu | Heroes of Might and Magic 1, 2, 3, 4, 5, 6, 7 Forum",
};
titleEl.innerHTML = `<div class="forum-logo-container"><a href="${logoData.aHref}"><img class="forum-logo" src="${logoData.imgSrc}" alt="${logoData.alt}"></a></div>`;
