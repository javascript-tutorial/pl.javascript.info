

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

1. Oczywiście true.
2. Porównanie słownikowe, dlatego zwróci false. `"a"` jest mniejsze niż `"p"`
3. Ponownie porównanie słownikowe, pierwszy znak `"2"` jest większy niż pierwszy znak drugiego stringu `"1"`.
4. Wartości `null` i `undefined` są równe tylko ze sobą.
5. Ścisła porównanie jest rygorystyczne. Obie wartości mają rózne typy, stąd `false`.
6. Podobnie, jak w `(4)`, `null` i `undefined` są równe tylko ze sobą.
7. Ścisłe porównanie róznych typów.
