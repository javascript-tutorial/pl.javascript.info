
# Przepisz kod użwając funckji strzałkowych

Zastąp wyrażenia funkcyjne funkcjami strzałkowymi w poniższym kodzie:

```js run
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```
