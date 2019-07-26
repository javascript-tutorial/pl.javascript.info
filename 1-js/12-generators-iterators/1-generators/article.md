
# Generatory

Zwykłe funkcje zwracają tylko jedną, pojedyńczą wartość (lub nie zwracają nic).


Generatory mogą zwrócić wiele wartości, być może ich nieskończoną ilość, jedna po drugiej, na żądanie. Świetnie działają z obiektami typu [iterables](info:iterable), pozwalają na proste tworzenie strumieni danych.

## Funkcje generujące

Aby stworzyć generator, używamy specjalnej składni: `function*`, jest to tak zwana "funkcja generująca".

Wygląda to tak:

```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
```
Funkcja `generateSequence()` nie wykonuje kodu, tylko zwraca specjalny obiekt, zwany "generatorem".

```js
// "funkcja generująca" tworzy "generator"
let generator = generateSequence();
```

Obiekt typu `generator` można rozumieć jako "zawieszone wywołanie funkcji":

![](generateSequence-1.png)

Po stworzeniu generatora, wykonanie kodu jest zapauzowane na samym początku.

Główną metodą generatora jest `next()`. Wywołana, wznawia wykonanie aż do następnego polecenia typu `yield <wartość>`. Wtedy wykonanie zostaje zatrzymane, a wartość zostaje zwrócona na zewnątrz.

Na przyklad, tu tworzymy generator i dostajemy jego pierwszą "yieldowaną" wartość.
```js run
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

*!*
let one = generator.next();
*/!*

alert(JSON.stringify(one)); // {value: 1, done: false}
```

Rezultatem `next()` jest zawsze obiekt. 

    `value`: "yieldowana" wartość,
    `done`: `false` jeśli kod w generatorze się jeszcze nie skończył, w przeciwnym przypadku `true`.

Jak na razie, dostajemy tylko pierwszą wartość:

![](generateSequence-2.png)

Wywołajmy `generator.next()` ponownie. Metoda wznawia wykonanie i zwraca następny `yield`:

```js
let two = generator.next();

alert(JSON.stringify(two)); // {value: 2, done: false}
```
![](generateSequence-3.png)

Jeśli wywołamy ją po raz trzeci, wykonanie zostanie wznowione aż do następnego polecenia `return`, które to kończy funkcje:


```js
let three = generator.next();

alert(JSON.stringify(three)); // {value: 3, *!*done: true*/!*}
```
![](generateSequence-4.png)

Praca generatora dobiegła końca. Potwierdza to ostatni rezultat: `{ done: true, value: 3}`.

Nowe wywołania `generator.next()` nie mają sensu. Jeśli je zrobimy, zwrócą ten sam obiekt: `{ done: true}`.

Nie da sie wycofać zmian w generatorze. Możemy za to stworzyć nowy, poprzez wywołanie `generateSequence()`.

Na razie zapamiętajmy, ze funkcje generujące, w przeciwieństwie od zwykłych funkcji nie wykonują kodu. Służą jako "fabryki generatorów". `function*` zwraca generator, który to dopiero zwraca wartości.

```smart header="`function* f(…)` czy`function *f(…)`?". 
Co kto lubi, obie składnie są poprawne.

Mimo to, w większości przypadków używamy pierwszej składni, ponieważ gwiazdka `*` wskazuje, że to funkcja generująca, tzn opisuje rodzaj funkcji a nie jej nazwe, więc powinna być koło słowa `function`. 
```

## Na generatorach można dokonywać iteracji.

Jak wskazuje metoda `next()`,generatory to obiekty typu [iterable](info: iterable)

Możemy przechodzić po ich wartościach, za pomocą pętli `for..of`:

```js run
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

for(let value of generator) {
  alert(value); // 1, następnie 2
}
```

Jest to znacznie ładniejszy sposób na używanie generatorów, niż korzystanie z `.next().value`, prawda?

...Weź prosze pod uwagę: przykład wyżej pokazuje `1`, następnie `2` i to wszystko. Nie pokazuje `3`!

Jest tak dlatego, ponieważ pętla for-of ignoruje ostatnią wartość `value`, jeżeli `done: true`. Jeśli chcemy pokazać wszystkie rezultaty za pomocą pętli `for..of`, to musimy je zwrócić za pomocą `yield`:

```js run
function* generateSequence() {
  yield 1;
  yield 2;
*!*
  yield 3;
*/!*
}

let generator = generateSequence();

for(let value of generator) {
  alert(value); // 1, następnie 2, następnie 3
}
```

Oczywiście, generatory to obiekty typu iterable, więc można też wywoływać na nich funkcjonalności powiązane z iteracją, np operator rozprzestrzenienia `...`:

```js run
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let sequence = [0, ...generateSequence()];

alert(sequence); // 0, 1, 2, 3
```

W kodzie powyżej, `...generateSequence()` zmienia iterable w tablice wartości (przeczytaj więcej o operatorze rozprzestrzenienia w rozdziale [](info:rest-parameters-spread-operator#spread-operator))

## Korzystanie z generatorów zamiast z iterable.

Jakiś czas temu w rozdziale [](info:iterable) stworzyliśmy objekt typu iterable `range`, który zwraca wartości od..do.

Dla przypomnienia, kod:

```js run
let range = {
  from: 1,
  to: 5,
  
  //dla..wywołań ta metoda raz na samym początku
  [Symbol.iterator]() {
    // zwraca objekt iterator
    // wprzód, for..of działa tylko dla tego objektu, pyta go o następną wartość
    return {
      current: this.from,
      last: this.to,

      // next() jest wywoływana w każdej kolejnej iteracji przez pętle for..of
      next() {
        // to powinno zwrócić wartość jako objekt {done:..., value:...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

alert([...range]); // 1,2,3,4,5
```

Korzystanie z generatora do stworzenia ciągów po których możemy iterować jest znacznie bardziej eleganckie.

```js run
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

let sequence = [...generateSequence(1,5)];

alert(sequence); // 1, 2, 3, 4, 5
```

...Ale co, jeżeli chcielibyśmy zatrzymać objekt `range`?

## Zamiana Symbol.iterator na generator

Możemy wziąć najlepsze z obu światów, przez dostarczenie generatora jako `Symbol.iterator`:

```js run
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // skrócona wersja zapisu: [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

alert( [...range] ); // 1,2,3,4,5
```

Możemy teraz iterować po obiekcie `range`.

To działa całkiem nieżle, bo gdy `range[Symbol.iterator]` zostaje wywołany:

    - zwraca obiekt (który teraz jest generatorem)
    - który zawiera metode `.next()` (tak jak generator)
    - która zwraca wartości w formie `{ value: ..., done:true/false}` (zgadza sie, tak samo jak generator).

Oczywiście to nie przypadek. Generatory ułatwiają korzystanie z obiektów typu iterable.

Ostatni wariant z generatorem jest znacznie bardziej zwięzły niż oryginalny kod i zawiera te same funkcjonalnosci.

```smart header="Generatory mogą działać bez końca"
W przykładach powyżej wygenerowaliśmy skończone ciągi, ale możemy też stworzyć generator, który wytwarza wartości bez końca. Na przykład, niekończący się ciąg pseudo-losowych liczb.

To na pewno musiałoby wymagać `break` w `for..of`, w przeciwnym wypadku pętla powtarzałaby sie bez końca.
```

## Kompozycja generatora

Kompozycja generatora to specjalna cecha generatorów, która pozwala transparentnie osadzić generator w innym generatorze.

Na przykład, chcielibyśmy wygenerować ciąg:
    
    - cyfr 0..9 (kody znaków 48..57)
    - następujących po nich liter alfabetu a..z (kody znaków 65..90)
    - następujących po nich wielkich liter A..Z (kody znaków 97..122)

Następnie, mamy zamiar wytwarzać hasła przez wybieranie znaków z tego ciągu, ale najpierw musimy wygenerować ciąg.

Mamy już `function* generateSequence(start, end)`. Wykorzystajmy ją ponownie do wytworzenia 3 ciągów po sobie, razem stworzą potrzebny nam ciąg.

W przypadku zwykłej funkcji, aby połączyć ze sobą rezultaty kilku różnych funkcji, wywołujemy je, przechowujemy rezultaty, a na końcu łączymy je ze sobą.

W przypadku generatorów możemy to zrobić tak: 

```js run
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

*!*
  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);
*/!*

}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z
```

Dyrektywa `yield*` jest odpowiedzialna za kompozycję. *Deleguje* ona wykonanie do następnego generatora. Mówiąc prościej, dyrektywa uruchamia generatory i transparentnie przekazuje ich "yieldy" na zewnątrz, tak jakby zostały wykonane przez wywołany generator.

Rezultat jest taki sam, jak gdybyśmy wstawili kod w zagnieżdżone generatory:

```js run
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generateAlphaNum() {

*!*
  // yield* generateSequence(48, 57);
  for (let i = 48; i <= 57; i++) yield i;

  // yield* generateSequence(65, 90);
  for (let i = 65; i <= 90; i++) yield i;

  // yield* generateSequence(97, 122);
  for (let i = 97; i <= 122; i++) yield i;
*/!*

}

let str = '';

for(let code of generateAlphaNum()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z
```

Kompozycja generatora to naturalny sposób na przekierowanie strumienia jednego generatora w inny generator.

To działa nawet, jeżeli strumień wartości z zagnieżdżonego generatora jest nieskończony. Jest to proste i nie wymaga dodatkowej pamięci do przechowywania pośrednich rezultatów.
It works even if the flow of values from the nested generator is infinite. It's simple and doesn't use extra memory to store intermediate results.

## "yield" to droga dwukierunkowa

Do tego momentu, traktowaliśmy generatory jako "iteratory na sterydach". I tak właśnie się z nich często korzysta. 

Ale tak naprawde są one znacznie bardziej potężne i elastyczne.

To dlatego, ponieważ `yield` jest drogą dwukierunkową: nie tylko zwraca rezultaty na zewnątrz, ale może też przekazać wartość do środka generatora.

Aby to zrobić, powinniśmy wywołać `generator.next(arg)`, z argumentem. Ten argument jest rezultatem `yield`.

Oto przykład:

```js run
function* gen() {
*!*
  // Przekaż pytanie na zewnątrz i czekaj na odpowiedź. 
  let result = yield "2 + 2?"; // (*)
*/!*

  alert(result);
}

let generator = gen();

let question = generator.next().value; // <-- yield zwraca wartość

generator.next(4); // --> przekazuje rezultat do generatora 
```
![](genYield2.png)


1. Pierwsze wywołanie `generator.next()` jest zawsze bezargumentowe. Rozpoczyna ono wykonanie i zwraca rezultat pierwszego `yield` ("2+2?"). W tym momencie generator zatrzymuje wykonanie (nadal na tej samej linii).
2. Następnie, jak pokazane na powyższym obrazku, rezultat `yield` zostaje przypisany zmiennej `question` w wywoływanym kodzie.
3. Poprzez `generator.next(4)`, generator wznawia wykonanie, i `4` zostaje przypisane zmiennej result: `let result = 4`.

Zauważ prosze, kod zewnętrzny nie musi od razu wywołać `next(4)`. Może poświęcić troche czasu na wyliczenie wartości. To też jest prawidłowy kod:

```js 
// kontynuuj działanie generatora po pewnym czasie
setTimeout(() => generator.next(4), 1000);
```

Składnia może sie wydawać dziwna. Wzajemne przekazywanie wartości pomiędzy funkcją a kodem wywołującym jest niecodziennym widokiem. Ale dokładnie tak to działa.

Aby uczynić sprawy bardziej oczywistymi, oto inny przykład, z większą ilością wywołań: 

```js run
function* gen() {
  let ask1 = yield "2 + 2?";

  alert(ask1); // 4

  let ask2 = yield "3 * 3?"

  alert(ask2); // 9
}

let generator = gen();

alert( generator.next().value ); // "2 + 2?"

alert( generator.next(4).value ); // "3 * 3?"

alert( generator.next(9).done ); // true
```

Przebieg wykonania:
![](genYield2-2.png)

1. Pierwsze `.next()` rozpoczyna wykonanie... Dochodzi do pierwszego `yield`.
2. Rezultat zostaje przekazany do kodu zewnętrznego.
3. Drugi `.next(4)` przekazuje `4` z powrotem do generatora jako rezultat pierwszego `yield`, a następnie kontynuuje wykonanie.
4. ...Wykonanie dochodzi do drugiego `yield`, ten staje sie rezultatem wywołania generatora.
5. Trzeci `next(9)` przekazuje `9` do generatora, jako rezultat drugiego `yield`, następnie kontynuuje wykonywanie, które dochodzi do końca funkcji, a więc `done: true`.

To przypomina gre w "ping-pong". Każdy `next(value)` (za wyjątkiem pierwszego) przekazuje wartość do generatora, która staje sie rezultatem aktualnego `yield`, a następnie przekazuje rezultat następnego `yield`.

## generator.throw

Jak zauważyliśmy w przykładach wyżej, kod zewnętrzny może przekazać wartość do generatora, jako rezultat `yield`.
As we observed in the examples above, the outer code may pass a value into the generator, as the result of yield.

...Ale może też zainicjować (rzucić) błąd. Jest to naturalne, ponieważ błąd też jest rodzajem rezultatu. 

Aby przekazać błąd do `yield`, powinniśmy wywołać `generator.throw(err)`. W tym przypadku, `err` jest rzucony w linijce razem z danym `yield`.

Na przykład, poniższy `yield "2+2?"` prowadzi do błędu:

```js run
function* gen() {
  try {
    let result = yield "2 + 2?"; // (1)

    alert("Wykonanie nie dosięga tej linii, z uwagi na wyjątek rzucony wyżej");
  } catch(e) {
    alert(e); // pokazuje błąd
  }
}

let generator = gen();

let question = generator.next().value;

*!*
generator.throw(new Error("Odpowiedź nie znaleziona w bazie danych.")); // (2)
*/!*
```

Błąd, rzucony do generatora w linii `(2)` prowadzi do wyjątku w linii `(1)` z `yield`. W przykładzie powyżej, `try..catch` łapie błąd i pokazuje go. 

Jeśli nie złapiemy go, to tak samo, jak w przypadku każdego innego wyjątku, "wyrzuca" generator do kodu wywołującego.

Aktualna linia wywołującego kodu to linia z `generator.throw`, oznaczona jako `(2)`. Możemy więc złapać wyjątek, tak jak w przykładzie poniżej:

```js run
function* generate() {
  let result = yield "2 + 2?"; // Błąd w tej linii.
}

let generator = generate();

let question = generator.next().value;

*!*
try {
  generator.throw(new Error("Nie ma odpowiedzi w bazie danych"));
} catch(e) {
  alert(e); // pokazuje błąd
}
*/!*
```

Jeżeli nie złapiemy tam błędu, to tak jak zwykle, "spada" do zewnętrznego kodu, i jeżeli tam niezłapany, zabija nasz skrypt. 

## Podsumowanie
    
  -  Generatory są tworzone przez funkcje generujące `function* f(...) {...}`.
  -  Tylko w ciele generatorów może istnieć operator `yield`.
  -  Generator i kod zewnętrzny mogą wymieniać pomiędzy rezultaty, za pomocą wywołań `next/yield`.

W nowoczesnym JavaScript, generatory są rzadko używane. Czasami jednak mogą się przydać, ponieważ umiejętność wymiany danych pomiędzy funkcją a kodem zewnętrznym podczas wykonania jest dość unikalna.

Poza tym, w następnym rozdziale, będziemy się uczyć o asynchronicznych generatorach, które są używane do czytania strumieni asynchronicznie wygenerowanych danych w pętli for.

W programowaniu webowym, często pracujemy z danymi strumieniowymi, przykładem jest pobieranie paginowanych rezultatów (czyli danych znajdujących sie na wielu podstronach), więc jest to bardzo ważna cecha.
