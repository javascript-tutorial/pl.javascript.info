importance: 4

---

# Stała z wielkich liter?

Zbadaj poniższy kod:

```js
const birthday = '18.04.1982';

const age = someCode(birthday);
```

Mamy tutaj stałą datę `birthday` oraz `age`, który jest obliczany na podstawie `birthday` za pomocą jakiegoś kodu (który nie jest podany dla uproszczenia i ponieważ szczegóły nie są tutaj istotne).

Czy byłoby poprawne użycie wielkich liter dla `birthday`? Dla `age`? Czy może nawet dla dwóch?

```js
const BIRTHDAY = '18.04.1982'; // z wielkich liter?

const AGE = someCode(BIRTHDAY); // z wielkich liter?
```

