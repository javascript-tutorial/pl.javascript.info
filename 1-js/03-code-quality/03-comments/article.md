# Komentarze

Jak wiemy z rozdziału pt. "<info:structure>", komentarze mogą być jednoliniowe, gdy
rozpoczniemy linię znakami `//`, lub wieloliniowe, jeśli użyjemy `/* ... */`.

Zwykle używamy ich do opisania, jak i dlaczego kod działa.

Na pierwszy rzut oka koncepcja komentowania może być oczywista, jednak początkujący programiści często używają komentarzy niepoprawnie.

## Złe komentarze

Nowicjusze mają skłonność do używania komentarzy, aby wyjaśnić "co się dzieje w programie".
Przykładowo:

```js
// Ten kod zrobi to ( ... ) oraz to ( ... )
// ...i kto wie co jeszcze...
bardzo;
skomplikowany;
kod;
```

Jednak w dobrym kodzie ilość takich "wyjaśniających" komentarzy powinna być minimalna. Poważnie, kod powinien być łatwy do zrozumienia bez nich.

Jest pewna świetna zasada, która tego dotyczy: "jeśli kod jest tak niezrozumiały, że wymagane są komentarze, to możliwe, że zamiast komentowania powinien być napisany od nowa".

### Przepis: wydziel funkcję

Czasami korzystnie jest zastąpić kawałek kodu funkcją, tak jak w tym przypadku:

```js
function showPrimes(n) {
  nextPrime: 
  for (let i = 2; i < n; i++) {
    // sprawdź czy i jest liczbą pierwszą
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    alert(i);
  }
}
```

Lepszy wariant z wydzieloną funkcją `isPrime`:

```js
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}
```

Teraz jesteśmy w stanie z łatwością zrozumieć ten kod. Funkcja sama w sobie staje się komentarzem. Taki kod nazywany jest "samoopisującym się".

### Przepis: stwórz funkcje

Jeśli mamy długi fragment kodu, tak jak tu:

```js
// tutaj dodajemy whiskey
for (let i = 0; i < 10; i++) {
  let drop = getWhiskey();
  smell(drop);
  add(drop, glass);
}

// tutaj dodajemy sok
for (let t = 0; t < 3; t++) {
  let tomato = getTomato();
  examine(tomato);
  let juice = press(tomato);
  add(juice, glass);
}

// ...
```

Wtedy lepszym rozwiązaniem może być refaktoryzacja na takie funkcje:

```js
addWhiskey(glass);
addJuice(glass);

function addWhiskey(container) {
  for (let i = 0; i < 10; i++) {
    let drop = getWhiskey();
    //...
  }
}

function addJuice(container) {
  for (let t = 0; t < 3; t++) {
    let tomato = getTomato();
    //...
  }
}
```

Po raz kolejny, funkcje same opisują, co się dzieje. Nie ma tu co komentować. Również struktura kodu jest lepsza, gdy jest on podzielony. Jest jasne, co robi każda funkcja, co przyjmuje i co zwraca.

W rzeczywistości nie zawsze jesteśmy w stanie uniknąć "wyjaśniających" komentarzy. Mamy czasami do czynienia ze złożonymi algorytmami. Zdarzają się sprytne "poprawki" na rzecz optymalizacji. Jednak ogólnie powinniśmy starać się, aby kod był prosty i samoopisujący się.

## Dobre komentarze

Ustaliliśmy już, że wyjaśniające komentarze są przeważnie złe. W takim razie które komentarze są dobre?

Opisz architekturę
: Dostarcz wysokopoziomowy przegląd komponentów, opisz, jak ze sobą współdziałają, jaki jest przepływ danych w różnych sytuacjach... W skrócie -- przedstaw spojrzenie na kod z lotu ptaka. Istnieje specjalny język [UML](http://wikipedia.org/wiki/Unified_Modeling_Language) służący do budowania wysokopoziomowych diagramów, które opisują architekturę i wyjaśniają kod. Zdecydowanie warto zgłębić ten temat.

Udokumentuj parametry oraz użycie funkcji
: Istnieje specjalna składnia [JSDoc](http://en.wikipedia.org/wiki/JSDoc) pozwalająca na dokumentowanie funkcji: sposób jej użycia, oczekiwane parametry i zwracaną wartość.

    Na przykład:

<<<<<<< HEAD
    ```js
    /**
      * Zwraca x podniesiony do n-tej potęgi.
      *
      * @param {number} x Liczba do potęgowania.
      * @param {number} n Wykładnik potęgi; musi być liczbą naturalną.
      * @return {number} x podniesiony do n-tej potęgi.
      */
    function pow(x, n) {
      ...
    }
    ```

    Takie komentarze pozwalają nam poznać przeznaczenie funkcji i używać jej w poprawny sposób bez zerkania do jej treści.

    Tak na marginesie, wiele edytorów, takich jak [WebStorm](https://www.jetbrains.com/webstorm/), jest w stanie dobrze je zrozumieć oraz używać ich do automatycznego uzupełniania i sprawdzania kodu.

    Istnieją również takie narzędzia jak [JSDoc 3](https://github.com/jsdoc3/jsdoc), które są w stanie generować dokumentację HTML z tych komentarzy. Możesz dowiedzieć się więcej na ten temat pod tym linkiem: <http://usejsdoc.org/>.

Dlaczego zadanie jest rozwiązane w taki sposób?
: Co zostało napisane jest ważne. Jednakże to, czego _nie_ napisano, może być jeszcze ważniejsze w zrozumieniu, o co chodzi w kodzie. Dlaczego zadanie zostało rozwiązane dokładnie w taki sposób? Kod nie odpowie na to pytanie.
=======
For instance:
```js
/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
  ...
}
```

Such comments allow us to understand the purpose of the function and use it the right way without looking in its code.

By the way, many editors like [WebStorm](https://www.jetbrains.com/webstorm/) can understand them as well and use them to provide autocomplete and some automatic code-checking.

Also, there are tools like [JSDoc 3](https://github.com/jsdoc3/jsdoc) that can generate HTML-documentation from the comments. You can read more information about JSDoc at <http://usejsdoc.org/>.
>>>>>>> cd2c7ce3c8f033e6f7861ed1b126552e41ba3e31

    Jeżeli jest wiele sposobów na rozwiązanie zadania, dlaczego został wybrany właśnie ten sposób? Zwłaszcza gdy nie jest najbardziej oczywisty.

    Bez takich komentarzy następująca sytuacja staje się możliwa:

    1. Ty (bądź twój współpracownik) otwiera kod napisany jakiś czas temu i widzi, że jest nieoptymalny.
    2. Myślisz sobie: *Jaki byłem wtedy głupi i o ile jestem teraz mądrzejszy* i przepisujesz kod na "bardziej oczywisty i poprawny" wariant.
    3. ... Chęć przepisania była w porządku. Jednak w trakcie tego procesu zauważasz, że "bardziej oczywiste" rozwiązanie nie jest idealne. Nawet mgliście pamiętasz dlaczego, ponieważ już raz przyszło ci spróbować tego rozwiązania dawno temu. Powracasz do poprawnego wariantu, ale poświęcony czas został już bezpowrotnie stracony.

    Komentarze opisujące rozwiązanie są bardzo ważne. Pomagają kontynuować proces wytwarzania oprogramowania w poprawny sposób.

Jakieś nieoczywistości w kodzie? Jeśli tak, to gdzie są?
: Jeśli kod ma jakieś aspekty, które są subtelne lub sprzeczne z intuicją, zdecydowanie warto zawrzeć to w komentarzu.

## Podsumowanie

Ważnym znakiem rozpoznawczym dobrego programisty są komentarze: ich obecność, ale także ich brak.

Dobre komentarze pozwalają nam lepiej utrzymywać kod, wracać do niego po jakimś czasie i efektywnie go używać.

**Komentuj:**

- Ogólną architekturę, spojrzenie na kod z lotu ptaka.
- Sposób użycia funkcji.
- Istotne rozwiązania, zwłaszcza gdy nie są od razu oczywiste.

**Unikaj komentarzy:**

- Które mówią "jak kod działa" i "co robi".
- Dodawaj je tylko wtedy, gdy niemożliwe jest napisanie kodu tak prostego i samoopisującego się, że nie potrzebuje takich komentarzy.

Komentarze są również używane do narzędzi automatycznie generujących dokumentację takich jak JSDoc3. Narzędzia te czytają komentarze i generują dokumentację w formacie HTML (lub innym).
