
# Przepisz kod użwając funckji strzałkowych

Zastąp wyrażenia funkcyjne funkcjami strzałkowymi w poniższym kodzie:

```js run
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Zgadzasz się?",
  function() { alert("Zgodziłeś się."); },
  function() { alert("Anulowałeś wykonanie."); }
);
```
