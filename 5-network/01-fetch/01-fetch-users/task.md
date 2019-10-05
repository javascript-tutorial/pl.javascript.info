# Pobierz użytkowników z GitHuba

Stwórz asynchroniczną funkcję `getUsers(names)`, która pobiera z GitHuba tablicę z nazwami użytkowników, a następnie zwraca tablicę z odpowiadającymi im użytkownikami.

Informacje o użytkowniku przypisanym do `USERNAME`, znajdują się pod adresem url: `https://api.github.com/users/USERNAME`.

W środowisku izolowanym znajduje się przykład testowy.

Ważne informacje:

1. Można wykonać tylko jedno żądanie `fetch` o dane użytkownika.
2. Żądania nie powinny na siebie oczekiwać. Chodzi o to, aby dane dotarły jak najszybciej.
3. Jeżeli żądanie się nie powiedzie lub nie będzie użytkownika o podanej nazwie, funkcja powinna zwrócić `null` w tablicy wynikowej.