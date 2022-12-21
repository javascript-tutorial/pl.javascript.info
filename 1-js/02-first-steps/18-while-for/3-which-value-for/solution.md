**Odpowiedź: od `0` do `4` w obu przypadkach.**

```js run
for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );
```

Można to łatwo odczytać z algorytmu `for`:

1. Wykonać raz `i = 0` przed wszystkim (początek).
2. Sprawdzić warunek `i < 5`
3. jeśli `true` -- wykonaj ciało pętli `alert(i)`, a potem `i++`

Przyrost `i++` jest oddzielony od sprawdzenia warunku (2). To tylko kolejne stwierdzenie.
Wartość zwracana przez przyrost nie jest tutaj używana, więc nie ma różnicy między `i++` a `++i`.
