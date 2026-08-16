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
      const parent = btn.parentElement; // .nav-link
      parent.classList.toggle('link-open');
       btn.parentElement.classList.toggle('link-open'); 
    });
  });
});