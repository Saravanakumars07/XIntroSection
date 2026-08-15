const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

openMenu.addEventListener('click', () => {
  nav.classList.add('show');
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
});

function closeNav() {
  nav.classList.remove('show');
  overlay.classList.remove('show');
  document.body.style.overflow = 'auto';
}

closeMenu.addEventListener('click', closeNav);
overlay.addEventListener('click', closeNav);

document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    if(window.innerWidth < 768){
      e.preventDefault();
      const dropdown = this.nextElementSibling;
      const arrow = this.querySelector('.arrow');
      
      document.querySelectorAll('.dropdown-list').forEach(list => {
        if(list !== dropdown) list.classList.remove('show');
      });
      document.querySelectorAll('.arrow').forEach(a => {
        if(a !== arrow) a.classList.remove('rotate');
      });
      
      dropdown.classList.toggle('show');
      arrow.classList.toggle('rotate');
    }
  });
});