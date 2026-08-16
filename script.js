document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay');

  document.getElementById('openBtn').onclick = () => {
    nav.classList.add('show');
    overlay.classList.add('show');
  }

  const closeMenu = () => {
    nav.classList.remove('show');
    overlay.classList.remove('show');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('link-open'));
  }
  
  document.getElementById('closeBtn').onclick = closeMenu;
  overlay.onclick = closeMenu;

  document.querySelectorAll('.dropdown-btn').forEach(btn => {
    btn.onclick = function(e) {
      e.stopPropagation();
      // close other dropdowns first
      document.querySelectorAll('.nav-link').forEach(link => {
        if(link !== this.parentElement) link.classList.remove('link-open');
      });
      // toggle this one
      this.parentElement.classList.toggle('link-open');
    }
  })
})