// Add Initial scale
// const viewportMeta = document.createElement("meta");
// viewportMeta.name = "viewport";
// viewportMeta.content = "width=device-width, initial-scale=1";

// document.querySelector("head").appendChild(viewportMeta);

// Change default Mercury stylesheet on the own one
// const styleSheet = document.querySelector('link[href="style/Mercury.css"]');

// console.log(styleSheet);

// styleSheet.setAttribute(
//     "href",
//     "https://egildia.pl/forum/styles/mercury/Mercury.css"
// );

// Add <link rel=preload> of base.css and Mercury_cs.css
const baseCssLink = document.createElement("link");
baseCssLink.rel = "preload";
baseCssLink.as = "style";
baseCssLink.href = "style/imports/base.css";

const mercuryAddCssLink = document.createElement("link");
mercuryAddCssLink.rel = "preload";
mercuryAddCssLink.as = "style";
mercuryAddCssLink.href = "style/imports/Mercury_cs.css";

document.querySelector("head").append(baseCssLink, mercuryAddCssLink);

// Add classess for the advertisement box
const advEl = document.querySelector("#announce + div");
if (advEl) {
    advEl.removeAttribute("style");
    advEl.classList.add("block", "advertisement");
}

// Remove adv class from admin panel
const adminConsole = document.getElementById("adminconsole");
adminConsole ? adminConsole.classList.remove("advertisement") : null;
