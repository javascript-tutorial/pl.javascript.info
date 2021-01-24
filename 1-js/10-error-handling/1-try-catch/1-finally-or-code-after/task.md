importance: 5

---

# Czy blok finally jest rzeczywiście potrzebny?

Porównaj obydwa fragmenty programu:

1. Pierwszy fragment zawiera blok `finally`, naturalnie wykona się jako ostatni ze wszystkich bloków instrukcji:

    ```js
    try {
      // spróbuj wykonać instrukcje
    } catch (e) {
      // obsłuż błąd
    } finally {
    *!*
      // sfinalizuj instrukcję
    */!*
    }
    ```
2. Drugi fragment nie zawiera bloku `finally`. Instrukcja `try...catch` zostaje sfinalizowana na zewnątrz, zaraz po jej całkowitym wykonaniu.

    ```js
    try {
      // spróbuj wykonać instrukcje
    } catch (e) {
      // obsłuż błędy
    }

    *!*
    // sfinalizuj instrukcję
    */!*
    ```
Bez względu na to czy pojawi się błąd czy też nie, chcemy sfinalizować instrukcję. 

Czy istnieje jakaś różnica między powyższymi fragmentami kodu, wynikająca z używania bloku `finally`? Jeśli tak to przedstaw przykład kiedy ma to znaczenie. A może oba fragmenty są sobie równe?
