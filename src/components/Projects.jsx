import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Modal from './Modal';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextProject = () => {
    setCurrent((prev) => (prev === lenght - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? lenght - 1 : prev - 1));
  };

  /* useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []); */

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-[var(--color-dark)] shadow-xl"
      style={{ boxShadow: '0 0px 100px 1px rgba(0, 0, 0, 0.50)' }}
    >
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
          <div className="absolute inset-0 bg-[var(--color-dark)]/70 z-0" />
          <div
            onClick={() => setIsModalOpen(true)}
            className="relative z-10 p-20 mx-auto bg-[var(--color-light)] rounded-2xl shadow-2xl cursor-pointer"
          >
            <h2 className="text-[var(--color-dark)] text-4xl md:text-6xl font-bold mb-6">
              {projects[current].title}
            </h2>
            <p className="text-[var(--color-dark)] text-xl max-w-2xl">
              {projects[current].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

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
