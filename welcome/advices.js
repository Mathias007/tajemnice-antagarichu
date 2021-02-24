const advicesContainer = document.querySelector("#advices-container");

const advices = [
    'Pikinierzy są odporni na szarżę czempionów.',
    'Kawalerzystów można darmowo ulepszyć w stajniach.',
    'Słyszałem, że Minotaurom nigdy nie brakuje morale.',
    'Podobno Strzelcy są tak dobrzy, że podczas strzału zawsze trafiają z pełna siłą bez względu na przeszkody czy odległość.',
    'Słyszałem, że są bohaterowie, którzy specjalizują się w stworzeniach 7 poziomu.',
    'Chłop może być całkiem użyteczny, jeśli posiada się szkieletornię.',
    'Od oplątania drzewców nie można się uleczyć.',
    'Mnogość oddziałów nie zmienia ich statystk bojowych.',
    'Mając identyczną szybkość najszybszych jednostek atakuj, by zacząć bitwę.',
    'Klon bez swego pierwowzoru nie może istnieć.',
    'Żywiołaki Burzy wbrew pozorom słabo walczą wręcz.',
    'Czarci Lord wykorzystuje 50 punktów życia z utraconego oddziału do przyzwania Demona.',
    'Smocze Ważki niwelują antymagię.',
    'Tarcza Ifryta nie oddaje obrażeń za ich nadmiar w stosunku do punktów życia Ifryta.',
    'Gdy ze zdolności nekromancja otrzymujemy Kościeje, czyli ulepszone Szkielety, mamy ich o 1/3 mniej.',
    'Gildia złodziei jest przyjacielem każdego i nikogo.',
    'Podczas bitwy upiorne i kościane smoki sieją strach i przerażenie w szeregach przeciwników.',
    'Widziałem, jak podczas bitwy anioły wskrzeszały poległych.',
    'Strzeż się Kreegan przynoszących podarki.',
    'Im więcej tym lepiej, szczególnie gdy więcej liczy się w tysiącach.',
    'Chowańce będą wysysać manę z rzuconych przez ciebie zaklęć i przekazywać ją swojemu dowódcy.',
    'Jeżeli chcesz szybko zdobyć miasto weź ze sobą kilku cyklopów. Szybko zniszczą mury miasta.',
    'Vori to nacja odizolowana od reszty świata.',
    'O tej porze roku woda wokół wyspy Vori zamarza.',
    'Słyszałem,iż na cześć bohatera,który przyniesie Graala,mieszkańcy Lochu wezwą strażnika ziemi.',
    'Chaos jest najlepszym przyjacielem władcy.',
    'Ifryty sułtańskie chronią się za tarczą ognia.',
    'Jeżeli chcesz ochronić się przed zaklęciami, stań w pobliżu jednorożca.',
    'Tytani to najpotężniejsi mieszkańcy fortecy.',
    'Słyszałem,że bohaterowie mogą podróżować pomiędzy miastami Inferno nie ruszając się z miejsca.',
    'W niektórych Twierdzach znajdują się tunele, przez które można uciec z oblężonego miasta.',
    'Magogi wystrzeliwują ogniste kule spalające cel i jego otoczenie.',
    'Zawsze dobrze chroń swych strzelców podczas bitwy.',
    'Szczęście opuszcza każdego, kto napotka diabły.',
    'Korzenie entów powstrzymują ataki przeciwników.',
    'Obecność magów w armii jest podwójnie korzystna - oprócz udziału w walce oferują porady, dzięki którym zaoszczędzisz many podczas rzucania zaklęć.',
    'Pegazi jeźdźcy posiadają specyficzną zdolność zwiększania kosztu zaklęć przeciwnika podczas walki. Wykorzystaj to!',
    'Władcy, bohaterowie nighońskich Lochów, nie potrafią nauczyć się magii wody. Z kolei Władcy Bestii z Tatalii odrzucają kanon ognia.',
    'O wzajemnej nienawiści aniołów i diabłów wiedzą wszyscy. A czy słyszałeś, że Tytani i Czarne Smoki dostają furii, gdy tylko się zobaczą?',
    'Nekromanta Sandro uczynił władcą Deyji niejakiego Phineasa Vilmara, myśląc, że ten stanie się jego marionetką. Jednak Vilmar nie był głupi i wtrącił swojego patrona do więzienia. Bądź rozważny w polityce!',
    'Magia śmierci to tak przerażająca dziedzina, że nikt poza nieumarłymi bohaterami jej nie praktykuje. No, chyba że odwiedzisz jakąś szaloną wiedźmę w jej chacie.',
    'Układanka Inferno składa się z jednego puzzla więcej, niż w przypadku innych zamków.'
];

let randomAdvice;

const generateRandomAdvice = () => {
    let index = Math.floor(Math.random() * advices.length);


    randomAdvice = document.createElement("p");
    randomAdvice.classList.add("advice__text");
    randomAdvice.innerHTML = `<span>Właściciel karczmy szepcze Ci do ucha:</span> ${advices[index]}`;
    
    advicesContainer.appendChild(randomAdvice);

};

generateRandomAdvice();
