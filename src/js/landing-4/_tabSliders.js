import {Swiper, Navigation, Controller } from 'swiper';

Swiper.use([Navigation, Controller]);


const sliders = [...document.querySelectorAll('.js-tabs-slider')];

const initSlider = el => {
  const tabs = el.querySelector('.js-tabs-slider-links');
  const slides = el.querySelector('.js-tabs-slider-slides');



  const slidesSlider = new Swiper(slides, {
    navigation: {
      nextEl: slides.querySelector('.js-tabs-slider-next'),
      prevEl: slides.querySelector('.js-tabs-slider-prev')
    },
  });

  const tabSlider = new Swiper(tabs, {
    slideToClickedSlide: true
  });


  tabSlider.controller.control = slidesSlider;
  slidesSlider.controller.control = tabSlider;

};

const tabSliders = () => {
  sliders.forEach(slider => {
    initSlider(slider);
  });
};

export default tabSliders;
