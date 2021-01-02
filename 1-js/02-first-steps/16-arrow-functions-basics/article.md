# Funkcje strzałkowe, podstawy 

Istnieją jeszcze funkcje o krótszej i zwięzłej składni, która często jest lepsza niż wyrażenia funkcyjne.

Nazywają się "funkcjami strzałkowymi" i wyglądają następująco:

```js
let func = (arg1, arg2, ...argN) => expression
```

...Stworzona funckja `func` przyjmuje argumenty `arg1..argN`, then evaluates the `expression` on the right side with their use and returns its result. następnie ocenia wyrażenie po prawej stronie z ich użyciem i zwraca jego wynik. 

Innymi słowy, jest to krótsza wersja zapisu:

```js
let func = function(arg1, arg2, ...argN) {
  return expression;
};
```

Zobaczmy konkretny przykład:

```js run
let sum = (a, b) => a + b;

/* Powyższa funckja strzałkowa jest krótszą formą poniższego zapisu:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
```

Jak możesz zobaczyć `(a, b) => a + b` to funkcja, która przyjmuje dwa argumenty o nazwie `a` i `b`. Po wykonaniu, oblicza wyrażenie `a + b` i zwraca jego wynik.

- Jeśli mamy tylko jeden argument, to możemy pominąć nawiasy wokół parametrów, czyniąc zapis jeszcze krótszym.

    Na przykład:

    ```js run
    *!*
    let double = n => n * 2;
    // zapis mniej więcej taki sam jak: let double = function(n) { return n * 2 }
    */!*

    alert( double(3) ); // 6
    ```

- Jeśli nie ma paramentrów, nawiasy będą puste (ale i tak powinny być obecne):

    ```js run
    let sayHi = () => alert("Hello!");

    sayHi();
    ```

Funkcji strzałkowych można używać w taki sam sposób jak wyrażeń funkcyjnych.

Na przykład, aby dynamicznie utworzyć funckję:

```js run
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome(); // ok now
```

Funckje strzałkowe mogą początkowo wydawać się nieznane i mało czytelne ale to się szybko zmieni, gdy oczy przyzwyczajają się do ich struktury.

Są bardzo wygodne w przypadku prostych, jednolinijkowych działań lub gdy jesteśmy zbyt leniwi, by napisać wiele słów.

## Wielolinijkowe funckje strzałkowe

The examples above took arguments from the left of `=>` and evaluated the right-side expression with them.

Czasami potrzebujemy czegoś bardziej złożonego, na przykład wielu wyrażeń lub instrukcji. It is also possible, but we should enclose them in curly braces. Then use a normal `return` within them.

Like this:

```js run
let sum = (a, b) => {  // nawiasy klamrowe otwierają wielolinijkową funkcję
  let result = a + b;
*!*
  return result; // jeśli użyjemy nawiasów klamrowych, nie możemy zapomnieć o „return” 
*/!*
};

alert( sum(1, 2) ); // 3
```

```smart header="More to come"
Here we praised arrow functions for brevity. But that's not all!

Funckje strzałkowe mają też inne interesujące cechy.

Aby dogłębnie je przestudiować najpierw musimy poznać inne aspekty JavaScript, więc wrócimy do funkcji strzałkowych w dalszej części rozdziału <info:arrow-functions>.

Na razie potrafimy już używać funkcji strzałkowych do działań jednolinijkowych i wywołań zwrotnych.
```

## Podsumowanie

Funkcje strzałkowe są przydatne w przypadku działań jednolinijkowych. Występują w dwóch wersjach:

1. Bez nawiasów klamrowych: `(...args) => expression` -- the right side is an expression: the function evaluates it and returns the result.
2. Z nawiasami klamrowymi: `(...args) => { body }` -- nawiasy pozwalają nam napisać wiele instrukcji wewnątrz funkcji, ale żeby coś zwrócić nie możemy zapomnieć o "return". 
