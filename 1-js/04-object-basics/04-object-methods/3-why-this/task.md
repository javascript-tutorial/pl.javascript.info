importance: 3

---

# Określ wartość "this:

W poniższym kodzie chcemy wywołać metodę `obj.go()` cztery razy pod rząd.

Jednak wywołania `(1)` i `(2)` działają inaczej niż `(3)` i `(4)`. Dlaczego?

```js run no-beautify
let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined
```

