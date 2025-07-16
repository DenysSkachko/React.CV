import React, { useEffect, useRef } from 'react';
import SocialLinks from './SocialLinks';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 200 },
      {
        y: 0,
        duration: 1,
        ease: 'bounce.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
          toggleActions: 'play reset play reset',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={footerRef} className="z-20 w-full bg-[var(--color-dark)] py-16">
      <div className="flex flex-col justify-center items-center h-full gap-5">
        <a
          href="#"
          className="px-20 py-3 bg-[var(--color-accent)] rounded font-extrabold uppercase shadow-2xl cursor-pointer select-none"
        >
          Contact Me
        </a>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
