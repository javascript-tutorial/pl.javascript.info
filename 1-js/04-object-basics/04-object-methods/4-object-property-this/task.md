importance: 5

---

# "this" w literałach obiektowych

Poniższa funkcja `makeUser` zwraca obiekt. 

Jaki będzie rezultat dostępu do jego `ref` ? I dlaczego?

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

