
```js run demo
let num;

do {
  num = prompt("Wprowadź liczbę większą niż 100?", 0);
} while (num <= 100 && num);
```

Pętla `do...while` powtarza się, podczas gdy oba sprawdzenia są prawdziwe:

1. 1. Sprawdzenie, czy `num <= 100` -- to znaczy, że wprowadzona wartość jest wciąż nie większa niż `100`.
2. Sprawdzanie `&& num` jest fałszywe, gdy `num` ma wartość `null` lub jest pustym stringiem. Wtedy pętla `while` też się zatrzymuje.

P.S. Jeśli `num` ma wartość `null` to `num <= 100` ma wartość `true`, więc bez drugiego sprawdzenia pętla nie zatrzymałaby się, gdyby użytkownik kliknął PRZERWIJ. Oba sprawdzenia są wymagane.
