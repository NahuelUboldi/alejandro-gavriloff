const closeModal = (modalContainer) =>
  modalContainer.classList.remove('show-modal');

const initModal = () => {
  console.log('initModal');
  const modalContainer = document.querySelector('.modal-fixed');
  const modalCloseBtn = document.querySelector('.close-tag i');
  const modalBg = document.querySelector('.modal-bg');
  const modalContent = modal.querySelector('.modal-content');

  modalCloseBtn.addEventListener('click', () => {
    closeModal(modalContainer);
  });
  modalBg.addEventListener('click', () => {
    closeModal(modalContainer);
  });
};

export default initModal;
