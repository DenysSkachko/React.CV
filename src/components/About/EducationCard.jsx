import React, { useState, useEffect, useRef } from 'react';
import { BookOpen } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EducationCard = ({ title, index }) => {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const el = cardRef.current;

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

  }, []);

  const toggleFlip = (e) => {
    if (
      e.type === 'click' ||
      (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' '))
    ) {
      e.preventDefault();
      setFlipped((prev) => !prev);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`edu-card visible relative w-full max-w-[460px] h-[280px] rounded-2xl shadow-2xl cursor-pointer transition-all duration-300 ${
        flipped ? 'flipped' : ''
      }`}
      tabIndex={0}
      onClick={toggleFlip}
      onKeyDown={toggleFlip}
      role="button"
      aria-pressed={flipped}
      aria-label={`Education card: ${title}`}
      style={{ perspective: 1000 }}
    >
      <div
        className="flip-inner relative w-full h-full rounded-3xl "
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s ease-in-out',
          transform: flipped ? 'rotateY(180deg)' : 'none',
        }}
      >
        <div className="hover:bg-[#372e5f] flip-front absolute w-full h-full backface-hidden rounded-3xl flex flex-col justify-center items-center p-6 text-center bg-[var(--color-dark)]">
          <BookOpen className="text-[var(--color-alt)] w-10 h-10 mb-3" />
          <h4 className="text-[var(--color-light)] font-extrabold text-2xl mb-2">
            {title}
          </h4>
          <p className="text-[#ccc] text-base">Click to flip</p>
        </div>
        <div
          className="flip-back absolute w-full h-full backface-hidden rounded-3xl p-6 text-[var(--color-light)] flex flex-col justify-center bg-[var(--color-dark)]"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h4 className="font-extrabold sm:text-xl mb-3">
            SIMON KUZNETS KHARKIV NATIONAL UNIVERSITY OF ECONOMICS
          </h4>
          <p className="mb-1 text-sm">
            <span className="font-semibold">Faculty:</span> Management and
            Marketing
          </p>
          <p className="mb-1 text-sm">
            <span className="font-semibold">Major:</span> Management of
            Organization and Administration
          </p>
          <p className="mb-1 text-sm">
            <span className="font-semibold">Mode:</span> Full-time
          </p>
          <p className="text-sm">
            <span className="font-semibold">Years:</span>{' '}
            {index === 0 ? '2017–2021' : '2021–2023'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
