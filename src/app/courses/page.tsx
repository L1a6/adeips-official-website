'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const courseModules = [
  {
    id: 1,
    title: 'Cognitive Architecture of Opening - Closing For Impact',
    description: 'An advanced exploration of how memory sequencing, psychological anchoring, and impression hierarchies shape audience retention and persuasion.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Executive Presence and High Impact Platform Dynamics',
    description: 'Mastery of stage psychology, kinaesthetic communication, posture engineering, and audience synchronization strategies for commanding any room.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Linguistic Precision and Advanced Standard English Competence',
    description: 'Intensive training in phonological accuracy, syntactic refinement, strategic diction, and professional articulation for elite communicators.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Neurocognitive Memory Optimisation for Orators',
    description: 'Cutting edge memory enhancement systems, retrieval pathways, and content internalization frameworks tailored for high pressure speaking environments.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Structural Transition Mechanics and Rhetorical Flow Design',
    description: 'Techniques for engineering seamless narrative progression, conceptual linkage, and logical coherence in extended presentations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Applied Psychophysiology of Confidence and Stage Anxiety Dissolution',
    description: 'A scientific, stepwise methodology for deconstructing performance anxiety using behavioral conditioning, cognitive reframing, and somatic control.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 7,
    title: 'Vocal Engineering and Acoustic Expression Mastery',
    description: 'Development of tonal modulation, breath economy, resonance control, pacing intelligence, and expressive vocal architecture.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )
  },
  {
    id: 8,
    title: 'Global Communication Protocols and Universal Laws of Public Speaking',
    description: 'Examination of internationally recognized principles, cross cultural speaking protocols, and the ethics of global public discourse.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 9,
    title: 'Strategic Oratory Design and High Level Speech Structuring',
    description: 'Frameworks for conceptual mapping, narrative construction, intellectual layering, and persuasive message engineering.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    id: 10,
    title: 'Applied Executive Speechcraft Laboratory',
    description: 'Practical development of professional speech formats including ceremonial texts, leadership addresses, technical presentations, persuasive pitches, valedictory frameworks, eulogic constructs, and formal institutional communications.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A1236] pt-24">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1236]/95 via-[#0A1236]/90 to-[#0A1236]/95 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-4.jpg"
            alt="Courses"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase text-white/90 mb-4"
          >
            Our Curriculum
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-outfit text-4xl md:text-6xl font-extralight text-white tracking-tight mb-6"
          >
            Enhanced Professional Course Modules
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            A structured, step-by-step system designed to transform beginners into compelling, confident public speakers through advanced methodologies and elite training protocols.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {courseModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100 dark:border-gray-800">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#0A1236]/5 to-transparent dark:from-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0A1236] to-[#0A1236]/80 dark:from-white dark:to-gray-200 flex items-center justify-center text-white dark:text-[#0A1236] group-hover:scale-110 transition-transform duration-500">
                      {module.icon}
                    </div>
                    <div className="flex-1">
                      <span className="inline-block text-sm font-medium text-[#0A1236] dark:text-gray-400 mb-2">
                        Module {module.id}
                      </span>
                      <h3 className="font-outfit text-xl md:text-2xl font-medium text-gray-900 dark:text-white leading-tight mb-4">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {module.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0A1236] to-[#0A1236]/90 dark:from-gray-900 dark:to-gray-800 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-outfit text-3xl md:text-5xl font-light text-white mb-6">
              Begin Your Transformation
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the elite ranks of ADEIPS graduates who command stages, influence decisions, and inspire change through the power of exceptional public speaking.
            </p>
            <Link
              href="/enroll"
              className="inline-block px-10 py-5 rounded-full text-sm font-medium text-[#0A1236] bg-white hover:bg-gray-100 transition-all duration-400 hover:-translate-y-0.5 shadow-2xl hover:shadow-white/20"
            >
              Enroll Now
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}