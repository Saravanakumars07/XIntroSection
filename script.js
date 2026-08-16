document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay');

  // Open menu
  openBtn.addEventListener('click', () => {
    nav.classList.add('show');
    overlay.classList.add('show');
  });

  // Close menu
  function closeMenu() {
    nav.classList.remove('show');
    overlay.classList.remove('show');
  }
  
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // DROPDOWN FOR CRIO TEST
  document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation(); // important so it doesn't close menu
      button.parentElement.classList.toggle('link-open');
    });
  });
});
