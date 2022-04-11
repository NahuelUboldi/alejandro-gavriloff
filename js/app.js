import handleResize from "./utils/handleResize.js";
import initCanvas from "./sections/home/canvas.js"
import initGalleryPreview from "./sections/home/gallerie-preview.js";

const getPage = function getTheActualPageName() {
  const path = window.location.pathname;
  const page = path.split("/").pop();
  return page
}
const init = function initializeTheSiteFunctionality() {
  document.getElementById('current-year').innerText = new Date().getFullYear();
  const page = getPage()
  handleResize(page)
  initCanvas(page)
  initGalleryPreview(page)
}
window.addEventListener("resize",() => {
  const page = getPage()
  handleResize(page)
  initCanvas(page)
  initGalleryPreview(page)

})
window.addEventListener('load', () =>  init());