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

## Strict equality

A regular equality check `==` has a problem. It cannot differentiate `0` from `false`:

```js run
alert( 0 == false ); // true
```

The same thing happens with an empty string:

```js run
alert( '' == false ); // true
```

This happens because operands of different types are converted to numbers by the equality operator `==`. An empty string, just like `false`, becomes a zero.

What to do if we'd like to differentiate `0` from `false`?

**A strict equality operator `===` checks the equality without type conversion.**

In other words, if `a` and `b` are of different types, then `a === b` immediately returns `false` without an attempt to convert them.

Let's try it:

```js run
alert( 0 === false ); // false, because the types are different
```

There is also a "strict non-equality" operator `!==` analogous to `!=`.

The strict equality operator is a bit longer to write, but makes it obvious what's going on and leaves less room for errors.

## Comparison with null and undefined

There's a non-intuitive behavior when `null` or `undefined` are compared to other values.

For a strict equality check `===`
: These values are different, because each of them is a different type.

    ```js run
    alert( null === undefined ); // false
    ```

For a non-strict check `==`
: There's a special rule. These two are a "sweet couple": they equal each other (in the sense of `==`), but not any other value.

    ```js run
    alert( null == undefined ); // true
    ```

For maths and other comparisons `< > <= >=`
: `null/undefined` are converted to numbers: `null` becomes `0`, while `undefined` becomes `NaN`.

Now let's see some funny things that happen when we apply these rules. And, what's more important, how to not fall into a trap with them.

### Strange result: null vs 0

Let's compare `null` with a zero:

```js run
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) *!*true*/!*
```

Mathematically, that's strange. The last result states that "`null` is greater than or equal to zero", so in one of the comparisons above it must be `true`, but they are both false.

The reason is that an equality check `==` and comparisons `> < >= <=` work differently. Comparisons convert `null` to a number, treating it as `0`. That's why (3) `null >= 0` is true and (1) `null > 0` is false.

On the other hand, the equality check `==` for `undefined` and `null` is defined such that, without any conversions, they equal each other and don't equal anything else. That's why (2) `null == 0` is false.

### An incomparable undefined

The value `undefined` shouldn't be compared to other values:

```js run
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
```

Why does it dislike zero so much? Always false!

We get these results because:

- Comparisons `(1)` and `(2)` return `false` because `undefined` gets converted to `NaN` and `NaN` is a special numeric value which returns `false` for all comparisons.
- The equality check `(3)` returns `false` because `undefined` only equals `null`, `undefined`, and no other value.

### Evade problems

Why did we go over these examples? Should we remember these peculiarities all the time? Well, not really. Actually, these tricky things will gradually become familiar over time, but there's a solid way to evade problems with them:

Just treat any comparison with `undefined/null` except the strict equality `===` with exceptional care.

Don't use comparisons `>= > < <=` with a variable which may be `null/undefined`, unless you're really sure of what you're doing. If a variable can have these values, check for them separately.

## Summary

- Comparison operators return a boolean value.
- Strings are compared letter-by-letter in the "dictionary" order.
- When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
- The values `null` and `undefined` equal `==` each other and do not equal any other value.
- Be careful when using comparisons like `>` or `<` with variables that can occasionally be `null/undefined`. Checking for `null/undefined` separately is a good idea.
