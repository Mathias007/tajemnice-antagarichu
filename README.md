# Tajemnice Antagarichu Refactored

## Adres witryny (preview): http://herosy3.pun.pl

### Wprowadzenie.

Projekt polegający na wdrożeniu na forum Tajemnice Antagarichu najnowszych technologii i praktyk frontendowych.

Tajemnice Antagarichu to forum powstałe w **2006** roku, oparte na silniku **PunBB**. Przez lata było ono rozwijane z nastawieniem na treść, jednak w związku z brakiem bezpośredniego dostępu do kodu strony możliwości jego modyfikacji były ograniczone i wiązały się z licznymi niedogodnościami. W 2018 roku podjęto decyzję o zawieszeniu działalności forum w związku z brakiem pomysłów na dalszy rozwój.

W związku z rozwojem umiejętności programistycznych w następnych latach, w lutym 2021 roku postanowiłem wdrożyć liczne zmiany w kodzie starego forum. Opieram się na kilku podstawowych dyrektywach: `semantyczny HTML`, `responsywny layout`, `nowoczesny wygląd elementów`, `skrypty js uwzględniające standard ES6+` oraz `poprawa wydajności`.

Już pobieżna analiza kodu forum doprowadziła mnie do wniosku, że aby osiągnąć powyższe efekty, pracy będzie niemało :-).

## Przebieg prac _od 15 do 21 marca 2021 r._

### 1. Refaktoryzacja, optymalizacja i rozwój kluczowych podstron (HTML, CSS, JavaScript)

-   [Sala Tronowa](http://www.herosy3.pun.pl/page.php?id=1443) - zawierająca jak dotychczas sekcję wprowadzającą, kontakt oraz grafiki reklamowe (`Flexbox`, `inline styles/attributes` - w przypadku kodu grafik reklamowych);
-   [Komnata Prestiżu](http://www.herosy3.pun.pl/page.php?id=5191) - obejmująca wprowadzenie oraz sekcję rang z opisami (`Grid`, `@media`);
-   [Hala Sław](http://www.herosy3.pun.pl/page.php?id=2025) - po wprowadzeniu zawierająca `dynamicznie generowaną tabelę` najlepszych użytkowników (`@media`, `pseudoclasses`, `Flexbox`);
-   [Prawo](http://www.herosy3.pun.pl/misc.php?action=rules) - przebudowa w celu zastosowania `list numerowanych` (**wymaga usprawnień**).
    Linki do podstron dodano do głównego **menu** forum.

### 2. Dbałość o czystość kodu:

-   Poprawki w Footerze (HTML, CSS), wyczyszczenie dolnego Footera (defaultowego);
-   Oczyszczenie styli z pustych selektorów, dodanie komentarzy;
-   Oczyszczenie skryptów JS. Aktualizacja manifestu.

### 3. Aktualizacja i uzupełnienie dodatkowych styli. Usprawnienie wczytywania CSS.

Na początku przebudowy forum wprowadziłem za pomocą skryptu JS podmianę źródła stylu Mercury na własną. Dzięki temu mogłem modyfikować kod stylu w sposób niejako bezpośredni. Niestety, z uwagi na specyfikę JavaScript (w szczególności jednowątkowość) i tak najpierw na chwilę musiał się wczytać oryginalny kod ze ścieżką do stylu, a dopiero potem następowała podmiana. Taki stan rzeczy opóźniał ładowanie się strony, w związku z tym od początku był on jedynie tymczasowy.

Finalnie wszystkie zmiany oryginalnych stylu forum zostały umieszczone i rozbudowane w ramach pola **Dodatkowy CSS**, dostępnego w Panelu Administratora. Nie jest to może technika optymalna z punktu widzenia współczesnych praktyk i raczej wyklucza np. stosowanie metodologii BEM, jednak działa w taki sposób, jakiego oczekiwałem. Style się ładują prawidłowo i są znacznie bardziej estetyczne niż przestarzały oryginał Mercury.

### 4. Usprawnienie ręcznych list subforów (dot. Archiwum i Parlamentu).

Drobna modyfikacja, polegająca na poprawie kodu HTML i dodaniu CSS do list z subforami. Z uwagi na mankament tej wersji PunBB subfora muszą być ujmowane w ramach ręcznie pisanych list, a posty i tematy nie dodają się do sum wypisanych przy głównym dziale, do którego zostały przyporządkowane. Z tego też względu stosowane są jedynie w celach archiwizacyjnych.

### 5. Optymalizacja ustawień forum:

-   Podgląd tematu: 15 postów -> 10 postów;
-   Tematów na stronę: 100 tematów -> 20 tematów;
-   Postów na stronę: 20 postów -> 10 postów;
-   aktualizacja słów kluczowych;
-   usunięcie kategorii galerii (nieużywanej).

### 6. Dodanie skompresowanych plików graficznych w nowoczesnym formacie `.webp`.

### Dotychczasowe efekty.

Według **Google Search Console** dzięki ostatnim wysiłkom udało się wyeliminować wszystkie wady URL'ów w wersji forum `na komputery` (23 luty - 75 adresów URL `słabej` jakości (przy 0 dobrej); 20 marca - 74 adresy URL `dobrej` jakości (przy 0 słabej).
Niestety, w dalszym ciągu **do poprawy** pozostaje wersja forum na urządzenia `mobilne`. Od strony estetyki jest już znaczniej lepiej, jednak wciąż wersja mobilna nie jest optymalna z perspektywy podstawowych wskaźników internetowych GSC. Konieczne będzie m. in. zaimplementowanie globalnych `media queries` oraz `meta viewport`.

Poprawie uległy także wskaźniki **Google PageSpeed Insights**. Wersja `na komputery` uzyskuje już od `85 do nawet 92 punktów`. Ponownie gorzej wypada wersja `mobilna` - `od 28 do 34 punktów`, choć i tu wskaźnik wzrósł o kilka punktów. Konieczne będzie przeanalizowanie kodu CSS i JavaScript celem możliwości ewentualnej `optymalizacji ładowania`.

Spośród najważniejszych podstron forum udało się już zrefaktoryzować prawie wszystkie, poza Pręgierzem. Archiwalne wersje podstron (Komnata Pamięci, Komnata Poezji, Regulamin 2.00) zostaną zaopatrzone w odnośniki do wersji aktualnych.

## PROJEKT POBOCZNY - Komnata Pamięci (prace zasadnicze _od 11 marca do 15 marca 2021 r._)

W toku prac nad przebudową Komnaty Pamięci (które rozpocząłem w dniu 8 marca 2021 r.), tj. sekcji poświęconej historii forum i społeczności, zdecydowałem się na wyodrębnienie jej do odrębnego repozytorium i uczynienie zeń projektu pobocznego związanego z refactoringiem Tajemnic Antagarichu. Pierwotnie planowałem po prostu przebudowę kodu, jednak finalnie zdecydowałem się uczynić z Komnaty Pamięci małą aplikację webową :-).

### Adres witryny (preview): https://egildia.pl/forum/historia

### Prace śledzić można w repozytorium [Komnaty Pamięci](https://github.com/Mathias007/komnata-pamieci)

## Przebieg prac _od 23 lutego do 7 marca 2021 r._

### 1. Forum - zmiany generalne.

-   przebudowa sekcji **Logo** z użyciem skryptu (`logo.js`),

-   import własnej wersji stylu **Mercury** (`importStyleSheet.js`) -> rozwiązanie jeszcze nieoptymalne,

-   unowocześnienie stylu css forum, modyfikacja poszczególnych elementów widoku, z wykorzystaniem w szczególności **jednostek relatywnych (rem), zmiennych css (var), border-radius, box-shadow, pseudoklasy hover oraz google-fonts**,

-   dodanie styli dla sekcji z **reklamami** (skoro już są, to niech chociaż nie psują widoku),

-   nowy skrypt przełączania widoczności kategorii forum oraz ogłoszenia po kliknięciu na odpowiedni nagłówek (`toggleVisibility.js`) - wykorzystanie **Font Awesome**,

-   implementacja nowego **favicona** z wersjami dla urządzeń mobilnych (`favicon.js`),

-   nowy skrypt dla customizacji nazw **nawigacji** (`navigation.js`) oraz poprawienie wyglądu tej sekcji w css,

-   nowy skrypt **alertu** o nowej wiadomości prywatnej (`messageAlert.js`)

-   zapewnienie responsywności (**media queries**),

-   **dodatkowe style css** - znaczne zmiany związane z ww. usprawnieniami, a także oczyszczenie kodu ze śmieci, wyodrębnienie css dla ChatBoxa oraz ikon (**@import** `chatbox.css`, `icons.css`),

-   dodanie własnego **scrollbara** (`scrollbar.css`),

-   wgranie **skompresowanej** wersji logo oraz niektórych obrazów widocznych na forum (proces ten będzie kontynuowany).

### 2. Skrypty.

-   wyodrębnione do oddzielnych plików (`textTools.js`, `googleAnalytics.js`),

-   **refactoring** kodu,

-   nowe wersje (z wykorzystaniem najnowszych technik JS),

-   eliminacja jQuery.

### 3. Stopka.

-   **refaktoryzacja** kodu HTML,

-   refaktoryzacja kodu CSS w odrębnym pliku (`footer.css`),

-   modyfikacja kodu CSS w oparciu o m. in. **Grid, Flexbox, zmienne, Google Fonts**,

-   responsywność (**media queries**),

-   nowy skrypt **cytatów** użytkowników (`quotes.js`),

-   importy skryptów w odpowiednim porządku.

### 4. Ogłoszenie.

-   **refaktoryzacja** kodu HTML,

-   refaktoryzacja kodu CSS w odrębnym pliku, modyfikacja - **Flexbox, zmienne, Google Fonts** (`welcome.css`),

-   przeniesienie skryptów do stopki,

-   nowy skrypt porad karczmarza (`advices.js`).

### 5. Chatbox.

-   modyfikacja i oczyszczenie dodatkowego kodu HTML,

-   przebudowa infoBoxa z użyciem **Font Awesome**,

-   nowy skrypt liczenia znaków (`charCounter.js`).

### 6. Zasady (sekcja regulaminu).

-   refaktoryzacja kodu HTML,

-   refaktoryzacja kodu CSS w odrębnym pliku (`rules.css`).

### 7. Inne - przegląd dodatkowych podstron.

#### a) zakwalifikowano do refactoringu:

-   wszystkie (łącznie 12) związane z Komnatą Pamięci i Historią Forum (wartościowy content pamiątkowy),

-   Sala Tronowa,

-   Komnata Prestiżu,

-   Hala Sław,

-   Pręgierz.

#### b) usunięte natomiast zostały:

-   Galeria - Might & Magic Heroes VI,

-   Galeria - King's Bounty: Nowe Światy,

-   Galeria - Heroes of Might & Magic III,

-   Galeria - H3: In the Wake of Gods,

-   Komnata Sztuki,

-   Komnata Podróżnika,

-   Pałac (podstrona archiwalna),

-   Komnata Kartografów,

-   Źródła animacji.

W zasadzie były one już i tak nielinkowane dla użytkowników, jednak wyszukiwarki w dalszym ciągu je odnajdywały i obniżały ogólną ocenę forum w związku ze znajdującymi na nich (kiepskimi) kodami.

#### c) prawdopodobnie na dalszym etapie usunięte zostaną Komnata Poezji oraz związane z nią podstrony poszczególnych utworów (19), ponieważ zostały już one w całości zaimportowane na eGildię Graczy w 2017 roku.

#### d) Podstrona Regulamin v. 2.00 oraz Linki (do stron dozwolonych) być może zostaną zachowane dla celów archiwizacyjnych - decyzja na ten temat jeszcze zapadnie.

### 8. Na dalszym etapie także (_poza ww. refactoringiem podstron_):

-   [ ] umieścić **widget Discorda do kanału Horn of the Abbys** w stopce,

-   [x] poprawić odstępy oraz wielkość czcionek w stopce,

-   [x] znaleźć sposób na modyfikację dolnej stopki (nieaktywny RSS, wersja lo-fi itd.),

-   [x] skompresować pozostałe grafiki znajdujące się na stronie głównej forum,

-   [ ] poprawić style ChatBoxa oraz rozważyć zmiany w ikonach (większe?),

-   [x] zrefaktoryzować pozostałe skrypty (w miarę możliwości), w tym zweryfikować połączenie z Google Analytics,

-   [x] usprawnić pobieranie głównego pliku styli,

-   [ ] rozważyć asynchroniczne wczytywanie niektórych skryptów dla poprawy wydajności,

-   [ ] wdrożyć **uwagi Google w celu maksymalnej optymalizacji forum**, zwłaszcza dla potrzeb urządzeń mobilnych,

-   [x] usprawnić to Readme.
