
Grawisy(backticks) dołączają wyrażenie wewnątrz `${...}` bezpośrednio do stringa.

```js run
let name = "Ilya";

// wyrażenie jest liczbą 1
alert( `hello ${1}` ); // hello 1

// wyrażenie jest stringiem "name"
alert( `hello ${"name"}` ); // hello name

// dołącz zmienną do stringa
alert( `hello ${name}` ); // hello Ilya
```
