gsap.registerPlugin(ScrollTrigger);
// GENERIC ANIMATIONS
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
const tlNav = gsap.timeline({ defaults: { duration: 1 } });
tlNav
  .from('.navbar-brand', { ...animations.animScale }, '-=0.5')
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
    start: 'top 70%', //trigger element, screen position
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
const tlBio = gsap.timeline({
  defaults: { duration: 3 },
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
  .from('#bio > .container > .display-3', { ...animations.animScale })
  .from('#bio > .container > hr', { ...animations.animAppearFullLeft }, '-=2.5')
  .from(
    '#bio > .container > .row > div > p',
    {
      ...animations.animOpacity,
      stagger: 0.5,
      x: -100,
    },
    '-=2.5'
  )
  .from(
    '#bio > .container > .row > div > div > button',
    {
      ...animations.animOpacity,
      x: -100,
    },
    '-=2.5'
  )
  .from(
    '#bio > .container > .row .columna-3d',
    {
      ...animations.animScale,
      x: -40,
      y: 10,
    },
    '-=2.5'
  );

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
    '#gallery-preview img',
    {
      ...animations.animAppearLeft,
      stagger: 0.5,
    },
    '-=2.5'
  );
