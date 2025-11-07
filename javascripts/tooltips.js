// Skrypt do automatycznego dodawania tooltipów do linków
document.addEventListener('DOMContentLoaded', function() {
  // Dodaj tooltipy do linków w nawigacji
  const navLinks = document.querySelectorAll('.md-nav__link[href]');
  navLinks.forEach(link => {
    if (!link.hasAttribute('data-tooltip') && !link.hasAttribute('title')) {
      const text = link.textContent.trim();
      if (text) {
        link.setAttribute('data-tooltip', text);
      }
    }
  });

  // Dodaj tooltipy do linków w treści
  const contentLinks = document.querySelectorAll('.md-content a[href]');
  contentLinks.forEach(link => {
    if (!link.hasAttribute('data-tooltip') && !link.hasAttribute('title')) {
      const text = link.textContent.trim() || link.getAttribute('href');
      if (text) {
        link.setAttribute('data-tooltip', text);
      }
    }
  });

  // Dodaj tooltipy do obrazów
  const images = document.querySelectorAll('.md-content img');
  images.forEach(img => {
    if (!img.hasAttribute('data-tooltip') && !img.hasAttribute('title') && img.alt) {
      img.setAttribute('data-tooltip', img.alt);
    }
  });
});

