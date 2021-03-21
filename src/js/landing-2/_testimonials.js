import { Swiper, Mousewheel } from 'swiper';

Swiper.use([Mousewheel]);


const mobSliders = [...document.querySelectorAll('.js-testimonials-mob-slider')];
const deskSliders = [...document.querySelectorAll('.js-testimonials-desk-slider')];

const initMobSlider = el => {
  const slider = new Swiper(el, {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true
  });

  slider.init();
};

const initDeskSlider = el => {
  const slider = new Swiper(el, {
   direction: 'vertical',
   spaceBetween: 20,
   slidesPerView: 'auto',
   autoHeight: true,
   mousewheel: true,
   touchReleaseOnEdges: true,
   cssMode: true
  });

  slider.init();
};

const testimonials = () => {
  mobSliders.forEach(el => {
    initMobSlider(el);
  });

  deskSliders.forEach(el => {
    initDeskSlider(el);
  });

};

export default testimonials;
