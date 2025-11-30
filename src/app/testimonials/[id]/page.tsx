'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
    keyTakeaways: [
      'Overcame severe stage anxiety through systematic training',
      'Mastered cognitive architecture for impactful openings',
      'Developed executive presence and authentic connection',
      'Now speaks to audiences of 500+ professionals'
    ]
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
    keyTakeaways: [
      'Transformed stage anxiety into stage presence',
      'Mastered vocal engineering and tonal modulation',
      'Delivered TEDx talk 6 months after program',
      'Built lasting network through alumni community'
    ]
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
    keyTakeaways: [
      'Learned to translate technical concepts for any audience',
      'Mastered structural transition mechanics',
      'Promoted twice since completing program',
      'Became key technical-to-executive communicator'
    ]
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
    keyTakeaways: [
      'Overcame years of presentation avoidance',
      'Mastered neurocognitive memory optimization',
      'Transformed from fearful to volunteer presenter',
      'Joined ADEIPS team as Administrative Lead'
    ]
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
    keyTakeaways: [
      'Mastered global communication protocols',
      'Secured Fortune 500 partnerships',
      'Raised funding from top-tier investors',
      'Grew startup 10x post-program'
    ]
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
    keyTakeaways: [
      'Transformed speeches from informative to unforgettable',
      'Mastered rhetorical flow and emotional journeys',
      'Won national oratory competition',
      'Praised for storytelling and vocal variety'
    ]
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
    keyTakeaways: [
      'Elevated presentations from competent to compelling',
      'Mastered cognitive architecture for impact',
      'Dramatically increased client win rates',
      'Now mentors junior team members'
    ]
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
    keyTakeaways: [
      'Enhanced coaching practice with ADEIPS frameworks',
      'Mastered applied psychophysiology',
      'Increased client satisfaction and fees',
      'Known as "communication coach\'s coach"'
    ]
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
    keyTakeaways: [
      'Transformed legal arguments into compelling narratives',
      'Mastered vocal engineering for courtroom impact',
      'Significantly increased win rate',
      'Now speaks at legal conferences'
    ]
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
    keyTakeaways: [
      'Increased team revenue by 40% in 6 months',
      'Mastered executive presence from first contact',
      'Trained entire sales team on ADEIPS principles',
      'Built stronger, trust-based client relationships'
    ]
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
    keyTakeaways: [
      'Dramatically improved student engagement',
      'Increased attendance and participation',
      'Enhanced learning outcomes measurably',
      'Integrated ADEIPS into curriculum'
    ]
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
    keyTakeaways: [
      'Transformed investor pitches into funding successes',
      'Mastered memory optimization for slide-free presenting',
      'Raised multiple funding rounds',
      'Grew company from 5 to 50 employees'
    ]
  },
];

export default function TestimonialDetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const testimonial = testimonials.find(t => t.id === id);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!testimonial) {
    notFound();
  }

  // Get next testimonial for recommendation
  const nextTestimonial = testimonials.find(t => t.id === (id % testimonials.length) + 1);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white dark:from-[#0A1236] dark:via-[#0D1640] dark:to-[#0A1236]">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 dark:bg-white/5 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-[#E62A2A] to-[#ff4444]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section with Liquid Glass Effect */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 rounded-full bg-[#E62A2A]/10 blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-x-1"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Stories
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image with Liquid Glass Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: '0 25px 100px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                  padding: '1rem',
                }}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    quality={95}
                    className="object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Cohort Badge */}
                  <div className="absolute top-6 left-6">
                    <div
                      className="px-4 py-2 rounded-full text-sm font-medium text-white"
                      style={{
                        background: 'rgba(230, 42, 42, 0.9)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 8px 32px rgba(230, 42, 42, 0.3)',
                      }}
                    >
                      {testimonial.cohort}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-3"
              >
                <div
                  className="px-6 py-4 rounded-2xl text-center"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div className="text-2xl font-bold text-[#E62A2A]">10</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Weeks</div>
                </div>
                <div
                  className="px-6 py-4 rounded-2xl text-center"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div className="text-2xl font-bold text-[#0A1236] dark:text-white">12</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Modules</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Intro Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-sm tracking-[0.3em] uppercase text-[#E62A2A] mb-4 font-medium">
                Success Story
              </p>
              <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-extralight text-[#0A1236] dark:text-white tracking-tight mb-4">
                {testimonial.name}
              </h1>
              <p className="text-xl text-gray-600 dark:text-white/70 mb-8">
                {testimonial.role}
              </p>

              {/* Highlight Quote */}
              <div
                className="p-6 rounded-2xl mb-8"
                style={{
                  background: 'rgba(230, 42, 42, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(230, 42, 42, 0.1)',
                  borderLeft: '4px solid #E62A2A',
                }}
              >
                <p className="text-lg font-medium text-[#0A1236] dark:text-white italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Key Achievement Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#E62A2A]/10 to-transparent border border-[#E62A2A]/20">
                <svg className="w-5 h-5 text-[#E62A2A]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium text-[#0A1236] dark:text-white">
                  {testimonial.highlight}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Story Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* The Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-outfit text-3xl font-extralight text-[#0A1236] dark:text-white mb-8">
              The Journey
            </h2>
            
            <div
              className="p-8 md:p-12 rounded-3xl prose prose-lg max-w-none"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 25px 100px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
              }}
            >
              {testimonial.fullTestimony.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-700 dark:text-white/80 leading-relaxed mb-6 last:mb-0"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Key Takeaways */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-outfit text-3xl font-extralight text-[#0A1236] dark:text-white mb-8">
              Key Takeaways
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {testimonial.keyTakeaways.map((takeaway, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-5 rounded-2xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E62A2A]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#E62A2A]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-white/80">{takeaway}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(230, 42, 42, 0.05) 0%, rgba(10, 18, 54, 0.05) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(230, 42, 42, 0.1)',
            }}
          >
            <h3 className="font-outfit text-2xl md:text-3xl font-extralight text-[#0A1236] dark:text-white mb-4">
              Ready to Begin Your Transformation?
            </h3>
            <p className="text-gray-600 dark:text-white/70 mb-8 max-w-2xl mx-auto">
              Join {testimonial.name} and hundreds of others who have mastered the art of impactful communication through ADEIPS.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/enroll"
                className="px-10 py-4 rounded-full bg-[#E62A2A] text-white font-medium hover:bg-[#c41e1e] hover:shadow-lg hover:shadow-[#E62A2A]/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Enroll Now
              </Link>
              <Link
                href="/testimonials"
                className="px-10 py-4 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                }}
              >
                More Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Story Suggestion */}
      {nextTestimonial && (
        <section className="py-20 px-6 bg-gradient-to-br from-[#0A1236] to-[#0D1640]">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4 text-center">
              Next Story
            </p>
            <h2 className="font-outfit text-3xl font-extralight text-white mb-12 text-center">
              Continue Reading
            </h2>
            
            <Link href={`/testimonials/${nextTestimonial.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div
                  className="relative p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 25px 100px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                      <Image
                        src={nextTestimonial.image}
                        alt={nextTestimonial.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#E62A2A]/20 text-white border border-[#E62A2A]/30 mb-4">
                        {nextTestimonial.cohort}
                      </span>
                      <h3 className="font-outfit text-2xl font-medium text-white mb-2">
                        {nextTestimonial.name}
                      </h3>
                      <p className="text-white/70 text-sm mb-4">{nextTestimonial.role}</p>
                      <p className="text-white/80 mb-6 line-clamp-3">
                        &ldquo;{nextTestimonial.quote}&rdquo;
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm text-white/90 group-hover:text-white transition-colors">
                        Read {nextTestimonial.name}'s Story
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
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
