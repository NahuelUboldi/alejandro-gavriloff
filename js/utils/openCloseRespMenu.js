import { select } from './utilities.js';
const openCloseRespMenu = function openOrCloseTheResponsiveMenu() {
  const responsiveMenu = select('.responsive-menu');
  const toggleBtn = select('.toggle-menu-btn');
  const isResponsiveMenuOpen = responsiveMenu.classList.contains('is-open');
  if (isResponsiveMenuOpen) {
    responsiveMenu.classList.remove('is-open');
    toggleBtn.classList.remove('toggle-btn-equis');
    return;
  }
  responsiveMenu.classList.add('is-open');
  toggleBtn.classList.add('toggle-btn-equis');
  return;
};
export default openCloseRespMenu;
