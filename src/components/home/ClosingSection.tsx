'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Import the Lottie animation JSON
import publicSpeakingAnimation from '@/data/animations/public-speaking.json';

const spokenPhrases = [
  "You can speak.",
  "You can lead.",
  "You are phenomenal.",
  "You will inspire.",
  "Your voice matters.",
  "You are unstoppable.",
  "Speak your truth.",
  "Lead with purpose.",
];

// Fixed star positions to prevent hydration mismatch
const stars = [
  { id: 0, x: 15, y: 20, size: 1.5, delay: 0.5 },
  { id: 1, x: 85, y: 15, size: 2, delay: 1.2 },
  { id: 2, x: 45, y: 30, size: 1.2, delay: 0.8 },
  { id: 3, x: 75, y: 40, size: 1.8, delay: 1.5 },
  { id: 4, x: 25, y: 55, size: 1.3, delay: 0.3 },
  { id: 5, x: 60, y: 60, size: 2.2, delay: 2 },
  { id: 6, x: 10, y: 70, size: 1.6, delay: 1 },
  { id: 7, x: 90, y: 75, size: 1.4, delay: 1.8 },
  { id: 8, x: 35, y: 80, size: 2.1, delay: 0.7 },
  { id: 9, x: 70, y: 85, size: 1.7, delay: 2.3 },
  { id: 10, x: 50, y: 10, size: 1.9, delay: 1.3 },
  { id: 11, x: 20, y: 45, size: 1.1, delay: 0.9 },
  { id: 12, x: 80, y: 50, size: 2.3, delay: 1.6 },
  { id: 13, x: 40, y: 65, size: 1.5, delay: 2.1 },
  { id: 14, x: 65, y: 25, size: 1.8, delay: 0.4 },
  { id: 15, x: 30, y: 90, size: 1.4, delay: 1.7 },
  { id: 16, x: 55, y: 35, size: 2, delay: 1.1 },
  { id: 17, x: 12, y: 48, size: 1.6, delay: 2.2 },
  { id: 18, x: 88, y: 62, size: 1.3, delay: 0.6 },
  { id: 19, x: 42, y: 92, size: 1.9, delay: 1.4 },
];

export default function ClosingSection() {
  const containerRef = useRef(null);
  const lottieRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % spokenPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[var(--bg-secondary)] transition-colors duration-500">
      
      {/* ===== SUBTLE BACKGROUND FOR LIGHT/DARK ===== */}
      <div className="absolute inset-0">
        {/* Static gradient orbs - no animation for performance */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-white/50 dark:from-white/5 to-transparent blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-indigo-50 dark:from-white/3 to-transparent blur-3xl opacity-30" />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        
        {/* Lottie Animation with Single Floating Phrase */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Lottie Animation Container */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Single Floating Phrase - One at a time */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhrase}
                  className="absolute"
                  style={{ 
                    right: '-10%', 
                    top: '25%',
                  }}
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  animate={{ 
                    opacity: 1,
                    x: 20,
                    scale: 1,
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: 60, 
                    y: -20,
                    scale: 0.9 
                  }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <span className="text-xs md:text-sm font-light text-gray-500 dark:text-white/60 tracking-[0.15em] uppercase whitespace-nowrap">
                    {spokenPhrases[currentPhrase]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Lottie Player - Reduced size for better performance */}
            <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px]">
              <Lottie
                lottieRef={lottieRef}
                animationData={publicSpeakingAnimation}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            {/* Static glow behind animation */}
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-indigo-100/30 dark:from-indigo-500/10 via-transparent to-purple-100/20 dark:to-purple-500/5 blur-3xl opacity-40" />
          </motion.div>
        </div>

        {/* ===== LIQUID GLASS CTA WITH STARS ===== */}
        <motion.div
          className="relative mt-16 md:mt-20 w-full max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Glass container with starry background */}
          <div className="relative p-10 md:p-14 rounded-[2rem] backdrop-blur-2xl bg-[#0A1236] border border-white/10 overflow-hidden shadow-2xl">
            
            {/* Stars inside the CTA box - CSS animation for performance */}
            <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
              {stars.map((star) => (
                <div
                  key={star.id}
                  className="absolute rounded-full bg-white animate-twinkle"
                  style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    width: star.size,
                    height: star.size,
                    animationDelay: `${star.delay}s`,
                    opacity: 0.4,
                  }}
                />
              ))}
            </div>
            
            {/* Glass reflections */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-[2rem]" />
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/5 to-transparent" />

            <div className="relative z-10 text-center">
              <p className="text-white/40 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-3">
                Begin your transformation
              </p>
              
              <h2 className="font-outfit text-3xl md:text-5xl lg:text-6xl font-extralight text-white mb-5 tracking-tight">
                Your Stage Awaits
              </h2>
              
              <p className="text-white/40 text-sm md:text-base mb-10 font-light max-w-md mx-auto">
                Join the next generation of extraordinary communicators
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Premium Glimmering Button */}
                <Link
                  href="/enroll"
                  className="group relative px-12 py-4 rounded-full bg-white text-[#0A1236] font-medium text-center overflow-hidden transition-all duration-700 hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] hover:scale-[1.02]"
                >
                  <span className="relative z-10 text-sm tracking-wide">Begin Your Journey</span>
                  {/* CSS shimmer for performance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                </Link>
                
                {/* Liquid glass outline button */}
                <Link
                  href="/courses"
                  className="group relative px-12 py-4 rounded-full font-medium text-center transition-all duration-700 hover:scale-[1.02] overflow-hidden backdrop-blur-xl bg-white/5 border border-white/20 hover:border-white/40 hover:bg-white/10"
                >
                  <span className="relative z-10 text-white text-sm tracking-wide flex items-center justify-center gap-2">
                    Explore Programs
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 1.4 }}
        />
      </div>

      {/* CSS Animations for performance */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-200%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
