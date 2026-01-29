/* Mobile nav toggle + accordion submenus (<=980px) */
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('active');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Accordion for submenu on mobile
  const mq = window.matchMedia('(max-width: 980px)');
  const bindAccordion = () => {
    document.querySelectorAll('.nav-item.has-sub > a').forEach(a => {
      a.addEventListener('click', (e) => {
        if (!mq.matches) return; // desktop uses hover
        e.preventDefault();
        const item = a.closest('.nav-item');
        const isOpen = item.classList.toggle('open');
        a.setAttribute('aria-expanded', String(isOpen));
      }, { passive: false });
    });
  };
  bindAccordion();
})();
