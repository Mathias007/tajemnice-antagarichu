const newMessageLink =
    document.querySelector("#punforums.pun li.pmlink") ||
    document.querySelector("#punindex.pun li.pmlink");

if (newMessageLink) {
    alert(
        "Uwaga! Przybyła nowa wiadomość na twoją prywatną skrzynkę. Koniecznie przejrzyj pocztę!"
    );
}
