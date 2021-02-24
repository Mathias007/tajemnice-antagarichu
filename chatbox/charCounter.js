let messageMaxLength = document.formulaire.req_message.getAttribute(
    "maxlength"
);
function charCounter(number) {
    let charLeftSpan = document.getElementById("char-left");
    if (!charLeftSpan) {
        charLeftSpan = createElement("span");
        charLeftSpan.id = "char-left";
        charLeftSpan.textContent = `Pozostało ${number} znaków.`;
        document.formulaire.appendChild(charLeftSpan);
    } else {
        charLeftSpan.textContent = `Pozostało ${number} znaków.`;
    }
}

charCounter(messageMaxLength);

function showResultOfSubstraction() {
    let substract =
        messageMaxLength - document.formulaire.req_message.value.length;
    charCounter(
        substract <= 0 ? '<span style="color:red;>0</span>' : substract
    );
}

document.formulaire.req_message.onkeyup = showResultOfSubstraction();
