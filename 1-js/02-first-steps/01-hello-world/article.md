# Hello, world!

Ta część tutoriala dotyczy jednego z fundamentów JavaScript. Później nauczysz się co nieco o Node.js i innych platformach, które go używają.

Potrzebujemy działającego środowiska, żeby uruchomić nasze skrypty. Skoro jesteś na tej stronie online, przeglądarka będzie najlepszą opcją. Ograniczymy liczbę komend specyficznych dla przeglądarek do minimum (np. `alert`), jeśli planujesz się skoncentrować bardziej na innym środowisku (np. Node.js). Będziemy szczegółowo omawiać JavaScript w przeglądarce w [nastepnym rozdziale](/ui) tego tutoriala.

Więc najpierw zobaczmy w jaki sposób dołączyć skrypty do strony. Dla środowisk serwerowych (np. Node.js), możesz wykonać skrypt z pliku uruchamiając komendę `"node my.js"`.


## Tag "script"

Kod JavaScript może być dodany w każdej części dokumentu HTML. Z pomocą przychodzi tag `<script>`.

Na przykład:

```html run height=100
<!DOCTYPE HTML>
<html>

<body>

  <p>Treść przed skryptem...</p>

*!*
  <script>
    alert( 'Hello, world!' );
  </script>
*/!*

  <p>...Treść po skrypcie.</p>

</body>

</html>
```

```online
Możesz kliknąć przycisk "Play" w prawym górnym rogu powyższego przykładu, aby uruchomić kod.
```

Tag `<script>` zawiera kod JavaScript, który jest automatycznie uruchomiony, kiedy przeglądarka przechodzi przez ten tag.


## Nowoczesny markup

Tag `<script>` posiada kilka atrybutów, które obecnie są rzadko używane, ale nadal można je znaleźć w starym kodzie. 

Atrybut `type`: <code>&lt;script <u>type</u>=...&gt;</code>
: Stary standard HTML4 wymagał dodania atrybutu `type`. Zazwyczaj był to `type="text/javascript"`. W obecnym standardzie nie jest już to wymagane. Dodatkowo nowoczesny HTML5 zmienił znaczenie tego atrybutu. Teraz jest on używany do modułów w JavaScript. Omówimy ten temat dokładnie w innej części tego tutoriala.

Atrybut `language`: <code>&lt;script <u>language</u>=...&gt;</code>
: Ten atrybut wskazywał, który język znajduje się wewnątrz. Obecnie nie ma to sensu, ponieważ JavaScript jest domyślnym językiem, zatem nie ma już więcej potrzeby by używać tego tagu.

Komentarze przed i po skrypcie: W bardzo starych książkach i przewodnikach możesz znaleźć komentarze wewnątrz tagu `<script>` jak te:

    ```html no-beautify
    <script type="text/javascript"><!--
        ...
    //--></script>
    ```

    Ten trick nie jest używany w nowym JavaScript. Te komentarze ukrywały kod JavaScript przed starym przeglądarkami, które nie wiedziały jak przetworzyć tag `<script>`. Przeglądarki powstałe w ostatnich 15 latach nie mają tego problemu, dlatego jeśli zobaczysz taki komentarz, wiedz, że spotkałeś właśnie bardzo stary kod.


## Zewnętrzne skrypty

Jeśli masz dużo kodu JavaScript możesz go umieścić w osobnych plikach.

Pliki ze skryptami dołączane są do HTML dzięki atrybutowi `src`:

```html
<script src="/path/to/script.js"></script>
```

W tym przypadku, `/path/to/script.js` to ścieżka absolutna do pliku ze skryptem (zaczynając od root-a strony).

Możesz też wskazać ścieżkę relatywną od obecnej strony, na przykład: `src="script.js"` oznacza, że plik `"script.js"` jest w tym samym folderze co strona.

Możesz również podać pełną ścieżkę URL. Na przykład:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"></script>
```

Żeby dodać kilka plików ze skryptami użyj kilku tagów:

```html
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
…
```

```smart
Z reguły do kodu HTML wstawiane są bardzo proste skrypty, a bardziej złożone reguły trzyma się w osobnych plikach.

Zaletą posiadania skryptów w osobnych plikach jest to, że przeglądarka go pobierze i zapisze w swojej pamięci [cache](https://en.wikipedia.org/wiki/Web_cache).

Jeśli inne strony muszą skorzystać z tych skryptów, a plik został już pobrany, robią to z pamięci podręcznej, zamiast pobierać go ponownie.

To znacznie przyspiesza działanie strony i redukuje niepotrzebny ruch. 
```

````warn header="Jeśli atrybut `src` jest dodany, wtedy skrypt w środku tagu nie będzie wykonany."
Pojedynczy tag `<script>` nie może mieć zatem jednocześnie atrybutu `src` i kodu w środku.

To nie zadziała:

```html
<script *!*src*/!*="file.js">
  alert(1); // treść kodu jest zignorowana, ponieważ dodano atrybut src
</script>
```

Musisz wybrać albo zewnętrzne pobranie skryptu `<script src="…">` albo zwykły `<script>` z kodem w środku.

Żeby powyższy przykład zadziałał musimy podzielić go na dwa osobne tagi:

```html
<script src="file.js"></script>
<script>
  alert(1);
</script>
```
````

## Podsumowanie

- Możesz użyć tagu `<script>` żeby dodać JavaScript na stronie.
- Atrybuty `type` oraz `language` nie są wymagane.
- Zewnętrzny skrypt może być dodany poprzez: `<script src="path/to/script.js"></script>`.


Jest jeszcze wiele rzeczy do nauki w jaki sposób przeglądarki obsługują skrypty. Pamiętajmy jednak, że ta część poświęcona jest językowi JavaScript, więc nie skupiajmy się na działaniu przeglądarek. Będziemy używać przeglądarki jako narzędzia do uruchamiania JavaScript, co jest wygodne w przypadku czytania online, ale jest jednym z wielu sposobów.