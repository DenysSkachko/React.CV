import { useState } from 'react'
import { BookOpen } from 'lucide-react'

const EducationCard = ({ education }) => {
  const [flipped, setFlipped] = useState(false)

  const toggleFlip = e => {
    if (e.type === 'click' || (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' '))) {
      e.preventDefault()
      setFlipped(prev => !prev)
    }
  }

  return (
    <div
      className={`edu-card visible relative w-full max-w-[470px] h-[280px] rounded-2xl shadow-2xl cursor-pointer transition-all duration-300 ${
        flipped ? 'flipped' : ''
      }`}
      onClick={toggleFlip}
      onKeyDown={toggleFlip}
      role="button"
      aria-pressed={flipped}
      aria-label={`Education card: ${education.title}`}
      style={{ perspective: 1000 }}
    >
      <div
        className="flip-inner relative w-full h-full rounded-3xl"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s ease-in-out',
          transform: flipped ? 'rotateY(180deg)' : 'none',
        }}
      >
        <div className="hover:bg-dark-hover flip-front absolute w-full h-full backface-hidden rounded-3xl flex flex-col justify-between items-center p-6 text-center bg-dark">
          <div className="flex items-center gap-4 self-start">
            <div className="p-2 bg-alt/10 text-alt rounded-lg">
              <BookOpen />
            </div>
            <span className="uppercase tracking-wider text-alt font-semibold text-xs sm:text-sm">
              {education.degree}
            </span>
          </div>

          <h3 className="font-extrabold text-xl">{education.title}</h3>
          <p className="text-[#ccc] text-sm">Click to flip</p>
        </div>

        <div
          className="flip-back absolute w-full h-full backface-hidden rounded-3xl p-6 text-light flex flex-col gap-1 justify-center bg-dark  text-sm"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className="font-bold sm:text-xl mb-3">{education.title}</h3>
          <p>
            <span className="font-semibold">Faculty:</span> {education.faculty}
          </p>
          <p>
            <span className="font-semibold">Major:</span> {education.major}
          </p>
          <p>
            <span className="font-semibold">Mode:</span> {education.mode}
          </p>
          <p>
            <span className="font-semibold">Years:</span> {education.years}
          </p>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
