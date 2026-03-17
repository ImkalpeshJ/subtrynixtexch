 // Odometer Counter
  

  $( document ).ready(function() {
    document.querySelectorAll('.wioncounter-item').forEach(counterItem => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            counterItem.querySelectorAll('.odometer').forEach(el => {
            el.innerHTML = el.getAttribute('data-odometer-final');
            });
            observer.unobserve(counterItem); // Stop observing after animation
        }
        });
    }, {
        threshold: 0.5 // Adjust as needed (e.g., 0 for any visibility)
    });

    observer.observe(counterItem);
    });

   });