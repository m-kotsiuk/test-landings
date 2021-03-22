import {Swiper, Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

const sliders = [...document.querySelectorAll('.js-testimonials')];

const initSlider = el => {
  const swiper = new Swiper(el.querySelector('.js-testimonials-slider'), {
    init: false,
    loop: true,
    navigation: {
      nextEl: el.querySelector('.js-testimonials-right'),
      prevEl: el.querySelector('.js-testimonials-left')
    },
    pagination: {
      el: el.querySelector('.js-testimonials-nav'),
      type: 'bullets',
      clickable: true
    }
  });

  swiper.init();
};


const testimonialSliders = () => {
  sliders.forEach(slider => {
    initSlider(slider);
  });
};

export default testimonialSliders;
