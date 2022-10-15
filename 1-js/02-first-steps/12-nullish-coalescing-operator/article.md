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

Powiedzmy, że mamy dane użytkownika w zmiennych `firstName`, `lastName` oraz `nickName`. Wszystkie mogą być niezdefiniowane, jeżeli użytkownik zdecyduje się ich nie wprowadzać.

Chcielibyśmy wyświetlić nazwę użytkownika używając jednej z tych zmiennych, albo wyświetlić "Anonim", jeżeli wszystkie są niezdefiniowane.

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

Z drugiej strony, Operator null'owego scalania `??` został dodany do JavaScript ostatnio i powodem było to, że ludzie nie byli całkiem zadowoleni z `||`.

Ważną różnicą pomiędzy nimi jest:
- `||` zwraca pierwszą *truthy* wartość.
- `??` zwraca pierwszą *zdefiniowaną* wartość.

Innymi słowy, `||` nie rozróżnia pomiędzy `false`, `0`, pustym stringiem `""` i `null/undefined`. Wszystkie one są takie same -- falsy wartości. Jeżeli którakolwiek z tych wartości jest pierwszym argumentem w `||`, wtedy otrzymamy drugi argument jako wynik.

W praktyce jednak, możemy chcieć użyć domyślnej wartości tylko wtedy jeżeli zmienna ma wartość `null/undefined`. To znaczy tylko wtedy kiedy wartość naprawdę jest nieznana/nie ustawiona.

Na przykład, rozważmy:

```js run
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```

- Wyrażenie `height || 100` sprawdza `height` pod kątem falsy wartości, i tak też właśnie jest.
    - w takim razie wynikiem jest drugi argument, `100`.
- Wyrażenie `height ?? 100` sprawdza `height` pod kątem `null/undefined`, a zmienna `height` nie jest żadną z tych wartości,
    - w takim razie, wynikiem jest `height` "takie jakie jest", zatem `0`.

Jeżeli zerowa wysokość jest poprawną wartością, która nie powinna być zastąpiona wartością domyślną, wtedy `??` sprawdzi się doskonale.

## Priorytet

Priorytet operatora `??` jest raczej niski: `5` [tabela MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table). Więc `??` jest przetwarzane przed `=` i `?`, ale po większości innych operatorów, jak `+`, `*`.

Więc jeżeli chcemy wybrać wartość używając `??` w wyrażeniu z innymi operatorami, rozważ dodanie nawiasów:

```js run
let height = null;
let width = null;

// ważne: użyj nawiasów
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
```

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
*/!*

alert(x); // 2
```

## Podsumowanie

- Operator null'owego scalania `??` dostarcza szybszego sposobu na wybranie pierwszej zdefiniowanej wartości z listy.

    Jest używany do przypisania domyślnej wartości do zmiennej:

    ```js
    // ustaw height=100, jeżeli height jest null lub undefined
    height = height ?? 100;
    ```

- Operator `??` ma bardzo niski priorytet, tylko trochę wyższy niż `?` i `=`, zatem rozważ dodanie nawiasów w wyrażeniu.
- Zabronione jest użycie z `||` lub `&&` bez użycia nawiasów.
