import 'lazysizes';
import menu from './components/_menu';
import tabSliders from './components/_tabSliders';
import dropdowns from './components/_dropdowns';
import accordions from './components/_accordions';



document.addEventListener('DOMContentLoaded', () => {
  menu();
  tabSliders();
  dropdowns();
  accordions();
});

