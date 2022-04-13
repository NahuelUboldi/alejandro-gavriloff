import resizeBioContainer from "./utils/resizeBioContainer.js";
import initCanvas from "./pages/home/canvas.js"
import initGalleryPreview from "./pages/home/gallerie-preview.js";
import initGallery from "./pages/gallery/index.js";
import initCarousels from "./pages/periods/index.js";
import { revealNav } from "./animations/index.js";


const setCurrentYear = function setTheCurrentYear() {
  return document.getElementById('current-year').innerText = new Date().getFullYear();
}
const init = function initializeTheSiteFunctionality() {
  setCurrentYear()
  resizeBioContainer()
  initCanvas()
  initGalleryPreview()
  initGallery()
  initCarousels()
}
window.addEventListener("resize",() => {
  resizeBioContainer()
  initCanvas()
  initGalleryPreview()
})
window.addEventListener('load', () =>  init());


barba.init({
  transitions: [
    {
      once({next}){
        revealNav(next.container)
      }
    }
  ]
});