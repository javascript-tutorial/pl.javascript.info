# Pętle: while i for

Często musimy powtarzać działania.

Na przykład, wysyłanie towarów z listy jeden po drugim lub po prostu uruchamianie tego samego kodu dla każdej liczby od 1 do 10.

*Pętle* są sposobem na wielokrotne powtarzanie tego samego kodu.

## Pętla "while"

Pętla `while` ma następującą składnię::

```js
while (warunek) {
  // kod
  // tak zwane "ciało pętli"
}
```

Podczas gdy `warunek` jest prawdą, `kod` z ciała pętli jest wykonywany.

Na przykład pętla poniżej wysyła `i` dopóki `i < 3`:

```js run
let i = 0;
while (i < 3) { // pokazuje 0, potem 1, potem 2
  alert( i );
  i++;
}
```

Pojedyńcze wykonanie ciała pętli jest nazywane *iteracją*. Pętla w powyższym przykładzie wykonuje trzy iteracje.

Gdyby w powyższym przykładzie brakowało `i++`, pętla powtarzałaby się (w teorii) wiecznie. W praktyce, przeglądarka dostarcza sposobów na zatrzymanie takich pętli, a w JavaScript po stronie serwera, możemy zabić proces.

Każde wyrażenie lub zmienna może być warunkiem pętli, nie tylko porównanie: warunek jest oceniany i zamieniany na boolean przez `while`.

Na przykład, krótszym sposobem na napisanie `while (i != 0)` jest `while (i)`:

```js run
let i = 3;
*!*
while (i) { // kiedy i staje się 0, warunek staje się fałszywy i pętla się zatrzymuje
*/!*
  alert( i );
  i--;
}
```

````smart header="Nawiasy klamrowe nie są wymagane dla jedno-linijkowego ciała"
Jeśli ciało pętli ma jedno wyrażenie, możemy pominąć nawiasy klamrowe `{…}`:

```js run
let i = 3;
*!*
while (i) alert(i--);
*/!*
```
````

## Pętla "do..while"

Kontrola warunku może być przesunięta *poniżej* ciała pętli za pomocą składni `do...while`:

```js
do {
  // ciało pętli
} while (warunek);
```

Pętla najpierw wykona ciało, potem sprawdzi warunek i jeśli jest prawdziwy wykona je ponownie i ponownie.

Na przykład:

```js run
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
```

Ta forma składni powinna być stosowana tylko wtedy, gdy chcemy, aby ciało pętli wykonało się **przynajmniej raz** niezależnie od tego, czy warunek jest prawdziwy. Zazwyczaj preferowana jest druga forma: `while(...) {...}`.

## Pętla "for"

Pętla `for` jest bardziej złożona, ale jest to również najczęściej używana pętla.

Wygląda tak:

```js
for (początek; warunek; krok) {
  // ... ciało pętli ...
}
```

Poznajmy znaczenie tych części na przykładzie. Poniższa pętla uruchomi `alert(i)` dla `i` od `0` do (ale nie włączając) `3`:

```js run
for (let i = 0; i < 3; i++) { // pokazuje 0, potem 1, potem 2
  alert(i);
}
```

Zbadajmy wyrażenie `for` kawałek po kawałku:

| część |          |                                                                            |
|-------|----------|----------------------------------------------------------------------------|
| początek | `i = 0` | Wykonuje się raz po wejściu do pętli.                                      |
| warunek | `i < 3`| Sprawdzane przed każdą iteracją pętli. Jeśli fałsz, pętla się zatrzymuje.              |
| ciało | `alert(i)`| Uruchamiane w kółko, gdy warunek jest prawdziwy.                         |
| krok | `i++`      | Wykonuje się po ciele na każdej iteracji. |

Ogólny algorytm pętli działa w ten sposób:

```
Początek uruchomienia
→ (jeśli warunek → uruchamia ciało i krok)
→ (jeśli warunek → uruchamia ciało i krok)
→ (jeśli warunek → uruchamia ciało i krok)
→ ...
```

To znaczy, `zacznij` wykonywać raz, a następnie iteruje: po każdym sprawdzeniu `warunku`, `ciało` i `krok` są wykonywane.

Jeśli jesteś nowym użytkownikiem pętli, możesz wrócić do tego przykładu i odtworzyć, jak przebiega on krok po kroku na kartce papieru.

Oto co dokładnie dzieje się w naszym przypadku:

```js
// for (let i = 0; i < 3; i++) alert(i)

// uruchomienie się rozpoczyna
let i = 0
// jeśli warunek spełniony → uruchom ciało i krok
if (i < 3) { alert(i); i++ }
// jeśli warunek spełniony → uruchom ciało i krok
if (i < 3) { alert(i); i++ }
// jeśli warunek spełniony → uruchom ciało i krok
if (i < 3) { alert(i); i++ }
// ...kończy, ponieważ teraz i == 3
```

````smart header="Deklaracja zmiennej w linii"
Tutaj, zmienna "licznik" `i` jest deklarowana w pętli. Nazywa się to deklaracją zmiennej "w linii" (inline). Takie zmienne są widoczne tylko wewnątrz pętli.

```js run
for (*!*let*/!* i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // błąd, nie ma takiej zmiennej
```

Zamiast definiować zmienną, moglibyśmy użyć istniejącej:

```js run
let i = 0;

for (i = 0; i < 3; i++) { // użyj istniejącej zmiennej
  alert(i); // 0, 1, 2
}

alert(i); // 3, widoczne, ponieważ zadeklarowane poza pętlą
```

````


### Pomijanie części

Każda część `for` może być pominięta.

Na przykład, możemy pominąć `początek`, jeśli nie musimy nic robić na początku pętli.

Jak tutaj:

```js run
let i = 0; // mamy i już zadeklarowane i przypisane

for (; i < 3; i++) { // nie ma potrzeby "początku"
  alert( i ); // 0, 1, 2
}
```

Możemy także usunąć część `krok`:

```js run
let i = 0;

for (; i < 3;) {
  alert( i++ );
}
```

To czyni pętlę identyczną jak `while (i < 3)`.

Możemy właściwie usunąć wszystko, tworząc nieskończoną pętlę:

```js
for (;;) {
  // powtarza się bez ograniczeń
}
```

Please note that the two `for` semicolons `;` must be present. Otherwise, there would be a syntax error.
Proszę zwrócić uwagę, że te dwa średniki `;` pętli `for` muszą być obecne. W przeciwnym razie wystąpiłby błąd składniowy.

## Przerywanie pętli

Normalnie, pętla wychodzi, gdy jej warunek staje się fałszywy.

Ale w każdej chwili możemy wymusić wyjście za pomocą specjalnej dyrektywy `break`.

For example, the loop below asks the user for a series of numbers, "breaking" when no number is entered:
Na przykład, poniższa pętla pyta użytkownika o serię numerów, "przerywa" (break), gdy nie jest wprowadzona żadna liczba:

```js run
let sum = 0;

while (true) {

  let value = +prompt("Wprowadź liczbę", '');

*!*
  if (!value) break; // (*)
*/!*

  sum += value;

}
alert( 'Suma: ' + sum );
```

Dyrektywa `break` jest aktywowana w wierszu `(*)`, jeśli użytkownik wprowadzi pusty wiersz lub anuluje wejście. Zatrzymuje ona natychmiast pętlę, przekazując sterowanie do pierwszego wiersza po pętli. Mianowicie, `alert`.

Kombinacja "nieskończona pętla + `break`(przerwanie) w razie potrzeby" jest świetna w sytuacjach, gdy stan pętli musi być sprawdzony nie na początku lub na końcu pętli, ale w środku lub nawet w kilku miejscach jej ciała.

## Kontynuuj do następnej iteracji [#continue]

Dyrektywa `continue`(kontynuuj) jest "lżejszą wersją" `break`(przerwania). Nie zatrzymuje ona całej pętli. Zamiast tego, zatrzymuje bieżącą iterację i zmusza pętlę do rozpoczęcia nowej (jeśli warunek na to pozwala).

Możemy go użyć, jeśli skończyliśmy z obecną iteracją i chcielibyśmy przejść do następnej.

Poniższa pętla używa `continue` do wyprowadzania tylko nieparzystych wartości:

```js run no-beautify
for (let i = 0; i < 10; i++) {

  // jeśli prawda, pomiń pozostałą część ciała
  *!*if (i % 2 == 0) continue;*/!*

  alert(i); // 1, potem 3, 5, 7, 9
}
```

Dla wartości parzystych `i`, dyrektywa `continue` przestaje wykonywać ciało i przekazuje kontrolę do następnej iteracji `for` (z kolejnym numerem). Tak więc `alert` jest wywoływany tylko dla wartości nieparzystych.

````smart header="Dyrektywa `continue` pomaga zmniejszyć zagnieżdżanie"
Pętla, która pokazuje nieparzyste wartości, może wyglądać tak:

```js
for (let i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i );
  }

}
```

Z technicznego punktu widzenia, jest to identyczne z powyższym przykładem. Z pewnością możemy po prostu zawinąć kod w bloku `if` zamiast używać `continue`.

Ale jako efekt uboczny, stworzyło to jeszcze jeden poziom zagnieżdżenia (`alert` wywołany wewnątrz nawiasów klamrowych). Jeśli kod wewnątrz `if` jest dłuższy niż kilka linii, może to zmniejszyć ogólną czytelność.
````

````warn header="Nie `break/continue` po prawej stronie '?'"
Proszę zauważyć, że konstrukcje składniowe, które nie są wyrażeniami, nie mogą być używane z operatorem trójdzielnym `?`. W szczególności, dyrektywy takie jak `break/continue` nie są tam dozwolone.

Na przykład, jeśli weźmiemy ten kod:

```js
if (i > 5) {
  alert(i);
} else {
  continue;
}
```

...i przepiszemy go używając znaku zapytania:

```js no-beautify
(i > 5) ? alert(i) : *!*continue*/!*; // continue nie jest tu dozwolone
```

...przestaje działać: jest błąd składniowy.

Jest to kolejny powód, aby nie używać operatora znaku zapytania `?` zamiast `if`.
````

## Labels for break/continue

Sometimes we need to break out from multiple nested loops at once.

For example, in the code below we loop over `i` and `j`, prompting for the coordinates `(i, j)` from `(0,0)` to `(2,2)`:

```js run no-beautify
for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // what if we want to exit from here to Done (below)?
  }
}

alert('Done!');
```

We need a way to stop the process if the user cancels the input.

The ordinary `break` after `input` would only break the inner loop. That's not sufficient--labels, come to the rescue!

A *label* is an identifier with a colon before a loop:
```js
labelName: for (...) {
  ...
}
```

The `break <labelName>` statement in the loop below breaks out to the label:

```js run no-beautify
*!*outer:*/!* for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) *!*break outer*/!*; // (*)

    // do something with the value...
  }
}
alert('Done!');
```

In the code above, `break outer` looks upwards for the label named `outer` and breaks out of that loop.

So the control goes straight from `(*)` to `alert('Done!')`.

We can also move the label onto a separate line:

```js no-beautify
outer:
for (let i = 0; i < 3; i++) { ... }
```

The `continue` directive can also be used with a label. In this case, code execution jumps to the next iteration of the labeled loop.

````warn header="Labels do not allow to \"jump\" anywhere"
Labels do not allow us to jump into an arbitrary place in the code.

For example, it is impossible to do this:
```js
break label; // doesn't jumps to the label below

label: for (...)
```

A call to `break/continue` is only possible from inside a loop and the label must be somewhere above the directive.
````

## Summary

We covered 3 types of loops:

- `while` -- The condition is checked before each iteration.
- `do..while` -- The condition is checked after each iteration.
- `for (;;)` -- The condition is checked before each iteration, additional settings available.

To make an "infinite" loop, usually the `while(true)` construct is used. Such a loop, just like any other, can be stopped with the `break` directive.

If we don't want to do anything in the current iteration and would like to forward to the next one, we can use the `continue` directive.

`break/continue` support labels before the loop. A label is the only way for `break/continue` to escape a nested loop to go to an outer one.
