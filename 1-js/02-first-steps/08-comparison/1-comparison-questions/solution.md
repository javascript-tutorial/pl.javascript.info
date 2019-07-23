

```js no-beautify
5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true 
undefined == null → true 
undefined === null → false 
null == "\n0\n" → false
null === +"\n0\n" → false 
```

Wytłumaczenie rozwiązania:

1. Oczywiste. true.
2. Porównanie słownikowe, dlatego zwróci false.
3. Znowu, porównanie słownikowe, pierwszy znak `"2"` jest większy niż pierwszy znak drugiego stringu `"1"`.
4. Wartości `null` i `undefined` są równe tylko ze sobą.
5. Porównanie identyczności jest ścisłe. Obie wartości mają inne typy.
6. Patrz (4).
7. Operator identyczności dla różnych typów.
