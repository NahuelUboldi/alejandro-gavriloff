//fetch api function
const getPaintings = async () => {
  try {
    const response = await fetch('cuadros.json');
    const data = await response.json();
    return data.cuadros;
  } catch (err) {
    console.log('hubo un error', err);
  }
};
//filter functions
const filterPaintingsByCategory = (paintsArr, param) => {
  if (param == 'all') {
    return paintsArr;
  }
  return paintsArr.filter((paint) => paint.category == param);
};
const filterPaintingsByQuality = (paintsArr) => {
  return paintsArr.filter((paint) => paint.calidad === 'buena');
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
};
