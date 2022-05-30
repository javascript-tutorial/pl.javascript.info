importance: 5

---

# Obcinanie tekstu

Utwórz funkcję `truncate(str, maxlength)`, która sprawdza długość łańcucha `str` i jeśli przekracza `maxlength`, zamienia koniec `str` na `…`, tak aby jego długość była równa `maxlength`.

Wynik funkcji musi być tym samym ciągiem, jeśli obcięcie nie jest wymagane lub obciętym ciągiem, jeśli to konieczne.

Na przykład:

```js
truncate("Oto, co chciałbym powiedzieć na ten temat:", 20) = "Oto, co chciałbym p…"

truncate("Cześć wszystkim!", 20) = "Cześć wszystkim!"
```
