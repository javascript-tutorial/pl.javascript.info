<<<<<<< HEAD:1-js/02-first-steps/07-operators/article.md
# Operatory
=======
# Basic operators, maths
>>>>>>> b52aa942a8e9b75ba8a65124c22593171e273bb6:1-js/02-first-steps/08-operators/article.md

Z czasów szkolnych znamy wiele operatorów: dodawania `+`, mnożenia `*`, odejmowania `-` itd.

<<<<<<< HEAD:1-js/02-first-steps/07-operators/article.md
W tym rozdziale skupimy się na operatorach, o których nie uczono na matematyce.
=======
In this chapter, we’ll start with simple operators, then concentrate on JavaScript-specific aspects, not covered by school arithmetic.
>>>>>>> b52aa942a8e9b75ba8a65124c22593171e273bb6:1-js/02-first-steps/08-operators/article.md

## Pojęcia: "jednoargumentowy", "dwuargumentowy", "operandy"

Zanim przejdziemy dalej, zapoznajmy się z podstawową terminologią.

- *Operand* -- to, na czym działa operator. Na przykład w mnożeniu `5 * 2` mamy do czynienia z dwoma operandami: lewy jest równy `5`, a prawy `2`. Inna nazwa to "argument".
- Operator jest *jednoargumentowy*, gdy posiada jeden operand. Na przykład, jednoargumentowa negacja `-` powoduje zmianę znaku liczby na przeciwny:

    ```js run
    let x = 1;

    *!*
    x = -x;
    */!*
    alert( x ); // -1, zastosowano jednoargumentową negację
    ```
- Operator jest *dwuargumentowy*, gdy posiada dwa operandy. Ten sam operator minusa ma także wariant dwuargumentowy:

    ```js run no-beautify
    let x = 1, y = 3;
    alert( y - x ); // 2, dwuargumentowy minus odejmuje wartości
    ```

    Z formalnego punktu widzenia, powyższe przykłady używają dwóch różnych operatorów, które mają ten sam symbol: operator negacji (jednoargumentowy operator zmieniający znak na przeciwny) oraz operator odejmowania (dwuargumentowy operator odejmujący jedną liczbę od drugiej).

<<<<<<< HEAD:1-js/02-first-steps/07-operators/article.md
## Konkatenacja ciągów znaków, dwuargumentowy +

Teraz zajmijmy się specjalnymi właściwościami operatorów javascriptowych, o których nie dowiemy się na matematyce.
=======
## Maths

The following math operations are supported:

- Addition `+`,
- Subtraction `-`,
- Multiplication `*`,
- Division `/`,
- Remainder `%`,
- Exponentiation `**`.

The first four are straightforward, while `%` and `**` need a few words about them.

### Remainder %

The remainder operator `%`, despite its appearance, is not related to percents.

The result of `a % b` is the [remainder](https://en.wikipedia.org/wiki/Remainder) of the integer division of `a` by `b`.

For instance:

```js run
alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
alert( 8 % 3 ); // 2, a remainder of 8 divided by 3
```

### Exponentiation **

The exponentiation operator `a ** b` multiplies `a` by itself `b` times.

For instance:

```js run
alert( 2 ** 2 ); // 4  (2 multiplied by itself 2 times)
alert( 2 ** 3 ); // 8  (2 * 2 * 2, 3 times)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 times)
```

Mathematically, the exponentiation is defined for non-integer numbers as well. For example, a square root is an exponentiation by `1/2`:

```js run
alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)
```


## String concatenation with binary +

Let's meet features of JavaScript operators that are beyond school arithmetics.
>>>>>>> b52aa942a8e9b75ba8a65124c22593171e273bb6:1-js/02-first-steps/08-operators/article.md

Zwykle operator plusa `+` dodaje do siebie liczby.

Jednak jeśli ten sam operator `+` zastosujemy do łańcuchów znaków, spowoduje on ich połączenie (konkatenację):

```js
let s = "mój" + "napis";
alert(s); // mójnapis
```

<<<<<<< HEAD:1-js/02-first-steps/07-operators/article.md
Zauważ, że jeśli jeden z operandów jest typu tekstowego, drugi też jest konwertowany do tekstu.
=======
Note that if any of the operands is a string, then the other one is converted to a string too.
>>>>>>> b52aa942a8e9b75ba8a65124c22593171e273bb6:1-js/02-first-steps/08-operators/article.md

Na przykład:

```js run
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
```

<<<<<<< HEAD:1-js/02-first-steps/07-operators/article.md
Nie ma znaczenia, czy to pierwszy argument będzie tekstem, czy drugi. Zasada jest prosta: jeśli którykolwiek z operandów jest ciągiem znaków, drugi też się nim staje.

Warto jednak zwrócić uwagę na fakt, iż operacje wykonywane są w kolejności od lewej do prawej. Jeśli dodamy do siebie dwie liczby, a następnie ciąg znaków, najpierw zostaną zsumowane liczby, a następnie wynik zostanie przekonwertowany do tekstu:
=======
See, it doesn't matter whether the first operand is a string or the second one.
>>>>>>> b52aa942a8e9b75ba8a65124c22593171e273bb6:1-js/02-first-steps/08-operators/article.md

Here's a more complex example:

```js run
alert(2 + 2 + '1' ); // "41", a nie "221"
```

<<<<<<< HEAD:1-js/02-first-steps/07-operators/article.md
Konkatenacja i konwersja ciągów znaków to specjalne własności dwuargumentowego plusa `+`. Pozostałe operatory arytmetyczne działają tylko na liczbach i zawsze konwertują swoje argumenty do typu liczbowego.

Przykład z odejmowaniem i dzieleniem:
=======
Here, operators work one after another. The first `+` sums two numbers, so it returns `4`, then the next `+` adds the string `1` to it, so it's like `4 + '1' = 41`.

The binary `+` is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

Here's the demo for subtraction and division:
>>>>>>> b52aa942a8e9b75ba8a65124c22593171e273bb6:1-js/02-first-steps/08-operators/article.md

```js run
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers
```

## Konwersja na liczbę, jednoargumentowy +

Operator plusa `+` ma dwa warianty: dwuargumentowy (użyty powyżej) oraz jednoargumentowy.

Jednoargumentowy plus lub, po prostu, operator plusa `+` zastosowany na jednej wartości nie wpływa w żaden sposób na liczby. Jeśli jednak argument nie jest typu liczbowego, ten operator przekonwertuje go do liczby.

Na przykład:

```js run
// Brak efektu na liczbach
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

*!*
// Konwertuje nie-liczby
alert( +true ); // 1
alert( +"" );   // 0
*/!*
```

W zasadzie robi on to samo co `Number(...)`, ale ma krótszy zapis.

Bardzo często zdarza się, że musimy przekonwertować tekst na liczbę. Na przykład, jeśli pobierzemy wartość z pola formularza HTML, zazwyczaj będzie ona typu tekstowego. Co jeśli zechcemy dodać ją do wartości innego pola?

Dwuargumentowy plus po prostu by je połączył:

```js run
let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", dwuargumentowy plus łączy napisy
```

Jeśli chcemy potraktować te wartości jako liczby, musimy je najpierw przekonwertować, a następnie zsumować:

```js run
let apples = "2";
let oranges = "3";

*!*
// obydwie wartości są konwertowane do liczb, a następnie przekazywane do dwuargumentowego plusa
alert( +apples + +oranges ); // 5
*/!*

// wersja dłuższa, dająca ten sam efekt
// alert( Number(apples) + Number(oranges) ); // 5
```

Gdyby matematyk spojrzał na ten zapis, z pewnością złapałby się za głowę z powodu tak wielu plusów. Dla programisty jednak nie jest to nic nadzwyczajnego: najpierw wykonywane są jednoargumentowe plusy, które konwertują tekst na liczbę, a następnie dwuargumentowy plus je sumuje.

Ale dlaczego jednoargumentowe plusy wykonywane są jako pierwsze? Jak wynika z dalszej części artykułu, dzieje się tak z powodu ich *wyższego priorytetu*.

## Kolejność aplikowania operatorów

Jeśli wyrażenie ma więcej niż jeden operator, kolejność wykonywania działań jest określana na podstawie ich predefiniowanych *priorytetów*.

Ze szkoły wiemy, że w wyrażeniu `1 + 2 * 2` najpierw powinniśmy wykonać operację mnożenia, a dopiero później dodawania. To jest właśnie priorytet. Mówi się, że mnożenie ma *wyższy priorytet* niż dodawanie.

Użycie nawiasów powoduje zmianę priorytetu, dlatego jeśli nie jesteśmy usatysfakcjonowani kolejnością wykonywania działań, możemy posłużyć się nawiasami, by ją zmienić. Na przykład możemy napisać: `(1 + 2) * 2`.

W języku JavaScript istnieje wiele operatorów, a każdy operator ma nadany jakiś priorytet. Najpierw wykonywane są te z wyższym priorytetem. Jeśli obok siebie znajdą się operatory o takich samych priorytetach, wykonywane są w kolejności od lewej do prawej.

Poniżej znajduje się fragment [tabeli kolejności wykonywania działań](https://developer.mozilla.org/en/JavaScript/Reference/operators/operator_precedence) (nie musisz jej znać na pamięć; zwróć tylko uwagę, że jednoargumentowe operatory mają zawsze wyższy priorytet niż ich dwuargumentowe odpowiedniki):

<<<<<<< HEAD:1-js/02-first-steps/07-operators/article.md
| Priorytet | Nazwa                    | Symbol |
| --------- | ------------------------ | ------ |
| ...       | ...                      | ...    |
| 16        | jednoargumentowy plus    | `+`    |
| 16        | jednoargumentowa negacja | `-`    |
| 14        | mnożenie                 | `*`    |
| 14        | dzielenie                | `/`    |
| 13        | dodawanie                | `+`    |
| 13        | odejmowanie              | `-`    |
| ...       | ...                      | ...    |
| 3         | przypisanie              | `=`    |
| ...       | ...                      | ...    |

=======
| Precedence | Name | Sign |
|------------|------|------|
| ... | ... | ... |
| 17 | unary plus | `+` |
| 17 | unary negation | `-` |
| 16 | exponentiation | `**` |
| 15 | multiplication | `*` |
| 15 | division | `/` |
| 13 | addition | `+` |
| 13 | subtraction | `-` |
| ... | ... | ... |
| 3 | assignment | `=` |
| ... | ... | ... |

As we can see, the "unary plus" has a priority of `17` which is higher than the `13` of "addition" (binary plus). That's why, in the expression `"+apples + +oranges"`, unary pluses work before the addition.
>>>>>>> b52aa942a8e9b75ba8a65124c22593171e273bb6:1-js/02-first-steps/08-operators/article.md

Jak widać, "jednoargumentowy plus" ma priotytet równy `16`, czyli większy niż `13` przypisany do "dodawania" (jednoargumentowego plusa). To dlatego w wyrażeniu `"+apples + +oranges"` jednoargumentowe plusy aplikowane są w pierwszej kolejności.

## Przypisanie

Zauważ, że operator przypisania `=` także jest operatorem. Został wymieniony w tabeli kolejności wykonywania działań z bardzo niskim priorytetem, `3`.

To dlatego gdy przypisujemy do zmiennej wyrażenie `x = 2 * 2 + 1`, najpierw wykonywane są obliczenia, a dopiero na koniec dokonywane jest przypisanie operatorem `=`, powodujące zapisanie wyniku w zmiennej `x`.

```js
let x = 2 * 2 + 1;

alert( x ); // 5
```

<<<<<<< HEAD:1-js/02-first-steps/07-operators/article.md
Można także zastosować przypisanie wielokrotne:

```js run
let a, b, c;

*!*
a = b = c = 2 + 2;
*/!*

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
```

Przypisania wielokrotne wykonywane są od prawej do lewej. Najpierw obliczana jest wartość wyrażenia po prawej (`2 + 2`), a następnie wynik przypisywany jest do zmiennych znajdujących się po lewej stronie, kolejno: `c`, `b` oraz `a`. W rezultacie wszystkie te zmienne otrzymują tę samą wartość.

````smart header="Operator przypisania `\"=\"` zwraca wartość"
Operatory zawsze zwracają jakąś wartość. Jest to oczywiste w przypadku większości z nich, np. dodawania `+` czy mnożenia `*`. Ale nie każdy jednak wie, że przypisanie też zwraca wartość.
=======
### Assignment = returns a value

The fact of `=` being an operator, not a "magical" language construct has an interesting implication.

Most operators in JavaScript return a value. That's obvious for `+` and `-`, but also true for `=`.
>>>>>>> b52aa942a8e9b75ba8a65124c22593171e273bb6:1-js/02-first-steps/08-operators/article.md

Wywołanie `x = value` przypisuje wartość `value` do `x`, *a następnie ją zwraca*.

Oto przykład ilustrujący przypisanie będące częścią bardziej złożonego wyrażenia:

```js run
let a = 1;
let b = 2;

*!*
let c = 3 - (a = b + 1);
*/!*

alert( a ); // 3
alert( c ); // 0
```

W powyższym kodzie wyrażenie `(a = b + 1)` zwraca wartość, która została przypisana do `a` (czyli `3`), a następnie ta wartość jest używana w kolejnych operacjach.

<<<<<<< HEAD:1-js/02-first-steps/07-operators/article.md
Śmiesznie to wygląda, prawda? Musimy jednak o tym wiedzieć, zważywszy na fakt, iż w wielu bibliotekach javascriptowych napotkamy taki zapis. Radzimy jednak nie pisać tak we własnym kodzie. Tego typu sztuczki sprawiają, że kod jest mniej czytelny.
````

## Reszta z dzielenia %

Operator reszty z dzielenia `%` (zwany także *modulo*), bez względu na swój wygląd, nie ma nic wspólnego z procentami.

Wynikiem działania `a % b` jest reszta z dzielenia całkowitego `a` przez `b`.

Na przykład:

```js run
alert( 5 % 2 ); // 1 reszty z dzielenia 5 przez 2
alert( 8 % 3 ); // 2 reszty z dzielenia 8 przez 3
alert( 6 % 3 ); // 0 reszty z dzielenia 6 przez 3
```

## Potęgowanie **

Operator potęgowania `**` pojawił się w języku dość niedawno.

Jeśli `b` jest liczbą naturalną, wtedy wynik działania `a ** b` to `a` pomnożone przez siebie `b` razy.

Na przykład:

```js run
alert( 2 ** 2 ); // 4  (bo: 2 * 2)
alert( 2 ** 3 ); // 8  (bo: 2 * 2 * 2)
alert( 2 ** 4 ); // 16 (bo: 2 * 2 * 2 * 2)
```

Operator ten działa również dla liczb niecałkowitych.

Na przykład:

```js run
alert( 4 ** (1/2) ); // 2 (potęgowanie przez 1/2 to to samo, co pierwiastek - tak mówi matematyka)
alert( 8 ** (1/3) ); // 2 (potęgowanie przez 1/3 to to samo, co pierwiastek trzeciego stopnia)
=======
Funny code, isn't it? We should understand how it works, because sometimes we see it in JavaScript libraries.

Although, please don't write the code like that. Such tricks definitely don't make code clearer or readable.

### Chaining assignments

Another interesting feature is the ability to chain assignments:

```js run
let a, b, c;

*!*
a = b = c = 2 + 2;
*/!*

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
```

Chained assignments evaluate from right to left. First, the rightmost expression `2 + 2` is evaluated and then assigned to the variables on the left: `c`, `b` and `a`. At the end, all the variables share a single value.

Once again, for the purposes of readability it's better to split such code into few lines:

```js
c = 2 + 2;
b = c;
a = c;
```
That's easier to read, especially when eye-scanning the code fast.

## Modify-in-place

We often need to apply an operator to a variable and store the new result in that same variable.

For example:

```js
let n = 2;
n = n + 5;
n = n * 2;
```

This notation can be shortened using the operators `+=` and `*=`:

```js run
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14
```

Short "modify-and-assign" operators exist for all arithmetical and bitwise operators: `/=`, `-=`, etc.

Such operators have the same precedence as a normal assignment, so they run after most other calculations:

```js run
let n = 2;

n *= 3 + 5;

alert( n ); // 16  (right part evaluated first, same as n *= 8)
>>>>>>> b52aa942a8e9b75ba8a65124c22593171e273bb6:1-js/02-first-steps/08-operators/article.md
```

## Inkrementacja/dekrementacja

<<<<<<< HEAD:1-js/02-first-steps/07-operators/article.md
<!-- Nie można używać -- w tytule, bo wbudowany parser zamienia to na - -->
=======
<!-- Can't use -- in title, because the built-in parser turns it into a 'long dash' – -->
>>>>>>> b52aa942a8e9b75ba8a65124c22593171e273bb6:1-js/02-first-steps/08-operators/article.md

Zwiększanie i zmniejszanie liczby o 1 to jedne z najczęściej wykonywanych operacji na liczbach.

Dlatego stworzono dla nich specjalne operatory:

- **Inkrementacja** `++` zwiększa wartość zmiennej o 1:

    ```js run no-beautify
    let counter = 2;
    counter++;        // działa tak samo, jak: counter = counter + 1, ale ma krótszy zapis
    alert( counter ); // 3
    ```
- **Dekrementacja** `--` zmniejsza wartość zmiennej o 1:

    ```js run no-beautify
    let counter = 2;
    counter--;        // działa tak samo, jak: counter = counter - 1, ale ma krótszy zapis
    alert( counter ); // 1
    ```

```warn
Inkrementację/dekrementację można wykonać tylko na zmiennej. Próba użycia ich na literale, np. `5++`, zakończy się błędem.
```

Operatory `++` i `--` można umieszczać przed i za zmienną.

- Gdy operator znajduje się przed zmienną, mówimy o "formie przyrostkowej": `counter++`.
- Gdy operator znajduje się za zmienną, mówimy o "formie przedrostkowej": `++counter`.

Obydwie formy robią to samo: zwiększą wartość zmiennej `counter` o `1`.

Jest między nimi jakaś różnica? Tak, ale zauważymy ją tylko w wartości zwracanej przez operatory `++/--`.

Wyjaśnijmy to sobie. Jak już wiemy, wszystkie operatory zwracają jakąś wartość. Inkrementacja/dekrementacja nie są tu wyjątkiem. Forma przedrostkowa (preinkrementacja i predekrementacja) zwraca wartość po zmianie, a forma przyrostkowa (postinkrementacja i postdekrementacja) zwraca starą wartość, sprzed zmiany.

Żeby lepiej zobrazować tę różnicę, przyjrzyjmy się poniższemu kodowi:

```js run
let counter = 1;
let a = ++counter; // (*)

alert(a); // *!*2*/!*
```

W linii oznaczonej gwiazdką `(*)` forma *przedrostkowa* (`++counter`) zwiększa wartość zmiennej `counter` i zwraca nową wartość, czyli `2`. Dlatego funkcja `alert` wyświetli na ekranie `2`.

Teraz użyjmy formy przyrostkowej:

```js run
let counter = 1;
let a = counter++; // (*) zmieniono ++counter na counter++

alert(a); // *!*1*/!*
```

W linii oznaczonej gwiazdką `(*)` forma *przyrostkowa* (`counter++`) również zwiększa wartość zmiennej `counter`, lecz zwraca *starą* wartość (sprzed zmiany). Dlatego funkcja `alert` wyświetli na ekranie `1`.

Podsumowując:

- Jeśli nie używamy wyniku inkrementacji/dekrementacji, nie ma znaczenia, której formy użyjemy:

    ```js run
    let counter = 0;
    counter++;
    ++counter;
    alert( counter ); // 2, powyższe linie robią to samo
    ```
- Jeśli chcemy zwiększyć wartość o 1 *i* natychmiast użyć nowej wartości, korzystamy z formy przedrostkowej:

    ```js run
    let counter = 0;
    alert( ++counter ); // 1
    ```
- Jeśli chcemy zwiększyć wartość o 1, ale użyć starej wartości, korzystamy z formy przyrostkowej:

    ```js run
    let counter = 0;
    alert( counter++ ); // 0
    ```

````smart header="Inkrementacja/dekrementacja wraz z innymi operatorami"
Operatorów `++/--` można także używać wewnątrz wyrażeń. Ich priorytet jest wyższy niż większości operatorów arytmetycznych.

Na przykład:

```js run
let counter = 1;
alert( 2 * ++counter ); // 4
```

Dla porównania:

```js run
let counter = 1;
alert( 2 * counter++ ); // 2, bo counter++ zwraca "starą" wartość
```

Mimo iż ten kod jest poprawny od strony technicznej, taki zapis sprawia, że staje się mniej czytelny. Jedna linia robi wiele rzeczy -- a to niedobrze.

Podczas szybkiego "pionowego" skanowania kodu przez nasze oko łatwo możemy przeoczyć (*sic!*) coś takiego jak `counter++`, przez co nie będziemy wiedzieli, dlaczego wartość zmiennej się zwiększyła.

Sugerujemy podejście "jedna linia -- jedna czynność":

```js run
let counter = 1;
alert( 2 * counter );
counter++;
```
````

## Operatory binarne

Operatory binarne traktują argumenty jako 32-bitowe liczby całkowite i działają na poziomie ich binarnych reprezentacji.

Tego typu operacje nie są charakterystyczne dla JavaScriptu. Istnieją w większości języków programowania.

Lista operatorów:

- AND ( `&` ) - koniunkcja
- OR ( `|` ) - alternatywa
- XOR ( `^` ) - alternatywa wykluczająca
- NOT ( `~` ) - negacja
- LEFT SHIFT ( `<<` ) - przesunięcie bitowe w lewo
- RIGHT SHIFT ( `>>` ) - przesunięcie bitowe w prawo
- ZERO-FILL RIGHT SHIFT ( `>>>` ) - przesunięcie w prawo przy zerowym wypełnieniu

<<<<<<< HEAD:1-js/02-first-steps/07-operators/article.md
Operatory te stosowane są dość rzadko. Aby je zrozumieć, należałoby sięgnąć do niskopoziomowych reprezentacji liczb, co na tym poziomie nie jest zbyt dobrym posunięciem, zwłaszcza że nie będziemy z nich korzystać jeszcze przez długi czas. Jeśli zaciekawił cię ten temat, możesz przeczytać artykuł o [operatorach binarnych](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators) na MDN. Jednak lepiej zajrzeć tam dopiero wtedy, gdy faktycznie będziesz ich potrzebować.

## Modyfikacja w miejscu

Często zachodzi potrzeba użycia operatora na zmiennej i zachowania wyniku do tej samej zmiennej.

Na przykład:

```js
let n = 2;
n = n + 5;
n = n * 2;
```

Powyższy zapis można skrócić używając operatorów `+=` oraz `*=`:

```js run
let n = 2;
n += 5; // teraz n = 7 (równoznaczne z: n = n + 5)
n *= 2; // teraz n = 14 (równoznaczne z: n = n * 2)

alert( n ); // 14
```

Dla każdej operacji arytmetycznej i binarnej istnieje skrócony operator typu "zmodyfikuj-i-przypisz": `/=`, `-=`, itd.

Mają one taki sam priorytet co zwykłe przypisanie, dlatego wykonywane są po zakończeniu większości obliczeń:

```js run
let n = 2;

n *= 3 + 5;

alert( n ); // 16  (najpierw wykonywana jest prawa strona, równoznaczne z: n *= 8)
```
=======
These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level. We won't need these operators any time soon, as web development has little use of them, but in some special areas, such as cryptography, they are useful. You can read the [Bitwise Operators](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators) article on MDN when a need arises.
>>>>>>> b52aa942a8e9b75ba8a65124c22593171e273bb6:1-js/02-first-steps/08-operators/article.md

## Przecinek

Operator przecinka `,` jest jednym z najrzadziej spotykanych i najbardziej nietypowych operatorów. Czasami stosuje się go do napisania krótszego kodu, dlatego powinniśmy go poznać, aby wiedzieć, co się w nim dzieje.

Operator przecinka pozwala wykonać kilka operacji, oddzielonych od siebie właśnie przecinkiem `,`. Każda z nich jest wykonywana, jednak zwracany jest wynik tylko ostatniej.

Na przykład:

```js run
*!*
let a = (1 + 2, 3 + 4);
*/!*

alert( a ); // 7 (wynik dodawania: 3 + 4)
```

W powyższym kodzie pierwsze wyrażenie `1 + 2` jest obliczane, a następnie jego wynik jest odrzucany. Później obliczany jest wynik operacji `3 + 4`, który jest już zwracany.

```smart header="Przecinek ma bardzo niski priorytet"
Zwróć uwagę, że operator przecinka ma bardzo niski priorytet, niższy nawet niż `=`. Dlatego w powyższym kodzie konieczne jest wstawienie nawiasów.

Bez nawiasów, w wyrażeniu: `a = 1 + 2, 3 + 4` najpierw wykona się `+`, co doda do siebie dwie liczby, dając `a = 3, 7`. Następnie operator `=` przypisze `a = 3`, a dalsza część zostanie ignorowana. To tak jakby napisać: `(a = 1 + 2), 3 + 4`.
```

Po co nam operator, który odrzuca wszystkie wyniki oprócz ostatniego?

Czasami stosuje się go w bardziej skomplikowanych konstrukcjach, gdzie wykonywanych jest kilka czynności w jednej linii.

Na przykład:

```js
// trzy operacje w jednej linii
for (*!*a = 1, b = 3, c = a * b*/!*; a < 10; a++) {
 ...
}
```

Tego typu sztuczki przewijają się w kodzie wielu bibliotek javascriptowych. Właśnie dlatego o nich tu wspominamy. Zwykle jednak nie poprawiają czytelności kodu, dlatego należy się poważnie zastanowić przed każdym ich zastosowaniem.
