import { select } from './utilities.js';
const closeModal = () => {
  const modal = select('.modal-fixed');
  modal.classList.remove('show-modal');
};
const loadModalContent = (img) => {
  const modalContent = modal.querySelector('.modal-content');
  modalContent.innerHTML = `
    <img src='${img}' alt='' />
    `;
};

const handleCloseBtn = () => {
  const closeBtn = modal.querySelector('.close-tag i');
  closeBtn.addEventListener('click', closeModal);
};

const handleBackgroundClick = () => {
  const modalBackground = modal.querySelector('.modal-bg');
  modalBackground.addEventListener('click', closeModal);
};

const loadContentAndHandleArrows = (modal, arr, id) => {
  let index = arr.findIndex((obj) => obj.id === id);
  loadModalContent(arr[index].img.lg);
  modal.querySelector('.arrow-btns').addEventListener('click', (e) => {
    const isLeftArrow = e.target.classList.value
      .split(' ')
      .includes('fa-chevron-left');

    if (isLeftArrow) {
      index -= 1;
    }
    if (!isLeftArrow) {
      index += 1;
    }

    if (index < 0) index = arr.length - 1;
    if (index > arr.length - 1) index = 0;
    loadModalContent(arr[index].img.lg);
  });
};

const showModal = (arr, id) => {
  const modal = select('.modal-fixed');
  modal.classList.add('show-modal');

  handleCloseBtn(modal);
  handleBackgroundClick(modal);
  loadContentAndHandleArrows(modal, arr, id);
};

export { showModal, closeModal };
