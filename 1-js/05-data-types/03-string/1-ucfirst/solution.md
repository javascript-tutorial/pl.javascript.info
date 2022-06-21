Nie możemy "zastąpić" pierwszego znaku, ponieważ łańcuchy znaków w JavaScript są niezmienne.

Możemy jednak stworzyć nowy łańcuch na podstawie istniejącego z pierwszym znakiem, jako wielką literą:

```js
let newStr = str[0].toUpperCase() + str.slice(1);
```

Jest jednak mały problem. Jeśli `str` jest pusty, to `str[0]` zwróci `undefined`, a `undefined` nie ma metody `toUpperCase()`, więc otrzymamy błąd.

Są dwa wyjścia:

1. Użyj `str.charAt(0)`, ponieważ ta metoda zawsze zwraca łańcuch znaków (może być pusty).
2. Dodaj warunek na wypadek pustego łańcucha.

Oto druga opcja:

```js run demo
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("john") ); // John
```

