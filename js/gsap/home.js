gsap.registerPlugin(ScrollTrigger);
// HEADER
const tlNav = gsap.timeline({ defaults: { duration: 1 } });
tlNav
  .from(
    '.navbar-brand',
    { opacity: 0, x: 5, y: -5, delay: 1, duration: 1 },
    '-=0.5'
  )
  .from('.rect-bg', { opacity: 0, x: 10, y: -10 }, '-=0.8')
  .from('.nav-item', { opacity: 0, x: 2, y: -2, stagger: 0.3 }, '-=0.8');

const tlHero = gsap.timeline({ defaults: { duration: 1.2 } });
tlHero
  .from('.hero-text', {
    opacity: 0,
    duration: 1,
    x: -10,
    stagger: 0.5,
    delay: 1.5,
  })
  .from(
    '.hero-highlight',
    { opacity: 0, duration: 1, x: -10, stagger: 0.1 },
    '-=0.9'
  )
  .from('.hero-btn', { opacity: 0, scale: 0.9 }, '-=0.7')
  .from(
    '.cuadro',
    {
      duration: 3,
      scale: 0.8,
      opacity: 0,
      stagger: { from: 'random', amount: 0.8 },
    },
    '-=1.1'
  );

// QUOTE
gsap.from('#quote', { opacity: 0, x: -50, y: 50, duration: 1.5 });

const quoteAnimations = { x: 50, y: 20, opacity: 0 };
const tlQuote = gsap.timeline({
  defaults: { duration: 3 },
  scrollTrigger: {
    trigger: '#quote > .container',
    start: 'top 80%', //trigger element, screen position
    end: 'bottom 20%',
    toggleActions: 'play none none none',
    // scrub: true,
    // markers: true,
  },
});
tlQuote
  .from('#quote > .container > h2', { ...quoteAnimations, x: 30, scale: 1.5 })
  .from('#quote > .container > blockquote > p', { ...quoteAnimations }, '-=2.5')
  .from(
    '#quote > .container > blockquote > figcaption',
    {
      ...quoteAnimations,
      x: 90,
    },
    '-=2.5'
  );

// BIO
const bioAnimations = { opacity: 0 };
const tlBio = gsap.timeline({
  defaults: { duration: 3 },
  scrollTrigger: {
    trigger: '#bio > .container',
    start: 'top 80%', //trigger element, screen position
    end: 'bottom 20%',
    toggleActions: 'play none none none',
    // scrub: true,
    // markers: true,
  },
});
tlBio
  .from('#bio > .container > .display-3', { ...bioAnimations, scale: 1.5 })
  .from('#bio > .container > hr', { ...bioAnimations, x: '-100%' }, '-=2.5')
  .from(
    '#bio > .container > .row > div > p',
    {
      ...bioAnimations,
      stagger: 0.5,
      x: -100,
    },
    '-=2.5'
  )
  .from(
    '#bio > .container > .row > div > div > button',
    {
      ...bioAnimations,
      x: -100,
    },
    '-=2.5'
  )
  .from(
    '#bio > .container > .row .columna-3d',
    {
      ...bioAnimations,
      scale: 1.5,
      x: -40,
      y: 10,
    },
    '-=2.5'
  );

//PERIODS-ARTISTICOS
