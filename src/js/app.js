import 'lazysizes';
import menu from './components/_menu';
import tabSliders from './components/_tabSliders';
import dropdowns from './components/_dropdowns';
import accordions from './components/_accordions';
import reviewsSliders from './components/_reviewsSliders';



document.addEventListener('DOMContentLoaded', () => {
  menu();
  reviewsSliders();
  tabSliders();
  dropdowns();
  accordions();
});

