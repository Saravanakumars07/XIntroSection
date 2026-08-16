
document.addEventListener('DOMContentLoaded', () => {

  const nav = document.getElementById('nav');
 const overlay = document.getElementById('overlay');
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const dropdownBtns = document.querySelectorAll('.dropdown-btn');

  const openMenu = () => {

    nav.classList.add('show');

    overlay.classList.add('show');

    openBtn.classList.add('hide');

  };



  const closeMenu = () => {

    nav.classList.remove('show');

    overlay.classList.remove('show');

    openBtn.classList.remove('hide');


   

    document.querySelectorAll('.nav-link').forEach((navLink) => {
      navLink.classList.remove('link-open');
    });

  };


  openBtn.addEventListener('click', () => {

    openMenu();

  });

  closeBtn.addEventListener('click', () => {

    closeMenu();

  });


  overlay.addEventListener('click', () => {

    closeMenu();

  });


  dropdownBtns.forEach((dropdownBtn) => {

    dropdownBtn.addEventListener('click', (event) => {

      event.preventDefault();
 const currentNavLink = dropdownBtn.closest('.nav-link');
document.querySelectorAll('.nav-link').forEach((navLink) => {

        if (navLink !== currentNavLink) {
          navLink.classList.remove('link-open');
        }

      });

      currentNavLink.classList.toggle('link-open');

    });

  });

 document.addEventListener('keydown', (event) => {

    if (event.key === 'Escape') {

      if (nav.classList.contains('show')) {
        closeMenu();
      }

    }

  });

});
