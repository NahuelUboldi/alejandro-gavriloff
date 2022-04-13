import { getPage } from "./utilities.js";

const resizeBioContainer = function resizeBioSectionsContainer() {
  const page = getPage()
 if (page !== "biography.html") return 
 const divWidthReference_hr = document.querySelector('.bio-separator');
 const divToResize = document.querySelectorAll('.div-to-resize');
 const divToResizeFather = document.querySelector('.bio-fase__text');
  const referenceWidth = divWidthReference_hr.getBoundingClientRect().width;
  let widthNeeded = referenceWidth;
  if (screen.width >= 766) {
    widthNeeded = referenceWidth / 2 - 12;
  }

  [...divToResize].map((div) => (div.style.width = `${widthNeeded}px`));
};


export default resizeBioContainer