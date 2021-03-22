import {  Swiper } from 'swiper';

const sliders = [...document.querySelectorAll('.js-resp-slider')];

const initSlider = el => {
  let slider = null;

  const activateSlider = () => {

    const swiper = new Swiper(el, {
      slidesPerView: 1,
      loop: true,
      breakpoints: {
        700: {
          slidesPerView: 2
        }
      }
    });

    slider = swiper;
  };

  const destroySlider = () => {
    slider.destroy();
    slider = null;
  };

  const checkSlider = () => {
    const width = window.innerWidth;

    if (width < 1024) {
      if (!slider) activateSlider();
    } else if (slider) destroySlider();

  };


  checkSlider();

  window.addEventListener('resize', checkSlider);
};


const respSliders = () => {
  sliders.forEach(el => {
    initSlider(el);
  });
};

export default respSliders;
