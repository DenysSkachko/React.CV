import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeadline from '../../../animation/AnimatedHeadline';
import SkillTabs from './SkillTabs';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  return (
    <div
      className="h-full min-h-screen py-10 sm:pb-50 sm:pt-20 z-12 bg-dark text-dark  shadow-2xl "
      aria-label="Skills Section"
    >
      <AnimatedHeadline
        text="Skills"
        className="pb-5 text-[var(--color-light)]"
      />

      <SkillTabs />
    </div>
  );
};

export default Skills;
