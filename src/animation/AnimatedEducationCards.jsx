import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateEducationCard = (el) => {
  if (!el) return;

  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: 100,
      skewY: 10,
      scale: 2,
    },
    {
      opacity: 1,
      y: 0,
      skewY: 0,
      scale: 1,
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play reset play reset',
        invalidateOnRefresh: true,
        refreshPriority: 1,
      },
    }
  );
};
