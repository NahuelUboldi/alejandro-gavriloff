import { getPaintings, filterPaintingsByCategory } from './utilities.js';
//selectors
const galleryContainer = document.getElementById('img-container');

//fetch pictures

const loadImages = (imgArr, numImages = 10) => {
  let i = 0;
  while (i < numImages) {
    const img = document.createElement('img');
    img.src = `${imgArr[i].img.md}`;
    galleryContainer.appendChild(img);
    i++;
  }
};

const startGallery = async () => {
  let paintings = await getPaintings();
  paintings = filterPaintingsByCategory(paintings, 'tempera');
  loadImages(paintings);
};
window.addEventListener('load', startGallery);
