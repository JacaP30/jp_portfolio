# Predyktor Czasu Półmaratonu AI {: .portfolio-title }

<p class="portfolio-lead">
Aplikacja opiera swoje działanie na modelu regresyjnym do przewidywania prawdopodobnego czasu ukończenia Półmaratonu Wrocławskiego, wytrenowanym na bazie danych z lat 2023 i 2024 na Digital Ocean. LLM wyłuskuje z opisu potrzebne informacje do predykcji, a metryki zapisywane są do bazy Langfuse.
</p>

<div class="portfolio-cta" markdown="1">
<a href="https://predyktor-czasu-pulmaratonu.streamlit.app/" class="md-button md-button--primary" target="_blank" rel="noopener noreferrer">Demo — Streamlit</a>
<a href="https://predyktor.netlify.app/" class="md-button" target="_blank" rel="noopener noreferrer">Demo — React</a>
<a href="trenowanie_modelu.ipynb" class="md-button" data-tooltip="Pobierz notebook z trenowaniem modelu">Notebook</a>
</div>

## Zrzuty ekranu

<p class="portfolio-hint">Kliknięcie obrazu otworzy aplikację.</p>

<div class="portfolio-gallery" markdown="1">
<a href="https://predyktor-czasu-pulmaratonu.streamlit.app/" target="_blank" rel="noopener noreferrer">![Panel predykcji czasu półmaratonu — wersja Streamlit](foto/foto1.png)</a>
<a href="https://predyktor.netlify.app/" target="_blank" rel="noopener noreferrer">![Panel predykcji czasu półmaratonu — wersja React](foto/foto2.png)</a>
</div>

## Funkcjonalność

- W polu tekstowym użytkownik się przedstawia, podaje płeć, wiek i tempo na 5 km
- Jeśli użytkownik podał za mało danych, wyświetla informację o tym, jakich danych brakuje
- Za pomocą LLM (OpenAI) wyłuskuje dane potrzebne dla modelu ML
- Wyświetla prawdopodobny czas ukończenia maratonu z wysoką dokładnością (R² 0.9856)
- Zbiera metryki o skuteczności działania LLM w Langfuse

## Metryki wytrenowanego modelu

<div class="portfolio-gallery portfolio-gallery--single" markdown="1">
![Metryki modelu regresyjnego — R², MAE, RMSE](foto/foto3.png)
</div>

## Technologie

<div class="portfolio-tech" markdown="1">
<span class="portfolio-chip">Python</span>
<span class="portfolio-chip">Streamlit</span>
<span class="portfolio-chip">React</span>
<span class="portfolio-chip">OpenAI</span>
<span class="portfolio-chip">Langfuse</span>
<span class="portfolio-chip">Scikit-learn</span>
<span class="portfolio-chip">PyCaret</span>
<span class="portfolio-chip">Pandas</span>
<span class="portfolio-chip">NumPy</span>
<span class="portfolio-chip">Boto3</span>
<span class="portfolio-chip">Digital Ocean</span>
<span class="portfolio-chip">Jupyter Notebook</span>
<span class="portfolio-chip">GitHub</span>
</div>
