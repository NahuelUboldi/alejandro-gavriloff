import { selectAll } from '../../utils/utilities.js';

const handleMouse = function handleMouseEnterAndLeaveFunctionality(e) {
  console.log(e.target.querySelector('span'));
  console.log(e.type);
  const hoverEffectSpan = e.target.querySelector('span');
  const tl = gsap.timeline({ defaults: { duration: 0.2 } });
  if (e.type === 'mouseenter') {
    tl.set(hoverEffectSpan, { transformOrigin: 'top left' })
      .to(hoverEffectSpan, { scale: 1 }, 0)
      .to(e.target, { color: 'white' }, 0);

    return tl;
  }
  tl.set(hoverEffectSpan, { transformOrigin: 'bottom right' })
    .to(hoverEffectSpan, { scale: 0 }, 0)
    .to(e.target, { color: 'black' }, 0);
  return tl;
};

const initNavigation = function initializeTheNavigationFunctionality() {
  const links = selectAll('.menu-link');

  links.forEach((link) => {
    link.addEventListener('mouseenter', handleMouse);
    link.addEventListener('mouseleave', handleMouse);
  });
};
export default initNavigation;
