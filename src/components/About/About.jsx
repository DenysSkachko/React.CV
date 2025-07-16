import React from 'react';
import InfoCard from './InfoCard';
import EducationCard from './EducationCard';
import AnimatedHeadline from '../../animation/AnimatedHeadline';

const About = () => {
  return (
    <section
      className="z-10 relative  py-10 sm:py-20 bg-[var(--color-accent)] text-white select-none shadow-xl min-h-screen p-4 overflow-hidden"
      aria-label="About Me Section"
    >
      <AnimatedHeadline text="About Me" className="mb-10 sm:mb-20" />

      <InfoCard />

      <div className="flex flex-wrap justify-center gap-8 max-w-[1100px] mx-auto mt-20">
        {['Bachelor’s Diploma', 'Master’s Diploma'].map((title, i) => (
          <EducationCard key={i} title={title} index={i} />
        ))}
      </div>
    </section>
  );
};

export default About;
