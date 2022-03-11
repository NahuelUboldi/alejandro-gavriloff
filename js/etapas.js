import {getPaintings,filterPaintingsByPeriod} from "./utilities.js"

const main = async () => {
const paintings = await getPaintings()
const paintingsByPeriod = filterPaintingsByPeriod(paintings)
console.log(paintings,paintingsByPeriod);
}

window.addEventListener("load",main)