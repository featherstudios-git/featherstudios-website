import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const text = "We help individuals, businesses, startups, organizations start grow and sustain through out there journey. We help you to build your own story and make you the greatest main character the world has ever seen, you are the most beautiful thing you have in your journey and we won’t let you quit, cause that’s what we do we don’t let you quit that’s our promise.";

export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll('.word');
      if (words && words.length > 0) {
        gsap.fromTo(words, 
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              end: 'bottom 75%',
              scrub: 1,
            }
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{
      background: 'var(--black)',
      padding: 'var(--pad-y) var(--pad-x)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div style={{ maxWidth: 1000, textAlign: 'center' }}>
        <h2 ref={textRef} className="display" style={{ 
          fontSize: 'clamp(1.5rem, 4.5vw, 3rem)', 
          lineHeight: 1.3,
          color: 'var(--white)',
          fontWeight: 600
        }}>
          {text.split(' ').map((word, i) => (
            <span key={i} className="word" style={{ display: 'inline-block', marginRight: '0.3em' }}>
              {word}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
