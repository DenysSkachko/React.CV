import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedHeadline = ({ text, className = '' }) => {
  const headlineRef = useRef(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;

    const letters = text.split('');
    el.innerHTML = '';

    letters.forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      el.appendChild(span);
    });

    const spans = el.querySelectorAll('span');

    gsap.set(spans, { opacity: 0, y: 180, rotationX: -90, scale: 2.3 });

    gsap.to(spans, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      scale: 1,
      ease: 'power2.out',
      duration: 0.8,
      stagger: 0.05,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play reset play reset',
      },
    });
  }, [text]);

  return (
    <h2
      ref={headlineRef}
      className={`text-[3rem] sm:text-[5rem] font-extrabold tracking-tight uppercase leading-tight text-center cursor-default select-none ${className}`}
    />
  );
};

export default AnimatedHeadline;
