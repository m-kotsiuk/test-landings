const forms = [...document.querySelectorAll('.js-order-form')];

const init = el => {
  const fields = [...el.querySelectorAll('[name]')];

  el.addEventListener('submit', event => {
    event.preventDefault();
    const obj = {};
    fields.forEach(field => {
      obj[field.name] = field.value
    });
    console.log(obj);
  });
};


const orderForms = () => {
  forms.forEach(el => {
    init(el);
  });
};

export default orderForms;
