import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { skillsData, tabs } from '../../data/skillsCards';
import { animateSkillTabs } from '../../animation/AnimatedSkillTabs';

const SkillTabs = React.forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState('main');
  const [activeIndex, setActiveIndex] = useState(null);
  const currentSkill = skillsData[activeTab];
  const expandedSkill = activeIndex !== null ? currentSkill[activeIndex] : null;

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const expandedRef = useRef(null);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (activeIndex !== null) {
      const scrollToExpanded = () => {
        if (expandedRef.current) {
          const rect = expandedRef.current.getBoundingClientRect();
          const scrollY = window.pageYOffset;

          const fixedHeaderHeight = 200;

          const targetPosition = rect.top + scrollY - fixedHeaderHeight;

          window.scrollTo({
            top: targetPosition > 0 ? targetPosition : 0,
            behavior: 'smooth',
          });
        } else {
          requestAnimationFrame(scrollToExpanded);
        }
      };

      setTimeout(() => {
        requestAnimationFrame(scrollToExpanded);
      }, 100);
    }
  }, [activeIndex]);

  useEffect(() => {
    animateSkillTabs(cardRefs, currentSkill.length, activeTab);
  }, [activeTab, currentSkill.length]);

  return (
    <section
      ref={ref}
      aria-labelledby="skills-tabs-heading"
      className="z-13 bg-[var(--color-dark)] text-[#141024] px-6 py-6 sm:px-12 lg:px-12"
    >
      <h2 id="skills-tabs-heading" className="sr-only">
        Навыки — категории и детали
      </h2>

      <div className="flex flex-col lg:flex-row max-w-[1100px] mx-auto gap-8">
        <nav
          role="tablist"
          aria-label="Навигация по категориям навыков"
          aria-orientation="vertical"
          className="flex flex-col sm:flex-row lg:flex-col justify-center lg:justify-start gap-4 md:gap-8"
          style={{ minWidth: 140 }}
        >
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              role="tab"
              id={`tab-${id}`}
              aria-selected={activeTab === id}
              aria-controls={`tabpanel-${id}`}
              aria-expanded={activeTab === id}
              tabIndex={activeTab === id ? 0 : -1}
              onClick={() => {
                setActiveTab(id);
                setActiveIndex(null);
              }}
              className={`
                rounded-lg px-4 py-3 font-semibold transition-colors duration-300 focus:outline-none focus:ring
                ${
                  activeTab === id
                    ? 'bg-[var(--color-accent)] text-[#141024] shadow-lg'
                    : 'bg-[#2a2a3a] text-[#888] hover:bg-[#3c3c54] hover:text-white'
                }
              `}
              style={{ minWidth: 120, textAlign: 'center' }}
              type="button"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex-1 min-h-[400px] relative">
          <AnimatePresence mode="wait">
            {activeIndex === null ? (
              <motion.div
                key="skills-block"
                role="tabpanel"
                id={`tabpanel-${activeTab}`}
                aria-labelledby={`tab-${activeTab}`}
                tabIndex={0}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
              >
                {currentSkill.map(({ title, logo }, i) => (
                  <button
                    key={i}
                    ref={(el) => (cardRefs.current[i] = el)}
                    aria-pressed={activeIndex === i}
                    aria-label={`Подробнее о ${title}`}
                    type="button"
                    onClick={() => handleCardClick(i)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleCardClick(i);
                      }
                    }}
                    className="bg-[var(--color-light)] text-[var(--color-dark)] rounded-lg p-4 shadow-lg flex flex-col items-center cursor-pointer focus:outline-none focus:ring"
                  >
                    <img
                      src={logo}
                      alt={`${title} logo`}
                      className="w-16 h-16 mb-4 rounded-[10px]"
                      draggable={false}
                      width={64}
                      height={64}
                    />
                    <h3 className="text-2xl font-bold text-center">{title}</h3>
                  </button>
                ))}
              </motion.div>
            ) : (
              <motion.div
                ref={expandedRef}
                key="expanded"
                role="tabpanel"
                id={`tabpanel-expanded-${activeTab}`}
                aria-labelledby={`tab-${activeTab}`}
                tabIndex={0}
                initial={{ opacity: 0, y: 100, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -60, scale: 0.9 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full h-auto bg-[var(--color-light)] text-[var(--color-dark)] rounded-2xl p-10 z-10"
              >
                <img
                  src={expandedSkill.logo}
                  alt={expandedSkill.title}
                  className="w-16 h-16 mb-6 rounded-[10px]"
                  draggable={false}
                  width={64}
                  height={64}
                />
                <h3 className="text-3xl font-bold mb-6">
                  {expandedSkill.title}
                </h3>
                <p className="text-base leading-relaxed max-w-2xl mb-4">
                  {expandedSkill.desc}
                </p>

                {expandedSkill.points?.length && (
                  <ul className="list-disc list-inside space-y-2">
                    {expandedSkill.points.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}

                <button
                  onClick={() => setActiveIndex(null)}
                  className="absolute top-4 right-4 bg-[var(--color-dark)] text-[var(--color-light)] px-4 py-2 rounded-md text-sm hover:bg-[#333] focus:outline-none focus:ring transition"
                  aria-label="Закрыть подробности навыка"
                  type="button"
                >
                  Close
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
});

export default SkillTabs;
