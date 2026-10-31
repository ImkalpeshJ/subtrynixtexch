/**
 * TrynixTech — "Our Projects" Digital Product Studio Portfolio Filtering
 * Lightweight, vanilla JavaScript for instant, zero-layout-shift case study filtering.
 */
document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const projectCards = document.querySelectorAll('.case-study-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const selectedFilter = this.getAttribute('data-filter');

      // Update active button state
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');

      // Filter project cards
      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (selectedFilter === 'all' || categories.includes(selectedFilter)) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });

      // Refresh AOS animations if initialized
      if (typeof AOS !== 'undefined' && AOS.refresh) {
        AOS.refresh();
      }
    });
  });
});
