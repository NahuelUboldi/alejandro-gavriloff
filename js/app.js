import resizeBioContainer from './utils/resizeBioContainer.js';
import initCanvas from './pages/home/canvas.js';
import initGalleryPreview from './pages/home/gallerie-preview.js';
import initGallery from './pages/gallery/index.js';
import initCarousels from './pages/periods/index.js';
import { revealNav, initLoaderAnim, initHeroAnim } from './animations/index.js';
import initArtisticPeriods from './pages/home/artisticPeriods.js';
import initQuoteAnim from './pages/home/quote.js';
import { select, setCurrentYear } from './utils/utilities.js';

//page transitions
const loader = select('.loader');
const bodyWidth = select('body').getBoundingClientRect().width;
if (bodyWidth >= 766) {
  loader.style.display = 'block';
}
const pageTransitionLeave = function pageTransitionLeavingTheActualPage({
  container,
}) {
  console.log('leave');
  const tl = gsap.timeline({
    defaults: {
      duration: 1.5,
      ease: 'power1.inOut',
    },
  });
  tl.set(loader, { yPercent: -100 }).to(loader, { yPercent: 0 });
  return tl;
};
const pageTransitionEnter = function pageTransitionLEnteringTheNewPage({
  container,
}) {
  console.log('enter');
  const pageContent = select('.page-content');
  const tl = gsap.timeline({
    defaults: {
      duration: 1.2,
      ease: 'power1.inOut',
    },
    onComplete: () => init(),
  });
  tl.to(loader, { yPercent: 100 }).from(container, { y: 20, duration: 1.4 }, 0);
  return tl;
};

const initPageTransitions =
  function initializeThePageTransitionsBarbaAnimations() {
    barba.hooks.before(() => {
      console.log('hook before');
      document.querySelector('html').classList.add('is-transitioning');
    });
    barba.hooks.after(() => {
      console.log('hook after');
      document.querySelector('html').classList.remove('is-transitioning');
    });
    barba.hooks.enter(() => {
      console.log('hook enter');
      window.scrollTo(0, 0);
    });

    barba.init({
      transitions: [
        {
          once() {
            console.log('once');
            if (bodyWidth >= 766) {
              // initLoaderAnim();
              loader.style.display = 'none';
            }
            init();
          },
          async leave({ current }) {
            await pageTransitionLeave(current);
          },
          enter({ next }) {
            pageTransitionEnter(next);
          },
        },
      ],
    });
  };
initPageTransitions();

const init = function initializeTheSiteFunctionality() {
  console.log('init');
  setCurrentYear();
  resizeBioContainer();
  initCanvas();
  initGalleryPreview();
  initGallery();
  initCarousels();
  if (bodyWidth >= 766) {
    initArtisticPeriods();
    initHeroAnim();
    initQuoteAnim();
  }
};
window.addEventListener('resize', () => {
  resizeBioContainer();
  initCanvas();
  initGalleryPreview();
});
// window.addEventListener('load', () => init());
