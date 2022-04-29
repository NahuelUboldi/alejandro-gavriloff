const handleWidthChange = function handleWindowWidthChange(mq) {
  console.log(mq.matches);
  if (mq.matches) {
    // initHoverReveal();
    console.log('mq matches');
  } else {
    //remove event listener for each section
    // sections.forEach((section) => {
    //   section.removeEventListener('mouseenter', createHoverReveal);
    //   section.removeEventListener('mouseleave', createHoverReveal);

    //   const { mask, imageBlock, text, textCopy, textMask, textP, image } =
    //     section;
    //   resetProps([mask, imageBlock, text, textCopy, textMask, textP, image]);
    // });
    console.log('mq not matches');
  }
};

export default handleWidthChange;
