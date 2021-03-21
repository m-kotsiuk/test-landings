import Pickaday from 'pikaday';

const fields = [...document.querySelectorAll('.js-datepicker')];

const initDatepicker = el => {
  const input = el.querySelector('input');
  const picker = new Pickaday({
    field: input,
    minDate: new Date(),
    defaultDate: new Date(),
    setDefaultDate: true,
    format: 'D MMM YYYY'
  });
};

const datepickers = () => {
  fields.forEach(field => {
    initDatepicker(field);
  });
};

export default datepickers;
