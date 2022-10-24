importance: 5

---

# "this" w obiektach

Poniższa funkcja `makeUser` zwraca obiekt. 

Jaki będzie rezultat dostępu do jego `ref`? I dlaczego?

```js
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // Jaki będzie wynik?
```

