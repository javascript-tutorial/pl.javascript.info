# Porównania

Na matematyce poznaliśmy porównania: 

- Większe/mniejsze niż: <code>a &gt; b</code>, <code>a &lt; b</code>.
- Większe/mniejsze niż lub równe: <code>a &gt;= b</code>, <code>a &lt;= b</code>.
- Równe: `a == b` (zauważ, że jest tutaj podwójny znak `=`. Pojedyncze użycie `a = b` oznacza przypisanie).
- Nierówne. W matematyce zapiszemy to jako <code>&ne;</code>, ale w JavaScript jest to zapisane jako wykrzyknik przed znakiem równości: <code>a != b</code>.

## Wynikiem jest Boolean

Jak wszystkie inne operatory porównanie zwraca wartość. W tym przypadku wartością jest Boolean.

- `true` -- means "yes", "correct" or "the truth".
- `false` -- means "no", "wrong" or "not the truth".

Na przykład:

```js run
alert( 2 > 1 );  // true (prawda)
alert( 2 == 1 ); // false (fałsz)
alert( 2 != 1 ); // true (prawda)
```

Wynik porównania może być przypisany do zmiennej, jak każda inna wartość:

```js run
let result = 5 > 4; // przypisz wynik porównania
alert( result ); // true
```

## Porównanie stringów

Aby zobaczyć czy ciąg znaków jest większy niż inny JavaScript używa porównania, które nazywamy "słownikowym" lub "leksykograficznym".

Innymi słowy, stringi porównywane są litera po literze.

Na przykład:

```js run
alert( 'Z' > 'A' ); // true
alert( 'Brat' > 'Brak' ); // true
alert( 'Jan' > 'Ja' ); // true
```

Algorytm porównuje dwa stringi w prosty sposób:

1. Porównaj pierwszy znak w obu stringach.
2. Jeśli pierwszy znak w pierwszym stringu jest większy (lub mniejszy) niż inny string, wtedy pierwszy string jest większy (lub mniejszy). Porównanie zakończone.
3. Jeśli pierwsze znaki są takie same zrób porównanie dla kolejnego znaku w ten sam sposób jak w punkcie nr 2.
4. Powtarzaj dopóki nie dojdzie do końca stringu.
5. Jeśli oba stringi mają taką samą długość są równe. W przeciwnym przypadku dłuższy string jest większy.

W powyższych przypadkach porównanie `'Z' > 'A'` zwróci rezultat w pierwszym podejściu. Porównanie `"Brat"` z `"Brak"` będzie porównywane znak po znaku:

1. `B` jest takie same jak `B`.
2. `r` jest takie same jak `r`.
3. `a` jest takie same jak `a`.
3. `t` jest większe niż `k`. Zatrzymaj tutaj. Pierwszy string jest większy.

```smart header="Nie do końca słownikowa, bo kolejność wg Unicode"
Podany powyżej przykład jest prawie taki sam jak algorytm używany w słownikach lub książkach telefonicznych. Ale nie jest dokładnie taki sam.

Na przykład wielkość ma znaczenie. Duża litera `"A"` nie jest równa małej literze `"a"`. Która jest większa? Mała litera `"a"`. Dlaczego? Ponieważ małe litery mają większy index w wewnętrznej tabeli kodowania znaków (Unicode), której używa JavaScript. Wrócimy do tego w rozdziale <info:string>.
```

## Porównania wartości różnego typu

Kiedy porównujemy wartości różnego typu JavaScript konwertuje te wartości na liczby.

Na przykład:

```js run
alert( '2' > 1 ); // true, string '2' staje się numerem 2
alert( '01' == 1 ); // true, string '01' staje się numerem 1
```

Dla wartości Boolean `true` staje się `1`, a `false` staje się `0`. 

Na przykład:

```js run
alert( true == 1 ); // true
alert( false == 0 ); // true
```

````smart header="Zabawna zależność"
Jest możliwe, aby w tym samym czasie:

- Dwie wartości były równe.
- Jedna z nich będzie `true` jako Boolean, natomiast druga jest `false` jako Boolean.

Na przykład:

```js run
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
```

Z punkty widzenia JavaScript taki rezultat jest oczekiwany i normalny. Porównanie konwertuje wartości na typ liczbowy (więc string `"0"` zostaje `0`), podczas gdy porównanie `Boolean` konwertuje te wartości w inny sposób.
````

## Operator identyczności

Operator równości `==` ma jedną wadę. Nie potrafi odróżnić `0` od `false`.

```js run
alert( 0 == false ); // true
```

To samo się stanie gdy porównamy pusty string:

```js run
alert( '' == false ); // true
```

Dzieje się tak, ponieważ operandy różnych typów są konwertowane do typu liczbowego podczas użycia `==`. Pusty string, a także `false` stają się 0.

Co powinniśmy zrobić, aby odróżnić `0` od `false`?

**Operator identyczności `===` sprawdza równość bez konwersji typu.**

Innymi słowy, jeśli `a` i `b` są różnego typu wtedy `a === b` natychmiastowo zwróci `false` bez próby ich wcześniejszej konwersji.

Spróbujmy więc:

```js run
alert( 0 === false ); // false, ponieważ typy są różne
```

Istnieje również "operator nieidentyczności" `!==` analogiczny do `!=`.

Operator identyczności jest nieco dłuższy do zapisania, ale czyni porównanie oczywistym i nie zostawia miejsca na błędy.

## Porównania z null i undefined

Zobaczmy kilka skrajnych przypadków.

Nie jest intuicyjne w jaki sposób zachowają się `null` lub `undefined` gdy będą porównywane z innymi wartościami.


Dla sprawdzenia identyczności `===`
: Te wartości są różne, ponieważ każda jest innego typu.

    ```js run
    alert( null === undefined ); // false
    ```

Dla sprawdzenia równości `==`
: Istnieje specjalna reguła. Te dwie wartości są "słodką parą": są równe sobie (w sensie `==`), ale nie są równe innej wartości.

    ```js run
    alert( null == undefined ); // true
    ```

W matematyce i innych porównaniach `< > <= >=`
: `null/undefined` są skonwertowane do liczb: `null` staje się `0`, natomiast `undefined` staje się `NaN`.

Zobaczmy kilka ciekawych rzeczy, które się dzieją gdy zaaplikujemy te reguły. I co jest najważniejsze, jak nie wpaść z nimi w tarapaty.

### Dziwny rezultat: null vs 0

Porównajmy `null` z zerem:

```js run
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) *!*true*/!*
```

W matematyce jest to dziwne. Ostatni rezultat, w którym "`null` jest większe lub równe zero" zwraca `true`, podczas gdy oba wcześniejsze zwracają `false`, wydaje się, że również powinno być `false`, a jest `true`.

Powodem takiego wyniku jest to, że znak `==` i porównania `> < >= <=` nie działają w ten sam sposób. Porównania konwertują `null` do liczby traktując go jako `0`. Dlatego właśnie (3) `null >= 0` jest true i (1) `null > 0` jest false.

Z drugiej strony użycie `==` dla `undefined` oraz `null` jest zdefiniowane bez żadnych konwersji i są równe tylko sobie i niczemu innemu. I właśnie dlatego w przykładzie (2) `null == 0` jest false.

### Nieporównywalny undefined

Wartość `undefined` nie powinna być porównywana z innymi wartościami:

```js run
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
```

Dlaczego nie lubi nawet zera? Bo zawsze jest false!

Dostaliśmy takie rezultaty ponieważ:

- Porównanie `(1)` i `(2)` zwraca `false` ponieważ `undefined` zostaje skonwertowane do `NaN` i `NaN` jest specjalną numeryczną wartością, która zawsze zwraca `false` dla wszystkich porównań.
- Sprawdzanie równości `(3)` zwraca `false` ponieważ `undefined` jest równe tylko `null`, `undefined` i żadnej innej wartości.

### Unikanie problemów

Dlaczego w ogóle przeszliśmy przez te przykłady? Czy powinniśmy pamiętać o tych osobliwych rzeczach cały czas? Nie do końca. Tak właściwie to te podstępne rzeczy staną się jasne z czasem, ale jest jeden porządny sposób na uniknięcie związanych z nimi problemów:

Po prostu traktuj każde porównanie z `undefined/null` używając znaku identyczności `===` zachowując wszelkie środki ostrożności.

Nie używaj porównań `>= > < <=` ze zmiennymi, które mogą być `null/undefined`. Chyba że wiesz co robisz. Jeśli zmienna może mieć te wartości sprawdź je oddzielnie.

## Podsumowanie

- Operatory porównania zwracają wartość typu Boolean (true lub false).
- Stringi porównywane są litera po literze w "słownikowej" kolejności.
- Jeśli porównujemy wartości różnych typów, zostaną one skonwertowane do liczby (chyba, że użyjemy operatora identyczności).
- Wartości `null` i `undefined` są równe sobie `==` i są różne od każdej innej wartości.
- Bądź ostrożny gdy używasz porównac takich jak `>` lub `<` ze zmiennymi, które mogą być `null/undefined`. Oddzielne sprawdzanie dla `null/undefined` jest dobrym rozwiązaniem.