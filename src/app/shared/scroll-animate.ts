export function initScrollAnimations() {
  const elements = document.querySelectorAll(
    '.fade-up, .slide-left, .slide-right'
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
}
