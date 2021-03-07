// // Add Initial scale
// const viewportMeta = document.createElement("meta");
// viewportMeta.name = "viewport";
// viewportMeta.content = "width=device-width, initial-scale=1";

// document.querySelector("head").appendChild(viewportMeta);

// Change default Mercury stylesheet on the own one
const styleSheet = document.querySelector('link[href="style/Mercury.css"]');

console.log(styleSheet);

styleSheet.setAttribute(
    "href",
    "https://egildia.pl/forum/styles/mercury/Mercury.css"
);

// Add classess for the advertisement box
const advEl = document.querySelector("#announce + div");
console.log(advEl);

advEl.removeAttribute("style");
advEl.classList.add("block", "advertisement");

// Remove adv class from admin panel
const adminConsole = document.getElementById("adminconsole");
adminConsole.classList.remove("advertisement");
