# Zmienne

Przez większość czasu, aplikacja napisana w JavaScript musi działać na informacjach. Poniżej dwa przykłady:
1. Sklep online -- dane mogą zawierać informacje o sprzedawanych produktach lub koszyku zakupów.
2. Aplikacja do czatu -- dane mogą zawierać użytkowników, wiadomości i wiele więcej.

Zmienne służą do przechowywania tych danych.

## Zmienna

[Zmienna](https://pl.wikipedia.org/wiki/Zmienna_(informatyka)) jest "nazwanym magazynem" dla danych. Możemy użyć zmiennych do przechowywania odwiedzających i innych danych.

Aby utworzyć zmienną w JavaScript, użyj słowa kluczowego `let`.

Kod poniżej tworzy (lub mówiąc inaczej: *deklaruje* lub *definiuje*) zmienną o nazwie "message":

```js
let message;
```

Teraz możemy przypisać do niej jakieś dane używając operatora przypisania `=`:

```js
let message;

*!*
message = 'Witaj'; // przechowaj ciąg znaków
*/!*
```

Ciąg znaków jest teraz zapisany do obszaru pamięci powiązanej ze zmienną. Możemy uzyskać do niego dostęp używając nazwy zmiennej:

```js run
let message;
message = 'Witaj!';

*!*
alert(message); // pokazuje zawartość zmiennej
*/!*
```

Dla zwięzłości możemy połączyć deklarację zmiennej wraz z przypisaniem danych w pojedynczą linię:

```js run
let message = 'Witaj!'; // zdefiniuj zmienną i przypisz wartość

alert(message); // Witaj!
```

Możemy też zadeklarować wiele zmiennych w jednej linii:

```js no-beautify
let user = 'Jan', age = 25, message = 'Witaj';
```

Może wydawać się to bardziej zwięzłe, ale nie polecamy tego podejścia. W trosce o lepszą czytelność, używaj pojedynczej linii dla każdej zmiennej.

Wielowierszowa wersja jest trochę dłuższa, ale łatwiejsza do przeczytania:

```js
let user = 'Jan';
let age = 25;
let message = 'Witaj';
```

Niektórzy ludzie definiują wiele zmiennych w tym stylu:
```js no-beautify
let user = 'Jan',
  age = 25,
  message = 'Witaj';
```

...Lub nawet w stylu "comma-first":

```js no-beautify
let user = 'Jan'
  , age = 25
  , message = 'Witaj';
```

Wszystkie powyższe przykłady działają tak samo. Wybór zależy od osobistego gustu i estetyki.


````smart header="`var` zamiast `let`"
W starszych skryptach możesz napotkać słowo kluczowe: `var` zamiast `let`:

```js
*!*var*/!* message = 'Witaj';
```

Słowo kluczowe `var` jest *prawie* identyczne jak `let`. Ono również deklaruje zmienną, lecz w nieco inny, "oldschoolowy", sposób.

Są delikatne różnice pomiędzy `let` i `var` ale nie mają one dla nas jeszcze znaczenia. 
There are subtle differences between `let` and `var`, but they do not matter for us yet. Omówimy je szczegółowo w rozdziale <info:var>.
````

## Analogia do życia

Możemy łatwo pojąć pojęcie "zmiennej", jeśli wyobrazimy sobie ją jako "pudełko" na dane z naklejką o unikalnej nazwie.

Na przykład, zmienną `message` możemy wyobrazić sobie jako pudełko z etykietą `"message"` z wartością `"Witaj!"` wewnątrz:

![](variable.png)

Możemy umieścić jakąkolwiek wartość w pudełku.

Możemy też zmienić tę wartość tak wiele razy, jak chcemy:
```js run
let message;

message = 'Witaj!';

message = 'Świecie!'; // wartość zmieniona

alert(message);
```

Kiedy wartość jest zmieniona, stare dane są usuwane ze zmiennej:

![](variable-change.png)

Możemy też zadeklarować dwie zmienne i skopiować dane z jednej do drugiej.

```js run
let hello = 'Witaj świecie!';

let message;

*!*
// skopiuj 'Witaj świecie!'z hello do message
message = hello;
*/!*

// teraz obydwie zmienne przechowują te same dane
alert(hello); // Witaj świecie!
alert(message); // Witaj świecie!
```

```smart header="Języki funkcyjne"
Warto zauważyć, że istnieją języki programowania [funkcyjne](https://pl.wikipedia.org/wiki/Programowanie_funkcyjne), jak [Scala](http://www.scala-lang.org/) czy [Erlang](http://www.erlang.org/), które zabraniają zmiany wartości zmiennych.
W takich językach, gdy wartość jest przechowywana "w pudełku" to pozostaje tam na zawsze. Jeśli musimy przechować coś innego, język zmusza nas do utworzenia nowego pudełka (zadeklarowania nowej zmiennej). Nie możemy ponownie użyć starego.

Choć na pierwszy rzut oka może się to wydawać trochę dziwne, te języki są dość zdolne do poważnego developmentu. Co więcej, istnieją obszary takie jak obliczenia równoległe, w których to ograniczenie daje pewne korzyści. Nauka takiego języka jest zalecana (nawet jeśli nie planujesz go używać wkrótce), aby rozwinąć umysł.
```

## Nazywanie zmiennych [#variable-naming]

Istnieją dwa ograniczenia dla nazw zmiennych w JavaScript:

1. Nazwa musi zawierać tylko liczby, cyfry, lub symbole `$` i `_`.
2. Pierwszy znak nie może być cyfrą.

Przykłady poprawnych nazw:

```js
let userName;
let test123;
```

Kiedy nazwa zawiera wiele wyrazów, [camelCase](https://pl.wikipedia.org/wiki/CamelCase) jest często używany. To jest: słowa następują jedno po drugim, gdzie każde słowo poza pierwszym zaczyna się z wielkiej litery: `myVeryLongName`.

Co ciekawe - znak dolara `'$'` i znak podkreślenia `'_'` mogą być również używane w nazwach. Są to zwykłe symbole, podobnie jak litery, bez specjalnego znaczenia.

Te nazwy są poprawne:

```js run untrusted
let $ = 1; // deklaruje zmienną o nazwie "$"
let _ = 2; // a teraz zmienną o nazwie "_"

alert($ + _); // 3
```

Przykłady niepoprawnych nazw:

```js no-beautify
let 1a; // nie może zaczynać się cyfrą

let my-name; // myślniki '-' nie są dozwolone
```

```smart header="Wielkość liter ma znaczenie"
Zmienne nazwane `apple` i `AppLE` są dwiema różnymi zmiennymi.
```

````smart header="Litery inne niż łacińskie są dozwolone, ale nie zalecane"
Możliwe jest użycie dowolnego języka, w tym cyrylicy lub nawet hieroglifów, w ten sposób:

```js
let имя = '...';
let 我 = '...';
```

Technicznie nie ma tu błędu, takie nazwy są dozwolone, ale istnieje międzynarodowa tradycja używania języka angielskiego w nazwach zmiennych.
Nawet jeśli piszemy mały skrypt, może mieć on przed sobą długie życie. Ludzie z innych krajów mogą go kiedyś potrzebować przeczytać.
````

````warn header="Nazwy zarezerwowane"
Istnieje [lista słów zarezerwowanych](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords), które nie mogą być użyte jako nazwy zmiennych ponieważ używa ich sam język.

Dla przykładu: `let`, `class`, `return`, i `function` są zarezerwowane.

Kod poniżej zwraca błąd składniowy (syntax error):

```js run no-beautify
let let = 5; // nie można nazwać zmiennej "let", błąd!
let return = 5; // również nie możemy nazwać jej "return", błąd!
```
````

````warn header="Przypisanie bez `use strict`"

Zwykle musimy zdefiniować zmienną przed jej użyciem. Ale w dawnych czasach technicznie możliwe było stworzenie zmiennej przez zwykłe przypisanie wartości bez użycia `let`. To nadal działa, jeśli nie użyjemy `use strict` w naszych skryptach, aby zachować zgodność ze starymi skryptami.

```js run no-strict
// uwaga: brak "use strict" w tym przykładzie

num = 5; // zmienna "num" zostaje utworzona jeśli wcześniej nie istniała

alert(num); // 5
```

Jest to zła praktyka i spowodowałaby błąd w strict mode:

```js
"use strict";

*!*
num = 5; // błąd: num nie jest zdefiniowane
*/!*
```
````

## Stałe

Aby zadeklarować stałą (niezmienną) wartość, użyj `const` zamiast `let`:

```js
const myBirthday = '18.04.1982';
```

Zmienne zadeklarowane przy użyciu `const` są nazywane "stałymi". Nie można ich zmienić. Próba zrobienia tego spowodowałaby błąd:

```js run
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // błąd, nie można ponownie przypisać wartości stałej!
```

Gdy programista jest pewien, że zmienna nigdy się nie zmieni, może zadeklarować ją za pomocą `const`, aby to zagwarantować i wyraźnie przekazać ten fakt wszystkim.


### Stałe z wielkich liter

Istnieje powszechna praktyka używania stałych jako aliasów dla trudnych do zapamiętania wartości znanych przed wykonaniem.

Takie stałe są nazywane za pomocą wielkich liter i podkreśleń.

Na przykład utwórzmy stałe dla kolorów w formacie szesnastkowym:

```js run
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...gdy potrzebujemy wybrać kolor:
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```

Zalety:

- `COLOR_ORANGE` jest znacznie łatwiejsze do zapamiętania niż `"#FF7F00"`.
- Jest dużo łatwiej źle napisać `"#FF7F00"` niż `COLOR_ORANGE`.
- Podczas czytania kodu, `COLOR_ORANGE` ma większe znaczenie niż `#FF7F00`.

Kiedy powinniśmy używać wielkich liter dla stałej i kiedy powinniśmy nazywać ją normalnie? Wyjaśnijmy to.

Bycie "stałą" oznacza po prostu, że jej wartość nigdy się nie zmienia. Istnieją jednak stałe znane przed wykonaniem (jak wartość szesnastkowa dla czerwieni) i istnieją stałe, które *są obliczane* na bieżąco w czasie wykonywania, ale nie zmieniają się po ich początkowym przypisaniu.

Na przykład:
```js
const pageLoadTime = /* czas, jaki zajął stronie na wczytanie się */;
```

Wartość `pageLoadTime` nie jest znana przed załadowaniem strony, więc jest nazwana normalnie. Ale wciąż jest stała, ponieważ nie zmienia się po przypisaniu.

Innymi słowy, stałe z wielkich liter są używane tylko jako aliasy dla wartości ustawionych na sztywno.

## Nazywaj rzeczy poprawnie

Mówiąc o zmiennych, istnieje jeszcze jedna bardzo ważna rzecz.

Nazwa zmiennej powinna mieć oczywiste znaczenie i opisywać dane które przechowuje.

Nazewnictwo zmiennych jest jedną z najważniejszych i najbardziej złożonych umiejętności programowania. Szybkie spojrzenie na nazwy zmiennych może ujawnić, który kod został napisany przez początkującego, a który przez doświadczonego programistę.

W prawdziwym projekcie większość czasu spędza się na modyfikowaniu i rozszerzaniu istniejącego kodu zamiast pisać coś całkowicie od zera. Kiedy wracamy do jakiegoś kodu po robieniu czegoś innego przez jakiś czas, znacznie łatwiej jest znaleźć dobrze oznakowane informacje. Lub, innymi słowy, gdy zmienne mają dobre nazwy.

Poświęć trochę czasu na myślenie o właściwej nazwie zmiennej przed jej zadeklarowaniem. To podejście odpłaci się hojnie.

Niektóre z zasad wartych naśladowania to:

- Używaj czytelnych dla człowieka nazw jak `userName` lub `shoppingCart`.
- Trzymaj się z dala od skrótów lub krótkich nazw jak `a`, `b`, `c`, chyba, że naprawdę wiesz co robisz.
- Twórz nazwy maksymalnie opisowe i zwięzłe. Przykłady złych nazw to `data` i `value`. Takie nazwy nic nie mówią. Można z nich korzystać tylko wtedy, gdy kontekst kodu czyni wyjątkowo oczywistym, które dane lub wartość odnosi się do zmiennej.
- Ustal nazewnictwo ze swoim zespołem. Jeśli odwiedzający stronę jest nazwany "user", to powinniśmy nazwać powiązane zmienne `currentUser` lub `newUser` zamiast `currentVisitor` lub `newManInTown`.

Brzmi prosto? Jest tak w rzeczy samej, ale tworzenie opisowych i zwięzłych nazw w praktyce nie jest. Śmiało!

```smart header="Ponowne użycie czy tworzenie?"
I ostatnia uwaga. Istnieje kilka leniwych programistów, którzy zamiast deklarować nowe zmienne, mają tendencję do ponownego używania istniejących.

W rezultacie ich zmienne są jak pudełka, w które ludzie rzucają różne rzeczy bez zmiany etykiety. Co jest teraz w pudełku? Kto wie? Musimy podejść bliżej i sprawdzić.

Tacy programiści oszczędzają trochę czasu na deklaracji zmiennych, ale tracą dziesięć razy więcej podczas debugowania.

Dodatkowa zmienna jest dobra, nie zła.

Współczesne przeglądarki i minifikacja kodu optymalizują go wystarczająco, więc nie spowoduje to problemów z wydajnością. Używanie różnych zmiennych dla różnych wartości może nawet wspomóc silnik w optymalizacji Twojego kodu.
```

## Podsumowanie

Możemy zadeklarować zmienne do przechowywania danych za pomocą słów kluczowych `var`, `let`, lub `const`.

- `let` -- jest współczesną deklaracją zmiennej. Kod musi być w strict mode by użyć `let` w Chrome (V8).
- `var` -- jest oldschoolową metodą deklaracji zmiennych. Zazwyczaj nie używamy jej wcale, ale omówimy subtelne różnice od `let` w rozdziale <info:var>, na wypadek gdybyś jej potrzebował.
- `const` -- jest jak `let`, ale wartość zmiennej nie może być zmieniona.

Zmienne powinny być nazywane w sposób, który pozwala nam łatwo zrozumieć co w nich jest.
