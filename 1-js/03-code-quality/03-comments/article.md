# Komentarze

Jak wiemy z rozdziału <info:structure>, komentarze mogą być jednoliniowe, gdy
rozpoczniemy linię znakami `//` lub wieloliniowe, jeśli użyjemy `/* ... */`.

Zwykle używamy ich do opisania jak i dlaczego kod działa.

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

Jednak w dobrym kodzie ilość takich "wyjaśniających" komentarzy powinna być minimalna. Poważnie, kod sam w sobie powinien być łatwy do zrozumienia bez nich.

Jest pewna świetna zasada, która tego dotyczy: "jeśli kod jest tak niezrozumiały, że wymagane są komentarze, to możliwe, że zamiast komentowania powinien być napisany od nowa".

### Przepis: wydziel funkcję

Czasami korzystnie jest zastąpić kawałek kodu funkcją, tak jak w tym przypadku:

```js
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
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

Teraz jesteśmy w stanie z łatwością zrozumieć ten kod. Funkcja sama w sobie staje się komentarzem. Taki kod nazywa się samoopisowym.

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

Po raz kolejny, funkcje same mówią co się dzieje. Nie ma tu co komentować. Również struktura kodu jest lepsza, gdy jest podzielony. Jest jasne co robi każda funkcja, co przyjmuje i co zwraca.

W rzeczywistości nie zawsze jesteśmy w stanie uniknąć "wyjaśniających" komentarzy. Mamy czasami do czynienia ze złożonymi algorytmami. Zdarzają się sprytne "poprawki" na rzecz optymalizacji. Jednak ogólnie powinniśmy starać się aby kod był prosty i samoopisowy.

## Dobre komentarze

Ustaliliśmy już, że wyjaśniające komentarze są przeważnie złe. W takim razie które komentarze są dobre?

### Opisz architekturę

Dostarcz wysokopoziomowy przegląd komponentów, jak ze sobą współdziałają, jaka jest kontrola przepływu danych w różnych sytuacjach... W skrócie -- spojrzenie na kod z lotu ptaka. Istnieje specjalny język [UML](http://wikipedia.org/wiki/Unified_Modeling_Language) służący do budowania wysokopoziomowych diagramów które opisują architekturę i wyjaśniają kod. Jest to zdecydowanie warte nauki.

### Udokumentuj parametry oraz użycie funkcji

Jest specjalna składnia [JSDoc](http://en.wikipedia.org/wiki/JSDoc) pozwalająca na dokumentowanie funkcji: użycia, parametrów i zwracanej wartości.

Na przykład:

```js
/**
  * Zwraca x podniesiony do n-tej potęgi.
  *
  * @param {number} x liczba do potęgowania.
  * @param {number} n potęga, musi być liczbą naturalną.
  * @return {number} x podniesiony do n-tej potęgi.
  */
function pow(x, n) {
  ...
}
```

Takie komentarze pozwalają nam poznać przeznaczenie funkcji i używać jej w poprawny sposób bez zerkania do jej treści.

Tak bokiem, wiele edytorów takich jak [WebStorm](https://www.jetbrains.com/webstorm/) jest w stanie dobrze je rozumieć oraz używać ich do automatycznego uzupełniania i sprawdzania kodu.

Są również takie narzędzia jak [JSDoc 3](https://github.com/jsdoc3/jsdoc), które są w stanie generować dokumentację HTML z tych komentarzy. Możesz dowiedzieć się więcej na ten temat pod tym linkiem <http://usejsdoc.org/>.

### Dlaczego zadanie jest rozwiązane w taki sposób?

Co zostało napisane jest ważne. Jednakże to, czego _nie_ napisano może być jeszcze ważniejsze w zrozumieniu o co chodzi. Dlaczego zadanie jest rozwiązane dokładnie w taki sposób? Kod nie odpowie na to pytanie.

Jeżeli jest wiele sposobów na rozwiązanie zadania, dlaczego został wybrany właśnie ten sposób? Zwłaszcza, gdy nie jest najbardziej oczywisty.

Bez takich komentarzy następująca sytuacja staje się możliwa:

1. Ty (bądź Twój współpracownik) otwiera kod napisany jakiś czas temu i widzi, że jest nieoptymalny.
2. Myślisz sobie: "Jaka byłam wtedy głupia i jak bardzo jestem teraz mądrzejsza" i przepisujesz kod na "bardziej oczywisty i poprawny" wariant.
3. ...Chęć przepisania była w porządku. Jednak w trakcie tego procesu zauważasz, że "bardziej oczywiste" rozwiązanie jest nieidealne. Nawet mgliście pamiętasz dlaczego, ponieważ już raz spróbowałaś tego rozwiązania dawno temu. Powracasz do poprawnego wariantu ale czas został już stracony.

Komentarze opisujące rozwiązanie są bardzo ważne. Pomagają kontynuować proces wytwarzania oprogramowania w poprawny sposób.

### Jakieś subtelności w kodzie? Jeśli tak, to gdzie są?

Jeśli kod ma jakieś aspekty, które są subtelne lub sprzeczne z intuicją, zdecydowanie warto to skomentować.

## Podsumowanie

Ważnym znakiem rozpoznawczym dobrego programisty są komentarze: ich obecność oraz ich brak.

Dobre komentarze pozwalają nam lepiej utrzymywać kod, wracać do niego po jakimś czasie i efektywnie go używać.

**Komentuj to:**

- Ogólna architektura, wysokopoziomowy widok.
- Użytkowanie funkcji.
- Istotne rozwiązania, zwłaszcza, gdy nie są od razu oczywiste.

**Unikaj komentarzy:**

- Które mówią "jak kod działa" i "co robi".
- Dodawaj je tylko wtedy, gdy niemożliwe jest napisanie kodu tak prostego i samoopisującego się, że nie potrzebuje takich komentarzy.

Komentarze są również używane do narzędzi automatycznie generujących dokumentację takich jak JSDoc3. Narzędzia te czytają komentarze i generuję dokumentację w formacie HTML (lub w innym formacie).
