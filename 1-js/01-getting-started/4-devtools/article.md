# Konsola programisty

Kod jest podatny na błędy i Ty prawdopodobnie będziesz je popełniać. Co ja mówię... Z *całą pewnością* będziesz 
popełniać błędy. Jesteś przecież człowiekiem, a nie [robotem](https://en.wikipedia.org/wiki/Bender_(Futurama).

Jednak w przeglądarce użytkownicy nie widzą błędów. Jeśli coś pójdzie nie tak, nie będziesz wiedział co się 
popsuło i tym samym nie będziesz mógł tego naprawić.

W przeglądarkach internetowych zostały dołączone "narzędzia developerskie". Zobaczysz tam błędy skryptów i wiele innych przydatnych informacji.

Chrome i Firefox mają najbardziej zaawansowane "DevToolsy" i największa liczba developerów skłania się w kierunku ich rozwoju.
 Inne przeglądarki również mają takie narzędzia, czasem ze specjalnymi funkcjami, ale zazwyczaj próbują nadrobić 
 zaległości w stosunku do Chrome lub Firefoxa. Programiści mają jednak swoją "ulubioną" przeglądarkę i 
 przełączają się na inną dopiero jeśli muszą naprawić błąd specyficzny dla wybranej przeglądarki.

Narzędzia developerskie są bardzo rozbudowane i mają wiele funkcjonalności. Zaczniemy od ich otwarcia, 
zajrzenia do błędów i uruchomienia pierwszych komend w JavaScript.

## Google Chrome

Otwórz stronę [bug.html](bug.html).

Na tej stronie znajduje się błąd w JavaScript. Błąd skryptu jest niewidoczny dla zwykłego odwiedzającego. Otwórzmy zatem narzędzia 
programistyczne, aby móc go zobaczyć.

Naciśnij `key:F12`, chyba, że korzystasz z Maca, wtedy naciśnij `key:Cmd+Opt+J`.

Narzędzia developerskie uruchomią się domyślnie w zakładce Konsola.

Powinno to wyglądać jak na zdjęciu poniżej:

![chrome](chrome.png)

Dokładny widok narzędzi developerskich zależy od wersji Chrome. Narzędzia zmieniają się od czasu do czasu, ale powinny być 
podobne.

- Widzimy treść błędu zapisaną kolorem czerwonym. W tym przypadku skrypt zawiera nieznaną treść z tekstem "lalala".
- Po prawej stronie jest klikalny link do źródła `bug.html:12` z numerem linii w kodzie, w którym błąd wystąpił.

Poniżej treści błędu znajduje się niebieski symbol `>`. Oznacza linię, w której możemy pisać kod JavaScript. Naciśnij `key:Enter` aby ten kod uruchomić (`key:Shift+Enter` dodaje nowy wiersz).

Widzisz już komunikaty błędów i na początek jest to wystarczające. W rozdziale <info:debugging-chrome> wrócimy do narzędzi developerskich i poznamy wtedy więcej tajników debuggowania.


## Firefox, Edge i inne

W przypadku większości przeglądarek naciśnij `key:F12`, aby otworzyć narzędzia developerskie.

Wygląd i ich zachowanie jest bardzo podobne. Jeśli wiesz w jaki sposób obsługiwać narzędzia developerskie na jednej z przeglądarek (możesz zacząć od Chrome), z łatwością odnajdziesz się w innej.

## Safari

Safari (przeglądarka Mac, nie wspierana w Windows/Linux) jest nieco specyficzna. Aby zacząć korzystać z narzędzi developerskich musimy najpierw włączyć "Programowanie".

Otwórz Preferencje i przejdź do zakładki Zaawansowane. Zaznacz na samym dole pole "Pokazuj menu Programowanie na pasku menu", jak na obrazku poniżej:

![safari](safari.png)

Teraz, gdy naciśniesz `key:Cmd+Opt+C` otworzysz konsolę. Warto dodać, że w górnym pasku menu pojawiła się nowa pozycja nazwana "Programowanie". Ma w sobie wiele funkcji i opcji konfiguracyjnych.

## Wpisywanie w wielu wierszach

Zazwyczaj gdy wprowadzamy kod JavaScript w konsoli i naciśniemy klawisz `key:Enter`, to on od razu się wykonuje.

Aby wstawić kod, który ma kilka linii wystarczy, że wciśniesz na końcu klawisz `key:Shift+Enter` i wtedy znajdziesz się w nowym wierszu.

## Podsumowanie

- Narzędzia developerskie pozwalają nam podejrzeć błędy, uruchomić komendy JavaScript, sprawdzać zmienne i wiele, wiele innych.
- DevTools możesz otworzyć klawiszem `key:F12` w większości przeglądarek w systemie Windows. Chrome w komputerach Mac wymaga naciśnięcia `key:Cmd+Opt+J`, natomiast Safari: `key:Cmd+Opt+C` (pamiętaj by w Safari najpierw włączyć "Programowanie").

Mamy już gotowe środowisko. W następnym rozdziale przejdziemy do JavaScriptu. 
