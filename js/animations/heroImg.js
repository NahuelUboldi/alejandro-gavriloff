import { select, selectAll } from '../utils/utilities.js';

const movePaintings = function moveThePaintingsContainer(
  container,
  xCalc,
  yCalc
) {
  const ySmoothness = 5;
  const xSmoothness = 3;
  return gsap.to(container, {
    delay: 0.1,
    duration: 3,
    rotationY: xCalc / ySmoothness,
    rotationX: -yCalc / xSmoothness,
    ease: Power1.inOut,
  });
};

const handleMousemove = function handleMouseMovement(e) {
  const heroPaintingsContainer = select('.contenedor-cuadros');

  const xCalc =
    (e.clientX - heroPaintingsContainer.getBoundingClientRect().left) / 20;
  const yCalc =
    (e.clientY - heroPaintingsContainer.getBoundingClientRect().top) / 20;

  movePaintings(heroPaintingsContainer, xCalc, yCalc);
};

const initHeroAnim = function initializeTheHeroImagesAnimation() {
  select('#hero').addEventListener('mousemove', handleMousemove);
};

export default initHeroAnim;
