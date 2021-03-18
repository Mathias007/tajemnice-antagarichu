const navigationElements = document.querySelectorAll("#brdmenu > ul > li");

navigationElements.forEach((element) => {
    let link = element.querySelector("a");
    const navPrefix = "nav";

    switch (element.id) {
        case `${navPrefix}index`:
            link.textContent = "Miasto";
            break;

        case `${navPrefix}forums`:
            link.textContent = "Miasto";

        case `${navPrefix}userlist`:
            link.textContent = "Obywatele";
            break;

        case `${navPrefix}rules`:
            link.textContent = "Prawo";
            break;

        case `${navPrefix}search`:
            link.textContent = "Szukaj";
            break;

        case `${navPrefix}admin`:
            link.textContent = "Władza";
            link.style.color = "red";
            break;

        case `${navPrefix}pm`:
            link.textContent = "Wiadomości";
            break;

        case `${navPrefix}login`:
            link.textContent = "Zamelduj";
            break;

        case `${navPrefix}logout`:
            link.textContent = "Wymelduj";
            break;

        case `${navPrefix}profile`:
            link.textContent = "Wizerunek";
            break;

        default:
            break;
    }
});
