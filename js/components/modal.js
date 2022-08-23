const loadContent = (modalContent, img) => {
  modalContent.innerHTML = `<img src='${img.img.lg}' alt='pintura del artista Alejandro Gavriloff' />`;
};

const closeModal = (container) => container.classList.remove('show-modal');

const showModal = (images, imgID) => {
  const modalContainer = document.querySelector('.modal-fixed');
  const modalBg = document.querySelector('.modal-bg');
  const modalContent = document.querySelector('.modal-content');
  const modalCloseBtn = document.querySelector('#close-modal-btn');
  const modalArrowLeft = document.querySelector('.fa-chevron-left');
  const modalArrowRight = document.querySelector('.fa-chevron-right');

  modalContainer.classList.add('show-modal');

  console.log({ images, imgID });
  let imgIndex = 0;
  for (let i = 0; i < images.length; i++) {
    if ((images[i].id, imgID)) {
      imgIndex = i;
    }
  }
  console.log({ imgIndex });
  loadContent(modalContent, images[0]);

  modalCloseBtn.addEventListener('click', () => {
    closeModal(modalContainer);
  });
  modalBg.addEventListener('click', () => {
    closeModal(modalContainer);
  });
};

export default showModal;
