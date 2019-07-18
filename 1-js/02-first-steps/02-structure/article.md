# Struktura kodu

Składnia w JavaScript pierwszą rzeczą jaką się nauczymy. 

## Instrukcje

Instrukcje są zapisem składni i komend, które wykonują określone działania. 

Poznaliśmy zapis `alert('Hello, world!')`, który wyświetlał wiadomość "Hello, world!".

W naszym kodzie możemy mieć tak dużo instrukcji ile tylko zechcemy. Każda instrukcja jest oddzielona od innej średnikiem.

Na przykład, jeśli chcemy dwukrotnie wyświetlić alert, kod będzie wyglądał następująco:

```js run no-beautify
alert('Hello'); alert('World');
```

Instrukcje piszemy zazwyczaj w osobnych wierszach. Dzięki temu kod staje się czytelniejszy:

```js run no-beautify
alert('Hello');
alert('World');
```

## Średnik [#semicolon]

Średnik w większości przypadków może zostać pominięty jeśli istnieje podział na wiersze. 

To będzie działać:

```js run no-beautify
alert('Hello')
alert('World')
```

W tym przykładzie JavaScript interpretuje każdą linię z osobna i wstawia niejawny średnik. Nazywa się to [automatycznym wstawieniem średnika](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion).

**W większości przypadków nowa linia sugeruje miejsce dla średnika. Ale, w większości przypadku nie oznacza "zawsze"!**

Jest kilka sytuacji, w których nowa linia nie oznacza, że powinien tam znaleźć się średnik. Na przykład:

```js run no-beautify
alert(3 +
1
+ 2);
```

Kod zwróci `6` ponieważ JavaScript nie wstawi średnika na końcu linii. Jest intuicyjne i oczywiste, że jeśli koniec linii kończy się wyrażeniem np. plusem `"+"`, wtedy jest to "wyrażenie niepełne" i średnik nie jest wymagany. I w tym przypadku działa to zgodnie z oczekiwaniem.

**Ale są sytuacje, w których JavaScript błędnie zakłada gdzie średnik jest rzeczywiście potrzebny.**

Błąd, który się pojawi w takim przypadku jest trudny do wykrycia i naprawienia.

````smart header="An example of an error"
Jeśli jesteś ciekawy konkretnego przypadku, sprawdź ten kod::

```js run
[1, 2].forEach(alert)
```

Nie musisz teraz myśleć co oznaczają te nawiasy kwadratowe `[]` ani czym jest `forEach`. Poznamy to później. Teraz zapamiętaj, że rezultatem będzie wyświetlenie najpierw `1`, a później `2`.

Teraz dodaj `alert` przed kodem i *nie* dodawaj na końcu średnika:

```js run no-beautify
alert("Tutaj będzie błąd")

[1, 2].forEach(alert)
```

Jeśli uruchomimy kod tylko pierwszy `alert` się pojawi, a następnie dostaniemy komunikat błędu w konsoli!

Ale wszystko będzie w porządku jeśli umieścimy średnik po pierwszej instrukcji:
```js run
alert("Wszystko jest teraz ok");

[1, 2].forEach(alert)  
```

Dostaniemy teraz najpierw alert z treścią "Wszystko jest teraz ok", a następnie kolejne, o treści `1` i `2`.


Problem z brakiem średnika w tym błędnym wariancie powstał ponieważ JavaScript nie zakłada średnika przed nawiasem kwadratowym `[...]`.

Więc, skoro średnik nie jest automatycznie wstawiony, interpreter traktuje kod z pierwszego przykładu jako jedną instrukcję. Dla silnika JavaScript wygląda ona następująco: :

```js run no-beautify
alert("Tutaj będzie błąd")[1, 2].forEach(alert)
```

To powinny być dwie oddzielne instrukcje, ale nie są. Takie łączenie jest po prostu błędne i może pojawić się również w wielu innych sytuacjach.
````

Zalecamy używanie średników nawet wtedy, gdy instrukcje są oddzielone nową linią. Społeczność programistów przyjęła taką właśnie zasadę. Zanotujmy to jeszcze raz -- *istnieje możliwość* nie wpisywania średników w większości przypadków. Ale bezpieczniej jest -- szczególnie dla początkujących -- po prostu ich używać.

## Komentarze

Z czasem programy stają się coraz bardziej złożone. Przychodzi wtedy konieczność dodawania *komentarzy*, które opisują co robi kod i dlaczego.

Komentarze mogą być umieszczone w dowolnym miejscu skryptu. Nie wpływają na wykonanie się kodu, ponieważ silnik JavaScript je ignoruje.

**Komentarze jednoliniowe zaczynają się od podwójnego slasha `//`.**

Reszta linii to komentarz. Może zajmować całą linię od początku lub być umieszczony za instrukcją.

Tak jak tutaj:
```js run
// Ten komentarz zaczyna się od początku
alert('Hello');

alert('World'); // Ten komentarz umieszczony jest za instrukcją
```

**Komentarze w kilku liniach zaczynamy od slasha i gwiazki <code>/&#42;</code> i kończymy gwiazdką i slashem <code>&#42;/</code>.**

Tak jak tutaj:
```js run
/* To jest przykładowy komentarz.
Komentarz znajduje się w dwóch wierszach.
*/
alert('Hello');
alert('World');
```

Treść komentarza jest ignorowana, więc możemy w nim umieścić kod <code>/&#42; ... &#42;/</code>, który się nie wykona.

Czasami jest to pomocne, aby tymczasowo wyłączyć pewną część kodu:

```js run
/* Zakomentowana część kodu
alert('Hello');
*/
alert('World');
```

```smart header="Używaj skrótów klawiaturowych!"
W większości edytorów możesz wstawić komentarz w linii wciskając klawisze `key:Ctrl+/` lub komentarz w wielu liniach wciskając klawisze `key:Ctrl+Shift+/` -- (wybierz kawałek kodu i po prostu wciśnij klawisze). W Macu, spróbuj `key:Cmd` zamiast `key:Ctrl`.
```

````warn header="Zagnieżdżone komentarze nie są wspierane!"
Nie może być `/*...*/` w środku innego `/*...*/`.

Taki kod "wypluje" błąd:

```js run no-beautify
/*
  /* zagnieżdżony komentarz ?!? */
*/
alert( 'World' );
```
````

Proszę, nie wahaj się komentować swojego kodu.

Komentarze zwiększają objętość kodu. Ale tym się nie mart - nie jest problem. Istnieje wiele narzędzi, które minifikują kod przed opublikowaniem go na środowisku produkcyjnym. Te narzędzia usuwają komentarze, które przy wdrożeniu nie są widoczne. Korzystanie z takich narzędzi nie ma żadnego negatywnego wpływu na działanie skryptów na środowisku produkcyjnym.

Później, w jednym z rozdziałów <info:code-quality> poznasz w jaki sposób pisać wartościowe komentarze.