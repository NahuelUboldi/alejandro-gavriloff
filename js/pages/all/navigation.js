import { select, selectAll } from '../../utils/utilities.js';

const handleMouse = function handleMouseEnterAndLeaveFunctionality(e) {
  const hoverEffectSpan = e.target.querySelector('span');
  const tl = gsap.timeline({ defaults: { duration: 0.25 } });
  if (e.type === 'mouseenter') {
    
    tl.set(hoverEffectSpan, { transformOrigin: 'left' })
      .to(hoverEffectSpan, { scaleX: 1 }, 0)
    return tl;
  }
  tl.set(hoverEffectSpan, { transformOrigin: 'right' })
    .to(hoverEffectSpan, { scaleX: 0 }, 0)
  return tl;
};

const navAnimation = function createNavLinksAnimation(direction,links,linksReversed) {
    const toggleBtn = select(".toggle-menu-btn")
    const scrollingDown = direction === 1;
    const selectedLinks = scrollingDown ? links : linksReversed;
    const tl = gsap.timeline()
    tl.to(selectedLinks, {
      duration: 0.3,
      stagger: 0.05,
      autoAlpha: () => (scrollingDown ? 0 : 1),
      y: () => (scrollingDown ? 20 : 0),
      ease: Power0.easeNone,
    })
    .to(toggleBtn,{
      duration:0.5,
      delay:0.2,
      autoAlpha: () => (scrollingDown ? 1 : 0),
      y: () => (scrollingDown ? 0 : "-4rem"),
      
    },0)


    return tl
  };

const initNavigation = function initializeTheNavigationFunctionality() {
  const links = selectAll('.menu-link');
  const linksReversed = selectAll('.menu-link').reverse();


  links.forEach((link) => {
    link.addEventListener('mouseenter', handleMouse);
    link.addEventListener('mouseleave', handleMouse);
  });

  ScrollTrigger.create({
    start: 1,
    end: 'bottom bottom',
    // toggleClass: {
    //   targets: 'body',
    //   className: 'has-scrolled',
    // },
    onEnter: ({ direction }) => navAnimation(direction,links,linksReversed),
    onLeaveBack: ({ direction }) => navAnimation(direction,links,linksReversed),
  });

};
export default initNavigation;
