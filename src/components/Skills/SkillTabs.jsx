import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const tabs = [
  { id: 'main', label: 'Main' },
  { id: 'tools', label: 'Tools' },
  { id: 'config', label: 'Config' },
  { id: 'other', label: 'Others' },
];

const projectsData = {
  main: [
    {
      title: 'HTML5',
      desc: 'Standard language for building semantic, accessible, and structured content on the web.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      title: 'CSS3',
      desc: 'Used for styling web content with layout, colors, animations, and responsive design.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      title: 'JavaScript',
      desc: 'Dynamic scripting language essential for interactive frontend and full-stack applications.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      title: 'React',
      desc: 'Component-based library for building fast and scalable user interfaces.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      title: 'Tailwind CSS',
      desc: 'Utility-first CSS framework for building modern, responsive designs faster.',
      logo: 'https://www.svgrepo.com/show/374118/tailwind.svg',
    },
    {
      title: 'TypeScript',
      desc: 'Superset of JavaScript that adds strong typing and modern tooling features.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      title: 'SASS',
      desc: 'CSS preprocessor with variables, nesting, mixins and better style organization.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    },
    {
      title: 'PHP',
      desc: 'Server-side scripting language often used for dynamic content and web applications.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    },
    {
      title: 'WordPress',
      desc: 'Popular CMS built on PHP, used to build everything from blogs to e-commerce.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
    },
  ],
  tools: [
    {
      title: 'Git',
      desc: 'Version control system for tracking changes and collaborating in codebases.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      title: 'GitHub',
      desc: 'CI/CD automation for building, testing, and deploying projects.',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/github/github-original.svg',
    },
    {
      title: 'NPM',
      desc: 'Node package manager used to install and manage frontend & backend libraries.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
    },
    {
      title: 'Vite',
      desc: 'Fast frontend build tool optimized for modern JavaScript frameworks.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
    },
  ],
  config: [
    {
      title: 'Prettier',
      desc: 'Code formatter that enforces consistent style across your codebase.',
      logo: 'https://unpkg.com/simple-icons@v11/icons/prettier.svg',
    },
    {
      title: 'ESLint',
      desc: 'Linter tool for identifying and fixing problems in JavaScript/TypeScript code.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
    },
    {
      title: 'VS Code',
      desc: 'Code editor with extensions and tooling for web, cloud, and full-stack development.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    },
  ],
  other: [
    {
      title: 'Photoshop',
      desc: 'Powerful image editor used for UI design, graphics, and asset preparation.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
    },
    {
      title: 'ACF',
      desc: 'Advanced Custom Fields plugin for WordPress to build custom field groups and enhance content management.',
      logo: 'https://cdn.brandfetch.io/idyxGctRjG/w/256/h/256/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1751030685548',
    },
    {
      title: 'GSAP',
      desc: 'Advanced Custom Fields plugin for WordPress to build custom field groups and enhance content management.',
      logo: 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg',
    },
  ],
};

const SkillTabs = React.forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState('main');
  const [activeIndex, setActiveIndex] = useState(null);
  const currentProjects = projectsData[activeTab];
  const expandedProject =
    activeIndex !== null ? currentProjects[activeIndex] : null;

  return (
    <section
      ref={ref}
      className="z-13 bg-[var(--color-dark)] text-[#141024] px-6 py-6 sm:px-12 lg:px-12 "
      aria-label="Projects Section"
    >
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-8 h-full">
        <nav
          className="flex flex-col sm:flex-row lg:flex-col justify-center lg:justify-start gap-4 md:gap-8"
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
              onClick={() => {
                setActiveTab(id);
                setActiveIndex(null);
              }}
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

        <div className="flex-1 min-h-[400px] relative">
          <AnimatePresence mode="wait">
            {activeIndex === null ? (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
              >
                {currentProjects.map(({ title, logo }, i) => (
                  <motion.article
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    whileHover={{ scale: 1.05 }}
                    className="bg-[var(--color-light)] text-[var(--color-dark)] rounded-lg p-4 shadow-lg flex flex-col items-center cursor-pointer"
                  >
                    <img
                      src={logo}
                      alt={`${title} logo`}
                      className="w-16 h-16 mb-4 rounded-[10px]"
                      draggable={false}
                    />
                    <h3 className="text-2xl font-bold text-center">{title}</h3>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, y: 100, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -60, scale: 0.9 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute top-0 left-0 w-full bg-[var(--color-light)] text-[var(--color-dark)] rounded-2xl shadow-2xl p-10 z-10"
              >
                <img
                  src={expandedProject.logo}
                  alt={expandedProject.title}
                  className="w-16 h-16 mb-6 rounded-[10px]"
                />
                <h3 className="text-3xl font-bold mb-4">
                  {expandedProject.title}
                </h3>
                <p className="text-base leading-relaxed max-w-2xl">
                  {expandedProject.desc}
                </p>
                <button
                  onClick={() => setActiveIndex(null)}
                  className="absolute top-4 right-4 bg-[var(--color-dark)] text-[var(--color-light)] px-4 py-2 rounded-md text-sm hover:bg-[#333] transition"
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
