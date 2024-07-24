const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closebtn = document.querySelector('.menu__close');

const toggleMenu = (btn) => {
    btn.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
    })
};

toggleMenu(hamburger);
toggleMenu(closebtn);