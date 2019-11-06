# Interakcje: alert, prompt, confirm

W tej części poradnika przedstawimy język JavaScript w podstawowej formie, bez żadnych ulepszeń dla danego środowiska.

Nadal będziemy używać przeglądarki jako domyślnego środowiska, więc powinniśmy znać przynajmniej kilka funkcji interfejsu przeglądarki. W tym rozdziale, zaznajomimy się z funkcjami dostępnymi w przeglądarce: `alert`, `prompt` and `confirm`.

## alert

Składnia:

```js
alert(message);
```

Funkcja `alert` wyświetla zawartość zmiennej `message` i wstrzymuje wykonywanie skryptu do czasu, kiedy użytkownik kliknie "OK".

Na przykład:

```js run
alert("Witaj");
```

Pojawi się niewielkie okno z wiadomością, które nazywamy *oknem modalnym*. Słowo "modalny" oznacza, że użytkownik nie może wejść w interakcję z pozostałą treścią strony czy też z innymi przyciskami i tak dalej, dopóki nie zakończy interakcji z oknem. W tym przypadku -- do czasu kliknięcia *OK*.

## prompt

Funkcja `prompt` przyjmuje dwa argumenty:

```js no-beautify
result = prompt(title, [default]);
```

Funkcja `prompt` wyświetla okno z wiadomością, pole tekstowe do uzupełnienia przez użytkownika oraz przyciski *OK/Anuluj*.

`title`
: Tekst, który zostanie wyświetlony użytkownikowi.

`default`
: Opcjonalny drugi parametr, wartość początkowa dla pola tekstowego.

Użytkownik może wpisać tekst do pola tekstowego i zatwierdzić przyciskiem *OK*. Może także anulować operację, klikając przycisk *Anuluj* lub wciskając klawisz `key:Esc`.

Wywołanie funkcji `prompt` zwraca tekst wpisany do pola tekstowego lub wartość `null`, w przypadku gdy użytkownik anulował akcję.

Na przykład:

```js run
let age = prompt('Ile masz lat?', 100);

alert(`Masz ${age} lat!`); // Masz 100 lat!
```

````warn header="W IE: zawsze dodawaj parametr `default`"
Drugi parametr jest, co prawda, opcjonalny, lecz w przypadku braku dostarczenia go w przeglądarce Internet Explorer, do pola tekstowego zostanie wstawiony napis `"undefined"`.

Aby się o tym przekonać, uruchom poniższy kod w Internet Explorerze:

```js run
let test = prompt("Test");
```

Dlatego do poprawnego działania funkcji `prompt` w IE radzimy zawsze dodawać drugi argument:

```js run
let test = prompt("Test", ''); // <-- dla IE
```
````

## confirm

Składnia:

```js
result = confirm(question);
```

Funkcja `confirm` wyświetla okno modalne z pytaniem zawartym w `question` i dwoma przyciskami: *OK* i *Anuluj*.

Po naciśnięciu *OK* otrzymujemy wartość `true`, w przeciwnym wypadku `false`.

Na przykład:

```js run
let isBoss = confirm("Czy jesteś szefem?");

alert( isBoss ); // true, jeżeli kliknięto na "OK"
```

## Podsumowanie

Omówiliśmy 3 funkcje dostępne w przeglądarkach, służące do interakcji z użytkownikami:

`alert`
: wyświetla wiadomość.

`prompt`
: wyświetla wiadomość z polem tekstowym. Zwraca wprowadzony przez użytkownika tekst lub wartość `null` w przypadku anulowania poprzez kliknięcie przycisku *Anuluj* albo użycie klawisza `key:Esc`.

`confirm`
: wyświetla wiadomość i oczekuje na użytkownika, który może użyć przycisku *OK* lub *Anuluj*. Zwraca `true` dla *OK* albo `false` *Anuluj*/`key:Esc`.

Wszystkie metody wyświetlają okna: wstrzymują wykonywanie skryptu i nie pozwalają użytkownikowi na dalszą interakcję ze stroną do czasu zamknięcia okna.

Istnieją dwa ograniczenia związane z powyższymi metodami:

1. Dokładna lokalizacja okna jest ustalana przez przeglądarkę. Zazwyczaj pojawia się pośrodku okna przeglądarki.
2. Wygląd okna także zależy od przeglądarki. Nie możemy go zmodyfikować.

Taka jest cena dla tego typu ułatwień. Istnieją inne możliwości na wyświetlanie lepszych okien i rozszerzenie interakcji z użytkownikiem, lecz jeżeli nie zależy nam na "wodotryskach", te metody w zupełności wystarczą.