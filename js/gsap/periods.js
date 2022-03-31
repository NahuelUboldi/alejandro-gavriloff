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
  .efScaleDown('.etapas-title')
  .efAppearRight('.etapas-separator', { x: "-100%" }, '-=2.5')
  .efBlur('.etapas-lead',{},'-=2.5');

//section anims
const runPeriodTextAnim = (period) => {
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
   
}
const runPeriodGliderCarouselAnim = (period) => {
   const tlGlider = {}
  tlGlider[period] = gsap.timeline({
   defaults: {},
   scrollTrigger: {
     trigger: `.${period}-period-carousel`,
     start: 'top 70%', //trigger element, screen position
     end: 'bottom 50%',
     toggleActions: 'play none none none',
     // scrub: true,
     markers: true,
   },
  });
  console.log(tlGlider);
 tlGlider[period]
   .efOpacity(`.${period}-period-glider`, {  })
   .efOpacity(`.${period}-period-carousel button`, {  }, '-=2.5')
   .efScaleDown(`.${period}-period-glider img`, { stagger:0.5,scale:0.9 }, '-=2.5')
   }

runPeriodTextAnim("bsas")
setTimeout(() => {
  runPeriodTextAnim("america")
  runPeriodTextAnim("humanidad")
  runPeriodGliderCarouselAnim("first")
  runPeriodGliderCarouselAnim("second")
  runPeriodGliderCarouselAnim("third")
  
}, 1000);

setTimeout(() => {
}, 1000);