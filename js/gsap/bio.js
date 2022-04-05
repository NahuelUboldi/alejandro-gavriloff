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
  .efAppearRight('.bio-separator', { x: '-100%' }, '-=2.5')
  .efAppearLeft('.bio-name', {}, '-=1.5')
  .efAppearLeft('.bio-lead', {}, '-=1.5');

const triggerSectionAnimationRight = (id) => {
  const tl = gsap.timeline({
    defaults: {},
    scrollTrigger: {
      trigger: `#${id}`,
      start: '0% 70%', //trigger element, screen position
      end: '70% 10%',
      toggleActions: 'play none none none',
      scrub: 1,
      markers: true,
    },
  });
  tl.from(`#${id} .bio-fase__img--first`, {
    opacity: 0,
    y: 50,
    rotation: -10,
    scrollTrigger: { scrub: 2 },
  })
    .from(`#${id} .bio-fase__img--second`, {
      opacity: 0,
      y: 100,
      rotation: 10,
      scrollTrigger: { scrub: 2 },
    })

    .from(
      `#${id} .bio-fase__text div p`,
      { opacity: 0, x: 90, stagger: 1 },
      '-=2.5'
    )
    .from(`#${id} .timeline`, {
      opacity: 0,
      y: -100,
      x: '-100%',
      scrollTrigger: { scrub: 3 },
    });
};

window.onload = () => {
  triggerSectionAnimationRight('estonia');
};
