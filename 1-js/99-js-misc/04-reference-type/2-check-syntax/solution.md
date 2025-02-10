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

<<<<<<< HEAD:1-js/04-object-basics/04-object-methods/2-check-syntax/solution.md
Miej na uwadze, że nawiasy wokół `(user.go)` nie mają tu żadnego znaczenia. Zazwyczaj służą do zachowania kolejności wykonywania działań, jednak w tym przypadku kropka `.` i tak ma pierwszeństwo. Jedynie średnik jest tu niezbędny. 
=======
Please note that parentheses around `(user.go)` do nothing here. Usually they setup the order of operations, but here the dot `.` works first anyway, so there's no effect. Only the semicolon thing matters.
>>>>>>> 6236eb8c3cdde729dab761a1d0967a88a1a6197e:1-js/99-js-misc/04-reference-type/2-check-syntax/solution.md
