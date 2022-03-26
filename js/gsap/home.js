gsap.registerPlugin(ScrollTrigger);
import gsapEffects from './effects.js';

//selectors
const contactForm = document.querySelector('#contact-form > .container');

// GENERIC ANIMATIONS
//register gsap effects
gsapEffects.map((ef) => {
  gsap.registerEffect({ ...ef });
});

const animations = {
  animOpacity: { opacity: 0 },
  animScale: { opacity: 0, scale: 1.5 },
  animAppearTop: { opacity: 0, y: -20 },
  animAppearLeft: { opacity: 0, x: -20 },
  animAppearFullLeft: { opacity: 0, x: '-100%' },
  animAppearRight: { opacity: 0, x: 20 },
  animAppearFullRight: { opacity: 0, x: '100%' },
};

// HEADER
const tlNav = gsap.timeline();
tlNav
  .efScaleDown('.navbar-brand', {}, '-=0.5')
  .efAppearTopRight('.rect-bg', {}, '-=0.8')
  .efAppearTopRight('.nav-item', { x: 2, y: -2, stagger: 0.3 }, '-=0.8');

const tlHero = gsap.timeline({ defaults: { duration: 1.2 } });
tlHero
  .efAppearLeft('.hero-text', {
    duration: 1,
    x: -10,
    stagger: 0.5,
    delay: 1.5,
  })
  .efAppearLeft(
    '.hero-highlight',
    { duration: 1, x: -10, stagger: 0.1 },
    '-=0.9'
  )
  .efScaleDown('.hero-btn', { scale: 0.9 }, '-=0.7')
  .efScaleDown(
    '.cuadro',
    {
      duration: 1,
      scale: 0.8,
      stagger: { from: 'random', amount: 0.8 },
    },
    '-=1.1'
  );

// QUOTE
gsap.effects.efAppearBottomLeft('#quote');

const tlQuote = gsap.timeline({
  defaults: {},
  scrollTrigger: {
    trigger: '#quote > .container',
    start: 'top 70%', //trigger element, screen position
    end: 'bottom 20%',
    toggleActions: 'play none none none',
    // scrub: true,
    // markers: true,
  },
});
tlQuote
  .efAppearRight('#quote > .container > h2', { x: 30 })
  .efAppearRight('#quote > .container > blockquote > p', { x: 50 }, '-=2.5')
  .efAppearRight(
    '#quote > .container > blockquote > figcaption',
    { x: 90 },
    '-=2.5'
  );

// BIO
const tlBio = gsap.timeline({
  defaults: {},
  scrollTrigger: {
    trigger: '#bio > .container',
    start: 'top 70%', //trigger element, screen position
    end: 'bottom 20%',
    toggleActions: 'play none none none',
    // scrub: true,
    // markers: true,
  },
});
tlBio
  .efScaleDown('#bio > .container > .display-3', {})
  .efAppearLeft('#bio > .container > hr', { x: '-100%' }, '-=2.5')
  .efAppearLeft(
    '#bio > .container > .row > div > p',
    {
      x: -100,
      stagger: 0.5,
    },
    '-=2.5'
  )
  .efAppearLeft(
    '#bio > .container > .row > div > div > button',
    {
      x: -100,
    },
    '-=2.5'
  )
  .efScaleDown('#bio > .container > .row .columna-3d', {}, '-=2.5');

//artistic-periods
const tlArtisticPeriodsHeader = gsap.timeline({
  defaults: { duration: 3 },
  scrollTrigger: {
    trigger: '#artistic-periods > .container',
    start: 'top 70%', //trigger element, screen position
    end: 'bottom 20%',
    toggleActions: 'play none none none',
    // scrub: true,
    // markers: true,
  },
});
tlArtisticPeriodsHeader
  .from(
    '#artistic-periods > .container > .display-3',
    { ...animations.animScale },
    '-=2.5'
  )
  .from(
    '#artistic-periods > .container > hr',
    { ...animations.animAppearFullLeft },
    '-=2.5'
  )
  .from(
    '#artistic-periods > .container > .lead',
    { ...animations.animAppearLeft },
    '-=2.5'
  );

// images
const periodsImagesProps = {
  scrollTrigger: {
    start: '10% 60%', //trigger element, screen position
    end: '90% 40%',
    ease: 'power4',
    // toggleActions: 'play none none none',
    scrub: 5,
    // markers: true,
  },
  from: {
    backgroundPosition: '00%',
    backgroundSize: 'auto 100%',
  },
  to: {
    backgroundPosition: '80%',
    backgroundSize: 'auto 110%',
  },
};
const tlFirstPeriodImage = gsap.timeline({
  scrollTrigger: {
    ...periodsImagesProps.scrollTrigger,
    trigger: '#artistic-periods > .bsas',
  },
});
tlFirstPeriodImage.fromTo(
  '.bsas .image-bg',
  {
    ...periodsImagesProps.from,
  },
  {
    ...periodsImagesProps.to,
  }
);
const tlSecondPeriodImage = gsap.timeline({
  scrollTrigger: {
    ...periodsImagesProps.scrollTrigger,
    trigger: '#artistic-periods > .america',
  },
});
tlSecondPeriodImage.fromTo(
  '.america .image-bg',
  {
    ...periodsImagesProps.from,
  },
  {
    ...periodsImagesProps.to,
  }
);
const tlThirdPeriodImage = gsap.timeline({
  scrollTrigger: {
    ...periodsImagesProps.scrollTrigger,
    trigger: '#artistic-periods > .humanidad',
  },
});
tlThirdPeriodImage.fromTo(
  '.humanidad .image-bg',
  {
    ...periodsImagesProps.from,
  },
  {
    ...periodsImagesProps.to,
  }
);

//content
const tlFirstPeriod = gsap.timeline({
  defaults: { duration: 3 },
  scrollTrigger: {
    trigger: '#artistic-periods > .bsas',
    start: 'top 70%', //trigger element, screen position
    end: 'bottom 20%',
    toggleActions: 'play none none none',
    // scrub: true,
    // markers: true,
  },
});
tlFirstPeriod
  .from(
    '.bsas .period-article-content h3',
    { ...animations.animScale },
    '-=2.5'
  )
  .from(
    '.bsas .period-article-content hr',
    { ...animations.animAppearFullRight },
    '-=2.5'
  )
  .from(
    '.bsas .period-article-content p',
    { ...animations.animAppearRight, stagger: 0.5 },
    '-=2.5'
  );

const tlSecondPeriod = gsap.timeline({
  defaults: { duration: 3 },
  scrollTrigger: {
    trigger: '#artistic-periods > .america',
    start: 'top 80%', //trigger element, screen position
    end: 'bottom 20%',
    toggleActions: 'play none none none',
    // scrub: true,
    // markers: true,
  },
});
tlSecondPeriod
  .from(
    '.america .period-article-content h3',
    { ...animations.animScale },
    '-=2.5'
  )
  .from(
    '.america .period-article-content hr',
    { ...animations.animAppearFullLeft },
    '-=2.5'
  )
  .from(
    '.america .period-article-content p',
    { ...animations.animAppearLeft, stagger: 0.5 },
    '-=2.5'
  );

const tlThirdPeriod = gsap.timeline({
  defaults: { duration: 3 },
  scrollTrigger: {
    trigger: '#artistic-periods > .humanidad',
    start: 'top 80%', //trigger element, screen position
    end: 'bottom 20%',
    toggleActions: 'play none none none',
    // scrub: true,
    // markers: true,
  },
});
tlThirdPeriod
  .from(
    '.humanidad .period-article-content h3',
    { ...animations.animScale },
    '-=2.5'
  )
  .from(
    '.humanidad .period-article-content hr',
    { ...animations.animAppearFullRight },
    '-=2.5'
  )
  .from(
    '.humanidad .period-article-content p',
    { ...animations.animAppearRight, stagger: 0.5 },
    '-=2.5'
  );

// GALLERY PREVIEW
const tlGalleryPreview = gsap.timeline({
  defaults: { duration: 3 },
  scrollTrigger: {
    trigger: '#gallery-preview > .container-fluid',
    start: 'top 80%', //trigger element, screen position
    end: 'bottom 20%',
    toggleActions: 'play none none none',
    // scrub: true,
    // markers: true,
  },
});
tlGalleryPreview
  .from('#gallery-preview', { ...animations.animOpacity })
  .from('#gallery-preview .display-4', { ...animations.animScale }, '-=2.5')
  .from(
    '#gallery-preview button',
    {
      ...animations.animOpacity,
      stagger: 0.5,
    },
    '-=2.5'
  )
  .from(
    '.modal-img',
    {
      ...animations.animAppearLeft,
      stagger: 0.5,
    },
    '-=2.5'
  );
setTimeout(() => {
  // CANVAS
  const tlCanvas = gsap.timeline({
    defaults: { duration: 3 },
    scrollTrigger: {
      trigger: '.canvas-shadow',
      start: '0% 70%', //trigger element, screen position
      end: 'bottom 30%',
      toggleActions: 'play none none none',
      // scrub: true,
      // markers: true,
    },
  });
  tlCanvas
    .efAppearLeft('.canvas-shadow', { x: -50 })
    .efAppearRight('.canvas-text .h1', {}, '-=2.5')
    .efAppearRight('.canvas-text .lead', {}, '-=2.3')
    .efAppearRight('.canvas-text .btn', {}, '-=2.1');

  setContactFormGsapAnim();
}, 1000);

const setContactFormGsapAnim = () => {
  const tlContact = gsap.timeline({
    defaults: { duration: 3 },
    scrollTrigger: {
      trigger: '#contact-form > .container',
      start: '10% 70%', //trigger element, screen position
      end: 'bottom 30%',
      toggleActions: 'play none none none',
      // scrub: true,
      // markers: true,
    },
  });
  tlContact
    .efAppearLeft('#contact-form .display-4')
    .efAppearLeft('#contact-form hr', { x: '-100%' }, '-=2.5')
    .efAppearLeft(
      '#contact-form form .form-group',
      {
        x: -50,
        stagger: 0.5,
      },
      '-=2.5'
    )
    .efAppearLeft('#contact-form form button', {}, '-=2.5');
};
