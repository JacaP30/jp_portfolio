// Tooltips only for elements with explicit data-tooltip attribute (contact links etc.)
document.addEventListener('DOMContentLoaded', function() {
  const tooltipElements = document.querySelectorAll('[data-tooltip]');
  tooltipElements.forEach(el => {
    el.setAttribute('title', '');
  });
});
