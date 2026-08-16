document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay');
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');

  const dropdownBtns = document.querySelectorAll('.dropdown-btn');


  openBtn.addEventListener('click', () => {
    nav.classList.add('show');
    overlay.classList.add('show');
    openBtn.classList.add('hide');
  });


  const closeMenu = () => {
    nav.classList.remove('show');
    overlay.classList.remove('show');
    openBtn.classList.remove('hide');

    dropdownBtns.forEach((btn) => {
      btn.classList.remove('link-open');
    });
  };

  closeBtn.addEventListener('click', closeMenu);

  overlay.addEventListener('click', closeMenu);

  
  dropdownBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();

      dropdownBtns.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.classList.remove('link-open');
        }
      });
      btn.classList.toggle('link-open');
    });
  });
});