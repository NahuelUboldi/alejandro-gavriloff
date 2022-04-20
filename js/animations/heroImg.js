import { select, selectAll } from '../utils/utilities.js';

const handleMousemove = function handleMouseMovement(e) {
 const { offsetX, offsetY, target } = e;
  const { clientWidth, clientHeight } = target;

  const xPos = offsetX / clientWidth - 0.5;
  const yPos = offsetY / clientHeight - 0.5;
  console.log(offsetX,clientWidth,offsetY,clientHeight);

}



const initHeroAnim = function initializeTheHeroImagesAnimation() { console.log("hola");
 // const heroPaintingsContainer = select(".contenedor-cuadros")
 select("#hero").addEventListener("mousemove",handleMousemove)
}

export default initHeroAnim