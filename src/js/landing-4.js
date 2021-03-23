import 'lazysizes';
import viewportUnits from './landing-4/_viewportUnits';
import menu from './shared/_menu';
import dropdowns from './shared/_dropdowns';
import modals from './shared/_modals';
import tabSliders from './landing-4/_tabSliders';


document.addEventListener('DOMContentLoaded', () => {
  viewportUnits();
  menu();
  dropdowns();
  modals();
  tabSliders();
});
