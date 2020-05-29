# Rzutowanie typów

W większości przypadków operatory i funkcje automatycznie rzutują przekazywane do nich wartości na właściwy typ.

Na przykład `alert` automatycznie zmieni typ dowolnej wartości do typu tekstowego. Matematyczne operacje rzutują wartości do typów liczbowych.

Istnieją jednak przypadki, w których musimy jawnie zmienić typ wartości na inny. 

<<<<<<< HEAD:1-js/02-first-steps/06-type-conversions/article.md
```smart header="Nie mówimy jeszcze o obiektach"
W tym rozdziale nie zajmujemy się obiektami. Zamiast tego nauczymy się najpierw typów prostych. Później nauczymy się co nieco o obiektach i w rozdziale pt. "<info:object-toprimitive>" zobaczymy, jak działa rzutowanie obiektów.
=======
```smart header="Not talking about objects yet"
In this chapter, we won't cover objects. For now we'll just be talking about primitives.

Later, after we learn about objects, in the chapter <info:object-toprimitive> we'll see how objects fit in.
```
>>>>>>> cd2c7ce3c8f033e6f7861ed1b126552e41ba3e31:1-js/02-first-steps/07-type-conversions/article.md

## Rzutowanie do typu tekstowego

Rzutowanie do typu tekstowego następuje, kiedy potrzebujemy wartości zmiennej w formie tekstowej.

Na przykład, funkcja `alert(value)` rzutuje wyświetlaną wartość do typu tekstowego.

Możemy również wywołać funkcję `String(value)`, żeby jawnie rzutować wartość na tekst:

```js run
let value = true;
alert(typeof value); // boolean

*!*
value = String(value); // teraz wartość "true" jest ciągiem znaków
alert(typeof value); // string
*/!*
```

Rzutowanie wartości do tekstu jest bardzo przewidywalne. `false` zostaje `"false"`, typ `null` staje się napisem `"null"` itd.

## Rzutowanie do typu liczbowego

Rzutowanie do typu liczbowego następuje automatycznie w wyniku matematycznych wyrażeń i funkcji.

Na przykład przy dzieleniu (`/`) z udziałem wartości nie będących liczbami:

```js run
alert( "6" / "2" ); // 3, wartości tekstowe są zamienane na liczby
```

Możemy użyć funkcji `Number(value)`, aby jawnie rzutować zmienną `value` na liczbę. 

```js run
let str = "123";
alert(typeof str); // string

let num = Number(str); // staje się typem liczbowym o wartości 123

alert(typeof num); // number
```

Jawne rzutowanie jest zazwyczaj wymagane, gdy chcemy odczytać wartość ze źródła tekstowego, a w kodzie oczekujemy wartości liczbowej.

Jeśli podana wartość tekstowa nie jest prawidłową liczbą, wynikiem konwersji będzie `NaN`. Dla przykładu:

```js run
let age = Number("dowolny ciąg znaków zamiast typu liczbowego");

alert(age); // NaN, rzutowanie nie powiodło się
```

Zasady rzutowania do typu liczbowego:

| Wartość |  Otrzymamy... |
|---------|-------------|
|`undefined`|`NaN`|
|`null`|`0`|
|<code>true&nbsp;i&nbsp;false</code> | `1` i `0` |
| `string` | Białe znaki z początku i końca są usuwane. Jeśli pozostała wartość napisu jest pusta, wynikiem będzie `0`. W przeciwnym wypadku liczba jest odczytywana z tekstu. Wszystkie nieprawidłowe rzutowania dają `NaN`. |

Przykłady:

```js run
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (błąd podczas rzutowania "z" na liczbę)
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```

Zauważ, że `null` i `undefined` zachowują się inaczej. `null` jest konwertowany do zera, a `undefined` do `NaN`.

Większość operatorów matematycznych także wykonuje taką konwersję. Więcej na ten temat dowiesz się z kolejnego rozdziału.

## Rzutowanie do typu logicznego

Rzutowania do typu logicznego są najprostsze.

Zachodzą w operacjach logicznych (później poznamy instrukcje warunkowe i inne podobne rzeczy), ale także mogą zostać wywołane z użyciem funkcji `Boolean(value)`.

Zasada rzutowania:

- Wartości "puste", np. `0`, pusty ciąg znaków, `null`, `undefined` i `NaN`, są konwertowane do `false`.
- Inne wartości są konwertowane do `true`.

Na przykład:

```js run
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("witaj") ); // true
alert( Boolean("") ); // false
```

````warn header="Miej na uwadze, że tekst zawierający cyfrę 0 (`\"0\"`) da `true`"
Niektóre języki (np. PHP) traktują `"0"` jako `false`. Ale w JavaScripcie każdy niepusty ciąg znaków daje zawsze `true`.

```js run
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spacje, również true (każdy niepusty ciąg znaków daje true)
```
````

## Podsumowanie

Trzy najczęściej używane rzutowania dotyczą ciągów znaków, liczb i typów logicznych.

**`Rzutowanie do typu tekstowego`** -- Zachodzi, gdy coś wypisujemy na ekranie. Może zajść również przy użyciu funkcji `String(value)`. Wynik rzutowania do tekstu jest zazwyczaj oczywisty dla typów prostych.

**`Rzutowanie do typu liczbowego`** -- Zachodzi w operacjach matematycznych. Może zajść również przy użyciu funkcji `Number(value)`.

Rzutowanie to jest zgodne z zasadami:

| Wartość |  Otrzymamy... |
|-------|-------------|
|`undefined`|`NaN`|
|`null`|`0`|
|<code>true&nbsp;/&nbsp;false</code> | `1 / 0` |
| `string` | Tekst jest odczytywany "jak leci", białe znaki na obydwóch końcach są ignorowane. Pusty ciąg znaków staje się `0`. Błąd konwersji zwraca `NaN`.|

**`Rzutowanie do typu logicznego`** -- Zachodzi w operacjach logicznych. Może zajść również przy użyciu funkcji `Boolean(value)`.

Rzutowanie jest zgodne z zasadami:

| Wartość |  Otrzymamy... |
|-------|-------------|
|`0`, `null`, `undefined`, `NaN`, `""` |`false`|
|Każda inna wartość| `true` |


Większość z tych zasad jest łatwa do zrozumienia i zapamiętania. Warte uwagi, najczęściej popełnianie błędy to:

- `undefined` rzutowane na typ liczbowy daje `NaN`, a nie `0`.
- `"0"` i spacja w ciągu znaków np. `"   "` rzutowane na typ logiczny dadzą `true`.

Nie omówiliśmy tu obiektów. Wrócimy do nich później w rozdziale pt. "<info:object-toprimitive>", gdy już poznamy więcej podstaw JavaScriptu.