'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function TransformSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    }
  };
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Certifications',
      description: 'Industry-recognized credentials that elevate your professional profile',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Alumni Network',
      description: 'Join 500+ influential leaders transforming industries worldwide',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Expert Mentorship',
      description: 'Learn from world-class facilitators with decades of stage experience',
    },
  ];

  return (
    <section ref={ref} className="section-spacing bg-[var(--bg-primary)]">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="font-outfit text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--adeips-navy)] dark:text-[var(--text-primary)] mb-6 tracking-tight"
          >
            Transform Your Voice, Transform Your Impact
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-[var(--text-secondary)] max-w-4xl mx-auto font-light leading-relaxed"
          >
            The AkanDavid Executive Institute of Public Speaking is Nigeria's premier executive training institute dedicated to developing world-class communicators. Through our comprehensive 10-week program, we equip professionals with the confidence, techniques, and stage presence to command any room.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative p-8 bg-gradient-to-br from-[var(--adeips-navy)] to-[var(--adeips-blue)] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--adeips-navy)]/20 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--adeips-red)]/0 to-[var(--adeips-red)]/0 group-hover:from-[var(--adeips-red)]/10 group-hover:to-[var(--adeips-red)]/5 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/80 font-light leading-relaxed">{item.description}</p>
              </div>

              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-[var(--bg-secondary)] rounded-3xl p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-outfit text-3xl md:text-4xl font-light text-[var(--adeips-navy)] dark:text-[var(--text-primary)] mb-6 tracking-tight">
                A Message from the Chancellor
              </h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                "At ADEIPS, we believe that every voice has the power to inspire, influence, and transform. Our mission is to unlock that power within you."
              </p>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                "Through personalized coaching, proven methodologies, and a supportive community, we've helped over 500 professionals discover their authentic speaking voice and achieve remarkable career breakthroughs."
              </p>
              <p className="text-[var(--adeips-navy)] dark:text-[var(--text-primary)] font-medium">
                Pharm. Akan David
              </p>
              <p className="text-sm text-[var(--text-secondary)]">Chancellor, ADEIPS</p>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover"
                controls
                poster="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80"
              >
                <source src="/images/chancellor-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}