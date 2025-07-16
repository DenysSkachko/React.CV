import React, { useRef, useEffect } from 'react';
import {
  Header,
  Hero,
  About,
  Skills,
  ThemeToggle,
  Footer,
  Projects,
  Reviews,
} from './components/index';
import './index.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023.98px)');

    if (mediaQuery.matches) {
      return;
    }

    const aboutSection = document.querySelector('#about');
    const skillsSection = document.querySelector('#skills');
    const projectsSection = document.querySelector('#projects');

    if (aboutSection) {
      ScrollTrigger.create({
        trigger: aboutSection,
        start: 'bottom bottom',
        pin: true,
        pinSpacing: false,
        id: 'pin-about',
      });
    }

    if (skillsSection) {
      ScrollTrigger.create({
        trigger: skillsSection,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        id: 'pin-skills',
      });
    }

    if (projectsSection) {
      ScrollTrigger.create({
        trigger: projectsSection,
        start: 'top top',
        end: 'bottom bottom',
        pin: true,
        pinSpacing: false,
        id: 'pin-projects',
      });
    }

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* <ThemeToggle /> */}
      {/* <Header /> */}
      <main className="flex-1">
        {/*  <Hero /> */}

        <div className="relative">
          <section id="about" className="slide-section ">
            <About />
          </section>{/* 
          <section id="skills" className="slide-section h-auto lg:h-[100vh]">
            <Skills />
          </section> */}
          {/* 
          <section id="projects" className="slide-section h-[100vh]">
            <Projects />
          </section> */}
        </div>
        {/* <Reviews /> */}
      </main>
      {/* 
      <Footer /> */}
    </div>
  );
}

export default App;
