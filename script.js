const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

// Mobile menu
openBtn.addEventListener('click', () => {
  nav.classList.add('show');
  overlay.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('show');
  overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
  nav.classList.remove('show');
  overlay.classList.remove('show');
});

// Dropdown toggle - Test 3 Fix
document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent closing mobile menu
    const parent = btn.closest('.nav-link');
    parent.classList.toggle('link-open');
  });
});