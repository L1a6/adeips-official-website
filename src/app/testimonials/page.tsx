'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    image: '/images/testimonials/enroll-3.jpg',
    name: 'Edidiong Atainyang',
    role: 'BGS, 11th Cohort',
    cohort: '11th Cohort',
    quote: 'ADEIPS transformed me from a nervous presenter into a confident keynote speaker. The techniques I learned here changed my entire career trajectory.',
    fullTestimony: `When I first joined ADEIPS, I could barely stand in front of five people without my voice trembling. Public speaking was my greatest fear, and it was holding me back in my career.

From the very first module on Cognitive Architecture of Opening and Closing, I began to understand the psychology behind impactful communication. The facilitators didn't just teach techniques—they helped me understand WHY these methods work.

The Executive Presence module was transformative. I learned how to command a room not through loudness, but through strategic positioning, deliberate pauses, and authentic connection with my audience.

What surprised me most was the focus on linguistic precision. I never realized how much my word choices affected my credibility. The training on Standard English competence gave me confidence in any professional setting.

Today, I regularly speak at conferences and corporate events. Last month, I delivered a keynote to over 500 professionals. The version of me from before ADEIPS would never have believed this was possible.

To anyone considering ADEIPS: invest in yourself. This program doesn't just teach you to speak—it transforms who you are as a communicator and leader.`,
    highlight: 'From stage fright to keynote speaker',
  },
  {
    id: 2,
    image: '/images/testimonials/enroll-2.jpg',
    name: 'Idy Xavier',
    role: 'Public Speaker',
    cohort: '9th Cohort',
    quote: 'From stage fright to TEDx stages. The facilitators truly understand the psychology of impactful communication.',
    fullTestimony: `My journey with ADEIPS began after I bombed a critical presentation at work. I knew something had to change.

The program's approach to Applied Psychophysiology of Confidence was eye-opening. I learned that my stage anxiety wasn't a character flaw—it was a conditioned response that could be systematically addressed.

Through the breathing techniques, cognitive reframing, and somatic control methods taught in the program, I gradually conquered my fears. But more than that, I discovered that I actually LOVED being on stage.

The Vocal Engineering module helped me find my authentic voice. I learned about tonal modulation, strategic pacing, and how to use my voice as an instrument of influence.

Six months after completing the program, I delivered my first TEDx talk. It was a moment I'll never forget—standing on that red dot, sharing my story with hundreds of people, feeling completely at home.

ADEIPS gave me more than skills. It gave me a new identity as a speaker. The community of alumni continues to support and inspire me. This is truly a life-changing experience.`,
    highlight: 'TEDx speaker and communication coach',
  },
  {
    id: 3,
    image: '/images/testimonials/enroll-1.jpg',
    name: 'Uduakabasi Etuk',
    role: 'Computer Engineer and Public Speaker',
    cohort: '10th Cohort',
    quote: 'The most transformative 10 weeks of my professional life. Every session pushed me beyond what I thought possible.',
    fullTestimony: `As a computer engineer, I always thought my technical skills would carry my career. But I kept hitting a ceiling—I couldn't effectively communicate my ideas to non-technical stakeholders.

ADEIPS changed everything. The Strategic Oratory Design module taught me how to structure complex information in ways that resonate with any audience. I learned to translate technical jargon into compelling narratives.

The Structural Transition Mechanics training was particularly valuable. I now know how to guide my audience through complex presentations with seamless flow and logical coherence.

What I appreciated most was the practical, hands-on approach. Every week, we practiced in front of the cohort and received detailed feedback. The improvement was measurable and immediate.

Since completing the program, I've been promoted twice. My ability to present technical proposals to executives has become a key differentiator in my career.

The ADEIPS community is also incredible. Fellow alumni regularly share opportunities and support each other's growth. It's not just a training program—it's a lifelong network of exceptional communicators.`,
    highlight: 'Bridging tech and communication excellence',
  },
  {
    id: 4,
    image: '/images/testimonials/enroll-6.jpg',
    name: 'Regina Edem',
    role: 'Administrative Lead, ADEIPS',
    cohort: '7th Cohort',
    quote: 'I went from avoiding presentations to actively seeking speaking opportunities. The supportive community made all the difference.',
    fullTestimony: `I still remember my first day at ADEIPS. I was terrified. I had spent years avoiding any situation that required public speaking.

The environment at ADEIPS is unlike anything I've experienced. There's no judgment, only genuine support and encouragement. The facilitators create a safe space where it's okay to make mistakes and grow.

The Neurocognitive Memory Optimisation module was a game-changer for me. I always worried about forgetting my content. Learning the memory enhancement systems gave me the confidence to speak without relying on notes.

Week by week, I watched myself transform. By the end of the 10 weeks, I was volunteering to go first in presentations. That alone was a miracle.

Today, I'm not just a speaker—I'm part of the ADEIPS family as the Administrative Lead. I get to witness other people's transformations, and it's the most rewarding experience.

If you're on the fence about joining, let me tell you: the investment is worth every kobo. ADEIPS doesn't just teach you to speak—it helps you find your voice.`,
    highlight: 'From participant to team member',
  },
  {
    id: 5,
    image: '/images/testimonials/enroll-4.jpg',
    name: 'Mary Edoho',
    role: 'Startup Founder',
    cohort: '8th Cohort',
    quote: 'ADEIPS gave me the confidence to pitch to Fortune 500 companies. The persuasion techniques were game-changing.',
    fullTestimony: `As a startup founder, my ability to communicate directly impacts my company's survival. I needed to pitch to investors, convince partners, and inspire my team—all requiring exceptional speaking skills.

ADEIPS delivered beyond my expectations. The Global Communication Protocols module helped me understand how to adapt my message for different cultural contexts. This was crucial as I expanded internationally.

The Executive Presence training was transformative. I learned that presence isn't about dominating a room—it's about authentic connection and strategic communication. The kinaesthetic awareness techniques helped me project confidence naturally.

The most valuable skill I gained was the ability to structure persuasive arguments. The frameworks for conceptual mapping and message engineering have helped me close deals worth millions.

Since ADEIPS, I've successfully raised funding from top-tier investors and secured partnerships with Fortune 500 companies. My startup has grown 10x, and our communication culture reflects the principles I learned.

To fellow entrepreneurs: public speaking skills are your secret weapon. ADEIPS will give you the edge you need to succeed.`,
    highlight: 'Scaling startups through communication',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=450&q=80',
    name: 'James Wilson',
    role: 'Award-Winning Orator',
    cohort: '6th Cohort',
    quote: 'The storytelling frameworks helped me win a national oratory competition. This institute is world-class.',
    fullTestimony: `I had been competing in oratory competitions for years with moderate success. But something was missing. My speeches were technically sound but didn't move audiences the way I wanted.

ADEIPS showed me what I was lacking. The Strategic Oratory Design module introduced me to storytelling frameworks that transformed my speeches from informative to unforgettable.

The training on rhetorical flow design was particularly impactful. I learned how to create emotional journeys for my audience, building tension and delivering powerful resolutions.

The Vocal Engineering module refined my delivery. I discovered how subtle variations in tone, pace, and emphasis could dramatically amplify my message's impact.

Three months after completing ADEIPS, I entered the National Oratory Competition. I won first place, competing against speakers from across the country. The judges specifically praised my storytelling and vocal variety—exactly what ADEIPS had taught me.

For anyone serious about oratory excellence, ADEIPS is the gold standard. The training is rigorous, the feedback is honest, and the results speak for themselves.`,
    highlight: 'National champion orator',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=450&q=80',
    name: 'Linda Adeyemi',
    role: 'Marketing Director',
    cohort: '12th Cohort',
    quote: 'My presentations now command attention. The transformation in my confidence has been remarkable.',
    fullTestimony: `As a Marketing Director, I present regularly to clients, executives, and large teams. But despite years of experience, I always felt like something was missing. My presentations were competent but not compelling.

ADEIPS gave me the tools to elevate my communication. The Cognitive Architecture module taught me how first and last impressions are formed, and how to strategically design openings and closings for maximum impact.

The Linguistic Precision training refined my language. I learned to choose words that create vivid images and emotional connections. My marketing pitches became significantly more persuasive.

What I valued most was the practice environment. Every week, we presented and received detailed feedback. The facilitators have an incredible eye for improvement opportunities.

Since completing the program, client win rates have increased dramatically. My team has noticed the change in my presence and confidence. I've also become a mentor for junior team members, passing on the principles I learned.

ADEIPS is not just for people who fear public speaking. It's for anyone who wants to become an exceptional communicator. The investment pays dividends throughout your career.`,
    highlight: 'Transforming marketing through oratory',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=450&q=80',
    name: 'Robert Nwankwo',
    role: 'Executive Coach',
    cohort: '5th Cohort',
    quote: 'ADEIPS equipped me with skills I now use to train other leaders. The investment paid for itself many times over.',
    fullTestimony: `I was already an executive coach when I joined ADEIPS. I wanted to deepen my understanding of communication to better serve my clients.

What I found was a comprehensive system that transformed my coaching practice. The program's evidence-based approach to public speaking gave me frameworks I could teach with confidence.

The Applied Psychophysiology module was particularly valuable. Understanding the neurological basis of performance anxiety allowed me to help clients at a deeper level.

The Global Communication Protocols module expanded my perspective. I now help executives prepare for international audiences with cultural nuance and sensitivity.

Since ADEIPS, I've incorporated their methodologies into my coaching practice. Client satisfaction has increased, and I've been able to command higher fees for my specialized communication coaching.

But beyond business impact, ADEIPS rekindled my own passion for speaking. I now actively seek keynote opportunities and have become known as the "communication coach's coach."

For fellow professionals in the development space: ADEIPS is essential learning. It will transform both your practice and your own capabilities.`,
    highlight: 'Coaching excellence through ADEIPS principles',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=450&q=80',
    name: 'Grace Obi',
    role: 'Legal Counsel',
    cohort: '11th Cohort',
    quote: 'My courtroom presentations have never been more persuasive. The techniques are applicable across all professional contexts.',
    fullTestimony: `As a lawyer, persuasive communication is my profession. Yet I knew I could be more effective. ADEIPS offered exactly what I needed.

The Strategic Oratory Design module transformed my approach to legal arguments. I learned to structure cases as compelling narratives, not just logical progressions.

The Vocal Engineering training was invaluable for courtroom dynamics. Controlling the pace, emphasizing key points, and using strategic pauses—these techniques have won cases.

What surprised me was how applicable the training was beyond the courtroom. Client meetings, negotiations, and professional presentations all benefited from the ADEIPS approach.

The practice sessions were rigorous. Receiving feedback from facilitators and peers pushed me to constantly improve. The environment is demanding but supportive.

Since completing the program, my courtroom win rate has increased significantly. Colleagues have noticed the change in my presence and delivery. I've also been invited to speak at legal conferences—something I never imagined.

For fellow legal professionals: communication skills are as important as legal knowledge. ADEIPS will make you a more effective advocate and a more persuasive professional.`,
    highlight: 'Winning cases through powerful advocacy',
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=450&q=80',
    name: 'Daniel Thompson',
    role: 'Sales Director',
    cohort: '9th Cohort',
    quote: 'Our team revenue increased by 40% after I applied what I learned. Communication is everything in sales.',
    fullTestimony: `Sales is communication. Every pitch, every negotiation, every closing relies on how effectively you connect with prospects. I knew I was leaving money on the table due to communication gaps.

ADEIPS addressed this directly. The Executive Presence module taught me how to project confidence and credibility from the first handshake.

The Linguistic Precision training transformed my sales conversations. I learned to use language that resonates emotionally while maintaining professional credibility.

The most impactful module for sales was the strategic structuring of presentations. I now design pitches with psychological principles in mind—opening with impact, building tension, and closing with compelling calls to action.

Within six months of completing ADEIPS, our team revenue increased by 40%. The techniques I learned, I've now trained my entire sales team on.

But it's not just about revenue. ADEIPS taught me to communicate authentically. Sales conversations feel less like pitches and more like genuine consultations. Clients trust us more, and relationships last longer.

For anyone in sales or business development: ADEIPS is the best investment you can make in your career. The ROI is immediate and substantial.`,
    highlight: '40% revenue growth through communication',
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=450&q=80',
    name: 'Angela Eze',
    role: 'University Lecturer',
    cohort: '10th Cohort',
    quote: 'My students are more engaged than ever. ADEIPS taught me how to truly connect with an audience.',
    fullTestimony: `I've been teaching for over a decade. My content was strong, but student engagement was always a challenge. ADEIPS changed how I approach every lecture.

The Cognitive Architecture module taught me that openings and closings are crucial for learning retention. I now start every class with a compelling hook and end with memorable takeaways.

The Vocal Engineering training transformed my delivery. I learned that monotone delivery, even of excellent content, fails to engage. Strategic variation in pace, tone, and emphasis keeps students attentive.

The Executive Presence module helped me command the classroom differently. It's not about authority—it's about authentic engagement and strategic positioning.

Student feedback has improved dramatically. Attendance is up. Participation has increased. Most importantly, learning outcomes have improved measurably.

I've also started incorporating ADEIPS principles into my curriculum. Students now receive public speaking training as part of their education.

For fellow educators: teaching is public speaking, every day. ADEIPS will transform how you connect with your students and how effectively you transmit knowledge.`,
    highlight: 'Revolutionizing classroom engagement',
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=450&q=80',
    name: 'Christopher Uche',
    role: 'Tech Entrepreneur',
    cohort: '8th Cohort',
    quote: 'Investor pitches became my strength after ADEIPS. The program gave me the tools to communicate my vision effectively.',
    fullTestimony: `When I started my tech company, I had a great product but struggled to communicate its value. Investor meetings were painful. I knew the product was revolutionary, but I couldn't convey that effectively.

ADEIPS transformed my ability to pitch. The Strategic Oratory Design module taught me to structure presentations that build excitement and urgency.

The training on memory optimization was crucial. I no longer needed slides as a crutch. I could deliver passionate, confident pitches from memory, maintaining eye contact and connection throughout.

The Executive Presence module helped me project the confidence investors look for. Startups are risky—investors bet on founders as much as products. ADEIPS helped me become the kind of founder investors want to back.

Since completing the program, I've raised multiple rounds of funding. Investors now comment on the clarity and passion of my pitches. The company has grown from 5 to 50 employees.

But beyond fundraising, ADEIPS improved all my stakeholder communication—with employees, partners, and customers. It's a foundational skill for any entrepreneur.

For fellow tech founders: your technical skills got you here, but communication skills will take you further. ADEIPS is essential.`,
    highlight: 'From technical founder to compelling visionary',
  },
];

export default function TestimonialsPage() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check for hash on mount and when hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const id = parseInt(hash);
        const testimonial = testimonials.find(t => t.id === id);
        if (testimonial) {
          setSelectedTestimonial(testimonial);
          setIsModalOpen(true);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
    window.history.pushState(null, '', window.location.pathname);
  };

  const openTestimonial = (testimonial: typeof testimonials[0]) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
    window.history.pushState(null, '', `#${testimonial.id}`);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#0A1236] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 dark:from-[#0A1236] via-white dark:via-[#0D1640] to-gray-50 dark:to-[#0A1236]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase text-[#0A1236] dark:text-white/90 mb-4 font-semibold"
          >
            Success Stories
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit text-4xl md:text-6xl font-extralight text-[#0A1236] dark:text-white tracking-tight mb-6"
          >
            Voices of Transformation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto"
          >
            Discover the journeys of professionals who transformed their speaking abilities and careers through ADEIPS
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => openTestimonial(testimonial)}
                className="group cursor-pointer"
              >
                <div className="relative rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] bg-white dark:bg-white/5"
                  style={{
                    backdropFilter: 'blur(40px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  }}
                >
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden rounded-t-[1.5rem]"
                    style={{
                      boxShadow: 'inset 0 -2px 10px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Cohort Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30">
                        {testimonial.cohort}
                      </span>
                    </div>
                    
                    {/* Name on image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-outfit text-xl font-medium text-white mb-1">{testimonial.name}</h3>
                      <p className="text-sm text-white/80">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 bg-white dark:bg-[#081225]">
                    <p className="text-gray-600 dark:text-white text-sm leading-relaxed line-clamp-3 mb-4">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#0A1236] dark:text-white">{testimonial.highlight}</span>
                      <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-white/70 group-hover:text-[#0A1236] dark:group-hover:text-white transition-colors font-medium">
                        Read Story
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1236] to-[#0D1640]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-3xl md:text-5xl font-extralight text-white mb-6 tracking-tight">
            Ready to Write Your Story?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Join hundreds of professionals who have transformed their communication and careers through ADEIPS
          </p>
          <Link
            href="/enroll"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl group bg-[#0A1236]"
            style={{
              boxShadow: '0 20px 60px rgba(10, 18, 54, 0.4)',
            }}
          >
            <span className="relative z-10">Begin Your Transformation</span>
            <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Full Story Modal */}
      {isModalOpen && selectedTestimonial && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[1.5rem] bg-white dark:bg-[#0A1236]/95"
            style={{
              backdropFilter: 'blur(60px) saturate(200%)',
              WebkitBackdropFilter: 'blur(60px) saturate(200%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 40px 120px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Hero Image */}
            <div className="relative h-80 md:h-96">
              <Image
                src={selectedTestimonial.image}
                alt={selectedTestimonial.name}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
              
              {/* Profile Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-end gap-6">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
                    <Image
                      src={selectedTestimonial.image}
                      alt={selectedTestimonial.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-2 text-slate-800 dark:text-white"
                      style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.6)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 1)',
                      }}
                    >
                      {selectedTestimonial.cohort}
                    </span>
                    <h2 className="font-outfit text-3xl font-medium text-[#0A1236]">{selectedTestimonial.name}</h2>
                    <p className="text-gray-600">{selectedTestimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Highlight */}
              <div className="mb-8 p-6 rounded-2xl border-l-4 bg-slate-50 dark:bg-[#0A1236]/50"
                style={{
                  backdropFilter: 'blur(20px)',
                  borderLeftColor: '#0A1236',
                }}
              >
                <p className="text-lg font-medium text-[#0A1236] dark:text-white">{selectedTestimonial.highlight}</p>
              </div>

              {/* Quote */}
              <blockquote className="mb-8 text-xl text-gray-700 dark:text-white italic border-l-4 border-gray-200 dark:border-white/20 pl-6">
                &ldquo;{selectedTestimonial.quote}&rdquo;
              </blockquote>

              {/* Full Testimony - Shortened */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
                  {selectedTestimonial.fullTestimony.split('\n\n')[0].split(' ').slice(0, -1).join(' ')}...
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-wrap gap-4 justify-center">
                <Link
                  href={`/testimonials/${selectedTestimonial.id}`}
                  className="px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 bg-[#0A1236]"
                  style={{
                    boxShadow: '0 10px 30px rgba(10, 18, 54, 0.3)',
                  }}
                >
                  View Full Story
                </Link>
                <button
                  onClick={closeModal}
                  className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 bg-white dark:bg-white/10 text-gray-700 dark:text-white"
                  style={{
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  Back to Stories
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}
