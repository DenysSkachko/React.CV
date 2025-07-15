export default {
  content: ['./src/**/*.{js,jsx}'],
  safelist: [
    'bg-accent',
    'bg-accent-hover',
    'bg-dark',
    'bg-dark-hover',
    'bg-light',
    'text-light',
    'text-accent',
    'text-alt',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        dark: 'var(--color-dark)',
        'dark-hover': 'var(--color-dark-hover)',
        light: 'var(--color-light)',
        alt: 'var(--color-alt)',
      },
    },
  },
};
