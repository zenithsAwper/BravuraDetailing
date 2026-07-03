// Mobile-only reveal-on-scroll for the About page's Values and Process cards.
// CSS gates the actual opacity/transform effect to <=700px, so this observer
// is harmless (a no-op visually) on desktop/tablet widths.
(function () {
  const targets = document.querySelectorAll('.value-card, .process-row');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
})();
