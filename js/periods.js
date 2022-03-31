import {
  getPaintings,
  filterPaintingsByPeriod,
  shuffleArray,
} from './utilities.js';
import { showModal, closeModal } from './modal.js';
import { runGsapEtapasAnimation } from './gsap/periods';

//selectors
const periodGalleryCarousel = document.querySelectorAll('.period-gallery');
const modal = document.getElementById('modal');
const firstPeriodGlider = document.querySelector('.first-period-glider');
const secondPeriodGlider = document.querySelector('.second-period-glider');
const thirdPeriodGlider = document.querySelector('.third-period-glider');

//functions
const convertObjectToHtmlString = (arr) => {
  return arr.reduce((acc, paint) => {
    return (
      acc +
      `<img 
    key=${paint.id} 
    src=${paint.img.sm} 
    id="carousel-img" 
    class=${
      paint.period == '1'
        ? 'first-period'
        : paint.period == '2'
        ? 'second-period'
        : paint.period == '3'
        ? 'third-period'
        : ''
    }
    alt="pintura clasica impresionista del pintor argentino ruso Alejandro Gavriloff" />`
    );
  }, '');
};

const loadPictures = (paintingsByPeriod) => {
  const firstPeriodPaintingsShufled = shuffleArray(
    JSON.parse(JSON.stringify(paintingsByPeriod.firstPeriod))
  );
  const secondPeriodPaintingsShufled = shuffleArray(
    JSON.parse(JSON.stringify(paintingsByPeriod.secondPeriod))
  );
  const thirdPeriodPaintingsShufled = shuffleArray(
    JSON.parse(JSON.stringify(paintingsByPeriod.thirdPeriod))
  );
  firstPeriodGlider.innerHTML = convertObjectToHtmlString(
    firstPeriodPaintingsShufled
  );
  secondPeriodGlider.innerHTML = convertObjectToHtmlString(
    secondPeriodPaintingsShufled
  );
  thirdPeriodGlider.innerHTML = convertObjectToHtmlString(
    thirdPeriodPaintingsShufled
  );

  //modal
  const handleClick = (e) => {
    console.log(e.target);
    if (e.target.id === 'carousel-img') {
      if (e.target.classList.contains('first-period'))
        showModal(
          modal,
          firstPeriodPaintingsShufled,
          e.target.attributes.key.value
        );
      if (e.target.classList.contains('second-period'))
        showModal(
          modal,
          secondPeriodPaintingsShufled,
          e.target.attributes.key.value
        );
      if (e.target.classList.contains('third-period'))
        showModal(
          modal,
          thirdPeriodPaintingsShufled,
          e.target.attributes.key.value
        );
    }
  };

  periodGalleryCarousel.forEach((gallery) => {
    gallery.addEventListener('click', handleClick);
  });
  modal.addEventListener('click', (e) => {
    console.log(e.target);
    if (
      e.target.id === 'close-modal-btn' ||
      e.target.classList.value === 'modal-bg'
    ) {
      closeModal();
    }
  });
};

const startGlider = (glider, identificator) => {
  new Glider(glider, {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: `.${identificator}dots`,
    arrows: {
      prev: `.${identificator}glider-prev`,
      next: `.${identificator}glider-next`,
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 'auto',
          slidesToScroll: 'auto',
          itemWidth: 150,
          duration: 0.25,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25,
        },
      },
    ],
  });
};

const main = async () => {
  const paintings = await getPaintings();
  const paintingsByPeriod = filterPaintingsByPeriod(paintings);
  loadPictures(paintingsByPeriod);
  startGlider(firstPeriodGlider, 'fp-');
  startGlider(secondPeriodGlider, 'sp-');
  startGlider(thirdPeriodGlider, 'tp-');
  runGsapEtapasAnimation();
};

window.addEventListener('load', main);
