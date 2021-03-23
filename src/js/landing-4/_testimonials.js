import {Swiper, Pagination, Controller } from 'swiper';

Swiper.use([Pagination, Controller]);

const sliders = [...document.querySelectorAll('.js-testimonials-slider')];

const initSlider = el => {
  const imgs = el.querySelector('.js-testimonials-imgs');
  const slides = el.querySelector('.js-testimonials-slides');

  const slidesSlider = new Swiper(slides, {
    loop: true
  });

  const imgsSlider = new Swiper(imgs, {
    loop: true,
    pagination: {
      el: imgs.querySelector('.js-testimonials-nav'),
      type: 'bullets',
      clickable: true
    },
  });
  imgsSlider.controller.control = slidesSlider;
  slidesSlider.controller.control = imgsSlider;
};

const testimonials = () => {
  sliders.forEach(slider => {
    initSlider(slider);
  });
};

export default testimonials;
