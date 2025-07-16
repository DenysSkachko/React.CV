import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="z-99 fixed bottom-4 right-4 w-12 h-12 rounded-full bg-[var(--color-accent)] text-[var(--color-light)] flex items-center justify-center shadow-lg hover:bg-[var(--color-accent-hover)] transition"
    >
      {theme === 'dark' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <circle cx="12" cy="12" r="5" strokeWidth="2" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 5.05l-1.414-1.414M6.464 6.464L5.05 5.05m12.9 0l-1.414 1.414M6.464 17.536l-1.414 1.414"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
