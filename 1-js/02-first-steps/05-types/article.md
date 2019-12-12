# Typy danych

Zmienna w JavaScripcie może zawierać różne dane. Zmienna może być w jednej chwili łańcuchem znaków (ang. *string*), a w innym liczbą:

```js
// nie ma tu błędów
let message = "hello";
message = 123456;
```

Część języków programowania stosuje tak zwane "dynamiczne typowanie", które oznacza, że typy danych zmiennych mogą zmienić się w trakcie działania programu.

Wyróżniamy 8 podstawowych typów danych w JavaScripcie. Przedstawimy je teraz ogólnie, w następnych rozdziałach omówimy bardziej szczegółowo.

## Typ liczbowy

```js
let n = 123;
n = 12.345;
```

Typ *number* reprezentuje zarówno liczby całkowite, jak i zmiennoprzecinkowe.

Istnieje wiele operacji na liczbach, np. mnożenie `*`, dzielenie `/`, dodawanie `+`, odejmowanie `-` itd.

Poza zwykłymi liczbami, wyróżniamy "specjalne wartości liczbowe", które także należą do tego typu danych: `Infinity`, `-Infinity` and `NaN`.

- `Infinity` reprezentuje w matematyce [nieskończoność](https://pl.wikipedia.org/wiki/Niesko%C5%84czono%C5%9B%C4%87) ∞. To specjalna wartość, która jest większa niż jakakolwiek inna liczba.

    Nieskończoność możemy uzyskać w wyniku dzielenia przez 0:

    ```js run
    alert( 1 / 0 ); // Infinity
    ```

    Lub odwołując się do niej bezpośrednio:

    ```js run
    alert( Infinity ); // Infinity
    ```
- `NaN` reprezentuje błąd obliczeniowy. Jest wynikiem błędnych bądź niezdefiniowanych działań matematycznych, na przykład:

    ```js run
    alert( "wartość nieliczbowa" / 2 ); // NaN, takie działanie prowadzi do błędu
    ```

    Każda operacja z użyciem `NaN` zawsze zwraca `NaN` jako wynik:

    ```js run
    alert( "wartość nieliczbowa" / 2 + 5 ); // NaN
    ```

    Zatem, jeżeli `NaN` znajduje się w wyrażeniu matematycznym, staje się też jego wynikiem końcowym.

```smart header="Operacje matematyczne są bezpieczne"
Przeprowadzanie obliczeń matematycznych w JavaScripcie jest "bezpieczne". Możemy dzielić przez zero, traktować ciągi znaków jako liczby itd.

Skrypt nigdy nie zatrzyma się na błędzie krytycznym. W najgorszym wypadku otrzymamy `NaN` jako wynik działania.
```

Specjalne wartości liczbowe formalnie należą do typu "liczbowego". Oczywiście nie są liczbami w definicji matematycznej.

Więcej informacji o pracy z liczbami zawarte jest w rozdziale pt. "<info:number>".

## BigInt

W JavaScripcie typ liczbowy nie może reprezentować liczb całkowitych większych od <code>2<sup>53</sup></code> (ani ujemnych mniejszych od <code>-2<sup>53</sup></code>) ze względu na ograniczenia techniczne narzucone przez jego reprezentację wewnętrzną. Daje to liczby o długości około 16 cyfr, co w większości przypadków wystarcza. Jednak czasami potrzebujemy skorzystać z naprawdę dużych liczb, np. w krytografii czy znaczników czasowych z dokładnością do mikrosekund.

Typ `BigInt` został niedawno dodany do języka i reprezentuje liczby całkowite o dowolnej długości.

`BigInt` tworzy się poprzez dodanie `n` na końcu liczby:

```js
// "n" na końcu oznacza, że to liczba typu BigInt
const bigInt = 1234567890123456789012345678901234567890n;
```

Z racji tego, że liczby typu `BigInt` są rzadko stosowane, poświęciliśmy im osobny rozdział pt. "<info:bigint>".

```smart header="Problemy z kompatybilnością"
Aktualnie dla typu `BigInt` wsparcie posiadają przeglądarki Firefox i Chrome. Brakuje go w Safari/IE/Edge.
```

## Typ tekstowy

Ciąg znaków (ang. *string*), zwany także "literałem znakowym" lub "napisem", to typ tekstowy, który zapisujemy przy użyciu cudzysłowów.

```js
let str = "Witaj";
let str2 = 'Można użyć także apostrofów';
let phrase = `Można dołączyć dodatkową zmienną ${str}`;
```

W JavaScripcie istnieją 3 typy cudzysłowów.

1. Cudzysłowy: `"Witaj"`.
2. Apostrofy: `'Witaj'`.
3. Grawisy (ang. *backtick*): <code>&#96;Witaj&#96;</code>.

Pojedyncze i podwójne cudzysłowy są cudzysłowami prostymi. W JavaScripcie nie ma między nimi żadnej różnicy.

Grawisy są "rozszerzeniem funkcjonalności" zwykłych apostrofów i cudzysłowów. Pozwalają na dodanie zmiennej i wyrażeń do ciągu znaków poprzez umieszczenie ich wewnątrz `${…}`, przykładowo:

```js run
let name = "Jasiu";

// dołączenie zmiennej
alert( `Witaj, *!*${name}*/!*!` ); // Witaj, Jasiu!

// dołączenie wyrażenia
alert( `Wynik to *!*${1 + 2}*/!*` ); // Wynik to 3
```

Wyrażenie wewnątrz `${…}` zostaje dołączone do części ciągu znaków. Do wyrażenia możemy wstawić cokolwiek: zmienną, na przykład `name`, lub wyrażenie arytmetyczne, jak na przykład `1 + 2`, lub coś bardziej złożonego.

Warto odnotować, że taki efekt można osiągnąć jedynie przy użyciu grawisów (``). Apostrofy i cudzysłowy nie mają takich możliwości.
```js run
alert( "Wynik to ${1 + 2}" ); // Wynik to ${1 + 2} (cudzysłów traktuje ${…} jako część napisu)
```

Więcej o ciągach znaków można przeczytać w rozdziale pt. "<info:string>".

```smart header="JavaScript nie posiada typu *znakowego*."
W niektórych językach istnieje specjalny typ "znakowy", używany do przechowywania pojedynczych znaków. Przykładowo, w językach C i Java możemy użyć typu o nazwie "char".

W JavaScripcie nie ma takiego typu. Mamy do dyspozycji jedynie `string`. Ciąg znaków może być pusty albo zawierać jeden i więcej znaków.
```

## Typ logiczny (boolean)

Typ logiczny (ang. *boolean*) posiada dwie wartości: `true` (prawda) lub `false` (fałsz).

Ty logiczny jest najczęsciej używany do przechowywania wartości pokroju "tak/nie", gdzie `true` to "tak, prawda", a `false` oznacza "nie, nieprawda".

Na przykład: 

```js
let nameFieldChecked = true; // tak, pole "name" jest zaznaczone (ang. *checked*)
let ageFieldChecked = false; // nie, pole "age" nie jest zaznaczone
```

Wartości typu logicznego mogą być wynikiem porównania:

```js run
let isGreater = 4 > 1;

alert( isGreater ); // true (rezultatem porównania jest "tak" - prawda)
```

Więcej informacji o typie logicznym można znaleźć w rozdziale pt. "<info:logical-operators>".

## Wartość "null"

Wartość `null` (zwana także "literałem pustym") nie należy do żadnego z wyżej wymienionych typów danych.

Literał pusty posiada własny typ, którego jedyną wartością jest `null`:

```js
let age = null;
```

W JavaScripcie `null` nie odnosi się do "nieistniejącego obiektu" lub "wskaźnika zerowego", jak ma to miejsce w innych językach programowania.

Jest specjalną wartością, która reprezentuje "nic", "brak wartości" lub "nieznaną wartość".

Kod powyżej zakłada, że wartość zmiennej `age` jest pusta bądź nieznana z jakiegoś powodu.

## Wartość "undefined"

Wartość `undefined` (pol. *niezdefiniowana*), podobnie jak `null`, posiada swój własny typ.

Wartość `undefined` oznacza, że "wartość zmiennej nie jest przypisana"

W przypadku zadeklarowania zmiennej bez przypisania do niej konkretnej wartości, domyślna wartość to `undefined`:

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

... Jednak nie zalecamy tworzenia zmiennych o wartości `undefined`. Zazwyczaj używamy `null` dla zmiennych bez wartości, `undefined` przydaje się przy sprawdzaniu czy zmienna została przypisana do jakiejś wartości.

## Obiekty i symbole

Typ `object` jest jedyny w swoim rodzaju.

Wszystkie inne typy zwane są "prostymi" (ang. *primitive*), ponieważ ich wartości mogą przechowywać tylko jedną rzecz (może to być ciąg znaków, liczba, typ logiczny itd.). W przeciwieństwie do typów prostych, obiekty używane są do przechowywania większych kolekcji danych. Więcej o obiektach omówimy poźniej w rozdziale pt. "<info:object>", po wcześniejszym omówieniu typów prostych.

Typ `symbol` jest używany do tworzenia unikalnych identyfikatorów dla obiektów. Wspominamy o nim tylko dla kompletności tego rozdziału, niemniej zdecydowanie lepiej jest poznać ten typ po zrozumieniu samych obiektów.

## Operator "typeof" [#type-typeof]

Operator `typeof` zwraca typ danego argumentu. Jest użyteczny, gdy chcemy przetworzyć wartości różnych typów lub sprawdzić sam typ.

Występują dwa sposoby na użycie tego operatora:

1. Jako operator: `typeof x`.
2. Jako funkcja `typeof(x)`.

Innymi słowy, bez względu na to, czy użyjemy nawiasów czy nie - wynik jest ten sam.

Wywołanie `typeof x` zwraca ciąg znaków z nazwą typu sprawdzanej zmiennej:

```js
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "coś" // "string"

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

1. `Math` jest wbudowanym obiektem, który daje dostęp do operacji matematycznych. Dowiemy się o nim więcej w rozdziale pt. "<info:number>". W tym przypadku posłużył jako przykład obiektu.
2. Wynikiem wywołania `typeof null` jest `object`. Jest to znany błąd związany z `typeof`, nie został on jednak poprawiony ze względu na wsteczną kompatybilność. Oczywiście `null` nie jest obiektem - posiada własny typ.
3. Wynikiem wywołania `typeof alert` jest `"function"` ze względu na to, że `alert` jest po prostu funkcją. O funkcjach napisaliśmy więcej w następnych rozdziałach, gdzie zauważamy, że tak naprawdę nie ma typu "function" w JavaScripcie. Funkcje należą do typu "object". Jednak `typeof` traktuje funkcje inaczej, zwracając `"function"`, co nie jest do końca poprawne, lecz bardzo wygodne w praktyce.


## Podsumowanie

W JavaScripcie wyróżniamy 8 podstawowych typów danych.

- `number` dla wszystkich liczb: całkowitych lub zmiennoprzecinkowych.
- `bigint` dla liczb całkowitych o dowolnej długości.
- `string` dla ciągów znaków. Może być pusty albo zawierać jeden czy więcej znaków; nie ma oddzielnego typu dla pojedynczego znaku.
- `boolean` dla `true`/`false` (prawda/fałsz).
- `null` dla pustych wartości -- autonomiczny typ, który posiada jedną wartość: `null`.
- `undefined` dla niezdefiniowanych wartości -- autonomiczny typ, który posiada jedną wartość: `undefined`.
- `object` dla bardziej złożonych struktur danych.
- `symbol` dla unikalnych identyfikatorów.

Operator `typeof` pozwala na sprawdzenie typu zmiennej.

- Istnieją dwie formy: `typeof x` lub `typeof(x)`.
- Zwraca ciąg znaków z nazwą danego typu, na przykład `"string"`.
- Dla wartości `null` zwraca `"object"` -- jest to błąd w JavaScripcie, ponieważ `null` nie jest typu "object".

W następnych rozdziałach skupimy się na typach prostych, a gdy już będziemy z nimi zaznajomieni, poznamy obiekty.
