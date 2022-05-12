import {
  getPaintings,
  filterPaintingsByQuality,
  filterPaintingsByTags,
  filterPaintingsByID,
  getPage,
} from '../../utils/utilities.js';
gsap.registerPlugin(ScrollTrigger);

const initGalleryPreview = function initializeTheImgGalleryPreviewInHomePage() {
  const page = getPage();
  if (page !== 'index.html') return;

  const imagesContainer = document.getElementById('images-container');
  const mostrarCuadrosRandomBtn = document.getElementById(
    'mostrar-cuadros-random'
  );
  const modal = document.getElementById('modal');
  const modalCloseBtn = document.querySelector('.close-tag');
  const modalContent = document.getElementById('modal-content');

  //variables
  const imagesRequiredWidth = 300; //400 default buts breaks in 400 px smaller screens

  //functions
  const closeModal = () => {
    modal.classList.add('closed');
  };
  const showModal = async (e) => {
    const classNeeded = e.target.classList.value
      .split(' ')
      .includes('modal-img');
    // runAnimation();

    if (classNeeded) {
      modal.classList.remove('closed');
      const paintings = await getPaintings();
      const filtered = filterPaintingsByID(paintings, e.target.id);
      modalContent.innerHTML = `
      <img src='${filtered[0].img.lg}' alt='' />
      `;
    }
    if (e.target.classList.value === 'modal-bg') {
      closeModal();
    }
  };
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
      
      <img class="modal-img" id="${filtered[randomNum].id}" src="${filtered[randomNum].img.md}"  alt="Cuadro del pintor argentino Alejandro Gavriloff" />
      
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
