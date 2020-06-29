# Witaj, świecie!

Ta część samouczka dotyczy głównych funkcjonalności samego języka JavaScript.

Zanim jednak będziemy w stanie uruchamiać nasze skrypty, potrzebujemy środowiska do pracy. Skoro czytasz tę książkę online, idealnie do tego nada się twoja przeglądarka. Ograniczymy komendy przeglądarkowe (np. `alert`) do minimum, aby oszczędzić ci czasu na ich naukę, jeśli planujesz skoncentrować się na innym środowisku (jak np. Node.js). JavaScript działający w przeglądarce omówimy w [następnej części](/ui) tego samouczka.

Na początek zobaczmy, jak podpiąć skrypt do naszej strony. W środowiskach serwerowych (np. Node.js) skrypty wykonuje się poprzez komendę, np. `"node moj_skrypt.js"`.


## Znacznik "script"

Programy napisane w JavaScripcie można wrzucić do dowolnej części dokumentu HTML za pomocą znacznika `<script>`.

Na przykład:

```html run height=100
<!DOCTYPE HTML>
<html>

<body>

  <p>Kod przed skryptem...</p>

*!*
  <script>
    alert( 'Witaj, świecie!' );
  </script>
*/!*

  <p>... i za skryptem.</p>

</body>

</html>
```

```online
Aby uruchomić przykład, kliknij na przycisk "Play" w prawym górnym rogu.
```

Znacznik `<script>` zawiera kod javascriptowy, który jest automatycznie wywoływany, kiedy przeglądarka przetwarza jego zawartość.


## Nowoczesna składnia

Znacznik `<script>` posiada kilka atrybutów, których współcześnie się nie używa, a na które można się natknąć w starym kodzie:

<<<<<<< HEAD
Atrybut `type`: <code>&lt;script <u>type</u>=...&gt;</code>
: Stary standard HTML, czyli HTML4, wymagał, aby skrypty miały określony typ (`type`). Zwykle było to `type="text/javascript"`. Obecnie nie jest on już wymagany. Ponadto, w aktualnym standardzie HTML całkowicie zmieniło się jego znaczenie - teraz stosuje się go przy modułach javascriptowych. Ale to zaawansowany temat. O modułach będziemy mówić w innej części samouczka.
=======
The `type` attribute: <code>&lt;script <u>type</u>=...&gt;</code>
: The old HTML standard, HTML4, required a script to have a `type`. Usually it was `type="text/javascript"`. It's not required anymore. Also, the modern HTML standard totally changed the meaning of this attribute. Now, it can be used for JavaScript modules. But that's an advanced topic, we'll talk about modules in another part of the tutorial.
>>>>>>> 340ce4342100f36bb3c4e42dbe9ffa647d8716c8

Atrybut `language`: <code>&lt;script <u>language</u>=...&gt;</code>
: Ten atrybut służył do określenia języka skryptu. Obecnie nie ma on większego sensu, ponieważ JavaScript jest domyślnym językiem. Nie trzeba go używać.

Komentarze przed i za skryptem
: W pradawnych książkach i poradnikach możesz natknąć się na komentarze wewnątrz znacznika `<script>`, takie jak ten:

    ```html no-beautify
    <script type="text/javascript"><!--
        ...
    //--></script>
    ```

    W nowoczesnym JavaScripcie nie stosuje się już tego triku. Służył on do ukrywania kodu JavaScript przed przeglądarkami, które nie umiały przetwarzać znacznika `<script>`. Jednak z racji tego, że wszystkie przeglądarki z ostatnich 15 lat nie mają już tego problemu, taki komentarz pomoże ci jedynie rozpoznać bardzo, bardzo stary kod.


## Zewnętrzne skrypty

Kiedy kod skryptu nam się rozrośnie, możemy go umieścić w osobnym pliku.

Pliki skryptowe dołącza się do HTML-a za pomocą atrybutu `src`:

```html
<script src="/ścieżka/do/skryptu.js"></script>
```

W tym przykładzie `/ścieżka/do/skryptu.js` to ścieżka bezwzględna do pliku, licząc od katalogu głównego strony. Można jednak podać ścieżkę względną, liczoną od położenia aktualnej strony. Na przykład, `src="skrypt.js"` odnosi się do pliku `"skrypt.js"` w tym samym folderze.

Oprócz tego mamy możliwość podania pełnego adresu URL, na przykład:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
```

Jeśli chcesz dodać kilka skryptów, wstaw więcej znaczników:

```html
<script src="/js/skrypt1.js"></script>
<script src="/js/skrypt2.js"></script>
…
```

```smart
Kieruj się zasadą, że tylko proste i krótkie skrypty powinny trafić bezpośrednio do pliku HTML. Te bardziej skomplikowane należy wydzielać do osobnych plików.

Korzyścią z takiego podejścia jest fakt, że przeglądarka pobierze ten plik i zapisze w swojej [pamięci podręcznej](https://en.wikipedia.org/wiki/Web_cache).

Inne strony, które również korzystają z tego samego pliku, wczytają go z pamięci podręcznej, zamiast ponownie go pobierać. Dzięki temu plik ze skryptem jest pobierany tylko raz. Zmniejsza to zużycie łącza i przyspiesza wczytywanie strony.
```

````warn header="Jeśli znacznik ma ustawiony atrybut `src`, jego zawartość jest ignorowana."
Pojedynczy znacznik `<script>` nie może mieć jednocześnie atrybutu `src` i kodu wewnątrz znacznika.

Taki kod nie zadziała:

```html
<script *!*src*/!*="plik.js">
  alert(1); // ten kod jest ignorowany, bo ustawiono 'src'
</script>
```

Musimy wybrać, czy chcemy wczytać zewnętrzny skrypt za pomocą `<script src="…">`, czy wykonać kod zawarty wewnątrz `<script>`.

Powyższy przykład można rozbić na dwa skrypty:

```html
<script src="plik.js"></script>
<script>
  alert(1);
</script>
```
````

## Podsumowanie

- Znacznik `<script>` służy do dodawania kodu javascriptowego do strony.
- Atrybuty `type` i `language` nie są wymagane.
- Zewnętrzny skrypt z pliku wczytujemy za pomocą `<script src="ścieżka/do/skryptu.js"></script>`.


To tylko wierzchołek góry lodowej, jeśli chodzi o skrypty przeglądarkowe i ich interakcje ze stroną. Pamiętajmy jednak, że ta część samouczka jest poświęcona językowi JavaScript, dlatego nie powinniśmy mieszać sobie w głowach implementacjami właściwymi tylko dla przeglądarek. Do uruchamiania kodu javascriptowego będziemy używać przeglądarki, co jest wygodne podczas czytania online, ale to tylko jeden z wielu sposobów.
