
Spróbuj to uruchomić:

```js run
let str = "Witaj";

str.test = 5; // (*)

alert(str.test);
```

W zależności czy używasz `use strict` czy też nie, wynik może być różny:

1. `undefined` (brak trybu nowoczesnego)
2. Błąd (tryb nowoczesny).

Dlaczego? Spróbujmy odtworzyć co dzieje się w lini `(*)`:

1. Kiedy uzyskujemy dostęp do własności `str`, tworzony jest "wrapper obiektu".
2. W trybie nowoczesnym przypisywanie wartości do niego powoduje błąd.
3. W przeciwnym wypadku operacja przypisania wartości jest kontynuowana, obiekt dostaje własność `test`, ale zaraz po tym "wrapper obiektu" znika i w w ostatnim wierszu `str` nie może dostać się do własności obiektu.

**Ten przykład jasno pokazuje że typy podstawowe nie są obiektami.**

Nie mogą przechowywać dodatkowych informacji.
