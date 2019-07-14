
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

1. Dodawanie stringa `"" + 1` konwertuje `1` do stringa: `"" + 1 = "1"` i wtedy mamy zastosowane `"1" + 0`.
2. Odejmowanie `-` (jak większość matematycznych operacji) działa wyłącznie z typami liczbowymi i konwertuje pusty string `""` do `0`.
3. Dodawanie stringa dołącza liczbę `5` do tego stringa.
4. Odejmowanie zawsze konwertuje do liczby, zatem konwertuje `"  -9  "` na typ number `-9` (ignoruje spacje dookoła).
5. `null` stanie się `0` po konwersji na liczbę.
6. `undefined` stanie się `NaN` po konwersji na liczbę.
7. Space characters, are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as `\t`, `\n` and a "regular" space between them. So, similarly to an empty string, it becomes `0`.
