# Konsola deweloperska

Kod jest podatny na błędy i ty prawdopodobnie będziesz je popełniać. Co ja mówię... Z *całą pewnością* będziesz popełniać błędy. Jesteś przecież człowiekiem, a nie [robotem](https://en.wikipedia.org/wiki/Bender_(Futurama).

Jednak w przeglądarce użytkownicy domyślnie nie widzą błędów. Jeśli coś pójdzie nie tak, nie dowiesz się, co się popsuło i tym samym nie będziesz w stanie tego naprawić.

Do przeglądarek internetowych dołączane są tzw. "narzędzia deweloperskie", w których możesz zobaczyć błędy skryptów i wiele innych przydatnych informacji.

Większość programistów skłania się ku przeglądarkom Chrome i Firefox, ponieważ mają najbardziej zaawansowane narzędzia. Inne przeglądarki również je mają, czasem ze specjalnymi funkcjami, ale zazwyczaj jedynie próbują nadrobić zaległości w stosunku do Chrome'a lub Firefoksa. Programiści zwykle jednak mają swoją "ulubioną" przeglądarkę i przełączają się na inną dopiero, gdy muszą naprawić błąd specyficzny dla tej przeglądarki.

Narzędzia deweloperskie są bardzo rozbudowane i mają wiele funkcjonalności. Zaczniemy od ich otwarcia, zajrzenia do błędów i uruchomienia pierwszych komend javascriptowych.

## Google Chrome

Otwórz stronę [bug.html](bug.html).

W kod JavaScript tej strony wkradł się błąd. Błąd skryptu jest niewidoczny dla zwykłego odwiedzającego. Otwórzmy zatem narzędzia programistyczne, aby móc go zobaczyć.

Naciśnij `key:F12`, chyba że korzystasz z Maca - wtedy naciśnij `key:Cmd+Opt+I`.

Narzędzia deweloperskie uruchomią się domyślnie z aktywną zakładką "Konsola".

Powinno to wyglądać jak na zdjęciu poniżej:

![chrome](chrome.png)

Dokładny widok narzędzi deweloperskich zależy od wersji Chrome'a. Narzędzia zmieniają się od czasu do czasu, ale ogólnie rzecz biorąc powinny być podobne.

- Widzimy treść błędu zapisaną kolorem czerwonym. W tym przypadku skrypt zawiera nieznaną komendę "lalala".
- Po prawej stronie jest klikalny link do źródła `bug.html:12`, z numerem linii kodu, w której błąd wystąpił.

Poniżej treści błędu znajduje się niebieski symbol `>`. Oznacza linię, w której możemy pisać kod JavaScript. Naciśnij `key:Enter`, aby ten kod uruchomić.

Widzisz już komunikaty błędów i na początek powinno to wystarczyć. W rozdziale pt. "<info:debugging-chrome>" wrócimy do narzędzi deweloperskich, by poznać więcej tajników debuggowania.

```smart header="Multi-line input"
Usually, when we put a line of code into the console, and then press `key:Enter`, it executes.

To insert multiple lines, press `key:Shift+Enter`. This way one can enter long fragments of JavaScript code.
```

## Firefox, Edge i inne

W przypadku większości przeglądarek klawisz `key:F12` otwiera narzędzia deweloperskie.

Z wyglądu i zachowania są do siebie dość podobne. Jeśli wiesz, w jaki sposób obsługiwać narzędzia deweloperskie w jednej z przeglądarek (możesz zacząć od Chrome), z łatwością odnajdziesz się w innych.

## Safari

Safari (przeglądarka na Macach, nie wspierana w systemach Windows/Linux) jest nieco specyficzna. Aby zacząć korzystać z narzędzi deweloperskich, musimy najpierw włączyć "Programowanie".

Otwórz Preferencje i przejdź do zakładki "Zaawansowane". Zaznacz na samym dole pole "Pokazuj menu Programowanie na pasku menu", jak na obrazku poniżej:

![safari](safari.png)

Teraz, gdy naciśniesz `key:Cmd+Opt+C`, otworzysz konsolę. Warto dodać, że w górnym pasku menu pojawiła się nowa pozycja o nazwie "Programowanie". Ma w sobie wiele funkcji i opcji konfiguracyjnych.

## Podsumowanie

- Narzędzia deweloperskie pozwalają podejrzeć błędy, uruchomić komendy javascriptowe, sprawdzać zmienne i wiele, wiele innych.
- W większości przeglądarek dla systemu Windows można je włączyć za pomocą klawisza `key:F12`. Chrome dla Maca wymaga naciśnięcia `key:Cmd+Opt+I`, natomiast Safari: `key:Cmd+Opt+C` (pamiętaj, by w Safari najpierw włączyć "Programowanie").

Mamy już gotowe środowisko. W następnym rozdziale przejdziemy wreszcie do pisania kodu JavaScript. 