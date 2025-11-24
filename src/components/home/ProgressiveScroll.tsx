
'use client';

import { useEffect, useState } from 'react';

const SCROLL_WORDS = [
  'speak.',
  'inspire.',
  'persuade.',
  'captivate.',
  'influence.',
  'transform.',
  'lead.',
];

export default function ProgressiveScroll() {
  const [typedText, setTypedText] = useState('');
  const finalMottoText = "...and we'll help you master persuasive communication";

  useEffect(() => {
    const finalSection = document.querySelector('.final-section-motto');
    if (!finalSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTypedText('');
            
            setTimeout(() => {
              let currentIndex = 0;
              const typingInterval = setInterval(() => {
                if (currentIndex <= finalMottoText.length) {
                  setTypedText(finalMottoText.slice(0, currentIndex));
                  currentIndex++;
                } else {
                  clearInterval(typingInterval);
                }
              }, 40);
            }, 100);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(finalSection);
    return () => observer.disconnect();
  }, [finalMottoText]);

  return (
    <>
      <style>{`
        /* CRITICAL: Wrapper to isolate and force height */
        .progressive-scroll-wrapper {
          width: 100%;
          position: relative;
          isolation: isolate;
        }

        .progressive-scroll-container {
          --start: 50vh;
          --space: 50vh;
          --accent: #ef4444;
          background: #ffffff !important;
          width: 100% !important;
          position: relative !important;
          color: #000 !important;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif !important;
          overflow: visible !important;
          transform: none !important;
          will-change: auto !important;
        }

        .dark .progressive-scroll-container {
          background: #0a1128 !important;
          color: #fff !important;
        }

        .progressive-scroll-container *,
        .progressive-scroll-container *::before,
        .progressive-scroll-container *::after {
          box-sizing: border-box !important;
        }

        .fluid {
          --font-size-min: 14;
          --font-size-max: 20;
          --font-ratio-min: 1.1;
          --font-ratio-max: 1.33;
          --font-width-min: 375;
          --font-width-max: 1500;
          --fluid-min: calc(var(--font-size-min) * pow(var(--font-ratio-min), var(--font-level, 0)));
          --fluid-max: calc(var(--font-size-max) * pow(var(--font-ratio-max), var(--font-level, 0)));
          --fluid-preferred: calc((var(--fluid-max) - var(--fluid-min)) / (var(--font-width-max) - var(--font-width-min)));
          --fluid-type: clamp(
            (var(--fluid-min) / 16) * 1rem,
            ((var(--fluid-min) / 16) * 1rem) - (((var(--fluid-preferred) * var(--font-width-min)) / 16) * 1rem) + (var(--fluid-preferred) * 100vi),
            (var(--fluid-max) / 16) * 1rem
          );
          font-size: var(--fluid-type) !important;
        }

        .scroll-sticky-header {
          --font-level: 4;
          --font-size-min: 24;
          position: sticky !important;
          top: calc((var(--count) - 1) * -1lh) !important;
          line-height: 1.2 !important;
          display: flex !important;
          align-items: start !important;
          width: 100% !important;
          margin: 0 !important;
          margin-bottom: var(--space) !important;
          padding: 0 2.5rem !important;
          transform: none !important;
          will-change: auto !important;
        }

        .scroll-header-inner {
          display: flex !important;
          width: 100% !important;
          align-items: start !important;
          justify-content: center !important;
          padding-top: calc(var(--start) - 0.5lh) !important;
          transform: none !important;
          will-change: auto !important;
        }

        .scroll-you-will {
          position: sticky !important;
          top: calc(var(--start) - 0.5lh) !important;
          font-size: inherit !important;
          line-height: 1.2 !important;
          margin: 0 !important;
          padding: 0 !important;
          display: inline-block !important;
          height: fit-content !important;
          font-weight: 200 !important;
          color: inherit !important;
          white-space: nowrap !important;
          transform: none !important;
        }

        .scroll-words-list {
          font-weight: 200 !important;
          padding-inline-start: 0 !important;
          margin: 0 !important;
          list-style-type: none !important;
          line-height: 1.2 !important;
          transform: none !important;
          will-change: auto !important;
        }

        .scroll-word-item {
          --dimmed: rgba(0, 0, 0, 0.08);
          background: linear-gradient(
            180deg,
            var(--dimmed) 0 calc(var(--start) - 0.5lh),
            var(--accent) calc(var(--start) - 0.55lh) calc(var(--start) + 0.55lh),
            var(--dimmed) calc(var(--start) + 0.5lh)
          ) !important;
          background-attachment: fixed !important;
          color: transparent !important;
          background-clip: text !important;
          -webkit-background-clip: text !important;
          transform: none !important;
          will-change: auto !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .dark .scroll-word-item {
          --dimmed: rgba(255, 255, 255, 0.08);
        }

        .final-section-motto {
          width: 100% !important;
          height: 100vh !important;
          z-index: 2 !important;
          position: relative !important;
          display: flex !important;
          place-items: center !important;
          justify-content: center !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .final-section-motto::before {
          content: '' !important;
          position: absolute !important;
          inset: 0 !important;
          z-index: -1 !important;
          background: #0A1F44 !important;
          border-radius: 1rem 1rem 0 0 !important;
          transform-origin: 50% 100% !important;
          scale: 0.9;
        }

        @supports (animation-timeline: view()) {
          .final-section-motto {
            view-timeline: --section;
          }

          .final-section-motto::before {
            animation: grow both ease-in-out;
            animation-timeline: --section;
            animation-range: entry 50%;
          }

          @keyframes grow {
            100% {
              scale: 1;
              border-radius: 0;
            }
          }
        }

        .final-motto-content {
          --font-level: 4;
          --font-size-min: 20;
          height: 100% !important;
          width: 100% !important;
          display: flex !important;
          place-items: center !important;
          padding: 0 2.5rem !important;
        }

        .final-motto-paragraph {
          margin: 0 !important;
          font-weight: 300 !important;
          font-style: italic !important;
          text-align: center !important;
          color: #fff !important;
          letter-spacing: -0.5px !important;
          line-height: 1.6 !important;
          min-height: 1.6em !important;
        }

        .typing-cursor {
          display: inline-block !important;
          width: 2px !important;
          height: 1em !important;
          background-color: #fff !important;
          margin-left: 2px !important;
          animation: blink 1s infinite !important;
          vertical-align: middle !important;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border-width: 0 !important;
        }

        @media (max-width: 640px) {
          .scroll-sticky-header {
            padding: 0 1.5rem !important;
          }
          .final-motto-content {
            padding: 0 1.5rem !important;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .scroll-sticky-header {
            padding: 0 2rem !important;
          }
        }
      `}</style>

      <div className="progressive-scroll-wrapper">
        <section className="progressive-scroll-container">
          <header className="scroll-sticky-header fluid" style={{ '--count': SCROLL_WORDS.length } as React.CSSProperties}>
            <section className="scroll-header-inner">
              <h1 className="scroll-you-will">
                <span aria-hidden="true">you will&nbsp;</span>
                <span className="sr-only">you will lead.</span>
              </h1>
              <ul className="scroll-words-list" aria-hidden="true">
                {SCROLL_WORDS.map((word, i) => (
                  <li key={word} className="scroll-word-item" style={{ '--i': i } as React.CSSProperties}>
                    {word}
                  </li>
                ))}
              </ul>
            </section>
          </header>

          <main className="final-section-motto">
            <section className="final-motto-content fluid">
              <p className="final-motto-paragraph">
                {typedText}
                {typedText.length > 0 && typedText.length < finalMottoText.length && (
                  <span className="typing-cursor"></span>
                )}
              </p>
            </section>
          </main>
        </section>
      </div>
    </>
  );
}