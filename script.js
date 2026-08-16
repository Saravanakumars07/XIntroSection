document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay');

  document.getElementById('openBtn').onclick = () => {
    nav.classList.add('show');
    overlay.classList.add('show');
  }

  const closeMenu = () => {
    nav.classList.remove('show');
    overlay.classList.remove('show');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('link-open'));
  }
  
  document.getElementById('closeBtn').onclick = closeMenu;
  overlay.onclick = closeMenu;

  document.querySelectorAll('.dropdown-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const navLink = btn.closest('.nav-link');
      const isOpen = navLink.classList.contains('link-open');
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('link-open'));
      if(!isOpen) navLink.classList.add('link-open');
    });
  });
})