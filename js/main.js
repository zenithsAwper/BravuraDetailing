// Shared nav behavior: scroll-triggered background + mobile menu toggle
(function () {
  const nav = document.getElementById('siteNav');
  const burger = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!nav) return;

  function updateScrolled() {
    const scrolled = window.scrollY > 24 || mobileMenu.classList.contains('open');
    nav.classList.toggle('scrolled', scrolled);
  }

  window.addEventListener('scroll', updateScrolled, { passive: true });
  updateScrolled();

  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      const open = mobileMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      updateScrolled();
    });
  }
})();
