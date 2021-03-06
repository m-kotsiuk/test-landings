const accElems = [...document.querySelectorAll('.js-acc')];

const initAccordion = el => {
  const items = [...el.querySelectorAll('.js-acc-item')];

  items.forEach(item => {
    const btn = item.querySelector('.js-acc-btn');
    const content = item.querySelector('.js-acc-content');

    let itemIsActive = false;

    const openAcc = () => {
      item.classList.add('is-active');
      content.style.maxHeight = `${content.scrollHeight}px`;
      itemIsActive = true;
    };

    const closeAcc = () => {
      item.classList.remove('is-active');
      content.removeAttribute('style');
      itemIsActive = false;
    };

    btn.addEventListener('click', event => {
      event.preventDefault();
      if (itemIsActive) {
        closeAcc();
      } else {
        openAcc();
      }
    });
  });
};

const acccordions = () => {
  accElems.forEach(el => {
    initAccordion(el);
  });

  window.addEventListener('resize', () => {
    const openAccItems = [...document.querySelectorAll('.js-acc-item.is-active')];

    openAccItems.forEach( el => {
      const content = el.querySelector('.js-acc-content');
      content.removeAttribute('style');
      content.style.maxHeight = `${content.scrollHeight}px`;
    });
  });
};

export default acccordions;
