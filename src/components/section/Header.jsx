import React, { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import clsx from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Logo from '../shared/Logo'
import { links } from '../../data/navLinks'
import HeaderSocial from '../shared/HeaderSocial'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const [activeSection, setActiveSection] = useState('#home')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    links.forEach(({ href }) => {
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (!el) return

      ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(href),
        onEnterBack: () => setActiveSection(href),
      })
    })
  }, [])

  const jumpToSection = (href) => {
    const targetId = href.replace('#', '')
    const targetEl = document.getElementById(targetId)
    if (!targetEl) return

    ScrollTrigger.getAll()
      .filter((t) => t.vars?.id?.startsWith('pin-'))
      .forEach((t) => t.kill())

    targetEl.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(href)
    setIsOpen(false)

    if (window.matchMedia('(min-width: 1024px)').matches) {
      setTimeout(() => {
        ScrollTrigger.create({
          trigger: '#about',
          start: 'bottom bottom',
          pin: true,
          pinSpacing: false,
          id: 'pin-about',
        })
        ScrollTrigger.create({
          trigger: '#skills',
          start: 'top top',
          pin: true,
          pinSpacing: false,
          id: 'pin-skills',
        })
        ScrollTrigger.refresh()
      }, 800)
    }
  }

  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 max-w-5xl w-full bg-transparent border border-dark-hover z-[1000] text-light rounded-md shadow-lg backdrop-blur-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-dark backdrop-blur-lg rounded-md pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-start md:justify-center">
        <Logo />
        <HeaderSocial />

        <nav className="hidden md:flex gap-8 text-xl font-semibold">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault()
                jumpToSection(href)
              }}
              className={clsx(
                'relative px-3 py-2 rounded-xl text-sm uppercase font-medium transition-all duration-300 focus:outline-none',
                'border border-dark-hover',
                activeSection === href ? 'bg-dark-hover text-light' : 'text-light hover:bg-accent hover:text-white hover:border-light'
              )}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="relative justify-start">
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-light z-[1001] text-3xl p-2"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          {isOpen && (
            <div className="absolute left-0 mt-6 w-40 bg-dark/80 border border-dark-hover rounded-lg shadow-lg flex md:hidden flex-col gap-2 p-3 z-[1000] backdrop-blur-md">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault()
                    jumpToSection(href)
                  }}
                  className={clsx('px-3 py-2 rounded-md font-medium transition-colors hover:bg-dark-hover ', {
                    'bg-accent pointer-events-none': activeSection === href,
                  })}
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
