import React, { useState, useEffect, useRef } from 'react';
import { BookOpen } from 'lucide-react';
import { animateEducationCard } from '../../animation/AnimatedEducationCards';

const EducationCard = ({ title, index }) => {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    animateEducationCard(cardRef.current);
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
          <h3 className="text-[var(--color-light)] font-extrabold text-2xl mb-2">
            {title}
          </h3>
          <p className="text-[#ccc] text-base">Click to flip</p>
        </div>
        <div
          className="flip-back absolute w-full h-full backface-hidden rounded-3xl p-6 text-[var(--color-light)] flex flex-col justify-center bg-[var(--color-dark)]"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className="font-extrabold sm:text-xl mb-3">
            SIMON KUZNETS KHARKIV NATIONAL UNIVERSITY OF ECONOMICS
          </h3>
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
