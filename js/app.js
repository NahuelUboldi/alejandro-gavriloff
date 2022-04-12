import handleResize from "./utils/handleResize.js";
import initCanvas from "./pages/home/canvas.js"
import initGalleryPreview from "./pages/home/gallerie-preview.js";
import initGallery from "./pages/gallery/index.js";
import initCarousels from "./pages/periods/index.js";

const getPage = function getTheActualPageName() {
  let path = window.location.pathname;
  if (path === "/") path = "/index.html"
  const page = path.split("/").pop();
  return page
}
const setCurrentYear = function setTheCurrentYear() {
  return document.getElementById('current-year').innerText = new Date().getFullYear();
}
const init = function initializeTheSiteFunctionality() {
  const page = getPage()
  setCurrentYear()
  handleResize(page)
  initCanvas(page)
  initGalleryPreview(page)
  initGallery(page)
  initCarousels(page)
}
window.addEventListener("resize",() => {
  const page = getPage()
  handleResize(page)
  initCanvas(page)
  initGalleryPreview(page)
})
window.addEventListener('load', () =>  init());