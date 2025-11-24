
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [hideNav, setHideNav] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      setScrolled(currentScroll > 50);
      
      if (window.innerWidth <= 768) {
        if (currentScroll > lastScroll && currentScroll > 100) {
          setHideNav(true);
        } else {
          setHideNav(false);
        }
      }
      
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[10000] transition-all duration-500 ${
        hideNav ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Premium Liquid Glass Navbar - Same height as logo */}
      <div className={`relative overflow-hidden py-3`}>
        {/* Main glass background with blur */}
        <div className="absolute inset-0 backdrop-blur-2xl"></div>
        
        {/* Frosted glass base */}
        <div className="absolute inset-0 bg-white/20 dark:bg-[#0A1236]/40"></div>
        
        {/* Premium glass layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/15 to-white/30 dark:from-white/10 dark:via-transparent dark:to-white/10"></div>
        
        {/* Glass shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-60"></div>
        
        {/* Top glass highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>
        
        {/* Inner glow */}
        <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_-1px_2px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]"></div>
        
        {/* Bottom glass edge */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center">
          {/* Logo - Big, matches navbar height */}
          <div className="relative h-30 w-70">
            <Image
              src="/images/logo.png"
              alt="ADEIPS Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            <li>
              <a
                href="#home"
                className="text-sm font-normal text-gray-800 dark:text-white hover:text-[#E62A2A] dark:hover:text-[#E62A2A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#E62A2A] after:transition-all hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="text-sm font-normal text-gray-800 dark:text-white hover:text-[#E62A2A] dark:hover:text-[#E62A2A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#E62A2A] after:transition-all hover:after:w-full"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#facilitators"
                className="text-sm font-normal text-gray-800 dark:text-white hover:text-[#E62A2A] dark:hover:text-[#E62A2A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#E62A2A] after:transition-all hover:after:w-full"
              >
                Facilitators
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="text-sm font-normal text-gray-800 dark:text-white hover:text-[#E62A2A] dark:hover:text-[#E62A2A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#E62A2A] after:transition-all hover:after:w-full"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="text-sm font-normal text-gray-800 dark:text-white hover:text-[#E62A2A] dark:hover:text-[#E62A2A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#E62A2A] after:transition-all hover:after:w-full"
              >
                Blog
              </a>
            </li>
          </ul>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center text-gray-800 dark:text-white hover:bg-white/30 dark:hover:bg-white/20 transition-all hover:rotate-180 duration-500 border border-white/20"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1 p-2"
              aria-label="Menu"
            >
              <span
                className={`w-5 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="relative z-10 md:hidden">
            <ul className="flex flex-col gap-5 mt-6 px-6 pb-6">
              <li>
                <a href="#home" className="text-sm font-normal text-gray-800 dark:text-white" onClick={() => setIsOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="text-sm font-normal text-gray-800 dark:text-white" onClick={() => setIsOpen(false)}>
                  Courses
                </a>
              </li>
              <li>
                <a href="#facilitators" className="text-sm font-normal text-gray-800 dark:text-white" onClick={() => setIsOpen(false)}>
                  Facilitators
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-sm font-normal text-gray-800 dark:text-white" onClick={() => setIsOpen(false)}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#blog" className="text-sm font-normal text-gray-800 dark:text-white" onClick={() => setIsOpen(false)}>
                  Blog
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

