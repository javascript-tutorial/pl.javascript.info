
Oto wyjaśnienie.

1. Jest to zwykłe wywołanie metody obiektu.

2. Tak jak powyżej, nawiasy nie zmieniają tutaj kolejności wykonywania działań, kropka i tak ma pierwszeństwo.

3. Tutaj mamy bardziej złożone wywołanie `(expression).method()`. Wywołanie działa tutaj tak jakby było rozbite na dwie linijki kodu:

    ```js no-beautify
    f = obj.go; // przypisanie jako wartość zmiennej
    f();        // wywołanie stworzonej zmiennej
    ```

    `f()` jest tutaj wywoływane jako funkcja, bez `this`.

4. Podobna sytuacja jak w `(3)`, po lewej stronie od kropki `.` mamy wyrażenie.

Żeby wyjaśnić zachowanie `(3)` i `(4)` musimy przypomnieć sobie, że akcesory właściwości (kropki lub nawiasy kwadratowe) zwracają wartość Typu Referencji.

Każda inna operacja niż wywołanie metody (jak przypisanie `=` lub `||`) zmienia Typ Referencji na zwykłą wartość, która nie zawiera informacji pozwalającej ustalić wartości `this`.
