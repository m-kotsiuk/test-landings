const $menuBtn = document.querySelector('.js-menu-btn');
const $menu = document.querySelector('.js-menu');

let menuIsOpen = false;

const closeMenu = () => {
  document.body.classList.remove('no-overflow');
  document.documentElement.classList.remove('no-overflow');
  $menu.classList.add('with-transition');
  $menuBtn.classList.remove('is-active');
  $menu.classList.remove('is-open');
  setTimeout(() => {
    $menu.classList.remove('with-transition');
  }, 500);

  menuIsOpen = false;
};

const openMenu = () => {
  document.body.classList.add('no-overflow');
  document.documentElement.classList.add('no-overflow');
  $menu.classList.add('with-transition');
  $menuBtn.classList.add('is-active');
  $menu.classList.add('is-open');
  setTimeout(() => {
    $menu.classList.remove('with-transition');
  }, 500);

  menuIsOpen = true;
};

const menu = () => {
  $menuBtn.addEventListener('click', event => {
    event.preventDefault();

    if (menuIsOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

};

export default menu;
