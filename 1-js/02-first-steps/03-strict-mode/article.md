# Nowoczesny tryb, "use strict"

Przez długi czas JavaScript rozwijał się bez problemów z kompatybilnością. Dodawane były nowe funkcjonalności przy zachowaniu starych.

To miało tę zaletę, że istniejący kod zawsze działał. Ale minusem było to, że każda niedoskonałość ze strony twórców pozostawała w języku na zawsze.

Tak było do 2009 roku, kiedy pojawił się standard ECMAScript 5 (ES5). W tej wersji dodano nowe funkcjonalności oraz zmodyfikowano niektóre już istniejące. Żeby stary kod nadal mógł działać, domyślnie wyłączona jest większość modyfikacji. Aby je włączyć, należy podać specjalną dyrektywę: `"use strict"`.

## "use strict"

Dyrektywa wygląda jak zwykły ciąg znaków: `"use strict"` lub `'use strict'`. Jeśli jest ona umieszczona na samym początku skryptu, wtedy cały skrypt działa w "nowoczesnym" trybie ścisłym.

Dla przykładu:

```js
"use strict";

// ten kod zadziała w nowoczesnym trybie
...
```

<<<<<<< HEAD
W niedługim czasie nauczysz się funkcji (sposobu łączenia instrukcji w grupy). Zauważ, że trybu ścisłego `"use strict"` można użyć na początku funkcji zamiast umieszczać na początku całego skryptu. Jeśli tak zrobisz, tryb ścisły będzie obowiązywał tylko w wybranej funkcji. Zazwyczaj jednak stosuje się go dla całego skryptu.

=======
Quite soon we're going to learn functions (a way to group commands), so let's note in advance that `"use strict"` can be put at the beginning of a function. Doing that enables strict mode in that function only. But usually people use it for the whole script.
>>>>>>> b85413d0bdd6f4f468fcadeacb4c4056e3671ce1

````warn header="Upewnij się, że \"use strict\" jest na samej górze"
Upewnij się, że dyrektywa `"use strict"` znajduje się na samej górze skryptu. W przeciwnym wypadku tryb ten nie zostanie włączony.

Tryb ścisły nie będzie działał w poniższym przypadku:

```js no-strict
alert("jakiś kod");
// Dyrektywa "use strict" jest ignorowana -- musi zostać zadeklarowana na samej górze

"use strict";

// tryb ścisły nie jest włączony
```

Tylko komentarze mogą znajdować się powyżej deklaracji `"use strict"`.
````

```warn header="Nie ma możliwości anulowania `use strict`"
Nie ma takiej dyrektywy jak `"no use strict"`, która przywraca wcześniejsze działanie silnika JavaScript.

Jeśli włączysz tryb ścisły, nie ma już odwrotu.
```

## Konsola przeglądarki

<<<<<<< HEAD
Tak na przyszłość, jeśli chcesz używać konsoli przeglądarki do testowania swoich funkcjonalności, pamiętaj, że tryb ścisły `use strict` nie jest domyślnie włączony.
=======
When you use a [developer console](info:devtools) to run code, please note that it doesn't `use strict` by default.
>>>>>>> b85413d0bdd6f4f468fcadeacb4c4056e3671ce1

W niektórych sytuacjach użycie tego trybu skutkuje otrzymywaniem niewłaściwych rezultatów.

<<<<<<< HEAD
Naciśnij `key:Shift+Enter`, żeby wpisać kod w wielu liniach i wpisz `use strict` na samej górze, jak tutaj:
=======
So, how to actually `use strict` in the console?

First, you can try to press `key:Shift+Enter` to input multiple lines, and put `use strict` on top, like this:
>>>>>>> b85413d0bdd6f4f468fcadeacb4c4056e3671ce1

```js
'use strict'; <Shift+Enter dla nowej linii>
//  ...Twój kod
<Enter, żeby uruchomić>
```

Działa na większości przeglądarek, a z pewnością na Firefoksie i Chromie.

<<<<<<< HEAD
Jeśli jednak z jakiegoś powodu nie zadziała, wystarczy że użyjesz poniższego kodu:
=======
If it doesn't, e.g. in an old browser, there's an ugly, but reliable way to ensure `use strict`. Put it inside this kind of wrapper:
>>>>>>> b85413d0bdd6f4f468fcadeacb4c4056e3671ce1

```js
(function() {
  'use strict';

<<<<<<< HEAD
  // ...twój kod...
})()
```

## Zawsze używaj "use strict"

Musimy jeszcze omówić różnice pomiędzy trybem ścisłym a trybem domyślnym.

W następnych rozdziałach, gdy będziemy poznawać funkcjonalności języka, poznamy różnice pomiędzy tymi trybami. Na szczęście nie ma ich wiele, ale czynią nasze programistyczne życie lepszym.

Póki co, wystarczy, jeśli wiesz, że:

1. Dyrektywa `"use strict"` przełącza silnik JavaScript w tryb "nowoczesny" (ścisły). Zmienia to zachowanie wbudowanych funkcjonalności. O szczegółach dowiesz się z kolejnych rozdziałów.
2. Tryb ścisły jest włączany, gdy umieścisz dyrektywę `"use strict"` na początku skryptu lub funkcji. Niektóre z funkcjonalności języka, takie jak "klasy" czy "moduły", włączają tryb ścisły wewnątrz siebie automatycznie.
3. Tryb ścisły jest wspierany przez wszystkie nowoczesne przeglądarki internetowe.
4. Zalecamy zaczynanie wszystkich skryptów od dyrektywy `"use strict"`. Wszystkie przykłady w tym samouczku zakładają, że tryb jest włączony, chyba że (bardzo rzadko) określono inaczej.
=======
  // ...your code here...
})()
```

## Should we "use strict"?

The question may sound obvious, but it's not so.

One could recommend to start scripts with `"use strict"`... But you know what's cool?

Modern JavaScript supports "classes" and "modules" - advanced language structures (we'll surely get to them), that enable `use strict` automatically. So we don't need to add the `"use strict"` directive, if we use them.

**So, for now `"use strict";` is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it.**

As of now, we've got to know about `use strict` in general.

In the next chapters, as we learn language features, we'll see the differences between the strict and old modes. Luckily, there aren't many and they actually make our lives better.

All examples in this tutorial assume strict mode unless (very rarely) specified otherwise.
>>>>>>> b85413d0bdd6f4f468fcadeacb4c4056e3671ce1
