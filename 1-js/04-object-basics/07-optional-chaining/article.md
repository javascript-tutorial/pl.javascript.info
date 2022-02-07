<<<<<<< HEAD
=======

>>>>>>> 71da17e5960f1c76aad0d04d21f10bc65318d3f6
# Optional chaining '?.'

[recent browser="new"]

<<<<<<< HEAD
Optional chaining `?.` pozwala nam w bezpieczny sposób odczytać zagłębione właściwości obiektu, nawet jeśli któraś z nich "po drodze" nie istnieje.

## Problem nieistniejącej właściwości

Jeśli dopiero zaczynasz czytać ten kurs i uczyć się JavaScriptu, być może nie doświadczyłeś jeszcze tego problemu, ale jest on dość powszechny.

Jako przykład załóżmy że mamy objekt `user` w którym trzymamy informacje o naszych użytkownikach.

Większość użytkowników posiada adres we właściwości `user.address`, wraz z nazwą ulicy `user.address.street`, lecz nie każdy użytkownik podał te dane.

W tym wypadku, gdy spróbujemy odczytać właściwość `user.address.street`, a użytkownik nie podał swojego adresu, otrzymujemy błąd:

```js run
let user = {}; // użytkownik bez właściwości "address"

alert(user.address.street); // Błąd!
```

Jest to oczekiwany rezultat. Tak działa JavaScript. Jeśli `user.address` jest równe `undefined`, próba odczytania `user.address.street` kończy się niepowodzeniem i błędem.

W wielu przypadkach wolelibyśmy otrzymać `undefined` zamiast błędu (co by znaczyło "brak ulicy").

...I kolejny przykład. W programowaniu webowym, możemy dostać objekt który odpowiada elementowi na stronie wywołując specjalną metodę, np. `document.querySelector('.elem')`, której wywołanie zwraca nam `null` jeśli element nie istnieje.

```js run
// document.querySelector('.elem') zwraca null jeśli element nie istnieje
let html = document.querySelector(".elem").innerHTML; // wyrzuca błąd jeśli null
```

Jeszcze raz, jeśli element nie istnieje, otrzymamy błąd próbując odczytać `.innerHTML` z `null`. W niektórych przypadkach, gdy brak elementu jest normalny, chcielibyśmy uniknąć błędu i po prostu zaakceptować `html = null` jako rezultat.

Jak możemy to zrobić?

Oczywistym rozwiązaniem jest sprawdzenie wartości przy użyciu instrukcji warunkowej `if` lub conditional operator `?` przed odczytaniem wartości, jak na przykładzie:
=======
The optional chaining `?.` is a safe way to access nested object properties, even if an intermediate property doesn't exist.

## The "non-existing property" problem

If you've just started to read the tutorial and learn JavaScript, maybe the problem hasn't touched you yet, but it's quite common.

As an example, let's say we have `user` objects that hold the information about our users.

Most of our users have addresses in `user.address` property, with the street `user.address.street`, but some did not provide them.

In such case, when we attempt to get `user.address.street`, and the user happens to be without an address, we get an error:

```js run
let user = {}; // a user without "address" property

alert(user.address.street); // Error!
```

That's the expected result. JavaScript works like this. As `user.address` is `undefined`, an attempt to get `user.address.street` fails with an error.

In many practical cases we'd prefer to get `undefined` instead of an error here (meaning "no street").

...and another example. In Web development, we can get an object that corresponds to a web page element using a special method call, such as `document.querySelector('.elem')`, and it returns `null` when there's no such element.

```js run
// document.querySelector('.elem') is null if there's no element
let html = document.querySelector('.elem').innerHTML; // error if it's null
```

Once again, if the element doesn't exist, we'll get an error accessing `.innerHTML` of `null`. And in some cases, when the absence of the element is normal, we'd like to avoid the error and just accept `html = null` as the result.

How can we do this?

The obvious solution would be to check the value using `if` or the conditional operator `?`, before accessing its property, like this:
>>>>>>> 71da17e5960f1c76aad0d04d21f10bc65318d3f6

```js
let user = {};

alert(user.address ? user.address.street : undefined);
```

<<<<<<< HEAD
Działa, nie otrzymujemy błędu... Lecz ten sposób jest mało elegancki. Jak możesz zobaczyć, `"user.address"` występuje w kodzie podwójnie. Dla bardziej zagłębionych właściwości, staje się to problemem ponieważ wymagana jest większa ilość powtórzeń.

Np. spróbujmy odczytać `user.address.street.name`.

Musimy sprawdzić `user.address` i `user.address.street`:

```js
let user = {}; // użytkownik nie posiada adresu

alert(user.address ? (user.address.street ? user.address.street.name : null) : null);
```

Wygląda to okropnie, można nawet mieć problemy ze zrozumieniem tego kodu.

Nawet nie próbuj, ponieważ istnieje lepszy sposób na napisanie tego, używając operatora `&&`:

```js run
let user = {}; // użytkownik nie posiada adresu

alert(user.address && user.address.street && user.address.street.name); // undefined (brak błędu)
```

Używanie operatora AND przez całą drogę do właściwości, upewnia się że wszystkie komponenty istnieją (jeśli nie, zatrzymuje wyrażenie), jednak to rozwiązanie też nie jest idealne.

Jak możesz zobaczyć, nazwy właściwości nadal występują w kodzie kilkukrotnie. Np. w kodzie powyżej, `user.address` występuje trzykrotnie.

Właśnie dlatego optional chaining `?.` został dodany do składni języka. By rozwiązać ten problem raz na zawsze!

## Optional chaining

Optional chaining `?.` zatrzymuje wyrażenie jeśli wartość poprzedzająca `?.` jest równa `undefined` lub `null` i zwraca `undefined`.

**W dalszej części artykułu, dla zwięzłości, powiemy że coś "istnieje" jeśli nie jest równe `null` ani `undefined`.**

Inaczej mówiąc, `value?.prop`:

- działa jak `value.prop`, jeśli `value` istnieje,
- w innym wypadku (gdy `value` jest równe `undefined/null`) zwraca `undefined`.

Tak wygląda bezpieczny sposób odczytania wartości `user.address.street` przy użyciu `?.`:

```js run
let user = {}; // użytkownik nie posiada adresu

alert(user?.address?.street); // undefined (brak błędu)
```

Kod jest zwięzły i czysty, nie występują żadne powtórzenia.

Odczytanie adresu jako `user?.address` działa nawet jeśli objekt `user` nie istnieje:
=======
It works, there's no error... But it's quite inelegant. As you can see, the `"user.address"` appears twice in the code. For more deeply nested properties, that becomes a problem as more repetitions are required.

E.g. let's try getting `user.address.street.name`.

We need to check both `user.address` and `user.address.street`:

```js
let user = {}; // user has no address

alert(user.address ? user.address.street ? user.address.street.name : null : null);
```

That's just awful, one may even have problems understanding such code.

Don't even care to, as there's a better way to write it, using the `&&` operator:

```js run
let user = {}; // user has no address

alert( user.address && user.address.street && user.address.street.name ); // undefined (no error)
```

AND'ing the whole path to the property ensures that all components exist (if not, the evaluation stops), but also isn't ideal.

As you can see, property names are still duplicated in the code. E.g. in the code above, `user.address` appears three times.

That's why the optional chaining `?.` was added to the language. To solve this problem once and for all!

## Optional chaining

The optional chaining `?.` stops the evaluation if the value before `?.` is `undefined` or `null` and returns `undefined`.

**Further in this article, for brevity, we'll be saying that something "exists" if it's not `null` and not `undefined`.**

In other words, `value?.prop`:
- works as `value.prop`, if `value` exists,
- otherwise (when `value` is `undefined/null`) it returns `undefined`.

Here's the safe way to access `user.address.street` using `?.`:

```js run
let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)
```

The code is short and clean, there's no duplication at all.

Reading the address with `user?.address` works even if `user` object doesn't exist:
>>>>>>> 71da17e5960f1c76aad0d04d21f10bc65318d3f6

```js run
let user = null;

<<<<<<< HEAD
alert(user?.address); // undefined
alert(user?.address.street); // undefined
```

Miej to na uwadze: składnia `?.` traktuje tylko wartość przed sobą jako opcjonalną, ale nie kolejne.

Np. w `user?.address.street.name` składnia `?.` pozwala wartości `user` być równą `null/undefined` (zwraca `undefined` w tym wypadku), ale to działa tylko dla właściwości `user`. Kolejne właściwości są odczytywane zwyczajnie. Jeśli chcemy by niektóre z nich były opcjonalne, wtedy musimy zamienić więcej `.` na `?.`.

```warn header="Nie nadużywaj składni optional chaining"
Powinniśmy używać `?.` tylko gdy coś może nie istnieć.

Jako przykład, jeśli zgodnie z naszą logiką kodowania objekt `user` musi istnieć, ale `address` jest opcjonalny, wtedy powinniśmy zapisać `user.address?.street`, ale nie `user?.address?.street`.

Więc, jeśli przez przypadek `user` nie będzie zdefiniowany, zobaczymy błąd i go naprawimy. W innym wypadku, błędy mogą zostać wyciszone gdy nie powinny, i staną się trudniejsze do naprawienia.
```

````warn header="Zmienna przed `?.`musi być zadeklarowana" Jeśli zmienna`user`nie istnieje, wtedy`user?.anything` wyrzuca błąd:

```js run
// ReferenceError: zmienna user nie jest zadeklarowana
user?.address;
```

Zmienna musi być zadeklarowana (np. `let/const/var user` lub jako parametr funkcji). Optional chaining działa tylko dla zadeklarowanych zmiennych.

`````

## Short-circuiting

Jak zostało powiedziane wcześniej, `?.` natychmiast zatrzymuje ("short-circuits") wykonanie jeśli rodzic po lewej nie istnieje.

Więc, jeśli występują jakieś dalsze wywołania funkcji lub efekty uboczne, nie zostaną one wykonane.

Na przykład:
=======
alert( user?.address ); // undefined
alert( user?.address.street ); // undefined
```

Please note: the `?.` syntax makes optional the value before it, but not any further.

E.g. in `user?.address.street.name` the `?.` allows `user` to safely be `null/undefined` (and returns `undefined` in that case), but that's only for `user`. Further properties are accessed in a regular way. If we want some of them to be optional, then we'll need to replace more `.` with `?.`.

```warn header="Don't overuse the optional chaining"
We should use `?.` only where it's ok that something doesn't exist.

For example, if according to our coding logic `user` object must exist, but `address` is optional, then we should write `user.address?.street`, but not `user?.address?.street`.

So, if `user` happens to be undefined due to a mistake, we'll see a programming error about it and fix it. Otherwise, coding errors can be silenced where not appropriate, and become more difficult to debug.
```

````warn header="The variable before `?.` must be declared"
If there's no variable `user` at all, then `user?.anything` triggers an error:

```js run
// ReferenceError: user is not defined
user?.address;
```
The variable must be declared (e.g. `let/const/var user` or as a function parameter). The optional chaining works only for declared variables.
````

## Short-circuiting

As it was said before, the `?.` immediately stops ("short-circuits") the evaluation if the left part doesn't exist.

So, if there are any further function calls or side effects, they don't occur.

For instance:
>>>>>>> 71da17e5960f1c76aad0d04d21f10bc65318d3f6

```js run
let user = null;
let x = 0;

<<<<<<< HEAD
user?.sayHi(x++); // brak "sayHi", więc x++ nie zostanie wykonane

alert(x); // 0, wartość nie została zwiększona
```

## Inne warianty: ?.(), ?.[]

Optional chaining `?.` nie jest operatorem, lecz specjalnym znakiem składni, który działa również z funkcjami i nawiasami kwadratowymi.

Na przykład, `?.()` jest używane do wywołania funkcji która może nie istnieć.

W kodzie poniżej, niektórzy z naszych użytkowników posiadają metodę `admin`, a niektórzy nie:
=======
user?.sayHi(x++); // no "sayHi", so the execution doesn't reach x++

alert(x); // 0, value not incremented
```

## Other variants: ?.(), ?.[]

The optional chaining `?.` is not an operator, but a special syntax construct, that also works with functions and square brackets.

For example, `?.()` is used to call a function that may not exist.

In the code below, some of our users have `admin` method, and some don't:
>>>>>>> 71da17e5960f1c76aad0d04d21f10bc65318d3f6

```js run
let userAdmin = {
  admin() {
<<<<<<< HEAD
    alert("Jestem administratorem");
=======
    alert("I am admin");
>>>>>>> 71da17e5960f1c76aad0d04d21f10bc65318d3f6
  }
};

let userGuest = {};

*!*
<<<<<<< HEAD
userAdmin.admin?.(); // Jestem administratorem
*/!*

*!*
userGuest.admin?.(); // nic (brak metody)
*/!*
```

W tym wypadku, w obu liniach najpierw użyliśmy kropki (`userAdmin.admin`) aby odczytać wartość `admin`, ponieważ zakładamy że objekt użytkownika istnieje, więc bezpiecznie jest odczytać z niego wartość.

Następnie `?.()` sprawdza lewą część: jeśli funkcja admin istnieje, wtedy zostaje wywołana (tak się dzieje w przypadku `userAdmin`). W innym wypadku (dla `userGuest`) wywołanie zatrzymuje się bez błędów.

Składnia `?.[]` również działa, jeśli chcielibyśmy użyć nawiasów kwadratowych `[]` aby odczytać właściwości zamiast kropki `.`. Podobnie do poprzednich przykładów, pozwala to w bezpieczny sposób odczytać wartość z objektu który może nie istnieć.
=======
userAdmin.admin?.(); // I am admin
*/!*

*!*
userGuest.admin?.(); // nothing (no such method)
*/!*
```

Here, in both lines we first use the dot (`userAdmin.admin`) to get `admin` property, because we assume that the user object exists, so it's safe read from it.

Then `?.()` checks the left part: if the admin function exists, then it runs (that's so for `userAdmin`). Otherwise (for `userGuest`) the evaluation stops without errors.

The `?.[]` syntax also works, if we'd like to use brackets `[]` to access properties instead of dot `.`. Similar to previous cases, it allows to safely read a property from an object that may not exist.
>>>>>>> 71da17e5960f1c76aad0d04d21f10bc65318d3f6

```js run
let key = "firstName";

let user1 = {
  firstName: "John"
};

<<<<<<< HEAD
let user2 = null;
=======
let user2 = null; 
>>>>>>> 71da17e5960f1c76aad0d04d21f10bc65318d3f6

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined
```

<<<<<<< HEAD
Możemy również użyć `?.` w połączeniu z `delete`:

```js run
delete user?.name; // usuń user.name jeśli user istnieje
```

````warn header="Możemy użyć `?.` aby bezpiecznie odczytywać i usuwać, ale nie przypisywać"
Optional chaining `?.` nie ma zastosowania po lewej stronie przypisania.
=======
Also we can use `?.` with `delete`:

```js run
delete user?.name; // delete user.name if user exists
```

````warn header="We can use `?.` for safe reading and deleting, but not writing"
The optional chaining `?.` has no use at the left side of an assignment.
>>>>>>> 71da17e5960f1c76aad0d04d21f10bc65318d3f6

For example:
```js run
let user = null;

<<<<<<< HEAD
user?.name = "John"; // Błąd, nie działa
// ponieważ jest to równoważne do undefined = "John"
```

Nie jest to na tyle zaawansowane.
`````

## Podsumowanie

Składnia optional chaining `?.` ma trzy formy:

1. `obj?.prop` -- zwraca `obj.prop` jeśli `obj` istnieje, w innym wypadku `undefined`.
2. `obj?.[prop]` -- zwraca `obj[prop]` jeśli `obj` istnieje, w innym wypadku `undefined`.
3. `obj.method?.()` -- wywołuje `obj.method()` jeśli `obj.method` istnieje, w innym wypadku zwraca `undefined`.

Jak możemy zauważyć, wszystkie z nich są przystępne i proste w użyciu. Składnia `?.` sprawdza lewą część czy jest równa `null/undefined` i zezwala na wykonanie jeśli nie jest.

Ciąg `?.` pozwala w bezpieczny sposób uzyskać dostęp do zagnieżdzonych właściwości.

Mimo wszystko, powinniśmy używać `?.` ostrożnie, tylko gdy akceptujemy to że lewa strona może nie istnieć. Tak aby wszelkie błędy nie zostały przed nami ukryte, jeśli już wystąpią.
=======
user?.name = "John"; // Error, doesn't work
// because it evaluates to undefined = "John"
```

It's just not that smart.
````

## Summary

The optional chaining `?.` syntax has three forms:

1. `obj?.prop` -- returns `obj.prop` if `obj` exists, otherwise `undefined`.
2. `obj?.[prop]` -- returns `obj[prop]` if `obj` exists, otherwise `undefined`.
3. `obj.method?.()` -- calls `obj.method()` if `obj.method` exists, otherwise returns `undefined`.

As we can see, all of them are straightforward and simple to use. The `?.` checks the left part for `null/undefined` and allows the evaluation to proceed if it's not so.

A chain of `?.` allows to safely access nested properties.

Still, we should apply `?.` carefully, only where it's acceptable that the left part doesn't exist. So that it won't hide programming errors from us, if they occur.
>>>>>>> 71da17e5960f1c76aad0d04d21f10bc65318d3f6
