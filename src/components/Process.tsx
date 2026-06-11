import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
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
