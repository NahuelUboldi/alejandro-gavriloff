import {
  getPaintings,
  filterPaintingsByQuality,
  filterPaintingsByTags,
  filterPaintingsByID,
  excludePaintings,
  getPage,
} from '../../utils/utilities.js';

import showModal from '../../components/modal.js';

const initCanvas = function initializeTheCanvasSection() {
  const page = getPage();
  if (page !== 'index.html') return;

  const canvas = document.querySelector('#canvas-art');
  const context = canvas.getContext('2d');
  const btnClear = document.getElementById('btn-clear-canvas');
  const paintingCompletedSpan = document.querySelector('.paintings-completed');
  const canvasImgContainer = document.querySelector('.canvas-cont');
  const finishedPaintingsContainer =
    document.getElementById('pictures-painted');

  let paintCounter = 0;
  let lastPictureId;
  const finishedPaintings = [];
  const resizeCanvas = () => {
    const parentHeigth = canvas.parentElement.getBoundingClientRect().height;
    const parentWidth = canvas.parentElement.getBoundingClientRect().width;

    canvas.width = parentWidth;
    canvas.height = parentHeigth;
  };

  const addModalFunctionality = () => {
    finishedPaintingsContainer.addEventListener('click', (e) => {
      showModal(finishedPaintings, e.target.dataset.id);
    });
  };

  const printFinishedPaintings = (paintings, finishedPaintings) => {
    const htmlOutput = finishedPaintings.reduce((acc, p) => {
      acc =
        `<img src=${p.img.sm} class="finished-paintings" data-id=${p.id} />` +
        acc;
      return acc;
    }, '');
    finishedPaintingsContainer.innerHTML = htmlOutput;
  };

  const addLastFinishedPainting = async () => {
    const paintings = await getPaintings();
    const paint = filterPaintingsByID(paintings, lastPictureId);
    finishedPaintings.push(...paint);
    printFinishedPaintings(paintings, finishedPaintings);
  };

  const getRandomPainting = async () => {
    const paintings = await getPaintings();
    let filtered = filterPaintingsByQuality(paintings);
    filtered = filterPaintingsByTags(filtered, 'religion', false);
    const finishedPaintingsIDs = finishedPaintings.map((p) => p.id);
    filtered = excludePaintings(filtered, finishedPaintingsIDs);
    let randomNumber = Math.floor(Math.random() * filtered.length);
    canvasImgContainer.style.backgroundImage = `url("${filtered[randomNumber].img.lg}")`;
    lastPictureId = filtered[randomNumber].id;
  };

  const clearCanvas = async () => {
    await addLastFinishedPainting();
    context.clearRect(0, 0, canvas.width, canvas.height);
    paintCounter += 1;
    paintingCompletedSpan.innerHTML = paintCounter;
    await getRandomPainting();
  };

  const createCanvas = async () => {
    await getRandomPainting();
    let painting = false;
    resizeCanvas();
    function startDrawingApp() {
      canvas.style.cursor = 'url("../img/icons/pincel-icon.png"), auto';

      function startPosition(e) {
        painting = true;
        canvas.style.cursor =
          'url("../img/icons/pincel-pressed-icon.png"), auto';
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
  createCanvas();

  addModalFunctionality();
};
export default initCanvas;
