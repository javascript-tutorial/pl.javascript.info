
# Fetch

<<<<<<< HEAD
Ilekroć jest to potrzebne, JavaScript potrafi wykonywać żądania sieciowe do serwera i pobierać nowe informacje.
=======
JavaScript can send network requests to the server and load new information whenever it's needed.
>>>>>>> c3a11c85e54153ebb137b5541b1d1f751c804439

Można na przykład użyć żądania sieciowego do:

- złożenia zamówienia,
- wyświetlenia informacji o użytkowniku,
- otrzymania najnowszych aktualizacji z serwera,
- ...itp.

...I to wszystko bez przeładowania strony!

Istnieje nadrzędny termin "AJAX" (skrót od <b>A</b>synchronous <b>J</b>avaScript <b>A</b>nd <b>X</b>ML) dotyczący żądań sieciowych w JavaScripcie. Nie musimy jednak używać XML-a: skrót ten pochodzi z dawnych czasów, stąd też zawiera takie właśnie słowo. Być może znasz już ten termin.

Istnieje wiele sposobów wysłania żądania sieciowego i pobrania informacji z serwera.

Metoda `fetch()` jest nowoczesna i wszechstronna, dlatego od niej zaczniemy. Nie jest ona wspierana przez stare przeglądarki (można ją dodać poprzez odpowiednią łatkę - ang. *polyfill*), jest natomiast bardzo dobrze obsługiwana przez współczesne przeglądarki.

Podstawowa składnia jest następująca:

```js
let promise = fetch(url, [options])
```

- **`url`** -- adres URL zapytania.
- **`options`** -- parametry opcjonalne: metoda, nagłówki, itp.

Bez `options` mamy do czynienia ze zwykłym zapytaniem GET, pobierającym zawartość adresu `url`.

Przeglądarka natychmiast uruchamia zapytanie i zwraca obietnicę (ang. *promise*), której kod wywołujący powinien użyć do uzyskania wyniku.

Uzyskanie odpowiedzi jest zwykle procesem dwuetapowym.

**Po pierwsze, obietnica `promise` zwrócona przez `fetch`, rozwiązuje się (ang. *resolves*) do obiektu wbudowanej klasy [Response](https://fetch.spec.whatwg.org/#response-class) , gdy tylko serwer odpowie nagłówkami.**

Na tym etapie możemy sprawdzić status żądania HTTP, aby dowiedzieć się, czy się ono powiodło, albo przejrzeć nagłówki. Nie mamy jednak jeszcze dostępu do ciała odpowiedzi.

Obietnica jest odrzucana (ang. *rejects*), jeżeli `fetch` jest w stanie wykonać zapytania HTTP, np. ze względu na problemy sieciowe lub brak strony, do której skierowano zapytanie. Nieprawidłowe statusy HTTP, takie jak 404 lub 500, nie powodują błędu.

Informację o statusie HTTP znajdziemy wśród właściwości odpowiedzi:

- **`status`** -- kod odpowiedzi HTTP, np. 200.
- **`ok`** -- typ logiczny, `true` jeżeli kod odpowiedzi HTTP jest z zakresu 200-299.

Przykładowo:

```js
let response = await fetch(url);

if (response.ok) { // jeżeli kod odpowiedzi HTTP jest z zakresu 200-299
  // pobierz ciało odpowiedzi (wyjaśnione poniżej)
  let json = await response.json();
} else {
  alert("Błąd HTTP: " + response.status);
}
```

**Po drugie, aby pobrać ciało odpowiedzi, należy wywołać kolejną metodę.**

Obiekt klasy `Response` (pol. *odpowiedź*) zapewnia wiele metod bazujących na obietnicach, które pozwalają na dostęp do ciała odpowiedzi i zwrócenie go w różnych formach:

<<<<<<< HEAD
- **`response.text()`** -- odczytaj odpowiedź i zwróć jako tekst,
- **`response.json()`** -- odczytaj odpowiedź i zwróć jako JSON,
- **`response.formData()`** -- zwróć odpowiedź jako obiekt typu `FormData` (wyjaśnienie w [następnym rozdziale](info:formdata)),
- **`response.blob()`** -- zwróć odpowiedź jako [Blob](info:blob) (dane binarne z typem),
- **`response.arrayBuffer()`** -- zwróć odpowiedź jako [ArrayBuffer](info:arraybuffer-binary-arrays) (niskopoziomowa reprezentacja danych binarnych),
- ponadto `response.body` jest sam w sobie obiektem typu [ReadableStream](https://streams.spec.whatwg.org/#rs-class), co pozwala na odczytywanie go kawałek po kawałku. Ale o tym nieco później.
=======
- **`response.text()`** -- read the response and return as text,
- **`response.json()`** -- parse the response as JSON,
- **`response.formData()`** -- return the response as `FormData` object (explained in the [next chapter](info:formdata)),
- **`response.blob()`** -- return the response as [Blob](info:blob) (binary data with type),
- **`response.arrayBuffer()`** -- return the response as [ArrayBuffer](info:arraybuffer-binary-arrays) (low-level representaion of binary data),
- additionally, `response.body` is a [ReadableStream](https://streams.spec.whatwg.org/#rs-class) object, it allows you to read the body chunk-by-chunk, we'll see an example later.
>>>>>>> c3a11c85e54153ebb137b5541b1d1f751c804439

Pobierzmy dla przykładu obiekt JSON z ostatnimi commitami z GitHuba.

```js run async
let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);

*!*
let commits = await response.json(); // odczytaj ciało odpowiedzi i zwróć jako JSON
*/!*

alert(commits[0].author.login);
```

Bądź to samo, ale bez `await`, a jedynie za pomocą czystej składni obietnic:

```js run
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));
```

Aby pobrać odpowiedź jako tekst, użyj `await response.text()` zamiast `.json()`:

```js run async
let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

let text = await response.text(); // odczytaj ciało odpowiedzi jako tekst

alert(text.slice(0, 80) + '...');
```

Aby zaprezentować odczyt danych w formacie binarnym, pobierzmy obraz logo [specyfikacji "fetch"](https://fetch.spec.whatwg.org) (patrz rozdział [Blob](info:blob) odnośnie operacji na obiekcie `Blob`):

```js async run
let response = await fetch('/article/fetch/logo-fetch.svg');

*!*
let blob = await response.blob(); // pobierz logo jako obiekt Blob
*/!*

// stwórz dla niego znacznik <img>
let img = document.createElement('img');
img.style = 'position:fixed;top:10px;left:10px;width:100px';
document.body.append(img);

// wyświetl je
img.src = URL.createObjectURL(blob);

setTimeout(() => { // ukryj po upływie trzech sekund
  img.remove();
  URL.revokeObjectURL(img.src);
}, 3000);
```

````warn
Można wybrać tyko jedną z metod odczytywania ciała odpowiedzi.

Jeśli już zdecydowaliśmy się na `response.text()`, wówczas `response.json()` nie zadziała, ponieważ zawartość ciała odpowiedzi została już wcześniej przetworzona.

```js
<<<<<<< HEAD
let text = await response.text(); // ciało odpowiedzi zostaje przetworzone
let parsed = await response.json(); // nie powiedzie się (przetworzone wcześniej)
=======
let text = await response.text(); // response body consumed
let parsed = await response.json(); // fails (already consumed)
```
>>>>>>> c3a11c85e54153ebb137b5541b1d1f751c804439
````

## Nagłówki odpowiedzi

Nagłówki odpowiedzi są dostępne w obiekcie nagłówków podobnym do obiektu Map, a konkretnie w `response.headers`.

Nie jest do dokładnie Map, aczkolwiek posiada podobne metody, służące do pobrania poszczególnych nagłówków za pomocą nazwy lub poprzez iterowanie po nich:

```js run async
let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

// pobieramy jeden nagłówek
alert(response.headers.get('Content-Type')); // application/json; charset=utf-8

// iterujemy po wszystkich nagłówkach
for (let [key, value] of response.headers) {
  alert(`${key} = ${value}`);
}
```

## Nagłówki żądania

Aby zdefiniować nagłówek w żądaniu `fetch`, użyjemy właściwości `headers`, która zawiera obiekt z wychodzącymi nagłówkami:

```js
let response = fetch(protectedUrl, {
  headers: {
    Authentication: 'secret'
  }
});
```

... Istnieją również [zabronione nagłówki HTTP](https://fetch.spec.whatwg.org/#forbidden-header-name), których nie możemy ustawić:

- `Accept-Charset`, `Accept-Encoding`
- `Access-Control-Request-Headers`
- `Access-Control-Request-Method`
- `Connection`
- `Content-Length`
- `Cookie`, `Cookie2`
- `Date`
- `DNT`
- `Expect`
- `Host`
- `Keep-Alive`
- `Origin`
- `Referer`
- `TE`
- `Trailer`
- `Transfer-Encoding`
- `Upgrade`
- `Via`
- `Proxy-*`
- `Sec-*`

Dzięki nim protokół HTTP działa prawidłowo i jest bezpieczny, dlatego też są pod pełną kontrolą przeglądarki.

## Żądania POST

Do wykonania żądania z metodą `POST` lub jakąkolwiek inną musimy użyć opcji dostępnych w funkcji `fetch`:

- **`method`** -- metoda HTTP, np. `POST`,
- **`body`** -- ciało żądania, może przyjąć formę:
  - łańcucha znaków (np. w formacie JSON),
  - obiektu `FormData`, aby móc przesłać dane jako `form/multipart`,
  - `Blob`/`BufferSource`, aby przesłać dane w formie binarnej,
  - [URLSearchParams](info:url), aby przesłać dane jako `x-www-form-urlencoded`, rzadko używane. 

Najczęściej używanym formatem jest JSON.

Przykładowo, ten kod przesyła obiekt `user` jako JSON:

```js run async
let user = {
  name: 'Jan',
  surname: 'Kowalski'
};

*!*
let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});
*/!*

let result = await response.json();
alert(result.message);
```

Należy pamiętać, że jeżeli ciało żądania (`body`) jest łańcuchem znaków, wówczas nagłówek `Content-Type` domyślnie ustawiony jest na `text/plain;charset=UTF-8`.

Ponieważ jednak zamierzamy wysłać obiekt JSON, użyjemy obiektu `headers` do ustawienia nagłówka `Content-Type` na `application/json`, czyli właściwego dla danych zakodowanych w formacie JSON.

## Wysyłanie obrazu

Za pomocą `fetch` możemy także przesłać dane binarne, używając obiektów `Blob` albo `BufferSource`.

<<<<<<< HEAD
W poniższym przykładzie mamy znacznik `<canvas>`, który pozwala na rysowanie poprzez poruszanie nad nim myszką. Kliknięcie na przycisk "Prześlij" wysyła obraz do serwera:
=======
In this example, there's a `<canvas>` where we can draw by moving a mouse over it. A click on the "submit" button sends the image to the server:
>>>>>>> c3a11c85e54153ebb137b5541b1d1f751c804439

```html run autorun height="90"
<body style="margin:0">
  <canvas id="canvasElem" width="100" height="80" style="border:1px solid"></canvas>

  <input type="button" value="Prześlij" onclick="submit()">

  <script>
    canvasElem.onmousemove = function(e) {
      let ctx = canvasElem.getContext('2d');
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
    };

    async function submit() {
      let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));
      let response = await fetch('/article/fetch/post/image', {
        method: 'POST',
        body: blob
      });

      // serwer potwierdza zapisanie obrazu oraz podaje jego rozmiar
      let result = await response.json();
      alert(result.message);
    }

  </script>
</body>
```

Zauważ, że nie ustawiamy ręcznie nagłówka `Content-Type`, ponieważ obiekt `Blob` posiada wbudowany typ (tutaj `image/png`, wymuszony przez metodę `toBlob`). Dla obiektów `Blob` ten typ jest przekazywany do nagłówka `Content-Type`.

Funkcję `submit()` można również przepisać z pominięciem składni `async/await` w taki sposób:

```js
function submit() {
  canvasElem.toBlob(function(blob) {        
    fetch('/article/fetch/post/image', {
      method: 'POST',
      body: blob
    })
      .then(response => response.json())
      .then(result => alert(JSON.stringify(result, null, 2)))
  }, 'image/png');
}
```

## Podsumowanie

Typowe żądanie sieciowe składa się z dwóch wywołań `await`:

```js
let response = await fetch(url, options); // rozwiązuje się do obiektu z nagłówkami odpowiedzi
let result = await response.json(); // odczytuje ciało jako JSON
```

Albo bez użycia `await`:

```js
fetch(url, options)
  .then(response => response.json())
  .then(result => /* zrób coś z parametrem result */)
```

Właściwości żądania:
- `response.status` -- kod odpowiedzi HTTP,
- `response.ok` -- `true` dla kodów odpowiedzi z przedziału 200-299.
- `response.headers` -- z nagłówkami HTTP, podobny do Map.

Metody służące do przetwarzania ciała odpowiedzi:
- **`response.text()`** -- zwróć odpowiedź jako tekst,
- **`response.json()`** -- odczytaj odpowiedź jako obiekt JSON,
- **`response.formData()`** -- zwróć odpowiedź jako obiekt `FormData` (kodowanie form/multipart, zobacz następny rozdział),
- **`response.blob()`** -- zwróć odpowiedź jako [Blob](info:blob) (dane binarne z typem),
- **`response.arrayBuffer()`** -- zwróć odpowiedź jako [ArrayBuffer](info:arraybuffer-binary-arrays) (niskopoziomowa reprezentacja danych binarnych),

Poznane jak dotąd opcje metody `fetch`:
- `method` -- metoda żądania HTTP,
- `headers` -- obiekt z nagłówkami żądania (nie każdy dowolny nagłówek jest dozwolony),
- `body` -- dane do wysyłki (ciało żądania) jako `string` albo obiekt `FormData`, `BufferSource`, `Blob` lub `UrlSearchParams`.

W następnych rozdziałach poznamy więcej opcji i przypadków użycia metody `fetch`.
