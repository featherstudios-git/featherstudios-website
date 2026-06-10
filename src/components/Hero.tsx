import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VIDEO_SRC = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4';

const marqueeItems = [
  'Web Design', 'Development', 'SEO', 'Branding', 'Social Ads',
  'Landing Pages', 'E-Commerce', 'Digital Strategy', 'UI/UX',
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoBgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Mouse parallax on video background
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const strength = 20;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetX = ((e.clientX - cx) / cx) * strength;
      targetY = ((e.clientY - cy) / cy) * strength;
    };

    const lerp = () => {
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;
      if (videoBgRef.current) {
        gsap.set(videoBgRef.current, { x: currentX, y: currentY });
      }
      animId = requestAnimationFrame(lerp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animId = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // GSAP entrance timeline + scroll parallax
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Title lines
      const lines = titleRef.current?.querySelectorAll('.hero-line-inner');
      if (lines) {
        tl.fromTo(lines,
          { y: '120%', rotateX: -15 },
          { y: '0%', rotateX: 0, duration: 1.3, stagger: 0.08, ease: 'power4.out' },
          0.4
        );
      }

      // Description
      tl.fromTo(descRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        0.9
      );

      // Stats
      tl.fromTo(statsRef.current?.children ? Array.from(statsRef.current.children) : [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        1.1
      );

      // Marquee
      tl.fromTo(marqueeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        1.3
      );

      // Scroll-driven parallax
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          if (titleRef.current) gsap.set(titleRef.current, { y: p * -150, opacity: 1 - p * 1.8 });
          if (descRef.current) gsap.set(descRef.current, { y: p * -100, opacity: 1 - p * 2 });
          if (statsRef.current) gsap.set(statsRef.current, { y: p * -80, opacity: 1 - p * 1.8 });
          if (badgeRef.current) gsap.set(badgeRef.current, { y: p * -180, opacity: 1 - p * 2.5 });
          if (videoBgRef.current) gsap.set(videoBgRef.current, { scale: 1.08 + p * 0.08 });
          if (overlayRef.current) gsap.set(overlayRef.current, { opacity: p * 0.7 });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Marquee scroll
  useEffect(() => {
    const marqueeInner = marqueeRef.current?.querySelector('.marquee-track') as HTMLElement;
    if (!marqueeInner) return;
    const ctx = gsap.context(() => {
      gsap.to(marqueeInner, { xPercent: -50, duration: 30, repeat: -1, ease: 'none' });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Video Background */}
      <div ref={videoBgRef} style={{
        position: 'absolute',
        inset: '-5%',
        zIndex: 0,
        transformOrigin: 'center center',
        scale: '1.08',
      }}>
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', zIndex: 0, opacity: 0.25,
            filter: 'invert(1) sepia(0.2) blur(4px)',
          }}
        />
      </div>

      {/* Color grade overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(250,248,245,0.1) 0%, rgba(250,248,245,0) 40%, rgba(250,248,245,0.7) 75%, rgba(250,248,245,0.95) 100%)',
      }} />

      {/* Scroll-driven darkening overlay */}
      <div ref={overlayRef} style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'var(--black)',
        opacity: 0,
        pointerEvents: 'none',
      }} />

      {/* Subtle lime tint */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(0,71,171,0.03) 0%, transparent 70%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 3,
        maxWidth: 'var(--max-w)', margin: '0 auto', width: '100%',
        padding: '0 var(--pad-x) 2rem',
      }}>
        {/* Title */}
        <h1 ref={titleRef} className="display" style={{
          fontSize: 'clamp(2.5rem, 7.5vw, 6rem)',
          lineHeight: 0.95,
          letterSpacing: '-0.04em',
          marginBottom: '5rem',
          maxWidth: '18ch',
          perspective: '800px',
        }}>
          {['We Build', 'Digital', 'Experiences'].map((line, i) => (
            <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
              <span className="hero-line-inner" style={{
                display: 'block', transformOrigin: 'left bottom',
              }}>
                {line}
              </span>
            </span>
          ))}
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span className="hero-line-inner" style={{
              display: 'block', color: 'var(--lime)',
              transformOrigin: 'left bottom',
              textShadow: '0 0 60px rgba(0,71,171,0.3)',
            }}>
              That Convert.
            </span>
          </span>
        </h1>

        {/* Bottom row */}
        <div className="hero-bottom-row">
          <div ref={descRef} style={{ maxWidth: 420, opacity: 0 }}>
            <p style={{
              fontSize: '1.05rem', color: 'var(--white-2)',
              lineHeight: 1.75, marginBottom: '2rem',
            }}>
              Feather Studios crafts premium websites, landing pages, and digital campaigns
              for businesses, creators, and artists who refuse to blend in.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-lime"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ boxShadow: '0 0 40px rgba(0,71,171,0.15)' }}
              >
                Start a Project →
              </a>
              <a href="#work" className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="hero-stats">
            {[
              { n: '50+', l: 'Projects\nDelivered' },
              { n: '100%', l: 'Client\nSatisfaction' },
              { n: '48h', l: 'Avg. Response\nTime' },
            ].map((s) => (
              <div key={s.n} className="hero-stat">
                <div className="hero-stat-num">{s.n}</div>
                <div className="hero-stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div ref={marqueeRef} style={{
        position: 'relative', zIndex: 3,
        borderTop: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
        padding: '1.2rem 0',
        maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        opacity: 0,
      }}>
        <div className="marquee-track" style={{ display: 'flex', width: 'max-content' }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{
              display: 'flex', alignItems: 'center', gap: '1.5rem',
              padding: '0 2.5rem',
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--white-3)', whiteSpace: 'nowrap',
            }}>
              {item}
              <span style={{ color: 'var(--lime)', fontSize: '0.4rem' }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
