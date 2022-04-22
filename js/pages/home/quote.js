import { select, selectAll } from '../../utils/utilities.js';
const initQuoteAnim = function initializeTheQuoteAnimation() {
  const parragraph = select('#quote p');
  const fig = select('#quote figcaption');
  const tl = gsap.timeline({
    defaults: { duration: 2 },
    scrollTrigger: {
      trigger: '#quote',
    },
  });
  tl.from(parragraph, { autoAlpha: 0, x: 100 }).from(
    fig,
    {
      autoAlpha: 0,
      x: 100,
    },
    '-=2.5'
  );
};

export default initQuoteAnim;
