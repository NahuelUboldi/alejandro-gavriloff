import { select, selectAll } from '../utils/utilities.js';
const initLoaderAnim = function initializeTheLoaderAnimation() {
  const loader = select('.loader');
  const loaderPaintsContainer = selectAll('.loader-paint');
  const loaderPaintsBg = selectAll('.loader-paint span');
  const loaderLogo = select('.loader-logo');

  console.log(loaderPaintsBg[0]);
  const tl = gsap.timeline({ duration: 1, ease: 'power4.inOut' });
  tl.from([loaderPaintsContainer, loaderLogo], {
    y: '100vh',
    stagger: 0.2,
  }).to(loaderPaintsBg, { y: '20%', stagger: 0.2 }, '-=1.1');
};

export default initLoaderAnim;
