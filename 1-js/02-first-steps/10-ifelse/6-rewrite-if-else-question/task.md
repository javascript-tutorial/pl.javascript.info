importance: 5

---

#  Przepisz instrukcję `if` na operator warunkowy '?

 Przepisz instrukcję `if` na używając wielokrotnego operatora warunkowego '?`.

Dla czytelności zalecamy podzielić kod na wiele linii.

```js
let message;

if (login == 'Pracownik') {
  message = 'Witaj';
} else if (login == 'Dyrektor') {
  message = 'Pozdrowienia';
} else if (login == '') {
  message = 'Brak loginu';
} else {
  message = '';
}
```
