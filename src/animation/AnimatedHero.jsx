import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateHeroSection = (
  heroRef,
  titleRef,
  socialsRef
) => {
  if (!heroRef.current) return;

  const ctx = gsap.context(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: false,
      },
    });

    timeline.to(
      titleRef.current,
      {
        y: -300,
        ease: 'sine.out',
      },
      0.1
    );

    timeline.to(
      socialsRef.current,
      {
        y: 400,
        scale: 1.5,
        ease: 'sine.out',
      },
      0.3
    );
  }, heroRef);

  return () => ctx.revert();
};
