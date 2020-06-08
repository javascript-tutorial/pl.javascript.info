
# FormData

W niniejszym rozdziale omówimy wysyłkę formularzy HTML: z plikami lub bez, z dodatkowymi polami i tak dalej.

Pomoże nam w tym obiekt [FormData](https://xhr.spec.whatwg.org/#interface-formdata). Jak zapewne się domyślasz, jest to obiekt reprezentujący dane formularza HTML.

Konstruktor wygląda następująco:
```js
let formData = new FormData([form]);
```

Przechwyci on automatycznie wszystkie pola formularza HTML na stronie.

<<<<<<< HEAD
`FormData` posiada tę szczególną cechę, że metody sieciowe takie jak `fetch` mogą przyjmować obiekt `FormData` jako ciało. Jest on wówczas kodowany i wysyłany jako `Content-Type: form/multipart`.
=======
The special thing about `FormData` is that network methods, such as `fetch`, can accept a `FormData` object as a body. It's encoded and sent out with `Content-Type: multipart/form-data`.
>>>>>>> d35baee32dcce127a69325c274799bb81db1afd8

Z perspektywy serwera wygląda to jak zwykłe przesłanie formularza.

## Wysyłanie prostego formularza

Na początek wyślijmy prosty formularz.

Jak widać, to niemal jedna linijka:

```html run autorun
<form id="formElem">
  <input type="text" name="name" value="Jan">
  <input type="text" name="surname" value="Kowalski">
  <input type="submit">
</form>

<script>
  formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('/article/formdata/post/user', {
      method: 'POST',
*!*
      body: new FormData(formElem)
*/!*
    });

    let result = await response.json();

    alert(result.message);
  };
</script>
```

Kod serwera jest poza naszym zakresem zainteresowania, zatem nie pokazujemy go w tym przykładzie. W każdym razie serwer akceptuje żądanie POST i odpowiada komunikatem: "Użytkownik zapisany".

## Metody FormData

Pola w `FormData` możemy zmieniać następującymi metodami:

- `formData.append(name, value)` - dodaj pole formularza o nazwie `name` i wartości `value`,
- `formData.append(name, blob, fileName)` - dodaj pole tak jakby było znacznikiem `<input type="file">`; trzeci argument `fileName` ustawia nazwę pliku (nie nazwę formularza), tak jakby była nazwą pliku w systemie plików użytkownika,
- `formData.delete(name)` - usuń pole `name`,
- `formData.get(name)` - pobierz wartość pola `name`,
- `formData.has(name)` - jeżeli istnieje pole `name`, zwróć `true`; w innym przypadku zwróć `false`

Formularz, z technicznego punktu widzenia, może mieć pól o nazwie `name`, tak więc wiele wywołań metody `append` doda wiele pól o tej samej nazwie.

Istnieje również metoda `set`, która ma taką samą składnię jak `append`. Różnica polega na tym, że `.set` usuwa wszystkie pola o nazwie `name`, a następnie dodaje nowe pole. Dzięki temu zapewnia, że istnieje tylko jedno pole o nazwie `name`. Pozostała część wygląda jak w metodzie `append`:

- `formData.set(name, value)`,
- `formData.set(name, blob, fileName)`.

Możemy również iterować po polach `formData`, używając pętli `for..of`:

```js run
let formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');

// Wylicz pary klucz/wartość
for(let [name, value] of formData) {
  alert(`${name}=${value}`); // key1=value1 oraz key2=value2
}
```

## Wysyłanie formularza z plikiem

<<<<<<< HEAD
Formularz jest zawsze wysyłany jako `Content-Type: form/multipart`, gdyż takie kodowanie pozwala na wysyłkę plików. Tak więc pola `<input type="file">` są również wysyłane, podobnie jak ma to miejsce w zwykłym przesłaniu formularza.
=======
The form is always sent as `Content-Type: multipart/form-data`, this encoding allows to send files. So, `<input type="file">` fields are sent also, similar to a usual form submission.
>>>>>>> d35baee32dcce127a69325c274799bb81db1afd8

Oto przykład takiego formularza:

```html run autorun
<form id="formElem">
  <input type="text" name="firstName" value="Jan">
   Obraz: <input type="file" name="picture" accept="image/*">
  <input type="submit">
</form>

<script>
  formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('/article/formdata/post/user-avatar', {
      method: 'POST',
*!*
      body: new FormData(formElem)
*/!*
    });

    let result = await response.json();

    alert(result.message);
  };
</script>
```

## Wysyłanie formularza z danymi typu Blob

W rozdziale pt. "<info:fetch>" widzieliśmy, że wysyłka dynamicznie generowanych danych binarnych, np. obrazu jako `Blob`, jest dość prosta. Możemy go umieścić jako parametr `body` funkcji `fetch`.

W praktyce jednak często wygodniej jest wysłać obraz nie osobno, ale jako część formularza, z dodatkowymi polami, takimi jak "nazwa” i inne metadane.

Ponadto serwery są zwykle lepiej przystosowane do akceptowania formularzy zakodowanych w postaci wieloczęściowej (ang. *multipart*) niż surowych danych binarnych.

W tym przykładzie wysyłamy w formularzu obraz ze znacznika `<canvas>` wraz z innymi polami, używając  do tego `FormData`:

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
      let imageBlob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));

*!*
      let formData = new FormData();
      formData.append("firstName", "Jan");
      formData.append("image", imageBlob, "image.png");
*/!*    

      let response = await fetch('/article/formdata/post/image-form', {
        method: 'POST',
        body: formData
      });
      let result = await response.json();
      alert(result.message);
    }

  </script>
</body>
```

Zwróć uwagę, w jaki sposób dodawany jest obraz jako `Blob`:

```js
formData.append("image", imageBlob, "obraz.png");
```

To tak, jakby w formularzu był znacznik `<input type="file" name="image">`, a użytkownik załadował z systemu plików plik o nazwie `"obraz.png"` (trzeci argument) jako `imageBlob` (drugi argument).

Serwer odczytuje dane formularza i plik, tak jakby było to zwykłe przesyłanie formularza.

## Podsumowanie

Obiekty klasy [FormData](https://xhr.spec.whatwg.org/#interface-formdata) służą do przechwycenia formularza HTML i przesłania go za pomocą `fetch` lub innej funkcji sieciowej.

Możemy albo utworzyć `new FormData(form)` na podstawie formularza HTML, albo stworzyć obiekt bez formularza, a następnie dołączyć do niego pola metodami:

- `formData.append(name, value)`
- `formData.append(name, blob, fileName)`
- `formData.set(name, value)`
- `formData.set(name, blob, fileName)`

Zwróćmy uwagę na dwie osobliwości:

1. Metoda `set` usuwa zduplikowane pola o tej samej nazwie, a `append` nie. To jedynia różnica między nimi.
2. Aby wysłać plik, potrzebna jest trójargumentowa składnia, gdzie ostatnim argumentem jest nazwa pliku, zwykle pobierana z systemu plików na potrzeby `<input type="file">`.

Inne metody to:

- `formData.delete(name)`
- `formData.get(name)`
- `formData.has(name)`

I to by było na tyle!
