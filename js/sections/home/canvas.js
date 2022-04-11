import {
  getPaintings,
  filterPaintingsByQuality,
  filterPaintingsByTags,
  filterPaintingsByID,
} from '../../utils/utilities.js';

const initCanvas = function initializeTheCanvasSection(page) {
if(page !== "index.html");
  //selectors
  const canvas = document.querySelector('#canvas-art');
  const context = canvas.getContext('2d');
  const btnClear = document.getElementById('btn-clear-canvas');
  const paintingCompletedSpan = document.querySelector('.paintings-completed');
  const canvasImgContainer = document.querySelector('.canvas-cont');
  const picturesPaintedContainer = document.getElementById('pictures-painted');

  //variables
  let paintCounter = 0;
  //functions
  const resizeCanvas = () => {
    const parentHeigth = canvas.parentElement.getBoundingClientRect().height;
    const parentWidth = canvas.parentElement.getBoundingClientRect().width;

    canvas.width = parentWidth;
    canvas.height = parentHeigth;
  };

  let lastPictureId;
  const addLastPicturePainted = async () => {
    const paintings = await getPaintings();
    const paint = filterPaintingsByID(paintings, lastPictureId);

    const img = document.createElement('img');
    img.src = `${paint[0].img.sm}`;
    img.classList.add('painting-helped');
    img.classList.add('modal-img');
    img.setAttribute('id', paint[0].id);

    picturesPaintedContainer.prepend(img);
  };

  const clearCanvas = async () => {
    await addLastPicturePainted();
    context.clearRect(0, 0, canvas.width, canvas.height);
    paintCounter += 1;
    paintingCompletedSpan.innerHTML = paintCounter;
    await getRandomPicture();
  };

  const getRandomPicture = async () => {
    const cuadros = await getPaintings();
    let filtered = filterPaintingsByQuality(cuadros);
    filtered = filterPaintingsByTags(filtered, 'religion', false);
    let randomNumber = Math.floor(Math.random() * filtered.length);
    canvasImgContainer.style.backgroundImage = `url("${filtered[randomNumber].img.lg}")`;
    lastPictureId = filtered[randomNumber].id;
  };
  const createCanvas = async () => {
    await getRandomPicture();
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
    btnClear.addEventListener('click', clearCanvas);
  };
 window.addEventListener('resize', resizeCanvas);
 createCanvas()
}
export default initCanvas
//listeners
// window.addEventListener('load', createCanvas);
// 
