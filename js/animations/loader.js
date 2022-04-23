import { select, selectAll } from '../utils/utilities.js';
const initLoaderAnim = function initializeTheLoaderAnimation() {
  const loader = select('.loader');

  const loaderPaintsContainer = selectAll('.loader-paint');
  const loaderLogo = select('.loader-logo');
  const pageContent = select('.page-content');

  const tl = gsap.timeline({
    defaults: { duration: 1, ease: Back.easeOut.config(0.7) },
  });
  tl
    // .set(loader,{yPercent:100})
    .set([loaderPaintsContainer, loaderLogo], { y: '100vh' })
    .to(
      [loaderPaintsContainer, loaderLogo],
      {
        y: '0vh',
        stagger: 0.05,
        delay: 0.1,
        onUpdate: () => window.scrollTo(0, 0),
      },
      0
    )
    .to(
      [loaderPaintsContainer, loaderLogo],
      { y: '-100vh', stagger: 0.05, ease: Back.easeIn.config(0.7) },
      '+=0.5'
    )
    .to(loader, { yPercent: -100, ease: Power4.easeIn }, '-=0.5')
    .from(pageContent, { y: 150, duration: 1.4 }, '-=0.4');
};

export default initLoaderAnim;
