const duration = 2.5;
const opacity = 0;
const ease = "power3";
const gsapEffects = [
  {
    name: 'efOpacity',
    defaults: {
      ease,
      duration,
      opacity,
      
      stagger: false,
      delay: 0,
    },
    extendTimeline: true,
    effect: (targets, config) => {
      return gsap.from(targets, {
        ease: config.ease,
        duration: config.duration,
        
        stagger: config.stagger,
        opacity: config.opacity,
        delay: config.delay,
      });
    },
  },
  {
    name: 'efScaleDown',
    defaults: {
      ease,
      duration,
      opacity,
      
      scale: 1.1,
      stagger: false,
      delay: 0,
    },
    extendTimeline: true,
    effect: (targets, config) => {
      return gsap.from(targets, {
        ease: config.ease,
        duration: config.duration,
        
        stagger: config.stagger,
        opacity: config.opacity,
        delay: config.delay,
        scale: config.scale,
      });
    },
  },
  {
    name: 'efAppearTop',
    defaults: {
      ease,
      duration,
      opacity,
      
      y: -20,
      stagger: false,
      delay: 0,
    },
    extendTimeline: true,
    effect: (targets, config) => {
      return gsap.from(targets, {
        ease: config.ease,
        duration: config.duration,
        
        stagger: config.stagger,
        opacity: config.opacity,
        delay: config.delay,
        y: config.y,
      });
    },
  },
  {
    name: 'efAppearLeft',
    defaults: {
      ease,
      duration,
      opacity,
      
      x: -20,
      stagger: false,
      delay: 0,
    },
    extendTimeline: true,
    effect: (targets, config) => {
      return gsap.from(targets, {
        ease: config.ease,
        duration: config.duration,
        
        stagger: config.stagger,
        opacity: config.opacity,
        delay: config.delay,
        x: config.x,
      });
    },
  },
  {
    name: 'efAppearRight',
    defaults: {
      ease,
      duration,
      opacity,
      
      x: 20,
      stagger: false,
      delay: 0,
    },
    extendTimeline: true,
    effect: (targets, config) => {
      return gsap.from(targets, {
        ease: config.ease,
        duration: config.duration,
        
        stagger: config.stagger,
        opacity: config.opacity,
        delay: config.delay,
        x: config.x,
      });
    },
  },
  {
    name: 'efAppearTopRight',
    defaults: {
      ease,
      duration,
      opacity,
      
      x: 10,
      y: -10,
      stagger: false,
      delay: 0,
    },
    extendTimeline: true,
    effect: (targets, config) => {
      return gsap.from(targets, {
        ease: config.ease,
        duration: config.duration,
        
        stagger: config.stagger,
        opacity: config.opacity,
        delay: config.delay,
        x: config.x,
        y: config.y,
      });
    },
  },
  {
    name: 'efAppearBottomLeft',
    defaults: {
      ease,
      duration,
      opacity,
      
      x: -50,
      y: 50,
      stagger: false,
      delay: 0,
    },
    extendTimeline: true,
    effect: (targets, config) => {
      return gsap.from(targets, {
        ease: config.ease,
        duration: config.duration,
        
        stagger: config.stagger,
        opacity: config.opacity,
        delay: config.delay,
        x: config.x,
        y: config.y,
      });
    },
  },
  {
    name: 'efAppearBottomRight',
    defaults: {
      ease,
      duration,
      opacity,
      
      x: 50,
      y: 20,
      stagger: false,
      delay: 0,
    },
    extendTimeline: true,
    effect: (targets, config) => {
      return gsap.from(targets, {
        ease: config.ease,
        duration: config.duration,
        
        stagger: config.stagger,
        opacity: config.opacity,
        delay: config.delay,
        x: config.x,
        y: config.y,
      });
    },
  },
    {
    name: 'efBlur',
    defaults: {
      ease,
      duration,
      opacity,
      filter: "blur(10px)",

      stagger: false,
      delay: 0,
    },
    extendTimeline: true,
    effect: (targets, config) => {
      return gsap.from(targets, {
        ease: config.ease,
        duration: config.duration,
        filter: config.filter,
        stagger: config.stagger,
        opacity: config.opacity,
        delay: config.delay,
      });
    },
  },
];
export default gsapEffects;
