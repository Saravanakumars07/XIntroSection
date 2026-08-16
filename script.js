document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay');

  document.getElementById('openBtn').addEventListener('click', () => {
    nav.classList.add('show');
    overlay.classList.add('show');
  });

  const closeMenu = () => {
    nav.classList.remove('show');
    overlay.classList.remove('show');
    document.querySelectorAll('.nav-link.link-open').forEach(l => l.classList.remove('link-open'));
  };
  
  document.getElementById('closeBtn').addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  document.querySelectorAll('.dropdown-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.closest('.nav-link').classList.toggle('link-open'); // KEEP ONLY THIS ONE
       const navLink = btn.parentElement; // .nav-link
    navLink.classList.toggle('link-open'); // ONLY ONCE
    });
  });
});