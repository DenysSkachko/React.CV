import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateSkillTabs = (cardRefs, currentSkillLength) => {
  if (typeof window === 'undefined') return;
  if (window.innerWidth < 768) return;

  cardRefs.current = cardRefs.current.slice(0, currentSkillLength);

  cardRefs.current.forEach((card, i) => {
    if (!card) return;

    gsap.fromTo(
      card,
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
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play reset play reset',
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      }
    );
  });
};
