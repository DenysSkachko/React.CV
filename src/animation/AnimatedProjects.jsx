import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateProjects = (titleRefs, descRefs) => {
  titleRefs.current.forEach((el, index) => {
    if (!el) return;
    if (el._gsapScrollTrigger) return;

    gsap.fromTo(
      el,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          end: 'bottom 20%',
          scrub: true,
          id: `title-${index}`,
        },
      }
    );
  });

  descRefs.current.forEach((el, index) => {
    if (!el) return;
    if (el._gsapScrollTrigger) return;

    gsap.fromTo(
      el,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          end: 'bottom 20%',
          scrub: true,
          id: `desc-${index}`,
        },
      }
    );
  });
};
