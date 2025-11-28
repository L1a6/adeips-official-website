'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SiteSettings {
  registration_open: boolean;
  current_cohort: number;
  cohort_message: string;
}

function getOrdinalSuffix(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

export default function EnrollSection() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      if (data.settings) {
        setSettings(data.settings);
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  };

  const getCohortTitle = () => {
    if (settings?.current_cohort) {
      return `Join Our ${settings.current_cohort}${getOrdinalSuffix(settings.current_cohort)} Cohort`;
    }
    return 'Join Our Next Cohort';
  };

  const getCohortMessage = () => {
    if (settings?.cohort_message) {
      return settings.cohort_message;
    }
    return 'Limited spots available for ambitious communicators ready to transform their speaking skills. Applications close soon for our intensive 10-week program.';
  };

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
            {getCohortTitle()}
          </h2>
          
          <p className="text-lg md:text-xl text-white/95 mb-10 font-light leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            {getCohortMessage()}
          </p>

          <div className="opacity-0 animate-scale-in animate-delay-400">
            <a
              href="/enroll"
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