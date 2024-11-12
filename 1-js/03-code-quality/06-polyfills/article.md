
# Polyfille

Język JavaScript stale ewoluuje. Nowe propozycje dotyczące języka pojawiają się regularnie, są analizowane i, jeśli uznane za godne, są dołączane do listy na stronie <https://tc39.github.io/ecma262/> a następnie przechodzą do [specyfikacji](http://www.ecma-international.org/publications/standards/Ecma-262.htm).

Zespoły odpowiedzialne za silniki JavaScript mają własne pomysły na to, co wdrożyć w pierwszej kolejności. Mogą zdecydować się na wdrożenie propozycji, które są w fazie roboczej i odroczyć rzeczy, które już znajdują się w specyfikacji, ponieważ są mniej interesujące lub po prostu trudniejsze do wykonania.

Dlatego dość często zdarza się, że silnik implementuje tylko część standardu.
 
Dobrą stroną do sprawdzenia aktualnego stanu wsparcia dla funkcjonalności języka jest <https://kangax.github.io/compat-table/es6/> (jest duża, mamy jeszcze wiele do przestudiowania).

## Babel

Gdy używamy nowoczesnych funkcjonalności języka, niektóre silniki mogą nie obsługiwać takiego kodu. Jak już wspomniano, nie wszystkie funkcjonalności są zaimplementowane wszędzie.

Tutaj z pomocą przychodzi Babel.

[Babel](https://babeljs.io) jest [transpilatorem](https://pl.wikipedia.org/wiki/Transpilator). Przepisuje on nowoczesny kod JavaScript do poprzedniego standardu.

Tak naprawdę Babel składa się z dwóch części:

1. Pierwsza, program transpilatora, który przepisuje kod. Deweloper uruchamia go na własnym komputerze. Przepisuje kod do starszego standardu. Następnie kod jest dostarczany na stronę internetową dla użytkowników. Nowoczesne systemy budowy projektów, takie jak [webpack](http://webpack.github.io/) zapewniają środki do automatycznego uruchamiania transpilatora przy każdej zmianie kodu, dzięki czemu bardzo łatwo jest zintegrować go z procesem programowania.

2. Druga, polyfill.

   Nowe funkcjonalności języka mogą obejmować nowe wbudowane funkcje i konstrukcje składni.
   Transpilator przepisuje kod, transformując konstrukcje składniowe na starsze. Jeśli chodzi o nowe wbudowane funkcje, musimy je zaimplementować. JavaScript jest wysoce dynamicznym językiem, skrypty mogą dodawać/modyfikować dowolne funkcje, aby zachowywały się zgodnie z nowoczesnym standardem.

   Skrypt który aktualizuje/dodaje nowe funkcje nazywany jest "polyfillem". Wypełnia on lukę i dodaje brakujące implementacje.

   Dwa interesujące polyfille to:
   - [core js](https://github.com/zloirock/core-js) który obsługuje wiele, pozwala na dodanie tylko potrzebnych funkcji
   - [polyfill.io](http://polyfill.io) usługa udostępniająca skrypt z polyfillami, w zależności od funkcjonalności oraz przeglądarki użytkownika.

Tak więc, jeśli zamierzamy korzystać z nowoczesnych funkcjonalności języka, transpilator i polyfill są niezbędne.

## Przykłady w samouczku


````online
Większość przykładów można uruchomić na miejscu, w ten sposób:

```js run
alert('Naciśnij przycisk "Play" w prawym górnym roku, aby uruchomić');
```

Przykłady korzystające z nowoczesnego JS będą działać tylko wtedy, gdy przeglądarka je obsługuje.
````

```offline
Ponieważ czytasz wersję offline, w PDF przykłady nie są uruchamialne. W EPUB niektóre z nich można uruchomić.
```

Google Chrome jest zwykle najbardziej aktualną przeglądarką z funkcjonalnościami języka, dobrą do uruchamiania najnowocześniejszych stron demonstracyjnych bez żadnych transpilatorów, ale inne nowoczesne przeglądarki również działają dobrze.
