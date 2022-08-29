gsap.registerPlugin(ScrollTrigger);
import {
  getPaintings,
  filterPaintingsByQuality,
  filterPaintingsByTags,
  getPage,
} from '../../utils/utilities.js';
import showModal from '../../components/modal.js';

const printRandomPaintings = (container, paintings) => {
  const htmlOutput = paintings.reduce((acc, p) => {
    acc =
      `<img src=${p.img.sm} data-id=${p.id} alt="cuadro del pintor argentino Alejandro Gavriloff" />` +
      acc;
    return acc;
  }, '');
  container.innerHTML = htmlOutput;
};

const getRandomPaintings = (paintings, numWanted) => {
  // console.log({ paintings, numWanted });
  const randomPaintings = [];
  while (randomPaintings.length < numWanted) {
    const randomNum = Math.floor(Math.random() * paintings.length);
    if (
      !randomPaintings.find((paint) => paint.id === paintings[randomNum].id)
    ) {
      randomPaintings.push(paintings[randomNum]);
    }
  }
  return randomPaintings;
};

const filterPaintings = (paintings) => {
  let filtered = filterPaintingsByQuality(paintings);
  filtered = filterPaintingsByTags(filtered, 'religion', false);
  return filtered;
};

const calcNumOfPaintingsWanted = () => {
  return 9;
};

const initGalleryPreview =
  async function initializeTheImgGalleryPreviewInHomePage() {
    const page = getPage();
    if (page !== 'index.html') return;

    const imagesContainer = document.querySelector('#images-container');
    const randomBtn = document.querySelector('#random-btn');

    const paintings = await getPaintings();
    const filteredPaintings = filterPaintings(paintings);
    const numWanted = calcNumOfPaintingsWanted();
    let randomPaintings = getRandomPaintings(filteredPaintings, numWanted);

    printRandomPaintings(imagesContainer, randomPaintings);

    randomBtn.addEventListener('click', () => {
      randomPaintings = getRandomPaintings(filteredPaintings, numWanted);
      printRandomPaintings(imagesContainer, randomPaintings);
    });
    imagesContainer.addEventListener('click', (e) => {
      showModal(randomPaintings, e.target.dataset.id);
    });
  };

export default initGalleryPreview;
