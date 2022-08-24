const loadContent = (modalContent, img) => {
  modalContent.innerHTML = `<img src='${img.img.lg}' alt='pintura del artista Alejandro Gavriloff' />`;
};

const closeModal = (container, handleClick, handleKeydown) => {
  container.classList.remove('show-modal');
  document.removeEventListener('click', handleClick);
  document.removeEventListener('keydown', handleKeydown);
};
const modifyIndex = (images, imgIndex, operation) => {
  if (operation === 'sum') {
    return imgIndex - 1 < 0 ? images.length - 1 : imgIndex - 1;
  }
  return imgIndex + 1 >= images.length ? 0 : imgIndex + 1;
};

const showModal = (images, imgID) => {
  const modalContainer = document.querySelector('.modal-fixed');
  const modalContent = document.querySelector('.modal-content');

  modalContainer.classList.add('show-modal');

  let imgIndex = images.findIndex((e) => e.id == imgID);
  loadContent(modalContent, images[imgIndex]);
  const keyHandlers = {
    ArrowRight: () => {
      imgIndex = modifyIndex(images, imgIndex, 'sum');
      loadContent(modalContent, images[imgIndex]);
    },
    ArrowLeft: () => {
      imgIndex = modifyIndex(images, imgIndex, 'subtraction');
      loadContent(modalContent, images[imgIndex]);
    },
    Escape: () => {
      closeModal(modalContainer, handleClick, handleKeydown);
    },
  };

  const clickHandlers = {
    'modal-right-arrow': () => {
      imgIndex = modifyIndex(images, imgIndex, 'sum');
      loadContent(modalContent, images[imgIndex]);
    },
    'modal-left-arrow': () => {
      imgIndex = modifyIndex(images, imgIndex, 'subtraction');
      loadContent(modalContent, images[imgIndex]);
    },
    'modal-close': () => {
      closeModal(modalContainer, handleClick, handleKeydown);
    },
    'modal-bg': () => {
      closeModal(modalContainer, handleClick, handleKeydown);
    },
  };
  const handleKeydown = (e) => {
    if (typeof keyHandlers[e.key] == 'function') keyHandlers[e.key]();
  };
  const handleClick = (e) => {
    const element = e.target.dataset.element;
    if (typeof clickHandlers[element] == 'function') clickHandlers[element]();
  };

  document.addEventListener('keydown', handleKeydown);
  document.addEventListener('click', handleClick);
};

export default showModal;
