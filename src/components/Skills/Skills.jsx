import React, { useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeadline from '../../animation/AnimatedHeadline';
import SkillTabs from './SkillTabs';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  return (
    <div
      className="h-auto lg:h-[100vh] py-10  xl:py-20  z-12 bg-[var(--color-dark)] text-[#141024] shadow-2xl"
      aria-label="Skills Section"
      style={{ boxShadow: '0 0px 100px 1px rgba(0, 0, 0, 0.50)' }}
    >
      <AnimatedHeadline text="Skills" className="pb-5 text-[var(--color-light)]" />

      <SkillTabs />
    </div>
  );
};

export default Skills;
