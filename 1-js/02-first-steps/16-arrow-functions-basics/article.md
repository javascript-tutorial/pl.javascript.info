# Funkcje strzałkowe, podstawy 

Istnieją jeszcze funkcje o krótszej i zwięzłej składni, która często jest lepsza niż wyrażenia funkcyjne.

Nazywają się "funkcjami strzałkowymi" i wyglądają następująco:

```js
let func = (arg1, arg2, ...argN) => expression
```

...Stworzona funckja `func` przyjmuje argumenty `arg1..argN`, następnie wykonuje wyrażenie po prawej stronie i zwraca jego wynik.

Innymi słowy, jest to krótsza wersja zapisu:

```js
let func = function(arg1, arg2, ...argN) {
  return expression;
};
```

Zobaczmy konkretny przykład:

```js run
let sum = (a, b) => a + b;

/* Powyższa funkcja strzałkowa jest krótszą formą poniższego zapisu:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
```

Jak możesz zobaczyć `(a, b) => a + b` to funkcja, która przyjmuje dwa argumenty o nazwie `a` i `b`. Następnie oblicza wyrażenie `a + b` i zwraca jego wynik.

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
    let sayHi = () => alert("Cześć!");

    sayHi();
    ```

Funkcji strzałkowych można używać w taki sam sposób jak wyrażeń funkcyjnych.

Na przykład, aby dynamicznie utworzyć funkcję:

```js run
let age = prompt("Ile masz lat?", 18); 

let welcome = (age < 18) ?
  () => alert('Cześć') :
  () => alert("Pozdrawiam!");

welcome(); 
```

Funckje strzałkowe mogą początkowo wydawać się nieznane i mało czytelne ale to się szybko zmieni, gdy oczy przyzwyczajają się do ich struktury.

Są bardzo wygodne w przypadku prostych, jednolinijkowych działań lub gdy jesteśmy zbyt leniwi, by napisać wiele słów.

## Wielolinijkowe funckje strzałkowe

Powyższe przykłady pobierały argumenty z lewej strony `=>` a później wykonywały wyrażenie znajdujące się po prawej stronie. 

Czasami potrzebujemy czegoś bardziej złożonego, na przykład wielu wyrażeń lub instrukcji. Powinniśmy je wtedy napisać w nawiasach klamrowych i oczywiście, nie zapomnieć o "return".

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

```smart header="Inne zalety"

Tutaj pochwaliliśmy funkcje strzałkowe za ich zwięzłość. Ale to nie koniec ich zalet!

Funckje strzałkowe mają też inne interesujące cechy.

Aby dogłębnie je przestudiować najpierw musimy poznać inne aspekty JavaScript więc wrócimy do funkcji strzałkowych w dalszej części rozdziału <info:arrow-functions>.

Na tę chwilę potrafimy już używać funkcji strzałkowych do działań jednolinijkowych i wywołań zwrotnych.

```

## Podsumowanie

Funkcje strzałkowe są przydatne w przypadku działań jednolinijkowych. Występują w dwóch wersjach:

1. Bez nawiasów klamrowych: `(...args) => expression` -- prawa strona to wyrażenie: funkcja je wykonuje i zwraca jego wynik

2. Z nawiasami klamrowymi: `(...args) => { body }` -- nawiasy pozwalają nam napisać wiele instrukcji wewnątrz funkcji, ale żeby coś zwrócić nie możemy zapomnieć o "return". 
