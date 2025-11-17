importance: 4

---

# Czy "else" jest wymagane?

Następująca funkcja zwraca `true` jeżeli parametr `age` jest większy niż `18`.

W przeciwnym razie prosi o potwierdzenie i zwraca wynik:

```js
function checkAge(age) {
  if (age > 18) {
    return true;
*!*
  } else {
    // ...
    return confirm('Czy rodzice ci pozwolili?');
  }
*/!*
}
```

Czy funkcja będzie działać inaczej jeżeli `else` zostanie usunięte?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
*!*
  // ...
  return confirm('Czy rodzice ci pozwolili?');
*/!*
}
```

Czy jest jakakolwiek różnica w zachowaniu tych dwóch wariantów?
