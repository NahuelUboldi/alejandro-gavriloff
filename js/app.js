import resizeBioContainer from './utils/resizeBioContainer.js';
import initCanvas from './pages/home/canvas.js';
import initGalleryPreview from './pages/home/gallerie-preview.js';
import initGallery from './pages/gallery/index.js';
import initCarousels from './pages/periods/index.js';
import initArtisticPeriods from './pages/home/artisticPeriods.js';
import initQuoteAnim from './pages/home/quote.js';
import { select, setCurrentYear } from './utils/utilities.js';
import initBioPage from './pages/biography/index.js';
import initSmoothScrollbar from './utils/smoothScrollbar.js';
import initNavigation from './components/navigation.js';
import {
  openCloseRespMenu,
  showToggleBtn,
} from './components/responsiveMenu.js';
import { initLoaderAnim, initHeroAnim } from './animations/index.js';

// js media queries

// Screen Breakpoints
// sm 	≥576px  -> Small
// md	  ≥768px  -> Medium
// lg	  ≥992px  -> Large
// xl	  ≥1200px -> Extra large
// xxl  ≥1400px -> Extra extra large

const mediaQueryMd = window.matchMedia('(min-width: 766px)');
const mediaQueryLg = window.matchMedia('(min-width: 992px)');
let screenSize = mediaQueryLg.matches
  ? 'big screen'
  : mediaQueryMd.matches
  ? 'tablet'
  : 'mobile';

//page transitions vars
const loader = select('.loader');

//screen size functions
const checkInitialScreenSize = function checkTheInitialScreenSize() {
  // if (mediaQueryLg.matches) hideToggleBtn();
  if (mediaQueryMd.matches) loader.style.display = 'block';
};
const handleMqLgChange = function handleTheMediaQueryLargeScreenChange(e) {
  if (e.matches) {
    initNavigation('big screen');
    return;
  }
  initNavigation('tablet');
};

const handleMqMdChange = function handleTheMediaQueryMediumScreenChange(e) {
  if (e.matches) {
    showToggleBtn();
    return;
  }
};
//init functions
const initBigScreenFunc = function initializeTheFunctionalityInBigScreens() {
  initNavigation(screenSize);
  initHeroAnim();
  initQuoteAnim();
  initArtisticPeriods();
};

const handleScreenResize = function handleTheFunctionalityWhenScreenResize() {
  resizeBioContainer();
  initCanvas();
  initGalleryPreview();
};

const init = function initializeTheSiteFunctionality() {
  checkInitialScreenSize();
  setCurrentYear();
  resizeBioContainer();
  initCanvas();
  initGalleryPreview(); // its not working well
  initGallery();
  initSmoothScrollbar();
  initCarousels();
  initBioPage();
  document
    .querySelector('.toggle-menu-btn')
    .addEventListener('click', openCloseRespMenu);
  if (screenSize === 'tablet' || screenSize === 'big screen') {
    initBigScreenFunc();
  }
};

// site lifecycle - controled with barba app
const pageTransitionLeave = function pageTransitionLeavingTheActualPage({
  container,
}) {
  select('.loader .loader__container').innerHTML =
    '<div class="page-transition-logo"></div>';
  const pageTrasitionLogo = select('.page-transition-logo');

  const tl = gsap.timeline({
    defaults: {
      duration: 1.5,
      ease: 'power1.inOut',
    },
  });
  tl.set(loader, { yPercent: -100 })
    .to(loader, { yPercent: 0 }, 0)
    .set(pageTrasitionLogo, { yPercent: 15 }, 0)
    .to(pageTrasitionLogo, { yPercent: 0 }, 0);

  return tl;
};
const pageTransitionEnter = function pageTransitionLEnteringTheNewPage({
  container,
}) {
  const pageTrasitionLogo = select('.page-transition-logo');
  const tl = gsap.timeline({
    defaults: {
      duration: 1.2,
      ease: 'power1.inOut',
    },
    onComplete: () => init(),
  });
  tl.to(loader, { yPercent: 100 })
    .from(container, { y: 20, ease: 'none' }, 0)
    .to(pageTrasitionLogo, { yPercent: -15 }, 0)
    .set(loader, { yPercent: -100 });
  return tl;
};
const initPageTransitions =
  function initializeThePageTransitionsBarbaAnimations() {
    barba.hooks.before(() => {
      document.querySelector('html').classList.add('is-transitioning');
      if (
        document.querySelector('.responsive-menu').classList.contains('is-open')
      ) {
        openCloseRespMenu();
      }
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
            if (mediaQueryMd.matches) {
              initLoaderAnim();
              //loader.style.display = 'none';
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

//listeners
mediaQueryMd.addEventListener('change', handleMqMdChange);
mediaQueryLg.addEventListener('change', handleMqLgChange);
window.addEventListener('resize', handleScreenResize);
window.addEventListener('load', initPageTransitions);
