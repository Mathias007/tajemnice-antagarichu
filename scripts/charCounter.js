let messageMaxLength = document.formulaire.req_message.getAttribute(
    "maxlength"
);
function charCounter(number) {
    let charLeftSpan = document.getElementById("char-left");
    if (!charLeftSpan) {
        charLeftSpan = document.createElement("span");
        charLeftSpan.id = "char-left";
        charLeftSpan.innerHTML = `Pozostało ${number} znaków.`;
        document.formulaire.appendChild(charLeftSpan);
    } else {
        charLeftSpan.textContent = `Pozostało ${number} znaków.`;
    }
}

charCounter(messageMaxLength);

function showResultOfSubstraction() {
    let substract =
        messageMaxLength - document.formulaire.req_message.value.length;
    charCounter(substract);
}

document.formulaire.req_message.setAttribute(
    "onkeyup",
    "showResultOfSubstraction()"
);
