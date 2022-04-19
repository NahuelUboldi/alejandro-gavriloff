import { select, selectAll } from '../utils/utilities.js';
const initLoaderAnim = function initializeTheLoaderAnimation() {
  const loader = select('.loader');
  const loaderMask = select('.loader-mask');
  const loaderLogo = select('.logo');
  const loaderLogoSpan = select('.logo span');

  const tl = gsap.timeline({ duration: 5, ease: 'power4.inOut' });
  tl;
};

export default initLoaderAnim;
