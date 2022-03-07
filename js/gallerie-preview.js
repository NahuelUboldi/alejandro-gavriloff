// **********************************
// **********GALLERY PREVIEW*********
// **********************************
//selectors
const imagesContainer = document.getElementById('images-container');
const mostrarCuadrosRandomBtn = document.getElementById(
  'mostrar-cuadros-random'
);
const modal = document.getElementById('modal');
const modalCloseBtn = document.querySelector('.close-tag');
const modalContent = document.getElementById('modal-content');

const closeModal = () => {
  modal.classList.add('closed');
};
const showModal = async (e) => {
  if (e.target.classList.value === 'galleriePreviewImg') {
    modal.classList.remove('closed');
    const cuadros = await getPaintings();
    const filtered = cuadros.filter((cuadro) => {
      return cuadro.id === e.target.id;
    });
    console.log(filtered[0].img.lg);
    modalContent.innerHTML = `
    <img src='${filtered[0].img.lg}' alt='' />
    `;
  }
  if (e.target.classList.value === 'modal-bg') {
    closeModal();
  }
};

//variables
const imagesRequiredWidth = 400;

//fetch api function
async function getPaintings() {
  try {
    const response = await fetch('cuadros.json');
    const data = await response.json();
    return data.cuadros;
  } catch (err) {
    console.log('hubo un error', err);
  }
}

//functions
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
  const cuadros = await getPaintings();
  const filtered = cuadros.filter((cuadro) => {
    return cuadro.calidad === 'buena' && !cuadro.tags.includes('religion');
  });

  let imagesArr = [];
  for (let i = 0; i < imagesNeeded; i++) {
    const randomNum = Math.floor(Math.random() * filtered.length);
    const individualImage = `
     
     <img class="galleriePreviewImg" id="${filtered[randomNum].id}" src="${filtered[randomNum].img.md}"  alt="Cuadro del pintor argentino Alejandro Gavriloff" />
     
     `;
    imagesArr.push(individualImage);
  }

  let imagesToShow = imagesArr.join('');
  imagesContainer.innerHTML = imagesToShow;
}
//listeners
window.addEventListener('load', showGalleryPreview);
window.addEventListener('resize', showGalleryPreview);
mostrarCuadrosRandomBtn.addEventListener('click', showGalleryPreview);
window.addEventListener('click', showModal);
modalCloseBtn.addEventListener('click', closeModal);
