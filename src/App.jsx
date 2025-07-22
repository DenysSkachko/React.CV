import React, { useRef, useEffect, useState } from 'react';
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
import Preloader from './components/Preloader';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023.98px)');
    setIsMobile(mediaQuery.matches);

    if (mediaQuery.matches) return;

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
        start: 'bottom bottom',
        pin: true,
        pinSpacing: false,
        id: 'pin-skills',
      });
    }

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <>
      {!isMobile && <Preloader />}

      <div className="min-h-screen flex flex-col relative">
        <ThemeToggle />
        <Header />
        <main className="flex-1">
          <Hero />

          <div className="relative">
            <section id="about" className="slide-section">
              <About />
            </section>
            <section id="skills" className="slide-section h-auto">
              <Skills />
            </section>
            <section id="projects" className="slide-section h-auto">
              <Projects />
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
