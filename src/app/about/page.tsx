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
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
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

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#E62A2A]/10 to-[#E62A2A]/5 dark:from-[#E62A2A]/20 dark:to-[#E62A2A]/10"
          >
            <div className="w-16 h-16 rounded-full bg-[#E62A2A]/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#E62A2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-outfit text-2xl font-medium text-gray-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To empower individuals with exceptional public speaking skills that transform their personal and professional lives, enabling them to communicate with confidence, clarity, and impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#0A1236]/10 to-[#0A1236]/5 dark:from-[#0A1236]/30 dark:to-[#0A1236]/20"
          >
            <div className="w-16 h-16 rounded-full bg-[#0A1236]/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#0A1236] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-outfit text-2xl font-medium text-gray-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To be Africa's premier institution for public speaking excellence, producing world-class communicators who lead with influence and inspire positive change across all sectors.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-outfit text-3xl md:text-4xl font-light text-gray-900 dark:text-white text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Excellence', description: 'We maintain the highest standards in training and facilitation.' },
              { title: 'Integrity', description: 'We operate with honesty, transparency, and ethical conduct.' },
              { title: 'Innovation', description: 'We continuously evolve our methods to meet modern needs.' },
              { title: 'Empowerment', description: 'We equip individuals to reach their full potential.' },
              { title: 'Impact', description: 'We measure success by the transformation we create.' },
              { title: 'Community', description: 'We build lasting relationships and networks.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#E62A2A]/50 dark:hover:border-[#E62A2A]/50 transition-all duration-300"
              >
                <h4 className="font-outfit text-xl font-medium text-gray-900 dark:text-white mb-3">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{value.description}</p>
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
              className="px-8 py-4 rounded-full text-sm font-medium text-white bg-[#E62A2A] hover:bg-[#D12020] transition-all duration-400 hover:-translate-y-0.5 shadow-lg"
            >
              Leadership Team
            </Link>
            <Link
              href="/about/facilitators"
              className="px-8 py-4 rounded-full text-sm font-medium text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-[#E62A2A] dark:hover:border-[#E62A2A] transition-all duration-400"
            >
              Our Facilitators
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

// Note: Install framer-motion: npm install framer-motion