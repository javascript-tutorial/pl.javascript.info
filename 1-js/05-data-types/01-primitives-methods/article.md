# Metody typów podstawowych
 
JavaScript pozwala na pracę z typami podstawowymi (ciągi znaków, liczby, itd.) w taki sam sposób jakby były obiektami. Dostarczają one także metod, które można wywołać tak samo jak w przypadku obiektów. Wkrótce przestudiujemy te metody, ale najpierw sprawdźmy jak wartości podstawowe działają, ponieważ oczywiście typy podstawowe nie są obiektami (za chwilę szerzej to wyjaśnimy).
 
Spójrzmy na kluczowe różnice pomiędzy typami podstawowymi, a obiektami.
 
Typ podstawowy
 
- Jest wartością typu podstawowego.
- Wyróżniamy 7 typów podstawowych: `tekstowy`, `liczbowy`, `bigint`, `logiczny`, `symbol`, `null` and `undefined`.
 
Obiekt
 
- Jest w stanie przechowywać wiele wartości jako własności.
- Można go stworzyć za pomocą`{}`, na przykład: `{name: "Janek", age: 30}`. Są także inne rodzaje obiektów w JavaScript: na przykład funkcje są obiektami.
 
Jedną z najlepszych rzeczy w obiektach jest to, że możemy przechowywać funkcje jako własność obiektu.
 
```js run
let janek = {
  name: "Jan",
  sayHi: function() {
    alert("Cześć kolego!");
  }
};
 
jan.sayHi(); // Cześć kolego!
```
 
Stworzyliśmy tutaj obiekt `janek` z metodą `sayHi`
 
Wiele wbudowanych obiektów już istnieje, na przykład takie jak te, które pracują z datami, błędami, elementami HTML, itd. Mają one różne własności i metody.
 
Pamiętaj jednak, że te funkcje mają swój koszt!
 
Obiekty są "cięższe" niż typy podstawowe. Wymagają dodatkowych zasobów żeby do obsługi wewnętrznych maszyn.
 
## Typ podstawowy jest jak obiekt
 
 
Oto paradoks, za którym którym stoi twórca JavaScript:
 
- Jest wiele rzeczy, które chciałoby się zrobić z typami podstawowymi, takimi jak tekstowy lub liczba. Byłoby wspaniale uzyskać dostęp do nich jako metod.
- Typy podstawowe są szybkie i muszą ważyć najmniej jak to możliwe.
 
Rozwiązanie wygląda jest trochę dziwne. Oto ono:
 
1. Typy podstawowe są wciąż typami podstawowymi. Pojedynczymi wartościami, tak jak zaprojektowano.
2. Język pozwala dostać się do metod i własności typu tekstowego, liczbowego, logicznego i symboli.
3. W tym celu stworzony został specjalny "wrapper obiektu", który dostarcza dodatkowych funkcji, a następnie jest on usuwany.
 
"Wrappery obiektów" są różne dla każdego typu podstawowego i nazywają się: `String`, `Number`, `Boolean` i `Symbol`. W ten sposób zapewniają różne zestawy metod.

Istnieje na przykład metoda typu tekstowego [str.toUpperCase()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) która zwraca skapitalizowane `str`.
Oto jak działa:
```js run
let str = "Cześć";

alert( str.toUpperCase() ); // CZEŚĆ
```
Proste, prawda ? Oto co dokładnie się dzieje wywołując `str.toUpperCase()`:

1. Ciąg znaków `str` jest typem podstawowym. W momencie gdy chcemy dostać się do jego własności, zostaje stworzony specjalny obiekt, który zna przypisaną do niego wartość i dostarcza przydatnych metod takich jak `toUpperCase()`.
2. Metoda zostaje uruchomiona i zwraca nowy ciąg znaków (pokazany za pomocą `alert`).
3. Nowo stworzony specjalny obiekt zostaje usunięty, pozostawiając sam typ podstawowy `str`.

Tak więc typy podstawowe mogą dostarczać metod, ale wciąż pozostają lekkie.

Silnik JavaScript silnie optymalizuje ten proces. Może nawet całkowicie pominąć tworzenie dodatkowego obiektu, ale wciąż ciąg znaków musi zachowywać się zgodne ze specyfikacją, tak jak gdyby został stworzony.

Typ liczbowy ma swoje własne metody, na przykład, [toFixed(n)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) zaokrągla liczb do podanej precyzji:

```js run
let n = 1.23456;

alert( n.toFixed(2) ); // 1.23
```
Więcej specyficznych metod poznamy w rozdziałach <info:number> i <info:string>.

````warn header="Konstruktory `String/Number/Boolean` są tylko do wewnętrznego odczytu"
Niektóre języki programowania takie jak Java pozwalają nam na stworzenie "wrapperów obiektów" dla typów podstawowych używając następującej składni: `new Number(1)` albo `new Boolean(false)`.

W JavaScript także jest to możliwe z powodów historycznych, ale mocno **niezalecane**. W niektórych przypadkach powoduje to mocne niedopowiedzenia.

Na przykład:

```js run
alert( typeof 0 ); // "number"

alert( typeof new Number(0) ); // "object"!
```
Obiekty są zawsze prawdziwe (ang. *truthy*) w `if`, więc ostrzeżenie zostanie wyświetlone:
```js run
let zero = new Number(0);

if (zero) { // zero jest prawdziwe, ponieważ jest obiektem
  alert( "zero jest prawdziwe!?!" );
}
```

Z drugiej strony, używając samych funkcji `String/Number/Boolean` bez operatora `new` jest całkowicie rozsądne i użyteczne. Zamieniają one wartości na odpowiadające im typy: typ tekstowy, liczbowy logiczny (typy podstawowe).

Na przykład jest to całkowicie poprawne:
```js
let num = Number("123"); // zamienia ciąg znaków na liczbę
```
````


````warn header="null/undefined nie mają metod."
Specjalne typy podstawowe `null` i `undefined` są wyjątkami. Nie mają odpowiadających im "wrapperów obiektów" i nie dostarczają metod. W pewnym sensie są najbardziej "podstawowe".

Próba uzyskania dostępu do właściwości o takiej wartości spowodowałaby błąd:

```js run
alert(null.test); // błąd
````

## Podsumowanie

- Typy podstawowe oprócz `null` i `undefined` dostarczają wielu przydatnych metod. Przestudiujemy te metody w następnych rozdziałach.
- Formalnie metody te działają za pośrednictwem obiektów tymczasowych, ale silniki JavaScript są dobrze dostosowane i optymalizują to wewnętrznie, więc wywołanie ich nie jest drogie.
