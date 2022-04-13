const revealNav = function revealNavigationMenuAndLogo(container) {
 const logo = container.querySelector(".navbar-brand img")
 const hamburgerBtn = container.querySelector(".navbar-toggler")
 const navItem = gsap.utils.toArray(".nav-item")
 const decorationBg = container.querySelector(".rect-bg")
 

 const tl = gsap.timeline({
  defaults: {
   duration: 0.7,
   ease: "power4.out"
  }
 })
 
 tl
 .from(logo,{x:"-100%",autoAlpha:0})
 .from(hamburgerBtn,{y:-15,autoAlpha:0},0)
 .from(navItem,{y:-15,autoAlpha:0,stagger:0.05},0.2)
 .from(decorationBg,{y:"-100%",duration:3},0)
}

export default revealNav