# Obsługa błędów, "try...catch"

Nieważne jak świetnymi jesteśmy programistami, zdarza się, że do naszych programów wkradają się błędy. Mogą wystąpić jako rezultat naszej literówki, przez niespodziewane dane wejściowe użytkownika, błędnej odpowiedzi serwera czy z tysiąca wielu innych powodów. 

Z reguły, nasz program zostaje natychmiastowo przerwany w sytuacji napotkania błędu, zaraz po zwróceniu jego zawartości do konsoli.

Przy użyciu instrukcji `try...catch`, możemy obsłużyć błędy w bardziej sensowny sposób.

## Składnia "try...catch"

Instrukcja `try...catch` zawiera dwa główne bloki - `try {...}` oraz `catch(err) {...}`:

```js
try {

  // instrukcje do wykonania...

} catch (err) {

  // obsługa błędu z pierwszego bloku...

}
```

Sposób działania:

1. Rozpoczęcie wykonywania się kodu zawartego w bloku `try {...}`.
2. Bezbłędne wykonanie pierwszego bloku oznacza, że drugi blok `catch(err) {...}` zostaje pominięty, a program rusza dalej.
3. W przypadku pojawienia się błędu, wykonywanie bloku `try {...}` zostaje przerwane, a kontrola przekazana jest drugiemu blokowi `catch(err) {...}`. Parametr `err` może mieć dowolną nazwę, argumentem jest obiekt zawierający błąd oraz szczegóły jego wystąpienia.

![](try-catch-flow.svg)

Błąd, który wystąpił w pierwszym bloku `try {...}`, nie przerywa działania programu, więc mamy szansę go obsłużyć w drugim bloku `catch(err) {...}`.

Spójrzmy na przykłady:

- Przykład programu niezawierającego błędu, wykonuje instrukcje `alert` `(1)` oraz `(2)`:

    ```js run
    try {

      alert('początek bloku try');  // *!*(1) <--*/!*

      // ...instrukcja została wykonana, brak błędu

      alert('koniec bloku try');   // *!*(2) <--*/!*

    } catch(err) {

      alert('blok catch został pominięty, z powodu braku błędu'); // (3)

    }
    ```
- Przykład programu zawierającego błąd: wykonuje instrukcje `(1)` oraz `(3)`:

    ```js run
    try {

      alert('instrukcja została wykonana');  // *!*(1) <--*/!*

    *!*
      lalala; // niezadeklarowana zmienna powoduje wystąpienie błędu
    */!*

      alert('instrukcja nie została wykonana');  // (2)

    } catch(err) {

      alert(`w programie pojawił się błąd!`); // *!*(3) <--*/!*

    }
    ```

````warn header="`try...catch` umożliwia obsługę błędów napotkanych tylko w trakcie wykonywania się programu"

Aby instrukcja `try...catch` zadziałała, kod zawarty w tym bloku powinien być w stanie się uruchomić. Innymi słowy, musi to być poprawny kod JavaScript. 

Instrukcja nie uruchomi się, jeśli napotka błędy składniowe. Weźmy za przykład nieparzystą ilość klamer:

```js run
try {
  {{{{{{{{{{{{
} catch(e) {
  alert("silnik nie jest w stanie zrozumieć kodu zawartego w powyższym bloku, ponieważ jest niepoprawny");
}
```
Silnik JavaScript najpierw odczytuje kod, a dopiero potem go wykonuje. Błędy fazy analizy kodu nie zostaną obsłużone w pierwszym bloku instrukcji, ponieważ silnik nic z niego nie zrozumiał.

A więc, `try...catch` umożliwia nam tylko i wyłącznie obsługę błędów występujących w poprawnym składniowo kodzie. Takie błędy nazywane są błędami napotkanymi w trakcie wykonywania się programu czy też wyjątkami. 
````


````warn header="`try...catch` działa synchronicznie"
Jeśli wyjątek pojawi się w operacji asynchronicznej, przykładowo `setTimeout`, wtedy instrukcja `try...catch` jej nie złapie:

```js run
try {
  setTimeout(function() {
    noSuchVariable; // W tym miejscu, program zostanie przerwany
  }, 1000);
} catch (e) {
  alert( "instrukcja nie została wykonana" );
}
```

To dlatego, że funkcja została wykonana później, kiedy silnik zdążył już opuścić instrukcję `try...catch`.  

Aby złapać wyjątek podczas asynchronicznej operacji, `try...catch` musi znajdować się w środku tego działania:
```js run
setTimeout(function() {
  try {    
    noSuchVariable; // instrukcja try...catch obsłuży ten błąd!
  } catch {
    alert( "błąd pierwszego bloku zostanie tutaj obsłużony" );
  }
}, 1000);
```
````

## Obiekt błędu

Podczas pojawienia się błędu w programie, silnik JavaScript generuje obiekt zawierający błąd oraz szczegóły jego wystąpienia. Następnie zostaje przekazany jako argument drugiego bloku `catch(err) {...}`:

```js
try {
  // ...
} catch(err) { // <-- w tym miejscu znajduje się nasz obiekt błędu, parametr err może mieć dowolną nazwę
  // ...
}
```

Dla wszystkich wbudowanych błędów środowiskowych, obiekt błędu składa się z dwóch głównych właściwości:

`name`
: Identyfikator błędu. Przykład, niezadeklarowana zmienna spowoduje wystąpienie błędu odniesienia (ang. Reference Error).

`message`
: Wiadomość w formie łańcucha znaków, mieszcząca w sobie szczegóły wystąpienia błędu.

Istnieją również nieustandaryzowane właściwości, które są dostępne w wielu środowiskach. Stos jest jedną z nich, zarazem najbardziej używaną i wspieraną:

`stack`
: Aktualny stos wywołań. Zwraca sekwencję zagnieżdżonych wywołań, które doprowadzą nas do miejsca wystąpienia błędu. Przydatne w procesie debugowania.

Przykład:

```js run untrusted
try {
*!*
  lalala; // niezadeklarowana zmienna powoduje wystąpienie błędu
*/!*
} catch(err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at (...zagnieżdżona sekwencja wywołań)

  // możemy wyświetlić skondensowaną wersję błędu
  // zwraca wiadomość tekstową w formacie "name: message"
  alert(err); // ReferenceError: lalala is not defined
}
```

## Opcjonalne zwrócenie błędu

[recent browser=new]

Jeśli nie potrzebujemy informacji o błędzie, pozbywamy się parametru drugiego bloku `catch(err) {...}`: 

```js
try {
  // ...
} catch { // <-- nie uwzględniamy parametru (err)
  // ...
}
```

## Zastosowanie "try...catch" w życiu codziennym

Spójrzmy na realny sposób użycia instrukcji `try...catch`.

Na tym etapie powinniśmy już wiedzieć o metodzie [JSON.parse(str)](mdn:js/JSON/parse), która umożliwia nam przetworzenie obiektu typu JSON.

Metoda zwykle jest używana do przekształcenia informacji otrzymanych z poziomu sieci, serwera czy innych źródeł.  

Po ich otrzymaniu, wywołujemy metodę `JSON.parse`:

```js run
let json = '{"name":"Jacek", "age": 30}'; // otrzymane dane z serwera w formie obiektu JSON

*!*
let user = JSON.parse(json); // przekształć łańcuch znaków na obiekt JavaScript
*/!*

// od teraz pod zmienną "user" znajduje się odniesienie do utworzonego obiektu
alert( user.name ); // Jacek
alert( user.age );  // 30
```

Więcej informacji o obiekcie JSON znajduje się w rozdziale <info:json>.

**Jeśli obiekt JSON został źle sformułowany, metoda `JSON.parse` wygeneruje błąd, który natychmiastowo przerwie program.**

Nie brzmi to przekonująco, prawda?

Jeśli coś pójdzie nie tak, odwiedzający nie otrzyma żadnej informacji zwrotnej o błędzie, który wystąpił. Zazwyczaj nie lubimy, gdy coś nagle przestaje działać i nie wiemy po której stronie leży problem.

Możemy wdrożyć instrukcję `try...catch`, aby obsłużyć ten błąd:

```js run
let json = "{ niepoprawnie sformułowany obiekt JSON }";

try {

*!*
  let user = JSON.parse(json); // <-- instrukcja tworzy obiekt błędu
*/!*
  alert( user.name ); // instrukcja nie została wykonana

} catch(e) {
*!*
  // kontrolę nad programem przejął drugi blok
  alert( "Przepraszamy, wystąpił błąd podczas wykonywania działań na otrzymanych danych z serwera. Spróbujemy wykonać akcję ponownie." );
  alert( e.name );
  alert( e.message );
*/!*
}
```

Drugi blok `catch(e) {...}` zwróci odwiedzającemu wyłącznie wiadomość tekstową oraz szczegóły wystąpienia błędu. Możemy pójść o krok dalej i wykonać kolejne żądanie serwerowe czy zapisać kopię wystąpienia błędu na naszych zasobach serwerowych. Generalnie każdy z tych wariantów jest lepszym rozwiązaniem niż brak implementacji obsługi błędu. 

## Obsługa wyjątków

Co jeśli odbierany obiekt `json` jest poprawnie sformułowany, ale nie zawiera własności `name`, której się spodziewaliśmy?

Spójrzmy:

```js run
let json = '{ "age": 30 }'; // obiekt JSON nie zawiera własności, którą chcemy zwrócić

try {

  let user = JSON.parse(json); // <-- instrukcja została wykonana, brak błędu
*!*
  alert( user.name ); // metoda alert zwraca wartość undefined, ponieważ własność nie istnieje
*/!*

} catch (e) {
  alert( "instrukcja nie została wykonana" );
}
```

Metoda `JSON.parse` wykonała się poprawnie. Brak spodziewanej własności `name` stanowi dla nas problem. 

Aby poradzić sobie w takich sytuacjach, mamy do dyspozycji operator `throw`.

### Operator "throw"

Za pomocą operatora `throw`, możemy utworzyć obiekt błędu.

Składnia wygląda następująco:

```js
throw <obiekt błędu>
```

Formalnie rzecz biorąc, naszym obiektem błędu może być wszystko. Możemy użyć wartości prymitywnych takich jak ciąg znaków czy wartości numerycznych, ale przyjmujemy konwencję używania obiektów, domyślnie z dwiema własnościami `name` oraz `message`. Głównie ze względu na to, aby zachować analogię zwracania błędów środowiskowych.

Silnik JavaScript oferuje wiele konstruktorów dla błędów środowiskowych: `Error`, `SyntaxError`, `ReferenceError`, `TypeError` i tak dalej. Jeśli chcemy, możemy także ich użyć do utworzenia obiektu błędu.

Zerknijmy na składnię:

```js
let error = new Error(message);
// lub
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...
```

Podczas tworzenia błędów środowiskowych, własność `name` przyjmuje wartość nazwy konstruktora, a wartość własności `message` zostaje przekazana jako argument.

Dla przykładu:

```js run
let error = new Error("coś poszło nie tak");

alert(error.name); // Error
alert(error.message); // coś poszło nie tak
```

Spójrzmy jaki błąd wygeneruje wywołanie metody `JSON.parse`:

```js run
try {
  JSON.parse("{ niepoprawnie sformułowany obiekt JSON }");
} catch(e) {
*!*
  alert(e.name); // SyntaxError
*/!*
  alert(e.message); // Unexpected token b in JSON at position 2
}
```

Jak możemy zauważyć, identyfikatorem błędu jest `SyntaxError`.

W naszej sytuacji, brak spodziewanej własności `name` stanowi problem, ponieważ użytkownicy muszą mieć imię. 


Zatem spróbujmy przygotować wyjątek:

```js run
let json = '{ "age": 30 }'; // obiekt JSON nie zawiera własności, którą chcemy zwrócić

try {

  let user = JSON.parse(json); // <-- instrukcja została wykonana, brak błędu

  if (!user.name) {
*!*
    throw new SyntaxError("Niekompletne dane: obiekt nie zawiera własności imienia"); // (*)
*/!*
  }

  alert( user.name );

} catch(e) {
  alert( "Błąd w obiekcie JSON: " + e.message ); // Błąd w obiekcie JSON: Niekompletne dane: obiekt nie zawiera własności imienia
}
```

Spójrzmy na instrukcję oznaczoną asteriksem. Za pośrednictwem operatora `throw`, generujemy błąd o identyfikatorze `SyntaxError` oraz przekazujemy argument `message`. Wykonywanie bloku `try {...}` zostaje przerwane, a kontrola przekazana jest drugiemu blokowi `catch(e) {...}`.

Warto zaznaczyć, że drugi blok `catch(e) {...}` obsługuje przypadki wszystkich błędów jakie mogą się pojawić, nie tylko metody `JSON.parse`.

## Rethrowing

In the example above we use `try..catch` to handle incorrect data. But is it possible that *another unexpected error* occurs within the `try {...}` block? Like a programming error (variable is not defined) or something else, not just this "incorrect data" thing.

For example:

```js run
let json = '{ "age": 30 }'; // incomplete data

try {
  user = JSON.parse(json); // <-- forgot to put "let" before user

  // ...
} catch(err) {
  alert("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
  // (no JSON Error actually)
}
```

Of course, everything's possible! Programmers do make mistakes. Even in open-source utilities used by millions for decades -- suddenly a bug may be discovered that leads to terrible hacks.

In our case, `try..catch` is meant to catch "incorrect data" errors. But by its nature, `catch` gets *all* errors from `try`. Here it gets an unexpected error, but still shows the same `"JSON Error"` message. That's wrong and also makes the code more difficult to debug.

Fortunately, we can find out which error we get, for instance from its `name`:

```js run
try {
  user = { /*...*/ };
} catch(e) {
*!*
  alert(e.name); // "ReferenceError" for accessing an undefined variable
*/!*
}
```

The rule is simple:

**Catch should only process errors that it knows and "rethrow" all others.**

The "rethrowing" technique can be explained in more detail as:

1. Catch gets all errors.
2. In the `catch(err) {...}` block we analyze the error object `err`.
2. If we don't know how to handle it, we do `throw err`.

In the code below, we use rethrowing so that `catch` only handles `SyntaxError`:

```js run
let json = '{ "age": 30 }'; // incomplete data
try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

*!*
  blabla(); // unexpected error
*/!*

  alert( user.name );

} catch(e) {

*!*
  if (e.name == "SyntaxError") {
    alert( "JSON Error: " + e.message );
  } else {
    throw e; // rethrow (*)
  }
*/!*

}
```

The error throwing on line `(*)` from inside `catch` block "falls out" of `try..catch` and can be either caught by an outer `try..catch` construct (if it exists), or it kills the script.

So the `catch` block actually handles only errors that it knows how to deal with and "skips" all others.

The example below demonstrates how such errors can be caught by one more level of `try..catch`:

```js run
function readData() {
  let json = '{ "age": 30 }';

  try {
    // ...
*!*
    blabla(); // error!
*/!*
  } catch (e) {
    // ...
    if (e.name != 'SyntaxError') {
*!*
      throw e; // rethrow (don't know how to deal with it)
*/!*
    }
  }
}

try {
  readData();
} catch (e) {
*!*
  alert( "External catch got: " + e ); // caught it!
*/!*
}
```

Here `readData` only knows how to handle `SyntaxError`, while the outer `try..catch` knows how to handle everything.

## try..catch..finally

Wait, that's not all.

The `try..catch` construct may have one more code clause: `finally`.

If it exists, it runs in all cases:

- after `try`, if there were no errors,
- after `catch`, if there were errors.

The extended syntax looks like this:

```js
*!*try*/!* {
   ... try to execute the code ...
} *!*catch*/!*(e) {
   ... handle errors ...
} *!*finally*/!* {
   ... execute always ...
}
```

Try running this code:

```js run
try {
  alert( 'try' );
  if (confirm('Make an error?')) BAD_CODE();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}
```

The code has two ways of execution:

1. If you answer "Yes" to "Make an error?", then `try -> catch -> finally`.
2. If you say "No", then `try -> finally`.

The `finally` clause is often used when we start doing something and want to finalize it in any case of outcome.

For instance, we want to measure the time that a Fibonacci numbers function `fib(n)` takes. Naturally, we can start measuring before it runs and finish afterwards. But what if there's an error during the function call? In particular, the implementation of `fib(n)` in the code below returns an error for negative or non-integer numbers.

The `finally` clause is a great place to finish the measurements no matter what.

Here `finally` guarantees that the time will be measured correctly in both situations -- in case of a successful execution of `fib` and in case of an error in it:

```js run
let num = +prompt("Enter a positive integer number?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (e) {
  result = 0;
*!*
} finally {
  diff = Date.now() - start;
}
*/!*

alert(result || "error occurred");

alert( `execution took ${diff}ms` );
```

You can check by running the code with entering `35` into `prompt` -- it executes normally, `finally` after `try`. And then enter `-1` -- there will be an immediate error, and the execution will take `0ms`. Both measurements are done correctly.

In other words, the function may finish with `return` or `throw`, that doesn't matter. The `finally` clause executes in both cases.


```smart header="Variables are local inside `try..catch..finally`"
Please note that `result` and `diff` variables in the code above are declared *before* `try..catch`.

Otherwise, if we declared `let` in `try` block, it would only be visible inside of it.
```

````smart header="`finally` and `return`"
The `finally` clause works for *any* exit from `try..catch`. That includes an explicit `return`.

In the example below, there's a `return` in `try`. In this case, `finally` is executed just before the control returns to the outer code.

```js run
function func() {

  try {
*!*
    return 1;
*/!*

  } catch (e) {
    /* ... */
  } finally {
*!*
    alert( 'finally' );
*/!*
  }
}

alert( func() ); // first works alert from finally, and then this one
```
````

````smart header="`try..finally`"

The `try..finally` construct, without `catch` clause, is also useful. We apply it when we don't want to handle errors here (let them fall through), but want to be sure that processes that we started are finalized.

```js
function func() {
  // start doing something that needs completion (like measurements)
  try {
    // ...
  } finally {
    // complete that thing even if all dies
  }
}
```
In the code above, an error inside `try` always falls out, because there's no `catch`. But `finally` works before the execution flow leaves the function.
````

## Global catch

```warn header="Environment-specific"
The information from this section is not a part of the core JavaScript.
```

Let's imagine we've got a fatal error outside of `try..catch`, and the script died. Like a programming error or some other terrible thing.

Is there a way to react on such occurrences? We may want to log the error, show something to the user (normally they don't see error messages), etc.

There is none in the specification, but environments usually provide it, because it's really useful. For instance, Node.js has [`process.on("uncaughtException")`](https://nodejs.org/api/process.html#process_event_uncaughtexception) for that. And in the browser we can assign a function to the special [window.onerror](mdn:api/GlobalEventHandlers/onerror) property, that will run in case of an uncaught error.

The syntax:

```js
window.onerror = function(message, url, line, col, error) {
  // ...
};
```

`message`
: Error message.

`url`
: URL of the script where error happened.

`line`, `col`
: Line and column numbers where error happened.

`error`
: Error object.

For instance:

```html run untrusted refresh height=1
<script>
*!*
  window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n At ${line}:${col} of ${url}`);
  };
*/!*

  function readData() {
    badFunc(); // Whoops, something went wrong!
  }

  readData();
</script>
```

The role of the global handler `window.onerror` is usually not to recover the script execution -- that's probably impossible in case of programming errors, but to send the error message to developers.

There are also web-services that provide error-logging for such cases, like <https://errorception.com> or <http://www.muscula.com>.

They work like this:

1. We register at the service and get a piece of JS (or a script URL) from them to insert on pages.
2. That JS script sets a custom `window.onerror` function.
3. When an error occurs, it sends a network request about it to the service.
4. We can log in to the service web interface and see errors.

## Summary

The `try..catch` construct allows to handle runtime errors. It literally allows to "try" running the code and "catch" errors that may occur in it.

The syntax is:

```js
try {
  // run this code
} catch(err) {
  // if an error happened, then jump here
  // err is the error object
} finally {
  // do in any case after try/catch
}
```

There may be no `catch` section or no `finally`, so shorter constructs `try..catch` and `try..finally` are also valid.

Error objects have following properties:

- `message` -- the human-readable error message.
- `name` -- the string with error name (error constructor name).
- `stack` (non-standard, but well-supported) -- the stack at the moment of error creation.

If an error object is not needed, we can omit it by using `catch {` instead of `catch(err) {`.

We can also generate our own errors using the `throw` operator. Technically, the argument of `throw` can be anything, but usually it's an error object inheriting from the built-in `Error` class. More on extending errors in the next chapter.

*Rethrowing* is a very important pattern of error handling: a `catch` block usually expects and knows how to handle the particular error type, so it should rethrow errors it doesn't know.

Even if we don't have `try..catch`, most environments allow us to setup a "global" error handler to catch errors that "fall out". In-browser, that's `window.onerror`.
