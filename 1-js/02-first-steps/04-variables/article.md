# Zmienne

Przez większość czasu aplikacje javascriptowe muszą działać w oparciu o informacje. Poniżej mamy dwa przykłady:
1. Sklep online -- dane mogą zawierać informacje o sprzedawanych produktach lub koszyku zakupów.
2. Aplikacja do czatu -- dane mogą zawierać użytkowników, wiadomości i wiele więcej.

Zmienne służą do przechowywania tych danych.

## Zmienna

[Zmienna](https://pl.wikipedia.org/wiki/Zmienna_(informatyka)) jest "nazwanym magazynem" dla danych. Możemy użyć zmiennych do przechowywania towarów, danych o odwiedzających i innych.

Aby utworzyć zmienną w JavaScripcie, użyj słowa kluczowego `let`.

Poniższy kod tworzy (lub mówiąc konkretniej: *deklaruje*) zmienną o nazwie "message":

```js
let message;
```

Teraz możemy przypisać do niej jakieś dane używając operatora przypisania `=`:

```js
let message;

*!*
<<<<<<< HEAD
message = 'Witaj'; // przechowaj ciąg znaków
=======
message = 'Hello'; // store the string 'Hello' in the variable named message
>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf
*/!*
```

Ciąg znaków jest teraz zapisany w obszarze pamięci powiązanej ze zmienną. Możemy uzyskać do niego dostęp, używając nazwy zmiennej:

```js run
let message;
message = 'Witaj!';

*!*
alert(message); // wyświetla komunikat z zawartością zmiennej
*/!*
```

Dla zwięzłości, możemy połączyć deklarację zmiennej z przypisaniem danych w jednej linii:

```js run
let message = 'Witaj!'; // zadeklaruj zmienną i przypisz jej wartość

alert(message); // Witaj!
```

Możemy też zadeklarować wiele zmiennych w jednej linii:

```js no-beautify
let user = 'Jan', age = 25, message = 'Witaj';
```

Może wydawać się to bardziej zwięzłe, ale nie polecamy tego podejścia. W trosce o lepszą czytelność kodu, zapisuj każdą zmienną w osobnej linii.

Wielowierszowa wersja jest trochę dłuższa, ale łatwiejsza do przeczytania:

```js
let user = 'Jan';
let age = 25;
let message = 'Witaj';
```

<<<<<<< HEAD
Niektórzy ludzie definiują wiele zmiennych w tym stylu:
=======
Some people also define multiple variables in this multiline style:

>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf
```js no-beautify
let user = 'Jan',
  age = 25,
  message = 'Witaj';
```

...Lub nawet w stylu "comma-first" (pol. *najpierw przecinek*):

```js no-beautify
let user = 'Jan'
  , age = 25
  , message = 'Witaj';
```

Wszystkie powyższe przykłady działają tak samo. Wybór zależy od osobistego gustu i poczucia estetyki.

<<<<<<< HEAD

````smart header="`var` zamiast `let`"
W starszych skryptach możesz napotkać słowo kluczowe `var` zamiast `let`:
=======
````smart header="`var` instead of `let`"
In older scripts, you may also find another keyword: `var` instead of `let`:
>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf

```js
*!*var*/!* message = 'Witaj';
```

<<<<<<< HEAD
Słowo kluczowe `var` jest *prawie* tożsame z `let`. Również deklaruje zmienną, lecz w nieco inny, starodawny sposób.

Istnieją subtelne różnice pomiędzy `let` i `var`, ale nie mają one dla nas jeszcze znaczenia na tym etapie nauki. Omówimy je szczegółowo w rozdziale pt. "<info:var>".
=======
The `var` keyword is *almost* the same as `let`. It also declares a variable but in a slightly different, "old-school" way.

There are subtle differences between `let` and `var`, but they do not matter to us yet. We'll cover them in detail in the chapter <info:var>.
>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf
````

## Analogia do życia

Możemy łatwo pojąć pojęcie "zmiennej", jeśli wyobrazimy sobie ją jako "pudełko" na dane, z naklejką o unikalnej nazwie.

<<<<<<< HEAD
Na przykład, zmienną `message` możemy wyobrazić sobie jako pudełko z etykietą `"message"` z wartością `"Witaj!"` wewnątrz:
=======
For instance, the variable `message` can be imagined as a box labelled `"message"` with the value `"Hello!"` in it:
>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf

![](variable.svg)

W pudełku możemy umieścić jakąkolwiek wartość.

<<<<<<< HEAD
Możemy też zmienić tę wartość tyle razy, ile chcemy:
=======
We can also change it as many times as we want:

>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf
```js run
let message;

message = 'Witaj!';

message = 'świecie!'; // wartość zmieniona

alert(message);
```

Kiedy wartość zostaje zmieniona, stare dane są usuwane ze zmiennej:

![](variable-change.svg)

Możemy też zadeklarować dwie zmienne i skopiować dane z jednej do drugiej.

```js run
let hello = 'Witaj, świecie!';

let message;

*!*
// skopiuj "Witaj świecie!" z 'hello' do 'message'
message = hello;
*/!*

// teraz obydwie zmienne przechowują te same dane
alert(hello); // Witaj, świecie!
alert(message); // Witaj, świecie!
```

<<<<<<< HEAD
```smart header="Języki funkcyjne"
Warto zauważyć, że istnieją języki programowania [funkcyjnego](https://pl.wikipedia.org/wiki/Programowanie_funkcyjne), jak [Scala](http://www.scala-lang.org/) czy [Erlang](http://www.erlang.org/), które zabraniają zmiany wartości zmiennych.
W takich językach, gdy wartość  trafi do "pudełka", pozostaje tam na zawsze. Jeśli chcemy przechować coś innego, język zmusza nas do utworzenia nowego pudełka (zadeklarowania nowej zmiennej). Nie możemy ponownie użyć starego.

Choć na pierwszy rzut oka może się to wydawać trochę dziwne, te języki całkiem dobrze nadają się do pisania poważnych programów. Co więcej, istnieją obszary, takie jak obliczenia równoległe, w których takie ograniczenie daje pewne korzyści. Warto przestudiować tego typu języki (nawet jeśli nie planujesz go używać w najbliższym czasie), aby poszerzyć horyzonty.
=======
````warn header="Declaring twice triggers an error"
A variable should be declared only once.

A repeated declaration of the same variable is an error:

```js run
let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared
```
So, we should declare a variable once and then refer to it without `let`.
````

```smart header="Functional languages"
It's interesting to note that there exist so-called [pure functional](https://en.wikipedia.org/wiki/Purely_functional_programming) programming languages, such as [Haskell](https://en.wikipedia.org/wiki/Haskell), that forbid changing variable values.

In such languages, once the value is stored "in the box", it's there forever. If we need to store something else, the language forces us to create a new box (declare a new variable). We can't reuse the old one.

Though it may seem a little odd at first sight, these languages are quite capable of serious development. More than that, there are areas like parallel computations where this limitation confers certain benefits.
>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf
```

## Nazywanie zmiennych [#variable-naming]

Istnieją dwa ograniczenia dla nazw zmiennych w JavaScripcie:

1. Nazwa może zawierać tylko liczby, cyfry lub symbole `$` oraz `_`.
2. Pierwszy znak nie może być cyfrą.

Przykłady poprawnych nazw:

```js
let userName;
let test123;
```

<<<<<<< HEAD
Kiedy nazwa zawiera wiele wyrazów, zwykle stosuje się konwencję [camelCase](https://pl.wikipedia.org/wiki/CamelCase). To jest: słowa następują jedno po drugim, a każde kolejne słowo poza pierwszym zaczyna się od wielkiej litery: `myVeryLongName`.
=======
When the name contains multiple words, [camelCase](https://en.wikipedia.org/wiki/CamelCase) is commonly used. That is: words go one after another, with each word except the first starting with a capital letter: `myVeryLongName`.
>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf

Co ciekawe - w nazwach można również używać znaku dolara `'$'` i podkreślenia `'_'`. Są to zwykłe symbole, podobnie jak litery, bez specjalnego znaczenia.

Te nazwy są poprawne:

```js run untrusted
let $ = 1; // deklaruje zmienną o nazwie "$"
let _ = 2; // a to zmienną o nazwie "_"

alert($ + _); // 3
```

A te są niepoprawne:

```js no-beautify
let 1a; // nie może zaczynać się od cyfry

let my-name; // myślniki '-' nie są dozwolone
```

<<<<<<< HEAD
```smart header="Wielkość liter ma znaczenie"
Zmienne nazwane `apple` i `AppLE` są dwiema różnymi zmiennymi.
```

````smart header="Litery inne niż łacińskie są dozwolone, ale nie zalecane"
Możliwe jest użycie dowolnego języka, w tym cyrylicy lub nawet hieroglifów:
=======
```smart header="Case matters"
Variables named `apple` and `APPLE` are two different variables.
```

````smart header="Non-Latin letters are allowed, but not recommended"
It is possible to use any language, including Cyrillic letters, Chinese logograms and so on, like this:
>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf

```js
let имя = '...';
let 我 = '...';
```

<<<<<<< HEAD
Technicznie rzecz biorąc, nie ma tu błędu (takie nazwy są dozwolone), ale istnieje międzynarodowa tradycja używania języka angielskiego do nazywania zmiennych.
Nawet jeśli piszemy niewielki skrypt, może mieć on przed sobą długie życie. Mogą go kiedyś chcieć przeczytać ludzie z innych krajów.
=======
Technically, there is no error here. Such names are allowed, but there is an international convention to use English in variable names. Even if we're writing a small script, it may have a long life ahead. People from other countries may need to read it sometime.
>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf
````

````warn header="Nazwy zarezerwowane"
Istnieje [lista słów zarezerwowanych](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords), które nie mogą być użyte jako nazwy zmiennych, ponieważ używa ich sam język.

Dla przykładu: `let`, `class`, `return` i `function` są zarezerwowane.

Poniższy kod zwraca błąd składniowy (ang. *syntax error*):

```js run no-beautify
let let = 5; // nie można nazwać zmiennej "let", błąd!
let return = 5; // również nie możemy nazwać jej "return", błąd!
```
````

````warn header="Przypisanie bez instrukcji `use strict`"

Zwykle musimy zdefiniować zmienną przed jej użyciem. Ale w dawnych czasach w zasadzie możliwe było stworzenie zmiennej przez zwykłe przypisanie wartości, bez użycia `let`. Nadal to działa, jeśli nie użyjemy `use strict` w naszych skryptach w celu zachowania zgodności ze starymi skryptami.

```js run no-strict
// uwaga: brak "use strict" w tym przykładzie

num = 5; // zmienna "num" zostaje utworzona, jeśli wcześniej nie istniała

alert(num); // 5
```

Jest to zła praktyka i spowodowałaby błąd w trybie rygorystycznym:

```js
"use strict";

*!*
num = 5; // błąd: zmienna 'num' nie jest zdefiniowana
*/!*
```
````

## Stałe

Aby zadeklarować stałą (niezmienną) wartość, użyj `const` zamiast `let`:

```js
const myBirthday = '18.04.1982';
```

Zmienne zadeklarowane przy użyciu `const` są nazywane "stałymi". Nie można ich nadpisać. Próba zrobienia tego spowodowałaby błąd:

```js run
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // błąd, nie można ponownie przypisać wartości do stałej!
```

<<<<<<< HEAD
Gdy programista jest pewien, że zmienna nigdy się nie zmieni, może zadeklarować ją za pomocą `const`, aby to zagwarantować i wyraźnie przekazać ten fakt wszystkim.

=======
When a programmer is sure that a variable will never change, they can declare it with `const` to guarantee and communicate that fact to everyone.
>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf

### Stałe pisane wielkimi literami

<<<<<<< HEAD
Istnieje powszechna praktyka używania stałych jako aliasów dla trudnych do zapamiętania wartości, znanych przed wykonaniem programu.
=======
There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before execution.
>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf

Takie stałe są zapisywane za pomocą wielkich liter i podkreślników.

Dla przykładu utwórzmy stałe dla kolorów w formacie szesnastkowym:

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
- Podczas czytania kodu, napis `COLOR_ORANGE` niesie z sobą więcej informacji niż `#FF7F00`.

Kiedy powinniśmy używać wielkich liter dla stałej i kiedy powinniśmy nazywać ją normalnie? Wyjaśnijmy to.

<<<<<<< HEAD
Bycie "stałą" oznacza po prostu, że jej wartość nigdy się nie zmienia. Istnieją jednak stałe znane przed wykonaniem (jak wartość szesnastkowa dla koloru czerwonego) i istnieją stałe, które *są obliczane* na bieżąco w czasie wykonywania, ale nie zmieniają się po ich początkowym przypisaniu.

Na przykład:
=======
Being a "constant" just means that a variable's value never changes. But some constants are known before execution (like a hexadecimal value for red) and some constants are *calculated* in run-time, during the execution, but do not change after their initial assignment.

For instance:

>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf
```js
const pageLoadTime = /* czas, jaki zajął stronie na wczytanie się */;
```

<<<<<<< HEAD
Wartość `pageLoadTime` nie jest znana przed załadowaniem strony, więc jest nazwana normalnie. Ale wciąż jest stała, ponieważ nie zmienia się po przypisaniu.

Innymi słowy, stałe pisane wielkimi literami są używane tylko jako aliasy dla wartości ustawionych na sztywno.
=======
The value of `pageLoadTime` is not known before the page load, so it's named normally. But it's still a constant because it doesn't change after the assignment.

In other words, capital-named constants are only used as aliases for "hard-coded" values.
>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf

## Nazywaj rzeczy poprawnie

W temacie zmiennych jest jeszcze jedna, bardzo istotna kwestia.

Nazwa zmiennej powinna mieć oczywiste znaczenie i opisywać dane, które przechowuje.

<<<<<<< HEAD
Nazewnictwo zmiennych jest jedną z najważniejszych i najbardziej złożonych umiejętności programowania. Szybkie spojrzenie na nazwy zmiennych może ujawnić, który kod został napisany przez początkującego, a który przez doświadczonego programistę.

W prawdziwym projekcie większość czasu spędza się na modyfikowaniu i rozszerzaniu istniejącego kodu, zamiast pisać coś całkowicie od zera. Kiedy wracamy do jakiegoś kodu po robieniu czegoś innego przez jakiś czas, znacznie łatwiej jest znaleźć informacje, które są dobrze oznaczone. Lub, innymi słowy, gdy zmienne mają dobre nazwy.
=======
Variable naming is one of the most important and complex skills in programming. A glance at variable names can reveal which code was written by a beginner versus an experienced developer.

In a real project, most of the time is spent modifying and extending an existing code base rather than writing something completely separate from scratch. When we return to some code after doing something else for a while, it's much easier to find information that is well-labelled. Or, in other words, when the variables have good names.
>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf

Poświęć trochę czasu na zastanowienie się nad właściwą nazwę zmiennej przed jej zadeklarowaniem. Takie podejście odpłaci się z nawiązką.

Niektóre z zasad wartych naśladowania to:

<<<<<<< HEAD
- Używaj czytelnych dla człowieka nazw, jak `userName` lub `shoppingCart`.
- Trzymaj się z dala od skrótów lub krótkich nazw jak `a`, `b`, `c`, chyba że naprawdę wiesz, co robisz.
- Twórz nazwy maksymalnie opisowe i zwięzłe. Przykłady złych nazw to `data` i `value`. Takie nazwy nic nie mówią. Można z nich korzystać tylko wtedy, gdy kontekst kodu czyni wyjątkowo oczywistym, co kryje się w tej zmiennej.
- Ustal nazewnictwo ze swoim zespołem. Jeśli odwiedzający stronę jest nazywany "user", to kolejne, powiązane z nim zmienne powinny nazywać się `currentUser` lub `newUser`, a nie `currentVisitor` lub `newManInTown`.
=======
- Use human-readable names like `userName` or `shoppingCart`.
- Stay away from abbreviations or short names like `a`, `b`, and `c`, unless you know what you're doing.
- Make names maximally descriptive and concise. Examples of bad names are `data` and `value`. Such names say nothing. It's only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
- Agree on terms within your team and in your mind. If a site visitor is called a "user" then we should name related variables `currentUser` or `newUser` instead of `currentVisitor` or `newManInTown`.
>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf

Brzmi prosto? Z pewnością. Ale tworzenie opisowych i zwięzłych nazw w praktyce nie jest proste. Śmiało, spróbuj!

```smart header="Ponowne użycie czy stworzenie nowej?"
I ostatnia uwaga. Istnieje kilka leniwych programistów, którzy zamiast deklarować nowe zmienne, mają tendencję do ponownego używania istniejących.

W rezultacie ich zmienne są jak pudełka, w które ludzie rzucają różne rzeczy bez zmiany etykiety. Co jest teraz w pudełku? Kto wie? Musimy podejść bliżej i sprawdzić.

Tacy programiści oszczędzają trochę czasu na deklaracji zmiennych, ale tracą dziesięć razy więcej podczas debugowania.

Dodatkowa zmienna jest dobra, nie zła.

Współczesne przeglądarki i minifikacja kodu optymalizują go wystarczająco, więc nie spowoduje to problemów z wydajnością. Używanie różnych zmiennych dla różnych wartości może nawet wspomóc silnik w optymalizacji twojego kodu.
```

## Podsumowanie

Możemy zadeklarować zmienne do przechowywania danych za pomocą słów kluczowych `var`, `let`, lub `const`.

- `let` -- jest współczesną deklaracją zmiennej.
- `var` -- jest starodawną metodą deklaracji zmiennej. Zazwyczaj nie używamy jej wcale, ale omówimy subtelne różnice w odniesieniu do `let` w rozdziale pt. "<info:var>" - na wypadek gdyby była ci potrzebna.
- `const` -- jest jak `let`, ale jej wartość nie może być zmieniana.

Zmienne powinny być nazywane w sposób, który pozwala nam łatwo zrozumieć, co w nich jest.
