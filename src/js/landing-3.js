import 'lazysizes';
import menu from './shared/_menu';
import header from './landing-3/_header';
import respSliders from './landing-3/_respSlider';
import testimonialSliders from './landing-3/_testimonialSliders';

document.addEventListener('DOMContentLoaded', () => {
  menu();
  header();
  respSliders();
  testimonialSliders();
});
