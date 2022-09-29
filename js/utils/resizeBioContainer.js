import { getPage } from './utilities.js';

const resizeBioContainer = function resizeBioSectionsContainer(windowWidth) {
  const page = getPage();
  if (page !== 'biography.html') return;
  const divWidthReference = document.querySelector('.bio-separator');
  const divToResize = document.querySelectorAll('.div-to-resize');
  const referenceWidth = divWidthReference.getBoundingClientRect().width;
  let widthNeeded = referenceWidth;
  if (windowWidth >= 766) {
    widthNeeded = referenceWidth / 2 - 12;
  }

  [...divToResize].map((div) => (div.style.width = `${widthNeeded}px`));
};

export default resizeBioContainer;
