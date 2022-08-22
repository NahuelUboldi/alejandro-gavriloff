const closeModal = (container) => container.classList.remove('show-modal');

const initModal = () => {
  console.log('init Modal');

  const modalContainer = document.querySelector('.modal-fixed');
  const modalBg = document.querySelector('.modal-bg');
  const modalContent = document.querySelector('.modal-content');
  const modalCloseBtn = document.querySelector('#close-modal-btn');
  const modalArrowLeft = document.querySelector('.fa-chevron-left');
  const modalArrowRight = document.querySelector('.fa-chevron-right');

  modalCloseBtn.addEventListener('click', () => {
    closeModal(modalContainer);
  });
  modalBg.addEventListener('click', () => {
    closeModal(modalContainer);
  });
};

export default initModal;
