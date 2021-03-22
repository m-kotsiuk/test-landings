const target = document.querySelector('.js-header');

const checkHeader = () => {
  if (window.pageYOffset > 50) {
    target.classList.add('is-shrinked');
  } else {
    target.classList.remove('is-shrinked');
  }
};

const header = () => {
  checkHeader();
  window.addEventListener('scroll', checkHeader);
};


export default header;
