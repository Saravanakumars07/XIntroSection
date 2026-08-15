const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');
const dropdowns = document.querySelectorAll('.nav-link');

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

// Dropdown toggle - adds link-open class
dropdowns.forEach(dropdown => {
  const btn = dropdown.querySelector('.dropdown-btn');
  if(btn) {
    btn.addEventListener('click', () => {
      dropdown.classList.toggle('link-open');
    });
  }
});                     