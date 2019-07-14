# Typy danych

Zmienna w JavaScript może zawierać różne dane. Zmienna może być łańcuchem znaków (string), a w innym momencie może być liczbą:

```js
// brak błędów
let message = "hello";
message = 123456;
```

Część języków programowania stosuje tak zwane "dynamiczne typowanie", które oznacza, że typy danych zmiennych mogą zmienić się w trakcie działania programu.

Wyróżniamy 7 podstawowych typów danych w JavaScript. Przedstawimy je teraz ogólnie, w następnych rozdziałach zostaną omówione szczegółowo.

## Typ liczbowy

```js
let n = 123;
n = 12.345;
```

Typ *number* reprezentuje zarówno liczby całkowite, jak i zmiennoprzecinkowe.

Jest wiele operacji na liczbach, np. mnożenie `*`, dzielenie `/`, dodawanie `+`, odejmowanie `-` itd.

Poza zwykłymi liczbami, wyróżniamy "specjalne wartości liczbowe", które także należą do tego typu danych: `Infinity`, `-Infinity` and `NaN`.

- `Infinity` reprezentuje w matematyce [Nieskończoność](https://pl.wikipedia.org/wiki/Niesko%C5%84czono%C5%9B%C4%87) ∞. Specjalna wartość, która jest większa niż jakakolwiek inna liczba.

    Nieskończoność możemy uzyskać w wyniku dzielenia przez 0:

    ```js run
    alert( 1 / 0 ); // Infinity
    ```

    Lub odwołując się bezpośrednio:

    ```js run
    alert( Infinity ); // Infinity
    ```
- `NaN` reprezentuje błąd obliczeniowy. Jest wynikiem błędnych, bądź niezdefiniowanych działań matematycznych, na przykład:

    ```js run
    alert( "wartość nieliczbowa" / 2 ); // NaN, takie działanie prowadzi do błędu
    ```

    Każda operacja z użyciem `NaN` zawsze zwraca `NaN` jako wynik:

    ```js run
    alert( "wartość nieliczbowa" / 2 + 5 ); // NaN
    ```

    Zatem, jeżeli `NaN` znajduje się w wyrażeniu matematycznym, wtedy jest jego wynikiem końcowym.

```smart header="Operacje matematyczne są bezpieczne"
Przeprowadzanie obliczeń matematycznych jest "bezpieczne" w JavaScript. Możemy: dzielić przez zero, traktowac ciągi znaków jako liczby, itd.

Skrypt nigdy nie zatrzyma się na błędzie krytycznym. W najgorszym wypadku otrzymamy NaN jako wynik działania.
```

Specjalne wartości liczbowe formalnie należą do typu "liczbowego". Oczywiście nie są liczbami w definicji matematycznej.

Więcej informacji o pracy z liczbami zawarte jest w rozdziale <info:number>.

## Typ string

String lub inaczej ciąg znaków musi zawierać się pomiędzy cudzysłowami lub apostrofami.

```js
let str = "Hello";
let str2 = 'Można użyć także apostrofów';
let phrase = `Można dołączyć zmienną ${str}`;
```

W JavaScript istnieją 3 typy apostrofów.

1. Cudzysłów: `"Hello"`.
2. Apostrofy: `'Hello'`.
3. Grawis(backtick): <code>&#96;Hello&#96;</code>.

W JavaScript nie ma różnicy między cudzysłowami a apostrofami.

Grawisy są "rozszerzeniem funkcjonalności" zwykłych apostrofów i cudzysłowów. Pozwalają na dodanie zmiennej i wyrażeń do stringa poprzez umieszczenie ich w `${…}`, przykładowo:

```js run
let name = "John";

// dołączenie zmiennej
alert( `Hello, *!*${name}*/!*!` ); // Hello, John!

// dołączenie wyrażenia
alert( `Wynikiem jest *!*${1 + 2}*/!*` ); // Wynikiem is 3
```

Wyrażenie wewnątrz `${…}` zostaje dołączone do części stringa. Do wyrażenia możemy wstawić cokolwiek: zmienną na przykład `name` lub wyrażenie arytmetyczne jak na przykład `1 + 2` lub coś bardziej złożonego.

Warto odnotować, że taki efekt można osiągnąć jedynie przy użyciu grawisów(``). Apostrofy i Cudzysłów nie mają takich możliwości.
```js run
alert( "Wynik to ${1 + 2}" ); // Wynik to ${1 + 2} (cudzysłów traktuje ${…} jako kolejną część stringa)
```

Więcej o typie string można przeczytać w rozdziale <info:string>.

```smart header="JavaScript nie posiada typu *character*."
W niektórych językach jest specjalny typ "character" dla pojedynczych znaków. Przykładowo w językach C i Java możemy użyć typu `char`.

W JavaScript nie ma takiego typu. Mamy do dyspozycji jedynie `string`. String może być pusty, zawierać też jeden lub więcej znaków.
```

## Boolean (typ logiczny)

Typ logiczny posiada 2 wartości: `true`(prawda) lub `false`(fałsz).

Boolean jest najczęsciej używany do przetrzymywania wartości takich jak tak/nie, gdzie `true` to "tak, prawda", a `false` oznacza "nie, nieprawda".

Na przykład: 

```js
let nameFieldChecked = true; // tak, pole name jest zaznaczone(checked)
let ageFieldChecked = false; // nie, pole age nie jest zaznaczone(checked)
```

Wartości typu Boolean mogą być wynikiem porównania:

```js run
let isGreater = 4 > 1;

alert( isGreater ); // true (rezultatem porównania jest "tak" - prawda)
```

Więcej informacji o typie Boolean można znaleźć w rozdziale <info:logical-operators>.

## Wartość "null"

Wartość `null` nie należy do żadnego z wyżej wymienionych typów danych.

Null posiada własny typ, który zawiera jedynie wartość `null`:

```js
let age = null;
```

W JavaScript, `null` nie odnosi się do "nieistniejącego obiektu" lub "wskaźnika zerowego" jak w innych językach programowania.

Jest specjalną wartością, która reprezentuje: "nic", "brak wartości" lub "nieznaną wartość".

Kod powyżej zakłada, że wartość zmiennej `age` jest pusta bądź nieznana z jakiegoś powodu.

## Wartość "undefined"

Wartość `undefined` podobnie jak `null` posiada także swój własny typ.

WArtość `undefined` oznacza, że "wartość nie jest przypisana"

W przypadku zadeklarowania zmiennej bez przypisania do konkretnej wartości, domyślna wartość to `undefined`:

```js run
let x;

alert(x); // wyświetla "undefined"
```

W zasadzie możliwe jest przypisanie `undefined` do zmiennej:

```js run
let x = 123;

x = undefined;

alert(x); // "undefined"
```

...Jednak nie zalecamy tworzenia zmiennych o wartości `undefined`. Zazwyczaj używamy `null` dla zmiennych bez wartości, `undefined` przydaje się przy sprawdzaniu czy zmienna została przypisana do jakiejś wartości.

## Obiekty i Symbole

Typ `object`.

Wszystkie inne typy zwane są "prostymi" (primitive), ponieważ ich wartości mogą przechowywać tylko jedną rzecz(może to być string, liczba, Boolean itd.). W przeciwieństwie do typów prostych, obiekty używane są do przechowywania większych kolekcji danych. Więcej o obiektach omówimy poźniej w rozdziale <info:object> po wcześniejszym omówieniu typów prostych.

Typ `symbol` jest używany do tworzenia unikalnych identyfikatorów dla obiektów. Temat typu `symbol` został jedynie nadmieniony, zdecydowanie lepiej jest poznać ten typ po zrozumieniu samych obiektów.

## Operator typeof [#type-typeof]

Operator `typeof` zwraca typ danego argumentu. Jest użyteczny kiedy chcemy, gdy chcemy przetworzyć wartości różnych typów lub sprawdzić sam typ.

Występują dwie formy zapisu:

1. Jako operator: `typeof x`.
2. Jako funkcja `typeof(x)`.

Innymi słowy, nie ma różnicy w użyciu nawiasów, wynik jest ten sam.

Wywołanie `typeof x` zwraca string z nazwą typu:

```js
typeof undefined // "undefined"

typeof 0 // "number"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

*!*
typeof Math // "object"  (1)
*/!*

*!*
typeof null // "object"  (2)
*/!*

*!*
typeof alert // "function"  (3)
*/!*
```

Ostatnie trzy linijki wymagają dodatkowego wyjaśnienia.

1. `Math` jest wbudowanym obiektem, który daje dostęp do operacji matematycznych. Dowiemy się więcej w rozdziale <info:number>. W tym przypadku służy jako przykład obiektu.
2. Wynikiem wywołania `typeof null` jest `object`. Jest to znany błąd związany z `typeof`, nie jest poprawiony ze względu na wsteczną kompatybilność. Oczywiście `null` nie jest obiektem, posiada własny typ.
3. Wynikiem wywołania `typeof alert` jest `"function"` ze względu na to, że `alert` jest po prostu funkcją. O funkcjach dowiemy się więcej w następnych rozdziałach, gdzie można zauważyć, że nie ma typu "function" w JavaScript. Funkcje należą do typu object. Jednak `typeof` traktuje funkcje inaczej, zwracając `"function"`, co nie jest do końca poprawne, lecz bardzo wygodne w praktyce.


## Podsumowanie

Wyróżniamy 7 podstawowych typów danych w JavaScript.

- `number` dla wszystkich liczb: całkowitych lub zmiennoprzecinkowych.
- `string` dla ciągów znaków. String może być pusty, zawierać też jeden lub więcej znaków, nie ma oddzielnego typu dla pojedynczego znaku.
- `boolean` dla `true`/`false`(prawda/fałsz).
- `null` dla pustych wartości -- autonomiczny typ, który posiada jedną wartość `null`.
- `undefined` dla niezdefiniowanych wartości -- autonomiczny typ, który posiada jedną wartość `undefined`.
- `object` dla bardziej złożonych struktur danych.
- `symbol` dla unikalnych identyfikatorów.

Operator `typeof` pozwala na sprawdzenie typu zmiennej.

- Dwie formy: `typeof x` lub `typeof(x)`.
- Zwraca string z nazwą danego typu, na przykład `"string"`.
- Dla wartości `null` zwraca `"object"` -- jest to błąd w JavaScript, `null` nie jest typu object.

W następnych rozdziałach, Skupimy się na typach prostych, wraz ze zrozumieniem tego tematu, poznamy obiekty.
