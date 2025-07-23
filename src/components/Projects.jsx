import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Modal from './Modal';
import AnimatedHeadline from '../animation/AnimatedHeadline';
import { projects } from '../data/projectCards';
import { animateProjects } from '../animation/AnimatedProjects';

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
    animateProjects(titleRefs, descRefs);
  }, []);

  return (
    <div
      className="relative w-screen min-h-screen overflow-hidden bg-[var(--color-accent)] py-10 sm:py-20 shadow-2xl px-10"
      style={{ boxShadow: '0 0px 100px 1px rgba(0, 0, 0, 0.50)' }}
    >
      <AnimatedHeadline
        text="Projects"
        className="mb-10 sm:mb-0 text-white max-w-6xl mx-auto"
      />

      <div className="relative max-w-[1100px] w-full mx-auto px-6 min-h-[600px] sm:min-h-[800px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {projects.map((project, index) =>
            index === current ? (
              <motion.div
                key={project.title}
                ref={(el) => (slideRefs.current[index] = el)}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[600px] sm:h-[700px] shadow-2xl rounded-2xl overflow-hidden flex items-center justify-center text-center"
                style={{
                  boxShadow: '0 40px 100px rgba(0, 0, 0, 0.5)',
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  onClick={() => setIsModalOpen(true)}
                  className="relative z-10 p-8 xl:p-14 bg-[var(--color-accent)] rounded-2xl shadow-2xl max-w-[90%] mx-auto cursor-pointer"
                  style={{
                    boxShadow: 'inset 0 4px 20px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <motion.h2
                    ref={(el) => (titleRefs.current[index] = el)}
                    className="text-[var(--color-light)]  text-3xl sm:text-4xl md:text-6xl font-bold mb-2 md:mb-5 hover:text-[var(--color-dark)]"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: 'easeInOut',
                      delay: 0.2,
                    }}
                  >
                    {project.title}
                  </motion.h2>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full border transition-all duration-300 ${
              current === index
                ? 'bg-[var(--color-dark)] border-[var(--color-dark)] scale-125'
                : 'bg-transparent border-white hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={current === index ? 'true' : undefined}
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
        <div className="max-h-[80vh] overflow-y-auto px-4">
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
        </div>
      </Modal>
    </div>
  );
};

export default Projects;
