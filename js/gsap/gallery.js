gsap.registerPlugin(ScrollTrigger);
import gsapEffects from './effects.js';

// GENERIC ANIMATIONS
//register gsap effects
gsapEffects.map((ef) => {
  gsap.registerEffect({ ...ef });
});

// //NAV
// const tlNav = gsap.timeline();
// tlNav
//   .efScaleDown('.navbar-brand', { duration: 4 })
//   .efAppearTopRight('.rect-bg', {}, '-=3.5')
//   .efAppearTopRight('.nav-item', { x: 2, y: -2, stagger: 0.3 }, '-=3.5');

//TITLE
const tlTitle = gsap.timeline();
tlTitle
  .efScaleDown('.gallery-title', {})
  .efAppearLeft('.gallery-separator', { x: '-100%' }, '-=2.5');
