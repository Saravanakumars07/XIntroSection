const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
  nav.classList.add('show');
  overlay.classList.add('show');
});

function closeMenu() {
  nav.classList.remove('show');
  overlay.classList.remove('show');
}

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// SIMPLE TOGGLE - NO LOOP
document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.closest('.nav-link').classList.toggle('link-open');
  });
});