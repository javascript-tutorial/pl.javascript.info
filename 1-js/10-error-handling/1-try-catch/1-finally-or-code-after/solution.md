Jeśli umieścimy pierwszy fragment w środku funkcji, szybko zauważymy różnicę. 

Występuje ona w momencie wyjścia z instrukcji `try...catch`.

Spójrzmy na przykład użycia `return` w środku `try...catch`. Trzeci blok `finally` wykona się dla *każdego* możliwego wyjścia z dwóch dostępnych bloków instrukcji `try...catch...finally`. Nawet jeśli użyjemy instrukcji `return`. 

```js run
function f() {
  try {
    alert('spróbuj wyświetlić okno dialogowe');
*!*
    return "opuść blok try";
*/!*
  } catch (e) {
    /// ...
  } finally {
    alert('sfinalizuj instrukcję');
  }
}

f(); // sfinalizuj instrukcję
```

lub kiedy używamy operatora `throw`, jak w przykładzie poniżej:

```js run
function f() {
  try {
    alert('spróbuj wyświetlić okno dialogowe');
    throw new Error("błąd!");
  } catch (e) {
    // ...
    if("nie interesują mnie błędy") {
*!*
      throw e;
*/!*
    }

  } finally {
    alert('sfinalizuj instrukcję')
  }
}

f(); // sfinalizuj instrukcję
```

To blok `finally` zagwarantuje sfinalizowanie instrukcji. Gdy użyjemy zawartości trzeciego bloku na zewnątrz, tuż przed końcem funkcji `f`, nie zostanie to wykonane w przedstawionych scenariuszach.