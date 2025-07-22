import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  { id: 'main', label: 'Main' },
  { id: 'tools', label: 'Tools' },
  { id: 'config', label: 'Config' },
  { id: 'other', label: 'Others' },
];

const skillsData = {
  main: [
    {
      title: 'HTML5',
      points: [
        'HTML Document Structure',
        'Semantic element',
        'Accessibility',
        'SEO-friendly markup',
      ],
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      title: 'CSS3',
      desc: 'I almost never use native CSS in practice, as I took Tailwind CSS as a basis for my projects, but I have quite good knowledge of CSS',
      points: [
        'Flexbox layout',
        'Grid layout',
        'CSS Variables (Custom Properties)',
        'Media Queries',
        'Keyframe animations',
      ],
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      title: 'JavaScript',
      desc: 'I study JavaScript every day to this day, including new libraries',
      points: [
        'DOM manipulation and events',
        'ES6+ features',
        'Closures, scopes, and prototypes understanding',
        'Error handling with try/catch',
        'Event delegation and bubbling concepts',
      ],
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      title: 'React',
      desc: 'In particular, this resume site is built on React.',
      points: [
        'Components and props',
        'State and hooks',
        'JSX syntax and conditional rendering',
        'Component lifecycle and effects',
      ],
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      title: 'Tailwind CSS',
      desc: 'Tailwind is my love, I did all my recent projects on Tailwind, I see it as the main tool for working with CSS',
      points: [
        'Utility-first classes for rapid UI building',
        'Responsive design with breakpoint prefixes',
        'Using variants like hover:, focus:, dark:',
        'Customization via Tailwind config file',
      ],
      logo: 'https://www.svgrepo.com/show/374118/tailwind.svg',
    },
    {
      title: 'TypeScript',
      desc: 'In the process of learning',
      points: [
        'Static typing and interfaces',
        'Generics for reusable components',
        'Using tsconfig.json for project config',
        'Type guards and narrowing',
      ],
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      title: 'SASS',
      desc: 'Made a project on SCSS (FutureTech), positive emotions remained. Using mixins, functions with the structure of components is very convenient to use',
      points: [
        'Variables and nesting for cleaner CSS',
        'Mixins and functions to reuse code',
        'Partials and imports for modular stylesheets',
        'Integration with build tools like Vite',
      ],
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    },
    {
      title: 'PHP',
      desc: 'Used PHP to create themes, plugins and gutenberg blocks for WordPress. There are several pet projects where PHP is the main language.',
      points: [
        'Server-side scripting basics',
        'Sessions and cookies for user data persistence',
        'Writing reusable functions and classes',
        'WordPress theme/plugin development basics',
      ],
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    },
    {
      title: 'WordPress',
      desc: 'I have done a lot of work with WordPress, I also took a paid course on WordPress/PHP, where I made themes with minimal use of the admin panel, I used ACF and ACF Pro',
      points: [
        'Installing and configuring WordPress CMS',
        'Creating and customizing themes with PHP, HTML, CSS',
        'Working with plugins and hooks (actions/filters)',
        'Using Advanced Custom Fields (ACF) for custom data',
      ],
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
    },
  ],
  tools: [
    {
      title: 'Git',
      desc: 'Version control system for tracking changes and collaborating in codebases.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      points: [
        'git init / clone / commit / push / pull / fetch',
        'Branching and merging (`git branch`, `git merge`)',
        'Staging and reverting changes (`git add`, `git reset`)',
        'Conflict resolution and rebasing',
        'Working with remote repositories (origin, upstream)',
      ],
    },
    {
      title: 'GitHub',
      desc: 'This page - working by GitHub',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/github/github-original.svg',
      points: [
        'Working with GitHub repositories (clone, fork, pull request)',
        'GitHub Pages deployment',
        'GitHub Actions (basic workflow setup)',
        'Managing issues, branches, and releases',
      ],
    },
    {
      title: 'NPM',
      desc: 'Used in all my projects.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
      points: [
        '`npm init`, `npm install`, `npm uninstall`',
        'package.json structure & dependency management',
        'Using scripts (`npm run <script>`)',
        'Global vs local packages',
      ],
    },
    {
      title: 'Vite',
      desc: 'Used in all my projects.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
      points: [
        'Zero-config setup for React/Vue',
        'Fast HMR (Hot Module Replacement)',
        '`vite.config.js` customization',
        'Aliasing and env variables',
        'Production builds and optimization',
      ],
    },
  ],
  config: [
    {
      title: 'Prettier',
      desc: 'Code formatter that enforces consistent style across your codebase.',
      logo: 'https://unpkg.com/simple-icons@v11/icons/prettier.svg',
      points: [
        'Automatic code formatting on save',
        'Configuration via `.prettierrc`',
        'Integrating with ESLint',
        'Prettier + VSCode plugin setup',
        'Ignoring files with `.prettierignore`',
      ],
    },
    {
      title: 'ESLint',
      desc: 'Linter tool for identifying and fixing problems in JavaScript/TypeScript code.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
      points: [
        'Linting JS/TS for code quality and errors',
        'Rules configuration via `.eslintrc`',
        'ESLint plugins and extensions',
        'Autofix with `eslint --fix`',
        'Integration with Prettier',
      ],
    },
    {
      title: 'VS Code',
      desc: 'VS Code my favorite IDE.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      points: [
        'Extensions: Prettier, ESLint, Tailwind IntelliSense',
        'Keyboard shortcuts and workspace setup',
        'Working with Git/GitHub from VSCode',
        'Live Server & debugging tools',
        'Emmet abbreviations and multi-cursor editing',
      ],
    },
  ],

  other: [
    {
      title: 'Photoshop',
      desc: 'I have been working with Photoshop for over 10 years.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
      points: [
        'UI mockup design and layout',
        'Layer management & smart objects',
        'Exporting assets for web (PNG, SVG)',
        'Working with typography & guides',
        'Basic photo editing and retouching',
      ],
    },
    {
      title: 'ACF',
      desc: 'Advanced Custom Fields plugin for WordPress to build custom field groups and enhance content management.',
      logo: 'https://cdn.brandfetch.io/idyxGctRjG/w/256/h/256/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1751030685548',
      points: [
        'Creating custom field groups for posts/pages',
        'Flexible content & repeaters',
        'Using `get_field()` and `the_field()` in templates',
        'Conditional logic and UI customization',
        'Connecting ACF with custom post types (CPT)',
      ],
    },
    {
      title: 'GSAP',
      desc: 'This project using this library, 85% animation by GSAP',
      logo: 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg',
      points: [
        'Basic tweens and timelines (`gsap.to`, `.from`, `.timeline`)',
        'ScrollTrigger: animations on scroll',
        'Stagger, delay, and easing',
        'Combining GSAP with React (useEffect, refs)',
        'Animating SVGs and DOM elements',
      ],
    },
    {
      title: 'Framer Motion',
      desc: 'This project using this library, 85% animation by GSAP',
      logo: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg',
      points: [
        'Basic tweens and timelines (`gsap.to`, `.from`, `.timeline`)',
        'ScrollTrigger: animations on scroll',
        'Stagger, delay, and easing',
        'Combining GSAP with React (useEffect, refs)',
        'Animating SVGs and DOM elements',
      ],
    },
  ],
};

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
    cardRefs.current = cardRefs.current.slice(0, currentSkill.length);

    if (window.innerWidth < 768) return;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
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
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play reset play reset',
            invalidateOnRefresh: true,
            refreshPriority: 1,
          },
        }
      );
    });
  }, [activeTab, currentSkill.length]);

  return (
    <section
      ref={ref}
      className="z-13 bg-[var(--color-dark)] text-[#141024] px-6 py-6 sm:px-12 lg:px-12"
    >
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-8 h-full max-w-[1100px] mx-auto">
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
                key="skills-block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
              >
                {currentSkill.map(({ title, logo }, i) => (
                  <article
                    key={i}
                    ref={(el) => (cardRefs.current[i] = el)}
                    onClick={() => handleCardClick(i)}
                    className="bg-[var(--color-light)] text-[var(--color-dark)] rounded-lg p-4 shadow-lg flex flex-col items-center cursor-pointer"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setActiveIndex(i);
                    }}
                  >
                    <img
                      src={logo}
                      alt={`${title} logo`}
                      className="w-16 h-16 mb-4 rounded-[10px]"
                      draggable={false}
                    />
                    <h3 className="text-2xl font-bold text-center">{title}</h3>
                  </article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                ref={expandedRef}
                key="expanded"
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
                />
                <h3 className="text-3xl font-bold mb-6">
                  {expandedSkill.title}
                </h3>
                <p className="text-base leading-relaxed max-w-2xl mb-4">
                  {expandedSkill.desc}
                </p>

                {expandedSkill.points &&
                  Array.isArray(expandedSkill.points) && (
                    <ul className="list-disc list-inside space-y-2">
                      {expandedSkill.points.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
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
