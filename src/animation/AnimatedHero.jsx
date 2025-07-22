
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

    const enterTimeline = gsap.timeline();

    enterTimeline
      .from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
      })
      .from(
        socialsRef.current,
        {
          y: 40,
          opacity: 0,
          stagger: 0.08,
          duration: 0.9,
          ease: 'back.out(1.8)',
        },
        '-=0.6'
      );
  }, heroRef);

  return () => ctx.revert();
};
