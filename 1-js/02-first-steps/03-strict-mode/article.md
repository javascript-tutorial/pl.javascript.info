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

W niedługim czasie nauczysz się funkcji (sposobu łączenia instrukcji w grupy). Zauważ, że trybu ścisłego `"use strict"` można użyć na początku funkcji zamiast umieszczać na początku całego skryptu. Jeśli tak zrobisz, tryb ścisły będzie obowiązywał tylko w wybranej funkcji. Zazwyczaj jednak stosuje się go dla całego skryptu.


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

<<<<<<< HEAD
Jeśli włączysz tryb ścisły, nie ma już odwrotu.
=======
Once we enter strict mode, there's no going back.
>>>>>>> 47d186598add3a0ea759615596a12e277ce8fb5a
```

## Konsola przeglądarki

Tak na przyszłość, jeśli chcesz używać konsoli przeglądarki do testowania swoich funkcjonalności, pamiętaj, że tryb ścisły `use strict` nie jest domyślnie włączony.

W niektórych sytuacjach użycie tego trybu skutkuje otrzymywaniem niewłaściwych rezultatów.

Naciśnij `key:Shift+Enter`, żeby wpisać kod w wielu liniach i wpisz `use strict` na samej górze, jak tutaj:

```js
'use strict'; <Shift+Enter dla nowej linii>
//  ...Twój kod
<Enter, żeby uruchomić>
```

Działa na większości przeglądarek, a z pewnością na Firefoksie i Chromie.

Jeśli jednak z jakiegoś powodu nie zadziała, wystarczy że użyjesz poniższego kodu:

```js
(function() {
  'use strict';

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