import { forEach } from '../utils';

const initDropdown = el => {
  const btn = el.querySelector('.js-dropdown-btn');
  // const list = el.querySelector('.js-dropdown-links');
  const links = el.querySelectorAll('.js-dropdown-link');

  let dropdownIsOpen = false;

  const openDropdown = () => {
    el.classList.add('is-open');
    dropdownIsOpen = true;
  };

  const closeDropdown = () => {
    el.classList.remove('is-open');
    dropdownIsOpen = false;
  };

  btn.addEventListener('click', event => {
    event.preventDefault();

    if (dropdownIsOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  forEach.call(links, link => {
    link.addEventListener('click', () => {
      closeDropdown();
    });
  });
};

const dropdowns = () => {
  forEach.call(document.querySelectorAll('.js-dropdown'), el => {
    initDropdown(el);
  });
};

export default dropdowns;
