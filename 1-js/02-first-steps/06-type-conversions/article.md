# Konwersje typów

W większości przypadków operatory i funkcje automatycznie konwertują przekazywane do nich wartości na właściwy typ. 

Na przykład `alert` automatycznie zmieni typ dowolnej wartości do stringa. Matematyczne operacje konwertują wartości do typu liczbowego.

Istnieją jednak przypadki, w których musimy jawnie zmienić typ wartości na inny. 

```smart header="Nie mówimy jeszcze o obiektach"
W tym rozdziale nie zajmujemy się obiektami. Zamiast tego nauczymy się najpierw typów prymitywnych. Później nauczymy się co nieco o obiektach i zobaczymy jak działa konwersja obiektów w rozdziale <info:object-toprimitive>.
```

## String Conversion

Konwersja do stringa następuje kiedy potrzebujemy wartości typu string.

Na przykład `alert(value)` konwertuje do stringa żeby wyświetlić wartość.

Możemy również wywołać funkcję `String(value)` żeby skonwertować wartość:

```js run
let value = true;
alert(typeof value); // boolean

*!*
value = String(value); // teraz wartość "true" jest stringiem
alert(typeof value); // string
*/!*
```

Konwersja stringów jest bardzo przewidywalna. `false` zostaje `"false"`, typ boolean `null` staje się stringiem `"null"`, etc.

## Numeric Conversion

Konwersja do typu liczbowego następuje automatycznie w wyniku matematycznych wyrażeń i funkcji.

Na przykład dzielenie `/` dla wartości nie będących liczbami: 

```js run
alert( "6" / "2" ); // 3, stringi są zamienione na liczby
```

Możemy użyć funkcji `Number(value)`, aby jawnie przekonwertować `wartość` do liczby. 

```js run
let str = "123";
alert(typeof str); // string

let num = Number(str); // zostaje typem liczbowym o wartości 123

alert(typeof num); // number
```

Jawna konwersja jest zazwyczaj wymagana gdy chcemy odczytać wartość ze źródła będącą stringiem, a oczekujemy wartości liczbowej.

Jeśli string nie jest prawidłową liczbą wynikiem konwersji będzie `NaN`. Dla przykładu:

```js run
let age = Number("dowolny ciąg znaków zamiast typu liczbowego");

alert(age); // NaN, konwersja nie powiodła się
```

Zasady konwersji typu liczbowego:

| Wartość |  Otrzymamy... |
|---------|-------------|
|`undefined`|`NaN`|
|`null`|`0`|
|<code>true&nbsp;and&nbsp;false</code> | `1` and `0` |
| `string` | Białe znaki z początku i końca są usunięte. Jeśli pozostała wartość stringa jest pusta wynikiem będzie `0`. W przeciwnym wypadku liczba jest odczytywana ze stringa. Wszystkie nieprawidłowe konwersje dają `NaN`. |

Przykłady:

```js run
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (błąd podczas odczytywania liczby ze stringa "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```

Zauważ, że `null` i `undefined` zachowują się inaczej. `null` zostanie przekonwertowany do zera, natomiast `undefined` sprawi, że wynikiem będzie `NaN`.

````smart header="'+' konkatenuje stringi"
Większość matematycznych operacji konwertuje wartości do typu liczbowego. Jedynym wyjątkiem jest `+`. Jeśli dodasz jedną z wartości, która będzie stringiem, wtedy wynikiem takiej operacji będzie typ string.

Wtedy operacja je konkatenuje (łączy):

```js run
alert( 1 + '2' ); // '12' (string po prawej)
alert( '1' + 2 ); // '12' (string po lewej)
```

Dzieje się to w przypadku gdy przynajmniej jeden z argumentów jest stringiem. W przeciwnym wypadku wartości zostaną przekonwertowane na typ liczbowy.
````

## Boolean Conversion

Konwersje typu Boolean są najprostsze.

Zachodzą w logicznych operacjach (później poznamy warunki i inne podobne rzeczy) i może zostać wywołana z użyciem funkcji `Boolean(value)`.

Zasada konwersji:

- Wartości, które są "puste" np. `0`, pusty string, `null`, `undefined` i `NaN` zostaną przekonwertowane do `false`.
- Inne wartości zostaną przekonwertowane do `true`.

Na przykład:

```js run
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
```

````warn header="Miej na uwadze, że string z `\"0\"` będzie `true`"
Niektóre języki (np. PHP) traktują `"0"` jako `false`. Ale w JavaScript każdy string z jakąkolwiek wartością jest zawsze `true`.

```js run
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spacje, również true (jakakolwiek wartość stringowa jest true)
```
````

## Summary

Trzy najczęściej używane konwersje dotyczą konwersji do stringu, liczby i typu boolean.

**`String Conversion`** -- Zachodzi gdy coś wpisujemy. Może zajść również z użyciem `String(value)`. Konwersja do stringa jest zazwyczaj oczywista dla prymitywnych wartości.

**`Numeric Conversion`** -- Zachodzi w matematycznych operacjach. Może zajść również z użyciem `Number(value)`.

Konwersja jest zgodna z zasadami:

| Wartość |  Otrzymamy... |
|-------|-------------|
|`undefined`|`NaN`|
|`null`|`0`|
|<code>true&nbsp;/&nbsp;false</code> | `1 / 0` |
| `string` | String jest odczytywany taki "jak jest", białe znaki z obu stron są zignorowane. Pusty string staje się `0`. Błąd konwersji zwraca `NaN`.|

**`Boolean Conversion`** -- Zachodzi w logicznych operacjach. Może zajść również z użyciem `Boolean(value)`.

Konwersja jest zgodna z zasadami:

| Wartość |  Otrzymamy... |
|-------|-------------|
|`0`, `null`, `undefined`, `NaN`, `""` |`false`|
|Każda inna wartość| `true` |


Większość z tych zasad jest łatwa do zrozumienia i zapamiętania. Most of these rules are easy to understand and memorize. Wyjątki, które warto wspomnieć, w których ludzie najczęściej popełniają błędy:Warte uwagi najczęściej popełnianie błędy:

- `undefined` to `NaN` jako number, a nie `0`.
- `"0"` i spacja w stringu np. `"   "` będzie true jako boolean.

Obiekty nie są tutaj omówione. Wrócimy do nich później w rozdziale <info:object-toprimitive>, który jest poświęcony obiektom, gdy poznamy już więcej podstaw JavaScript.