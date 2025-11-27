'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A1236] pt-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1236]/90 via-[#0A1236]/80 to-[#0A1236]/90 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-1.jpg"
            alt="About ADEIPS"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase text-white/90 mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-outfit text-4xl md:text-6xl font-extralight text-white tracking-tight"
          >
            Redefining Excellence In Public Speaking
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-outfit text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The Executive Institute of Public Speaking (ADEIPS) was founded with a singular vision: to transform individuals into confident, articulate, and influential communicators.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We believe that effective communication is the cornerstone of leadership, success, and societal impact. Our comprehensive programs are designed to equip participants with the skills, confidence, and techniques needed to excel in any speaking environment.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              From boardroom presentations to public addresses, ADEIPS prepares you to command attention, inspire action, and leave lasting impressions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/hero/hero-2.jpg"
              alt="ADEIPS Experience"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Mission & Vision - PREMIUM REDESIGN */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 p-10 h-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0A1236]/5 to-transparent dark:from-white/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A1236] to-[#0A1236]/80 dark:from-white dark:to-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white dark:text-[#0A1236]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-outfit text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  To empower individuals with exceptional public speaking skills that transform their personal and professional lives, enabling them to communicate with confidence, clarity, and impact.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 p-10 h-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0A1236]/5 to-transparent dark:from-white/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A1236] to-[#0A1236]/80 dark:from-white dark:to-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white dark:text-[#0A1236]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-outfit text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  To be Africa's premier institution for public speaking excellence, producing world-class communicators who lead with influence and inspire positive change across all sectors.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values - PREMIUM REDESIGN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-outfit text-3xl md:text-4xl font-light text-gray-900 dark:text-white text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Excellence', 
                description: 'We maintain the highest standards in training and facilitation.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
              { 
                title: 'Integrity', 
                description: 'We operate with honesty, transparency, and ethical conduct.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: 'Innovation', 
                description: 'We continuously evolve our methods to meet modern needs.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              { 
                title: 'Empowerment', 
                description: 'We equip individuals to reach their full potential.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              { 
                title: 'Impact', 
                description: 'We measure success by the transformation we create.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                )
              },
              { 
                title: 'Community', 
                description: 'We build lasting relationships and networks.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A1236]/5 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#0A1236]/10 dark:bg-white/10 flex items-center justify-center mb-5 text-[#0A1236] dark:text-white group-hover:scale-110 transition-transform duration-500">
                      {value.icon}
                    </div>
                    <h4 className="font-outfit text-xl font-medium text-gray-900 dark:text-white mb-3">{value.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-outfit text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-6">
            Meet Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover the dedicated professionals who make ADEIPS a center of excellence in public speaking education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/leadership"
              className="px-8 py-4 rounded-full text-sm font-medium text-white bg-[#0A1236] dark:bg-white dark:text-[#0A1236] hover:bg-[#0A1236]/90 dark:hover:bg-gray-100 transition-all duration-400 hover:-translate-y-0.5 shadow-lg"
            >
              Leadership Team
            </Link>
            <Link
              href="/about/facilitators"
              className="px-8 py-4 rounded-full text-sm font-medium text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-[#0A1236] dark:hover:border-white transition-all duration-400"
            >
              Our Facilitators
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}