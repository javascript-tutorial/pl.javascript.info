# Nowoczesny tryb, "use strict"

Przez długi czas JavaScript rozwijał się bez problemów z kompatybilnością. Nowe funkcjonalności zostały dodane kiedy stare się nie zmieniły.

To miało tę zaletę, że istniejący kod zawsze działał. Ale minusem było to, że każda niedoskonałość ze strony twórców pozostawała w języku na zawsze.

Tak było do 2009 roku, kiedy pojawiła się ECMAScript 5 (ES5). W tej wersji dodano nowe funkcjonalności oraz zmodyfikowania niektóre już istniejące. Żeby stary kod nadal mógł działać większość modyfikacji jest domyślnie wyłączona. Musisz je włączyć podając specjalną dyrektywę: `"use strict"`.

## "use strict"

Dyrektywa wygląda jak zwykły string: `"use strict"` lub `'use strict'`. Jeśli jest ona umieszczona na samej górze skryptu, wtedy cały skrypt działa w "nowoczesnym" trybie.

Dla przykładu:

```js
"use strict";

// ten kod zadziała w nowoczesnym trybie
...
```

W niedługim czasie nauczysz się funkcji (dzielenia instrukcji w grupy).

Zauważ, że tryb ścisły `"use strict"` może być użyty na początku funkcji zamiast na początku całego skryptu. Jeśli tak zrobisz tryb ścisły będzie obowiązywał tylko w wybranej funkcji. Zazwyczaj jednak ludzie stosują go dla całego skryptu.


````warn header="Upewnij się, że \"use strict\" jest na samej górze"
Proszę upewnij się, że zadeklarowałeś `"use strict"` na samej górze skrypu, inaczej nie zostanie on włączony.

Tryb ścisły nie jest włączony w tym przypadku:

```js no-strict
alert("jakiś kod");
// "use strict" jest zignorowany -- musi zostać zadeklarowany na samej górze

"use strict";

// tryb ścisły nie jest włączony
```

Tylko komentarze mogą znajdować się powyżej deklaracji `"use strict"`.
````

```warn header="Nie ma możliwości anulowania `use strict`"
Nie ma takiej dyrektywy jak `"no use strict"`, która odwołuje wcześniejsze zachowanie silnika JavaScript.

Jeśli włączysz tryb ścisły, nie ma już odwrotu.
```

## Konsola przeglądarki

Tak na przyszłość, jeśli chcesz używać konsoli przeglądarki do testowania swoich funkcjonalności, upewnij się, że tryb ścisły `use strict` nie jest domyślnie włączony.

Czasami kiedy masz włączony `use strict` możesz dostać niewłaściwe rezultaty.

Naciśnij `key:Shift+Enter`, żeby wpisać kod w wielu liniach i wpisz `use strict` na samej górze, jak tutaj:

```js
'use strict'; <Shift+Enter dla nowej linii>
//  ...Twój kod
<Enter żeby uruchomić>
```

To zadziała na większości przeglądarek, a właściwie na Firefox i Chrome.

Jeśli nie, to najlepszy niezawodny sposób na uruchomienie `use strict` to umieszczenie w konsoli kodu takiego jak ten:

```js
(function() {
  'use strict';

  // ...Twój kod...
})()
```

## Zawsze używaj "use strict"

Musimy jeszcze omówić różnice pomiędzy trybem ścisłym, a trybem domyślnym.

W następnych rozdziałach, gdy będziemy poznawać funkcjonalności języka, poznamy różnice pomiędzy tymi trybami. Na szczęście nie ma ich wiele, ale czynią nasze programistyczne życie lepszym.

Póki co, wystarczy jeśli wiesz:

1. Dyrektywa `"use strict"` przełącza silnik JavaScript w tryb "nowoczesny". Zmienia zachowanie wbudowanych funkcjonalności. Zobaczysz szczegóły w późniejszych rozdziałach.
2. Tryb ścisły jest włączony jeśli umieścisz dyrektywę `"use strict"` na górze skryptu lub funkcji. Niektóre z funkcjonalności języka takie jak "klasy" czy "moduły" włączają tryb ścisły wewnątrz siebie automatycznie.
3. Tryb ścisły jest wspierany przez wszystkie nowoczesne przeglądarki internetowe.
4. Zalecamy zaczynanie skryptów z dyrektywą `"use strict"` zawsze. Wszystkie przykłady w tym tutorialu zakładają, że tryb jest włączony, chyba że (bardzo rzadko) określono inaczej.