import { select, getPage } from '../../utils/utilities.js';
const initQuoteAnim = function initializeTheQuoteAnimation() {
  const page = getPage();
  if (page !== 'index.html') return;

  const paragraph = select('#quote p');
  const fig = select('#quote figcaption');
  const tl = gsap.timeline({
    defaults: { duration: 3 },
    scrollTrigger: {
      trigger: paragraph,
      start: 'top 60%',
    },
  });
  tl.from(paragraph, { autoAlpha: 0, x: 50 }).from(
    fig,
    {
      autoAlpha: 0,
      x: 30,
    },
    '-=2.5'
  );
};

export default initQuoteAnim;
