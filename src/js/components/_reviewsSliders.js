import {Swiper, Pagination} from 'swiper';


Swiper.use([Pagination]);

const sliders = [...document.querySelectorAll('.js-reviews-slider')];


const initSlider = el => {
  const slider = el.querySelector('.js-reviews-slider-el');
  const nav = slider.querySelector('.js-reviews-slider-nav');

  const swiper = new Swiper(slider, {
    init: false,
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    touchEventsTarget: 'wrapper',
    pagination: {
      el: nav,
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      600: {
        spaceBetween: 20
      }
    }
  });

  swiper.init();


};

const reviewsSlider = () => {
  sliders.forEach(el => {
    initSlider(el);
  });
};

export default reviewsSlider;
