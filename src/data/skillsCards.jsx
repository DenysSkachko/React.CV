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
      desc: "JavaScript is what I use and study every day. I've completed a JS course, and even after that I realize there's still so much more to learn. This project is built almost entirely with JavaScript. In past projects without frameworks, I used JS to implement tabs, modals, theme switchers, and burger menus. In my latest project (already using TypeScript), I worked with localStorage. In one of the older projects using jQuery, I implemented live site search functionality.",
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
      desc: "Among the main JavaScript frameworks, React is my favorite. This project is also built on React. I follow a solid component-based architecture and actively use all core React hooks. I've added React to my main tech stack and plan to continue deepening my knowledge and experience with this framework.",
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
      desc: "I primarily use this utility-first CSS framework for website layout. I'm confident with the syntax and proficient in building responsive interfaces. All of my recent projects were built using Tailwind. I value the speed and code readability it offers by keeping styles within the component, without switching between multiple files to fix layout issues.",
      points: [
        'Utility-first classes for rapid UI building',
        'Responsive design with breakpoint prefixes',
        'Using variants like hover:, focus:, dark:',
      ],
      logo: './tailwind.svg',
    },
    {
      title: 'TypeScript',
      desc: 'TypeScript is an essential foundation for modern projects. At first, I didn’t realize how important it was, but after building a project with it, I saw how valuable and helpful it is. Using TypeScript, I created a simple and clear planner app for an English teacher, and TypeScript played a key role in making the codebase reliable and understandable.',
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
      desc: 'Aside from my early fragmented knowledge of HTML and CSS, PHP was the first technology I studied in depth. I used it to implement dynamic content on my own project. Now I can confidently work with Gutenberg blocks for WordPress, as well as develop custom plugins and themes.',
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
      desc: 'Basic knowledge of Git, sufficient for effective code collaboration; actively use it in every project, making commits for every code change.',
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
      desc: 'Basic GitHub skills similar to Git level; use it for storing all my code. Also have practical experience with GitHub Pages and GitHub Actions.',
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
      desc: 'I use npm mostly at a basic level with commands like npm run start, dev, and build, as well as custom scripts like npm run format for Prettier. I also use npm to add libraries such as GSAP and other packages like React Icons to my projects.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
      points: [
        '`npm init`, `npm install`, `npm uninstall`',
        'package.json structure & dependency management',
        'Using scripts (`npm run <script>`)',
      ],
    },
    {
      title: 'Vite',
      desc: "I haven't used many bundlers, but between Vite and Webpack, I found Vite easier to use and fully meeting my needs. For my main stack of React and Tailwind, it’s an excellent bundler.",
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
      points: [
        'Zero-config setup for React/Vue',
        '`vite.config.js` customization',
        'Aliasing and env variables',
        'Production builds and optimization',
      ],
    },
  ],
  config: [
    {
      title: 'Prettier',
      desc: 'I use Prettier in every project to maintain code standards; it provides convenience and makes the code visually clean and pleasant to read.',
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
      desc: 'VS Code is my most comfortable IDE; I actively use built-in plugins and snippets to speed up coding.',
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
      desc: 'I have practical experience with both the standard and PRO versions of ACF for creating dependencies in WordPress. It’s a useful tool, even though I prefer using native PHP for some tasks.',
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
      desc: "I confidently use GSAP for various complex entrance animations and actively utilize the ScrollTrigger plugin. In some cases, I've applied SplitText. About 85% of the animations in this portfolio are thanks to this library, showcasing what I can achieve.",
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
      desc: 'I included Framer Motion as an advanced addition; this portfolio contains animations implemented with it that GSAP cannot cover, such as slide transitions and tab section animations like the ones you’re viewing now. I would say I have a basic level of proficiency with this technology.',
      logo: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg',
    },
  ],
};
