Rozwiązaniem jest zwracanie obiektu z każdej funkcji.

```js run demo
let ladder = {
  step: 0,
  up() {
    this.step++;
*!*
    return this;
*/!*
  },
  down() {
    this.step--;
*!*
    return this;
*/!*
  },
  showStep() {
    alert( this.step );
*!*
    return this;
*/!*
  }
}

ladder.up().up().down().up().down().showStep(); // 1
```

Przy długich łańcuchach kodu, możemy każdy człon umieszczać w osobnej linijce, dla zwiększenia czytelności:

```js
ladder
  .up()
  .up()
  .down()
  .up()
  .down()
  .showStep(); // 1
```
