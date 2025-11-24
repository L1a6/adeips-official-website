
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg',
  '/images/hero/hero-4.jpg',
];

const words = ['impression', 'influence', 'impact', 'leadership', 'excellence', 'transformation'];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [displayedWord, setDisplayedWord] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const word = words[currentWord];
    let charIndex = 0;

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (charIndex <= word.length) {
          setDisplayedWord(word.slice(0, charIndex));
          charIndex++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
            setIsTyping(true);
          }, 2000);
          clearInterval(typingInterval);
        }
      }, 100);
      return () => clearInterval(typingInterval);
    }
  }, [currentWord, isTyping]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Image Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide}
              alt={`Hero slide ${index + 1}`}
              fill
              className="object-cover scale-110"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1236]/60 via-[#0A1236]/50 to-[#0A1236]/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-5xl px-6">
          <p className="text-xs md:text-sm font-normal tracking-[0.3em] uppercase text-white/90 mb-6 animate-[fadeInUp_1.2s_ease_0.3s_both]">
            Welcome to ADEIPS
          </p>

          <h1 className="font-outfit text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-white mb-8 tracking-tight leading-[1.15] animate-[fadeInUp_1.8s_ease_0.8s_both]">
            Master The Art Of Persuasive Communication
          </h1>

          {/* Typing Effect - Cursor follows text */}
          <div className="font-outfit text-base sm:text-lg md:text-xl lg:text-2xl font-light italic text-white/95 mb-12 whitespace-nowrap animate-[fadeInUp_1.8s_ease_1.2s_both]">
            ...from expression to <span className="font-medium">{displayedWord}<span className="inline-block w-0.5 h-[1em] bg-white ml-0.5 align-middle animate-blink"></span></span>
          </div>

          {/* CTA Buttons - Liquid Glass */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-[fadeInUp_1.2s_ease_1.2s_both]">
            <a href="#enroll" className="group relative px-10 py-4 rounded-full text-sm font-medium text-white transition-all duration-400 hover:-translate-y-0.5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E62A2A]/70 via-[#E62A2A]/50 to-[#E62A2A]/70 backdrop-blur-md"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              <div className="absolute inset-[1px] rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50"></div>
              <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] group-hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_8px_24px_rgba(230,42,42,0.3)] transition-shadow duration-400"></div>
              <span className="relative z-10">Enroll for Next Cohort</span>
            </a>
            <a href="#courses" className="group relative px-10 py-4 rounded-full text-sm font-medium text-white transition-all duration-400 hover:-translate-y-0.5 overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              <div className="absolute inset-[1px] rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-40"></div>
              <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/40 group-hover:border-white/60 group-hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_8px_24px_rgba(255,255,255,0.15)] transition-all duration-400"></div>
              <span className="relative z-10">Explore Programs</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}

