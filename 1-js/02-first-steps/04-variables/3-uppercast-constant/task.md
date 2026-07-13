importance: 4

---

# Stała zapisana wielkimi literami?

Zbadaj poniższy kod:

```js
const birthday = '18.04.1982';

const age = someCode(birthday);
```

<<<<<<< HEAD
Mamy tutaj stałą datę urodzenia `birthday` oraz wiek `age`, który jest obliczany na podstawie `birthday` za pomocą jakiegoś kodu (który nie jest podany dla uproszczenia, ponieważ szczegóły nie są tutaj istotne).
=======
Here we have a constant `birthday` for the date, and also the `age` constant.

The `age` is calculated from `birthday` using `someCode()`, which means a function call that we didn't explain yet (we will soon!), but the details don't matter here, the point is that `age` is calculated somehow based on the `birthday`.
>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf

Czy byłoby poprawne użycie wielkich liter dla `birthday`? Albo dla `age`? A może nawet dla obydwóch zmiennych?

```js
<<<<<<< HEAD
const BIRTHDAY = '18.04.1982'; // wielkimi literami?

const AGE = someCode(BIRTHDAY); // wielkimi literami?
=======
const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

const AGE = someCode(BIRTHDAY); // make age uppercase?
>>>>>>> 52c1e61915bc8970a950a3f59bd845827e49b4bf
```
