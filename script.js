const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

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

document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    e.currentTarget.closest('.nav-link').classList.toggle('link-open');
  });
});
