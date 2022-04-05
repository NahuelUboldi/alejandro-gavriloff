// current year
document.getElementById('current-year').innerText = new Date().getFullYear();

//BIO SECOND COLUMN LIMIT
const divWidthReference_hr = document.querySelector('.bio-separator');
const divToResize = document.querySelectorAll('.div-to-resize');
const divToResizeFather = document.querySelector('.bio-fase__text');

const handleResize = () => {
  const referenceWidth = divWidthReference_hr.getBoundingClientRect().width;
  let widthNeeded = referenceWidth;
  if (screen.width >= 766) {
    console.log('if');
    widthNeeded = referenceWidth / 2 - 12;
  }

  [...divToResize].map((div) => (div.style.width = `${widthNeeded}px`));
};

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
