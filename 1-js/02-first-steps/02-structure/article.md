# Struktura kodu

Na początek skupimy się na częściach składowych pisanego przez nas kodu.

## Instrukcje

Instrukcje są zapisem składni i komend, które wykonują określone działania.

Poznaliśmy już instrukcję `alert('Witaj, świecie!')`, która wyświetlała komunikat "Witaj, świecie!".

W naszym kodzie możemy mieć tyle instrukcji, ile chcemy. Każdą z nich można oddzielić średnikiem.

Na przykład, jeśli chcemy dwukrotnie wyświetlić komunikat, kod będzie wyglądał następująco:

```js run no-beautify
alert("Witaj");
alert("świecie");
```

Instrukcje piszemy zazwyczaj w osobnych wierszach. Dzięki temu kod staje się czytelniejszy:

```js run no-beautify
alert("Witaj");
alert("świecie");
```

## Średniki [#semicolon]

Średnik w większości przypadków można pominąć, o ile kod podzieliliśmy na osobne wiersze.

To także zadziała:

```js run no-beautify
alert("Hello");
alert("World");
```

W tym przykładzie JavaScript interpretuje każdy podział linii jako "niejawny" średnik. Mechanizm ten nazywa się [automatycznym wstawianiem średnika](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion).

**W większości przypadków nowa linia jest równoznaczna z postawieniem średnika. Co nie oznacza, że tak jest zawsze!**

Istnieje kilka sytuacji, w których nowa linia nie oznacza, że powinien tam znaleźć się średnik. Na przykład:

```js run no-beautify
alert(3 + 1 + 2);
```

Kod zwróci `6`, ponieważ JavaScript nie wstawi średnika na końcu linii. Wydaje się oczywistym, że jeśli linia kończy się wyrażeniem, na przykład plusem `"+"`, to mamy do czynienia z "niepełnym wyrażeniem" i średnik nie jest wymagany. I w tym przypadku działa to zgodnie z oczekiwaniami.

**Są jednak sytuacje, w których JavaScript błędnie zakłada, gdzie średnik jest rzeczywiście potrzebny.**

Błąd, który się pojawi w takim przypadku, jest trudny do wykrycia i naprawienia.

````smart header="Przykład błędu"
Jeśli ciekawi cię konkretny przykład takiego błędu, uruchom poniższy kod:

```js run
[1, 2].forEach(alert)
```

Nie musisz się zastanawiać, co oznaczają te nawiasy kwadratowe `[]` ani czym jest `forEach`. Będzie o tym później. Na tę chwilę musisz wiedzieć, że rezultatem będzie wyświetlenie najpierw `1`, a później `2`.

Teraz dodaj `alert` przed kodem i *nie* dodawaj średnika na końcu linii:

```js run no-beautify
alert("Tutaj będzie błąd")

[1, 2].forEach(alert)
```

Jeśli uruchomimy powyższy kod, zobaczymy tylko pierwszy `alert`, a następnie otrzymamy komunikat błędu w konsoli!

Wszystko jednak zacznie działać, gdy tylko umieścimy średnik po pierwszej instrukcji:
```js run
alert("Wszystko jest teraz ok");

[1, 2].forEach(alert)
```

Dostaniemy teraz najpierw komunikat z treścią "Wszystko jest teraz ok", a następnie dwa kolejne, o treści `1` i `2`.


Problem z brakiem średnika w tym błędnym wariancie powstał, ponieważ JavaScript nie zakłada średnika przed nawiasem kwadratowym `[...]`.

A skoro średnik nie jest automatycznie wstawiany, interpreter traktuje kod z pierwszego przykładu jako jedną instrukcję. Dla silnika JavaScript wygląda ona następująco:

```js run no-beautify
alert("Tutaj będzie błąd")[1, 2].forEach(alert)
```

To powinny być dwie oddzielne instrukcje, ale nie są. Takie łączenie jest po prostu błędne i może pojawić się również w wielu innych sytuacjach.
````

Zalecamy używanie średników nawet wtedy, gdy instrukcje są oddzielone nową linią. Społeczność programistów przyjęła taką właśnie zasadę. Zanotujmy to jeszcze raz -- _istnieje możliwość_ nie wpisywania średników w większości przypadków. Ale bezpieczniej jest -- szczególnie dla początkujących -- używać ich zawsze.

## Komentarze

<<<<<<< HEAD
Z czasem programy stają się coraz bardziej złożone. Przychodzi wtedy konieczność dodania _komentarzy_, które opisują, co robi kod i dlaczego.
=======
## Comments [#code-comments]
>>>>>>> c89ddc5d92195e08e2c32e30526fdb755fec4622

Komentarze mogą być umieszczane w dowolnym miejscu skryptu. Nie wpływają na wykonanie kodu, ponieważ silnik JavaScript je ignoruje.

**Komentarze jednoliniowe zaczynają się od podwójnego ukośnika (slasha) `//`.**

Reszta linii to komentarz. Może zajmować całą linię od początku lub zostać umieszczony za instrukcją.

Tak jak tutaj:

```js run
// Ten komentarz zaczyna się od początku
alert("Witaj");

alert("świecie"); // Ten komentarz umieszczony jest za instrukcją
```

**Komentarze w kilku liniach zaczynamy od ukośnika i gwiazdki <code>/\*</code>, a kończymy gwiazdką i ukośnikiem <code>\*/</code>.**

Tak jak tutaj:

```js run
/* To jest przykładowy komentarz.
Komentarz zajmuje kilka linii.
*/
alert("Witaj");
alert("świecie");
```

Treść komentarza jest ignorowana, więc możemy w nim umieścić kod <code>/\* ... \*/</code>, który się nie wykona.

Czasami przydaje się to, gdy chcemy tymczasowo wyłączyć pewną część kodu:

```js run
/* Zakomentowana część kodu
alert('Witaj');
*/
alert("świecie");
```

<<<<<<< HEAD
```smart header="Używaj skrótów klawiaturowych!"
W większości edytorów można zamienić jedną linię w komentarz za pomocą klawiszy `key:Ctrl+/` lub kilka linii za pomocą `key:Ctrl+Shift+/` (zaznacz fragment kodu i po prostu wciśnij te klawisze). Jeśli korzystasz z Maca, zamiast `key:Ctrl` użyj `key:Cmd`.
=======
```smart header="Use hotkeys!"
In most editors, a line of code can be commented out by pressing the `key:Ctrl+/` hotkey for a single-line comment and something like `key:Ctrl+Shift+/` -- for multiline comments (select a piece of code and press the hotkey). For Mac, try `key:Cmd` instead of `key:Ctrl` and `key:Option` instead of `key:Shift`.
>>>>>>> c89ddc5d92195e08e2c32e30526fdb755fec4622
```

````warn header="Nie można zagnieżdżać komentarzy!"
Nie można umieszczać jednego komentarza blokowego `/*...*/` wewnątrz innego `/*...*/`.

Taki kod rzuci błędem:

```js run no-beautify
/*
  /* zagnieżdżony komentarz ?!? */
*/
alert( 'świecie' );
```
````

Nie bój się komentować swojego kodu.

Komentarze może i zwiększają objętość kodu, ale tym się nie martw. Istnieje wiele narzędzi, które minifikują kod przed opublikowaniem go w środowisku produkcyjnym poprzez m.in. usunięcie komentarzy. Korzystanie z takich narzędzi nie ma żadnego negatywnego wpływu na działanie skryptów w środowisku produkcyjnym.

Później, w jednym z rozdziałów pt. "<info:code-quality>" poznasz, w jaki sposób pisać wartościowe komentarze.
