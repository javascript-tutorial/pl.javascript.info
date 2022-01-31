# Funkcje

Dość często musimy wykonać podobną akcję w wielu miejscach kodu.

Na przykład, chcemy pokazać ładnie wyglądającą wiadomość, kiedy gość loguje się, wylogowuje się, a może jeszcze gdzieś indziej.

Funkcje są głównymi "cegiełkami" programu. Pozwalają na wielokrotne wywoływanie kodu bez konieczności duplikowania go.

Widzieliśmy już przykłady wbudowanych funkcji, takich jak `alert(message)`, `prompt(message, default)` i `confirm(question)`. Ale możemy także tworzyć własne funkcje.

## Deklaracja funkcji

Do stworzenia funkcji możemy użyć *deklaracji funkcji*.

Wygląda to tak:

```js
function showMessage() {
  alert( 'Witajcie wszyscy!' );
}
```

<<<<<<< HEAD:1-js/02-first-steps/14-function-basics/article.md
Pierwsze jest słowo kluczowe `function`, następnie znajduję się *nazwa funkcji*, później lista *parametrów* pomiędzy nawiasami (rozdzielonych przecinkami, pusta w przykładzie powyżej) i na końcu blok kodu funkcji, nazywany również "ciałem funkcji", pomiędzy nawiasami klamrowymi.

```js
function name(parametry) {
  ...ciało...
=======
The `function` keyword goes first, then goes the *name of the function*, then a list of *parameters* between the parentheses (comma-separated, empty in the example above, we'll see examples later) and finally the code of the function, also named "the function body", between curly braces.

```js
function name(parameter1, parameter2, ... parameterN) {
  ...body...
>>>>>>> 0f748275e20a81700c8514f22a7cc80c4422d09c:1-js/02-first-steps/15-function-basics/article.md
}
```

Nasza nowa funkcja może być wywołana poprzez podanie jej nazwy: `showMessage()`.

Na przykład:

```js run
function showMessage() {
  alert( 'Witajcie wszyscy!' );
}

*!*
showMessage();
showMessage();
*/!*
```

Wywołanie `showMessage()` wykonuje kod funkcji. Tutaj zobaczymy wiadomość dwa razy.

Ten przykład wyraźnie demonstruje jeden z głównych celów funkcji: unikanie duplikacji kodu.

Jeżeli kiedykolwiek będziemy potrzebowali zmienić treść wiadomości lub sposób jej wyświetlania, wystarczy jedynie zmienić kod w jednym miejscu: w funkcji za to odpowiedzialnej.

## Zmienne lokalne

Zmienna zadeklarowana wewnątrz funkcji jest widoczna jedynie wewnątrz niej.

Na przykład:

```js run
function showMessage() {
*!*
  let message = 'Cześć, jestem JavaScript!'; //zmienna lokalna
*/!*

  alert( message );
}

showMessage(); // Cześć, jestem JavaScript!

alert( message ); // <--- Błąd! Zmienna jest lokalna dla funkcji
```

## Zmienne zewnętrzne

Funkcja ma dostęp także do zmiennych zewnętrznych, na przykład:

```js run no-beautify
let *!*userName*/!* = 'Jan';

function showMessage() {
  let message = 'Cześć, ' + *!*userName*/!*;
  alert(message);
}

showMessage(); // Cześć, Jan
```

Funkcja ma pełen dostęp do zewnętrznej zmiennej. Może ją także modyfikować.

Na przykład:

```js run
let *!*userName*/!* = 'Jan';

function showMessage() {
  *!*userName*/!* = "Robert"; // (1) zmienia zewnętrzną zmienną

  let message = 'Cześć, ' + *!*userName*/!*;
  alert(message);
}

alert( userName ); // *!*Jan*/!* przed wywołaniem funkcji

showMessage();

alert( userName ); // *!*Robert*/!*, wartość zmiennej została zmodyfikowana przez funkcję
```

Zewnętrzna zmienna jest używana jedynie jeśli nie ma żadnej lokalnej.

Jeżeli tak samo nazwana zmienna jest zadeklarowana wewnątrz funkcji to wówczas *przesłania* ona tą zewnętrzną. Na przykład, w kodzie poniżej funkcja używa lokalnego `userName`. Zewnętrzna jest ignorowana:

```js run
let userName = 'Jan';

function showMessage() {
*!*
  let userName = "Robert"; // zadeklarowana zmienna lokalna
*/!*

  let message = 'Cześć, ' + userName; // *!*Robert*/!*
  alert(message);
}

// funkcja stworzy i użyje własnego userName
showMessage();

alert( userName ); // *!*Jan*/!*, niezmieniona, funkcja nie uzyskała dostępu do zewnętrznej zmiennej
```

```smart header="Zmienne globalne"
Zmienne zadeklarowane poza funkcjami, tak jak zewnętrzna zmienna `userName` w kodzie powyżej, są nazywane *globalnymi*.

Zmienne globalne są widoczne z każdej funkcji (chyba że są przesłonione przez lokalne).

Dobrą praktyką jest minimalizacja użycia zmiennych globalnych. Nowoczesny kod ma kilka lub nie ma żadnych zmiennych globalnych. Większość zmiennych deklarowanych jest w funkcjach. Chociaż czasami, mogą być użyteczne do przechowywania danych ważnych z punktu widzenia projektu.
```

## Parametry

<<<<<<< HEAD:1-js/02-first-steps/14-function-basics/article.md
Możemy przekazać arbitralne dane do funkcji używając parametrów (nazywanych również *argumentami funkcji*).
=======
We can pass arbitrary data to functions using parameters.
>>>>>>> 0f748275e20a81700c8514f22a7cc80c4422d09c:1-js/02-first-steps/15-function-basics/article.md

W przykładzie poniżej, funkcja posiada dwa parametry: `from` i `text`.

```js run
<<<<<<< HEAD:1-js/02-first-steps/14-function-basics/article.md
function showMessage(*!*from, text*/!*) { // argumenty: from, text
  alert(from + ': ' + text);
}

*!*
showMessage('Anna', 'Cześć!'); // Ann: Cześć! (*)
showMessage('Anna', "Co słychać?"); // Ann: Co słychać? (**)
*/!*
=======
function showMessage(*!*from, text*/!*) { // parameters: from, text
  alert(from + ': ' + text);
}

*!*showMessage('Ann', 'Hello!');*/!* // Ann: Hello! (*)
*!*showMessage('Ann', "What's up?");*/!* // Ann: What's up? (**)
>>>>>>> 0f748275e20a81700c8514f22a7cc80c4422d09c:1-js/02-first-steps/15-function-basics/article.md
```

Kiedy funkcja jest wywoływana w linijkach `(*)` oraz `(**)`, podane do niej parametry są kopiowane do lokalnych zmiennych `from` i `text`. Poźniej funkcja ich używa.

Tutaj kolejny przykład: mamy zmienną `from` i przekazujemy ją do funkcji. Zwróć uwagę: funkcja zmienia `from`, ale zmiana nie jest widoczna na zewnątrz, ponieważ funkcja zawsze dostaje kopię jej wartości:

```js run
function showMessage(from, text) {

*!*
  from = '*' + from + '*'; // sprawia że "from" wygląda ładniej
*/!*

  alert( from + ': ' + text );
}

let from = "Anna";

showMessage(from, "Cześć"); // *Anna*: Cześć

// wartość zmiennej "from" jest taka sama, funkcja zmodyfikowała lokalną kopię
alert( from ); // Anna
```

<<<<<<< HEAD:1-js/02-first-steps/14-function-basics/article.md
## Domyślna wartość

Jeżeli parametr nie jest dostarczony do funckji, wówczas jego wartość przyjmuję `undefined`.
=======
When a value is passed as a function parameter, it's also called an *argument*.

In other words, to put these terms straight:

- A parameter is the variable listed inside the parentheses in the function declaration (it's a declaration time term)
- An argument is the value that is passed to the function when it is called (it's a call time term).

We declare functions listing their parameters, then call them passing arguments.

In the example above, one might say: "the function `showMessage` is declared with two parameters, then called with two arguments: `from` and `"Hello"`".


## Default values

If a function is called, but an argument is not provided, then the corresponding value becomes `undefined`.
>>>>>>> 0f748275e20a81700c8514f22a7cc80c4422d09c:1-js/02-first-steps/15-function-basics/article.md

Na przykład, wyżej wymieniona funckja `showMessage(from, text)` może zostać wywołana z jednym argumentem:

```js
showMessage('Anna');
```

<<<<<<< HEAD:1-js/02-first-steps/14-function-basics/article.md
To nie błąd. Takie wywołanie da wynik `"Anna: undefined"`. Nie ma argumentu `text`, więc funkcja zakłada że `text === undefined`.

Jeżeli chcemy użyć "domyślnego" argumentu `text` w tym przypadku, możemy go okreslić po znaku `=`:
=======
That's not an error. Such a call would output `"*Ann*: undefined"`. As the value for `text` isn't passed, it becomes `undefined`.

We can specify the so-called "default" (to use if omitted) value for a parameter in the function declaration, using `=`:
>>>>>>> 0f748275e20a81700c8514f22a7cc80c4422d09c:1-js/02-first-steps/15-function-basics/article.md

```js run
function showMessage(from, *!*text = "brak tekstu"*/!*) {
  alert( from + ": " + text );
}

showMessage("Anna"); // Anna: brak tekstu
```

Teraz jeżeli parametr `text` nie zostaje przekazany, przybiera wartość `"brak tekstu"`.

W tym przypadku `"brak tekstu"` jest stringiem, ale może być bardziej złożonym wyrażeniem, co jest oceniane i przypisywane tylko w przypadku braku parametru. Więc, to również jest możliwe:

```js run
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() wykonuje się w przypadku braku podania argumentu text
  // wynik wywołania funkcji staje się wartością argumentu text
}
```

```smart header="Ewaluacja domyślnych parametrów"
W JavaScripcie, domyślny parametr jest ewaluowany za każdym razem kiedy funkcja jest wywoływany bez tego parametru.

<<<<<<< HEAD:1-js/02-first-steps/14-function-basics/article.md
W przykładzie powyżej, `anotherFunction()` jest wywoływana za każdym razem kiedy `showMessage()` jest wywoływana bez parametru `text`.
```

````smart header="Domyślne parametry w starym stylu"
Stare wersje JavaScriptu nie wspierają domyślnych parametrów. Są więc alternatywne sposóby na ich wspieranie, które możesz spotkać głównie w starszych skryptach.

Na przykład, konkretne sprawdzenie czy zmienna jest `undefined`:
=======
In the example above, `anotherFunction()` isn't called at all, if the `text` parameter is provided.

On the other hand, it's independently called every time when `text` is missing.
```

### Alternative default parameters

Sometimes it makes sense to assign default values for parameters not in the function declaration, but at a later stage.

We can check if the parameter is passed during the function execution, by comparing it with `undefined`:

```js run
function showMessage(text) {
  // ...
>>>>>>> 0f748275e20a81700c8514f22a7cc80c4422d09c:1-js/02-first-steps/15-function-basics/article.md

*!*
<<<<<<< HEAD:1-js/02-first-steps/14-function-basics/article.md
  if (text === undefined) {
    text = 'brak tekstu';
=======
  if (text === undefined) { // if the parameter is missing
    text = 'empty message';
>>>>>>> 0f748275e20a81700c8514f22a7cc80c4422d09c:1-js/02-first-steps/15-function-basics/article.md
  }
*/!*

  alert(text);
}

showMessage(); // empty message
```

<<<<<<< HEAD:1-js/02-first-steps/14-function-basics/article.md
...lub użycie operatora `||`:

```js
function showMessage(from, text) {
  // jeżeli text przyjmuje wartość fałszywą, wówczas text przyjmuje wartość "domyślną"
  text = text || 'brak tekstu';
=======
...Or we could use the `||` operator:

```js
function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
>>>>>>> 0f748275e20a81700c8514f22a7cc80c4422d09c:1-js/02-first-steps/15-function-basics/article.md
  ...
}
```

Modern JavaScript engines support the [nullish coalescing operator](info:nullish-coalescing-operator) `??`, it's better when most falsy values, such as `0`, should be considered "normal":

```js run
function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
```

## Zwracanie wartości

Funkcja może zwracać wartość z powrotem do wywołującego ją kodu jako rezultat.

Najprosztym przykładem będzie funkcja która sumuje dwie wartości:

```js run no-beautify
function sum(a, b) {
  *!*return*/!* a + b;
}

let result = sum(1, 2);
alert( result ); // 3
```

Dyrektywa `return` może być umiejscowiona w dowolnym miejscu funkcji. Kiedy wykonywanie kodu dotrze do niej, funkcja zatrzymuje się i wartość zostaje zwrócona (przypisana do `result` powyżej).

Może być wiele wystąpień dyrektywy `return` w pojedynczej funkcji. Na przykład:

```js run
function checkAge(age) {
  if (age >= 18) {
*!*
    return true;
*/!*
  } else {
*!*
    return confirm('Czy masz pozwolenie od rodziców?');
*/!*
  }
}

let age = prompt('Ile masz lat?', 18);

if ( checkAge(age) ) {
  alert( 'Dostęp przyznany' );
} else {
  alert( 'Odmowa dostępu' );
}
```

Możliwe jest użycie `return` bez wartości. To powoduję natychmiastowe wyjście z fukcji.

Na przykład:

```js
function showMovie(age) {
  if ( !checkAge(age) ) {
*!*
    return;
*/!*
  }

  alert( "Pokazuję Ci film" ); // (*)
  // ...
}
```

W kodzie powyżej, jeżeli `checkAge(age)` zwróci `false`, wówczas `showMovie` nie przejdzie do `alert`.

````smart header="Funkcja z pustym `return` lub bez niego zwraca `undefined`"
Jeżeli funkcja nie zwraca żadnej wartości, to tak jakby zwracała `undefined`:

```js run
function doNothing() { /* pusta */ }

alert( doNothing() === undefined ); // true
```

Pusty `return` to również to samo co `return undefined`:

```js run
function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true
```
````

````warn header="Nigdy nie dodawaj nowej lini pomiędzy `return` a wartością"
Dla długiego wyrażenia po `return`, kuszące może być umieszczenie go w oddzielnej lini, jak tutaj:

```js
return
 (jakieś + długie + wyrażenie + lub + cokolwiek * f(a) + f(b))
```
To nie działa, ponieważ JavaScript zakłada wystąpienie średnika po `return`. To zadziała tak samo jak:

```js
return*!*;*/!*
 (jakieś + długie + wyrażenie + lub + cokolwiek * f(a) + f(b))
```

Więc, faktycznie staje się on pustym returnem.

Jeżeli chcemy aby zwracane wyrażenie obejmowało wiele lini, powinniśmy zacząć je od tej samej lini w której znajduje się `return`. Lub przynajmniej postawić tam nawias otwierający w następujący sposób:

```js
return (
  jakieś + długie + wyrażenie
  + lub +
  cokolwiek * f(a) + f(b)
  )
```
I będzie to działać tak jak tego oczekujemy.
````

## Nazewnictwo funkcji [#function-naming]

Funkcje są akcjami. Tak więc ich nazwy są zazwyczaj czasownikami. Nazwa powinna być krótka, najdokładniejsza jak to tylko możliwe i opisywać co funkcja robi, tak żeby osoba czytająca kod miała wskazówkę co funkcja robi.

Powszechną praktyką jest rozpoczynanie funkcji czasownikowym przedrostkiem który pobieżnie opisuje akcję. W zespole musi być zgoda co do znaczenia przedrostków.

Na przykład, funkcje zaczynające się od `"show"` zazwyczaj coś pokazują.

Funkcja zaczynająca się od...

- `"get…"` -- zwraca wartość,
- `"calc…"` -- oblicza coś,
- `"create…"` -- tworzy coś,
- `"check…"` -- sprawdza coś i zwraca wartość boolean, itp.

Przykłady takich nazw:

```js no-beautify
showMessage(..)     // pokazuje wiadomość
getAge(..)          // zwraca wiek (pobiera go w jakiś sposób)
calcSum(..)         // oblicza sumę i zwraca rezultat
createForm(..)      // tworzy formularz (i zazwyczaj go zwraca)
checkPermission(..) // sprawdza pozwolenie, zwraca true/false
```

Z przedrostkami w nazwie, jedno spojrzenie na nazwę funkcji daje pojęcie co dana funkcja robi oraz jaką wartość zwraca.

```smart header="Jedna funkcja -- jedna akcja"
Funkcja powinna robić dokładnie to co sugeruje jej nazwa, nic więcej.

Dwie niezależne akcje zazwyczaj zasługują na dwie funkcje, nawet jeśli zazwyczaj są wywoływane razem (w tym przypadku możemy stworzyć trzecią funkcję która wywołuje tamte dwie).

Kilka przykładów łamiących tą zasadę:

- `getAge` -- byłoby źle gdyby funkcja pokazywała `alert` z wiekem (powinna tylko pobierać wiek).
- `createForm` -- byłoby źle gdyby modyfikowała dokument, dodając do niego formularz (powinna go tylko tworzyć i zwracać).
- `checkPermission` -- byłoby źle gdyby wyświetlała wiadomość `dostęp przyznany/zabroniony` (powinna tylko wykonać sprawdzenie i zwrócić wynik).

Te przykłady zakładają powszechne znaczenie przedrostków. Ty i twój zespół macie wolną rekę aby zgodzić się na inne znaczenie, ale zazwyczaj nie różnią się one. W każdym przypadku, powinieneś mieć silne zrozumienie co znaczy dany prefiks, co funckja z prefiksem może a czego nie może zrobić. Wszystkie funkcje z tym samym prefiksem powinny przestrzegać zasad. Zespół powinien dzielić się tą wiedzą.
```

```smart header="Ultra-krótkie nazwy funkcji"
Funkcje które są używane *bardzo często* czasami mają ultra-krótkie nazwy.

Na przykład, framework [jQuery](http://jquery.com) definiuje funkcje za pomocą `$`. Bibloteka [Lodash](http://lodash.com/) ma swoją główną funkcję nazwaną `_`.

<<<<<<< HEAD:1-js/02-first-steps/14-function-basics/article.md
To są wyjątki. Ogólnie nazwy funkcji powinny być zwięzłe i opisowe.
=======
These are exceptions. Generally function names should be concise and descriptive.
>>>>>>> 0f748275e20a81700c8514f22a7cc80c4422d09c:1-js/02-first-steps/15-function-basics/article.md
```

## Funkcje == Komentarze

Funkcje powinny być krótkie i robić dokładnie jedną rzecz. Jeżeli ta rzecz jest duża, może warto rozdzielić tę funkcję na kilka mniejszych. Czasami przestrzeganie tej zasady może nie być łatwe, ale to zdecydowanie dobra rzecz.

Oddzielnna funckja jest nie tylko łatwiejsza do testowania i debugowania -- jej samo istnienie jest wspaniałym komentarzem!

Dla przykładu, porównaj dwie fukncje `showPrimes(n)` poniżej. Każda z nich zwraca [liczby pierwsze](https://pl.wikipedia.org/wiki/Liczba_pierwsza) aż do `n`.

Pierwszy wariant używa etykiety:

```js
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // liczba pierwsza
  }
}
```

Drugi wariant używa dodatkowej funkcji `isPrime(n)` do testowania czy liczba jest liczbą pierwszą:

```js
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    *!*if (!isPrime(i)) continue;*/!*

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
```

Drugi wariant jest łatwiejszy do zrozumienia, prawda? Zamiast kawałka kodu widzimy nazwę akcji (`isPrime`). Czasami ludzie odnoszą się do takiego kodu jako do *samo-opisującego się*.

Tak więc, funkcje mogą być tworzone nawet jeśli nie mamy zamiaru ich znowu używać. Strukturyzują kod i sprawiają że jest czytelny.

## Podsumowanie

Deklaracja funckji wygląda w ten sposób:

```js
function name(parametry, rozdzielone, przecinkiem) {
  /* kod */
}
```

- Wartości przekazane do funkcji jako parametry są kopiowane do jej lokalnych zmiennych.
- Funkcja ma dostęp do zewnętrznych zmiennych. Ale działa to tylko ze środka na zewnątrz. Kod poza funkcją nie widzi jej zmiennych lokalnych.
- Funkcja może zwrócić wartość. Jeżeli tego nie robi, wówczas jej rezultat jest `undefined`.

Aby kod był czysty i łatwy do zrozumienia, rekomendowane jest używanie głównie zmiennych lokalnych i parametrów wewnątrz funkcji, nie zewnętrznych zmiennych.

Zawsze łatwiejsze jest zrozumienie funkcji która otrzymuje parametry, pracuje z nimi i zwraca wynik niż funkcji która nie przyjmuje żadnych parametrów, ale modyfikuje zewnętrzne zmienne jako efekt uboczny.

Nazewnictwo funkcji:

- Nazwa powinna jasno opisywać co funkcja robi. Kiedy widzimy wywołanie funkcji w kodzie, dobra nazwa od razu daje nam zrozumienie co robi i zwraca.
- Funkcja jest akcją, więc nazwy funkcji są zazwyczaj czasownikami.
- Istnieje wiele dobrze znanych prefiksów funkcji takich jak `create…`, `show…`, `get…`, `check…` itp. . Użyj ich aby zostawiać podpowiedzi odnośnie działania funkcji.

Funckje są głównymi elementami budującymi kod. Teraz mamy już podstawy, więc możemy zacząc tworzyć i używać ich. Ale to dopiero początek ścieżki. Będziemy do nich wracać wiele razy, wchodząc głębiej w ich zaawansowane funkcje.
