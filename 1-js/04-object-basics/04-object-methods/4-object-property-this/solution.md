**Odpowiedź: błąd.**

Uruchom ten kod:
```js run
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // Error: Cannot read property 'name' of undefined
```

Jest to spowodowane tym, że reguły ustalające wartość `this` nie uwzględniają definicji obiektu. Znaczenie ma tylko moment wywołania.

Wartość `this` wewnątrz `makeUser()` jest `undefined`, ponieważ jest wywołana jako funkcja, a nie jako metoda wywołania za pomocą składni z "kropką"

Wartość `this` jest tu ustalonawyłącznie dla tej funkcji. Bloki kodu i obiekty nie są w tym przypadku brane pod uwagę.

Zatem `ref:this` jest równoznaczne z `this` funkcji.

Możemy napisać tę funkcję od nowa w taki sposób, że będzie zwracała takie samo `this` z wartością `undefined`:

```js run
function makeUser(){
  return this; // tym razem nie jest zwracany obiekt
}

alert( makeUser().name ); // Error: Cannot read property 'name' of undefined
```
Jak widzisz wynik `alert( makeUser().name )` jest taki sam jak wynik `alert( user.ref.name )` z poprzedniego przykładu.

A tutaj odwrotna sytuacja:

```js run
function makeUser() {
  return {
    name: "John",
*!*
    ref() {
      return this;
    }
*/!*
  };
};

let user = makeUser();

alert( user.ref().name ); // John
```

Teraz kod działa prawidłowo, ponieważ `user.ref()` jest metodą, a wartością `this` jest obiekt przed kropką `.`. 
