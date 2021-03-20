const fields = [...document.querySelectorAll('.js-field-counter')];

const initField = el => {
  const input = el.querySelector('.js-field-counter-input');
  const incBtn = el.querySelector('.js-field-counter-inc');
  const decBtn = el.querySelector('.js-field-counter-dec');

  const {min, max} = input;



  incBtn.addEventListener('click', event => {
    event.preventDefault();
    input.value = +input.value + 1;
    input.dispatchEvent(new Event('change'));
  });

  decBtn.addEventListener('click', event => {
    event.preventDefault();
    input.value = +input.value - 1;
    input.dispatchEvent(new Event('change'));

  });


  input.addEventListener('change', () => {
    if (+input.value < +min) {
      input.value = min;
    } else if (+input.value > +max) {
      input.value = max;
    }
  });



};

const counterFields = () => {
  fields.forEach(field => {
    initField(field);
  });
};

export default counterFields;
