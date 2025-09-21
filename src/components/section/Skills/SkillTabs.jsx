import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillsData, tabs } from '../../../data/skillsCards'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

const SkillTabs = () => {
  const [activeTab, setActiveTab] = useState('main')
  const currentSkill = skillsData[activeTab]

  return (
    <section aria-labelledby="skills-tabs-heading" className="z-13 text-[#141024] px-6 py-6 sm:px-12 lg:px-12">
      <h2 id="skills-tabs-heading" className="sr-only">
        Навыки — категории и детали
      </h2>

      <div className="flex flex-col lg:flex-row max-w-[1000px] mx-auto gap-8">
        <nav
          role="tablist"
          aria-label="Навигация по категориям навыков"
          aria-orientation="vertical"
          className="flex flex-col sm:flex-row lg:flex-col justify-center lg:justify-start gap-4 md:gap-8 min-w-[140px]"
        >
          {tabs.map(({ id, label }) => {
            const isActive = activeTab === id
            return (
              <button
                key={id}
                role="tab"
                id={`tab-${id}`}
                aria-selected={isActive}
                aria-controls={`tabpanel-${id}`}
                onClick={() => setActiveTab(id)}
                className={`min-w-[120px] text-center rounded-lg px-4 py-3 font-semibold transition-colors duration-300 focus:outline-none focus:ring cursor-pointer ${
                  isActive
                    ? 'bg-accent text-dark shadow-lg'
                    : 'bg-dark-hover text-light hover:bg-[#3c3c54] hover:text-white'
                }`}
                type="button"
              >
                {label}
              </button>
            )
          })}
        </nav>

        <div className="flex-1 min-h-[400px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              role="tabpanel"
              id={`tabpanel-${activeTab}`}
              aria-labelledby={`tab-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8"
            >
              {currentSkill.map(({ title, logo }) => (
                <motion.div
                  key={title}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="bg-light text-dark rounded-lg p-4 shadow-lg flex flex-col items-center"
                >
                  <img src={logo} alt={title} className="w-16 h-16 mb-4 rounded-[10px]" />
                  <h3 className="text-xl font-bold text-center">{title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default SkillTabs
