import 'lazysizes';
import viewportUnits from './landing-4/_viewportUnits';
import menu from './shared/_menu';
import dropdowns from './shared/_dropdowns';


document.addEventListener('DOMContentLoaded', () => {
  viewportUnits();
  menu();
  dropdowns();
});
