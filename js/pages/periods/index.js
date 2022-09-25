import {
  getPaintings,
  filterPaintingsByPeriod,
  shuffleArray,
  getPage,
} from '../../utils/utilities.js';
import showModal from '../../components/modal.js';

const initCarousels = function initializeThePeriodsPageGliderCarousel() {
  const page = getPage();
  if (page !== 'artistic-periods.html') return;

  //selectors
  const periodGalleryCarousel = document.querySelectorAll('.period-gallery');
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
      data-imgid=${paint.id} 
      src=${paint.img.sm} 
      id="carousel-img" 
      data-imgperiod=${
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

    const paintingsCollections = {
      'first-period': firstPeriodPaintingsShufled.reverse(),
      'second-period': secondPeriodPaintingsShufled.reverse(),
      'third-period': thirdPeriodPaintingsShufled.reverse(),
    };
    periodGalleryCarousel.forEach((gallery) => {
      gallery.addEventListener('click', (e) => {
        if (e.target.id !== 'carousel-img') return;
        const imgId = e.target.dataset.imgid;
        const paintings = paintingsCollections[e.target.dataset.imgperiod];
        showModal(paintings, imgId);
      });
    });
  };

  const startGlider = (glider, identificator) => {
    new Glider(glider, {
      // Mobile-first defaults
      slidesToShow: 1,
      slidesToScroll: 1,
      scrollLock: true,
      // dots: `.${identificator}dots`,
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
  };
  main();
};
// window.addEventListener('load', main);
export default initCarousels;
