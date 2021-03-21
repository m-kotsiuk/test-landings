import { Swiper } from 'swiper';

const sliders = [...document.querySelectorAll('.js-previews-slider')];

const initSlider = el => {
  const slider = new Swiper(el, {
    slidesPerView: 7,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
      768: {
        spaceBetween: 30
      }
    }
  });

  slider.init();
};

const previews = () => {
  sliders.forEach(el => {
    initSlider(el);
  });
};

export default previews;
