gsap.registerPlugin(ScrollTrigger);
import {
  getPaintings,
  filterPaintingsByQuality,
  filterPaintingsByTags,
  filterPaintingsByID,
  getPage,
} from '../../utils/utilities.js';

const initGalleryPreview = function initializeTheImgGalleryPreviewInHomePage() {
  const page = getPage();
  if (page !== 'index.html') return;

  const imagesContainer = document.getElementById('images-container');
  const mostrarCuadrosRandomBtn = document.getElementById(
    'mostrar-cuadros-random'
  );

  //variables
  const imagesRequiredWidth = 300; //400 default buts breaks in 400 px smaller screens

  //functions

  function getImagesQuantity() {
    const imagesContainerWidth = imagesContainer.getBoundingClientRect().width;
    const imagesForEachRow = Math.floor(
      imagesContainerWidth / imagesRequiredWidth
    );
    if (imagesForEachRow < 3) {
      return imagesForEachRow * 3;
    } else {
      return imagesForEachRow * 2;
    }
  }

  //main function
  async function showGalleryPreview() {
    const imagesNeeded = getImagesQuantity();
    let paintings = await getPaintings();
    let filtered = filterPaintingsByQuality(paintings);
    filtered = filterPaintingsByTags(filtered, 'religion', false);

    let imagesArr = [];
    for (let i = 0; i < imagesNeeded; i++) {
      const randomNum = Math.floor(Math.random() * filtered.length);
      const individualImage = `
      
      <img id="${filtered[randomNum].id}" src="${filtered[randomNum].img.md}"  alt="Cuadro del pintor argentino Alejandro Gavriloff" />
      
      `;
      imagesArr.push(individualImage);
    }

    let imagesToShow = imagesArr.join('');
    imagesContainer.innerHTML = imagesToShow;
    gsap.from('.modal-img', {
      scrollTrigger: '.modal-img',
      duration: 1,
      opacity: 0,
      scale: 0.9,
      stagger: {
        from: 'random',
        amount: 0.6,
      },
      delay: 0,
    });
  }
  mostrarCuadrosRandomBtn.addEventListener('click', showGalleryPreview);
  modalCloseBtn.addEventListener('click', closeModal);
  document.addEventListener('click', showModal);
  showGalleryPreview();
};

export default initGalleryPreview;
