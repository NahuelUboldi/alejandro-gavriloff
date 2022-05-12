import {showToggleBtn,hideToggleBtn,} from './responsiveMenu.js';
import { selectAll } from '../utils/utilities.js';

const navAnimation = function createNavLinksAnimation(direction, links, linksReversed) {
  if(window.innerWidth < 992) return

  const scrollingDown = direction === 1;
  const selectedLinks = scrollingDown ? links : linksReversed;

  scrollingDown ? showToggleBtn() : hideToggleBtn();

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

const createNavLinksAnim = function createTheNavigationLinksAnimation() {
  const links = selectAll('.menu-link');
  const linksReversed = selectAll('.menu-link').reverse();
  links.forEach((link) => {
    link.addEventListener('mouseenter', handleMouse);
    link.addEventListener('mouseleave', handleMouse);
  });

  ScrollTrigger.create({
    start: 1,
    end: 'bottom bottom',
    onEnter: ({ direction }) => navAnimation(direction, links, linksReversed),
    onLeaveBack: ({ direction }) => navAnimation(direction, links, linksReversed),
  });
  
};

const initNavigation = function initializeTheNavigationFunctionality(screenSize) {
  screenSize === 'big screen' ? hideToggleBtn() : showToggleBtn();
  createNavLinksAnim();
};
export default initNavigation;
