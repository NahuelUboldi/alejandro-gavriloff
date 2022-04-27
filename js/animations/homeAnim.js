
const createAppearTween = function createTheTweenToMakeAppearElements(element) {
 return gsap.from(element,{scrollTrigger:element,y:-15,duration:0.8})
}
const initHomePageAnim = function initializeTheHomePageGsapAnimations() {
 const tlMain = gsap.timeline()

 const tlBio = gsap.timeline()
 tlBio.add(createAppearTween("#bio .display-3"))
  .add(createAppearTween("#bio p"))
  .add(createAppearTween("#bio button"))
  .add(createAppearTween("#bio .imagen-3d"));

 const tlCanvas = gsap.timeline()
 tlCanvas.add(createAppearTween("#canvas .canvas-shadow"))
  .add(createAppearTween("#canvas p"))
  .add(createAppearTween("#canvas button"));
 
 const tlContact = gsap.timeline()
 tlContact.add(createAppearTween("#contact-form .display-4"))
  .add(createAppearTween("#contact-form form"))

 tlMain.add(tlBio)
  .add(tlCanvas)
  .add(tlContact)

 return tlMain
}

export default initHomePageAnim