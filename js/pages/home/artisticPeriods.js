import resizeDiv from '../../utils/resizeDiv.js';
import { select, selectAll, getPage } from '../../utils/utilities.js';
const animParallaxText = function animTheTextWithParallaxEffect() {
  selectAll('.with-parallax').forEach((section) => {
    const h3 = section.querySelector('.article-content h3');
    const hr = section.querySelector('.article-content hr');
    const p = section.querySelectorAll('.article-content p');

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        scrub: true,
      },
    });
    tl.fromTo(h3, { y: -150 }, { y: 120 })
      .fromTo(hr, { y: -130 }, { y: 115 }, 0)
      .fromTo([...p][0], { y: -110 }, { y: 110 }, 0)
      .fromTo([...p][1], { y: -90 }, { y: 105 }, 0);
    return tl;
  });
};
const animParallaxImage = function animTheImageWithParallaxEffect() {
  selectAll('.with-parallax').forEach((section) => {
    const image = section.querySelector('img');
    return gsap.to(image, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        scrub: true,
      },
    });
  });
};

const resizePeriodColumn =
  function resizeTheArtPeriodsContentColumnToFitContainer() {
    const resizeReferenceElement = select('.width-reference-element');
    const divToResize = selectAll('.article-content');
    const widthNeeded = resizeDiv(resizeReferenceElement, divToResize);
    divToResize.map((div) => (div.style.width = `${widthNeeded}px`));
  };

const initArtisticPeriods = function initializeTheArtisticPeriodsSection() {
  const page = getPage();
  if (page !== 'index.html') return;
  resizePeriodColumn();
  window.addEventListener('resize', resizePeriodColumn);
  animParallaxImage();
  animParallaxText();
};

export default initArtisticPeriods;
