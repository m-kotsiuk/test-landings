import 'lazysizes';
import 'moment';
import WOW from 'wow.js';
import menu from './shared/_menu';
import tabSliders from './shared/_tabSliders';
import dropdowns from './shared/_dropdowns';
import accordions from './landing-1/_accordions';
import reviewsSliders from './landing-1/_reviewsSliders';
import selects from './landing-1/_selects';
import datepickers from './landing-1/_datepickers';
import counterFields from './landing-1/_counterFields';
import orderForms from './landing-1/_orderForms';
import modals from './shared/_modals';



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
  modals();

  new WOW().init();
});

