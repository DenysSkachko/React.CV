import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

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
      'HTML/CSS layout, JavaScript interaction, Axios, WordPress, Php',
    image: './project2.png',
    color: '#FFD369',
  },
  {
    title: 'Bento Proxima Web',
    description:
      'HTML/CSS layout, JavaScript interaction, Axios, WordPress, Php',
    image: './project3.png',
    color: '#FFD369',
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const lenght = projects.length;

  const nextProject = () => {
    setCurrent((prev) => (prev === lenght - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? lenght - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[var(--color-dark)]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            backgroundImage: `url(${projects[current].image})`,
            color: projects[current].color,
          }}
          className="bg-[var(--color-alt)] bg-cover bg-center absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-6 text-center"
        >
          <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="relative z-10">
            <h2 className="text-[var(--color-light)] text-6xl font-bold mb-6">
              {projects[current].title}
            </h2>
            <p className="text-[var(--color-light)] text-xl max-w-2xl">
              {projects[current].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div
        onClick={prevProject}
        className="absolute top-0 left-0 h-full w-1/5 z-10 group cursor-pointer flex items-center justify-start pl-4 hover:bg-white/10 transition-all duration-300"
      >
        <span className="text-black text-4xl group-hover:-translate-x-2 transition-transform duration-300">
          ‹
        </span>
      </div>

      <div
        onClick={nextProject}
        className="absolute top-0 right-0 h-full w-1/5 z-10 group cursor-pointer flex items-center justify-end pr-4 hover:bg-white/10 transition-all duration-300"
      >
        <span className="text-black text-4xl group-hover:translate-x-2 transition-transform duration-300">
          ›
        </span>
      </div>

      <div className="z-20 absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full border transition-all duration-300 ${
              current === index
                ? 'bg-[var(--color-accent)] border-[var(--color-accent)] scale-125'
                : 'bg-transparent border-white hover:scale-110'
            }
          `}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
