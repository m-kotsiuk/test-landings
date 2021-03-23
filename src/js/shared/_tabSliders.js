import { Swiper, EffectFade } from 'swiper';

Swiper.use([EffectFade]);

const sliders = [...document.querySelectorAll('.js-tab-slider')];


const initSlider = el => {
  const sliderId = el.dataset.slider;
  const nav = document.querySelector(`.js-tab-slider-nav[data-slider="${sliderId}"]`);

  if (!nav) return;

  const navLinks = [...nav.querySelectorAll('.js-tab-slider-link')];

  const options = {
    init: false,
    touchReleaseOnEdges: true,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    on: {
      slideChange() {
        navLinks.forEach((navLink, i) => {
          if (i === this.realIndex) {
            navLink.classList.add('is-active');
          } else {
            navLink.classList.remove('is-active');
          }
        });
      }
    }
  };

  if (el.dataset.noSwipe) {
    options.noSwipingClass = 'swiper-slide';
  }

  if (el.dataset.finite) {
    options.loop = false;
  }


  const swiper = new Swiper(el,  options);

  swiper.init();

  navLinks.forEach((navLink, i) => {

    navLink.addEventListener('click', event => {
      event.preventDefault();
      swiper.slideToLoop(i);
    });
  });

};


const tabSliders = () => {
  sliders.forEach(el => {
    initSlider(el);
  });
};

export default tabSliders;
