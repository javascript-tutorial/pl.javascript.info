# Optional chaining '?.'

[recent browser="new"]

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

```js
let user = {};

alert(user.address ? user.address.street : undefined);
```

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

```js run
let user = null;

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

```js run
let user = null;
let x = 0;

user?.sayHi(x++); // brak "sayHi", więc x++ nie zostanie wykonane

alert(x); // 0, wartość nie została zwiększona
```

## Inne warianty: ?.(), ?.[]

Optional chaining `?.` nie jest operatorem, lecz specjalnym znakiem składni, który działa również z funkcjami i nawiasami kwadratowymi.

Na przykład, `?.()` jest używane do wywołania funkcji która może nie istnieć.

W kodzie poniżej, niektórzy z naszych użytkowników posiadają metodę `admin`, a niektórzy nie:

```js run
let userAdmin = {
  admin() {
    alert("Jestem administratorem");
  }
};

let userGuest = {};

*!*
userAdmin.admin?.(); // Jestem administratorem
*/!*

*!*
userGuest.admin?.(); // nic (brak metody)
*/!*
```

W tym wypadku, w obu liniach najpierw użyliśmy kropki (`userAdmin.admin`) aby odczytać wartość `admin`, ponieważ zakładamy że objekt użytkownika istnieje, więc bezpiecznie jest odczytać z niego wartość.

Następnie `?.()` sprawdza lewą część: jeśli funkcja admin istnieje, wtedy zostaje wywołana (tak się dzieje w przypadku `userAdmin`). W innym wypadku (dla `userGuest`) wywołanie zatrzymuje się bez błędów.

Składnia `?.[]` również działa, jeśli chcielibyśmy użyć nawiasów kwadratowych `[]` aby odczytać właściwości zamiast kropki `.`. Podobnie do poprzednich przykładów, pozwala to w bezpieczny sposób odczytać wartość z objektu który może nie istnieć.

```js run
let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined
```

Możemy również użyć `?.` w połączeniu z `delete`:

```js run
delete user?.name; // usuń user.name jeśli user istnieje
```

````warn header="Możemy użyć `?.` aby bezpiecznie odczytywać i usuwać, ale nie przypisywać"
Optional chaining `?.` nie ma zastosowania po lewej stronie przypisania.

For example:
```js run
let user = null;

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
