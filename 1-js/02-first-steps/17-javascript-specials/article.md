# JavaScriptowe detale

Ten rozdział pokrótce podsumowuje cechy JavaScriptu, których nauczyliśmy się do tej pory, zwracając szczególną uwagę na drobne akcenty.

## Struktura kodu

Instrukcje są rozdzielane średnikiem:

```js run no-beautify
alert('Witaj'); alert('Świecie');
```

Zwykle znak końca wiersza jest również traktowany jako separator, więc to działałby również:

```js run no-beautify
alert('Witaj')
alert('Świecie')
```

Nazywa się to „automatycznym wstawianiem średnika”. Czasami to jednak nie działa, na przykład:

```js run
alert("Po tej wiadomości wystąpi błąd")

[1, 2].forEach(alert)
```

Większość wytycznych do stylów kodowania (ang. *codestyle guides*) twierdzi, że po każdym wyrażeniu należy umieścić średnik.

Średniki nie są wymagane po blokach kodu `{...}` i konstrukcjach składniowych ich używających jak pętle:

```js
function f() {
  // po deklaracji funkcji nie jest potrzebny średnik
}

for(;;) {
  // po pętli nie jest potrzebny średnik
}
```

... Ale nawet jeśli możemy gdzieś umieścić „dodatkowy” średnik, nie jest to błąd. Zostanie zignorowany.

Więcej w: <info:structure>.

## Tryb ścisły

Aby w pełni włączyć wszystkie funkcje współczesnego JavaScriptu, powinniśmy uruchamiać skrypty z deklaracją `"use strict"`.

```js
'use strict';

...
```

Dyrektywa musi znajdować się na początku skryptu lub na początku treści funkcji.

Bez `"use strict"`, wszystko nadal działa, ale niektóre funkcje zachowują się w staromodny," kompatybilny" sposób. Zwykle wolelibyśmy nowoczesne zachowanie.

Niektóre nowoczesne funkcje języka (takie jak klasy, których będziemy się uczyć w przyszłości) domyślnie włączają tryb ścisły.

Więcej w: <info:strict-mode>.

## Zmienne

Mogą być zadeklarowane przy pomocy:

- `let`
- `const` (stała, nie można jej zmienić)
- `var` (staromodna, zobaczymy to później)

Nazwa zmiennej może zawierać:
- Litery i cyfry, ale pierwszy znak nie może być cyfrą.
- Znaki `$` i `_` są wykorzystywane na równi z literami.
- Alfabety inne niż łacińskie i hieroglify są również dozwolone, ale powszechnie nie są używane.

Zmienne są typowane dynamicznie. Mogą przechowywać dowolną wartość:

```js
let x = 5;
x = "Jan";
```

Istnieje 8 typów danych:

- `number` zarówno dla liczb zmiennoprzecinkowych, jak i całkowitych,
- `bigint` dla liczb całkowitych dowolnej wielkości,
- `string` dla ciągów znaków,
- `boolean` dla wartości logicznych (prawda/fałsz): `true/false`,
- `null` -- typ przyjmujący tylko wartość `null`, znaczący "pusty" albo "nie istnieje",
- `undefined` -- typ przyjmujący tylko wartość `undefined`, znaczący "nieprzypisany",
- `object` i `symbol` -- wykorzystywany w złożonych strukturach danych i unikalnych identyfikatorach, ale jeszcze się ich nie nauczyliśmy.

Operator `typeof` zwraca typ wartości, z dwoma wyjątkami:
```js
typeof null == "object" // wewnętrzny błąd w języku
typeof function(){} == "function" // funkcje są traktowane specjalnie
```

Więcej w: <info:variables> i <info:types>.

## Interakcje

Używamy przeglądarki jako środowiska pracy, więc podstawowe funkcje interfejsu użytkownika będą następujące:

[`prompt(pytanie, [wartość domyślna])`](mdn:api/Window/prompt)
: Zadaje `pytanie`, i zwraca albo to, co wpisał użytkownik lub `null` jeżeli kliknął "anuluj".

[`confirm(pytanie)`](mdn:api/Window/confirm)
: Zadaje `pytanie` i umożliwia wybór pomiędzy Ok i Anuluj. Wybór jest zwracany w postaci `true/false`.

[`alert(wiadomość)`](mdn:api/Window/alert)
: Wyświetla `wiadomość`.

Wszystkie te funkcje są *modalne* (w postaci okien dialogowych), wstrzymują wykonywanie kodu i uniemożliwiają odwiedzającemu interakcję ze stroną, dopóki nie odpowie.

Na przykład:

```js run
let userName = prompt("Twoje imię?", "Alicja");
let isTeaWanted = confirm("Chcesz herbaty?");

alert( "Odwiedzający: " + userName ); // Alicja
alert( "Potrzebna herbata: " + isTeaWanted ); // true
```

Więcej w: <info:alert-prompt-confirm>.

## Operatory

JavaScript obsługuje następujące operatory:

Arytmetyczne
: Zwyczajne: `* + - /`, oraz `%` dla reszty z dzielenia całkowitego i `**` dla potęgi liczby.

    Binarny operator plus `+` łączy łańcuchy znaków. Jeżeli któryś z operandów (argumentów) jest napisem, drugi jest również konwertowany na napis:

    ```js run
    alert( '1' + 2 ); // '12', string
    alert( 1 + '2' ); // '12', string
    ```

Przypisania
: Isnieje proste przypisanie: `a = b` i złożone, takie jak `a *= 2`.

Bitowe
: Operatory bitowe działają z 32-bitowymi liczbami całkowitymi na najniższym poziomie bitowym: zobacz [dokumentację](mdn:/JavaScript/Reference/Operators/Bitwise_Operators) kiedy są wykorzystywane.

Warunkowy
: Jedyny operator z trzeba parametrami: `warunek ? wynikA : wynikB`. Jeżeli `warunek` jest prawdziwy, zwraca `wynikA`, w przeciwnym wypadku `wynikB`.

Operatory logiczne
: Logiczne ORAZ (ang. *AND*) `&&` i LUB (ang. *OR*) `||` wykonują ewaluację w postaci "zwarcia" (ang. *short-circuit evaluation*) a następnie zwracacją wartość w miejscu, w którym została zatrzymana (niekoniecznie`true`/`false`). Logiczne NIE (ang. *NOT*) `!` Konwertuje operand na typ boolowski i zwraca wartość odwrotną.

Operator nullish coalescing
: Operator `??` umożliwia wybranie zdefiniowanej wartości z listy zmiennych. Wynikiem `a ?? b` jest `a`, chyba że `a` jest `null/undefined`, w takim przypadku wynikiem jest `b`.

Porównania
: Sprawdzanie równości `==` dla wartości różnych typów konwertuje je na liczbę (z wyjątkiem `null` i `undefined` które są sobie równe i nic więcej), więc poniższe porównania są równe:

    ```js run
    alert( 0 == false ); // true
    alert( 0 == '' ); // true
    ```

    Inne porównania również konwertują na liczbę.

    Operator ścisłej równości `===` nie wykonuje konwersji: różne typy w tym przypadku zawsze oznaczają różne wartości.

    Wartości `null` i `undefined` są specjalne: są równe `==` sobie nawzajem i nie są równe niczemu innemu.

    Większe / mniejsze porównania porównują łańcuchy znak po znaku, inne typy są konwertowane na liczbę.

Inne operatory
: Jest kilka innych, takich jak operator przecinka.

Więcej w: <info:operators>, <info:comparison>, <info:logical-operators>.

## Pętle

- Omówiliśmy 3 rodzaje pętli:

    ```js
    // 1
    while (warunek) {
      ...
    }

    // 2
    do {
      ...
    } while (warunek);

    // 3
    for(let i = 0; i < 10; i++) {
      ...
    }
    ```

- Zmienna zadeklarowana w pętli `for(let...)` jest widoczna tylko wewnątrz pętli. Ale możemy też pominąć `let` i ponownie użyć istniejącej zmiennej.
- Dyrektywy `break/continue` pozwalają na wyjście z całej pętli / bieżącej iteracji. Użyj etykiet, aby przerwać zagnieżdżone pętle.

Szczegóły w: <info:while-for>.

Później zbadamy więcej typów pętli do radzenia sobie z obiektami.

## Konstrukcja "switch"

Konstrukcja "switch" może zastąpić wiele sprawdzeń przy pomocy `if`. Do porównań używa `===` (ścisła równość).

Na przykład:

```js run
let age = prompt('Twój wiek?', 18);

switch (age) {
  case 18:
    alert("Nie zadziała"); // wynikiem "prompt" jest ciąg znaków a nie liczba

  case "18":
    alert("To działa!");
    break;

  default:
    alert("Każda wartość nie równa tej powyższej");
}
```

Szczegóły w: <info:switch>.

## Funkcje

Omówiliśmy trzy sposoby tworzenia funkcji w JavaScript:

1. Function Declaration: funkcja w głównym przepływie kodu (ang. *code flow*)

    ```js
    function sum(a, b) {
      let result = a + b;

      return result;
    }
    ```

2. Function Expression: funkcja w kontekście wyrażenia

    ```js
    let sum = function(a, b) {
      let result = a + b;

      return result;
    };
    ```

3. Funkcje strzałkowe:

    ```js
    // wyrażenie po prawej stronie
    let sum = (a, b) => a + b;

    // albo składnia wielowierszowa z { ... }, potrzeba tutaj użyć return:
    let sum = (a, b) => {
      // ...
      return a + b;
    }

    // bez argumentów
    let sayHi = () => alert("Hello");

    // z jednym argumentem
    let double = n => n * 2;
    ```


- Funkcje mogą mieć zmienne lokalne: te zadeklarowane w treści lub na liście parametrów. Takie zmienne są widoczne tylko wewnątrz funkcji.
- Parametry mogą mieć wartości domyślne: `function sum(a = 1, b = 2) {...}`.
- Funkcje zawsze coś zwracają. Jeśli nie ma instrukcji `return` wynikiem jest `undefined`.

Szczegóły: zobacz <info:function-basics>, <info:arrow-functions-basics>.

## Więcej wktórce

To była krótka lista funkcji JavaScript. Na razie uczyliśmy się tylko podstaw. W dalszej części samouczka znajdziesz więcej specjalnych i zaawansowanych funkcji JavaScript.
