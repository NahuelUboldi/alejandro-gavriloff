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
  const firstPeriod = paintsArr.filter((paint) =>paint.period === '1');
  const secondPeriod = paintsArr.filter((paint) => paint.period === '2');
  const thirdPeriod = paintsArr.filter((paint) => paint.period === '3');
  const response = {
    firstPeriod : [...firstPeriod],
    secondPeriod : [...secondPeriod],
    thirdPeriod : [...thirdPeriod]
  }
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

export {
  getPaintings,
  filterPaintingsByCategory,
  filterPaintingsByQuality,
  filterPaintingsByTags,
  filterPaintingsByID,
  filterPaintingsByPeriod
};
