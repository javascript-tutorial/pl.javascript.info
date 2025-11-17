

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

<<<<<<< HEAD:1-js/02-first-steps/08-comparison/1-comparison-questions/solution.md
1. Oczywiście true.
2. Porównanie słownikowe, dlatego zwróci false. `"a"` jest mniejsze niż `"p"`
3. Ponownie porównanie słownikowe, pierwszy znak `"2"` jest większy niż pierwszy znak drugiego stringu `"1"`.
4. Wartości `null` i `undefined` są równe tylko ze sobą.
5. Ścisła porównanie jest rygorystyczne. Obie wartości mają rózne typy, stąd `false`.
6. Podobnie, jak w `(4)`, `null` i `undefined` są równe tylko ze sobą.
7. Ścisłe porównanie róznych typów.
=======
1. Obviously, true.
2. Dictionary comparison, hence false. `"a"` is smaller than `"p"`.
3. Again, dictionary comparison, first char `"2"` is greater than the first char `"1"`.
4. Values `null` and `undefined` equal each other only.
5. Strict equality is strict. Different types from both sides lead to false.
6. Similar to `(4)`, `null` only equals `undefined`.
7. Strict equality of different types.
>>>>>>> 5e893cffce8e2346d4e50926d5148c70af172533:1-js/02-first-steps/09-comparison/1-comparison-questions/solution.md
