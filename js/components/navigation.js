import {
  openCloseRespMenu,
  showToggleBtn,
  hideToggleBtn,
} from '../utils/responsiveMenu.js';
import { select, selectAll } from '../utils/utilities.js';

const navAnimation = function createNavLinksAnimation(
  direction,
  links,
  linksReversed,
  screenSize
) {
  const scrollingDown = direction === 1;
  const selectedLinks = scrollingDown ? links : linksReversed;
  console.log('screen size: ', screenSize);
  if (screenSize === 'big screen') {
    console.log('big screen, lo muestra o lo oculta');
    scrollingDown ? showToggleBtn() : hideToggleBtn();
  } else {
    console.log('debería mostrar el boton');
    showToggleBtn();
  }

  const tl = gsap.timeline();
  tl.to(selectedLinks, {
    duration: 0.3,
    stagger: 0.05,
    autoAlpha: () => (scrollingDown ? 0 : 1),
    y: () => (scrollingDown ? 20 : 0),
    ease: Power0.easeNone,
  });
  return tl;
};

const handleMouse = function handleMouseEnterAndLeaveFunctionality(e) {
  const hoverEffectSpan = e.target.querySelector('span');
  const tl = gsap.timeline({ defaults: { duration: 0.25 } });
  if (e.type === 'mouseenter') {
    tl.set(hoverEffectSpan, { transformOrigin: 'left' }).to(
      hoverEffectSpan,
      { scaleX: 1 },
      0
    );
    return tl;
  }
  tl.set(hoverEffectSpan, { transformOrigin: 'right' }).to(
    hoverEffectSpan,
    { scaleX: 0 },
    0
  );
  return tl;
};

const createNavLinksAnim = function createTheNavigationLinksAnimation(
  screenSize
) {
  const links = selectAll('.menu-link');
  const linksReversed = selectAll('.menu-link').reverse();
  console.log('nav: ', screenSize);

  links.forEach((link) => {
    link.addEventListener('mouseenter', handleMouse);
    link.addEventListener('mouseleave', handleMouse);
  });

  const navAnimProps = {
    links: links,
    linksReversed: linksReversed,
    screenSize: screenSize,
  };

  if (screenSize === 'big screen') {
    ScrollTrigger.create({
      start: 1,
      end: 'bottom bottom',
      onEnter: ({ direction }) =>
        navAnimation(direction, links, linksReversed, screenSize),
      onLeaveBack: ({ direction }) =>
        navAnimation(direction, direction, links, linksReversed, screenSize),
    });
  }
};

const handleToggleBtnClick = function handleTheClickOnTheToggleButton() {
  openCloseRespMenu();
};

const toggleBtnFunc = function createTheToggleButtonFunctionality() {
  const toggleBtn = select('.toggle-menu-btn');
  toggleBtn.addEventListener('click', handleToggleBtnClick);
};

const initNavigation = function initializeTheNavigationFunctionality(
  screenSize
) {
  screenSize === 'big screen' ? hideToggleBtn() : showToggleBtn();
  createNavLinksAnim(screenSize);
  toggleBtnFunc();
};
export default initNavigation;
