'use client';

import { useRef, useState, useEffect } from 'react';
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

export default function ClosingSection() {
  const containerRef = useRef(null);
  const lottieRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [stars, setStars] = useState<Array<{id: number; x: number; y: number; size: number; delay: number}>>([]);

  useEffect(() => {
    // Generate stars for CTA box only
    const generatedStars = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }));
    setStars(generatedStars);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % spokenPhrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      
      {/* ===== SUBTLE BACKGROUND FOR LIGHT/DARK ===== */}
      <div className="absolute inset-0">
        {/* Soft gradient orbs - very subtle */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-gray-100 dark:from-white/5 to-transparent blur-3xl opacity-60"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-gray-50 dark:from-white/3 to-transparent blur-3xl opacity-50"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        
        {/* Lottie Animation with Floating Phrases */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Lottie Animation Container */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Floating Phrases - Tiny, elegant, appearing from animation area */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhrase}
                  className="absolute"
                  style={{ 
                    right: '-10%', 
                    top: '25%',
                  }}
                  initial={{ opacity: 0, x: -20, y: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: [0, 0.8, 0.8, 0],
                    x: [-20, 10, 40, 80],
                    y: [0, -10, -25, -45],
                    scale: [0.8, 1, 1, 0.9],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <span className="text-xs md:text-sm font-light text-gray-500 dark:text-white/50 tracking-[0.15em] uppercase whitespace-nowrap">
                    {spokenPhrases[currentPhrase]}
                  </span>
                </motion.div>
              </AnimatePresence>
              
              {/* Subtle echo trails */}
              {[1, 2].map((offset) => (
                <motion.div
                  key={`trail-${offset}`}
                  className="absolute text-[9px] md:text-[10px] font-extralight tracking-[0.12em] uppercase whitespace-nowrap"
                  style={{ 
                    right: `${-15 - offset * 4}%`, 
                    top: `${28 + offset * 3}%`,
                  }}
                  animate={{
                    opacity: [0, 0.25, 0],
                    x: [0, 25 + offset * 12, 60 + offset * 20],
                    y: [0, -8 - offset * 5, -20 - offset * 10],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.2,
                    delay: offset * 0.9,
                    ease: 'easeOut',
                  }}
                >
                  <span className="text-gray-400 dark:text-white/25">
                    {spokenPhrases[(currentPhrase + offset) % spokenPhrases.length]}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Lottie Player */}
            <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px]">
              <Lottie
                lottieRef={lottieRef}
                animationData={publicSpeakingAnimation}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            {/* Subtle glow behind animation */}
            <motion.div 
              className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-indigo-100/30 dark:from-indigo-500/10 via-transparent to-purple-100/20 dark:to-purple-500/5 blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Subtle floating particles around animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-gray-300/50 dark:bg-white/15"
                style={{
                  left: `${20 + (i % 4) * 18}%`,
                  top: `${15 + Math.floor(i / 4) * 50}%`,
                }}
                animate={{
                  y: [0, -25, 0],
                  x: [0, (i % 2 === 0 ? 10 : -10), 0],
                  opacity: [0.15, 0.4, 0.15],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5 + i * 0.4,
                  delay: i * 0.3,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
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
            
            {/* Stars inside the CTA box */}
            <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
              {stars.map((star) => (
                <motion.div
                  key={star.id}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    width: star.size,
                    height: star.size,
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5 + Math.random() * 2,
                    delay: star.delay,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
            
            {/* Glass reflections */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-[2rem]" />
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/5 to-transparent"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
            
            {/* Shimmering effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
              style={{ width: '40%' }}
            />

            <div className="relative z-10 text-center">
              <motion.p
                className="text-white/40 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Begin your transformation
              </motion.p>
              
              <motion.h2 
                className="font-outfit text-3xl md:text-5xl lg:text-6xl font-extralight text-white mb-5 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Your Stage Awaits
              </motion.h2>
              
              <motion.p
                className="text-white/40 text-sm md:text-base mb-10 font-light max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                Join the next generation of extraordinary communicators
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {/* Premium Glimmering Button */}
                <Link
                  href="/enroll"
                  className="group relative px-12 py-4 rounded-full bg-white text-[#0A1236] font-medium text-center overflow-hidden transition-all duration-700 hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] hover:scale-[1.02]"
                >
                  <span className="relative z-10 text-sm tracking-wide">Begin Your Journey</span>
                  {/* Multi-layer glimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                    style={{ width: '50%' }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100/40 to-transparent"
                    animate={{ x: ['200%', '-200%'] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'linear', delay: 0.5 }}
                    style={{ width: '30%' }}
                  />
                </Link>
                
                {/* Liquid glass outline button */}
                <Link
                  href="/courses"
                  className="group relative px-12 py-4 rounded-full font-medium text-center transition-all duration-700 hover:scale-[1.02] overflow-hidden backdrop-blur-xl bg-white/5 border border-white/20 hover:border-white/40 hover:bg-white/10"
                >
                  <span className="relative z-10 text-white text-sm tracking-wide flex items-center justify-center gap-2">
                    Explore Programs
                    <motion.svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </span>
                  {/* Subtle shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                  />
                </Link>
              </motion.div>
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
    </section>
  );
}
