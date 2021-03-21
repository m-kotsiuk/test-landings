/* eslint-disable */
const modalElems = [...document.querySelectorAll('.js-modal')];

const fadeIn = (el, cb) => {
  el.style.opacity = 0;
  el.style.display =  'block';

  (function fade() {
    let val = parseFloat(el.style.opacity);
    val += .1
    if (!(val > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    } else if (cb) {
      cb();
    }
  })();
};

const fadeOut = (el, cb) => {
  el.style.opacity = 1;

  (function fade() {
    el.style.opacity -= .1
    if (el.style.opacity < 0) {
      el.style.display = "none";
      if (cb) cb();
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

const openModal = el => {
  document.documentElement.classList.add('no-overflow');
  document.body.classList.add('no-overflow');

  fadeIn(el);
};


const closeModal = el => {
  fadeOut(el, () => {
    document.documentElement.classList.remove('no-overflow');
    document.body.classList.remove('no-overflow');
  });
};



const initModal = el => {
  const btns = [...document.querySelectorAll(`.js-modal-link[data-modal="${el.dataset.modal}"]`)];
  const closeBtns = [...el.querySelectorAll('.js-modal-close')];

  btns.forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();
      openModal(el);
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();
      closeModal(el);
    });
  });

  el.addEventListener('click', event => {
    if (!event.target.closest('.js-modal-body')) closeModal(el);
  });



};


const modals = () => {
  modalElems.forEach(el => {
    initModal(el);
  });
};

export default modals;
