# Portfolio – Jacek Przybylak

## Opis
Repozytorium zawiera statyczne portfolio tworzone w oparciu o **MkDocs** i motyw **Material for MkDocs**. Strona prezentuje projekty z zakresu Data Science oraz AI, opis doświadczenia autora i dane kontaktowe.

## Struktura
- `docs/` – źródła treści w formacie Markdown oraz dodatkowe zasoby (grafiki, arkusze stylów, skrypty)
  - `index.md` – strona główna
  - `projekty/`, `obecne/`, `po_godzinach/` – podstrony projektów
  - `stylesheets/extra.css` – niestandardowe style (gradienty, tło, tooltipy itp.)
  - `javascripts/tooltips.js` – logika chmurek podpowiedzi
- `mkdocs.yml` – konfiguracja motywu, nawigacji i zasobów
- `site/` – (opcjonalnie) wygenerowana strona statyczna po wykonaniu `mkdocs build`

## Wymagania
- Python 3.9+
- MkDocs i motyw Material:
  ```bash
  pip install mkdocs mkdocs-material
  ```

## Szybki start
1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/JacaP30/jp_portfolio.git
   cd jp_portfolio
   ```
2. Uruchom lokalny serwer podglądu:
   ```bash
   mkdocs serve
   ```
   Strona będzie dostępna pod adresem `http://127.0.0.1:8000/`.
3. Aby zbudować statyczną wersję strony:
   ```bash
   mkdocs build
   ```
   Wynik pojawi się w katalogu `site/`.

## Dalsze kroki
- Dodaj link do profilu LinkedIn w `docs/index.md` (sekcja **Kontakt**).
- Uzupełnij tooltipy lub opisy projektów w odpowiednich plikach Markdown.
- Rozszerz sekcję **Po godzinach** o kolejne mini-projekty.

## Licencja
Jeśli nie określono inaczej, projekt jest udostępniany na warunkach licencji MIT. Możesz dowolnie modyfikować i publikować swoją wersję portfolio.

## Przebudowanie na GitHub
```
mkdocs gh-deploy
```