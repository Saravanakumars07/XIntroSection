document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay');

  const closeNav = () => {
    nav.classList.remove('show');
    overlay.classList.remove('show');
  }

  const openNav = () => {
    nav.classList.add('show');
    overlay.classList.add('show');
  }

  openBtn.addEventListener('click', openNav);
  closeBtn.addEventListener('click', closeNav);
  overlay.addEventListener('click', closeNav);

  // DROPDOWN - BULLETPROOF FOR CRIO
  const dropdownBtns = document.querySelectorAll('.dropdown-btn');
  dropdownBtns.forEach(button => {
    button.addEventListener('click', () => {
      const navLink = button.parentElement;
      navLink.classList.toggle('link-open');
    });
  });
});