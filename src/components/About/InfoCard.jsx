import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Cake, Languages, CalendarDays, Sparkles } from 'lucide-react';
import SoftSkillsModal from '../SoftSkillsModal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const infoData = [
  {
    id: 'location',
    label: 'Location',
    value: 'Kharkiv, Ukraine',
    icon: <MapPin className="w-6 h-6 text-[#FFD369]" />,
    flag: 'ua',
  },
  {
    id: 'age',
    label: 'Age',
    value: '25 Years',
    icon: <Cake className="w-6 h-6 text-[#FFD369]" />,
  },
  {
    id: 'birthdate',
    label: 'Birthdate',
    value: '25.10.1999',
    icon: <CalendarDays className="w-6 h-6 text-[#FFD369]" />,
  },
  {
    id: 'english',
    label: 'English',
    value: 'B2 Level',
    icon: <Languages className="w-6 h-6 text-[#FFD369]" />,
    flag: 'gb',
  },
  {
    id: 'ukrainian',
    label: 'Ukrainian',
    value: 'Native',
    icon: <Languages className="w-6 h-6 text-[#FFD369]" />,
    flag: 'ua',
  },
  {
    id: 'softskills',
    label: 'Soft Skills',
    value: 'Click to explore',
    icon: <Sparkles className="w-6 h-6 text-[#FFD369]" />,
    isInteractive: true,
    skills: [
      {
        name: 'Problem Solving',
        description: 'Analytical & creative problem solving.',
      },
      { name: 'Teamwork', description: 'Effective collaboration skills.' },
      {
        name: 'Adaptability',
        description: 'Thriving in changing environments.',
      },
      {
        name: 'Communication',
        description: 'Clear and persuasive communication.',
      },
      { name: 'Time Management', description: 'Prioritization & planning.' },
    ],
  },
];

const InfoCard = () => {
  const [softSkillsOpen, setSoftSkillsOpen] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((outerCard, i) => {
      if (!outerCard) return;
      const inner = outerCard.querySelector('[data-inner]');
      if (!inner) return;

      gsap.fromTo(
        inner,
        {
          opacity: 0,
          y: 80,
          rotateX: 45,
          transformOrigin: 'center bottom',
          perspective: 600,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.4,
          ease: 'bounce.out',
          delay: i * 0.12,
          scrollTrigger: {
            trigger: outerCard,
            start: 'top 90%',
            toggleActions: 'play reset play reset',
            invalidateOnRefresh: true,
            refreshPriority: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto relative">
        {infoData.map(({ id, icon, label, value, flag }, i) => (
          <div
            key={id}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`relative bg-[var(--color-dark)] rounded-3xl shadow-xl
            transition-transform duration-300 hover:scale-105 hover:bg-[#372e5f]
            ${id === 'softskills' ? 'cursor-pointer' : 'cursor-default'}`}
            tabIndex={id === 'softskills' ? 0 : -1}
            role={id === 'softskills' ? 'button' : undefined}
            onClick={() => id === 'softskills' && setSoftSkillsOpen(true)}
            onKeyDown={(e) => {
              if (id === 'softskills' && (e.key === 'Enter' || e.key === ' ')) {
                setSoftSkillsOpen(true);
              }
            }}
          >
            <div className="p-6" data-inner>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-[#FFD369]/10 rounded-lg">{icon}</div>
                <span className="uppercase tracking-wider text-[#FFD369] font-semibold text-xs sm:text-sm">
                  {label}
                </span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-[var(--color-light)] text-xl font-bold">{value}</p>
                {flag && (
                  <img
                    src={`https://flagcdn.com/w40/${flag}.png`}
                    alt={`${label} flag`}
                    className="w-8 h-5 rounded-sm shadow-lg border border-[#FFD369]/50"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <SoftSkillsModal
        isOpen={softSkillsOpen}
        onClose={() => setSoftSkillsOpen(false)}
        skills={infoData.find((item) => item.id === 'softskills').skills}
      />
    </>
  );
};

export default InfoCard;
