'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  {
    id: 1,
    title: 'Foundations of Public Speaking',
    level: 'Beginner',
    duration: '6 Weeks',
    description: 'Build confidence and master the fundamentals of effective public speaking. Perfect for those starting their communication journey.',
    features: ['Voice projection techniques', 'Body language mastery', 'Overcoming stage fright', 'Speech structure basics'],
    image: '/images/hero/hero-1.jpg'
  },
  {
    id: 2,
    title: 'Advanced Executive Communication',
    level: 'Advanced',
    duration: '8 Weeks',
    description: 'Elevate your leadership presence with advanced communication strategies designed for executives and senior professionals.',
    features: ['Strategic messaging', 'Board presentation skills', 'Crisis communication', 'Media handling'],
    image: '/images/hero/hero-2.jpg'
  },
  {
    id: 3,
    title: 'Corporate Training Programs',
    level: 'All Levels',
    duration: 'Customizable',
    description: 'Tailored corporate training solutions to enhance team communication, leadership skills, and organizational effectiveness.',
    features: ['Team workshops', 'Leadership seminars', 'Presentation training', 'Custom curriculum'],
    image: '/images/hero/hero-3.jpg'
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A1236] pt-24">
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
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
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase text-white/90 mb-4"
          >
            Our Programs
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-outfit text-4xl md:text-6xl font-extralight text-white tracking-tight mb-6"
          >
            Transform Through Learning
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white/90 max-w-2xl mx-auto"
          >
            Comprehensive programs designed to develop world-class communicators at every level
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-16">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative h-[400px] rounded-3xl overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1236]/60 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <span className="inline-block px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-[#0A1236] text-sm font-medium">
                        {course.level}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h2 className="font-outfit text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">
                    {course.title}
                  </h2>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">{course.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {course.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <div className="w-6 h-6 rounded-full bg-[#0A1236]/10 dark:bg-white/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-[#0A1236] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/enroll"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-white bg-[#0A1236] dark:bg-white dark:text-[#0A1236] hover:bg-[#0A1236]/90 dark:hover:bg-gray-100 transition-all duration-400 hover:-translate-y-0.5 shadow-lg"
                  >
                    Enroll Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-outfit text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-6">
              Not Sure Which Program is Right for You?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our team to discuss your goals and find the perfect program to match your needs.
            </p>
            <Link
              href="/enroll"
              className="inline-block px-8 py-4 rounded-full text-sm font-medium text-white bg-[#0A1236] dark:bg-white dark:text-[#0A1236] hover:bg-[#0A1236]/90 dark:hover:bg-gray-100 transition-all duration-400 hover:-translate-y-0.5 shadow-lg"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}