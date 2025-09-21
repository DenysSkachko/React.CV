import { useState } from 'react'
import SoftSkillsModal from '../../shared/SoftSkillsModal'

const InfoCard = ({ info }) => {
  const [softSkillsOpen, setSoftSkillsOpen] = useState(false)

  const isButton = info.id === 'softskills'
  const skills = isButton ? info.skills || [] : []

  const handleClick = (e) => {
    if (isButton) setSoftSkillsOpen(true)
  }

  const handleKeyDown = (e) => {
    if (isButton && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      setSoftSkillsOpen(true)
    }
  }

  return (
    <>
      <div
        className={`relative bg-dark rounded-3xl shadow-xl
          transition-transform duration-300 hover:scale-105 hover:bg-[var(--color-dark-hover)]
          ${isButton ? 'cursor-pointer' : 'cursor-default'}`}
        role={isButton ? 'button' : undefined}
        tabIndex={isButton ? 0 : undefined}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-label={isButton ? 'Open Soft Skills Modal' : `${info.label}: ${info.value}`}
      >
        <div className="p-6" data-inner>
          <div className="flex items-center gap-4">
            <div className="p-2 bg-alt/10 text-alt rounded-lg">{info.icon}</div>
            <span className="uppercase tracking-wider text-alt font-semibold text-xs sm:text-sm">{info.label}</span>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-light text-lg font-bold">{info.value}</p>
            {info.flag && (
              <img
                src={`https://flagcdn.com/w40/${info.flag}.png`}
                alt={`${info.label} flag`}
                className="w-[40px] h-[25px] rounded-sm shadow-lg "
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>

      {isButton && <SoftSkillsModal isOpen={softSkillsOpen} onClose={() => setSoftSkillsOpen(false)} skills={skills} />}
    </>
  )
}

export default InfoCard
