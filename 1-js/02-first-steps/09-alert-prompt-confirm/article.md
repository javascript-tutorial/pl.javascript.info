# Interakcje: alert, prompt, confirm

W tej części poradnika przedstawimy język JavaScript w podstawowej formie, bez żadnych ulepszeń dla danego środowiska.

Nadal będziemy używać przeglądarki jako domyślnego środowiska, więc powinniśmy znać przynajmniej kilka funkcji jej interfejsu. W tym rozdziale, zaznajomimy się z funkcjami dostępnymi w przeglądarce: `alert`, `prompt` and `confirm`.

## alert

Zapis:

```js
alert(message);
```

Funkcja `alert` wyświetla zmienną message i wstrzymuje wykonywanie skryptu do czasu, kiedy użytkownik kliknie "OK".

Na przykład:

```js run
alert("Hello");
```

Małe okno z wiadomością nazywamy *modal window*. Słowo "modal" oznacza, że użytkownik nie może wejść w interakcję z pozostałą treścią strony, czy też z innymi przyciskami itd. dopóki nie zakończy interakcji z oknem. W tym przypadku -- do czasu kliknięcia "OK".

## prompt

Funkcja `prompt` przyjmuje 2 argumenty:

```js no-beautify
result = prompt(title, [default]);
```

Funkcja `prompt` wyświetla okno z wiadomością, pole input dla użytkownika oraz przyciski OK/ANULUJ.

`title`
: Tekst, który zostanie wyświetlony użytkownikowi.

`default`
: Opcjonalny drugi parametr, wartość początkowa dla pola input.

Użytkownik może wpisać tekst do pola input i zatwierdzić przyciskiem OK. Anulować można także za pomocą przycisku `key:Esc`.

Wywołanie funkcji `prompt` zwraca text z pola input lub wartość `null` w przypadku, gdy użytkownik anulował akcję.

Na przykład:

```js run
let age = prompt('Ile masz lat?', 100);

alert(`Masz ${age} lat!`); // Masz 100 lat!
```

````warn header="W IE: zawsze dodawaj parametr `default`"
Drugi parametr jest co prawda opcjonalny, lecz w przypadku braku dostarczenia parametru w Internet Explorer, przeglądarka ta doda tekst `"undefined"` do prompt.

Aby się o tym przekonać, uruchom ten kod w Internet Explorer:

```js run
let test = prompt("Test");
```

Dlatego dla poprawnego działania prompt w IE, zalecamy zawsze dodawać drugi argument:

```js run
let test = prompt("Test", ''); // <-- dla IE
```
````

## confirm

Zapis:

```js
result = confirm(question);
```

Funkcja `confirm` wyświetla okno typu modal z `pytaniem` i dwoma przyciskami: OK i ANULUJ.

W przypadku naciśnięcia OK wynikiem jest wartość `true`, w przeciwnym wypadku wartość `false`.

Na przykład:

```js run
let isBoss = confirm("Czy jesteś szefem?");

alert( isBoss ); // true jeżeli zostało kliknięte OK
```

## Podsumowanie

Omówiliśmy 3 funkcje dostępne w przeglądarkach do interakcji z użytkownikami:

`alert`
: wyświetla wiadomość.

`prompt`
: wyświetla wiadomość z polem input dla użytkownika. Zwraca wprowadzony tekst lub wartość `null` w przypadku anulowania poprzez kliknięcie przycisku ANULUJ albo użycie klawisza `key:Esc`.

`confirm`
: wyświetla wiadomość i oczekuje na użytkownika, który może użyć przycisku "OK" lub "ANULUJ". Zwraca `true` dla OK albo `false` "ANULUJ"/`key:Esc`.

Wszystkie metody wyświetlają okna: wstrzymują wykonywanie skryptu i nie pozwalają użytkownikowi na dalszą interakcję ze stroną do czasu odwołania okna.

Istnieją dwa ograniczenia związane z powyższymi metodami:

1. Dokładna lokalizacja okna jest ustalona przez przeglądarkę. Zazwyczaj jest w części centralnej okna przeglądarki.
2. Wygląd okna także zależy od przeglądarki. Nie możemy go zmodyfikować.

Taka jest cena dla tego typu ułatwień. Istnieją inne możliwości dla wyświetlania lepszych, bardziej rozbudowanych interakcji z użytkownikiem. Jeżeli nie zależy nam na "wodotryskach", te metody w zupełności spełniają swoją funkcję.