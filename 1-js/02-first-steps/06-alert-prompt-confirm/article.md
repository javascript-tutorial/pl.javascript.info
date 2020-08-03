# Interakcje: alert, prompt, confirm

<<<<<<< HEAD:1-js/02-first-steps/09-alert-prompt-confirm/article.md
W tej części poradnika przedstawimy język JavaScript w podstawowej formie, bez żadnych ulepszeń dla danego środowiska.

Nadal będziemy używać przeglądarki jako domyślnego środowiska, więc powinniśmy znać przynajmniej kilka funkcji interfejsu przeglądarki. W tym rozdziale, zaznajomimy się z funkcjami dostępnymi w przeglądarce: `alert`, `prompt` and `confirm`.

## alert

Składnia:

```js
alert(message);
```

Funkcja `alert` wyświetla zawartość zmiennej `message` i wstrzymuje wykonywanie skryptu do czasu, kiedy użytkownik kliknie "OK".
=======
As we'll be using the browser as our demo environment, let's see a couple of functions to interact with the user: `alert`, `prompt` and `confirm`.

## alert

This one we've seen already. It shows a message and waits for the user to press "OK".
>>>>>>> cdf382de4cf3ed39ca70cb7df60c4c4886f2d22e:1-js/02-first-steps/06-alert-prompt-confirm/article.md

Na przykład:

```js run
alert("Witaj");
```

<<<<<<< HEAD:1-js/02-first-steps/09-alert-prompt-confirm/article.md
Pojawi się niewielkie okno z wiadomością, które nazywamy *oknem modalnym*. Słowo "modalny" oznacza, że użytkownik nie może wejść w interakcję z pozostałą treścią strony czy też z innymi przyciskami i tak dalej, dopóki nie zakończy interakcji z oknem. W tym przypadku -- do czasu kliknięcia *OK*.
=======
The mini-window with the message is called a *modal window*. The word "modal" means that the visitor can't interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case -- until they press "OK".
>>>>>>> cdf382de4cf3ed39ca70cb7df60c4c4886f2d22e:1-js/02-first-steps/06-alert-prompt-confirm/article.md

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

<<<<<<< HEAD:1-js/02-first-steps/09-alert-prompt-confirm/article.md
Użytkownik może wpisać tekst do pola tekstowego i zatwierdzić przyciskiem *OK*. Może także anulować operację, klikając przycisk *Anuluj* lub wciskając klawisz `key:Esc`.
=======
```smart header="The square brackets in syntax `[...]`"
The square brackets around `default` in the syntax above denote that the parameter as optional, not required.
```

The visitor can type something in the prompt input field and press OK. Then we get that text in the `result`. Or they can cancel the input by pressing Cancel or hitting the `key:Esc` key, then we get `null` as the `result`.
>>>>>>> cdf382de4cf3ed39ca70cb7df60c4c4886f2d22e:1-js/02-first-steps/06-alert-prompt-confirm/article.md

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