Rozwiązanie z wykorzystaniem `if`:

```js
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
```

Rozwiązanie z wykorzystaniem operatora warunkowego `'?'`:

```js
function min(a, b) {
  return a < b ? a : b;
}
```

P.S. W przypadku równości `a == b` nie ma znaczenia co zostanie zwrócone.