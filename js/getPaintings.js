//fetch api function
const getPaintings = async () => {
  try {
    const response = await fetch('cuadros.json');
    const data = await response.json();
    return data.cuadros;
  } catch (err) {
    console.log('hubo un error', err);
  }
}
export default getPaintings