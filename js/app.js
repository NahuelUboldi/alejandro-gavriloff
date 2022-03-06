// **********************************
// **********GENERAL******************
// **********************************
// current year
document.getElementById('current-year').innerText = new Date().getFullYear();

// **********************************
// **********CANVAS******************
// **********************************
//selectors
const canvas = document.querySelector('#canvas-art');
const context = canvas.getContext('2d');
const btnClear = document.getElementById('btn-clear-canvas');
const paintingCompletedSpan = document.querySelector('.paintings-completed');
//variables
let painting = false;
let paintCounter = 0;
//functions
const resizeCanvas = () => {
  const parentHeigth = canvas.parentElement.getBoundingClientRect().height;
  const parentWidth = canvas.parentElement.getBoundingClientRect().width;

  canvas.width = parentWidth;
  canvas.height = parentHeigth;
};
const clearCanvas = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  paintCounter += 1;
  paintingCompletedSpan.innerHTML = paintCounter;
};

window.addEventListener('load', () => {
  let painting = false;
  resizeCanvas();
  function startDrawingApp() {
    canvas.style.cursor = 'url("../img/icons/pincel-icon.png"), auto';

    function startPosition(e) {
      painting = true;
      canvas.style.cursor = 'url("../img/icons/pincel-pressed-icon.png"), auto';
      paint(e);
    }

    function finishedPosition() {
      painting = false;
      canvas.style.cursor = 'url("../img/icons/pincel-icon.png"), auto';
      context.beginPath();
    }

    function paint(e) {
      const canvasCoordX = canvas.getBoundingClientRect().x;
      const canvasCoordY = canvas.getBoundingClientRect().y;
      const mousePositionX = Math.ceil(e.clientX - canvasCoordX);
      const mousePositionY = Math.ceil(e.clientY - canvasCoordY);

      if (!painting) return;

      context.lineWidth = 150;
      context.lineCap = 'round';
      context.lineTo(mousePositionX, mousePositionY);
      context.stroke();
      context.beginPath();
      context.moveTo(mousePositionX, mousePositionY);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', paint);
    canvas.addEventListener('mouseleave', finishedPosition);
  }

  canvas.addEventListener('mouseenter', startDrawingApp);
});
//listeners
window.addEventListener('resize', resizeCanvas);
btnClear.addEventListener('click', clearCanvas);

// **********************************
// **********GALLERY PREVIEW*********
// **********************************
//selectors
const imagesContainer = document.getElementById('images-container');
const mostrarCuadrosRandomBtn = document.getElementById(
  'mostrar-cuadros-random'
);

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
    return cuadro.calidad === 'buena';
  });

  let imagesArr = [];
  for (let i = 0; i < imagesNeeded; i++) {
    const randomNum = Math.floor(Math.random() * filtered.length);
    const individualImage = `

    <img src="${filtered[randomNum].img.md}" alt="Cuadro del pintor argentino Alejandro Gavriloff" />

    `;
    imagesArr.push(individualImage);
  }

  let imagesToShow = imagesArr.join('');
  imagesContainer.innerHTML = imagesToShow;
  console.log(imagesToShow);
}
//listeners
window.addEventListener('load', showGalleryPreview);
window.addEventListener('resize', showGalleryPreview);
mostrarCuadrosRandomBtn.addEventListener('click', showGalleryPreview);
