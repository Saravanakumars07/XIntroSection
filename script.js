const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

// Mobile menu open/close
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

// Dropdown toggle - ONLY 1 VERSION OF THIS
document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent closing mobile menu
    const navLink = btn.closest('.nav-link');
    
    // close other dropdowns first
    document.querySelectorAll('.nav-link').forEach(link => {
      if(link !== navLink) link.classList.remove('link-open');
    });
    
    // toggle this one
    navLink.classList.toggle('link-open');
  });
});