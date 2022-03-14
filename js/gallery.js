import {
  getPaintings,
  filterPaintingsByCategory,
  shuffleArray,
} from './utilities.js';
import { showModal, closeModal } from './modal.js';
//selectors
const filterBtnsContainer = document.querySelector('.gallery-btns-container');
const galleryContainer = document.getElementById('img-container');
const modal = document.getElementById('modal');

//global vars
const CATEGORY_ALL = 'todos';

//state
const state = {
  categoryActive: 'todos',
  paintings: [],
};
//btns
const getPaintingsCateogies = (paintings) => {
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
  const categories = getPaintingsCateogies(state.paintings);
  const filterBtns = getFilterBtns(categories);
  filterBtnsContainer.innerHTML = filterBtns;
};
//images
const getPaintingsToShow = (paintings) => {
  let pantingsArr = paintings;
  if (state.categoryActive === 'todos') {
    console.log(state.categoryActive, 'shuffle');
    pantingsArr = shuffleArray(pantingsArr);
  }
  return pantingsArr.reduce((acc, paint) => {
    return (
      acc +
      `<img src=${paint.img.sm} alt="pintura del artista Alex Gavriloff" id="gallery-img" key=${paint.id} />`
    );
  }, '');
};

const loadImages = () => {
  let paintings = filterPaintingsByCategory(
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
      state.paintings,
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
  }
};
//main
const startGallery = async () => {
  let paintings = await getPaintings();
  state.paintings = paintings;
  loadFilterBtns();
  loadImages();
};
window.addEventListener('load', startGallery);
filterBtnsContainer.addEventListener('click', handleBtnClick);
window.addEventListener('click', handleImgClick);
