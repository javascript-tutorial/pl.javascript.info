# Wprowadzenie do JavaScriptu

Sprawdźmy, czym jest JavaScript, co możemy osiągnąć z jego pomocą i z jakimi innymi technologiami dobrze współpracuje.

## Czym jest JavaScript?

*JavaScript* pierwotnie został stworzony z myślą o *"ożywieniu stron internetowych"*.

Programy napisane w tym języku nazywamy *skryptami*. Możemy je pisać bezpośrednio w kodzie HTML strony i uruchamiać podczas wczytywania strony.

Skrypty są pisane, a później odczytywane, jako zwykły tekst. Nie muszą być jakoś specjalnie przygotowywane czy kompilowane.

Pod tym kątem JavaScript znacząco różni się od innego języka o nazwie [Java](https://pl.wikipedia.org/wiki/Java).

<<<<<<< HEAD
```smart header="Dlaczego akurat <u>Java</u>Script?"
Kiedy JavaScript powstawał, początkowo nosił nazwę "LiveScript". Jednak z powodu dużej popularności Javy w tamtym czasie, stwierdzono, że wykreowanie nowego języka na "młodszego brata" Javy pomoże zyskać na popularności.
=======
```smart header="Why is it called <u>Java</u>Script?"
When JavaScript was created, it initially had another name: "LiveScript". But Java was very popular at that time, so it was decided that positioning a new language as a "younger brother" of Java would help.
>>>>>>> a0bfa924a17cad8e7fee213904b27dbf57c2dbac

Z czasem JavaScript ewoluował na tyle, że stał się niezależnym językiem oraz doczekał własnej specyfikacji zwanej [ECMAScript](https://pl.wikipedia.org/wiki/ECMAScript). Obecnie nie ma już żadnego związku z Javą.
```

W dzisiejszych czasach JavaScript może być uruchamiany nie tylko w przeglądarce, ale również na serwerze lub dowolnym urządzeniu, o ile posiada ono specjalny program zwany [silnikiem JavaScriptu](https://en.wikipedia.org/wiki/JavaScript_engine).

Przeglądarka posiada wbudowany silnik, potocznie nazywany "wirtualną maszyną JavaScriptu".

Poszczególne silniki różnią się "nazwami kodowymi", na przykład:

- [V8](https://pl.wikipedia.org/wiki/V8_(silnik_JavaScript)) -- w Chromie i Operze.
- [SpiderMonkey](https://pl.wikipedia.org/wiki/SpiderMonkey) -- w Firefoksie.
- ... istnieją inne nazwy, jak "Trident" lub "Chakra" dla różnych wersji IE, "ChakraCore" dla Microsoft Edge, "Nitro" i "SquirrelFish" dla Safari itd.

Warto zapamiętać powyższe nazwy, ponieważ często przewijają się w artykułach programistycznych w Internecie. W tym także będą się pojawiać. Będziemy pisać, na przykład, że "funkcjonalność X jest wspierana przez silnik V8", co oznacza, że najprawdopodobniej zadziała w Chromie i Operze.

```smart header="Jak działają silniki?"

Silniki są skomplikowane. Ale ich podstawy są proste.

1. Silnik (wbudowany, jeśli mowa o przeglądarce) odczytuje ("parsuje") kod skryptu.
2. Następnie konwertuje ("kompiluje") skrypt do kodu maszynowego.
3. Na koniec kod maszynowy jest uruchamiany i działa dość szybko.

Silnik stosuje różne optymalizacje na każdym z kroków tego procesu. Co więcej, obserwuje on skompilowany kod podczas działania, analizuje przepływ danych i optymalizuje kod maszynowy, bazując na tej wiedzy. Dzięki temu skrypty działają bardzo szybko.
```

## Co potrafi JavaScript w przeglądarce?

Współczesny JavaScript jest "bezpiecznym" językiem programowania. Nie umożliwia on, na przykład, niskopoziomowego dostępu do pamięci czy procesora, ponieważ został pierwotnie stworzony dla przeglądarek, które tego nie potrzebują.

Możliwości JavaScriptu w dużej mierze zależą od środowiska, w którym jest uruchamiany. Przykładowo, [Node.js](https://pl.wikipedia.org/wiki/Node.js) dostarcza mechanizmy umożliwiające odczyt/zapis plików, wykonywanie zapytań sieciowych itp.

JavaScript zawarty w przeglądarce potrafi wszystko, co jest potrzebne do manipulowania stroną, obsługi interakcji użytkownika czy komunikacji z serwerem.

Przeglądarkowy JavaScript może więc:

- Dodawać HTML do strony, zmieniać istniejącą zawartość, modyfikować style.
- Reagować na akcje użytkownika, obsługiwać kliknięcia myszą, ruch kursorem czy wciśnięcia klawiszy.
- Wysyłać zapytania po sieci do zdalnych serwerów, pobierać lub wysyłać pliku (tak zwane technologie [AJAX](https://pl.wikipedia.org/wiki/AJAX) i [COMET](https://en.wikipedia.org/wiki/Comet_(programming))).
- Odczytywać i zapisywać ciasteczka, zadawać użytkownikowi pytania, wyświetlać wiadomości.
- Zapamiętywać dane po stronie klienta ("pamięć lokalna", ang. *local storage*).

## Czego NIE potrafi Javascript w przeglądarce?

Możliwości przeglądarkowego JavaScriptu są ograniczone ze względu na bezpieczeństwo użytkownika. Celem jest zapobieganie dostępu do prywatnych danych użytkownika przez złośliwe strony.

Przykładami takich restrykcji są:

- JavaScript zawarty na stronie nie może odczytywać/zapisywać plików na dysku twardym, kopiować ich ani uruchamiać programów. Nie ma bezpośredniego dostępu do funkcji systemu operacyjnego.

    Współczesne przeglądarki pozwalają na przetwarzanie plików, jednak dostęp jest ograniczony do sytuacji, w których użytkownik wykona odpowiednie akcje, np. "przeciągnie" plik do okna przeglądarki lub wybierze go poprzez element `<input>`.

    Istnieją również sposoby na interakcję z kamerą/mikrofonem lub podobnymi urządzeniami, jednak wymagają one wyraźnego pozwolenia ze strony użytkownika. Tak więc strona z włączonym JavaScriptem nie włączy cichaczem kamerki internetowej, nie zeskanuje otoczenia i nie wyśle nagrania do [CBŚ](https://pl.wikipedia.org/wiki/Centralne_Biuro_%C5%9Aledcze_Policji).
- Poszczególne zakładki/okna przeglądarki zazwyczaj niczego nie wiedzą o sobie nawzajem. Czasem jednak mają do siebie dostęp, np. jeśli jedno okno otworzy drugie przy pomocy skryptu. Jednak nawet wtedy skrypt z jednej strony nie będzie miał dostępu do innego, jeśli pochodzi on z innej strony (ma inną domenę, protokół czy port).

    Określa się to mianem "Same Origin Policy" (pol. *reguła tego samego pochodzenia*). Aby to obejść, *obydwie strony* muszą zgodzić się na wymianę danych i zawierać specjalny kod JavaScript, który to obsłuży. Dowiemy się o tym więcej w dalszej części tego samouczka.

    Te wszystkie ograniczenia wprowadzono dla dobra użytkowników. Strona pod adresem `http://anysite.com`, na którą wszedł użytkownik, nie może mieć dostępu do innej zakładki z otwartą stroną `http://gmail.com`, z której mogłaby wykraść wrażliwe dane.
- JavaScript może z łatwością komunikować się po sieci z serwerem dostępnym pod tą samą domeną. Jednak możliwość odbierania danych od innych stron/domen jest tu ograniczona. Da się to zrobić, lecz każda ze stron musi jawnie zaakceptować taką komunikację (za pomocą odpowiednich nagłówków HTTP). I to wszystko, ponownie, dla dobra użytkowników.

![](limitations.svg)

Powyższe ograniczenia nie istnieją dla kodu JavaScript uruchamianego poza przeglądarką, na przykład na serwerze. Ponadto, współczesne przeglądarki umożliwiają wtyczkom uzyskiwanie rozszerzonych uprawnień.

## Dlaczego JavaScript jest wyjątkowy?

Istnieją co najmniej *trzy* powody świetności JavaScriptu:

```compare
+ Pełna integracja z HTML-em i CSS-em.
+ Proste rzeczy można zrobić w prosty sposób.
+ Jest wspierany przez większość przeglądarek oraz domyślnie w nich włączony.
```
JavaScript jest jedyną technologią przeglądarkową, która posiada te trzy cechy.

To właśnie sprawia, że jest taki unikatowy. To dzięki temu jest najczęstszym narzędziem używanym do tworzenia interfejsów przeglądarkowych.

Nie można jednak zapominać, że JavaScript doskonale nadaje się do tworzenia serwerów czy aplikacji mobilnych.

## Języki oparte o JavaScript

Składnia JavaScriptu nie spełnia wymagań wszystkich osób. Różni ludzie potrzebują różnych funkcjonalności.

Nie ma w tym nic dziwnego, w końcu projekty i ich wymagania bywają bardzo różne.

Z tego powodu w ostatnim czasie powstały niezliczone ilości nowych języków, które są *transpilowane* (konwertowane) do JavaScriptu przed uruchomieniem.

Współczesne narzędzia pozwalają na szybką i przejrzystą transpilację, umożliwiając deweloperom na pisanie kodu w innym języku i automatycznie go konwertując do JavaScriptu.

Przykłady takich języków:

- [CoffeeScript](http://coffeescript.org/) jest "lukrem składniowym" (ang. *syntactic sugar*) dla JavaScriptu. Wprowadza krótszą składnie, pozwalając na pisanie precyzyjnego i bardziej przejrzystego kodu. Ma zwolenników wśród programistów języka Ruby.
- [TypeScript](http://www.typescriptlang.org/) skupia się na dodaniu "rygorystycznego typowania danych" w celu ułatwienia dewelopmentu i lepszego wsparcia dla skomplikowanych systemów. Jest rozwijany przez Microsoft.
- [Flow](http://flow.org/) również dodaje typy, ale w nieco inny sposób. Rozwijany przez Facebooka.
- [Dart](https://www.dartlang.org/) jest odrębnym językiem, posiadającym własny silnik, który działa poza przeglądarką (np. w aplikacjach mobilnych), ale może być także transpilowany do JavaScriptu. Rozwijany przez Google.

Jest ich więcej. Rzecz jasna, nawet jeśli używamy któregoś z języków transpilowanych, powinniśmy znać JavaScript, aby lepiej rozumieć, co się dzieje w kodzie.

## Podsumowanie

- JavaScript został stworzony jako język tylko dla przeglądarek, jednak obecnie używa się go także w wielu innych środowiskach.
- Uplasował się na dogodnej pozycji jako najszerzej stosowany język przeglądarkowy o pełnej integrowalności z HTML-em i CSS-em.
- Istnieje wiele języków "transpilowanych" do JavaScriptu, które dodają konkretne funkcjonalności. Dobrze jest się z nimi zapoznać po nauce JavaScriptu, choćby pobieżnie.
