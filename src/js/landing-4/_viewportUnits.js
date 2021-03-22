const calcViewportUnits = () => {
  const w = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
  const h = Math.min(document.documentElement.clientHeight, window.innerHeight || 0);

  const vh = h * 0.01;
  const vw = w * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--vw', `${vw}px`);
};

const viewportUnits = () => {
  calcViewportUnits();

  window.addEventListener('resize', calcViewportUnits);
};

export default viewportUnits;


