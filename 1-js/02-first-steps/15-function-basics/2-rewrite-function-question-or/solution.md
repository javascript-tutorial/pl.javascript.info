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

<<<<<<< HEAD:1-js/02-first-steps/14-function-basics/2-rewrite-function-question-or/solution.md
Zwróć uwagę że nawiasy wokół `age > 18` nie są tutaj wymagane. Są tutaj dla lepszej czytelności.
=======
Note that the parentheses around `age > 18` are not required here. They exist for better readability.
>>>>>>> 29216730a877be28d0a75a459676db6e7f5c4834:1-js/02-first-steps/15-function-basics/2-rewrite-function-question-or/solution.md
