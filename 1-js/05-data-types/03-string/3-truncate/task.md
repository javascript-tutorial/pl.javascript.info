importance: 5

---

# Obcinanie tekstu

Utwórz funkcję `truncate(str, maxlength)`, która sprawdza długość łańcucha `str` i jeśli przekracza `maxlength`, zamienia koniec `str` na `…`, tak aby jego długość była równa `maxlength`.

Wynik funkcji musi być tym samym ciągiem, jeśli obcięcie nie jest wymagane lub obciętym ciągiem, jeśli to konieczne.

Na przykład:

```js
<<<<<<< HEAD
truncate("Oto, co chciałbym powiedzieć na ten temat:", 20) = "Oto, co chciałbym p…"

truncate("Cześć wszystkim!", 20) = "Cześć wszystkim!"
=======
truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"

truncate("Hi everyone!", 20) == "Hi everyone!"
>>>>>>> 34a80e70f8cce5794be259d25f815d7a7db7cbe3
```
