import handleResize from "./utils/handleResize.js";
import initCanvas from "./sections/home/canvas.js"
import initGalleryPreview from "./sections/home/gallerie-preview.js";
import initGallery from "./sections/gallery/gallery.js";
import initCarousels from "./sections/periods/periods.js";

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
  setCurrentYear()
  const page = getPage()
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