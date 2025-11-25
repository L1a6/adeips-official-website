
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

  if (!mounted) return null;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[10000] transition-all duration-500 ${hideNav ? '-translate-y-full' : 'translate-y-0'}`}>
      {/* TRUE Premium Liquid Glass Navbar - Standard height */}
      <div className="relative overflow-hidden h-[72px]">
        {/* Base glass with blur and saturation */}
        <div 
          className="absolute inset-0 backdrop-blur-lg"
          style={{
            backgroundColor: 'color-mix(in srgb, #bbbbbc 12%, transparent)',
            backdropFilter: 'blur(8px) saturate(150%)',
            WebkitBackdropFilter: 'blur(8px) saturate(150%)',
          }}
        ></div>
        
        {/* Complex glass shadows and highlights - NO WHITE EDGE */}
        <div 
          className="absolute inset-0 dark:hidden"
          style={{
            boxShadow: `
              inset 1.8px 3px 0px -2px color-mix(in srgb, white 90%, transparent),
              inset -2px -2px 0px -2px color-mix(in srgb, white 60%, transparent),
              inset -0.3px -1px 4px 0px color-mix(in srgb, black 8%, transparent),
              inset -1.5px 2.5px 0px -2px color-mix(in srgb, black 15%, transparent),
              inset 0px 3px 4px -2px color-mix(in srgb, black 15%, transparent),
              0px 1px 5px 0px color-mix(in srgb, black 10%, transparent),
              0px 6px 16px 0px color-mix(in srgb, black 8%, transparent)
            `,
          }}
        ></div>
        
        {/* Dark mode glass shadows - NO BORDER */}
        <div 
          className="hidden dark:block absolute inset-0"
          style={{
            backgroundColor: 'color-mix(in srgb, #bbbbbc 12%, transparent)',
            boxShadow: `
              inset 1.8px 3px 0px -2px color-mix(in srgb, white 27%, transparent),
              inset -2px -2px 0px -2px color-mix(in srgb, white 24%, transparent),
              inset -3px -8px 1px -6px color-mix(in srgb, white 18%, transparent),
              inset -0.3px -1px 4px 0px color-mix(in srgb, black 24%, transparent),
              inset -1.5px 2.5px 0px -2px color-mix(in srgb, black 40%, transparent),
              inset 0px 3px 4px -2px color-mix(in srgb, black 40%, transparent),
              inset 2px -6.5px 1px -4px color-mix(in srgb, black 20%, transparent),
              0px 1px 5px 0px color-mix(in srgb, black 20%, transparent),
              0px 6px 16px 0px color-mix(in srgb, black 16%, transparent)
            `,
          }}
        ></div>
        
        {/* Content Container */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center">
          {/* Logo - Slightly smaller than navbar for spacing */}
          <div className="relative h-[60px] w-60">
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
              <a href="#home" className="text-sm font-normal text-gray-800 dark:text-white hover:text-[#E62A2A] dark:hover:text-[#E62A2A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#E62A2A] after:transition-all hover:after:w-full">
                Home
              </a>
            </li>
            <li>
              <a href="#courses" className="text-sm font-normal text-gray-800 dark:text-white hover:text-[#E62A2A] dark:hover:text-[#E62A2A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#E62A2A] after:transition-all hover:after:w-full">
                Courses
              </a>
            </li>
            <li>
              <a href="#facilitators" className="text-sm font-normal text-gray-800 dark:text-white hover:text-[#E62A2A] dark:hover:text-[#E62A2A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#E62A2A] after:transition-all hover:after:w-full">
                Facilitators
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-sm font-normal text-gray-800 dark:text-white hover:text-[#E62A2A] dark:hover:text-[#E62A2A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#E62A2A] after:transition-all hover:after:w-full">
                Gallery
              </a>
            </li>
            <li>
              <a href="#blog" className="text-sm font-normal text-gray-800 dark:text-white hover:text-[#E62A2A] dark:hover:text-[#E62A2A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#E62A2A] after:transition-all hover:after:w-full">
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
              <span className={`w-5 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-5 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="relative md:hidden bg-white/90 dark:bg-[#0A1236]/90 backdrop-blur-xl">
          <ul className="flex flex-col gap-5 px-6 py-6">
            <li><a href="#home" className="text-sm font-normal text-gray-800 dark:text-white" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#courses" className="text-sm font-normal text-gray-800 dark:text-white" onClick={() => setIsOpen(false)}>Courses</a></li>
            <li><a href="#facilitators" className="text-sm font-normal text-gray-800 dark:text-white" onClick={() => setIsOpen(false)}>Facilitators</a></li>
            <li><a href="#gallery" className="text-sm font-normal text-gray-800 dark:text-white" onClick={() => setIsOpen(false)}>Gallery</a></li>
            <li><a href="#blog" className="text-sm font-normal text-gray-800 dark:text-white" onClick={() => setIsOpen(false)}>Blog</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

