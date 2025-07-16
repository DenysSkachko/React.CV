import React, { useState, useRef, useEffect } from 'react';
import {
  FaInstagram,
  FaTelegramPlane,
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsTwitter } from 'react-icons/bs';
import { animateHeroSection } from '../../animation/AnimatedHero';
import '../../styles/animation.css';

const socials = [
  { Icon: FaInstagram, url: 'https://instagram.com/denys.skachko' },
  { Icon: FaTelegramPlane, url: 'https://t.me/stormstyle' },
  { Icon: FaGithub, url: 'https://github.com/DenysSkachko' },
  { Icon: FaLinkedin, url: 'https://linkedin.com' },
  { Icon: SiGmail, url: 'mailto:denya.skachko@gmail.com' },
  { Icon: FaDiscord, url: 'https://discord.com' },
  { Icon: BsTwitter, url: 'https://twitter.com' },
];

const Hero = () => {
  const [showBgPhoto, setShowBgPhoto] = useState(false);

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const socialsRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowBgPhoto(false);
    }, 300);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowBgPhoto(true);
  };

  useEffect(() => {
    const cleanup = animateHeroSection(
      heroRef,
      titleRef,
      subtitleRef,
      socialsRef
    );
    return cleanup;
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="z-11 relative bg-[url('/back.png')] bg-cover bg-center min-h-screen px-6 flex flex-col items-center justify-center overflow-hidden bg-[var(--color-dark)] text-[var(--color-light)] select-none shadow-xl"
    >
      <div className="absolute w-[900px] h-[700px] top-[-200px] right-[-200px] z-0 blur-[160px] rounded-full mix-blend-lighten bg-[var(--color-accent)]/25" />

      <div
        className={`absolute transition-opacity duration-700 ease-in-out
        ${showBgPhoto ? 'opacity-100 scale-100' : 'opacity-0 scale-100'}
        left-1/3 top-[60%] -translate-x-1/2 -translate-y-1/2 z-0
        flex items-start justify-center pointer-events-none select-none`}
        style={{ width: '300px', maxWidth: '80vw' }}
      >
        <img
          src="./main-img.png"
          alt="Denys"
          className="w-full h-auto object-contain object-top scale-[1.55]"
          draggable={false}
        />
      </div>

      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center text-[var(--color-light)] space-y-6">
        <h1
          ref={titleRef}
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-5xl md:text-7xl font-bold cursor-default select-text"
        >
          <span
            className="cursor-pointer animate-float-slow z-10 relative group-hover:text-[var(--color-dark)] transition-all duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Denys
          </span>
          <span className="text-[var(--color-accent)] hover:scale-[1.1] hover:-rotate-[1deg] transition-transform duration-300">
            Skachko
          </span>
          <span className="relative group">
            <span className="z-10 relative group-hover:text-[var(--color-dark)] transition-all duration-300">
              / full-stack
            </span>
            <span className="absolute inset-0 rounded bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 -z-10" />
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="max-w-xl text-lg md:text-xl text-[var(--color-light)]/80 select-text pointer-events-none"
        >
          Crafting modern web interfaces
        </p>

        <div
          ref={socialsRef}
          className="flex flex-wrap max-w-[200px] justify-center sm:max-w-full gap-6 mt-4"
          aria-label="Social media links"
        >
          {socials.map(({ Icon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              data-social-icon
              className="text-[var(--color-light)] text-4xl transition-transform duration-300 hover:text-[var(--color-accent)] hover:scale-150"
              aria-label={`Link to ${url}`}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
