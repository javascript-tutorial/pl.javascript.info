ważność: 4

---

# Przepisz funkcję używając '?' lub '||'

Następująca funkcja zwraca `true` jeżeli parametr `age` jest większy niż `18`.

W przeciwnym razie prosi o potwierdzenie i zwraca wynik.

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Czy rodzice ci pozwolili?');
  }
}
```

Przepisz ją, aby zachowywała się tak samo, ale bez `if`, w żadnej z lini.

Stwórz dwa warianty `checkAge`:

1. Przy użyciu operatora warunkowego `?`
2. Używając logicznego OR `||`
