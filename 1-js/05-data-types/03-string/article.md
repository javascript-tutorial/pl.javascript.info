# Łańcuchy

W JavaScript dane tekstowe są przechowywane jako łańcuchy (ciągi znaków). Nie ma oddzielnego typu dla pojedynczego znaku.

Wewnętrzny format ciągów to zawsze [UTF-16](https://pl.wikipedia.org/wiki/UTF-16), nie jest on powiązany z kodowaniem strony

## Cudzysłów

W JavaScript istnieją różne rodzaje cudzysłowów.

Ciąg można utworzyć za pomocą cudzysłowów pojedynczych, podwójnych lub grawisów:

```js
let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;
```

Pojedyncze i podwójne cudzysłowy są zasadniczo takie same. Grawisy natomiast pozwalają nam osadzić dowolne wyrażenie w łańcuchu, owijając je w `${…}`:

```js run
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
```

Kolejną zaletą grawisów jest to, że mogą obejmować więcej niż jedną linię, na przykład:

```js run
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // lista gości, wiele wierszy
```

Wygląda całkiem naturalnie, prawda? Jeśli jednak spróbujesz użyć pojedynczych lub podwójnych cudzysłowów w ten sam sposób, wystąpi błąd:

```js run
let guestList = "Guests: // Error: Unexpected token ILLEGAL
  * John";
```

Pojedyncze i podwójne cudzysłowy pochodzą ze starożytnych czasów tworzenia języka, kiedy nie brano pod uwagę potrzeby wielowierszowych ciągów. Grawisy pojawiły się znacznie później i dzięki temu są bardziej wszechstronne.

Grawisy umożliwia również określenie "funkcji szablonu" przed pierwszym grawisem. Składnia to: <code>func&#96;string&#96;</code>. Automatycznie wywoływana funkcja `func` pobiera osadzony w niej ciąg znaków i wyrażenia i może je przetwarzać. Nazywa się to „otagowanymi szablonami”. Ta funkcjonalność ułatwia implementację niestandardowych szablonów, ale jest rzadko używana w praktyce. Więcej na ten temat przeczytasz w [dokumentacji](mdn:/JavaScript/Reference/Template_literals#Tagged_templates). 

## Znaki specjalne

Ciągi wielowierszowe można również tworzyć za pomocą pojedynczych i podwójnych cudzysłowów, używając do tego tak zwanego "znaku nowej linii", który jest zapisany jako `\n`:

```js run
let guestList = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList); // wielowierszowa lista gości
```

Te dwie linie są takie same, po prostu napisane inaczej:

```js run
let str1 = "Hello\nWorld"; // nowa linia ze "znaku nowej linii"

// nowa linia utworzona przy pomocy grawisów
let str2 = `Hello
World`;

alert(str1 == str2); // true
```

Istnieją inne rzadziej używane "znaki specjalne".

Oto pełna lista:

| Znak | Opis |
|-----------|-------------|
|`\n`|Nowa linia|
|`\r`|Znak powrotu: nie używany samodzielnie. Pliki tekstowe Windows używają kombinacji dwóch znaków `\r\n` do reprezentowania łamania wiersza. |
|`\'`, `\"`|Cudzysłów|
|`\\`|Ukośnik wsteczny|
|`\t`|Tabulacja|
|`\b`, `\f`, `\v`| Backspace, Form Feed oraz Vertical Tab -- pozostawione do wstecznej kompatybilności, obecnie nieużywane. |
|`\xXX`|Znak Unicode o podanym szesnastkowym kodzie`XX`, np. `'\x7A'` to to samo co `'z'`.|
|`\uXXXX`|Znak Unicode z kodem szesnastkowym `XXXX` w kodowaniu UTF-16, np. `\u00A9` -- kod Unicode dla symbolu praw autorskich `©`. Musi mieć dokładnie 4 cyfry szesnastkowe. |
|`\u{X…XXXXXX}` (od 1 do 6 znaków szesnastkowych)|Znak Unicode z podanym kodowaniem UTF-32. Niektóre rzadkie znaki są zakodowane za pomocą dwóch symboli Unicode, zajmując 4 bajty. W ten sposób możemy wstawiać długie kody. |

Przykłady z Unicode:

```js run
alert( "\u00A9" ); // ©
alert( "\u{20331}" ); // 佫, rzadki chiński znak (długi Unicode)
alert( "\u{1F60D}" ); // 😍, symbol uśmiechniętej buźki (kolejny długi Unicode)
```

Wszystkie znaki specjalne zaczynają się od odwrotnego ukośnika `\`, tzw. "znak ucieczki".

Możemy go również użyć, jeśli chcemy wstawić cytat do łańcucha.

Na przykład:

```js run
alert( 'I*!*\'*/!*m the Walrus!' ); // *!*I'm*/!* the Walrus!
```

Jak widać, wewnętrzny cytat musimy poprzedzić `\'`, ponieważ w przeciwnym razie oznaczałoby to koniec ciągu.

Oczywiście wymóg użycia "znaku ucieczki" dotyczy tylko tych samych cudzysłowów budujących łańcuch. Możemy więc użyć bardziej eleganckiego rozwiązania, używając podwójnych cudzysłowów lub znaków wstecznych dla tego ciągu:

```js run
alert( `I'm the Walrus!` ); // I'm the Walrus!
```

Zauważ, że znak ucieczki `\` służy tylko do poprawnego odczytania wiersza przez JavaScript i nie jest dopisywany do wiersza. Łańcuch nie ma go w pamięci. Widać to wyraźnie w wywołaniu funkcji `alert` na powyższym przykładzie.

Ale co, jeśli musimy pokazać wsteczny ukośnik `\` w łańcuchu?

To możliwe, ale musimy go podwoić `\\`:

```js run
alert( `The backslash: \\` ); // The backslash: \
```

## Długość łańcucha

Właściwość `length` zawiera długość ciągu:

```js run
alert( `My\n`.length ); // 3
```

Pamiętaj, że `\n` to pojedynczy "znak specjalny", więc długość łańcucha wynosi `3`.

```warn header="`length` jest wartością"
Zdarza się, że osoby z praktyką w innych językach przypadkowo dodają nawiasy `str.length()`, zamiast po prostu `str.length`. To nie zadziała.

Należy pamiętać, że `str.length` jest właściwością numeryczną, a nie funkcją. Nie ma potrzeby dodawania po nim nawiasu.
```

## Dostęp do znaków

Aby uzyskać znak w pozycji `pos`, użyj nawiasów kwadratowych `[pos]` lub wywołaj metodę [str.charAt(pos)](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/String/charAt). Pierwszy znak zaczyna się od pozycji zerowej:

```js run
let str = `Hello`;

// zwraca pierwszy znak
alert( str[0] ); // H
alert( str.charAt(0) ); // H

// zwraca ostatni znak
alert( str[str.length - 1] ); // o
```

Nawiasy kwadratowe to nowoczesny sposób na uzyskanie znaku, natomiast `charAt` istnieje głównie ze względów historycznych.

Jedyna różnica między nimi polega na tym, że jeśli nie zostanie znaleziony żaden znak, `[]` zwraca `undefined`, a `charAt` zwraca pusty ciąg:

```js run
let str = `Hello`;

alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // '' (pusty ciąg)
```

Możemy również iterować po znakach, używając `for..of`:

```js run
for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char - najpierw "H", później "e", następnie "l" itd.)
}
```

## Łańcuchy są niezmienne

Treść łańcucha w JavaScript nie może być zmieniona. Nie można wziąć znaku ze środka ciągu i zastąpić go innym.

Spróbujmy i zobaczmy, czy to nie działa:

```js run
let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // nie działa
```

Powszechnym obejściem tego problemu jest utworzenie zupełnie nowego łańcucha i przypisanie go do `str` zamiast starego.

Na przykład:

```js run
let str = 'Hi';

str = 'h' + str[1]; // zamieniamy ciąg

alert( str ); // hi
```

Więcej przykładów zobaczymy w kolejnych sekcjach.

## Zmiana wielkości znaków

Metody [toLowerCase()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) i [toUpperCase()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) zmieniają wielkość liter:

```js run
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
```

Lub, jeśli chcemy, aby jeden znak był pisany małymi literami:

```js
alert( 'Interface'[0].toLowerCase() ); // 'i'
```

## Wyszukiwanie podciągu

Istnieje wiele sposobów wyszukiwania podciągu w ciągu.

### str.indexOf

Pierwszą metodą jest [str.indexOf(substr, pos)](mdn:js/String/indexOf).

Szuka `substr` w `str`, zaczynając od podanej pozycji `pos`, i zwraca pozycję, w której znalazł dopasowanie lub `-1` jeśli nic nie zostało znalezione.

Na przykład:

```js run
let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because 'Widget' został znaleziony na początku łańcucha
alert( str.indexOf('widget') ); // -1, nie znaleziono, w wyszukiwaniu rozróżniana jest wielkość liter

alert( str.indexOf("id") ); // 1, "id" znajduje się na pozycji 1 (id w Widget)
```

Opcjonalny drugi parametr pozwala nam na wyszukiwanie zaczynając od podanej pozycji.

Na przykład pierwsze wystąpienie `"id"` występuje na pozycji `1`. Aby wyszukać następne wystąpienie, zacznijmy wyszukiwanie od pozycji `2`:

```js run
let str = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12
```

Jeśli interesują nas wszystkie wystąpienia, możemy uruchomić `indexOf` w pętli. Każde nowe wywołanie jest wykonywane na następnej pozycji w łańcuchu po poprzednim dopasowaniu:

```js run
let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // cel wyszukiwania

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // kontynuuj wyszukiwanie od następnej pozycji
}
```

Ten sam algorytm można skrócić:

```js run
let str = "As sly as a fox, as strong as an ox";
let target = "as";

*!*
let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}
*/!*
```

```smart header="`str.lastIndexOf(substr, position)`"
Istnieje również podobna metoda [str.lastIndexOf(substr, position)](mdn:js/String/lastIndexOf), która przeszukuje string od końca do jego początku.

Zwraca wystąpienia w odwrotnej kolejności.
```

Istnieje niewielka niedogodność z metodą `indexOf` w sprawdzeniu warunkowym `if`. Ten warunek nie zadziała prawidłowo:

```js run
let str = "Widget with id";

if (str.indexOf("Widget")) {
    alert("We found it"); // Nie zadziała!
}
```

`alert` w powyższym przykładzie nie jest wyświetlany, ponieważ `str.indexOf("Widget")` zwraca `0` (co oznacza, że ​​znalazł dopasowanie na pozycji wyjściowej). Natomiast warunek `if` odczytuje `0` jako `false`.

Dlatego też powinniśmy użyć warunku dla wartości `-1`:

```js run
let str = "Widget with id";

*!*
if (str.indexOf("Widget") != -1) {
*/!*
    alert("We found it"); // works now!
}
```

#### Bitowy trik NOT

Istnieje stara sztuczka z użyciem [bitowego operatora NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT) `~`. Konwertuje liczbę na 32-bitową liczbę całkowitą (usuwa część dziesiętną, jeśli istnieje), a następnie odwraca wszystkie bity w reprezentacji binarnej.

W praktyce oznacza to, że: dla 32-bitowych liczb całkowitych `~n` równa się `-(n+1)`.

Na przykład:

```js run
alert( ~2 ); // -3, to samo, co -(2+1)
alert( ~1 ); // -2, to samo, co -(1+1)
alert( ~0 ); // -1, to samo, co -(0+1)
*!*
alert( ~-1 ); // 0, to samo, co -(-1+1)
*/!*
```

Zatem `~n` jest równe zeru, tylko, gdy `n == -1` (dowolna 32-bitowa liczby całkowitej ze znakiem `n`).

Tak więc warunek `if ( ~str.indexOf("...") )` jest prawdziwy tylko wtedy, gdy wynikiem `indexOf` nie jest `-1`. Innymi słowy, kiedy jest dopasowanie.

Ludzie używają go do skrócenia `indexOf`:

```js run
let str = "Widget";

if (~str.indexOf("Widget")) {
  alert( 'Found it!' ); // działa
}
```

Generalnie odradza się używanie funkcji językowych w jakikolwiek nieoczywisty sposób, ale ta sztuczka jest szeroko stosowana w starszym kodzie, więc ważne jest, aby ją zrozumieć.

Wystarczy, że zapamiętasz: `if (~str.indexOf(...))` oznacza "jeśli znaleziono".

Aby być precyzyjnym, należy wspomnieć, że z powodu iż, duże liczby są obcinane przez operator `~` do 32 bitów, istnieją inne liczby, które dają 0. Najmniejsza to `~4294967295=0`. To sprawia, że ​​takie sprawdzenie jest poprawne tylko wtedy, gdy łańcuch nie jest tak długi.

Aktualnie tę sztuczkę możemy zobaczyć tylko w starym kodzie, ponieważ współczesny JavaScript zapewnia metodę .includes (patrz poniżej).

### includes, startsWith, endsWith

Bardziej nowoczesna metoda [str.includes(substr, pos)](mdn:js/String/includes) zwraca `true/false` w zależności, czy `str` zawiera w sobie `substr`.

To właściwy wybór, jeśli musimy sprawdzić wystąpienie jakiegoś podciągu, ale nie interesuje nas jego pozycja w łańcuchu:

```js run
alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false
```

Opcjonalny drugi argument `str.includes` to pozycja, od której należy rozpocząć wyszukiwanie:

```js run
alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, od pozycji 3 "id nie występuje
```

Metody [str.startsWith](mdn:js/String/startsWith) i [str.endsWith](mdn:js/String/endsWith) sprawdzają odpowiednio, czy łańcuch zaczyna się i kończy na określonym podciągu:

```js run
alert( "Widget".startsWith("Wid") ); // true, "Widget" zaczyna się od "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" kończy się na "get"
```

## Getting a substring

There are 3 methods in JavaScript to get a substring: `substring`, `substr` and `slice`.

`str.slice(start [, end])`
: Returns the part of the string from `start` to (but not including) `end`.

    For instance:

    ```js run
    let str = "stringify";
    alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
    alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0
    ```

    If there is no second argument, then `slice` goes till the end of the string:

    ```js run
    let str = "st*!*ringify*/!*";
    alert( str.slice(2) ); // 'ringify', from the 2nd position till the end
    ```

    Negative values for `start/end` are also possible. They mean the position is counted from the string end:

    ```js run
    let str = "strin*!*gif*/!*y";

    // start at the 4th position from the right, end at the 1st from the right
    alert( str.slice(-4, -1) ); // 'gif'
    ```

`str.substring(start [, end])`
: Returns the part of the string *between* `start` and `end`.

    This is almost the same as `slice`, but it allows `start` to be greater than `end`.

    For instance:

    ```js run
    let str = "st*!*ring*/!*ify";

    // these are same for substring
    alert( str.substring(2, 6) ); // "ring"
    alert( str.substring(6, 2) ); // "ring"

    // ...but not for slice:
    alert( str.slice(2, 6) ); // "ring" (the same)
    alert( str.slice(6, 2) ); // "" (an empty string)

    ```

    Negative arguments are (unlike slice) not supported, they are treated as `0`.

`str.substr(start [, length])`
: Returns the part of the string from `start`, with the given `length`.

    In contrast with the previous methods, this one allows us to specify the `length` instead of the ending position:

    ```js run
    let str = "st*!*ring*/!*ify";
    alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters
    ```

    The first argument may be negative, to count from the end:

    ```js run
    let str = "strin*!*gi*/!*fy";
    alert( str.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters
    ```

Let's recap these methods to avoid any confusion:

| method | selects... | negatives |
|--------|-----------|-----------|
| `slice(start, end)` | from `start` to `end` (not including `end`) | allows negatives |
| `substring(start, end)` | between `start` and `end` | negative values mean `0` |
| `substr(start, length)` | from `start` get `length` characters | allows negative `start` |

```smart header="Which one to choose?"
All of them can do the job. Formally, `substr` has a minor drawback: it is described not in the core JavaScript specification, but in Annex B, which covers browser-only features that exist mainly for historical reasons. So, non-browser environments may fail to support it. But in practice it works everywhere.

Of the other two variants, `slice` is a little bit more flexible, it allows negative arguments and shorter to write. So, it's enough to remember solely `slice` of these three methods.
```

## Comparing strings

As we know from the chapter <info:comparison>, strings are compared character-by-character in alphabetical order.

Although, there are some oddities.

1. A lowercase letter is always greater than the uppercase:

    ```js run
    alert( 'a' > 'Z' ); // true
    ```

2. Letters with diacritical marks are "out of order":

    ```js run
    alert( 'Österreich' > 'Zealand' ); // true
    ```

    This may lead to strange results if we sort these country names. Usually people would expect `Zealand` to come after `Österreich` in the list.

To understand what happens, let's review the internal representation of strings in JavaScript.

All strings are encoded using [UTF-16](https://en.wikipedia.org/wiki/UTF-16). That is: each character has a corresponding numeric code. There are special methods that allow to get the character for the code and back.

`str.codePointAt(pos)`
: Returns the code for the character at position `pos`:

    ```js run
    // different case letters have different codes
    alert( "z".codePointAt(0) ); // 122
    alert( "Z".codePointAt(0) ); // 90
    ```

`String.fromCodePoint(code)`
: Creates a character by its numeric `code`

    ```js run
    alert( String.fromCodePoint(90) ); // Z
    ```

    We can also add unicode characters by their codes using `\u` followed by the hex code:

    ```js run
    // 90 is 5a in hexadecimal system
    alert( '\u005a' ); // Z
    ```

Now let's see the characters with codes `65..220` (the latin alphabet and a little bit extra) by making a string of them:

```js run
let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
```

See? Capital characters go first, then a few special ones, then lowercase characters, and `Ö` near the end of the output.

Now it becomes obvious why `a > Z`.

The characters are compared by their numeric code. The greater code means that the character is greater. The code for `a` (97) is greater than the code for `Z` (90).

- All lowercase letters go after uppercase letters because their codes are greater.
- Some letters like `Ö` stand apart from the main alphabet. Here, it's code is greater than anything from `a` to `z`.

### Correct comparisons

The "right" algorithm to do string comparisons is more complex than it may seem, because alphabets are different for different languages.

So, the browser needs to know the language to compare.

Luckily, all modern browsers (IE10- requires the additional library [Intl.JS](https://github.com/andyearnshaw/Intl.js/)) support the internationalization standard [ECMA 402](http://www.ecma-international.org/ecma-402/1.0/ECMA-402.pdf).

It provides a special method to compare strings in different languages, following their rules.

The call [str.localeCompare(str2)](mdn:js/String/localeCompare) returns an integer indicating whether `str` is less, equal or greater than `str2` according to the language rules:

- Returns a negative number if `str` is less than `str2`.
- Returns a positive number if `str` is greater than `str2`.
- Returns `0` if they are equivalent.

For instance:

```js run
alert( 'Österreich'.localeCompare('Zealand') ); // -1
```

This method actually has two additional arguments specified in [the documentation](mdn:js/String/localeCompare), which allows it to specify the language (by default taken from the environment, letter order depends on the language) and setup additional rules like case sensitivity or should `"a"` and `"á"` be treated as the same etc.

## Internals, Unicode

```warn header="Advanced knowledge"
The section goes deeper into string internals. This knowledge will be useful for you if you plan to deal with emoji, rare mathematical or hieroglyphic characters or other rare symbols.

You can skip the section if you don't plan to support them.
```

### Surrogate pairs

All frequently used characters have 2-byte codes. Letters in most european languages, numbers, and even most hieroglyphs, have a 2-byte representation.

But 2 bytes only allow 65536 combinations and that's not enough for every possible symbol. So rare symbols are encoded with a pair of 2-byte characters called "a surrogate pair".

The length of such symbols is `2`:

```js run
alert( '𝒳'.length ); // 2, MATHEMATICAL SCRIPT CAPITAL X
alert( '😂'.length ); // 2, FACE WITH TEARS OF JOY
alert( '𩷶'.length ); // 2, a rare Chinese hieroglyph
```

Note that surrogate pairs did not exist at the time when JavaScript was created, and thus are not correctly processed by the language!

We actually have a single symbol in each of the strings above, but the `length` shows a length of `2`.

`String.fromCodePoint` and `str.codePointAt` are few rare methods that deal with surrogate pairs right. They recently appeared in the language. Before them, there were only [String.fromCharCode](mdn:js/String/fromCharCode) and [str.charCodeAt](mdn:js/String/charCodeAt). These methods are actually the same as `fromCodePoint/codePointAt`, but don't work with surrogate pairs.

Getting a symbol can be tricky, because surrogate pairs are treated as two characters:

```js run
alert( '𝒳'[0] ); // strange symbols...
alert( '𝒳'[1] ); // ...pieces of the surrogate pair
```

Note that pieces of the surrogate pair have no meaning without each other. So the alerts in the example above actually display garbage.

Technically, surrogate pairs are also detectable by their codes: if a character has the code in the interval of `0xd800..0xdbff`, then it is the first part of the surrogate pair. The next character (second part) must have the code in interval `0xdc00..0xdfff`. These intervals are reserved exclusively for surrogate pairs by the standard.

In the case above:

```js run
// charCodeAt is not surrogate-pair aware, so it gives codes for parts

alert( '𝒳'.charCodeAt(0).toString(16) ); // d835, between 0xd800 and 0xdbff
alert( '𝒳'.charCodeAt(1).toString(16) ); // dcb3, between 0xdc00 and 0xdfff
```

You will find more ways to deal with surrogate pairs later in the chapter <info:iterable>. There are probably special libraries for that too, but nothing famous enough to suggest here.

### Diacritical marks and normalization

In many languages there are symbols that are composed of the base character with a mark above/under it.

For instance, the letter `a` can be the base character for: `àáâäãåā`. Most common "composite" character have their own code in the UTF-16 table. But not all of them, because there are too many possible combinations.

To support arbitrary compositions, UTF-16 allows us to use several unicode characters: the base character followed by one or many "mark" characters that "decorate" it.

For instance, if we have `S` followed by the special "dot above" character (code `\u0307`), it is shown as Ṡ.

```js run
alert( 'S\u0307' ); // Ṡ
```

If we need an additional mark above the letter (or below it) -- no problem, just add the necessary mark character.

For instance, if we append a character "dot below" (code `\u0323`), then we'll have "S with dots above and below": `Ṩ`.

For example:

```js run
alert( 'S\u0307\u0323' ); // Ṩ
```

This provides great flexibility, but also an interesting problem: two characters may visually look the same, but be represented with different unicode compositions.

For instance:

```js run
let s1 = 'S\u0307\u0323'; // Ṩ, S + dot above + dot below
let s2 = 'S\u0323\u0307'; // Ṩ, S + dot below + dot above

alert( `s1: ${s1}, s2: ${s2}` );

alert( s1 == s2 ); // false though the characters look identical (?!)
```

To solve this, there exists a "unicode normalization" algorithm that brings each string to the single "normal" form.

It is implemented by [str.normalize()](mdn:js/String/normalize).

```js run
alert( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() ); // true
```

It's funny that in our situation `normalize()` actually brings together a sequence of 3 characters to one: `\u1e68` (S with two dots).

```js run
alert( "S\u0307\u0323".normalize().length ); // 1

alert( "S\u0307\u0323".normalize() == "\u1e68" ); // true
```

In reality, this is not always the case. The reason being that the symbol `Ṩ` is "common enough", so UTF-16 creators included it in the main table and gave it the code.

If you want to learn more about normalization rules and variants -- they are described in the appendix of the Unicode standard: [Unicode Normalization Forms](http://www.unicode.org/reports/tr15/), but for most practical purposes the information from this section is enough.

## Summary

- There are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions `${…}`.
- Strings in JavaScript are encoded using UTF-16.
- We can use special characters like `\n` and insert letters by their unicode using `\u...`.
- To get a character, use: `[]`.
- To get a substring, use: `slice` or `substring`.
- To lowercase/uppercase a string, use: `toLowerCase/toUpperCase`.
- To look for a substring, use: `indexOf`, or `includes/startsWith/endsWith` for simple checks.
- To compare strings according to the language, use: `localeCompare`, otherwise they are compared by character codes.

There are several other helpful methods in strings:

- `str.trim()` -- removes ("trims") spaces from the beginning and end of the string.
- `str.repeat(n)` -- repeats the string `n` times.
- ...and more to be found in the [manual](mdn:js/String).

Strings also have methods for doing search/replace with regular expressions. But that's big topic, so it's explained in a separate tutorial section <info:regular-expressions>.
