<<<<<<< HEAD
# Operator null'owego scalania '??'

[recent browser="new"]

W tym artykule zakładamy, że wyrażenie jest "zdefiniowane", jeżeli nie jest `null` albo `undefined`.

Operator null'owego scalania zapisujemy jako dwa znaki zapytania `??`.

Wynikiem `a ?? b` jest:
- `a` jeżeli jest zdefiniowane,
- `b` jeżeli `a` nie jest zdefiniowane.


Innymi słowy, `??` zwraca pierwszy argument, którego wartość jest inna niż `null/undefined`. W przeciwnym razie, zwraca drugi argument.

Operator null'owego scalania nie jest całkiem nowy. Jest to po prostu ładna składnia, aby dostać pierwszą zdefiniowaną wartość z dwóch dostępnych.

Możemy zapisać `result = a ?? b` używając operatorów, które już znamy:
=======
# Nullish coalescing operator '??'

[recent browser="new"]

The nullish coalescing operator is written as two question marks `??`.

As it treats `null` and `undefined` similarly, we'll use a special term here, in this article. For brevity, we'll say that a value is "defined" when it's neither `null` nor `undefined`.

The result of `a ?? b` is:
- if `a` is defined, then `a`,
- if `a` isn't defined, then `b`.

In other words, `??` returns the first argument if it's not `null/undefined`. Otherwise, the second one.

The nullish coalescing operator isn't anything completely new. It's just a nice syntax to get the first "defined" value of the two.

We can rewrite `result = a ?? b` using the operators that we already know, like this:
>>>>>>> d78b01e9833009fab534462e05c03cffc51bf0e3

```js
result = (a !== null && a !== undefined) ? a : b;
```

<<<<<<< HEAD
Typowym przykładem użycia `??` jest dostarczenie domyślnej wartości dla potencjalnie niezdefiniowanej zmiennej.

Dla przykładu, wyświetlamy `Anonim`, jeżeli zmienna `user` jest niezdefiniowana:
=======
Now it should be absolutely clear what `??` does. Let's see where it helps.

The common use case for `??` is to provide a default value.

For example, here we show `user` if its value isn't `null/undefined`, otherwise `Anonymous`:
>>>>>>> d78b01e9833009fab534462e05c03cffc51bf0e3

```js run
let user;

<<<<<<< HEAD
alert(user ?? "Anonim"); // Anonim
```

Oczywiście, jeżeli zmienna `user` ma inną wartość niż `null/undefined`, wtedy powinniśmy zobaczyć jej wartość:
=======
alert(user ?? "Anonymous"); // Anonymous (user is undefined)
```

Here's the example with `user` assigned to a name:
>>>>>>> d78b01e9833009fab534462e05c03cffc51bf0e3

```js run
let user = "John";

<<<<<<< HEAD
alert(user ?? "Anonim"); // John
```

Możemy również użyć sekwencji `??`, żeby wybrać pierwszą wartość  z listy, która jest inna niż `null/undefined`.

Powiedzmy, że mamy dane użytkownika w zmiennych `firstName`, `lastName` oraz `nickName`. Wszystkie mogą być niezdefiniowane, jeżeli użytkownik zdecyduje się ich nie wprowadzać.

Chcielibyśmy wyświetlić nazwę użytkownika używając jednej z tych zmiennych, albo wyświetlić "Anonim", jeżeli wszystkie są niezdefiniowane.

Użyjmy do tego operatora `??`:
=======
alert(user ?? "Anonymous"); // John (user is not null/undefined)
```

We can also use a sequence of `??` to select the first value from a list that isn't `null/undefined`.

Let's say we have a user's data in variables `firstName`, `lastName` or `nickName`. All of them may be not defined, if the user decided not to fill in the corresponding values.

We'd like to display the user name using one of these variables, or show "Anonymous" if all of them are `null/undefined`.

Let's use the `??` operator for that:
>>>>>>> d78b01e9833009fab534462e05c03cffc51bf0e3

```js run
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

<<<<<<< HEAD
// pokazuje pierwszą zdefiniowaną wartość:
*!*
alert(firstName ?? lastName ?? nickName ?? "Anonim"); // Supercoder
*/!*
```

## Porównanie z ||

Operator OR `||` może być użyty w ten sam sposób co `??`, jak to było opisane w [poprzednim rozdziale](info:logical-operators#or-finds-the-first-truthy-value).

Dla przykładu, w kodzie powyżej, możemy zastąpić `??` z `||` i wciąż otrzymać ten sam rezultat:
=======
// shows the first defined value:
*!*
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
*/!*
```

## Comparison with ||

The OR `||` operator can be used in the same way as `??`, as it was described in the [previous chapter](info:logical-operators#or-finds-the-first-truthy-value).

For example, in the code above we could replace `??` with `||` and still get the same result:
>>>>>>> d78b01e9833009fab534462e05c03cffc51bf0e3

```js run
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

<<<<<<< HEAD
// pokazuje pierwszą truthy wartość:
*!*
alert(firstName || lastName || nickName || "Anonim"); // Supercoder
*/!*
```

Operator OR `||` istnieje od początku w JavaScript, więc był w ten sposób używany przez developerów od bardzo dawna.

Z drugiej strony, Operator null'owego scalania `??` został dodany do JavaScript ostatnio i powodem było to, że ludzie nie byli całkiem zadowoleni z `||`.

Ważną różnicą pomiędzy nimi jest:
- `||` zwraca pierwszą *truthy* wartość.
- `??` zwraca pierwszą *zdefiniowaną* wartość.

Innymi słowy, `||` nie rozróżnia pomiędzy `false`, `0`, pustym stringiem `""` i `null/undefined`. Wszystkie one są takie same -- falsy wartości. Jeżeli którakolwiek z tych wartości jest pierwszym argumentem w `||`, wtedy otrzymamy drugi argument jako wynik.

W praktyce jednak, możemy chcieć użyć domyślnej wartości tylko wtedy jeżeli zmienna ma wartość `null/undefined`. To znaczy tylko wtedy kiedy wartość naprawdę jest nieznana/nie ustawiona.

Na przykład, rozważmy:
=======
// shows the first truthy value:
*!*
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder
*/!*
```

Historically, the OR `||` operator was there first. It's been there since the beginning of JavaScript, so developers were using it for such purposes for a long time.

On the other hand, the nullish coalescing operator `??` was added to JavaScript only recently, and the reason for that was that people weren't quite happy with `||`.

The important difference between them is that:
- `||` returns the first *truthy* value.
- `??` returns the first *defined* value.

In other words, `||` doesn't distinguish between `false`, `0`, an empty string `""` and `null/undefined`. They are all the same -- falsy values. If any of these is the first argument of `||`, then we'll get the second argument as the result.

In practice though, we may want to use default value only when the variable is `null/undefined`. That is, when the value is really unknown/not set.

For example, consider this:
>>>>>>> d78b01e9833009fab534462e05c03cffc51bf0e3

```js run
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```

<<<<<<< HEAD
- Wyrażenie `height || 100` sprawdza `height` pod kątem falsy wartości, i tak też właśnie jest.
    - w takim razie wynikiem jest drugi argument, `100`.
- Wyrażenie `height ?? 100` sprawdza `height` pod kątem `null/undefined`, a zmienna `height` nie jest żadną z tych wartości,
    - w takim razie, wynikiem jest `height` "takie jakie jest", zatem `0`.

Jeżeli zerowa wysokość jest poprawną wartością, która nie powinna być zastąpiona wartością domyślną, wtedy `??` sprawdzi się doskonale.

## Priorytet

Priorytet operatora `??` jest raczej niski: `5` [tabela MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table). Więc `??` jest przetwarzane przed `=` i `?`, ale po większości innych operatorów, jak `+`, `*`.

Więc jeżeli chcemy wybrać wartość używając `??` w wyrażeniu z innymi operatorami, rozważ dodanie nawiasów:
=======
- The `height || 100` checks `height` for being a falsy value, and it's `0`, falsy indeed.
    - so the result of `||` is the second argument, `100`.
- The `height ?? 100` checks `height` for being `null/undefined`, and it's not,
    - so the result is `height` "as is", that is `0`.

In practice, the zero height is often a valid value, that shouldn't be replaced with the default. So `??` does just the right thing.

## Precedence

The precedence of the `??` operator is the same as `||`. They both equal `3` in the [MDN table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table).

That means that, just like `||`, the nullish coalescing operator `??` is evaluated before `=` and `?`, but after most other operations, such as `+`, `*`.

So we may need to add parentheses in expressions like this:
>>>>>>> d78b01e9833009fab534462e05c03cffc51bf0e3

```js run
let height = null;
let width = null;

<<<<<<< HEAD
// ważne: użyj nawiasów
=======
// important: use parentheses
>>>>>>> d78b01e9833009fab534462e05c03cffc51bf0e3
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
```

<<<<<<< HEAD
W innym wypadku, jeżeli ominiemy nawiasy, wtedy `*` ma większy priorytet niż `??`, więc wykona się najpierw, prowadząc do niewłaściwych wyników.

```js
// bez nawiasów
let area = height ?? 100 * width ?? 50;

// ...działa tak samo (prawdopodobnie nie tego chcemy):
let area = height ?? (100 * width) ?? 50;
```

### Użycie ?? z && albo ||

Z powodów bezpieczeństwa, JavaScript zabrania użycia `??` razem z operatorami `&&` i `||`, chyba, że priorytety są zdefiniowane dokładnie z użyciem nawiasów.

Kod poniżej wywołuje błąd składni:

```js run
let x = 1 && 2 ?? 3; // Błąd składni (eng. syntax error)
```

Obostrzenia są oczywiście dyskusyjne, ale zostały dodane do specyfikacji języka celem uniknięcia błędów programowania, kiedy ludzie zaczną zmieniać z `??` na `||`.

Używaj nawiasów żeby uniknąć problemu:

```js run
*!*
let x = (1 && 2) ?? 3; // Działa
=======
Otherwise, if we omit parentheses, then as `*` has the higher precedence than `??`, it would execute first, leading to incorrect results.

```js
// without parentheses
let area = height ?? 100 * width ?? 50;

// ...works this way (not what we want):
let area = height ?? (100 * width) ?? 50;
```

### Using ?? with && or ||

Due to safety reasons, JavaScript forbids using `??` together with `&&` and `||` operators, unless the precedence is explicitly specified with parentheses.

The code below triggers a syntax error:

```js run
let x = 1 && 2 ?? 3; // Syntax error
```

The limitation is surely debatable, it was added to the language specification with the purpose to avoid programming mistakes, when people start to switch from `||` to `??`.

Use explicit parentheses to work around it:

```js run
*!*
let x = (1 && 2) ?? 3; // Works
>>>>>>> d78b01e9833009fab534462e05c03cffc51bf0e3
*/!*

alert(x); // 2
```

<<<<<<< HEAD
## Podsumowanie

- Operator null'owego scalania `??` dostarcza szybszego sposobu na wybranie pierwszej zdefiniowanej wartości z listy.

    Jest używany do przypisania domyślnej wartości do zmiennej:

    ```js
    // ustaw height=100, jeżeli height jest null lub undefined
    height = height ?? 100;
    ```

- Operator `??` ma bardzo niski priorytet, tylko trochę wyższy niż `?` i `=`, zatem rozważ dodanie nawiasów w wyrażeniu.
- Zabronione jest użycie z `||` lub `&&` bez użycia nawiasów.
=======
## Summary

- The nullish coalescing operator `??` provides a short way to choose the first "defined" value from a list.

    It's used to assign default values to variables:

    ```js
    // set height=100, if height is null or undefined
    height = height ?? 100;
    ```

- The operator `??` has a very low precedence, only a bit higher than `?` and `=`, so consider adding parentheses when using it in an expression.
- It's forbidden to use it with `||` or `&&` without explicit parentheses.
>>>>>>> d78b01e9833009fab534462e05c03cffc51bf0e3
