/**
 * TrynixTech - Services Section Manager
 * Keeps all 7 core services open and accessible with domain icons.
 */
document.addEventListener('DOMContentLoaded', () => {
  const serviceItems = document.querySelectorAll('.service-accordion-item');
  if (!serviceItems.length) return;

  // Ensure all services remain permanently expanded
  serviceItems.forEach((item) => {
    item.classList.add('is-open');
    const body = item.querySelector('.service-accordion-body');
    if (body) {
      body.style.maxHeight = 'none';
      body.style.opacity = '1';
      body.style.visibility = 'visible';
    }
  });
});
