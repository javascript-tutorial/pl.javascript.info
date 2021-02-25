# Wyrażenia funkcyjne

W JavaScripcie, funkcje nie są "magicznymi konstrukcjami językowymi", lecz po prostu rodzajem wartości.

W poprzednich przykładach, używaliśmy składni nazywanej *deklaracją funkcji*:

```js
function sayHi() {
  alert( "Cześć" );
}
```

Innym sposobem na utworzenie funkcji jest tzw. *wyrażenie funkcyjne*.

Wygląda ono następująco:

```js
let sayHi = function() {
  alert( "Cześć" );
};
```

Funkcja jest tworzona i przypisywana do zmiennej - tak, jakby była to zwykła wartość. Nie ważne, w jaki sposób zostanie ona zdefiniowana - będzie to po prostu wartość, przechowywana w zmiennej `sayHi`.

Obydwa te fragmenty kodu mają takie samo znaczenie: "utwórz funkcję i przechowaj ją w zmiennej `sayHi`".

Możemy nawet wypisać tę wartość za pomocą `alert`:

```js run
function sayHi() {
  alert( "Cześć" );
}

*!*
alert( sayHi ); // pokazuje kod funkcji
*/!*
```

Zwróć uwagę, że ostatnia linijka nie wywołuje funkcji, ponieważ po `sayHi` nie ma nawiasów. Istnieją języki programowania, w których użycie samej nazwy funkcji powoduje jej wywołanie, lecz JavaScript tak nie działa.

W JavaScripcie, funkcja jest wartością, więc możemy postępować z nią jak z wartością. Powyższy kod wyświetla jej reprezentację jako łańcuch znaków, czyli jej kod źródłowy.

Oczywiście, funkcja jest wyjątkową wartością, pod tym względem, że możemy ją wywołać, pisząc np. `sayHi()`.

Ale to nadal wartość, dlatego możemy operować na niej, jak na innych rodzajach wartości.

Możemy skopiować funkcję do innej zmiennej:

```js run no-beautify
function sayHi() {   // (1) tworzymy funkcję
  alert( "Cześć" );
}

let func = sayHi;    // (2) kopiujemy

func(); // Cześć     // (3) wywołujemy kopię (działa!)
sayHi(); // Cześć    //     to też działa (czemu miałoby nie?)
```

Oto co dokładnie się dzieje:

1. Deklarując funkcję, `(1)` tworzymy ją i zapisujemy ją do zmiennej o nazwie `sayHi`.
2. Linijka `(2)` kopiuje ją do zmiennej `func`. Jeszcze raz zwróć uwagę: po `sayHi` nie ma nawiasów. Gdyby się tam znajdowały, to polecenie `func = sayHi()` zapisałoby do zmiennej `func` *wynik wywołania* `sayHi()`, a nie *samą funkcję* `sayHi`.
3. Teraz można wywołać funkcję na dwa sposoby: `sayHi()` i `func()`.

Zauważ, że w celu zadeklarowania `sayHi` mogliśmy też użyć wyrażenia funkcyjnego w pierwszej linijce:

```js
let sayHi = function() {
  alert( "Cześć" );
};

let func = sayHi;
// ...
```

Wszystko zadziałałoby tak samo.


````smart header="Dlaczego na końcu jest średnik?"
Możesz zastanawiać się, dlaczego wyrażenie funkcyjne ma na końcu średnik (`;`), ale deklaracja funkcji nie:

```js
function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
}*!*;*/!*
```

Odpowiedź jest prosta:
- Średnika nie trzeba stawiać po blokach kodu oraz strukturach, które je wykorzystują, np.: `if { ... }`, `for {  }`, `function f { }`, itd.
- Wyrażenie funkcyjne jest wykorzystywane wewnątrz instrukcji (`let sayHi = ...;`) jako wartość. Nie jest to blok kodu, lecz przypisanie. Zaleca się stawianie średnika na końcu instrukcji, niezależnie od tego, jakie wartości zawiera. W tym wypadku, średnik nie odnosi się bezpośrednio do wyrażenia funkcyjnego, lecz po prostu kończy instrukcję.
````

## Wywołania zwrotne (callback functions)

Spójrzmy na kolejne przykład przekazywania funkcji jako wartości oraz wykorzystania wyrażeń funkcyjnych.

Napiszemy funkcję `ask(question, yes, no)` z trzema parametrami:

`question`
: Tekst pytania

`yes`
: Funkcja uruchomiona, jeśli odpowiedź brzmi "tak"

`no`
: Funkcja uruchomiona, jeśli odpowiedź brzmi "nie"

Funkcja powinna zadać pytanie (`question`) i w zależności od odpowiedzi użytkownika wywołać `yes()` lub `no()`:

```js run
*!*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
*/!*

function showOk() {
  alert( "Może być." );
}

function showCancel() {
  alert( "Nie chcesz nic wywoływać." );
}

// użycie: funkcje showOk, showCancel są przekazywane do funkcji ask jako argumenty
ask("Zgadzasz się?", showOk, showCancel);
```

Okazuje się, że takie funkcje są całkiem przydatne. W przeciwieństwie do powyższego przykładu, funkcje wykorzystywane w praktyce używają znacznie bardziej skomplikowanych sposobów interakcji z użytkownikiem niż zwykłe `confirm`. W przeglądarce, taka funkcja zazwyczaj rysuje ładnie wyglądające okienko, chociaż jest to zupełnie inna historia.

**Argumenty `showOk` i `showCancel` funkcji `ask` nazywane są *wywołaniami zwrotnymi* (*callback functions*) lub po prostu *callback*i.**

Idea jest taka, że przekazujemy funkcję po to, aby później w razie potrzeby została "wywołana zwrotnie" (*called back*). W naszym przypadku, `showOk` staje się wywołaniem zwrotnym (*callback*iem) wywołanym, jeśli odpowiedź to "tak" a `showCancel` - jeśli odpowiedź to "nie".

Możemy użyć wyrażeń funkcyjnych, aby zapisać tę samą funkcję o wiele krócej:

```js run no-beautify
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

*!*
ask(
  "Zgadzasz się?",
  function() { alert("Może być."); },
  function() { alert("Nie chcesz nic wywoływać."); }
);
*/!*
```

W tym przykładzie, funkcje deklarowane są bezpośrednio wewnątrz wywołania funkcji `ask(...)`. Nie są w żaden sposób nazwane, dlatego nazywa się je *anomimowymi*. Takie funkcje nie są dostępne poza wywołaniem `ask` (ponieważ nie są przypisane do zmiennych), jednak w tym przypadku jest to dokładnie to, czego chcemy.

Taki kod będzie pojawiał się w naszych skryptach naturalnie - jest to część filozofii JavaScriptu.

```smart header="Funkcja to zmienna reprezentująca \"czynność\""
Zwykłe zmienne, jak liczby, czy łańcuchy znaków, reprezentują *dane*.

O funkcji można myśleć jak o *działaniu*.

Możemy przekazywać ją pomiędzy zmiennymi i wywoływać kiedy chcemy.
```


## Wyrażenie funkcyjne a deklaracja funkcji

Podsumujmy najważniejsze różnice między deklaracją funkcji a wyrażeniem funkcyjnym

Po pierwsze, składnia: jak odróżnić je w kodzie.

- *Deklaracja funkcji:* funkcja, zadeklarowana jako osobne polecenie, w głównym ciągu kodu.

    ```js
    // deklaracja funkcji
    function sum(a, b) {
      return a + b;
    }
    ```
- *Wyrażenie funkcyjne:* funkcja, utworzona wewnątrz wyrażenia lub innej konstrukcji składniowej. Poniżej, funkcja jest tworzona po prawej stronie "wyrażenia przypisania" `=`:

    ```js
    // wyrażenie funkcyjne
    let sum = function(a, b) {
      return a + b;
    };
    ```

Bardziej subtelną różnicą jest *kiedy* funkcja jest tworzona przez silnik JavaScriptu.

**Wyrażenie funkcyjne jest tworzone, w momencie jego napotkania podczas wykonywania skryptu. Można używać go tylko od tej chwili.**

Kiedy wykonanie skryptu dojdzie do prawej strony przypisania `let sum = function…`, funkcja jest tworzona i od tego momentu może być używana (przypisana, wywołana, itp.).

Deklaracje funkcji działają inaczej.

**Funkcja deklarowana może być wywołana zanim zostanie zdefiniowana.**

Globalna deklaracja funkcji jest widoczna **w całym** skrypcie, niezależnie od tego, w którym miejscu jest zadeklarowana.

Wynika to z algorytmu wykonywania skryptu. Przygotowując skrypt do wykonania, JavaScript najpierw wyszukuje w nim globalnych deklaracji funkcji, a następnie je tworzy - można nazwać to etapem "inicjalizacji".

Kod wykonywany jest dopiero po przetworzeniu wszystkich deklaracji funkcji, stąd też ma do nich dostęp.

Na przykład, ten fragment kodu zadziała:

```js run refresh untrusted
*!*
sayHi("Jan"); // Cześć, Jan
*/!*

function sayHi(name) {
  alert( `Cześć, ${name}` );
}
```

Deklaracja funkcji `sayHi` jest tworzona, kiedy JavaScript przygotowuje się do wykonywania skryptu, dlatego funkcja jest widoczna wszędzie.

...Gdybyśmy użyli wyrażenia funkcyjnego, przykład by nie zadziałał:

```js run refresh untrusted
*!*
sayHi("Jan"); // błąd!
*/!*

let sayHi = function(name) {  // (*) magia przestała działać :'(
  alert( `Cześć, ${name}` );
};
```

Wyrażenia funkcyjne są tworzone dopiero, gdy wykonanie skryptu do nich dotrze. Stałoby się to dopiero w linijce `(*)` - wtedy będzie już za późno.

Innym aspektem deklaracji funkcji jest ich zasięg w bloku.

**W trybie ścisłym (*strict*), kiedy deklaracja funkcji znajduje się wewnątrz bloku, jest ona widoczna wszędzie w tym bloku, lecz nie poza nim.**

Załóżmy dla przykładu, że chcemy zadeklarować funkcję `welcome()`, zależącą od zmiennej `age`, którą otrzymujemy w trakcie wykonania, a którą chcemy wykorzystać później.

Jeśli użyjemy deklaracji funkcji, poniższy kod nie zadziała tak, jak byśmy tego oczekiwali:

```js run
let age = prompt("Ile masz lat?", 18);

// deklarujemy funkcję w zależności od wartości zmiennej age...
if (age < 18) {

  function welcome() {
    alert("Cześć!");
  }

} else {

  function welcome() {
    alert("Pozdrowienia!");
  }

}

// ...i chcemy jej później użyć
*!*
welcome(); // Error: welcome is not defined
*/!*
```

Dzieje się tak, ponieważ deklaracja funkcji jest widoczna jedynie w bloku, w którym się znajduje.

Oto kolejny przykład:

```js run
let age = 16; // weźmy 16 dla przykładu

if (age < 18) {
*!*
  welcome();               // \   (wykonuje się)
*/!*
                           //  |
  function welcome() {     //  |  
    alert("Hello!");       //  |  deklaracja funkcji jest dostępna
  }                        //  |  wszędzie w bloku, w którym się znajduje
                           //  |
*!*
  welcome();               // /   (też działa)
*/!*

} else {

  function welcome() {    
    alert("Greetings!");
  }
}

// Skończyły nam się klamerki,
// więc nie widzimy funkcji zadeklarowanych w poprzednim bloku.

*!*
welcome(); // Error: welcome is not defined
*/!*
```

Co możemy zrobić, żeby `welcome` było widoczne poza `if`em?

Odpowiednim podejściem będzie użycie wyrażenia funkcyjnego i przypisanie `welcome` do zmiennej zadeklarowanej poza `if`em, i która ma odpowiednią widoczność.

Ten kod zadziała tak, jakbyśmy chcieli:

```js run
let age = prompt("Ile masz lat?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Cześć!");
  };

} else {

  welcome = function() {
    alert("Pozdrowienia!");
  };

}

*!*
welcome(); // teraz zadziała
*/!*
```

Możemy też go uprościć za pomocą operatora warunkowego `?`:

```js run
let age = prompt("Ile masz lat?", 18);

let welcome = (age < 18) ?
  function() { alert("Cześć!"); } :
  function() { alert("Pozdrowienia!"); };

*!*
welcome(); // działa!
*/!*
```


```smart header="Kiedy wykorzystywać deklaracje funkcji, a kiedy wyrażenia funkcyjne?"
Chcąc utworzyć funkcję, zazwyczaj lepiej najpierw rozważyć deklarację funkcji. Daje ona więcej swobody co do organizacji kodu, ponieważ możemy wywołać takie funkcje przed tym jak zostaną zadeklarowane.

Deklaracje funkcji są też czytelniejsze i bardziej "wpadają w oko"; łatwiej znaleźć w kodzie `function f(…) {…}`, niż `let f = function(…) {…};`.

Dopiero jeśli z jakichś powodów deklaracja funkcji nie odpowiada naszym potrzebom (kiedy, jak w przykładzie, potrzebujemy warunkowej deklaracji funkcji), wtedy można rozważyć użycie wyrażenia funkcyjnego.
```

## Summary

- Funkcje są wartościami. Mogą być przypisywane, kopiowane lub deklarowane w każdym miejscu w kodzie.
- Jeśli funkcja utworzona w osobnym poleceniu w głównym ciągu kodu, to mówimy wtedy o *deklaracji funkcji*.
- Jeśli funkcja jest utworzona jako część wyrażenia, to mówimy wtedy o *wyrażeniu funkcyjnym*.
- Deklaracje funkcji są przetwarzane zanim blok kodu zostanie wykonany. Są one widoczne **wszędzie** w tym bloku.
- Wyrażenia funkcyjne są tworzone dopiero, gdy wykonanie skryptu do nich dotrze.

W większości przypadków, kiedy potrzebujemy utworzyć funkcję, lepiej użyć deklaracji funkcji, ponieważ będzie ona widoczna wszędzie. Daje nam to elastyczność w organizacji kodu i zazywczaj poprawia jego czytelność.

Wyrażeń funkcyjnych używaj tam, gdzie zwykła deklaracja funkcji nie wystarczy. Zobaczyliśmy kilka przykładów w tym podrozdziale; w następnych podrozdziałach pojawi się ich więcej.
