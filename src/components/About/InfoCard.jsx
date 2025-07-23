import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Cake, Languages, CalendarDays, Sparkles } from 'lucide-react';
import SoftSkillsModal from '../SoftSkillsModal';
import { animateInfoCards } from '../../animation/AnimatedInfoCards';
import infoData from '../../data/infoCards';

const InfoCard = () => {
  const [softSkillsOpen, setSoftSkillsOpen] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    animateInfoCards(cardRefs.current);
  }, []);

  const softSkills =
    infoData.find((item) => item.id === 'softskills')?.skills || [];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1100px] mx-auto relative">
        {infoData.map(({ id, icon, label, value, flag, isInteractive }, i) => {
          const isButton = id === 'softskills';

          return (
            <div
              key={id}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`relative bg-[var(--color-dark)] rounded-3xl shadow-xl
              transition-transform duration-300 hover:scale-105 hover:bg-[#372e5f]
              ${isButton ? 'cursor-pointer' : 'cursor-default'}`}
              role={isButton ? 'button' : undefined}
              tabIndex={isButton ? 0 : undefined}
              onClick={() => isButton && setSoftSkillsOpen(true)}
              onKeyDown={(e) => {
                if (isButton && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  setSoftSkillsOpen(true);
                }
              }}
              aria-label={
                isButton ? 'Open Soft Skills Modal' : `${label}: ${value}`
              }
            >
              <div className="p-6" data-inner>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-[#FFD369]/10 text-[var(--color-alt)] rounded-lg">
                    {icon}
                  </div>
                  <span className="uppercase tracking-wider text-[var(--color-alt)] font-semibold text-xs sm:text-sm">
                    {label}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-[var(--color-light)] text-xl font-bold">
                    {value}
                  </p>
                  {flag && (
                    <img
                      src={`https://flagcdn.com/w40/${flag}.png`}
                      alt={`${label} flag`}
                      width="43"
                      height="21"
                      className="w-[43px] h-[21px] rounded-sm shadow-lg border border-[#FFD369]/50"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <SoftSkillsModal
        isOpen={softSkillsOpen}
        onClose={() => setSoftSkillsOpen(false)}
        skills={softSkills}
      />
    </>
  );
};

export default InfoCard;
