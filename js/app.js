import resizeBioContainer from './utils/resizeBioContainer.js';
import initCanvas from './pages/home/canvas.js';
import initGalleryPreview from './pages/home/gallerie-preview.js';
import initGallery from './pages/gallery/index.js';
import initCarousels from './pages/periods/index.js';
import { revealNav, initLoaderAnim } from './animations/index.js';

const setCurrentYear = function setTheCurrentYear() {
  return (document.getElementById('current-year').innerText =
    new Date().getFullYear());
};
initLoaderAnim();
const initPageTransitions =
  function initializeThePageTransitionsBarbaAnimations() {
    barba.hooks.before(() => {
      document.querySelector('html').classList.add('is-transitioning');
    });
    barba.hooks.after(() => {
      document.querySelector('html').classList.remove('is-transitioning');
    });
    barba.hooks.enter(() => {
      window.scrollTo(0, 0);
    });

    barba.init({
      transitions: [
        {
          once() {
            initLoader();
          },
          async leave({ current }) {
            await pageTransitionIn(current);
          },
          enter({ next }) {
            pageTransitionOut(next);
          },
        },
      ],
    });
  };

// barba.init({
//   transitions: [
//     {
//       once({next}){
//         revealNav(next.container)
//       }
//     }
//   ]
// });

const init = function initializeTheSiteFunctionality() {
  setCurrentYear();
  resizeBioContainer();
  initCanvas();
  initGalleryPreview();
  initGallery();
  initCarousels();
};
window.addEventListener('resize', () => {
  resizeBioContainer();
  initCanvas();
  initGalleryPreview();
});
window.addEventListener('load', () => init());
