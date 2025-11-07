# **<span style="color: navy; font-weight: bold; text-shadow: 2px 2px 6px rgb(229, 210, 70)">Predyktor Czasu Półmaratonu AI</span>**
Aplikacja opiera swoje działanie na modelu regresyjnym do przewidywania prawdopodobnego czasu ukończenia Półmaratonu Wrocławskiego, wytrenowanym na bazie danych z roku 2023 i 2024, umieszczonych na Digital Ocean. LLM wyłuskuje z opisu potrzebne informacje do predykcji a jego metryki zapisywane są do bazy Langfuse. 


*<span style="color: navy; font-weight: bold;">Kliknięcie obrazu otworzy aplikację wykonaną w Streamlit</span>*

<a href="https://predyktor-czasu-pulmaratonu.streamlit.app//" target="_blank" rel="noopener noreferrer">
    <img src="foto/foto1.png" alt=" zrzut">
</a>

**<span style="color: navy; font-weight: bold;">Kliknięcie obrazu otworzy aplikację wykonaną w React</span>**    
  
<a href="https://predyktor.netlify.app//" target="_blank" rel="noopener noreferrer">
    <img src="foto/foto2.png" alt=" zrzut">
</a>

## ✨ **Funkcjonalność**     
 - w polu tekstowym, użytkownik się przedstawia, podaje płeć, wiek i tempo na 5km     
 - jeśli użytkownik podał za mało danych, wyświetla informację o tym jakich danych brakuje     
 - za pomocą LLM (OpenAI) wyłuskuje dane, potrzebne dla modelu ML   
 - wyświetla prawdopodobny czas ukończenia maratonu z wysoką dokładnością (R2 0.9856)   
 - zbiera metryki o skuteczności działania LLM'a w Langfuse     

## 🤖 Metryki wytrenowanego modelu
<img src="foto/foto3.png" alt="Metryki modelu">

## 📓 Notebook    
<a href="trenowanie_modelu.ipynb" class="md-button md-button--primary" data-tooltip="Pobierz plik Jupyter Notebook z pełną analizą danych irysów">Notebook</a>

## 💻 **Wykorzystane technologie i biblioteki**

Python | Streamlit / React | CSS custom | HTML | Openai | Langfuse | Github | Scikit-learn | PyCaret | JSON | Pandas | Numpy | Boto3 | Python-dotenv | Base64  | Datetime | Digital Ocean | Jupyter Notebook | Excalidraw   
