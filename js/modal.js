const closeModal = () => {
  modal.classList.add('closed');
};
const loadModalContent = (modalContent, img) => {
  modalContent.innerHTML = `
    <img src='${img}' alt='' />
    `;
};
const showModal = (modal, arr, id) => {
  modal.classList.remove('closed');
  const modalContent = modal.querySelector('#modal-content');
  let index = arr.findIndex((obj) => obj.id === id);
  loadModalContent(modalContent, arr[index].img.lg);

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
    loadModalContent(modalContent, arr[index].img.lg);
  });
};

export { showModal, closeModal };
