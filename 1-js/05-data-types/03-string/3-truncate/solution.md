Zwracany ciąg nie może być dłuższy niż `maxlength`, więc jeśli go skrócimy, to musimy usunąć o jeden znak mniej, aby zrobić miejsce na wielokropek.

<<<<<<< HEAD
Należy pamiętać, że wielokropek to '…' – dokładnie jeden znak specjalny Unicode. To nie to samo, co '. . .' – trzy kropki.
=======
Note that there is actually a single Unicode character for an ellipsis. That's not three dots.
>>>>>>> ff804bc19351b72bc5df7766f4b9eb8249a3cb11

```js run demo
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
```
