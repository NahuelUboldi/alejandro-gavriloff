import { select, selectAll, getPage } from '../../utils/utilities.js';

const animParallaxText = function animTheTextWithParallaxEffect() {
  selectAll('.with-parallax').forEach((section) => {
    const paragraphs = section.querySelectorAll('.bio-content p');
    console.log(paragraphs);
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        scrub: true,
      },
    });
    tl.fromTo([...paragraphs],{y:-150},{y:150})
    

    return tl;
  });
};
const animParallaxImage = function animTheImageWithParallaxEffect() {
  selectAll('.with-parallax').forEach((section) => {
    const imgMasks = section.querySelectorAll('.img-mask');
    const images = section.querySelectorAll('img');
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        scrub: true,
      },
    });
    tl.to(images, { yPercent: 30 })
      .fromTo(imgMasks[0], { yPercent: -10 }, { yPercent: 10 }, 0)
      .fromTo(imgMasks[1], { yPercent: 20 }, { yPercent: -20 }, 0);

    return tl;
  });
};

const initBioPage = function initializeTheBiographyPageFunctionality() {
  const page = getPage();
  if (page !== 'biography.html') return;
  animParallaxImage();
  animParallaxText();
};

export default initBioPage;
