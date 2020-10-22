# Operator łączenia wartości null '??'

[recent browser="new"]

W tym artykule zakładamy, że wyrażenie jest "zdefiniowane", jeżeli nie jest `null` albo `undefined`.

Operator łączenia wartości null zapisujemy jako dwa znaki zapytania `??`.

Wynikiem `a ?? b` jest:
- jeżeli `a` jest zdefiniowane, to wynikiem jest `a`,
- jeżeli `a` nie jest zdefiniowane, to wynikiem jest `b`.


Innymi słowy, `??` zwraca pierwszy argument jeżeli jego wartość jest inna niż `null/undefined`. W przeciwnym razie, zwraca drugi argument.

Operator łączenia wartości null nie jest całkiem nowy. Jest to po prostu ładna składnia, aby dostać pierwszą zdefiniowaną wartość z dwóch dostępnych.

Możemy zapisać `result = a ?? b` używając operatorów, które już znamy:

```js
result = (a !== null && a !== undefined) ? a : b;
```

Typowym przykładem użycia `??` jest dostarczenie domyślnej wartości dla potencjalnie niezdefiniowanej zmiennej.

Dla przykładu, wyświetlamy `Anonim`, jeżeli zmienna `user` jest niezdefiniowana:

```js run
let user;

alert(user ?? "Anonim"); // Anonim
```

Oczywiście, jeżeli zmienna `user` ma inną wartość niż `null/undefined`, wtedy powinniśmy zobaczyć jej wartość:

```js run
let user = "John";

alert(user ?? "Anonim"); // John
```

Możemy również użyć sekwencji `??`, żeby wybrać pierwszą wartość  z listy, która jest inna niż `null/undefined`.

Powiedzmy, że mamy dane użytkownika w zmiennej `firstName`, `lastName` oraz `nickName`. Wszystkie mogą być niezdefiniowane, jeżeli użytkownik zdecyduje się ich nie wprowadzać.

Chcielibyśmy wyświetlić nazwę użytkownika użyuwając jednej z tych zmiennych, albo wyświetlić "Anonim", jeżeli wszystkie są niezdefiniowane.

Użyjmy do tego operatora `??`:

```js run
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// pokazuje pierwszą zdefiniowaną wartość:
*!*
alert(firstName ?? lastName ?? nickName ?? "Anonim"); // Supercoder
*/!*
```

## Porównanie z ||

Operator OR `||` może być użyty w ten sam sposób co `??`, jak to było opisane w [poprzednim rozdziale](info:logical-operators#or-finds-the-first-truthy-value).

Dla przykładu, w kodzie powyżej, możemy zastąpić `??` z `||` i wciąż otrzymać ten sam rezultat:

```js run
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// pokazuje pierwszą truthy wartość:
*!*
alert(firstName || lastName || nickName || "Anonim"); // Supercoder
*/!*
```

Operator OR `||` istnieje od początku w JavaScript, więc był w ten sposób używany przez developerów od bardzo dawna.

Z drugiej strony, Operator łączenia wartości null `??` został dodany do JavaScript ostatnio i powodem było to, że ludzie nie byli całkiem zadowoleni z `||`.

Ważną różnicą pomiędzy nimi jest:
- `||` zwraca pierwszą *truthy* wartość.
- `??` zwraca pierwszą *defined* wartość.

Innymi słowy, `||` nie rozróżnia pomiędzy `false`, `0`, pustym stringiem `""` i `null/undefined`. Wszystkie one są takie same -- falsy wartości. Jeżeli którakolwiek z tych wartości jest pierwszym argumentem w `||`, wtedy otrzymamy drugi argument jako wynik.

W praktyce, możemy chcieć użyć domyślnej wartości tylko wtedy jeżeli zmienna ma wartość `null/undefined`. To znaczy tylko wtedy kiedy wartość naprawdę jest nieznana/nie ustawiona.

Na przykład, rozważmy:

```js run
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```

- Wyrażenie `height || 100` sprawdza `height` pod kątem falsy wartości, i jest ona taka.
    - w takim razie wynikiem jest drugi argument, `100`.
- Wyrażenie `height ?? 100` sprawdza `height` pod kątem `null/undefined`, i nie jest,
    - w takim razie, wynikiem jest `height` "takie jakie jest", zatem `0`.

Jeżeli zerowa wysokość jest poprawną wartością, która nie powinna być zastąpiona wartością domyślną, wtedy `??` sprawdzi się doskonale.

## Precedence / 

Priorytet operatora `??` jest raczej niski: `5` [tabela MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table). Więc `??` jest przetwarzane przed `=` i `?`, ale po większości innych operatorów, jak `+`, `*`.

Więc jeżeli chcemy wybrać wartość używając `??` w wyrażeniu z innymi operatorami, rozważ dodanie nawiasów:

```js run
let height = null;
let width = null;

// ważne: użyj nawiasów
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
```

W innym wypadku, jeżeli ominiemy nawiasy, wtedy `*` ma większy priorytet niż `??`, wykona się najpierw, prowadząc do niewłaściwych wyników.

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
let x = 1 && 2 ?? 3; // Błąd składni
```

The limitation is surely debatable, but it was added to the language specification with the purpose to avoid programming mistakes, when people start to switch to `??` from `||`.

Use explicit parentheses to work around it:

```js run
*!*
let x = (1 && 2) ?? 3; // Works
*/!*

alert(x); // 2
```

## Summary

- Operator łączenia wartości null `??` provides a short way to choose the first "defined" value from a list.

    It's used to assign default values to variables:

    ```js
    // set height=100, if height is null or undefined
    height = height ?? 100;
    ```

- The operator `??` has a very low precedence, only a bit higher than `?` and `=`, so consider adding parentheses when using it in an expression.
- It's forbidden to use it with `||` or `&&` without explicit parentheses.
