Zwracany ciąg nie może być dłuższy niż `maxlength`, więc jeśli go skrócimy, to musimy usunąć o jeden znak mniej, aby zrobić miejsce na wielokropek.

<<<<<<< HEAD
Należy pamiętać, że wielokropek to '…' – dokładnie jeden znak specjalny Unicode. To nie to samo, co '. . .' – trzy kropki.
=======
Note that there is actually a single Unicode character for an ellipsis. That's not three dots.
>>>>>>> 6236eb8c3cdde729dab761a1d0967a88a1a6197e

```js run demo
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
```
