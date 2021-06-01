importance: 2

---

# Łączenie

Mamy tutaj obiekt `ladder` który pozwala wspinać się do góry i schodzić w dół:

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

Jeśli chcielibyśmy wykonać sekwencję ruchów, możemy zrobić to w ten sposób:

```js
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
```

Zmodyfkuj kod dla `up`, `down` i `showStep` żeby można było połączyć wywołania metod, w taki sposób:

```js
ladder.up().up().down().showStep(); // 1
```

Wiele bibliotek JavaScript wykorzystuje taki sposób pisania kodu.
