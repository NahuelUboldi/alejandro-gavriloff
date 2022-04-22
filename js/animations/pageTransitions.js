import { select } from "../utils/utilities.js";
export const pageTransitionLeave = function pageTransitionLeavingTheActualPage(container) {
 console.log("leave"); 

 const loader = select(".loader")

  const tl = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: 'power1.inOut',
    },
  });
  tl
   .set(loader,{yPercent:-100})
   .to(loader, { yPercent: 0 })

  return tl;
}
export const pageTransitionEnter = function pageTransitionLEnteringTheNewPage(container) {
 console.log("enter");
 const loader = select(".loader")
 const pageContent = select('.page-content');

  const tl2 = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: "power1.inOut",
    },
    onComplete: () => init(),
  });
  tl.to(loader, { yPercent: 10,autoAlpha:0 })
    // .from(pageContent, { y: 150 });
  return tl2;
 
}