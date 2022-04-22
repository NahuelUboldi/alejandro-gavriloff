import { select } from './utilities.js';
const resizeDiv = function resizeDivToFitContainerWidth(
  referenceElement,
  divToResize
) {
  const bodyWidth = select('body').getBoundingClientRect().width;
  const referenceWidth = referenceElement.getBoundingClientRect().width;
  let widthNeeded = referenceWidth;
  if (bodyWidth >= 766) {
    widthNeeded = referenceWidth / 2 - 12;
  }
  return widthNeeded;
};
export default resizeDiv;
