**Błąd**!

Sprawdź ten kod:

```js run
let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)() // błąd!
```
W większości przeglądarek wiadomość o błędzie nie zawiera zbyt wielu szczegółów mówiących co poszło nie tak.

**Błąd wystąpił ponieważ nie ma średnika po `user = {...}`.**

JavaScript nie wstawia automatycznie średnika przed nawiasem `(user.go)()`, więc czyta kod w ten sposób:'

```js no-beautify
let user = { go:... }(user.go)()
```

Teraz widzimy, że taka składnia jest w zasadzie wywołaniem obiektu  `{ go: ... }` jako funkcji z argumentem `(user.go)`. W dodatku wywołanie to znajduje się w tej samej linijce co `let user`, więc obiekt `user` nie został jeszcze nawet zdefiniowany, dlatego pojawia się błąd.

Jeśli wstawimy średnik, kod będzie działać:

```js run
let user = {
  name: "John",
  go: function() { alert(this.name) }
}*!*;*/!*

(user.go)() // John
```

Miej na uwadze, że nawiasy wokół `(user.go)` nie mają tu żadnego znaczenia. Zazwyczaj służą do zachowania kolejności wykonywania działań, jednak w tym przypadku kropka `.` i tak ma pierwszeństwo. Jedynie średnik jest tu niezbędny. 
