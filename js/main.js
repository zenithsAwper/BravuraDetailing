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

// Services mega-dropdown: touch-friendly tap-to-reveal (hover already handles mouse/keyboard via CSS)
(function () {
  const hasHover = window.matchMedia('(hover: hover)').matches;
  document.querySelectorAll('.nav-item.has-dropdown').forEach(function (item) {
    const trigger = item.querySelector(':scope > .nav-link');
    if (!trigger) return;
    if (!hasHover) {
      trigger.addEventListener('click', function (e) {
        if (!item.classList.contains('dropdown-open')) {
          e.preventDefault();
          document.querySelectorAll('.nav-item.dropdown-open').forEach(function (o) {
            if (o !== item) o.classList.remove('dropdown-open');
          });
          item.classList.add('dropdown-open');
        }
      });
      document.addEventListener('click', function (e) {
        if (!item.contains(e.target)) item.classList.remove('dropdown-open');
      });
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-item.dropdown-open').forEach(function (item) {
        item.classList.remove('dropdown-open');
        const trigger = item.querySelector(':scope > .nav-link');
        if (trigger) trigger.focus();
      });
    }
  });
})();

// Mobile Services accordion
(function () {
  document.querySelectorAll('.mobile-submenu-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetId = btn.getAttribute('aria-controls');
      const submenu = targetId && document.getElementById(targetId);
      if (!submenu) return;
      const open = submenu.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });
})();
