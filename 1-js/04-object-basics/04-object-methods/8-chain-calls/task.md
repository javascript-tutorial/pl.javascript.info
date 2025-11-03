importance: 2

---

# Łączenie

<<<<<<< HEAD
Mamy tutaj obiekt `ladder` który pozwala wspinać się do góry i schodzić w dół:
=======
There's a `ladder` object that allows you to go up and down:
>>>>>>> 51bc6d3cdc16b6eb79cb88820a58c4f037f3bf19

```js
let ladder = {
  step: 0,
  up() { 
    this.step++;
  },
  down() { 
    this.step--;
  },
  showStep: function() { // pokazuje aktualną wartość step
    alert( this.step );
  }
};
```

<<<<<<< HEAD
Jeśli chcielibyśmy wykonać sekwencję ruchów, możemy zrobić to w ten sposób:
=======
Now, if we need to make several calls in sequence, we can do it like this:
>>>>>>> 51bc6d3cdc16b6eb79cb88820a58c4f037f3bf19

```js
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
```

<<<<<<< HEAD
Zmodyfkuj kod dla `up`, `down` i `showStep` żeby można było połączyć wywołania metod, w taki sposób:
=======
Modify the code of `up`, `down`, and `showStep` to make the calls chainable, like this:
>>>>>>> 51bc6d3cdc16b6eb79cb88820a58c4f037f3bf19

```js
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
```

<<<<<<< HEAD
Wiele bibliotek JavaScript wykorzystuje taki sposób pisania kodu.
=======
Such an approach is widely used across JavaScript libraries.
>>>>>>> 51bc6d3cdc16b6eb79cb88820a58c4f037f3bf19
