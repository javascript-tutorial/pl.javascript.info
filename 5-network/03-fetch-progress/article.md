
# Fetch: Postęp pobierania

Metoda `fetch` pozwala śledzić postęp pobierania (ang. *download*).

Należy pamiętać, że `fetch` nie ma możliwości śledzenia postępu wysyłania danych (ang. *upload*). Do tego celu należy użyć [XMLHttpRequest](info:xmlhttprequest). Omówimy to w dalszej części.

W celu śledzenia postępu pobierania możemy wykorzystać właściwość `response.body`. Jest to specjalny obiekt `ReadableStream` (pol. *czytelny strumień*), który udostępnia ciało odpowiedzi na bieżąco, kawałek po kawałku (ang. *chunk*). Czytelne strumienie zostały opisane w specyfikacji [Streams API](https://streams.spec.whatwg.org/#rs-class).

W przeciwieństwie do `response.text()`, `response.json()` czy innych metod, `response.body` pozwala na całkowitą kontrolę nad procesem odczytu, co pozwala na określenie, jaka ilość danych jest zużywana w dowolnym momencie.

Oto przykład kodu, który odczytuje odpowiedź z `response.body`:

```js
// zamiast response.json() i innych metod
const reader = response.body.getReader();

// pętla nieskończona w momencie pobierania ciała odpowiedzi
while(true) {
  // done przyjmuje wartość true dla ostatniego kawałka
  // value jest tablicą Uint8Array bajtów danego kawałka  
  const {done, value} = await reader.read();

  if (done) {
    break;
  }

  console.log(`Pobrano ${value.length} bajtów`)
}
```

Rezultatem wywołania `await reader.read()` jest obiekt, posiadający dwie właściwości:
- **`done`** -- `true` po zakończeniu odczytu, w przeciwnym przypadku `false`.
- **`value`** -- reprezentująca typ tablica bajtów `Uint8Array`.

```smart
Streams API opisuje też asynchroniczną iterację po `ReadableStream` za pomocą pętli `for await..of`, aczkolwiek to rozwiązanie nie jest szeroko wspierane (zob. [problemy z przeglądarką](https://github.com/whatwg/streams/issues/778#issuecomment-461341033)), wobec tego używamy pętli `while`.
```

Otrzymujemy kawałki odpowiedzi w pętli, aż do zakończenia ładowania, to znaczy dopóki `done` nie stanie się `true`.

Aby rejestrować postęp, wystarczy dodawać do licznika długość `value` każdego otrzymanego kawałka.

Oto w pełni działający przykład, w którym postęp otrzymywanej odpowiedzi jest wyświetlany w konsoli. Szczegóły w dalszej części artykułu.

```js run async
// Krok 1: uruchom pobieranie i podepnij czytnik
let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');

const reader = response.body.getReader();

// Krok 2: pobierz całkowitą długość
const contentLength = +response.headers.get('Content-Length');

// Krok 3: odczytaj dane
let receivedLength = 0; // otrzymana liczba bajtów w danym momencie
let chunks = []; // tablica otrzymanych binarnych fragmentów (składają się na ciało)
while(true) {
  const {done, value} = await reader.read();

  if (done) {
    break;
  }

  chunks.push(value);
  receivedLength += value.length;

  console.log(`Pobrano ${receivedLength} z ${contentLength}`)
}

// Krok 4: połącz kawałki w jedną tablicę Uint8Array
let chunksAll = new Uint8Array(receivedLength); // (4.1)
let position = 0;
for(let chunk of chunks) {
	chunksAll.set(chunk, position); // (4.2)
	position += chunk.length;
}

// Krok 5: dekoduj na łańcuch znaków
let result = new TextDecoder("utf-8").decode(chunksAll);

// Skończone!
let commits = JSON.parse(result);
alert(commits[0].author.login);
```

Wyjaśnijmy wszystko krok po kroku:

1. Wykonujemy `fetch` jak zazwyczaj, lecz zamiast wywołać `response.json()` podpinamy czytnik strumienia `response.body.getReader()`.

    Zauważ, że nie możemy użyć obu powyższych metod, aby odczytać tę samą odpowiedź: albo więc użyjemy czytnika, albo którąś z metod żądania.
2. Przed odczytem możemy pobrać długość pełnej odpowiedzi z nagłówka `Content-Length`.

    Może go nie być w przypadku żądań `cross-origin` (patrz rozdział <info:fetch-crossorigin>) i technicznie rzecz biorąc serwer nie musi go ustawiać, aczkolwiek zazwyczaj jest dostępny.
3. Wywołujemy `await reader.read()` aż do zakończenia odczytu.

    Gromadzimy kawałki odpowiedzi w tablicy `chunks`. Jest to istotne, ponieważ po zużyciu odpowiedzi nie będziemy mogli odczytać jej ponownie za pomocą `response.json()` lub w inny sposób (możesz spróbować, pojawi się błąd).
4. Mamy więc `chunks` -- tablicę zawierającą kawałki jako bajty w tablicach `Uint8Array`. Musimy je połączyć w jeden wynik. Niestety, nie ma jednej metody, która by je łączyła, potrzebujemy więc nieco kodu, aby to zrobić:
    1. Tworzymy `chunksAll = new Uint8Array(receivedLength)` -- tablicę tego samego typu o łącznym rozmiarze wszystkich kawałków.
    2. Następnie kopiujemy do niej kawałki jeden po drugim używając metody `.set(chunk, position)`.
5. Wynik trzymamy w zmiennej `chunksAll`. Jest to jednak tablica bajtów, a nie łańcuch znaków.

    Aby utworzyć ciąg musimy odpowiednio zinterpretować te bajty. Z pomocą przychodzi nam wbudowana metoda [TextDecoder](info:text-decoder). Następnie wywołujemy `JSON.parse`, jeżeli zachodzi taka potrzeba.

    Co jeśli potrzebujemy zawartości binarnej, a nie łańcucha znaków? W takim przypadku sprawa jest jeszcze prostsza. Zastępujemy krok czwarty oraz piąty jedną linijką kodu, który tworzy `Blob` z wszystkich kawałków:
    ```js
    let blob = new Blob(chunks);
    ```

W rezultacie otrzymujemy łańcuch znaków lub 'Blob' (w zależności od potrzeb) oraz możliwość śledzenia postępu całego procesu.

Ważne, aby pamiętać, że powyższe nie dotyczy postępu *wysyłania*  (obecnie niemożliwe za pomocą `fetch`), a jedynie postępu *pobierania*.
