const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
  nav.classList.add('show');
  overlay.classList.add('show');
});

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

function closeMenu() {
  nav.classList.remove('show');
  overlay.classList.remove('show');
  // close dropdowns too
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('link-open'));
}

// Dropdown toggle - THIS IS WHAT WAS MISSING
document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const navLink = btn.closest('.nav-link');
    navLink.classList.toggle('link-open'); // THIS ADDS THE CLASS
  });
});