import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="z-99 fixed bottom-4 right-4 px-4 py-2 rounded bg-[var(--color-accent)] text-[var(--color-light)] font-bold shadow-lg hover:bg-[var(--color-accent-hover)] transition"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
