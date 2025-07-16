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
  { href: '#projects', label: 'Projects' } /* 
  { href: '#feedback', label: 'Feedback' }, */,
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
    if (window.matchMedia('(min-width: 1024px)').matches) {
      gsap.fromTo(
        '[data-header]',
        { y: -150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'expo.out',
        }
      );
    }
  }, []);

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

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
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

        ScrollTrigger.create({
          trigger: '#projects',
          start: 'top top',
          pin: true,
          pinSpacing: false,
          id: 'pin-projects',
        });

        ScrollTrigger.refresh();
      }, 800);
    }
  };

  return (
    <header
      data-header
      className="fixed top-0 left-0 w-full bg-[var(--color-dark)] z-[1000] text-[var(--color-light)] shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Burger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

        <nav
          ref={navRef}
          className={clsx(
            'fixed top-0 left-0 w-full h-screen bg-[var(--color-dark)]  flex flex-col items-center justify-center gap-10 text-2xl font-semibold transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] md:flex md:flex-row md:h-auto md:py-0 md:px-0 md:bg-transparent md:text-xl md:gap-10 md:static md:translate-x-0 z-[1000]',
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
                'relative group px-2 py-1 transition-transform duration-300 uppercase',
                {
                  'text-[var(--color-light)] scale-110 pointer-events-none':
                    activeSection === href,
                  'hover:text-[var(--color-alt)] hover:scale-110':
                    activeSection !== href,
                }
              )}
            >
              <span className="inline-block">{label}</span>
              <span
                className={clsx(
                  'absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-alt)] transition-all duration-300 group-hover:w-full',
                  activeSection === href &&
                    'w-full h-[3px] bg-[var(--color-accent)]'
                )}
              />
              {activeSection === href && (
                <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-gradient-to-r from-[#FFD369] via-[#D52027] to-[#FFD369] animate-underline-slide" />
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
