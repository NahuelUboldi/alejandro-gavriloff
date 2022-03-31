gsap.registerPlugin(ScrollTrigger);
import gsapEffects from './effects.js';

//selectors
const contactForm = document.querySelector('#contact-form > .container');

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

 //CONTACT FORM
 const tlContact = gsap.timeline({
    defaults: { duration: 3 },
    scrollTrigger: {
      trigger: '#contact-form > .container',
      start: '10% 60%', //trigger element, screen position
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
