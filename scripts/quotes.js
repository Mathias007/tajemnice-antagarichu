const quotesContainer = document.querySelector("#quotes-container");

const users = [
    {
        name: "Sauron",
        profileId: "369",
        avatarFormat: "jpg",
        quote:
            "Jak chcesz coś zrobić, to po prostu to zrób... Tylko ty masz władzę, by spełnić swoje pragnienia.",
    },
    {
        name: "Asiņains",
        profileId: "118",
        avatarFormat: "png",
        quote:
            "Fight for those you have lost and for those you do not want to lose.",
    },
    {
        name: "Mathias",
        profileId: "2",
        avatarFormat: "jpg",
        quote: "Ambicja władania nad duszami jest najsilniejszą z namiętności.",
    },
    {
        name: "Xeno",
        profileId: "420",
        avatarFormat: "png",
        quote: "Głowa bez pamięci to twierdza bez garnizonu.",
    },
    {
        name: "GiBoN",
        profileId: "441",
        avatarFormat: "gif",
        quote:
            "Żyjesz tu, teraz. Hic et nunc. Masz jedno życie, jeden punkt. Co zdążysz zrobić, to zostanie, choćby ktoś inne mógł mieć zdanie.",
    },
    {
        name: "Cohen",
        profileId: "123",
        avatarFormat: "jpg",
        quote: "Nihil Novi Sub a Sole.",
    },
    {
        name: "Deferdus",
        profileId: "895",
        avatarFormat: "png",
        quote: "Odwaga to nie brak strachu, a panowanie nad strachem.",
    },
    {
        name: "Markham",
        profileId: "1271",
        avatarFormat: "png",
        quote: "Człowiekiem jestem i nic, co ludzkie, nie jest mi obce.",
    },
    {
        name: "Olórin",
        profileId: "502",
        avatarFormat: "jpg",
        quote:
            "Nie jest ważne jak mocno bijesz, liczy się ile jesteś w stanie znieść i nadal podążać do celu.",
    },
    {
        name: "Lowcakur",
        profileId: "621",
        avatarFormat: "jpg",
        quote:
            "Bądź uważny i pilnuj, aby nigdy nie zaskoczyła cię kura. Stąpaj po równym szlaku, unikaj miejsc zaciemnionych, ponieważ w nich, kury przebywają najczęściej.",
    },
    {
        name: "Eleazar",
        profileId: "290",
        avatarFormat: "png",
        quote: "Nie szukaj szczęścia, samo Cię odszuka.",
    },
];

let userAvatar;
let userLink;
let userQuote;

const generateRandomUserQuote = () => {
    let index = Math.floor(Math.random() * users.length);
    console.log(index);

    const { name, profileId, avatarFormat, quote } = users[index];

    userAvatar = document.createElement("img");
    userAvatar.classList.add("users-quote__avatar", "footer-table__image");
    userAvatar.setAttribute("alt", name);
    userAvatar.setAttribute(
        "src",
        `http://www.herosy3.pun.pl/_fora/herosy3/avatars/${profileId}.${avatarFormat}`
    );

    userLink = document.createElement("a");
    userLink.classList.add("users-quote__link");
    userLink.setAttribute(
        "href",
        `http://www.herosy3.pun.pl/profile.php?id=${profileId}`
    );

    userLink.appendChild(userAvatar);
    quotesContainer.appendChild(userLink);

    userQuote = document.createElement("p");
    userQuote.classList.add("users-quote__text");
    userQuote.textContent = users[index].quote;

    quotesContainer.appendChild(userQuote);
};

generateRandomUserQuote();
