# Tajemnice Antagarichu Refactored

## Adres witryny (preview): http://herosy3.pun.pl

### Wprowadzenie.

Projekt polegający na wdrożeniu na forum Tajemnice Antagarichu najnowszych technologii i praktyk frontendowych.

Tajemnice Antagarichu to forum powstałe w **2006** roku, oparte na silniku **PunBB**. Przez lata było ono rozwijane z nastawieniem na treść, jednak w związku z brakiem bezpośredniego dostępu do kodu strony możliwości jego modyfikacji były ograniczone i wiązały się z licznymi niedogodnościami. W 2018 roku podjęto decyzję o zawieszeniu działalności forum w związku z brakiem pomysłów na dalszy rozwój.

W związku z rozwojem umiejętności programistycznych w następnych latach, w lutym 2021 roku postanowiłem wdrożyć liczne zmiany w kodzie starego forum. Opieram się na kilku podstawowych dyrektywach: `semantyczny HTML`, `responsywny layout`, `nowoczesny wygląd elementów`, `skrypty js uwzględniające standard ES6+` oraz `poprawa wydajności`.

Już pobieżna analiza kodu forum doprowadziła mnie do wniosku, że aby osiągnąć powyższe efekty, pracy będzie niemało :-).

## Dotychczasowy przebieg prac (_od 23 lutego do 7 marca 2021 r._)

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

-   umieścić **widget Discorda do kanału Horn of the Abbys** w stopce,

-   poprawić odstępy oraz wielkość czcionek w stopce,

-   znaleźć sposób na modyfikację dolnej stopki (nieaktywny RSS, wersja lo-fi itd.),

-   skompresować pozostałe grafiki znajdujące się na stronie głównej forum,

-   poprawić style ChatBoxa oraz rozważyć zmiany w ikonach (większe?),

-   zrefaktoryzować pozostałe skrypty (w miarę możliwości), w tym zweryfikować połączenie z Google Analytics,

-   usprawnić pobieranie głównego pliku styli,

-   rozważyć asynchroniczne wczytywanie niektórych skryptów dla poprawy wydajności,

-   wdrożyć **uwagi Google w celu maksymalnej optymalizacji forum**, zwłaszcza dla potrzeb urządzeń mobilnych,

-   usprawnić to Readme.
