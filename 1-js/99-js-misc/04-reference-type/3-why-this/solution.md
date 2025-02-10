
Oto wyjaśnienie.

1. Jest to zwykłe wywołanie metody obiektu.

<<<<<<< HEAD:1-js/04-object-basics/04-object-methods/3-why-this/solution.md
2. Tak jak powyżej, nawiasy nie zmieniają tutaj kolejności wykonywania działań, kropka i tak ma pierwszeństwo.

3. Tutaj mamy bardziej złożone wywołanie `(expression).method()`. Wywołanie działa tutaj tak jakby było rozbite na dwie linijki kodu:
=======
2. The same, parentheses do not change the order of operations here, the dot is first anyway.

3. Here we have a more complex call `(expression)()`. The call works as if it were split into two lines:
>>>>>>> 6236eb8c3cdde729dab761a1d0967a88a1a6197e:1-js/99-js-misc/04-reference-type/3-why-this/solution.md

    ```js no-beautify
    f = obj.go; // przypisanie jako wartość zmiennej
    f();        // wywołanie stworzonej zmiennej
    ```

    `f()` jest tutaj wywoływane jako funkcja, bez `this`.

<<<<<<< HEAD:1-js/04-object-basics/04-object-methods/3-why-this/solution.md
4. Podobna sytuacja jak w `(3)`, po lewej stronie od kropki `.` mamy wyrażenie.
=======
4. The similar thing as `(3)`, to the left of the parentheses `()` we have an expression.
>>>>>>> 6236eb8c3cdde729dab761a1d0967a88a1a6197e:1-js/99-js-misc/04-reference-type/3-why-this/solution.md

Żeby wyjaśnić zachowanie `(3)` i `(4)` musimy przypomnieć sobie, że akcesory właściwości (kropki lub nawiasy kwadratowe) zwracają wartość Typu Referencji.

Każda inna operacja niż wywołanie metody (jak przypisanie `=` lub `||`) zmienia Typ Referencji na zwykłą wartość, która nie zawiera informacji pozwalającej ustalić wartości `this`.
