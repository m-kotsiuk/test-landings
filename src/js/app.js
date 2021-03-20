import 'lazysizes';
import 'moment';
import menu from './components/_menu';
import tabSliders from './components/_tabSliders';
import dropdowns from './components/_dropdowns';
import accordions from './components/_accordions';
import reviewsSliders from './components/_reviewsSliders';
import selects from './components/_selects';
import datepickers from './components/_datepickers';
import counterFields from './components/_counterFields';
import orderForms from './components/_orderForms';



document.addEventListener('DOMContentLoaded', () => {
  menu();
  reviewsSliders();
  tabSliders();
  selects();
  datepickers();
  dropdowns();
  accordions();
  counterFields();
  orderForms();
});

