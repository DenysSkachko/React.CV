export const tabs = [
  { id: 'main', label: 'Main' },
  { id: 'tools', label: 'Tools' },
  { id: 'config', label: 'Config' },
  { id: 'other', label: 'Others' },
];

export const skillsData = {
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
      logo: './tailwind.svg',
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