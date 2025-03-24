Zwracany ciąg nie może być dłuższy niż `maxlength`, więc jeśli go skrócimy, to musimy usunąć o jeden znak mniej, aby zrobić miejsce na wielokropek.

<<<<<<< HEAD
Należy pamiętać, że wielokropek to '…' – dokładnie jeden znak specjalny Unicode. To nie to samo, co '. . .' – trzy kropki.
=======
Note that there is actually a single Unicode character for an ellipsis. That's not three dots.
>>>>>>> 3d7abb9cc8fa553963025547717f06f126c449b6

```js run demo
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
```
