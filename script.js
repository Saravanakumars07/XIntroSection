const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

function closeMenu() {
  nav.classList.remove('show');
  overlay.classList.remove('show');
  // Test 3 fix: close dropdowns when menu closes
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('link-open');
  });
}

openBtn.addEventListener('click', () => {
  nav.classList.add('show');
  overlay.classList.add('show');
});

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Dropdown toggle - ONLY 1 VERSION
document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    const navLink = btn.closest('.nav-link');
    
    document.querySelectorAll('.nav-link').forEach(link => {
      if(link !== navLink) link.classList.remove('link-open');
    });
    
    navLink.classList.toggle('link-open');
  });
});