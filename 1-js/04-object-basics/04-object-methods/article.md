# Metody obiektów, "this"

Obiekty zazwyczaj są tworzone po to, żeby przedstawiać rzeczywiste podmioty, takie jak użytkownicy, zadania do wykonania i tym podobne: 

```js
let user = {
  name: "John",
  age: 30
};
```

I tak jak w rzeczywistości, użytkownik może *działać*: wybrać coś z koszyka, zalogować się, wylogować itd.

Czynności są w JavaScript'cie funkcjami we właściwościach obiektu.

## Przykłady metod

Na początek, nauczmy użytkownika `user` jak się przywitać:

```js run
let user = {
  name: "John",
  age: 30
};

*!*
user.sayHi = function() {
  alert("Cześć!");
};
*/!*

user.sayHi(); // Cześć!
```

Właśnie użyliśmy Wyrażenia Funkcji do stworzenia funkcji i przypisaliśmy ją do właściwości `user.sayHi` obiektu.

Następnie ją wywołaliśmy. Użytkownik potrafi teraz mówić!

Funkcja która jest właściwością obiektu nazywamy *metodą*.

Także mamy tutaj metodę `sayHi` obiektu `user`.

Oczywiście moglibyśmy również posłużyć się wcześniej zadeklarowaną funkcją jako metodą: 

```js run
let user = {
  // ...
};

*!*
// najpierw deklarujemy
function sayHi() {
  alert("Cześć!");
};

// następnie dodajemy jako metodę
user.sayHi = sayHi;
*/!*

user.sayHi(); // Cześć!
```

```smart header="Object-oriented programming"
Kiedy piszemy kod wykorzystujący obiekty do reprezentowania podmiotów, nazywamy to [programowaniem obiektowym](https://pl.wikipedia.org/wiki/Programowanie_obiektowe), w skrócie:
"OOP".

OOP to bardzo rozległy i interesujący temat. Jak wybrać właściwe podmioty? Jak stworzyć zależności między nimi? Jest to cała architektura i istnieje wiele świetnych książek traktujących ten temat, jak np. "Wzorce projektowe. Elementy oprogramowania" autorstwa E.Gamma, R.Helm, R.Johnson, J.Vissides, lub  "Object-Oriented Analysis and Design with Applications" G.Booch, i wiele innych
```
### Skróty dla metod

Istnieje skrócona składnia dla metod w literałach obiektowych:

```js
// te obiekty działają tak samo

user = {
  sayHi: function() {
    alert("Cześć");
  }
};

// skrócona składnia wygląda lepiej, prawda ? 
user = {
*!*
  sayHi() { // to samo co "sayHi: function()"
*/!*
    alert("Cześć");
  }
};
```

Jak wyżej, możemy pominąć `"function"` i po prostu użyć `sayHi()`.

Szczerze mowiąc, oba zapisy nie są całkowicie identyczne. Istnieją subtelne różnice między nimi, związane z dziedziczeniem (ten temat poruszymy później), ale na tem moment nie ma to znaczenia. W prawie każdym przypadku lepiej użyć skróconej wersji.

## "this" w metodach

Często się zdarza, że metoda obiektu do poprawnego działania potrzebuje dostępu do informacji zawartej w tym samym obiekcie

DLa przykładu, kod wewnątrz `user.sayHi()` może wymagać imienia użytkownika `user`.

**Aby zdobyć taki dostęp, metoda może wykorzystać słowo kluczowe `this`**

Wartością `this` jest obiekt "przed kropką", który został wykorzystany do wywołania metody.

Na przykład:

```js run
let user = {
  name: "John",
  age: 30,

  sayHi() {
*!*
    // "this" jest "aktualnym obiektem"
    alert(this.name);
*/!*
  }

};

user.sayHi(); // John
```

Podczas wykonania `user.sayHi()`, wartością `this` będzie `user`.

Możliwe jest również uzyskanie dostępu do obiektu bez używania `this`, przez odwołąnie się do niego przez zmienną z zewnątrz:

```js run
let user = {
  name: "John",
  age: 30,

  sayHi() {
*!*
    alert(user.name); // "user" zamiast "this"
*/!*
  }

};
```

...Jednak na takim kodzie nie można polegać. Jeśli skopiujemy obiekt `user` do innej zmiennej, np `admin = user` i zmienimy wartości w zmiennej `user`, wtedy nasza metoda będzie się odwoływać do niewłaściwego obiektu.

Taki przykład przedstawiono poniżej:

```js run
let user = {
  name: "John",
  age: 30,

  sayHi() {
*!*
    alert( user.name ); // pojawi się błąd
*/!*
  }

};


let admin = user;
user = null; // dla pewności nadpisujemy zmienną

admin.sayHi(); // Ups! wewnątrz sayHi(), wykorzystywana jest zła zmienna! Błąd!
```

Jeśli użylibyśmy `this.name` zamiast `user.name` wewnątrz `alert`, wtedy kod by zadziałał.

## "this" nie jest powiązane

W JavaScript słowo kluczowe `this` zachowuje się inaczej niż w innych językach programowania. Może być użyte w każdej funkcji.

Zapis taki jak w poniższym przykładzie nie powoduje błędu:

```js
function sayHi() {
  alert( *!*this*/!*.name );
}
```

Wartość `this` jest określana podczas wykonywania kodu, zależnie od kontekstu. 

Na przykład tutaj ta sama funkcja jest przypisana do dwóch różnych obiektów i posiada różne "this" przy wywoływaniach:

```js run
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

*!*
// używamy tej samej funkcji w obu obiektach
user.f = sayHi;
admin.f = sayHi;
*/!*

// wywołania mają różne this
// "this" wewnątrz funkcji jest obiektem "przed kropką"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (kropka lub nawiasy kwadratowe udzielają dostępu do metody)
```

Zasada jest prosta: jeśli `obj.f()` jest wywołana, to `this` jest `obj` podczas wywoływania `f`. Więc w powyższym przykładzie jest to zarówno `user` lub `admin`.


````smart header="Calling without an object: `this` == undefined"
Możemy wywołać tę funkcję nawet bez obiektu:

```js run
function sayHi() {
  alert(this);
}

sayHi(); // undefined
```

W tym przypadku `this` jest `undefined` w trybie ścisłym. Jeśli spróbujemy uzyskać dostęp do `this.name` pojawi się błąd.

Poza trybem ścisłym, w tym przypadku, wartością `this` będzie *obiekt globalny* (`window` w przeglądarce, dojdziemy do tego w późniejszym rozdziale [](info:global-object)). Jest to zamierzchłe zachowanie, które tryb `"use strict"` naprawia.

Zazwyczaj takie wywołanie jest błędem w kodzie. Jeśli w funkcji istnieje `this`, to powinna zostać wywołana jako metoda obiektu.
````


```smart header="The consequences of unbound `this`"
Jeśli programujesz w innym języku, zapewne przywykłeś do "powiązanego this", gdzie metoda zdefiniowana w obiekcie zawsze posiada `this` wskazujące na ten obiekt.

W JavaScript `this` jest "wolne", jego wartość jest określana podczas wykonywania kodu i nie zależy od tego gdzie została zadeklarowana metoda, tylko jaki obiekt znajduje się "przed kropką".

Koncepcja określania `this` podczas wykonywania kodu ma wady i zalety. Z jednej strony, funkcja może być wykorzystywana przez różne obiekty. Z drugiej - im większa swoboda, tym większa podatność na pomyłki.

Naszym zadaniem nie jest ocena czy taki wybór przy tworzeniu języka był dobry czy zły. Zastanawiamy się raczej jak z tym pracować, jak zyskać dzięki temu korzyści i jak uniknąć problemów.
```

## Internals: Referencje

```warn header="Zaawansowane szczegóły języka"
Ta część zawiera bardziej zaawansowaną terminologię, pomagającą lepiej zrozumieć skrajne przypadki.

Jeśli chcesz szybciej przejść dalej, możesz pominąć tę część lub zostawić do przeczytania na później.
```

An intricate method call can lose `this`, for instance:
Zawiłą metoda może doprowadzić do zgubienia `this`, na przykład: 

```js run
let user = {
  name: "John",
  hi() { alert(this.name); },
  bye() { alert("Bye"); }
};

user.hi(); // John (zwykłe wywołanie działa bez problemu)

*!*
// teraz warunkowo wywołajmy metodę user.hi lub user.bye w zależności od wartości name
(user.name == "John" ? user.hi : user.bye)(); // Błąd!
*/!*
```

W ostatniej linijce operator warunkowy wybiera pomiędzy `user.hi` i `user.bye`. W powyższym przykładzie wynikiem jest `ures.hi`.

Następnie metoda jest natychmiast wywoływana z nawiasami `()`. Ale nie działa prawidłowo!

Jak widzisz, wywołanie powoduje błąd, ponieważ wartość `"this"` wewnątrz metody staje się `undefined`.

Ten kod działa (obiekt kropka metoda):
```js
user.hi();
```

Ten nie działa (metoda określana):
```js
(user.name == "John" ? user.hi : user.bye)(); // Błąd!
```

Dlaczego? Jeśli chcemy zrozumieć dlaczego tak się dzieje, przyjrzyjmy się dokładnie działa jak wywołanie `obj.method()`.

Patrząc uważne, możemy zaobserwować dwie wykonujące się operacje w `obj.method()`:

1. Najpierw, kropka `'.'` pobiera wląściwość `obj.method`.
2. Następnie nawiasy `()` ją wykonują. 

Jak więc informacja o `this` migruje z pierwszej części do drugiej?

Jeśli rozłożymy te operacje na oddzielne linie kodu, wartość `this` z pewnością zostanie zgubiona: 

```js run
let user = {
  name: "John",
  hi() { alert(this.name); }
}

*!*
// podział pomiędzy pobraniem i wywołanie metody na oddzielne linie
let hi = user.hi;
hi(); // Błąd, ponieważ this jest undefined
*/!*
```

`hi = user.hi` przypisuje metodę do zmiennej, a na samym końcu jest wywoływana jako osobna funkcja, więc `this` nie posiada już tutaj żadnej wartości.

**Żeby `user.hi()` działalo, JavaScript używa sztuczki -- kropka `'.'` nie zwraca funkcji, tylko wartość ze specjalną]ym [Typem Referencji](https://tc39.github.io/ecma262/#sec-reference-specification-type).**

Typ Referencji jest "typem specyfikacji". Nie możemy go bezpośrednio uzyć, ale jest on wbudowany i wykorzystywany przez język.

Wartością Typu Referencji jest trójwartościowa kombinacja `(base, name, strict)`, gdzie:

- `base` jest obiektem.
- `name` jest nazwą właściwości.
- `strict` jest true jeśli używamy `use strict`.

Wynikiem dostępu do właściwości `user.hi` nie jest funkcja, tylko wartość Typu Referencji. Dla `user.hi` w trybie ścisłym jest to:

```js
// Reference Type value
(user, "hi", true)
```

Jeśli wywołujemy nawiasy `()` na Typ Referencji, otrzymują one całą informację o obiekcie, jego metodzie i mogą ustawić dla this prawidłową wartość (w tym przypadku `=user`).

Typ Referencji jest specjalnym "pośrednim" typem wewnętrznym, którego zadaniem jest przekazywanie informacji z kropki `.` do nawiasów `()`.

Każda inna operacja, jak przypisanie `hi = user.hi` odrzuca całkowicie Typ Referencji, bierze wartośc z `user.hi` (funkcji) i przekazuje ją dalej. Zatem każda następna operacja "gubi" `this`.

Podsumowując, wartość `this` jest przekazywane we właściwy sposób jeśli funkcja jest wywoływana za pomocą kropki `obj.method()` lub nawiasów kwadratowych `obj[`method`]()` (obie składnie zadziałają tutaj identycznie). W dalszej części kursu, nauczymy się różnych możliwości aby rozwiązać ten problem, takich jak [func.bind()](/bind#solution-2-bind).

## Funkcje strzałkowe nie mają "this"

Funkcje strzałkowe są specjalnym typem funkcji: nie posiadają "własnego" `this`. Jeśli odnosimy się do `this` w takiej funkcji, jego wartość jest pobierana z zewnętrznej "normalnej" funkcji. 

W poniższym przykładzie `arrow()` używa `this` z zewnętrznej metody `user.sayHi()`:

```js run
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya
```

Jest to specjalna właściwość funkcji strzalkowych, są użyteczne gdy nie chcemy mieć osobnego `this`, tylko wolimy je pobrać z zewnątrz. W późniejszym rozdziale <info:arrow-functions> zagłębimy się bardziej w to czym są funkcje strzałkowe. 


## Podsumowanie

- Funkcje które są przechowywane w obiekcie nazywamy "metodami".
- Metody pozwalają obiektom "zachowywać się" w sposób `object.zróbCoś()`
- Metody mają referencje do swojego obiektu, jest to wartość ich `this`

Wartość `this` jest określana podczas wykonywania kodu.
- Kiedy funkcja jest deklarowana, może ona użyć `this`, z tym że nie będzie ono miało wartości tak długo aż funkcja zostanie wywyłana.
- Jedna funkcja może być użwana jako metoda przez kilka obiektów.
- Kiedy funkcja jest wykonywana za pomocą składni: `object.method()`, `this` podczas wykonywania przybierze wartość `object`.

Zapamiętaj że funkcje strzałkowe są specjalnym typem funkcji: nie posiadają `this`. Kiedy chcemy uzyskać dostęp do `this` wewnątrz funkcji strzałkowej, wartość jest brana z zewnątrz.
