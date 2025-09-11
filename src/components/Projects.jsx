import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import AnimatedHeadline from '../animation/AnimatedHeadline';
import { projects } from '../data/projectCards';
import { animateProjects } from '../animation/AnimatedProjects';
import { getTechData } from '../hooks/getTechData';

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const length = projects.length;
  const [showVideo, setShowVideo] = useState(false);

  const slideRefs = useRef([]);
  const titleRefs = useRef([]);
  const descRefs = useRef([]);

  const nextProject = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    setShowVideo(false);
  };

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    setShowVideo(false);
  };

  useEffect(() => {
    animateProjects(titleRefs, descRefs);
  }, []);

  return (
    <div className="relative w-screen min-h-screen overflow-hidden bg-[var(--color-accent)] py-10 sm:py-20 shadow-2xl px-10">
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
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[600px] sm:h-[700px] shadow-2xl rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center cursor-pointer bg-black"
                onClick={() => setShowVideo((prev) => !prev)}
              >
                {showVideo && project.video ? (
                  project.video.includes('youtube') ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={project.video}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={project.video}
                      controls
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  <div
                    className="w-full h-full relative"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-[var(--color-dark)]/90 to-transparent pointer-events-none" />

                    <div
                      className="absolute bottom-0 left-0 w-full flex justify-center p-2 flex-wrap gap-2"
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap-reverse',
                        alignContent: 'flex-end',
                      }}
                    >
                      {getTechData(project.tech).map((item, i) => (
                        <span
                          key={i}
                          className="flex w-fit items-center gap-1 px-5 py-3 text-sm rounded-xl  text-[var(--color-light)] bg-[var(--color-light)] hover:scale-110 transition-all duration-300 "
                        >
                          {item.logo && (
                            <img
                              src={item.logo}
                              alt={item.title}
                              className="w-8 h-8 object-contain"
                            />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {!showVideo && (project.site || project.repo) && (
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
                    {project.site && (
                      <a
                        href={project.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-6 py-2 rounded-xl bg-[var(--color-accent)] text-[var(--color-light)] font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        Visit Project
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-6 py-2 rounded-xl bg-[var(--color-dark)] text-[var(--color-light)] font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        GitHub Repo
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setShowVideo(false);
            }}
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
    </div>
  );
};

export default Projects;
