import { Swiper, EffectFade } from 'swiper';
import { forEach } from '../utils';

Swiper.use([EffectFade]);

const sliders = document.querySelectorAll('.js-tab-slider');


const initSlider = el => {
  const sliderId = el.dataset.slider;
  const nav = document.querySelector(`.js-tab-slider-nav[data-slider="${sliderId}"]`);

  if (!nav) return;

  const navLinks = nav.querySelectorAll('.js-tab-slider-link');


  const swiper = new Swiper(el, {
    init: false,
    touchReleaseOnEdges: true,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    on: {
      slideChange() {
        forEach.call(navLinks, (navLink, i) => {
          if (i === this.realIndex) {
            navLink.classList.add('is-active');
          } else {
            navLink.classList.remove('is-active');
          }
        });
      }
    }
  });

  swiper.init();

  forEach.call(navLinks, (navLink, i) => {
    navLink.addEventListener('click', () => {
      swiper.slideToLoop(i);
    });
  });

};


const tabSliders = () => {
  forEach.call(sliders, el => {
    initSlider(el);
  });
};

export default tabSliders;
