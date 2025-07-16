import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Modal from './Modal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'WhitePace Landing',
    description:
      'HTML/CSS layout, JavaScript interaction, Axios, WordPress, Php',
    image: './project1.png',
    color: '#FFD369',
  },
  {
    title: 'FutureTech multi-page',
    description:
      'HTML/CSS layout, JavaScript interaction, WordPress, Php, Sass, JavaScript, GSAP',
    image: './project2.png',
    color: '#FFD369',
  },
  {
    title: 'Bento Proxima Web',
    description: 'HTML, Tailwind CSS, React, FramerMotion, Vite, JavaScript',
    image: './project3.png',
    color: '#FFD369',
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const length = projects.length;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slideRefs = useRef([]);
  const titleRefs = useRef([]);
  const descRefs = useRef([]);

  const nextProject = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!slideRefs.current.length) return;

    slideRefs.current.forEach((el, index) => {
      if (!el) return;

      if (el._gsapScrollTrigger) return;

      gsap.fromTo(
        el,
        { scale: 2 },
        {
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
            id: `slide-${index}`,
          },
        }
      );
    });
    titleRefs.current.forEach((el, index) => {
      if (!el) return;

      if (el._gsapScrollTrigger) return;

      gsap.fromTo(
        el,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'bottom 20%',
            scrub: true,
            id: `title-${index}`,
          },
        }
      );
    });

    descRefs.current.forEach((el, index) => {
      if (!el) return;

      if (el._gsapScrollTrigger) return;

      gsap.fromTo(
        el,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'bottom 20%',
            scrub: true,
            id: `desc-${index}`,
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[var(--color-dark)]">
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => (slideRefs.current[index] = el)}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col items-center justify-center text-center px-6 ${
            current === index
              ? 'opacity-100 z-10'
              : 'opacity-0 z-0 pointer-events-none'
          }`}
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-[var(--color-dark)]/80" />
          <div
            onClick={() => setIsModalOpen(true)}
            className="relative z-10 p-8 xl:p-14 bg-[var(--color-light)] rounded-2xl shadow-2xl"
          >
            <h2
              ref={(el) => (titleRefs.current[index] = el)}
              className="text-[var(--color-dark)] text-4xl md:text-6xl font-bold mb-6"
            >
              {project.title}
            </h2>
            <p
              ref={(el) => (descRefs.current[index] = el)}
              className="text-[var(--color-dark)] text-xl max-w-2xl"
            >
              {project.description}
            </p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full border transition-all duration-300 ${
              current === index
                ? 'bg-[var(--color-accent)] border-[var(--color-accent)] scale-125'
                : 'bg-transparent border-white hover:scale-110'
            }`}
          />
        ))}
      </div>

      <div
        onClick={prevProject}
        className="absolute top-0 left-0 h-full w-1/5 z-10 group cursor-pointer flex items-center justify-start pl-4 hover:bg-white/10 transition-all duration-300"
      >
        <span className="text-[var(--color-light)] text-4xl group-hover:-translate-x-2 transition-transform duration-300">
          ‹
        </span>
      </div>

      <div
        onClick={nextProject}
        className="absolute top-0 right-0 h-full w-1/5 z-10 group cursor-pointer flex items-center justify-end pr-4 hover:bg-white/10 transition-all duration-300"
      >
        <span className="text-[var(--color-light)] text-4xl group-hover:translate-x-2 transition-transform duration-300">
          ›
        </span>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-2xl font-bold mb-4 text-[var(--color-light)]">
          {projects[current].title}
        </h3>
        <p className="text-lg text-[var(--color-light)]">
          {projects[current].description}
        </p>
        <img
          src={projects[current].image}
          alt={projects[current].title}
          className="mt-6 rounded-lg"
        />
      </Modal>
    </div>
  );
};

export default Projects;
