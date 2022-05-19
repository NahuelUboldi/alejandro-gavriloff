import {
  getPaintings,
  filterPaintingsByCategory,
  shuffleArray,
  getPage,
} from '../../utils/utilities.js';
import { showModal, closeModal } from '../../utils/modal.js';
gsap.registerPlugin(ScrollTrigger);

const initGallery = function initializeTheImgGallerySection() {
  const page = getPage();
  if (page !== 'gallery.html') return;

  //selectors
  const filterBtnsContainer = document.querySelector('.gallery-btns-container');
  const galleryContainer = document.getElementById('img-container');
  const modal = document.getElementById('modal');

  //state
  const state = {
    categoryActive: 'todos',
    paintings: [],
    paintingsShufled: [],
  };

  //btns
  const getPaintingsCategories = (paintings) => {
    let categoryArr = ['todos'];
    paintings.map((paint) => {
      if (!categoryArr.includes(paint.category)) {
        categoryArr.push(paint.category);
      }
    });
    return categoryArr;
  };
  const getFilterBtns = (categories) => {
    const btns = categories.reduce((acc, cat) => {
      if (cat === state.categoryActive) {
        return (
          acc +
          `<button type="button" class="btn btn-outline-primary gallery-filter-btn active">${cat}</button>`
        );
      }
      return (
        acc +
        `<button type="button" class="btn btn-outline-primary gallery-filter-btn">${cat}</button>`
      );
    }, '');
    return btns;
  };
  const loadFilterBtns = () => {
    const categories = getPaintingsCategories(state.paintings);
    const filterBtns = getFilterBtns(categories);
    filterBtnsContainer.innerHTML = filterBtns;
  };
  //images
  const getPaintingsToShow = (paintings) => {
    let pantingsDeepCopy = JSON.parse(JSON.stringify(paintings));
    if (state.categoryActive === 'todos') {
      pantingsDeepCopy = shuffleArray(pantingsDeepCopy);
    }
    state.paintingsShufled = pantingsDeepCopy;
    return pantingsDeepCopy.reduce((acc, paint) => {
      return (
        acc +
        `<img  loading="lazy" src=${paint.img.sm} alt="pintura del artista Alex Gavriloff" class="gallery-img" key=${paint.id} />`
      );
    }, '');
  };

  const loadImages = () => {
    const paintings = filterPaintingsByCategory(
      state.paintings,
      state.categoryActive
    );
    const paintingsToShow = getPaintingsToShow(paintings);
    galleryContainer.innerHTML = paintingsToShow;
  };

  //handlers
  const handleImgClick = (e) => {
    if (e.target.id === 'gallery-img') {
      const paintings = filterPaintingsByCategory(
        state.paintingsShufled,
        state.categoryActive
      );
      const paintingID = e.target.attributes.key.value;
      showModal(modal, paintings, paintingID);
    }
    if (
      e.target.id === 'close-modal-btn' ||
      e.target.classList.value === 'modal-bg'
    ) {
      closeModal();
    }
  };
  const handleBtnClick = (e) => {
    if (e.target.classList.value.split(' ').includes('gallery-filter-btn')) {
      state.categoryActive = e.target.innerText;
      loadFilterBtns(state.paintings);
      loadImages();
      // runGsapAnimationImg();
    }
  };
  //main
  const startGallery = async () => {
    let paintings = await getPaintings();
    state.paintings = paintings;
    loadFilterBtns();
    loadImages();
  };
  filterBtnsContainer.addEventListener('click', handleBtnClick);
  galleryContainer.addEventListener('click', handleImgClick);
  startGallery();
};

export default initGallery;
