
```js no-beautify
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
" -9  " + 5 = " -9  5" // (3)
" -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)
```

1. Dodawanie ciągu znaków `"" + 1` rzutuje `1` do typu tekstowego: `"" + 1 = "1"`, a później analogicznie `"1" + 0`.
2. Odejmowanie `-` (jak większość operacji matematycznych) działa wyłącznie z typami liczbowymi i konwertuje pusty napis `""` do `0`.
3. Dodawanie ciągu znaków dołącza (konkatenuje) liczbę `5` do zmiennej.
4. Odejmowanie zawsze rzutuje wartości do liczby, zatem konwertuje `"  -9  "` na liczbę `-9` (ignoruje spacje dookoła).
5. `null` rzutowany na liczbę stanie się `0`.
6. `undefined` rzutowany na liczbę stanie się `NaN`.
7. Podczas rzutowania typu tekstowego na liczbowy ignorowane są białe znaki po obydwóch stronach tekstu. W tym przypadku cały tekst składa się z białych znaków: `\t`, `\n` i "zwykłych" spacji pomiędzy nimi. W rezultacie powstały pusty ciąg znaków po rzutowaniu na liczbę da wartość `0`.
