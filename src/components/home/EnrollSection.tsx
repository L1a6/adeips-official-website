'use client';

import Image from 'next/image';

export default function EnrollSection() {
  return (
    <section id="enroll" className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/enroll.jpg"
          alt="Join ADEIPS"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44]/60 via-[#1E3A8A]/55 to-[#0A1F44]/60" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-6">
          <h2 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-6 tracking-tight leading-[1.15] opacity-0 animate-fade-in-up">
            Join Our 14th Cohort
          </h2>
          
          <p className="text-lg md:text-xl text-white/95 mb-10 font-light leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            Limited spots available for ambitious communicators ready to transform their speaking skills. Applications close soon for our intensive 10-week program.
          </p>

          <div className="opacity-0 animate-scale-in animate-delay-400">
            <a
              href="#"
              className="inline-block px-10 py-4 rounded-full text-sm font-medium bg-[var(--adeips-red)] text-white transition-all duration-400 hover:bg-[#B91C1C] hover:-translate-y-0.5 shadow-lg hover:shadow-xl hover:shadow-red-500/30"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}