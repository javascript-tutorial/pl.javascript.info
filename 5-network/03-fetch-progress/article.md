
# Fetch: Postęp pobierania

Metoda `fetch` pozwala śledzić postęp pobierania (ang. *download*).

Należy pamiętać, że `fetch` nie ma możliwości śledzenia postępu przesyłania danych (ang. *upload*). For that purpose, please use [XMLHttpRequest](info:xmlhttprequest), we'll cover it later.

W celu śledzenia postępu pobierania możemy wykorzystać właściwość `response.body`. Jest to specjalny obiekt `ReadableStream` (pol. *czytelny strumień*), który udostępnia ciało odpowiedzi na bieżąco, kawałek po kawałku (ang. *chunk*). Czytelne strumienie zostały opisane w specyfikacji [Streams API](https://streams.spec.whatwg.org/#rs-class).

W przeciwieństwie do `response.text()`, `response.json()` czy innych metod, `response.body` pozwala na całkowitą kontrolę nad procesem odczytu, tak więc  and we can count how much is consumed at any moment.

Oto przykład kodu, który odczytuje odpowiedź z `response.body`:

```js
// zamiast response.json() i innych metod
const reader = response.body.getReader();

// nieskończona pętla w momencie pobierania ciała odpowiedzi
while(true) {
  // done przyjmuje wartość true dla ostatniego kawałka
  // value jest tablicą Uint8Array bitów kawałka
  const {done, value} = await reader.read();

  if (done) {
    break;
  }

  console.log(`Received ${value.length} bytes`)
}
```

Rezultatem wywołania `await reader.read()` jest obiekt, posiadający dwie właściwości:
- **`done`** -- `true` po zakończeniu odczytu, w przeciwnym przypadku `false`.
- **`value`** -- reprezentująca typ tablica `Uint8Array`.

```smart
Streams API opisuje też asynchroniczną iterację po `ReadableStream` za pomocą pętli `for await..of`, aczkolwiek to rozwiązanie nie jest szeroko wspierane (zob. [problemy z przeglądarką](https://github.com/whatwg/streams/issues/778#issuecomment-461341033)), wobec tego używamy pętli `while`.
```

Otrzymujemy kawałki odpowiedzi w pętli, aż do zakończenia ładowania, to znaczy dopóki `done` nie stanie się `true`.

Aby rejestrować postęp wystarczy dodawać do licznika długość `value` każdego otrzymanego kawałka.

Oto w pełni działający przykład, który otrzymuje odpowiedź i rejestruje postęp w konsoli. Dodatkowe wyjaśnienia w dalszej części artykułu.

```js run async
// Krok 1: uruchom pobieranie i podepnij czytnik
let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');

const reader = response.body.getReader();

// Krok 2: pobierz całkowitą długość
const contentLength = +response.headers.get('Content-Length');

// Krok 3: odczytaj dane
let receivedLength = 0; // otrzymana liczba bitów w danym momencie
let chunks = []; // tablica otrzymanych binarnych fragmentów (składają się na ciało)
while(true) {
  const {done, value} = await reader.read();

  if (done) {
    break;
  }

  chunks.push(value);
  receivedLength += value.length;

  console.log(`Received ${receivedLength} of ${contentLength}`)
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

1. We perform `fetch` as usual, but instead of calling `response.json()`, we obtain a stream reader `response.body.getReader()`.

    Please note, we can't use both these methods to read the same response: either use a reader or a response method to get the result.
2. Prior to reading, we can figure out the full response length from the `Content-Length` header.

    It may be absent for cross-origin requests (see chapter <info:fetch-crossorigin>) and, well, technically a server doesn't have to set it. But usually it's at place.
3. Call `await reader.read()` until it's done.

    We gather response chunks in the array `chunks`. That's important, because after the response is consumed, we won't be able to "re-read" it using `response.json()` or another way (you can try, there'll be an error).
4. At the end, we have `chunks` -- an array of `Uint8Array` byte chunks. We need to join them into a single result. Unfortunately, there's no single method that concatenates those, so there's some code to do that:
    1. We create `chunksAll = new Uint8Array(receivedLength)` -- a same-typed array with the combined length.
    2. Then use `.set(chunk, position)` method to copy each `chunk` one after another in it.
5. We have the result in `chunksAll`. It's a byte array though, not a string.

    To create a string, we need to interpret these bytes. The built-in [TextDecoder](info:text-decoder) does exactly that. Then we can `JSON.parse` it, if necessary.

    What if we need binary content instead of a string? That's even simpler. Replace steps 4 and 5 with a single line that creates a `Blob` from all chunks:
    ```js
    let blob = new Blob(chunks);
    ```

At we end we have the result (as a string or a blob, whatever is convenient), and progress-tracking in the process.

Once again, please note, that's not for *upload* progress (no way now with `fetch`), only for *download* progress.
