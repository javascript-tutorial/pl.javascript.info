Nie możemy "zastąpić" pierwszego znaku, ponieważ łańcuchy znaków w JavaScript są niezmienne.

Możemy jednak stworzyć nowy łańcuch na podstawie istniejącego z pierwszym znakiem, jako wielką literą:

```js
let newStr = str[0].toUpperCase() + str.slice(1);
```

Jest jednak mały problem. Jeśli `str` jest pusty, to `str[0]` zwróci `undefined`, a `undefined` nie ma metody `toUpperCase()`, więc otrzymamy błąd.

<<<<<<< HEAD
Są dwa wyjścia:

1. Użyj `str.charAt(0)`, ponieważ ta metoda zawsze zwraca łańcuch znaków (może być pusty).
2. Dodaj warunek na wypadek pustego łańcucha.

Oto druga opcja:
=======
The easiest way out is to add a test for an empty string, like this:
>>>>>>> 035c5267ba80fa7b55878f7213cbde449b4092d9

```js run demo
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("john") ); // John
```
