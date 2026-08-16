document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay');
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const dropdownBtns = document.querySelectorAll('.dropdown-btn');

  // Open mobile menu
  openBtn.addEventListener('click', () => {
    nav.classList.add('show');
    overlay.classList.add('show');
  });

  // Close mobile menu + close dropdowns
  const closeMenu = () => {
    nav.classList.remove('show');
    overlay.classList.remove('show');
    document.querySelectorAll('.nav-link.link-open').forEach(l => l.classList.remove('link-open'));
  };
  
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Toggle dropdowns
  dropdownBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const parentNavLink = btn.closest('.nav-link'); 
      
      // Close other open dropdowns first
      document.querySelectorAll('.nav-link.link-open').forEach(l => {
        if(l !== parentNavLink) l.classList.remove('link-open');
      });

      parentNavLink.classList.toggle('link-open');
    });
  });
});