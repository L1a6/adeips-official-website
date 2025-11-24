'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IconicMoments() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || isMobile) return;

    const ctx = gsap.context(() => {
      // Desktop GSAP only
      document.querySelectorAll('.arch__right .img-wrapper').forEach((element) => {
        const order = (element as HTMLElement).getAttribute('data-index');
        if (order !== null) {
          (element as HTMLElement).style.zIndex = order;
        }
      });

      const imgs = gsap.utils.toArray<HTMLElement>('.img-wrapper img');
      const bgColors = ['#E0E7FF', '#DBEAFE', '#FEE2E2', '#F1F5F9'];

      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.arch',
          start: 'top top',
          end: 'bottom bottom',
          pin: '.arch__right',
          scrub: true,
        },
      });

      gsap.set(imgs, {
        clipPath: 'inset(0)',
        objectPosition: '0px 0%',
      });

      imgs.forEach((_, index) => {
        const currentImage = imgs[index];
        const nextImage = imgs[index + 1] ? imgs[index + 1] : null;

        const sectionTimeline = gsap.timeline();

        if (nextImage) {
          sectionTimeline
            .to(
              'body',
              {
                backgroundColor: bgColors[index],
                duration: 1.5,
                ease: 'power2.inOut',
              },
              0
            )
            .to(
              currentImage,
              {
                clipPath: 'inset(0px 0px 100%)',
                objectPosition: '0px 60%',
                duration: 1.5,
                ease: 'none',
              },
              0
            )
            .to(
              nextImage,
              {
                objectPosition: '0px 40%',
                duration: 1.5,
                ease: 'none',
              },
              0
            );
        }

        mainTimeline.add(sectionTimeline);
      });
    });

    return () => ctx.revert();
  }, [isMobile]);

  const moments = [
    {
      title: 'Candlelight Session',
      description: 'An intimate evening where speakers share breakthrough moments, personal journeys, and transformative stories that shaped their public speaking mastery.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      color: '#E0E7FF'
    },
    {
      title: 'Cultural Day',
      description: 'Experience global perspectives through diverse storytelling traditions. Celebrate the universal language of powerful communication across cultures.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      color: '#DBEAFE'
    },
    {
      title: 'Project Defense',
      description: 'Showcase your mastery through compelling presentations. Demonstrate command of persuasive techniques and stage presence before distinguished panels.',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
      color: '#FEE2E2'
    },
    {
      title: 'Graduation 🎓',
      description: 'Celebrate your transformation from hesitant speaker to confident communicator. Join our distinguished alumni network of influential voices.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
      color: '#F1F5F9'
    }
  ];

  // MOBILE: Simple stacked layout
  if (isMobile) {
    return (
      <section className="mobile-iconic-moments" style={{ backgroundColor: '#E0E7FF', padding: '40px 20px' }}>
        <style jsx>{`
          .mobile-iconic-moments h2 {
            font-family: 'Outfit', sans-serif;
            font-size: 32px;
            font-weight: 300;
            text-align: center;
            margin-bottom: 12px;
            color: #0A1F44;
          }
          
          .mobile-iconic-moments .subtitle {
            text-align: center;
            color: rgba(10, 31, 68, 0.7);
            margin-bottom: 48px;
            font-size: 14px;
          }
          
          .moment-card {
            margin-bottom: 48px;
          }
          
          .moment-image {
            width: 100%;
            height: 280px;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 20px;
            position: relative;
          }
          
          .moment-content h3 {
            font-family: 'Outfit', sans-serif;
            font-size: 28px;
            font-weight: 800;
            color: #0A1F44;
            margin-bottom: 12px;
          }
          
          .moment-content p {
            color: rgba(10, 31, 68, 0.8);
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 20px;
          }
          
          .moment-button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 20px;
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1.5px solid rgba(255, 255, 255, 0.5);
            border-radius: 40px;
            color: #0A1F44;
            font-weight: 500;
            text-decoration: none;
            box-shadow: 0 8px 32px 0 rgba(10, 31, 68, 0.1);
          }
          
          .gallery-button {
            text-align: center;
            margin-top: 40px;
          }
          
          .gallery-button a {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 16px 32px;
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1.5px solid rgba(255, 255, 255, 0.5);
            border-radius: 40px;
            color: #0A1F44;
            font-weight: 500;
            text-decoration: none;
          }
        `}</style>

        <h2>Iconic Moments at the Institute</h2>
        <p className="subtitle">Experience the transformative journey through our signature events</p>

        {moments.map((moment, index) => (
          <div key={index} className="moment-card">
            <div className="moment-image">
              <Image
                src={moment.image}
                alt={moment.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="moment-content">
              <h3>{moment.title}</h3>
              <p>{moment.description}</p>
              <a href="#" className="moment-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none">
                  <path fill="currentColor" d="M5 2c0 1.105-1.895 2-3 2a2 2 0 1 1 0-4c1.105 0 3 .895 3 2ZM11 3.5c0 1.105-.895 3-2 3s-2-1.895-2-3a2 2 0 1 1 4 0ZM6 9a2 2 0 1 1-4 0c0-1.105.895-3 2-3s2 1.895 2 3Z" />
                </svg>
                <span>Learn More</span>
              </a>
            </div>
          </div>
        ))}

        <div className="gallery-button">
          <a href="#gallery">
            <span>View Full Gallery</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    );
  }

  // DESKTOP: GSAP layout
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;800&display=swap');
        
        body {
          background-color: #E0E7FF;
          transition: background-color 0.5s ease;
        }
        
        .desktop-iconic-moments {
          overflow: visible;
        }
        
        .container {
          max-width: 1440px;
          padding: 2rem;
          margin: 0 auto;
        }

        .spacer {
          width: 100%;
          height: 10vh;
        }

        .arch {
          display: flex;
          gap: 60px;
          justify-content: space-between;
          max-width: 1100px;
          margin-inline: auto;
        }

        .arch__left {
          display: flex;
          flex-direction: column;
          min-width: 300px;
        }

        .arch__left .arch__info {
          max-width: 356px;
          height: 100vh;
          display: grid;
          place-items: center;
        }

        .arch__left .arch__info h2 {
          font-family: Outfit;
          font-size: 42px;
          font-weight: 800;
          letter-spacing: -0.84px;
          color: #0A1F44;
          margin-bottom: 6px;
        }

        .arch__left .arch__info p {
          color: rgba(10, 31, 68, 0.8);
          font-size: 18px;
          letter-spacing: -0.54px;
          margin-bottom: 28px;
          line-height: 1.6;
        }

        .arch__left .arch__info a {
          text-decoration: none;
          padding: 16px 18px;
          color: #0A1F44;
          border-radius: 40px;
          display: flex;
          gap: 4px;
          width: fit-content;
          align-items: center;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 32px 0 rgba(10, 31, 68, 0.1),
                      inset 0 1px 0 0 rgba(255, 255, 255, 0.6);
          transition: all 0.3s ease;
        }

        .arch__left .arch__info a:hover {
          background: rgba(255, 255, 255, 0.35);
          transform: translateY(-2px);
        }

        .arch__right {
          flex-shrink: 1;
          height: 100vh;
          width: 100%;
          max-width: 540px;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .arch__right .img-wrapper {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          height: 400px;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
        }
      `}</style>

      <section className="desktop-iconic-moments">
        <div className="container">
          <h2 style={{ 
            fontFamily: 'Outfit', 
            fontSize: '56px', 
            fontWeight: 300, 
            textAlign: 'center', 
            marginBottom: '12px',
            color: '#0A1F44'
          }}>
            Iconic Moments at the Institute
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: 'rgba(10, 31, 68, 0.7)', 
            marginBottom: '24px', 
            maxWidth: '600px', 
            marginLeft: 'auto', 
            marginRight: 'auto'
          }}>
            Experience the transformative journey through our signature events
          </p>
        </div>

        <div className="spacer" />

        <div className="arch">
          <div className="arch__left">
            {moments.map((moment, index) => (
              <div key={index} className="arch__info">
                <div>
                  <h2>{moment.title}</h2>
                  <p>{moment.description}</p>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none">
                      <path fill="currentColor" d="M5 2c0 1.105-1.895 2-3 2a2 2 0 1 1 0-4c1.105 0 3 .895 3 2ZM11 3.5c0 1.105-.895 3-2 3s-2-1.895-2-3a2 2 0 1 1 4 0ZM6 9a2 2 0 1 1-4 0c0-1.105.895-3 2-3s2 1.895 2 3Z" />
                    </svg>
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="arch__right">
            {moments.map((moment, index) => (
              <div key={index} className="img-wrapper" data-index={4 - index}>
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="spacer" />
      </section>
    </>
  );
}