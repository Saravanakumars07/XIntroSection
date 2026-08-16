document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay');
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const dropdownBtns = document.querySelectorAll('.dropdown-btn');

  // 1) Open/Close mobile menu
  openBtn.addEventListener('click', () => {
    nav.classList.add('show');
    overlay.classList.add('show');
  });

  const closeMenu = () => {
    nav.classList.remove('show');
    overlay.classList.remove('show');
    // close all dropdowns when menu closes
    document.querySelectorAll('.nav-link.link-open').forEach(l => l.classList.remove('link-open'));
  };
  
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // 2) Open/Close dropdowns - ONLY 1 LISTENER
  dropdownBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // don't close menu when clicking dropdown
      const parentNavLink = btn.closest('.nav-link'); 
      parentNavLink.classList.toggle('link-open'); // TOGGLE ONLY ONCE
    });
  });
});