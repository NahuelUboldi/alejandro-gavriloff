const duration = 3;
const opacity = 0;
const scrollTrigger = false;
const gsapEffects = [
  {
    name: 'efOpacity',
    defaults: {
      duration,
      opacity,
      scrollTrigger: {},
      stagger: false,
      delay: 0,
    },
    extendTimeline: true,
    effect: (targets, config) => {
      return gsap.from(targets, {
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
      duration,
      opacity,
      scale: 1.2,
      stagger: false,
      delay: 0,
    },
    extendTimeline: true,
    effect: (targets, config) => {
      return gsap.from(targets, {
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
      duration,
      opacity,
      y: -20,
      stagger: false,
      delay: 0,
    },
    extendTimeline: true,
    effect: (targets, config) => {
      return gsap.from(targets, {
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
      duration,
      opacity,
      x: -20,
      stagger: false,
      delay: 0,
    },
    extendTimeline: true,
    effect: (targets, config) => {
      return gsap.from(targets, {
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
      duration,
      opacity,
      x: 20,
      stagger: false,
      delay: 0,
    },
    extendTimeline: true,
    effect: (targets, config) => {
      return gsap.from(targets, {
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
        duration: config.duration,
        stagger: config.stagger,
        opacity: config.opacity,
        delay: config.delay,
        x: config.x,
        y: config.y,
      });
    },
  },
];
export default gsapEffects;
