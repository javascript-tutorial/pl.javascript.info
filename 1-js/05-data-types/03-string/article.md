# Stringi - ciągi znaków

W JavaScript dane tekstowe są przechowywane jako stringi - ciągi znaków, lub też łańcuchy znaków. Nie ma oddzielnego typu dla pojedynczego znaku.

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

## Pobieranie podciągu

JavaScript ma 3 metody uzyskiwania podciągu: `substring`, `substr` i `slice`.

`str.slice(start [, end])`
: Zwraca część łańcucha od `start` do `end` (ale go nie uwzględnia).

    Na przykład:

    ```js run
    let str = "stringify";
    alert( str.slice(0, 5) ); // 'strin', podciąg od 0 do 5 (nie uwzględnia 5)
    alert( str.slice(0, 1) ); // 's', od 0 do 1, ale nie uwzględnia 1, czyli tylko jeden znak z pozycji 0
    ```

    Jeśli nie ma drugiego argumentu, `slice` zwraca znaki do końca linii:

    ```js run
    let str = "st*!*ringify*/!*";
    alert( str.slice(2) ); // 'ringify', od drugiej pozycji do końca
    ```

    Możliwe są również ujemne wartości `start/end`. Oznacza to, że pozycja jest liczona od końca ciągu:

    ```js run
    let str = "strin*!*gif*/!*y";

    // zaczynamy od pozycji 4 od prawej i kończymy na pozycji 1 od prawej
    alert( str.slice(-4, -1) ); // 'gif'
    ```

`str.substring(start [, end])`
: Zwraca część ciągu _pomiędzy_ `start` i `end`.

    Jest to prawie to samo, co `slice`, z tą różnicą, że `start` może być większe niż `end`.

    Na przykład:

    ```js run
    let str = "st*!*ring*/!*ify";

    // dla substring te dwa przykłady są takie same
    alert( str.substring(2, 6) ); // "ring"
    alert( str.substring(6, 2) ); // "ring"

    // ...ale nie dla slice:
    alert( str.slice(2, 6) ); // "ring" (to samo)
    alert( str.slice(6, 2) ); // "" (pusty łańcuch)

    ```

    `substring` w przeciwieństwie do `slice` nie obsługuje wartości ujemnych i interpretuje je jako `0`.

`str.substr(start [, length])`
: Zwraca część ciągu od `start` do podanej długości `length`.

    W przeciwieństwie do poprzednich metod, ta umożliwia określenie długości `length` zamiast pozycji końcowej:

    ```js run
    let str = "st*!*ring*/!*ify";
    alert( str.substr(2, 4) ); // 'ring', 4 znaki liczone od drugiej pozycji
    ```

    Wartość pierwszego argumentu może być ujemna, w takim przypadku pozycja określana jest od końca:

    ```js run
    let str = "strin*!*gi*/!*fy";
    alert( str.substr(-4, 2) ); // 'gi', 2 znaki liczone od czwartej pozycji od końca
    ```

Podsumujmy te metody, aby uniknąć nieporozumień:

| metoda | wybiera... | wartości ujemne |
|--------|-----------|-----------|
| `slice(start, end)` | od `start` do `end` (bez uwzględnienia `end`) | zezwala |
| `substring(start, end)` | pomiędzy `start` i `end` | wartości ujemne oznaczają `0` |
| `substr(start, length)` | `length` znaków od `start` | pozwala na wartość ujemną dla `start` |

```smart header="Którą metodę wybrać?"
Wszystkie metody robią robotę. Formalnie `substr` ma niewielką wadę: nie jest opisana w podstawowej specyfikacji JavaScript, ale w załączniku B. Dodatek ten opisuje cechy języka używanego w przeglądarkach, które istnieją głównie ze względów historycznych. Dlatego środowiska inne niż przeglądarki mogą go nie obsługiwać. Jednak w praktyce działa wszędzie.

Z pozostałych dwóch opcji, `slice` jest nieco bardziej elastyczne - pozwala na użycie wartości ujemny i jest krótsze. Wystarczy więc, że spośród tych metoda zapamiętasz `slice`.
```

## Porównywanie łańcuchów

Jak wiemy z rozdziału <info:comparison>, łańcuchy są porównywane znak po znaku w kolejności alfabetycznej.

Są jednak pewne niuanse.

1. Mała litera jest zawsze większa niż wielka:

    ```js run
    alert( 'a' > 'Z' ); // true
    ```

2. Litery ze znakami diakrytycznymi są "wyłączone z użytkowania":

    ```js run
    alert( 'Österreich' > 'Zealand' ); // true
    ```

    Może to prowadzić do dziwnych wyników podczas sortowania nazw krajów. Zazwyczaj ludzie spodziewaliby się, że `Zealand` znajdzie się na liście po `Österreich`.

Aby zrozumieć, co się dzieje, spójrzmy na wewnętrzną reprezentację ciągów w JavaScript.

Wszystkie ciągi są zakodowane przy użyciu [UTF-16](https://pl.wikipedia.org/wiki/UTF-16). To oznacza, że każdy znak ma odpowiedni kod numeryczny. Istnieją specjalne metody, które pozwalają uzyskać znak dla danego kodu i odwrotnie.

`str.codePointAt(pos)`
: Zwraca kod dla znaku na pozycji `pos`:

    ```js run
    // różna wielkość tych samych liter ma różne kody
    alert( "z".codePointAt(0) ); // 122
    alert( "Z".codePointAt(0) ); // 90
    ```

`String.fromCodePoint(code)`
: Tworzy znak za pomocą jego kodu numerycznego `code`

    ```js run
    alert( String.fromCodePoint(90) ); // Z
    ```

    Możemy również dodawać znaki Unicode według ich kodów, używając`\u`, a następnie kodu szesnastkowego:

    ```js run
    // 90 to 5a w systemie szesnastkowym
    alert( '\u005a' ); // Z
    ```

Spójrzmy teraz na znaki o kodach `65..220` (alfabet łaciński i kilka extra znaków):

```js run
let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
```

Jak widać, najpierw pojawiają się wielkie litery, potem kilka znaków specjalnych, potem małe litery i `Ö` prawie na samym końcu.

Teraz jest oczywiste, dlaczego `a > Z`.

Znaki są porównywane według ich kodów numerycznych. Większy kod = większy znak. Kod `a` (97) jest większy niż kod `Z` (90).

- Wszystkie małe litery występują po wielkich literach, ponieważ ich kody są większe.
- Niektóre litery, takie jak `Ö`, są całkowicie poza głównym alfabetem. Ta litera ma większy kod niż jakakolwiek litera od `a` do `z`.

### Prawidłowe porównania

„Właściwy” algorytm porównywania łańcuchów jest bardziej skomplikowany, niż mogłoby się wydawać, ponieważ różne języki używają różnych alfabetów.

Przeglądarka musi więc wiedzieć, jakiego języka użyć do porównania.

Na szczęście wszystkie nowoczesne przeglądarki (IE10- wymaga dodatkowej biblioteki [Intl.JS](https://github.com/andyearnshaw/Intl.js/)) obsługują standard internacjonalizacji [ECMA 402](http://www.ecma-international.org/ecma-402/1.0/ECMA-402.pdf), który zapewnia poprawne porównywanie ciągów w różnych językach z uwzględnieniem ich reguł.

Wywołanie [str.localeCompare(str2)](mdn:js/String/localeCompare) zwraca liczbę wskazującą, który ciąg jest większy zgodnie z zasadami języka:

- Zwraca liczbę ujemną, jeśli `str` jest mniejszy niż `str2`.
- Zwraca liczbę dodatnią, jeśli `str` jest większy niż `str2`.
- Zwraca `0` jeśli są równoważne.

Na przykład:

```js run
alert( 'Österreich'.localeCompare('Zealand') ); // -1
```

Ta metoda ma właściwie dwa dodatkowe argumenty określone w [dokumentacji](mdn:js/String/localeCompare). Pierwszy pozwala na określenie języka (domyślnie jest on pobierany ze środowiska) - od tego zależy kolejność liter. Drugi, to dodatkowe reguły, takie jak rozróżnianie wielkości liter, czy należy przestrzegać różnic między `"a"` i `"á"` itp.

## Wewnętrzne części unicode

```warn header="Zaawansowana wiedza"
Ta sekcja zagłębia się bardziej w wewnętrzną budowę łańcuchów. Ta wiedza będzie dla Ciebie przydatna, jeśli planujesz zajmować się emotikonami, rzadkimi znakami matematycznymi lub innymi specjalnymi symbolami.

Jeśli nie planujesz z nimi pracować, możesz pominąć tę sekcję.
```

### Pary zastępcze

Wszystkie często używane znaki mają kody 2-bajtowe. Litery w większości języków europejskich, liczby, a nawet większość symboli mają reprezentację 2 bajtową.

Jednakże 2 bajty pozwalają tylko na 65536 kombinacji, a to nie wystarcza dla każdego możliwego symbolu. Tak więc rzadkie symbole są zakodowane za pomocą pary dwubajtowych znaków, zwanej również "parą zastępczą".

Długość tych symboli wynosi `2`:

```js run
alert( '𝒳'.length ); // 2, matematyczny zapis X
alert( '😂'.length ); // 2, twarz ze łzami radości
alert( '𩷶'.length ); // 2, rzadki chiński symbol
```

Zwróć uwagę, że pary zastępcze nie istniały w czasie tworzenia JavaScript, więc język nie obsługuje ich odpowiednio!

W rzeczywistości w każdym z powyższych ciągów znajduje się jeden symbol, ale `length` pokazuje długość `2`.

`String.fromCodePoint` i `str.codePointAt` to kilka rzadkich metod, które poprawnie radzą sobie z parami zastępczymi. Dopiero niedawno zostały dodane do języka. Przed nimi były dostępne tylko [String.fromCharCode](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) oraz [str.charCodeAt](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt). Te metody są w rzeczywistości takie same jak `fromCodePoint/codePointAt`, ale nie działają z parami zastępczymi.

Uzyskanie znaku reprezentowanego przez parę zastępczą może być trudne, ponieważ para zastępcza jest interpretowana jako dwa znaki:

```js run
alert( '𝒳'[0] ); // dziwne symbole...
alert( '𝒳'[1] ); // ...części pary zastępczej
```

Części pary zastępczej same w sobie nie mają sensu, więc wywołania alertów w tym przykładzie pokażą tylko jakieś bzdury.

Technicznie rzecz biorąc, pary zastępcze można wykryć za pomocą ich kodów: jeśli kod znaku mieści się w zakresie `0xd800..0xdbff`, to jest to pierwsza część pary zastępczej. Następny znak (druga część) musi mieć kod w przedziale `0xdc00..0xdfff`. Te dwa zakresy są przez normę zarezerwowane wyłącznie dla par zastępczych.

W powyższym przypadku:

```js run
// charCodeAt nie jest świadomy pary zastępczej, więc podaje kody części

alert( '𝒳'.charCodeAt(0).toString(16) ); // d835, pomiędzy 0xd800 i 0xdbff
alert( '𝒳'.charCodeAt(1).toString(16) ); // dcb3, pomiędzy 0xdc00 i 0xdfff
```

Więcej sposobów radzenia sobie z parami zastępczymi znajdziesz w rozdziale <info:iterable>. Istnieją do tego specjalne biblioteki, ale żadna z nich nie jest na tyle znana, aby można było ją tutaj zasugerować.

### Znaki diakrytyczne i normalizacja

W wielu językach istnieją symbole, które składają się ze znaku bazowego oraz znaku diakrytycznego.

Na przykład, litera `a` może być znakiem bazowym dla: `ąàáâäãåā`. Większośc popularnych "kompozycji" znaków posiada swój własny kod w tabeli UTF-16. Ale nie wszystkie, ze względu na dużą liczbę kombinacji.

Aby obsługiwać dowolne kompozycje, UTF-16 pozwala nam na użycie kilku znaków Unicode: znaku podstawowego, po którym następuje jeden lub więcej "znaków specjalnych".

Na przykład, jeśli dodamy znak "kropka powyżej" (kod `\u0307`) bezpośrednio po `S`, to będzie on wyświetlany, jako `Ṡ`.

```js run
alert( 'S\u0307' ); // Ṡ
```

Jeśli potrzebujemy dodatkowego oznaczenia nad literą (lub pod nią) -- nie ma problemu, wystarczy dodać niezbędny znak oznaczenia.

Na przykład, jeśli dodamy znak "kropka poniżej" (code `\u0323`), otrzymamy "S z kropkami powyżej i poniżej": `Ṩ`.

Na przykład:

```js run
alert( 'S\u0307\u0323' ); // Ṩ
```

Zapewnia to dużą elastyczność, ale także interesujący problem: dwie postacie mogą wizualnie wyglądać tak samo, ale być reprezentowane za pomocą różnych kompozycji Unicode.

Na przykład:

```js run
let s1 = 'S\u0307\u0323'; // Ṩ, S + kropka powyżej + kropka poniżej
let s2 = 'S\u0323\u0307'; // Ṩ, S + kropka poniżej + kropka powyżej

alert( `s1: ${s1}, s2: ${s2}` );

alert( s1 == s2 ); // false pomimo tego, że znaki wyglądają identycznie (?!)
```

Aby rozwiązać ten problem, istnieje algorytm "normalizacji Unicode", który sprowadza każdy ciąg do pojedynczej "normalnej" postaci.

Jest zaimplementowany przez metodę [str.normalize()](mdn:js/String/normalize).

```js run
alert( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() ); // true
```

To zabawne, że w naszym przypadku `normalize()` łączy sekwencję 3 znaków w jeden: `\u1e68` (S z dwoma kropkami).

```js run
alert( "S\u0307\u0323".normalize().length ); // 1

alert( "S\u0307\u0323".normalize() == "\u1e68" ); // true
```

W rzeczywistości taka sytuacja nie zawsze ma miejsce. Znak `Ṩ` jest "dość powszechny", więc twórcy UTF-16 uwzględnili go w głównej tabeli i przypisali mu kod.

Jeśli chcesz dowiedzieć się więcej o regułach i wariantach normalizacji – są one opisane w załączniku standardu Unicode: [Unicode Normalization Forms](http://www.unicode.org/reports/tr15/). Jednakże do większości praktycznych celów wystarczą informacje z tego rozdziału.

## Podsumowanie

- Istnieją 3 rodzaje cudzysłowów. Grawisy pozwalają ciągowi rozciągać się na wiele linii i osadzać wyrażenia `${…}`.
- Łańcuchy w JavaScript są kodowane przy użyciu UTF-16.
- Możemy używać znaków specjalnych, takich jak `\n` i wstawiać litery przy użyciu i kodu Unicode, używając `\u...`.
- Użyj `[]`, aby uzyskać pojedynczy znak.
- Aby uzyskać podciąg, użyj: `slice` lub `substring`.
- Aby pisać małymi/wielkimi literami, użyj: `toLowerCase/toUpperCase`.
- Aby wyszukać podciąg, użyj `indexOf` lub `includes/startsWith/endsWith`, gdy chcesz tylko sprawdzić, czy podciąg występuje w łańcuchu.
- Aby porównać ciągi znaków zgodnie z regułami języka, użyj: `localeCompare`.

Istnieje kilka innych pomocnych metod:

- `str.trim()` -- usuwa ("przycina") spacje z początku i końca ciągu.
- `str.repeat(n)` -- powtarza ciąg `n` razy.
- ...i inne, które znajdziesz w [dokumentacji](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/String).

Istnieją również metody wyszukiwania i zastępowania za pomocą wyrażeń regularnych. Jest to jednak duży i osobny temat, więc został poświęcony mu osobny rozdział: <info:regular-expressions>.
