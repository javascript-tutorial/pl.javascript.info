# Kod ninja


```quote author="Konfucjusz"
Bezużyteczną rzeczą jest uczyć się, lecz nie myśleć, a niebezpieczną myśleć, lecz nie uczyć się niczego.
```

Programiści ninja z przeszłości używali poniższych trików, by zmusić do myślenia umysły deweloperów.

Guru "code review" szukają ich do zadań testowych.

Początkujący programiści czasem używają ich lepiej niż ninja koderzy.

Przeczytaj je uważnie i dowiedz się, kim jesteś: programistą ninja, nowicjuszem czy guru *code review*?


```warn header="Uwaga, ironia!"
Wielu próbuje podążać ścieżkami ninja. Niewielu się to jednak udaje.
```


## Dobry dowcip to zwięzły dowcip

Spraw, aby kod był najkrótszy jak się da. Pokaż, na co cię stać.

Pozwól się ponieść fantazji i korzystaj z osobliwości języka, w którym piszesz.

Spójrz na ten operator warunkowy `'?'`:

```js
// wzięte żywcem ze znanej biblioteki javascriptowej
i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
```

Fajne, co? Jeśli napiszesz kod w ten sposób, inny programista, natknąwszy się na tę linię, spędzi miło czas zastanawiając się nad wartością zmiennej `i`. A później przyjdzie do ciebie po pomoc.

Powiedz mu, że krótszy znaczy lepszy. Wprowadź go na ścieżkę ninja.

## Jednoliterowe nazwy zmiennych

```quote author="Laozi (Tao Te Ching)"
Tao kryje się w milczeniu. Tylko Tao dobrze się zaczyna i dobrze kończy.
```

<<<<<<< HEAD
Kolejnym sposobem na szybsze programowanie jest używanie wszędzie jednoliterowych nazw zmiennych. Takich jak `a`, `b` czy `c`.
=======
Another way to code shorter is to use single-letter variable names everywhere. Like `a`, `b` or `c`.
>>>>>>> b85413d0bdd6f4f468fcadeacb4c4056e3671ce1

Zmienna o krótkiej nazwie znika w kodzie jak prawdziwy ninja w dżungli. Nikt nie będzie w stanie znaleźć jej przy pomocy wyszukiwarki edytora. A nawet jeśli komuś się to uda, nie będzie w stanie domyślić się, co oznacza `a` czy `b`.

... Jest jednak pewien wyjątek. Prawdziwy ninja nigdy nie użyje `i` jako licznika pętli `"for"`. Wszędzie tylko nie tam! Rozejrzyj się, jest wiele dużo bardziej egzotycznych liter. Na przykład `x` lub `y`.

Taka egzotyczna nazwa licznika pętli jest tym bardziej fajowa, gdy sama pętla zajmuje 1-2 strony (albo i więcej, jeśli dasz radę). Wtedy taki delikwent dogłębnie analizujący pętlę nie będzie w stanie w prosty sposób domyślić się, że `x` to tak naprawdę nic innego jak licznik pętli.

## Używaj skrótów

Jeśli zasady twojego zespołu zabraniają używania jednoliterowych lub niejasnych nazw zmiennych, zapisz je w formie skrótu.

O tak:

- `list` -> `lst`.
- `userAgent` -> `ua`.
- `browser` -> `brsr`.
- ...itd.

Tylko osoba o naprawdę dobrej intuicji będzie w stanie je zrozumieć. Próbuj skracać nazwy na każdym kroku. Tylko prawdziwie godny programista będzie w stanie utrzymać twój kod.

## Mierz wysoko. Używaj abstrakcji.

```quote author="Laozi (Tao Te Ching)"
Wielki kwadrat kątów nie dzierży,<br>
Wielkie naczynie ostatnie pustoszy,<br>
Wielka nuta to dźwięk wyjątkowy,<br>
Wielki obraz bezkształtnym jest.
```

Gdy wybierasz nazwę, spróbuj użyć najbardziej abstrakcyjnego słowa. Na przykład `obj`, `data`, `value`, `item`, `elem` i tak dalej.

- **Idealną nazwą dla zmiennej jest `data`.** Używaj jej gdzie tylko się da. Bo w końcu każda zmienna przechowuje jakieś *dane*, prawda?

    ... Co jednak jeśli nazwa `data` jest już zajęta? Spróbuj `value`, też jest uniwersalna. Koniec końców, do każdej zmiennej kiedyś przypisujemy jakąś *wartość*.

- **Zawieraj w nazwie typ zmiennej: `str`, `num`...**

    Spróbuj. Młody adept może pomyśleć: "czy takie nazwy naprawdę są pomocne dla ninja?". No jasne!

    Pewnie, taka nazwa ma jakieś znaczenie. Mówi przecież, co znajduje się wewnątrz zmiennej: ciąg znaków, numer czy cokolwiek innego. Ale gdy tylko ktoś z zewnątrz spróbuje zrozumieć twój kod, okaże się, że dla niego nie niesie ona ze sobą żadnej informacji! W konsekwencji nie będzie w stanie zmienić twojego dokładnie przemyślanego kodu.

    Typ zmiennej łatwo wydedukować podczas debuggowania. Chodzi raczej o to, co reprezentuje ta zmienna? Jaki ciąg znaków/liczba jest w niej zapisana?

    Nie da się tego odgadnąć bez porządnej medytacji!

- **... Ale co jeśli zabrakło już nazw do wyboru?** Zwyczajnie dodaj kolejny numer: `data1, item2, elem5`...

## Test uwagi

Tylko naprawdę uważny programista będzie w stanie zrozumieć twój kod. Ale jak mieć pewność, że tak będzie?

**Jednym ze sposobów jest używanie podobnych do siebie nazw zmiennych, np. `date` i `data`.**

Mieszaj je ze sobą, ile wlezie.

Nie ma opcji, żeby ktoś był w stanie na szybko przejrzeć taki kod. A gdy jeszcze trafi się gdzieś literówka... Hmmm... Trochę to potrwa -- lepiej zrobić sobie herbatki.


## Sprytne synonimy

```quote author="Konfucjusz"
Ciężko jest znaleźć czarnego kota w ciemnym pokoju, szczególnie jeżeli go tam nie ma.
```

Używanie *podobnych* nazw do *tych samych* rzeczy ubarwia nieco życie i pokazuje publice twoją kreatywność.

Weźmy na przykład prefiksy nazw funkcji. Jeśli zadaniem funkcji jest wyświetlenie wiadomości na ekranie, zacznij ją od słowa `display...`, np. `displayMessage`. A gdy inna funkcja również posłuży do wyświetlenia czegoś na ekranie, użyj prefiksu `show...`, np. `showName`.

Zasugeruj, że istnieje jakaś subtelna różnica pomiędzy tymi funkcjami, mimo że tak naprawdę jej nie ma.

Zawrzyj umowę z kolegami-ninjami z drużyny: jeśli Janek zaczyna swoje "wyświetlające" funkcje od `display...`, niech Piotrek używa prefiksu `render...`, a Ania -- `paint...`. Zauważ, jak korzystnie wpływa to na różnorodność i ciekawość kodu.

... A teraz coś dla koneserów!

Dwóm funkcjom, znacząco różniącym się od siebie, nadaj ten sam prefiks!

Przykładowo, funkcja `printPage(page)` skorzysta z drukarki. Natomiast funkcja `printText(text)` wyświetli tekst na ekranie. Niech niezaznajomiony czytelnik kodu zastanawia się przy podobnie nazwanej funkcji `printMessage`: "Gdzie trafi ta wiadomość? Do drukarki czy na ekran?". Dla jeszcze lepszego efektu, niech `printMessage(message)` wyświetla tekst w nowym oknie!

## Używaj nazw wielokrotnie

```quote author="Laozi (Tao Te Ching)"
Kiedy całość zostaje podzielona, poszczególne części<br>
potrzebują nazw.<br>
Jest już wystarczająco wiele nazw.<br>
Trzeba wiedzieć, kiedy przestać.
```

Dodawaj nową zmienną tylko wtedy, kiedy jest to absolutnie konieczne.

Zamiast tego, z reguły używaj zmiennych wielokrotnie. Po prostu przypisuj im nowe wartości.

W funkcjach staraj się używać wyłącznie zmiennych przekazanych jako argumenty.

Dzięki temu będzie naprawdę trudno stwierdzić, jaką wartość ma zmienna w *danej chwili*. Jak również skąd się wzięła. Chodzi przecież o to, aby ćwiczyć intuicję i pamięć osoby czytającej kod. Osoba o kiepskiej intuicji z pewnością musiałaby analizować kod linijka po linijce i śledzić przepływ w każdym rozgałęzieniu.

**Wersja dla zaawansowanych polega na tym, aby potajemnie (!) podmieniać wartość na podobną gdzieś pośrodku pętli lub funkcji.**

Na przykład:

```js
function ninjaFunction(elem) {
  // 20 linii kodu operujących na zmiennej elem

  elem = clone(elem);

  // kolejne 20 linii, tym razem używających kopii tej zmiennej!
}
```

Kolega programista, który chciałby użyć zmiennej `elem` w drugiej części funkcji, będzie mocno zaskoczony... Tylko dzięki debuggerowi i wnikliwej analizie kodu będzie w stanie wywnioskować, że pracuje na klonie!

Ten wzorzec przewija się w kodzie dość często. Jest śmiertelnie skuteczny nawet przeciwko doświadczonemu ninja.

## Podkreślniki dla zabawy

Umieszczaj podkreślniki `_` i `__` przed nazwami zmiennych. Na przykład `_name` lub `__value`. Byłoby super, gdyby nikt inny nie wiedział, po co tam są. Albo w ogóle: dodaj je tak po prostu, dla zabawy. Albo niech mają różne znaczenie w zależności od kontekstu.

Upieczesz dwie pieczenie na jednym ogniu. Po pierwsze, kod stanie się dłuższy i mniej czytelny. Po drugie, kolega z zespołu spędzi dużo więcej czasu na rozmyślaniu, co oznaczają te podkreślniki.

Przebiegły ninja wstawia podkreślniki w jednym miejscu, a unika ich w innym. Dzięki temu kod staje się bardziej niestabilny i podatny na przyszłe błędy.

## Wyzwól swoje emocje

Pokaż wszystkim, jak wspaniałe są twoje zmienne! Nazwy, takie jak `superElement`, `megaFrame` czy `niceItem`, z pewnością oświecą czytelnika.

Z jednej strony, fajnie, że coś się nazywa: `super...`, `mega...`, `nice...`. Z drugiej strony -- nie niesie to ze sobą żadnych dodatkowych informacji. Czytelnik może w takiej sytuacji spróbować znaleźć ukryty sens i pomedytować przez jedną lub dwie godziny płatnego czasu w pracy.


## Nadpisuj zewnętrzne zmienne

```quote author="Guan Yin Zi"
Będąc w świetle, w ciemności nie widzisz niczego.<br>
Będąc w ciemności, wszystko w świetle dojrzysz.
```

Używaj tych samych nazw zmiennych wewnątrz i na zewnątrz funkcji. To takie proste. Nie trzeba się wysilać i wymyślać nowych nazw.

```js
let *!*user*/!* = authenticateUser();

function render() {
  let *!*user*/!* = anotherValue();
  ...
  ...kilka linii później...
  ...
  ... // <-- programista może zechcieć użyć tu zmiennej `user` i...
  ...
}
```

Programista wskakujący wprost do funkcji `render` prawdopodobnie nie zauważy, że do gry wkroczyła lokalna zmienna o nazwie `user`, która przysłania tę zewnętrzną.

Później spróbuje wykonać jakąś operację na zmiennej `user`, myśląc, że użyje zmiennej zewnętrznej, będącej wynikiem działania funkcji `authenticateUser`... Mamy cię! Witaj, debuggerze, stary przyjacielu...


## Efekty uboczne są wszędzie!

Istnieją takie funkcje, które nie zmieniają niczego. Na przykład `isReady()`, `checkPermission()`, `findTags()`... Spodziewamy się po nich, że wykonują jakieś obliczenia, wyszukują i zwracają jakieś dane, jednak bez zmieniania czegokolwiek na zewnątrz. Innymi słowy, nie mają "efektów ubocznych".

**Naprawdę przepiękną sztuczką jest dodanie do nich "przydatnej" akcji, wykonywanej oprócz głównej logiki.**

Mina oszołomionego kolegi, kiedy dowiaduje się, że funkcja `is...`, `check...` lub `find...` coś zmienia -- bezcenne.

**Innym sposobem na zaskoczenie innych jest zwracanie nietypowych wyników.**

Pokaż swoją oryginalność! Niech funkcja `checkPermission`, zamiast zwykłego `true/false`, zwraca złożony obiekt zawierający wyniki sprawdzenia.

Ci, którzy spróbują napisać `if (checkPermission(...))`, zaczną się zastanawiać, dlaczego kod nie działa. Odpowiedz im: "Przeczytajcie dokumentację!". Nie zapomnij też odesłać ich do tego artykułu.


## Potężne funkcje!

```quote author="Laozi (Tao Te Ching)"
Wielkie Tao płynie wszędzie,<br>
i na lewo, i na prawo.
```

Nie ograniczaj funkcji do tego, co zawiera się w jej nazwie. Myśl nieszablonowo.

Przykładowo, funkcja `validateEmail(email)` mogłaby (oczywiście oprócz sprawdzenia poprawności maila) wyświetlać błąd i prosić użytkownika o ponowne podanie adresu e-mail.

Po przeczytaniu nazwy funkcji nie powinno być jasne, co ona robi. Prawdziwy ninja koder upewni się też, że niejasne stanie się także miejsce jej użycia.

**Łączenie kilku akcji w jedną chroni kod przed ponownym użyciem.**

Wyobraź sobie, że inny programista chce tylko sprawdzić poprawność adresu e-mail i nie wyświetlać żadnego komunikatu błędu. Twoja funkcja `validateEmail(email)`, która robi obie rzeczy naraz, nie przyda mu się. Dzięki temu nie będzie próbował przerwać ci medytacji dopytywaniem się o nią.

## Podsumowanie

Wszystkie "porady" wymienione powyżej zostały zaczerpnięte z prawdziwego kodu... Niejednokrotnie pisanego przez doświadczonych programistów. Możliwe, że nawet bardziej doświadczonych niż ty ;)

- Stosuj się do niektórych z nich, a twój kod będzie pełen niespodzianek.
- Stosuj się do większości z nich, a twój kod stanie się twój na wyłączność, bo nikt nie będzie chciał go zmieniać.
- Stosuj się do wszystkich, a twój kod stanie się ważną lekcją dla młodych programistów szukających oświecenia.
