'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
  {
    id: 1,
    image: '/images/testimonials/enroll-3.jpg',
    name: 'Edidiong Atainyang',
    role: 'BGS, 11th Cohort.',
    quote: 'ADEIPS transformed me from a nervous presenter into a confident keynote speaker. The techniques I learned here changed my entire career trajectory.',
  },
  {
    id: 2,
    image: '/images/testimonials/enroll-2.jpg',
    name: 'Idy Xavier',
    role: 'Public Speaker',
    quote: 'From stage fright to TEDx stages. The facilitators truly understand the psychology of impactful communication.',
  },
  {
    id: 3,
    image: '/images/testimonials/enroll-1.jpg',
    name: 'Uduakabasi Etuk',
    role: 'Computer Engineer and Public Speaker',
    quote: 'The most transformative 10 weeks of my professional life. Every session pushed me beyond what I thought possible.',
  },
  {
    id: 4,
    image: '/images/testimonials/enroll-6.jpg',
    name: 'Regina Edem',
    role: 'Administrative Lead, ADEIPS',
    quote: 'I went from avoiding presentations to actively seeking speaking opportunities. The supportive community made all the difference.',
  },
  {
    id: 5,
    image: '/images/testimonials/enroll-4.jpg',
    name: 'Mary Edoho',
    role: 'Startup Founder',
    quote: 'ADEIPS gave me the confidence to pitch to Fortune 500 companies. The persuasion techniques were game-changing.',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=450&q=80',
    name: 'James Wilson',
    role: 'Award-Winning Orator',
    quote: 'The storytelling frameworks helped me win a national oratory competition. This institute is world-class.',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=450&q=80',
    name: 'Linda Adeyemi',
    role: 'Marketing Director',
    quote: 'My presentations now command attention. The transformation in my confidence has been remarkable.',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=450&q=80',
    name: 'Robert Nwankwo',
    role: 'Executive Coach',
    quote: 'ADEIPS equipped me with skills I now use to train other leaders. The investment paid for itself many times over.',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=450&q=80',
    name: 'Grace Obi',
    role: 'Legal Counsel',
    quote: 'My courtroom presentations have never been more persuasive. The techniques are applicable across all professional contexts.',
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=450&q=80',
    name: 'Daniel Thompson',
    role: 'Sales Director',
    quote: 'Our team revenue increased by 40% after I applied what I learned. Communication is everything in sales.',
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=450&q=80',
    name: 'Angela Eze',
    role: 'University Lecturer',
    quote: 'My students are more engaged than ever. ADEIPS taught me how to truly connect with an audience.',
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=450&q=80',
    name: 'Christopher Uche',
    role: 'Tech Entrepreneur',
    quote: 'Investor pitches became my strength after ADEIPS. The program gave me the tools to communicate my vision effectively.',
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const doubledTestimonials = [...testimonials, ...testimonials];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const isMobile = window.innerWidth < 768;
      const scrollAmount = isMobile ? 260 : 380;
      const newScroll = scrollRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollRef.current.scrollTo({ left: newScroll, behavior: 'smooth' });
      
      setIsPaused(true);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 2000);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let lastTime = Date.now();

    const animate = () => {
      if (!isPaused && scrollContainer) {
        const currentTime = Date.now();
        const delta = currentTime - lastTime;
        
        scrollContainer.scrollLeft += (delta / 1000) * 50;

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
        
        lastTime = currentTime;
      } else {
        lastTime = Date.now();
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [isPaused]);

  return (
    <section className="section-spacing bg-[var(--bg-primary)] overflow-hidden">
      <div className="container-custom mb-8 md:mb-16">
        <h2 className="font-outfit text-3xl md:text-5xl lg:text-6xl font-extralight text-[var(--adeips-navy)] dark:text-[var(--text-primary)] text-center mb-3 md:mb-4 tracking-tight opacity-0 animate-fade-in-up">
          Voices of Transformation
        </h2>
        <p className="text-center text-[var(--text-secondary)] text-base md:text-lg opacity-0 animate-fade-in animate-delay-200 px-4">
          Alumni who discovered their authentic voice at ADEIPS
        </p>
      </div>

      <div className="relative">
        {/* Liquid Glass Navigation Arrows */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          }}
          aria-label="Scroll left"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 text-[var(--adeips-navy)] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          }}
          aria-label="Scroll right"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 text-[var(--adeips-navy)] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-scroll scrollbar-hide px-4 md:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredCard(null);
          }}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
            pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 3000);
          }}
        >
          {doubledTestimonials.map((testimonial, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => setHoveredCard(index)}
              className="group relative w-[240px] h-[320px] md:w-[340px] md:h-[440px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                sizes="(max-width: 768px) 240px, 340px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Content overlay - shows on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-[#0A1F44]/95 via-[#0A1F44]/70 to-[#0A1F44]/20 flex flex-col justify-end p-4 md:p-6 transition-all duration-500 ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-white text-sm md:text-base mb-3 md:mb-4 leading-relaxed font-light line-clamp-3">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mb-3">
                  <h4 className="text-white font-semibold text-base md:text-lg">{testimonial.name}</h4>
                  <p className="text-white/80 text-xs md:text-sm">{testimonial.role}</p>
                </div>
                
                {/* Read More Link */}
                <Link 
                  href={`/testimonials#${testimonial.id}`}
                  className="inline-flex items-center gap-2 text-white/90 text-xs md:text-sm font-medium hover:text-white transition-colors group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Read Full Story</span>
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Default state with name at bottom */}
              <div 
                className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-[#0A1F44]/90 to-transparent transition-opacity duration-400 ${
                  hoveredCard === index ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <h4 className="text-white font-semibold text-base md:text-lg">{testimonial.name}</h4>
                <p className="text-white/80 text-xs md:text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}