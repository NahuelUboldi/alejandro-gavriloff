gsap.registerPlugin(ScrollTrigger);
import gsapEffects from './effects.js';

// GENERIC ANIMATIONS
//register gsap effects
gsapEffects.map((ef) => {
  gsap.registerEffect({ ...ef });
});

// //NAV
const tlNav = gsap.timeline();
tlNav
  .efScaleDown('.navbar-brand', { duration: 4 })
  .efAppearTopRight('.rect-bg', {}, '-=3.5')
  .efAppearTopRight('.nav-item', { x: 2, y: -2, stagger: 0.3 }, '-=3.5');

const tlTitle = gsap.timeline();
tlTitle
  .efScaleDown('.etapas-title')
  .efAppearRight('.etapas-separator', { x: "-100%" }, '-=2.5')
  .efBlur('.etapas-lead',{},'-=2.5');

// const tlBsas  = gsap.timeline({
//    defaults: {},
//    scrollTrigger: {
//      trigger: ".primer-period",
//      start: 'top 70%', //trigger element, screen position
//      end: 'bottom 50%',
//      toggleActions: 'play none none none',
//      // scrub: true,
//      markers: true,
//    },
//  });
//  tlBsas
//    .efAppearRight(`.upper-title-bsas`, { x: 30 })
//    .efAppearRight(`.title-bsas`, { x: 50 }, '-=2.5')
//    .efAppearRight(`.sub-title-bsas`, { x: 90 }, '-=2.5')
//    .efAppearRight(`.bsas-separator`, { x: 90 }, '-=2.5')
//    .efBlur(`.bsas-text`, {stagger:0.5}, '-=2.5')
   



const sectionTitleAnimation = (period) => {
 const tl = {}
  tl[period] = gsap.timeline({
   defaults: {},
   scrollTrigger: {
     trigger: `.${period}-separator`,
     start: 'top 70%', //trigger element, screen position
     end: 'bottom 50%',
     toggleActions: 'play none none none',
     // scrub: true,
     markers: true,
   },
 });
 tl[period]
   .efAppearRight(`.upper-title-${period}`, { x: 30 })
   .efAppearRight(`.title-${period}`, { x:50 }, '-=2.5')
   .efAppearRight(`.sub-title-${period}`, { x: 70 }, '-=2.5')
   .efAppearRight(`.${period}-separator`, { x: "100%" }, '-=2.5')
   .efBlur(`.${period}-text p`, {stagger:0.5}, '-=2.5')
   console.log(tl);
}


const runGsapEtapasAnimation = () => {
 sectionTitleAnimation("bsas")
 sectionTitleAnimation("america")
 sectionTitleAnimation("humanidad")
}
export {runGsapEtapasAnimation}