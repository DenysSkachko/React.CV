import React, { useState } from 'react';

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'design', label: 'Design' },
];

const projectsData = {
  all: [
    {
      title: 'Skill 1',
      desc: 'Description for skill 1.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      title: 'Skill 2',
      desc: 'Description for skill 2.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      title: 'Skill 3',
      desc: 'Description for skill 3.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      title: 'Skill 4',
      desc: 'Description for skill 4.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      title: 'Skill 5',
      desc: 'Description for skill 5.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      title: 'Skill 6',
      desc: 'Description for skill 6.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
  ],
  web: [
    {
      title: 'Web Skill 1',
      desc: 'Description for web skill 1.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      title: 'Web Skill 2',
      desc: 'Description for web skill 2.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      title: 'Web Skill 3',
      desc: 'Description for web skill 3.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
  ],
  mobile: [
    {
      title: 'Mobile Skill 1',
      desc: 'Description for mobile skill 1.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      title: 'Mobile Skill 2',
      desc: 'Description for mobile skill 2.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
  ],
  design: [
    {
      title: 'Design Skill 1',
      desc: 'Description for design skill 1.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      title: 'Design Skill 2',
      desc: 'Description for design skill 2.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      title: 'Design Skill 3',
      desc: 'Description for design skill 3.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      title: 'Design Skill 4',
      desc: 'Description for design skill 4.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
  ],
};

const ProjectsWithTabs = React.forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section
      id="projects"
      ref={ref}
      className="h-[100vh] z-13 bg-[var(--color-dark)] text-[#141024] py-[100px] px-6 sm:px-12 lg:px-24 overflow-auto shadow-2xl"
      aria-label="Projects Section"
      style={{ boxShadow: '0 0px 100px 1px rgba(0, 0, 0, 0.50)' }}
    >
      <h2 className="mb-20 text-5xl font-bold text-center">Projects</h2>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8 h-full">
        {/* Tabs nav */}
        <nav
          className="flex md:flex-col justify-center md:justify-start gap-4 md:gap-8"
          role="tablist"
          aria-orientation="vertical"
          style={{ minWidth: '140px' }}
        >
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeTab === id}
              aria-controls={`tabpanel-${id}`}
              id={`tab-${id}`}
              tabIndex={activeTab === id ? 0 : -1}
              onClick={() => setActiveTab(id)}
              className={`rounded-lg px-4 py-3 font-semibold transition-colors duration-300 focus:outline-none ${
                activeTab === id
                  ? 'bg-[var(--color-accent)] text-[#141024] shadow-lg'
                  : 'bg-[#2a2a3a] text-[#888] hover:bg-[#3c3c54] hover:text-white'
              }`}
              style={{ minWidth: '120px', textAlign: 'center' }}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <div
          className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 overflow-auto"
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          tabIndex={0}
        >
          {projectsData[activeTab].map(({ title, desc, logo }, i) => (
            <article
              key={i}
              className="bg-[var(--color-accent)] text-[#141024] rounded-lg p-6 shadow-lg flex flex-col items-center cursor-default select-text"
            >
              <img
                src={logo}
                alt={title + ' logo'}
                className="w-16 h-16 mb-4 pointer-events-none select-none"
                draggable={false}
              />
              <h3 className="text-3xl font-bold mb-4">{title}</h3>
              <p className="text-center">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProjectsWithTabs;



const ProjectsExpandCards = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOpen = (index) => setActiveIndex(index);
  const handleClose = () => setActiveIndex(null);
  const expandedProject = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <section className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto  px-4 transition-all duration-500">
      <div className="col-span-full transition-all duration-500">
        <AnimatePresence mode="wait">
          {activeIndex === null ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, rotateX: -30, y: 50 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, rotateX: 10, y: 50 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-500 opacity-100 scale-100"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  onClick={() => handleOpen(index)}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[var(--color-accent)] rounded-xl p-6 shadow-xl text-center cursor-pointer transition-all duration-300 hover:shadow-2xl flex flex-col items-center"
                >
                  <img
                    src={project.logo}
                    alt={project.title}
                    className="w-16 h-16 mb-4"
                    draggable={false}
                  />
                  <h3 className="text-xl font-bold text-[#141024]">
                    {project.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -60, scale: 0.9 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="transition-all duration-500 opacity-100 scale-100 col-span-full bg-white text-[#141024] rounded-2xl shadow-2xl p-10 relative"
            >
              <motion.img
                src={expandedProject.logo}
                alt={expandedProject.title}
                initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-16 h-16 mb-6"
              />
              <motion.h3
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-3xl font-bold mb-4"
              >
                {expandedProject.title}
              </motion.h3>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-base leading-relaxed max-w-2xl"
              >
                {expandedProject.description}
              </motion.p>

              <button
                onClick={handleClose}
                className="absolute top-4 right-4 bg-[#141024] text-white px-4 py-2 rounded-md text-sm hover:bg-[#333] transition"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export ProjectsExpandCards;