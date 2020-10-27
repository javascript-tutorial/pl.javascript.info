Istnieje wiele algorytmów dla tego zadania.

Użyjmy pętli zagnieżdżonej:

```js
Dla każdego i w przedziale {
  sprawdź jeśli i ma dzielnik od 1..i
  jeśli tak => wartość nie jest liczbą pierwszą
  jeśli nie => wartość jest liczbą pierwszą, pokaż ją
}
```

Kod używając etykiety:

```js run
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // dla każdego i...

  for (let j = 2; j < i; j++) { // szukaj dziewlnika..
    if (i % j == 0) continue nextPrime; // nie liczba pierwsza idź do następnego i
  }

  alert( i ); // liczba pierwsza
}
```

Jest dużo miejsca na optymalizację. Na przykład, możemy szukać dzielników od `2` do pierwiastka kwadratowego `i`. Ale tak czy inaczej, jeśli chcemy być naprawdę wydajni w dużych odstępach czasu, musimy zmienić podejście i polegać na zaawansowanych matematykach i złożonych algorytmach, takich jak [Sito kwadratowe](https://pl.wikipedia.org/wiki/Sito_kwadratowe), [Ogólne sito ciała liczbowego](https://pl.wikipedia.org/wiki/GNFS) itd.
