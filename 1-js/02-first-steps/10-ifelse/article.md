# Operatory warunkowe: if, '?'

Czasami potrzebujemy wykonać różne akcje w zależności od warunków.

Aby to zrobić możemy użyć polecenia `if` albo operatora warunkowego `?` (ang. *conditional (ternary) operator* / *question mark operator*).

## Polecenie "if"

Polecenie `if(...)` sprawdza warunek w nawiasach, a następnie jeżeli warunek jest prawdziwy wykonuje instrukcje zawarte w bloku kodu.

Na przykład:

```js run
let year = prompt('W którym roku specyfikacja ECMAScript-2015 została opublikowana?', '');

*!*
if (year == 2015) alert( 'Masz rację!' );
*/!*
```

W powyższym przykładzie warunkiem jest proste sprawdzenie (`year == 2015`), ale warunki mogą być dużo bardziej skomplikowane.

Jeżeli chcemy wykonać więcej niż jedno polecenie, musimy umieścić masz blok kodu w nawiasach klamrowych:

```js
if (year == 2015) {
  alert( "Poprawnie!" );
  alert( "Jesteś taki mądry!" );
}
```

Zalecamy umieszczenie bloku kodu w nawiasach klamrowych `{}` za każdym razem gdy używasz polecenia `if`, nawet gdy do wykonania masz tylko jedno polecenie ponieważ znacznie poprawi to czytelność twojego kodu. 

## Konwersja logiczna

Polecenie `if(...)` sprawdza wyrażenie w nawiasach, a następnie konwertuje wynik na typ logiczny

Przypomnijmy sobie zasady konwersji z rozdziału <info:type-conversions>:

- Liczba `0`, pusty ciąg znaków `""`, `null`, `undefined`, oraz `Nan` są konwertowane na `false`. Dlatego właśnie nazywane są wartościami "falsy".
- Inne wartości są konwertowane na `true` i nazywane są "truthy".

Tak więc kod poniżej tego warunku nigdy się nie wykona:

```js
if (0) { // 0 jest falsy
  ...
}
```

...i wewnątrz tego warunku - zawsze sie wykona:

```js
if (1) { // 1 jest truthy
  ...
}
```

możemy także przekazać wcześniej sprawdzoną wartość logiczną w taki sposób:

```js
let cond = (year == 2015); // równanie przekształca się w prawdę lub fałsz

if (cond) {
  ...
}
```

## Klauzula "else"

Wyrażenie `if` może opcjonalnie zawierać blok "else", który wykona się w przypadku gdy sprawdzany warunek jest fałszywy  (ang. *falsy*).

Na przykład:
```js run
let year = prompt('W którym roku została opublikowana specyfikacja ECMAScript-2015?', '');

if (year == 2015) {
  alert( 'Poprawnie zgadłeś!' );
} else {
  alert( 'Jak mogłeś się tak pomylić?' ); // każda wartość oprócz 2015
}
```

## Kilka warunków: "else if"

Czasami chcielibyśmy sprawdzić kilka wariantów warunku. Pozwala nam na to klauzula `else if`.

Na przykład:

```js run
let year = prompt('W którym roku została opublikowana specyfikacja ECMAScript-2015?', '');

if (year < 2015) {
  alert( 'Za wcześnie...' );
} else if (year > 2015) {
  alert( 'Za późno' );
} else {
  alert( 'Dokładnie!' );
}
```

W kodzie powyżej JavaScript najpierw sprawdza czy `year < 2015`. Jeśli wartość tego wyrażenia jest fałszywa, sprawdzany jest kolejny warunek `year > 2015`. Jeżeli to wyrażenie również jest fałszywe  (ang. *truthy*), pokazuje się ostatni `alert`.

Może być więcej bloków `else if`. Ostateczny blok `else` jest opcjonalny.

## Operator warunkowy '?'

Czasami potrzebujemy przypisać zmienną w zależności od warunku.

Na przykład:

```js run no-beautify
let accessAllowed;
let age = prompt('Ile masz lat?', '');

*!*
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
*/!*

alert(accessAllowed);
```

Za pomocą operatora warunkowego '?' możemy to zrobić w o wiele prostszy i szybszy sposób.

Operator jest reprezentowany za pomocą znaku zapytania `?`. Czasami nazywany jest "potrójnym", ponieważ operator ma trzy operandy. W zasadzie to jedyny operator w języku JavaScript który posiada ich aż tyle.

Oto jego składnia:
```js
let result = condition ? value1 : value2;
```
`condition` jest sprawdzany: jeżeli jest prawdziwy (ang. *truthy*) wtedy zwrócona zostaje wartość `value1`, w przeciwnym wypadku -- `value2`.

Na przykład:

```js
let accessAllowed = (age > 18) ? true : false;
```
Technicznie rzecz biorąc omijamy nawiasy dookoła `age > 18`. Operator warunkowy '?' ma niskie pierwszeństwo, więc wykonuje się dopiero po porównaniu `>`.

Ten przykład robi dokładnie to samo co poprzedni:

```js
// porównanie operatora age > 18 tak czy inaczej wykonywane jest jako pierwsze
// (nie musimy opakowywać je w nawiasy)
let accessAllowed = age > 18 ? true : false;
```
Ale dzięki nawiasom nim kod staje się czytelniejszy, dlatego polecamy ich używać.

````smart
W powyższym przykładzie powinieneś unikać używania operatora logicznego '?', ponieważ porównanie damo zwraca `true/false`:
In the example above, you can avoid using the question mark operator because the comparison itself returns `true/false`:

```js
// to samo
let accessAllowed = age > 18;
```
````

## Wielokrotne wykorzystanie operatora '?'

Sekwencja operatorów logicznych '?' może zwracać wartość która zależy od więcej niż jednego warunku.

Na przykład:
```js run
let age = prompt('wiek?', 18);

let message = (age < 3) ? 'Witaj, dziecko!' :
  (age < 18) ? 'Witaj!' :
  (age < 100) ? 'Pozdrowienia!' :
  'Cóż za niespotykany wiek!';

alert( message );
```
Za pierwszym razem może być ciężko zrozumieć co właściwie się dzieje, ale gdy bliżej się przyjrzymy można łatwo zauważyć że tak na prawdę jest to zwyczajna sekwencja sprawdzeń:

1. Pierwszy operator warunkowy '?' sprawdza czy `age <3 `.
2. Jeśli tak -- zwraca `'Witaj, dziecko!'`. W przeciwnym wypadku kontynuuje wyrażenie za dwukropkiem '":"' i sprawdza czy `age < 18`.
3. Jeśli tak -- zwraca `'Witaj!'`. W przeciwnym wypadku kontynuuje wyrażenie za dwukropkiem '":"' i sprawdza czy `age < 100`.
4. Jeśli tak -- zwraca `'Pozdrowienia!'`.  W przeciwnym wypadku kontynuuje wyrażenie za ostatnim dwukropkiem '":"' i zwraca  `'Cóż za niespotykany wiek!'`.

Oto jak powyższy kod wyglądał by używając `if..else`

```js
if (age < 3) {
  message = 'Witaj, dziecko!';
} else if (age < 18) {
  message = 'Witaj!';
} else if (age < 100) {
  message = 'Pozdrowienia!';
} else {
  message = 'Cóż za niespotykany wiek!';
}
```

## Nietradycjonalne użycie '?'

Czasami operator logiczny '?' jest używany jako zastępstwo dla polecenia `if`:

```js run no-beautify
let company = prompt('Jaka firma stworzyła JavaScript?', '');

*!*
(company == 'Netscape') ?
   alert('Prawda!') : alert('Źle.');
*/!*
```

W zależności od warunku `company == 'Netscape' zostanie wykonane pierwsze lub drugie wyrażenie po znaku `?` i zostanie pokazane przez alert. 

Nie przypisujemy tutaj żadnej wartości do zmiennej. Zamiast tego wykonujemy różny kod w zależności od warunku.

**Nie zalecamy używania operatora warunkowego '?' w ten sposób.**

Notacja jest krótsza niż równoważna instrukcja `if`, która przemawia do niektórych programistów. Ale kod jest o wiele mniej czytelny.

Dla porównania oto kod który używa instrukcji `if`:

```js run no-beautify
let company = prompt('Jaka firma stworzyła JavaScript?', '');

*!*
if (company == 'Netscape') {
  alert('Prawda!');
} else {
  alert('Źle.');
}
*/!*
```
Nasze oczy skanują kod pionowo. Bloki kodu, które obejmują kilka linii, są łatwiejsze do zrozumienia niż długi, poziomy zestaw instrukcji. 
Celem operatora warunkowego `?` Jest zwrócenie jednej lub drugiej wartości w zależności od warunku. Użyj go dokładnie do tego. Jeżeli chcesz wykonać różne kawałki kodu użyj instrukcji `if`.