Zadanie pokazuje, w jaki sposób formy postfix/prefix mogą prowadzić do różnych wyników w przypadku ich wykorzystania w porównaniach.

1. **Od 1 do 4**

    ```js run
    let i = 0;
    while (++i < 5) alert( i );
    ```

    Pierwszą wartością jest `i = 1`, ponieważ `++i` najpierw powiększy `i`, a następnie zwraca nową wartość. Tak więc pierwsze porównanie jest `1 < 5`, a `alert` pokazuje `1`.

    Następnie podążając `2, 3, 4...` -- wartości pojawiają się jedna po drugiej. Porównanie zawsze używa zwiększonej wartości, ponieważ `++` jest przed zmienną.

    W końcu, `i = 4` jest zwiększone do `5`, porównanie `while(5 < 5)` zawodzi, a pętla się zatrzymuje. Tak więc `5` nie jest pokazane.
2. **Od 1 do 5**

    ```js run
    let i = 0;
    while (i++ < 5) alert( i );
    ```

    Pierwszą wartością jest ponownie `i = 1`. Przyrostkowa forma `i++` zwiększa `i`, a następnie zwraca *starą* wartość, więc porównanie `i++ < 5` użyje `i = 0` (w przeciwieństwie do `++i < 5`).

    Ale zawołanie `alert` jest osobne. Jest to kolejna stwierdzenie, która wykonuje się po inkrementacji i porównaniu. Więc dostaje bieżący `i = 1`.

    Potem kolejno `2, 3, 4…`

    Zatrzymajmy się na `i = 4`. Forma prefiksu `++i` zwiększyłaby go i użyła `5` w porównaniu. Ale tutaj mamy formę przyrostkową `i++`. Zwiększa więc `i` do `5`, ale zwraca starą wartość. Stąd porównanie `while(4 < 5)` jest prawdziwe, a kontrola przechodzi do `alert`.

    Wartość `i = 5` jest ostatnią, ponieważ w następnym kroku `while(5 < 5)` jest fałszywe.
