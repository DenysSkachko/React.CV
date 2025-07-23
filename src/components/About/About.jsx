import React from 'react';
import InfoCard from './InfoCard';
import EducationCard from './EducationCard';
import AnimatedHeadline from '../../animation/AnimatedHeadline';

const About = () => {
  return (
    <div
      className="z-10 relative  pt-10 sm:pb-50 sm:pt-20 bg-[var(--color-accent)] text-white select-none shadow-xl min-h-screen p-4 overflow-hidden"
      aria-label="About Me Section"
    >
      <AnimatedHeadline text="About Me" className="mb-10 sm:mb-20" />
      
      <div className="max-w-[1100px] mx-auto">
        <InfoCard />

        <div className="flex flex-wrap justify-center gap-8 max-w-[1100px] mx-auto mt-20">
          {['Bachelor’s Diploma', 'Master’s Diploma'].map((title, i) => (
            <EducationCard key={i} title={title} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
