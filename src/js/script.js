const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closebtn = document.querySelector('.menu__close'),
      percentages = document.querySelectorAll('[data-percentage]'),
      scales = document.querySelectorAll('.skills__bar-scale');

const toggleMenu = (btn) => {
    btn.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
    })
};

toggleMenu(hamburger);
toggleMenu(closebtn);

percentages.forEach((number, i) => {
    scales[i].style = `width: ${number.textContent}`;
});