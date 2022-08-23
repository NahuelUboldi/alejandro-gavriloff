const loadContent = (modalContent, img) => {
  modalContent.innerHTML = `<img src='${img.img.lg}' alt='pintura del artista Alejandro Gavriloff' />`;
};

const closeModal = (container) => {
  //!!!!KILL EVENT LISTENERS!!!!!
  container.classList.remove('show-modal');
};

const showModal = (images, imgID) => {
  const modalContainer = document.querySelector('.modal-fixed');
  const modalBg = document.querySelector('.modal-bg');
  const modalContent = document.querySelector('.modal-content');
  const modalCloseBtn = document.querySelector('#close-modal-btn');
  const modalArrowLeft = document.querySelector('.fa-chevron-left');
  const modalArrowRight = document.querySelector('.fa-chevron-right');

  modalContainer.classList.add('show-modal');

  let imgIndex = images.findIndex((e) => e.id == imgID);
  loadContent(modalContent, images[imgIndex]);

  modalArrowLeft.addEventListener('click', () => {
    imgIndex = imgIndex - 1 < 0 ? images.length - 1 : imgIndex - 1;
    loadContent(modalContent, images[imgIndex]);
  });

  modalArrowRight.addEventListener('click', () => {
    imgIndex = imgIndex + 1 >= images.length ? 0 : imgIndex + 1;
    loadContent(modalContent, images[imgIndex]);
  });

  modalCloseBtn.addEventListener('click', () => {
    closeModal(modalContainer);
  });
  modalBg.addEventListener('click', (e) => {
    if ([...e.target.classList].includes('modal-bg'))
      closeModal(modalContainer);
  });
};

export default showModal;
