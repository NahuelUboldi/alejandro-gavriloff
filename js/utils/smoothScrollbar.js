const initSmoothScrollbar =
  function initializeTheSmoothScrollbarFunctionality() {
    console.log('smooth scrollbar init');

    let bodyScrollBar = Scrollbar.init(document.querySelector('#viewport'));
    bodyScrollBar.track.xAxis.element.remove();

    console.log(document.body);
    // keep scrolltrigger in sync with smooth scrollbar
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value; // setter
        }
        return bodyScrollBar.scrollTop; // getter
      },
    });

    // when the smooth scroller updates, tell ScrollTrigger to update() too:
    bodyScrollBar.addListener(ScrollTrigger.update);
  };
export default initSmoothScrollbar;
