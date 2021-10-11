const burger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu');

burger.addEventListener('click', function () {
    burger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
});