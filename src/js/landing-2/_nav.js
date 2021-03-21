import scrollTo from '../shared/_scrollTo';

const navBtns = [...document.querySelectorAll('.js-nav-btn')];

const nav = () => {
  navBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();

      const target = document.querySelector(btn.getAttribute('href'));

      if (!target) return;
      scrollTo(target.getBoundingClientRect().top + window.scrollY - 50);
    });
  });
};

export default nav;
