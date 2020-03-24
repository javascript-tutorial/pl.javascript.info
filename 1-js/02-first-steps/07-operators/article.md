# Operatory

Z czasów szkolnych znamy wiele operatorów: dodawania `+`, mnożenia `*`, odejmowania `-` itd.

W tym rozdziale skupimy się na operatorach, o których nie uczono na matematyce.

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

## Konkatenacja ciągów znaków, dwuargumentowy +

Teraz zajmijmy się specjalnymi właściwościami operatorów javascriptowych, o których nie dowiemy się na matematyce.

Zwykle operator plusa `+` dodaje do siebie liczby.

Jednak jeśli ten sam operator `+` zastosujemy do łańcuchów znaków, spowoduje on ich połączenie (konkatenację):

```js
let s = "mój" + "napis";
alert(s); // mójnapis
```

Zauważ, że jeśli jeden z operandów jest typu tekstowego, drugi też jest konwertowany do tekstu.

Na przykład:

```js run
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
```

Nie ma znaczenia, czy to pierwszy argument będzie tekstem, czy drugi. Zasada jest prosta: jeśli którykolwiek z operandów jest ciągiem znaków, drugi też się nim staje.

Warto jednak zwrócić uwagę na fakt, iż operacje wykonywane są w kolejności od lewej do prawej. Jeśli dodamy do siebie dwie liczby, a następnie ciąg znaków, najpierw zostaną zsumowane liczby, a następnie wynik zostanie przekonwertowany do tekstu:


```js run
alert(2 + 2 + '1' ); // "41", a nie "221"
```

Konkatenacja i konwersja ciągów znaków to specjalne własności dwuargumentowego plusa `+`. Pozostałe operatory arytmetyczne działają tylko na liczbach i zawsze konwertują swoje argumenty do typu liczbowego.

Przykład z odejmowaniem i dzieleniem:

```js run
alert( 2 - '1' ); // 1
alert( '6' / '2' ); // 3
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

<<<<<<< HEAD
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
| 15 | multiplication | `*` |
| 15 | division | `/` |
| 13 | addition | `+` |
| 13 | subtraction | `-` |
| ... | ... | ... |
| 3 | assignment | `=` |
| ... | ... | ... |

As we can see, the "unary plus" has a priority of `17` which is higher than the `13` of "addition" (binary plus). That's why, in the expression `"+apples + +oranges"`, unary pluses work before the addition.
>>>>>>> 162280b6d238ce32bbd8ff7a3f7992be82c2311a

Jak widać, "jednoargumentowy plus" ma priotytet równy `16`, czyli większy niż `13` przypisany do "dodawania" (jednoargumentowego plusa). To dlatego w wyrażeniu `"+apples + +oranges"` jednoargumentowe plusy aplikowane są w pierwszej kolejności.

## Przypisanie

Zauważ, że operator przypisania `=` także jest operatorem. Został wymieniony w tabeli kolejności wykonywania działań z bardzo niskim priorytetem, `3`.

To dlatego gdy przypisujemy do zmiennej wyrażenie `x = 2 * 2 + 1`, najpierw wykonywane są obliczenia, a dopiero na koniec dokonywane jest przypisanie operatorem `=`, powodujące zapisanie wyniku w zmiennej `x`.

```js
let x = 2 * 2 + 1;

alert( x ); // 5
```

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
```

## Inkrementacja/dekrementacja

<!-- Nie można używać -- w tytule, bo wbudowany parser zamienia to na - -->

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
