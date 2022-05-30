Zwracany ciąg nie może być dłuższy niż `maxlength`, więc jeśli go skrócimy, to musimy usunąć o jeden znak mniej, aby zrobić miejsce na wielokropek.

Należy pamiętać, że wielokropek to '…' – dokładnie jeden znak specjalny Unicode. To nie to samo, co '. . .' – trzy kropki.

```js run demo
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
```
