import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedHeadline from '../../../animation/AnimatedHeadline'
import { projects } from '../../../data/projectCards'
import { ProjectSlide } from './ProjectSlide'

const Projects = () => {
  const [current, setCurrent] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [direction, setDirection] = useState(1)
  const length = projects.length
  const slideRefs = useRef([])

  const nextProject = () => {
    setDirection(1)
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1))
    setShowVideo(false)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1))
    setShowVideo(false)
  }

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.6, ease: 'easeInOut' },
    }),
  }

  return (
    <div className="relative w-screen min-h-screen overflow-hidden bg-accent py-10 sm:py-20 shadow-2xl px-10">
      <AnimatedHeadline text="Projects" className="mb-10 sm:mb-0 text-white max-w-6xl mx-auto" />

      <div className="relative max-w-[1100px] w-full mx-auto px-6 min-h-[600px] sm:min-h-[800px] flex items-center justify-center">
        <AnimatePresence custom={direction} mode="wait">
          {projects.map((project, index) =>
            index === current ? (
              <motion.div
                key={project.title}
                ref={(el) => (slideRefs.current[index] = el)}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[600px] sm:h-[700px]"
              >
                <ProjectSlide
                  project={project}
                  showVideo={showVideo}
                  onToggleVideo={() => setShowVideo((prev) => !prev)}
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1)
              setCurrent(index)
              setShowVideo(false)
            }}
            className={`w-3 h-3 rounded-full border transition-all duration-300 ${
              current === index ? 'bg-dark border-dark scale-125' : 'bg-transparent border-white hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={current === index ? 'true' : undefined}
          />
        ))}
      </div>

      {/* Arrows */}
      <div
        onClick={prevProject}
        className="absolute top-0 left-0 h-full w-1/7 z-10 group cursor-pointer flex items-center justify-start pl-4 hover:bg-light/10 transition-all duration-300"
      >
        <span className="text-4xl group-hover:-translate-x-2 transition-transform duration-300">‹</span>
      </div>

      <div
        onClick={nextProject}
        className="absolute top-0 right-0 h-full w-1/5 z-10 group cursor-pointer flex items-center justify-end pr-4 hover:bg-light/10 transition-all duration-300"
      >
        <span className="text-4xl group-hover:translate-x-2 transition-transform duration-300">›</span>
      </div>
    </div>
  )
}

export default Projects
