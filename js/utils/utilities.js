//fetch api function
const getPaintings = async () => {
  if (localStorage['paintings']) {
    return JSON.parse(localStorage.getItem('paintings'));
  }
  try {
    const response = await fetch('cuadros.json');
    const data = await response.json();
    localStorage.setItem('paintings', JSON.stringify(data.cuadros));
    return data.cuadros;
  } catch (err) {
    console.log('hubo un error', err);
  }
};

//filter functions
const filterPaintingsByCategory = (paintsArr, param) => {
  if (param == 'todos') {
    return paintsArr;
  }
  if (localStorage[param]) {
    return JSON.parse(localStorage.getItem(param));
  }
  const response = paintsArr.filter((paint) => paint.category == param);
  localStorage.setItem(param, JSON.stringify(response));
  return response;
};
const filterPaintingsByQuality = (paintsArr) => {
  if (localStorage['buena']) {
    return JSON.parse(localStorage.getItem('buena'));
  }
  const response = paintsArr.filter((paint) => paint.quality === 'buena');
  localStorage.setItem('buena', JSON.stringify(response));
  return response;
};
const filterPaintingsByPeriod = (paintsArr) => {
  if (localStorage['period']) {
    return JSON.parse(localStorage.getItem('period'));
  }
  const firstPeriod = paintsArr.filter((paint) => paint.period === '1');
  const secondPeriod = paintsArr.filter((paint) => paint.period === '2');
  const thirdPeriod = paintsArr.filter((paint) => paint.period === '3');
  const response = {
    firstPeriod: [...firstPeriod],
    secondPeriod: [...secondPeriod],
    thirdPeriod: [...thirdPeriod],
  };
  localStorage.setItem('period', JSON.stringify(response));
  return response;
};
const filterPaintingsByTags = (paintsArr, param, bool) => {
  if (bool) {
    return paintsArr.filter((paint) => paint.tags.includes('religion'));
  }
  return paintsArr.filter((paint) => !paint.tags.includes('religion'));
};
const filterPaintingsByID = (paintsArr, id) => {
  return paintsArr.filter((paint) => paint.id === id);
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
//https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/#:~:text=Use%20the%20getBoundingClientRect()%20method%20to%20get%20the%20size%20of,in%20the%20viewport%20or%20not.
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const getPage = function getTheActualPageName() {
  let path = window.location.pathname;
  if (path === '/') path = '/index.html';
  const page = path.split('/').pop();
  return page;
};
const select = (element) => document.querySelector(element);
const selectAll = (element) => gsap.utils.toArray(element);
const setCurrentYear = function setTheCurrentYear() {
  return (document.getElementById('current-year').innerText =
    new Date().getFullYear());
};

export {
  getPaintings,
  filterPaintingsByCategory,
  filterPaintingsByQuality,
  filterPaintingsByTags,
  filterPaintingsByID,
  filterPaintingsByPeriod,
  shuffleArray,
  isInViewport,
  getPage,
  select,
  selectAll,
  setCurrentYear,
};
