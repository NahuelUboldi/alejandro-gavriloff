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

const runBioFaseAnimation = (id, imgPosition) => {
  const tl = gsap.timeline({
    defaults: {},
    scrollTrigger: {
      trigger: `#${id}`,
      start: '0% 90%', //trigger element, screen position
      end: '60% 10%',
      toggleActions: 'play none none none',
      scrub: 1,
      markers: true,
    },
  });
  tl.from(`#${id} .bio-fase__img--first`, {
    opacity: 0,
    y: 50,
    rotation: () => (imgPosition === 'img-left' ? -10 : 10),
    scrollTrigger: { scrub: 2 },
  })
    .from(`#${id} .bio-fase__img--second`, {
      opacity: 0,
      y: 100,
      rotation: () => (imgPosition === 'img-left' ? 10 : -10),
      scrollTrigger: { scrub: 2 },
    })

    .from(`#${id} .bio-fase__text div p`, {
      opacity: 0,
      x: () => (imgPosition === 'img-left' ? 90 : -90),
      stagger: 0.5,
    })
    .from(`#${id} .timeline`, {
      opacity: 0,
      y: -100,
      x: () => (imgPosition === 'img-left' ? '-100%' : '100%'),
      scrollTrigger: { scrub: 3 },
    });
  return tl;
};

window.onload = () => {
  let timelines = [];
  const parameters = [
    ['estonia', 'img-left'],
    ['argentina', 'img-right'],
    ['profesor-dibujo', 'img-left'],
    ['buenos-aires', 'img-left'],
  ];
  parameters.map((param) => {
    let tl = runBioFaseAnimation(param[0], param[1]);
    timelines.push(timelines);
  });
  console.log(timelines);
  return timelines;
};
