import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';
import { HiMenu, HiX } from 'react-icons/hi';
import '../styles/animation.css';

gsap.registerPlugin(ScrollTrigger);

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
];

const Burger = ({ isOpen, toggle }) => (
  <button
    aria-label="Toggle Menu"
    onClick={toggle}
    className="md:hidden text-[var(--color-light)] z-[1001] text-3xl"
  >
    {isOpen ? <HiX /> : <HiMenu />}
  </button>
);

const Header = () => {
  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState('#home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    links.forEach(({ href }) => {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (!el) return;

      ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(href),
        onEnterBack: () => setActiveSection(href),
      });
    });
  }, []);

  const jumpToSection = (href) => {
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    ScrollTrigger.getAll()
      .filter((t) => t.vars?.id?.startsWith('pin-'))
      .forEach((t) => t.kill());

    targetEl.scrollIntoView({ behavior: 'smooth' });

    setActiveSection(href);
    setIsOpen(false);

    if (window.matchMedia('(min-width: 1024px)').matches) {
      setTimeout(() => {
        ScrollTrigger.create({
          trigger: '#about',
          start: 'bottom bottom',
          pin: true,
          pinSpacing: false,
          id: 'pin-about',
        });

        ScrollTrigger.create({
          trigger: '#skills',
          start: 'top top',
          pin: true,
          pinSpacing: false,
          id: 'pin-skills',
        });

        ScrollTrigger.refresh();
      }, 800);
    }
  };

  return (
    <header
      data-header
      className="fixed top-0 left-0 w-full bg-[var(--color-accent)] z-[1000] text-[var(--color-light)] shadow-lg backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Burger */}
        <Burger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

        {/* Navigation */}
        <nav
          ref={navRef}
          className={clsx(
            'fixed top-0 left-0 w-full h-screen bg-[var(--color-accent)] flex flex-col items-center justify-center gap-6 text-2xl font-semibold transition-transform duration-500 ease-in-out md:flex md:flex-row md:h-auto md:py-0 md:px-0 md:bg-transparent md:text-xl md:gap-8 md:static md:translate-x-0 z-[1000]',
            {
              'translate-x-0': isOpen,
              'translate-x-full md:translate-x-0': !isOpen,
            }
          )}
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                jumpToSection(href);
              }}
              className={clsx(
                'relative px-6 py-2 rounded-xl uppercase font-medium transition-all duration-300 text-[var(--color-light)]',
                {
                  'bg-[var(--color-dark)] text-white scale-105 pointer-events-none':
                    activeSection === href,
                  'hover:bg-[var(--color-light)] hover:text-[var(--color-dark)] hover:scale-105':
                    activeSection !== href,
                }
              )}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
