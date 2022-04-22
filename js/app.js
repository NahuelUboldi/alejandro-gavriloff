
import resizeBioContainer from './utils/resizeBioContainer.js';
import initCanvas from './pages/home/canvas.js';
import initGalleryPreview from './pages/home/gallerie-preview.js';
import initGallery from './pages/gallery/index.js';
import initCarousels from './pages/periods/index.js';
import { revealNav, initLoaderAnim, initHeroAnim } from './animations/index.js';
import initArtisticPeriods from './pages/home/artisticPeriods.js';
import initQuoteAnim from './pages/home/quote.js';
import { select } from './utils/utilities.js';


const setCurrentYear = function setTheCurrentYear() {
  return (document.getElementById('current-year').innerText =
    new Date().getFullYear());
};



//page transitions
const pageTransitionLeave = function pageTransitionLeavingTheActualPage({container}) {
  console.log("leave"); 
  const loader = select(".loader")
  const tl = gsap.timeline({
    defaults: {
      duration: 1.5,
      ease: 'power1.inOut',
    },
  });
  tl.set(loader,{yPercent:-100})
    .to(loader, { yPercent: 0 })
  return tl;
}
const pageTransitionEnter = function pageTransitionLEnteringTheNewPage({container}) {
 console.log("enter");
 console.log(container);
 const loader = select(".loader")
 const pageContent = select(".page-content")
 console.log(loader);
  const tl = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: 'power1.inOut',
    },
    // onComplete: () => init(),
  });
  tl.to(loader,{autoAlpha:0})
  .to(container,{y:10})
  return tl;
 }

const initPageTransitions =
  function initializeThePageTransitionsBarbaAnimations() {
    barba.hooks.before(() => {
      console.log("hook before");
      document.querySelector('html').classList.add('is-transitioning');
    });
    barba.hooks.after(() => {
      console.log("hook after");
      document.querySelector('html').classList.remove('is-transitioning');
    });
    barba.hooks.enter(() => {
      console.log("hook enter");
      window.scrollTo(0, 0);
    });

    barba.init({
      transitions: [
        {
          once() {
            console.log("once");
            initLoaderAnim();
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
  setCurrentYear();
  resizeBioContainer();
  initCanvas();
  initGalleryPreview();
  initGallery();
  initCarousels();
  initHeroAnim();
  initArtisticPeriods();
  initQuoteAnim();
};
window.addEventListener('resize', () => {
  resizeBioContainer();
  initCanvas();
  initGalleryPreview();
});
// window.addEventListener('load', () => init());
