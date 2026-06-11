import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { DiscoverAnimation, BuildAnimation, GrowAnimation, SustainAnimation } from './ProcessAnimations';

const steps = [
  {
    num: '01',
    title: 'Discover',
    tags: ['Research', 'Strategy', 'Audits'],
    desc: "Every journey starts with an idea. Whether you're an individual, creator, startup, business, or organization, we begin by understanding where you are today and where you want to go tomorrow.",
  },
  {
    num: '02',
    title: 'Build',
    tags: ['Design', 'Development', 'Copywriting'],
    desc: "The right foundation changes everything. From branding and websites to digital systems, content, and strategy, we create the tools you need to launch with confidence.",
  },
  {
    num: '03',
    title: 'Grow',
    tags: ['Marketing', 'SEO', 'Ad Campaigns'],
    desc: "Launching is only the beginning. We help you attract attention, build trust, reach the right audience, and create momentum that turns ideas into opportunities.",
  },
  {
    num: '04',
    title: 'Sustain',
    tags: ['Optimization', 'Maintenance', 'Support'],
    desc: "Great brands aren't built overnight. As you evolve, we continue refining, improving, and supporting your digital presence so it grows with your ambitions.",
  }
];

const testimonials = [
  { quote: 'Feather Studios completely transformed our online presence. Sales up 40% since launch.', name: 'Marcus K.', role: 'CEO, Apex Solutions', init: 'MK', accent: '#FFB000' },
  { quote: 'My artist website looks better than any major label site. The animations, the detail — everything is perfect.', name: 'Jay-Lo R.', role: 'Independent Music Artist', init: 'JL', accent: '#a855f7' },
  { quote: 'The landing page converted at 3× our previous rate. Clean design, sharp copy, ahead of schedule.', name: 'Sophia P.', role: 'Founder, LaunchFast', init: 'SP', accent: '#ec4899' },
  { quote: '5× ROI in the first month of ads. These guys don\'t just build sites — they build businesses.', name: 'Dani M.', role: 'Owner, Urban Threads', init: 'DM', accent: '#fb923c' },
  { quote: 'The brand kit blew my mind. My logo is exactly who I am. 10/10, would recommend to everyone.', name: 'Zara V.', role: 'Content Creator — 500K followers', init: 'ZV', accent: '#34d399' },
  { quote: 'Professional, fast, and incredibly talented. Our corporate site has never looked this good.', name: 'Rahul N.', role: 'Marketing Director, NovaCafe', init: 'RN', accent: '#60a5fa' },
];

export default function Process() {
  return (
    <>
      {/* ── Process ────────────────────────────────────────── */}
      <section id="process" style={{ position: 'relative', background: 'var(--black-2)', borderTop: '1px solid var(--border)', padding: 'calc(var(--pad-y)*1.5) var(--pad-x)', overflow: 'hidden' }}>
        {/* Background Video */}
        <video
          autoPlay loop muted playsInline
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', zIndex: 0, opacity: 0.35, filter: 'blur(4px)',
          }}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260422_112520_ee819691-f2e8-4c54-bb77-3fb72c84eaa5.mp4"
        />
        {/* Dark Overlays for Readability */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, var(--black-2) 0%, transparent 15%, transparent 85%, var(--black-2) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(circle at center, transparent 0%, var(--black-2) 90%)' }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <ProcessInner />
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────── */}
      <section id="testimonials" style={{ background: 'var(--black)', borderTop: '1px solid var(--border)', padding: 'var(--pad-y) 0', overflow: 'hidden' }}>
        <TestimonialsInner />
      </section>
    </>
  );
}

function ProcessInner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div ref={ref} style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="display" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--white)', margin: 0, lineHeight: 1 }}
        >
          Our<br /><span style={{ color: 'var(--lime)', fontStyle: 'italic' }}>Process</span>
        </motion.h2>
      </div>

      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        height: isMobile ? 'auto' : 'clamp(400px, 60vh, 550px)', 
        gap: 'clamp(0.5rem, 1vw, 1.5rem)',
        padding: '0 1rem'
      }}>
        {steps.map((step, i) => {
          const isActive = isMobile ? true : hoveredIndex === i;
          return (
            <motion.div
              key={step.num}
              onMouseEnter={() => setHoveredIndex(i)}
              onClick={() => setHoveredIndex(i)}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: inView ? 1 : 0, 
                y: inView ? 0 : 50,
                flex: isMobile ? 'none' : (isActive ? 6 : 1),
                minHeight: isMobile ? '350px' : 'auto'
              }}
              transition={{ 
                duration: 0.6, 
                delay: inView ? i * 0.1 : 0,
                layout: { type: 'spring', bounce: 0, duration: 0.6 }
              }}
              className="liquid-glass"
              style={{
                position: 'relative',
                borderRadius: 'clamp(16px, 2vw, 30px)',
                background: isActive ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.01)',
                border: isActive ? '1px solid var(--lime)' : '1px solid rgba(255,255,255,0.05)',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              {/* Number Element */}
              <motion.div 
                layout="position"
                className="display"
                animate={{
                  top: isActive ? '-5%' : '50%',
                  right: isActive ? '5%' : '50%',
                  x: isActive ? '0%' : '50%',
                  y: isActive ? '0%' : '-50%',
                  fontSize: isActive ? 'clamp(6rem, 20vw, 20rem)' : 'clamp(2.5rem, 4vw, 4rem)',
                  opacity: isActive ? 0.04 : 0.3,
                  rotate: isMobile ? 0 : (isActive ? 0 : -90)
                }}
                transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
                style={{ 
                  position: 'absolute', 
                  lineHeight: 0.8, color: 'var(--white)', 
                  pointerEvents: 'none', whiteSpace: 'nowrap'
                }}
              >
                {step.num}
              </motion.div>

              {/* Content Panel */}
              <AnimatePresence mode="popLayout">
                {isActive && (
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
                      exit: { opacity: 0, transition: { duration: 0.2 } }
                    }}
                    style={{ 
                      padding: 'clamp(1.5rem, 3vw, 3rem)', 
                      position: 'relative', zIndex: 2, width: '100%',
                      display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', gap: '2rem'
                    }}
                  >
                    <div style={{ flex: 1, zIndex: 2 }}>
                      <motion.div style={{ display: 'flex', gap: '8px', marginBottom: '1rem', flexWrap: 'wrap' }}>
                        {step.tags.map((tag, tIdx) => (
                          <motion.span 
                            key={tIdx} 
                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                            className="liquid-glass"
                            style={{ padding: '4px 12px', fontSize: '0.85rem', color: 'var(--white)', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)' }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>
                      <h3 className="display" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', color: 'var(--lime)', fontStyle: 'italic', marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {step.title.split(' ').map((word, wIdx) => (
                          <motion.span key={wIdx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            {word}
                          </motion.span>
                        ))}
                      </h3>
                      <p style={{ fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', color: 'var(--white-2)', lineHeight: 1.6, maxWidth: '400px', margin: 0, display: 'flex', flexWrap: 'wrap', columnGap: '6px' }}>
                        {step.desc.split(' ').map((word, wIdx) => (
                          <motion.span key={wIdx} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                            {word}
                          </motion.span>
                        ))}
                      </p>
                    </div>

                    <motion.div 
                      variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.6 } } }}
                      style={{ flexShrink: 0, position: isMobile ? 'relative' : 'absolute', right: isMobile ? '0' : '5%', top: isMobile ? '0' : '50%', transform: isMobile ? 'none' : 'translateY(-50%)', zIndex: 1 }}
                    >
                       {step.num === '01' && <DiscoverAnimation accent="var(--lime)" />}
                       {step.num === '02' && <BuildAnimation accent="var(--lime)" />}
                       {step.num === '03' && <GrowAnimation accent="var(--lime)" />}
                       {step.num === '04' && <SustainAnimation accent="var(--lime)" />}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function TestimonialsInner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div>
      {/* Header */}
      <div ref={ref} style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--pad-x)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
        <div>
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="label" style={{ display: 'block', marginBottom: '1rem' }}
          >
            — Client Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="display" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--white)', margin: 0, lineHeight: 1 }}
          >
            Don't Take Our<br />
            <span style={{ color: 'var(--lime)', fontStyle: 'italic' }}>Word For It</span>
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}
        >
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '2.5rem', letterSpacing: '-0.04em', color: 'var(--lime)' }}>5.0</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--white-3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Average Rating</div>
          </div>
          <div style={{ height: 55, width: 1, background: 'var(--border)' }} />
          <div>
            <div style={{ display: 'flex', gap: 3 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="#FFB000" color="#FFB000" />
              ))}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--white-3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 5 }}>50+ Reviews</div>
          </div>
        </motion.div>
      </div>

      {/* Scrolling track */}
      <div style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
        padding: '0.5rem 0',
      }}>
        <motion.div
          animate={{ x: [0, '-50%'] }}
          transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', gap: '1rem', width: 'max-content', flexShrink: 0 }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="liquid-glass" style={{
      width: 350, minWidth: 350, flexShrink: 0,
      background: 'rgba(255,255,255,0.02)', border: '1px solid var(--lime-border)',
      borderRadius: 20, padding: '2rem',
      display: 'flex', flexDirection: 'column', gap: '1.25rem',
    }}>
      {/* Stars */}
      <div style={{ display: 'flex', gap: 3 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill={t.accent} color={t.accent} />
        ))}
      </div>

      <p style={{ fontSize: '0.9rem', color: 'var(--white-2)', lineHeight: 1.72, fontStyle: 'italic', flex: 1 }}>
        "{t.quote}"
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
          background: `${t.accent}22`, border: `1px solid ${t.accent}40`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.78rem',
          color: t.accent,
        }}>
          {t.init}
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{t.name}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--white-3)' }}>{t.role}</div>
        </div>
      </div>
    </div>
  );
}
