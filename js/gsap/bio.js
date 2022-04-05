gsap.registerPlugin(ScrollTrigger);
import gsapEffects from './effects.js';

// GENERIC ANIMATIONS
//register gsap effects
gsapEffects.map((ef) => {
  gsap.registerEffect({ ...ef });
});

//NAV
const tlNav = gsap.timeline();
tlNav
  .efScaleDown('.navbar-brand', { duration: 4 })
  .efAppearTopRight('.rect-bg', {}, '-=3.5')
  .efAppearTopRight('.nav-item', { x: 2, y: -2, stagger: 0.3 }, '-=3.5');

//page title
const tlTitle = gsap.timeline();
tlTitle
  .efScaleDown('.bio-title', { delay: 1 })
  .efAppearRight('.bio-separator', { x: '-100%' }, '-=2.5');

const triggerSectionAnimation = (id) => {
  const tl = gsap.timeline({
    defaults: {},
    scrollTrigger: {
      trigger: `#${id}`,
      start: '20% 80%', //trigger element, screen position
      end: 'bottom 10%',
      toggleActions: 'play none none none',
      scrub: true,
      // markers: true,
    },
  });
  tl
    // .efAppearRight(`#${id} .timeline`, { x: 30 })
    .from(`#${id} .bio-fase__img--first`, {
      opacity: 0,
      scrollTrigger: {
        start: 'bottom 80%', //trigger element, screen position
        end: '50% 20%',
        scrub: 2,
        markers: true,
      },
    })
    // .from(`#${id} .bio-fase__img--first`, {
    //   rotation: -10,
    //   scrollTrigger: { scrub: 3 },
    // })
    .efAppearRight(`#${id} .bio-fase__img--second`, { x: 90 }, '-=2.5')
    .efAppearRight(
      `#${id} .bio-fase__text div p`,
      { x: 90, stagger: 1 },
      '-=2.5'
    )
    .from(`#${id} .timeline`, {
      opacity: 0,
      x: '-100%',
      scrollTrigger: { scrub: 3 },
    });
};

window.onload = () => {
  triggerSectionAnimation('estonia');
};
