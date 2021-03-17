const tableBody = document.getElementById("tableBody");

const bestUsers = [
    {
        position: "1",
        positionChange: "+3",
        username: "Sauron",
        userID: "369",
        rank: "Generał",
        points: "39",
        pointsChange: "+11",
        quote:
            "Jak chcesz coś zrobić, to po prostu to zrób... Tylko ty masz władzę, by spełnić swoje pragnienia.",
    },
    {
        position: "2",
        positionChange: "+4",
        username: "Xeno",
        userID: "420",
        rank: "Tatalijski szatan",
        points: "36",
        pointsChange: "+14",
        quote: "Głowa bez pamięci to twierdza bez garnizonu.",
    },
    {
        position: "3",
        positionChange: "=",
        username: "Asiņains",
        userID: "118",
        rank: "Heros",
        points: "36",
        pointsChange: "+4",
        quote:
            "Fight for those you have lost and for those you don't want to lose.",
    },
    {
        position: "4",
        positionChange: "-3",
        username: "GiBoN",
        userID: "441",
        rank: "Generał",
        points: "33",
        pointsChange: "=",
        quote:
            "Żyjesz tu, teraz. Hic et nunc. Masz jedno życie, jeden punkt. Co zdążysz zrobić, to zostanie, choćby ktoś inne mógł mieć zdanie.",
    },
    {
        position: "5",
        positionChange: "-2",
        username: "Eleazar",
        userID: "290",
        rank: "Obywatel",
        points: "31",
        pointsChange: "=",
        quote: "Nie szukaj szczęścia, samo Cię odszuka.",
    },
    {
        position: "6",
        positionChange: "=",
        username: "Cohen",
        userID: "123",
        rank: "Hetman",
        points: "25",
        pointsChange: "+3",
        quote: "Nihil Novi Sub a Sole.",
    },
    {
        position: "7",
        positionChange: "+4",
        username: "Deferdus",
        userID: "895",
        rank: "Tropiciel",
        points: "25",
        pointsChange: "+13",
        quote: "Odwaga to nie brak strachu, a panowanie nad strachem.",
    },
    {
        position: "8",
        positionChange: "debiut",
        username: "Markham",
        userID: "1271",
        rank: "Rekrut",
        points: "25",
        pointsChange: "debiut",
        quote: "Człowiekiem jestem i nic, co ludzkie, nie jest mi obce.",
    },
    {
        position: "9",
        positionChange: "=",
        username: "Olórin",
        userID: "502",
        rank: "Generał",
        points: "17",
        pointsChange: "+2",
        quote:
            "Nie jest ważne jak mocno bijesz, liczy się ile jesteś w stanie znieść i nadal podążać do celu.",
    },
    {
        position: "10",
        positionChange: "-2",
        username: "Lowcakur",
        userID: "621",
        rank: "Rekrut",
        points: "13",
        pointsChange: "=",
        quote:
            "Bądź uważny i pilnuj, aby nigdy nie zaskoczyła cię kura. Stąpaj po równym szlaku, unikaj miejsc zaciemnionych, ponieważ w nich, kury przebywają najczęściej.",
    },
];

function generateFameTable(data) {
    data.map((user, index) => {
        const {
            position,
            positionChange,
            username,
            userID,
            rank,
            points,
            pointsChange,
            quote,
        } = user;

        const userProfilePath = "http://www.herosy3.pun.pl/profile.php?id=";
        const userReputationPath =
            "http://www.herosy3.pun.pl/reputation.php?uid=";
        const rowElement = document.createElement("tr");

        rowElement.innerHTML = `<td>${position}. (${positionChange})</td> <td><a href="${userProfilePath}${userID}">${username}</a></td> <td>${rank}</td> <td><a href="${userReputationPath}${userID}">${points} (${pointsChange})</a></td> <td>${quote}</td>`;

        console.log(rowElement);
        tableBody.appendChild(rowElement);
    });
}

generateFameTable(bestUsers);
