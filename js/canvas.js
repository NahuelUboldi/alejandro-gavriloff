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
