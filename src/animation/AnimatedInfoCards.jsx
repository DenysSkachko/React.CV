import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateInfoCards = (cardRefs) => {
  cardRefs.forEach((outerCard, i) => {
    if (!outerCard) return;
    const inner = outerCard.querySelector('[data-inner]');
    if (!inner) return;

    gsap.fromTo(
      inner,
      {
        opacity: 0,
        y: 80,
        rotateX: 45,
        transformOrigin: 'center bottom',
        perspective: 600,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.4,
        ease: 'bounce.out',
        delay: i * 0.12,
        scrollTrigger: {
          trigger: outerCard,
          start: 'top 90%',
          toggleActions: 'play reset play reset',
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      }
    );
  });
};
