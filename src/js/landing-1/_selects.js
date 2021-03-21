const selectElems = [...document.querySelectorAll('.js-select')];

const initSelect = el => {
  const realSelect = el.querySelector('select');
  const realOptions = [...realSelect.querySelectorAll('option')];
  const placeholder = realOptions.find(option => option.selected && option.disabled);

  const btn = document.createElement('button');
  btn.className = 'select__btn js-select-btn';
  btn.textContent = placeholder ? placeholder.textContent : '';

  const optionsWrapper = document.createElement('div');
  optionsWrapper.className = 'select__options-wrapper js-select-opts-wrapper';

  const optionsHolder = document.createElement('div');
  optionsHolder.className = 'select__options-holder';

  const optionsList = document.createElement('div');
  optionsList.className = 'select__options js-select-options';

  realOptions.forEach(option => {
    if (option.disabled) return;
    const optBtn = document.createElement('button');
    optBtn.type = 'button';
    optBtn.className = 'select__option js-select-option';
    optBtn.dataset.value = option.value;
    optBtn.textContent = option.textContent;

    optBtn.addEventListener('click', event => {
      event.preventDefault();

      realOptions.forEach(realOption => {
        if (realOption.value === optBtn.dataset.value) {
          realOption.setAttribute('selected', 'selected');
          btn.textContent = realOption.textContent;
        } else {
          realOption.removeAttribute('selected');
        }
      });

      el.classList.remove('is-open');
    });

    optionsList.appendChild(optBtn);
  });

  optionsHolder.appendChild(optionsList);
  optionsWrapper.appendChild(optionsHolder);


  btn.addEventListener('click', event => {
    event.preventDefault();
    if (el.classList.contains('is-open')) {
      el.classList.remove('is-open');
    } else {
      selectElems.forEach(selectElem => {
        if (selectElem === el) {
          selectElem.classList.add('is-open');
        } else {
          selectElem.classList.remove('is-open');
        }
      })
    }
  });



  el.appendChild(btn);
  el.appendChild(optionsWrapper);
};

const selects = () => {
  selectElems.forEach(el => {
    initSelect(el);
  });

  document.addEventListener('click', event => {
    const parent = event.target.closest('.js-select');
    selectElems.forEach(el => {
      if (el !== parent) el.classList.remove('is-open');
    });
  });
};

export default selects;
