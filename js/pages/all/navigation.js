import {
  openCloseRespMenu,
  showToggleBtn,
  hideToggleBtn,
} from '../../utils/responsiveMenu.js';
import { select, selectAll } from '../../utils/utilities.js';

const toggleBtnOnScroll = function toggleTheToggleBtnWhenScrolling(
  scrollingDown
) {
  const mediaQueryLg = window.matchMedia('(min-width: 992px)');
  const toggleBtn = select('.toggle-menu-btn');
  console.log('Is a large screen: ', mediaQueryLg.matches);
  console.log('1 should enter here? ', mediaQueryLg && scrollingDown);
  if (mediaQueryLg && scrollingDown) {
    console.log('1 entered');
    toggleBtn.classList.remove('toggle-btn-hidden');
  }
  console.log('2 should enter here? ', mediaQueryLg && !scrollingDown);
  if (mediaQueryLg && !scrollingDown) {
    console.log('2 entered');
    toggleBtn.classList.add('toggle-btn-hidden');
  }
  console.log('//////////////////////////////');
};

const navAnimation = function createNavLinksAnimation(
  direction,
  links,
  linksReversed
) {
  const scrollingDown = direction === 1;
  const selectedLinks = scrollingDown ? links : linksReversed;

  toggleBtnOnScroll(scrollingDown);
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
    onLeaveBack: ({ direction }) =>
      navAnimation(direction, links, linksReversed),
  });
};
const handleToggleBtnClick = function handleTheClickOnTheToggleButton() {
  openCloseRespMenu();
};

const toggleBtnFunc = function createTheToggleButtonFunctionality() {
  const toggleBtn = select('.toggle-menu-btn');
  toggleBtn.addEventListener('click', handleToggleBtnClick);
};

const initNavigation = function initializeTheNavigationFunctionality() {
  createNavLinksAnim();
  toggleBtnFunc();
};
export default initNavigation;
