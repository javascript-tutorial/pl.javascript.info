Odpowiedź: `1`.

```js run
let i = 3;

while (i) {
  alert( i-- );
}
```

Każda obrót pętli zmniejsza `i` o `1`. Sprawdzenie `while(i)` zatrzymuje pętle kiedy `i = 0`.

Stąd kroki pętli tworzą następującą sekwencję ("pętla rozwijana"):

```js
let i = 3;

alert(i--); // pokazuje 3, zmniejsza i do 2

alert(i--) // pokazuje 2, zmniejsza i do 1

alert(i--) // pokazuje 1, zmniejsza i do 0

// koniec, sprawdzenie while(i) zatrzymuje pętlę
```
