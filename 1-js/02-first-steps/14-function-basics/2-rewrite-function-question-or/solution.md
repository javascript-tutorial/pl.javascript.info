Przy użyciu operatora warunkowego `'?'`:

```js
function checkAge(age) {
  return (age > 18) ? true : confirm('Czy rodzice ci pozwolili?');
}
```

Używając logicznego OR `||` (krótszy wariant):

```js
function checkAge(age) {
  return (age > 18) || confirm('Czy rodzice ci pozwolili?');
}
```

Zwróć uwagę że nawiasy wokół `age > 18` nie są tutaj wymagane. Są tutaj dla lepszej czytelności.
