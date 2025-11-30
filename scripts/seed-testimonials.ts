// Script to seed testimonials from hardcoded data to Supabase
// Run with: npx tsx scripts/seed-testimonials.ts

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

// Load environment variables from .env.local
dotenv.config({ path: resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Missing environment variables!');
  console.error('Make sure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const testimonials = [
  {
    name: 'Edidiong Atainyang',
    role: 'BGS, 11th Cohort',
    cohort: '11th Cohort',
    image: '/images/testimonials/enroll-3.jpg',
    quote: 'ADEIPS transformed me from a nervous presenter into a confident keynote speaker. The techniques I learned here changed my entire career trajectory.',
    full_testimony: `When I first joined ADEIPS, I could barely stand in front of five people without my voice trembling. Public speaking was my greatest fear, and it was holding me back in my career.

From the very first module on Cognitive Architecture of Opening and Closing, I began to understand the psychology behind impactful communication. The facilitators didn't just teach techniques—they helped me understand WHY these methods work.

The Executive Presence module was transformative. I learned how to command a room not through loudness, but through strategic positioning, deliberate pauses, and authentic connection with my audience.

What surprised me most was the focus on linguistic precision. I never realized how much my word choices affected my credibility. The training on Standard English competence gave me confidence in any professional setting.

Today, I regularly speak at conferences and corporate events. Last month, I delivered a keynote to over 500 professionals. The version of me from before ADEIPS would never have believed this was possible.

To anyone considering ADEIPS: invest in yourself. This program doesn't just teach you to speak—it transforms who you are as a communicator and leader.`,
    highlight: 'From stage fright to keynote speaker',
    key_takeaways: [
      'Overcame severe stage anxiety through systematic training',
      'Mastered cognitive architecture for impactful openings',
      'Developed executive presence and authentic connection',
      'Now speaks to audiences of 500+ professionals'
    ]
  },
  {
    name: 'Idy Xavier',
    role: 'Public Speaker',
    cohort: '9th Cohort',
    image: '/images/testimonials/enroll-2.jpg',
    quote: 'From stage fright to TEDx stages. The facilitators truly understand the psychology of impactful communication.',
    full_testimony: `My journey with ADEIPS began after I bombed a critical presentation at work. I knew something had to change.

The program's approach to Applied Psychophysiology of Confidence was eye-opening. I learned that my stage anxiety wasn't a character flaw—it was a conditioned response that could be systematically addressed.

Through the breathing techniques, cognitive reframing, and somatic control methods taught in the program, I gradually conquered my fears. But more than that, I discovered that I actually LOVED being on stage.

The Vocal Engineering module helped me find my authentic voice. I learned about tonal modulation, strategic pacing, and how to use my voice as an instrument of influence.

Six months after completing the program, I delivered my first TEDx talk. It was a moment I'll never forget—standing on that red dot, sharing my story with hundreds of people, feeling completely at home.

ADEIPS gave me more than skills. It gave me a new identity as a speaker. The community of alumni continues to support and inspire me. This is truly a life-changing experience.`,
    highlight: 'TEDx speaker and communication coach',
    key_takeaways: [
      'Transformed stage anxiety into stage presence',
      'Mastered vocal engineering and tonal modulation',
      'Delivered TEDx talk 6 months after program',
      'Built lasting network through alumni community'
    ]
  },
  {
    name: 'Uduakabasi Etuk',
    role: 'Computer Engineer and Public Speaker',
    cohort: '10th Cohort',
    image: '/images/testimonials/enroll-1.jpg',
    quote: 'The most transformative 10 weeks of my professional life. Every session pushed me beyond what I thought possible.',
    full_testimony: `As a computer engineer, I always thought my technical skills would carry my career. But I kept hitting a ceiling—I couldn't effectively communicate my ideas to non-technical stakeholders.

ADEIPS changed everything. The Strategic Oratory Design module taught me how to structure complex information in ways that resonate with any audience. I learned to translate technical jargon into compelling narratives.

The Structural Transition Mechanics training was particularly valuable. I now know how to guide my audience through complex presentations with seamless flow and logical coherence.

What I appreciated most was the practical, hands-on approach. Every week, we practiced in front of the cohort and received detailed feedback. The improvement was measurable and immediate.

Since completing the program, I've been promoted twice. My ability to present technical proposals to executives has become a key differentiator in my career.

The ADEIPS community is also incredible. Fellow alumni regularly share opportunities and support each other's growth. It's not just a training program—it's a lifelong network of exceptional communicators.`,
    highlight: 'Bridging tech and communication excellence',
    key_takeaways: [
      'Learned to translate technical concepts for any audience',
      'Mastered structural transition mechanics',
      'Promoted twice since completing program',
      'Became key technical-to-executive communicator'
    ]
  },
  {
    name: 'Regina Edem',
    role: 'Administrative Lead, ADEIPS',
    cohort: '7th Cohort',
    image: '/images/testimonials/enroll-6.jpg',
    quote: 'I went from avoiding presentations to actively seeking speaking opportunities. The supportive community made all the difference.',
    full_testimony: `I still remember my first day at ADEIPS. I was terrified. I had spent years avoiding any situation that required public speaking.

The environment at ADEIPS is unlike anything I've experienced. There's no judgment, only genuine support and encouragement. The facilitators create a safe space where it's okay to make mistakes and grow.

The Neurocognitive Memory Optimisation module was a game-changer for me. I always worried about forgetting my content. Learning the memory enhancement systems gave me the confidence to speak without relying on notes.

Week by week, I watched myself transform. By the end of the 10 weeks, I was volunteering to go first in presentations. That alone was a miracle.

Today, I'm not just a speaker—I'm part of the ADEIPS family as the Administrative Lead. I get to witness other people's transformations, and it's the most rewarding experience.

If you're on the fence about joining, let me tell you: the investment is worth every kobo. ADEIPS doesn't just teach you to speak—it helps you find your voice.`,
    highlight: 'From participant to team member',
    key_takeaways: [
      'Overcame years of presentation avoidance',
      'Mastered neurocognitive memory optimization',
      'Transformed from fearful to volunteer presenter',
      'Joined ADEIPS team as Administrative Lead'
    ]
  },
  {
    name: 'Mary Edoho',
    role: 'Startup Founder',
    cohort: '8th Cohort',
    image: '/images/testimonials/enroll-4.jpg',
    quote: 'ADEIPS gave me the confidence to pitch to Fortune 500 companies. The persuasion techniques were game-changing.',
    full_testimony: `As a startup founder, my ability to communicate directly impacts my company's survival. I needed to pitch to investors, convince partners, and inspire my team—all requiring exceptional speaking skills.

ADEIPS delivered beyond my expectations. The Global Communication Protocols module helped me understand how to adapt my message for different cultural contexts. This was crucial as I expanded internationally.

The Executive Presence training was transformative. I learned that presence isn't about dominating a room—it's about authentic connection and strategic communication. The kinaesthetic awareness techniques helped me project confidence naturally.

The most valuable skill I gained was the ability to structure persuasive arguments. The frameworks for conceptual mapping and message engineering have helped me close deals worth millions.

Since ADEIPS, I've successfully raised funding from top-tier investors and secured partnerships with Fortune 500 companies. My startup has grown 10x, and our communication culture reflects the principles I learned.

To fellow entrepreneurs: public speaking skills are your secret weapon. ADEIPS will give you the edge you need to succeed.`,
    highlight: 'Scaling startups through communication',
    key_takeaways: [
      'Mastered global communication protocols',
      'Secured Fortune 500 partnerships',
      'Raised funding from top-tier investors',
      'Grew startup 10x post-program'
    ]
  },
  {
    name: 'James Wilson',
    role: 'Award-Winning Orator',
    cohort: '6th Cohort',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=450&q=80',
    quote: 'The storytelling frameworks helped me win a national oratory competition. This institute is world-class.',
    full_testimony: `I had been competing in oratory competitions for years with moderate success. But something was missing. My speeches were technically sound but didn't move audiences the way I wanted.

ADEIPS showed me what I was lacking. The Strategic Oratory Design module introduced me to storytelling frameworks that transformed my speeches from informative to unforgettable.

The training on rhetorical flow design was particularly impactful. I learned how to create emotional journeys for my audience, building tension and delivering powerful resolutions.

The Vocal Engineering module refined my delivery. I discovered how subtle variations in tone, pace, and emphasis could dramatically amplify my message's impact.

Three months after completing ADEIPS, I entered the National Oratory Competition. I won first place, competing against speakers from across the country. The judges specifically praised my storytelling and vocal variety—exactly what ADEIPS had taught me.

For anyone serious about oratory excellence, ADEIPS is the gold standard. The training is rigorous, the feedback is honest, and the results speak for themselves.`,
    highlight: 'National champion orator',
    key_takeaways: [
      'Won national oratory competition',
      'Mastered storytelling frameworks',
      'Perfected vocal engineering techniques',
      'Transformed speeches from technical to unforgettable'
    ]
  },
  {
    name: 'Linda Adeyemi',
    role: 'Marketing Director',
    cohort: '12th Cohort',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=450&q=80',
    quote: 'My presentations now command attention. The transformation in my confidence has been remarkable.',
    full_testimony: `As a Marketing Director, I present regularly to clients, executives, and large teams. But despite years of experience, I always felt like something was missing. My presentations were competent but not compelling.

ADEIPS gave me the tools to elevate my communication. The Cognitive Architecture module taught me how first and last impressions are formed, and how to strategically design openings and closings for maximum impact.

The Linguistic Precision training refined my language. I learned to choose words that create vivid images and emotional connections. My marketing pitches became significantly more persuasive.

What I valued most was the practice environment. Every week, we presented and received detailed feedback. The facilitators have an incredible eye for improvement opportunities.

Since completing the program, client win rates have increased dramatically. My team has noticed the change in my presence and confidence. I've also become a mentor for junior team members, passing on the principles I learned.

ADEIPS is not just for people who fear public speaking. It's for anyone who wants to become an exceptional communicator. The investment pays dividends throughout your career.`,
    highlight: 'Transforming marketing through oratory',
    key_takeaways: [
      'Increased client win rates significantly',
      'Mastered cognitive architecture for openings and closings',
      'Developed linguistic precision skills',
      'Became mentor for team communication'
    ]
  },
  {
    name: 'Robert Nwankwo',
    role: 'Executive Coach',
    cohort: '5th Cohort',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=450&q=80',
    quote: 'ADEIPS equipped me with skills I now use to train other leaders. The investment paid for itself many times over.',
    full_testimony: `I was already an executive coach when I joined ADEIPS. I wanted to deepen my understanding of communication to better serve my clients.

What I found was a comprehensive system that transformed my coaching practice. The program's evidence-based approach to public speaking gave me frameworks I could teach with confidence.

The Applied Psychophysiology module was particularly valuable. Understanding the neurological basis of performance anxiety allowed me to help clients at a deeper level.

The Global Communication Protocols module expanded my perspective. I now help executives prepare for international audiences with cultural nuance and sensitivity.

Since ADEIPS, I've incorporated their methodologies into my coaching practice. Client satisfaction has increased, and I've been able to command higher fees for my specialized communication coaching.

But beyond business impact, ADEIPS rekindled my own passion for speaking. I now actively seek keynote opportunities and have become known as the "communication coach's coach."

For fellow professionals in the development space: ADEIPS is essential learning. It will transform both your practice and your own capabilities.`,
    highlight: 'Coaching excellence through ADEIPS principles',
    key_takeaways: [
      'Integrated ADEIPS methodologies into coaching practice',
      'Commanded higher fees for specialized services',
      'Became known as the "communication coach\'s coach"',
      'Enhanced client satisfaction significantly'
    ]
  },
  {
    name: 'Grace Obi',
    role: 'Legal Counsel',
    cohort: '11th Cohort',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=450&q=80',
    quote: 'My courtroom presentations have never been more persuasive. The techniques are applicable across all professional contexts.',
    full_testimony: `As a lawyer, persuasive communication is my profession. Yet I knew I could be more effective. ADEIPS offered exactly what I needed.

The Strategic Oratory Design module transformed my approach to legal arguments. I learned to structure cases as compelling narratives, not just logical progressions.

The Vocal Engineering training was invaluable for courtroom dynamics. Controlling the pace, emphasizing key points, and using strategic pauses—these techniques have won cases.

What surprised me was how applicable the training was beyond the courtroom. Client meetings, negotiations, and professional presentations all benefited from the ADEIPS approach.

The practice sessions were rigorous. Receiving feedback from facilitators and peers pushed me to constantly improve. The environment is demanding but supportive.

Since completing the program, my courtroom win rate has increased significantly. Colleagues have noticed the change in my presence and delivery. I've also been invited to speak at legal conferences—something I never imagined.

For fellow legal professionals: communication skills are as important as legal knowledge. ADEIPS will make you a more effective advocate and a more persuasive professional.`,
    highlight: 'Winning cases through powerful advocacy',
    key_takeaways: [
      'Increased courtroom win rate significantly',
      'Mastered narrative structure for legal arguments',
      'Applied vocal engineering to courtroom presentations',
      'Invited to speak at legal conferences'
    ]
  },
  {
    name: 'Daniel Thompson',
    role: 'Sales Director',
    cohort: '9th Cohort',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=450&q=80',
    quote: 'Our team revenue increased by 40% after I applied what I learned. Communication is everything in sales.',
    full_testimony: `Sales is communication. Every pitch, every negotiation, every closing relies on how effectively you connect with prospects. I knew I was leaving money on the table due to communication gaps.

ADEIPS filled those gaps. The Executive Presence module taught me how to project confidence and authority without being aggressive. This completely changed my client interactions.

The Persuasion Architecture training was a game-changer. I learned how to structure proposals to align with how decision-makers think and what triggers action.

The Vocal Engineering techniques helped me in phone sales and presentations. Pace, tone, strategic emphasis—these elements dramatically improved conversion rates.

Within six months of completing ADEIPS, our team revenue increased by 40%. My close rate doubled. The company recognized this transformation and promoted me to Sales Director.

Now I train my entire team using ADEIPS principles. The compound effect has been remarkable. We've become the top-performing sales division in the company.

For sales professionals: ADEIPS is not an expense, it's an investment with measurable ROI. The skills pay for themselves many times over.`,
    highlight: 'Revenue growth through communication excellence',
    key_takeaways: [
      'Increased team revenue by 40%',
      'Doubled personal close rate',
      'Promoted to Sales Director',
      'Trains entire team using ADEIPS principles'
    ]
  },
  {
    name: 'Chioma Nwosu',
    role: 'University Lecturer',
    cohort: '10th Cohort',
    image: '/images/testimonials/enroll-5.jpg',
    quote: 'My lectures went from information dumps to engaging experiences. Student feedback has never been better.',
    full_testimony: `Teaching university students is challenging. They're distracted, skeptical, and have endless information at their fingertips. I needed to make my lectures compelling, not just informative.

ADEIPS transformed my teaching approach. The Engagement Architecture module showed me how to design lectures that capture and maintain attention throughout.

The Storytelling Frameworks helped me present academic concepts as narratives. Complex theories became accessible stories. Student comprehension improved dramatically.

The Vocal Variety training made my delivery more dynamic. I learned to use pace, volume, and pauses to emphasize key points and create dramatic effect in explanations.

Student evaluations went from good to exceptional. My lectures are now rated among the highest in the department. Students actively participate instead of passively listening.

Beyond the classroom, I've been invited to deliver keynotes at academic conferences. My research presentations now engage audiences instead of boring them.

For fellow educators: ADEIPS will revolutionize your teaching. The principles apply whether you're teaching 20 or 200 students.`,
    highlight: 'From lecturer to engaging educator',
    key_takeaways: [
      'Achieved highest student evaluation ratings',
      'Transformed complex theories into accessible narratives',
      'Invited to keynote academic conferences',
      'Increased student participation dramatically'
    ]
  },
  {
    name: 'Emmanuel Okafor',
    role: 'Tech Startup Founder',
    cohort: '11th Cohort',
    image: '/images/testimonials/enroll-7.jpg',
    quote: 'Raised $2M in funding after ADEIPS. Investors told me my pitch was the most compelling they had heard all year.',
    full_testimony: `As a technical founder, I could build amazing products but struggled to articulate their value. I had watched inferior products get funded while mine was overlooked. The problem was not my product—it was my pitch.

ADEIPS changed everything. The Persuasion Architecture module taught me how investors think and what triggers their decision-making process.

The Executive Presence module helped me project the confidence investors look for. Startups are risky—investors bet on founders as much as products. ADEIPS helped me become the kind of founder investors want to back.

Since completing the program, I've raised multiple rounds of funding. Investors now comment on the clarity and passion of my pitches. The company has grown from 5 to 50 employees.

But beyond fundraising, ADEIPS improved all my stakeholder communication—with employees, partners, and customers. It's a foundational skill for any entrepreneur.

For fellow tech founders: your technical skills got you here, but communication skills will take you further. ADEIPS is essential.`,
    highlight: 'From technical founder to compelling visionary',
    key_takeaways: [
      'Raised $2M in startup funding',
      'Grew company from 5 to 50 employees',
      'Mastered investor pitch frameworks',
      'Improved all stakeholder communications'
    ]
  },
];

async function seedTestimonials() {
  console.log('Starting testimonials seed...');
  
  for (const testimonial of testimonials) {
    const { data, error } = await supabase
      .from('testimonials')
      .insert([testimonial])
      .select();
    
    if (error) {
      console.error(`Error inserting ${testimonial.name}:`, error);
    } else {
      console.log(`✓ Inserted ${testimonial.name}`);
    }
  }
  
  console.log('Seed complete!');
}

seedTestimonials();
