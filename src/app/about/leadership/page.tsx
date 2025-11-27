'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { leadershipTeam } from '@/data/leadership';

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A1236] pt-24">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1236]/95 via-[#0A1236]/90 to-[#0A1236]/95 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-3.jpg"
            alt="Leadership"
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
            Our Leadership
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-outfit text-4xl md:text-6xl font-extralight text-white tracking-tight"
          >
            Guiding Excellence
          </motion.h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our leadership team brings together decades of experience in education, communication, and organizational excellence. They are the visionaries driving ADEIPS forward.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {leadershipTeam.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100 dark:border-gray-800">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-outfit text-2xl font-medium text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-[#0A1236] dark:text-gray-400 mb-4 tracking-wide uppercase">
                    {member.title}
                  </p>
                  {member.bio && (
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {member.bio}
                    </p>
                  )}
                </div>

                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#0A1236]/10 to-transparent dark:from-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}