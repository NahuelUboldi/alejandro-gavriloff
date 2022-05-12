import { select } from './utilities.js';
export const openCloseRespMenu = function openOrCloseTheResponsiveMenu() {
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
  toggleBtn.classList.remove('toggle-btn-hidden');
  return;
};

export const showToggleBtn = function showTheToggleBtnForResponsiveMenu() {
  select('.toggle-menu-btn').classList.remove('toggle-btn-hidden');
  return;
};
export const hideToggleBtn = function hideTheToggleBtnForResponsiveMenu() {
  select('.toggle-menu-btn').classList.add('toggle-btn-hidden');
  return;
};
