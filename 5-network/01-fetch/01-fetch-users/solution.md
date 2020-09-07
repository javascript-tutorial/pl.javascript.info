
Do pobrania użytkownika wykorzystamy: `fetch('https://api.github.com/users/USERNAME')`.

Jeżeli odpowiedź zostanie zwrócona ze statusem `200`, wywołamy metodę `.json()`, aby móc odczytać javascriptowy obiekt.

<<<<<<< HEAD
Jeżeli natomiast `fetch` się nie powiedzie lub status odpowiedzi będzie inny niz 200, wówczas w tablicy wynikowej zwracamy po prostu `null`.
=======
Otherwise, if a `fetch` fails, or the response has non-200 status, we just return `null` in the resulting array.
>>>>>>> 58f6599df71b8d50417bb0a52b1ebdc995614017

Kod wygląda następująco:

```js demo
async function getUsers(names) {
  let jobs = [];

  for(let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      successResponse => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      }
    );
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  return results;
}
```

Zauważ, że metoda `.then` jest dołączona bezpośrednio do `fetch`, więc nie czeka ona na kolejne żądania, lecz jak tylko otrzyma odpowiedź, natychmiast odczytuje ją przy użyciu metody `.json()`.

Gdybyśmy jednak użyli `await Promise.all(names.map(name => fetch(...)))` i wywołali metodę `.json()` dopiero na rezultacie, wówczas musiałaby ona czekać, aż wszystkie żądania zwrócą swoje odpowiedzi. Dołączając `.json()` bezpośrednio do każdego zapytania `fetch` możemy być pewni, że pojedyncze zapytania zaczną odczytywać dane jako JSON, bez czekania nawzajem na siebie.

Jest to przykład tego, jak przydatne może być niskopoziomowe Promise API, nawet jeżeli głównie korzystamy z `async/await`.
