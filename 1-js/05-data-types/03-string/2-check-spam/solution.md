Aby wyszukiwanie działało bez względu na wielkość liter, przekonwertujemy cały łańcuch na małe litery, a następnie sprawdzimy, czy zawiera szukany ciąg znaków:

```js run demo
function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
```

