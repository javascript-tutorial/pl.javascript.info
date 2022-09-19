
# Podręczniki i specyfikacje

Ta książka służy jako *samouczek*. Pozwala stopniowo wdrażać się w język. Jednak gdy tylko zapoznasz się z podstawami, nadejdzie czas na zgłębienie wiedzy z innych źródeł.

## Specyfikacja

[Specyfikacja ECMA-262](https://www.ecma-international.org/publications/standards/Ecma-262.htm) zawiera najbardziej dogłębne, szczegółowe i formalne informacje o JavaScripcie. Definiuje język.

Przez tę całą formalność trudniej jest jednak ją zrozumieć. Dlatego jeśli potrzebujesz najbardziej wiarygodnego źródła informacji o szczegółach dotyczących języka, zajrzenie do specyfikacji jest najlepszym wyjściem. Nie służy ona jednak do codziennego użytku.

Co roku wypuszczana jest nowa wersja specyfikacji. W międzyczasie wszelkie aktualne "szkice" można zobaczyć na <https://tc39.es/ecma262/>.

Aby dowiedzieć się czegoś o najświeższych funkcjonalnościach, wliczając w to te, które "są już prawie częścią standardu" (są na tzw. "etapie 3"), przejrzyj listę wniosków na <https://github.com/tc39/proposals>.

Jeśli piszesz kod dla przeglądarek, w [drugiej części](info:browser-environment) samouczka znajdziesz więcej materiałów.

## Podręczniki

- **Dokumentacja referencyjna JavaScript na MDN (Mozilla)** służy za poradnik z przykładami i innymi informacjami. Świetnie nadaje się do zgłębiania wiedzy na temat poszczególnych funkcjonalności języka, interfejsów itd.

    Dostępna jest pod adresem <https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje>.

    Mimo wszystko łatwiej jest wyszukiwać konkretne pojęcia w internecie. Wystarczy wpisać "MDN [pojęcie]", np. <https://google.com/search?q=MDN+parseInt>, aby znaleźć informacje o funkcji `parseInt`.


- **MSDN** – podręcznik od Microsoftu zawierający sporo informacji, m.in. o JavaScripcie (często nazywany JScriptem). Jeśli szukasz czegoś konkretnego z tematyki Internet Explorera, lepiej zajrzyj na <http://msdn.microsoft.com/>.

    Można też przeszukać internet przy użyciu fraz "[pojęcie] MSDN" lub "[pojęcie] MSDN jscript", np. "RegExp MSDN".

## Tabele kompatybilności

JavaScript jest językiem intensywnie rozwijanym, dlatego dość często pojawiają się w nim nowe funkcjonalności.

Jeśli chcesz dowiedzieć się, jak wygląda wsparcie dla nich w poszczególnych silnikach (przeglądarkowych i innych), odwiedź:

- <http://caniuse.com> - tabela kompatybilności dla każdej z funkcji z osobna. Na przykład, jeśli chcesz sprawdzić, które silniki wspierają funkcje kryptograficzne: <http://caniuse.com/#feat=cryptography>.
- <https://kangax.github.io/compat-table> - tabela z wypisanymi funkcjonalnościami języka oraz informacjami, które silniki je wspierają, a które nie.

Wszystkie z powyższych źródeł są przydatne podczas codziennego dewelopmentu, jako że zawierają cenne informacje o szczegółach języka, wsparcia dla nich itp.

Pamiętaj o nich (lub o tej stronie) na wypadek potrzeby zasięgnięcia informacji o konkretnej funkcjonalności.
