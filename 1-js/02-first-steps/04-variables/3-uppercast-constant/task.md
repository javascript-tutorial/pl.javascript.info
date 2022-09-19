importance: 4

---

# Stała zapisana wielkimi literami?

Zbadaj poniższy kod:

```js
const birthday = '18.04.1982';

const age = someCode(birthday);
```

Mamy tutaj stałą datę urodzenia `birthday` oraz wiek `age`, który jest obliczany na podstawie `birthday` za pomocą jakiegoś kodu (który nie jest podany dla uproszczenia, ponieważ szczegóły nie są tutaj istotne).

Czy byłoby poprawne użycie wielkich liter dla `birthday`? Albo dla `age`? A może nawet dla obydwóch zmiennych?

```js
const BIRTHDAY = '18.04.1982'; // wielkimi literami?

const AGE = someCode(BIRTHDAY); // wielkimi literami?
```

