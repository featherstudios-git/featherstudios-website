import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, PenTool, Code2, Rocket, Star } from 'lucide-react';

const steps = [
  {
    num: '01', icon: MessageSquare, title: 'Discovery Call',
    desc: 'We dive deep into your goals, audience, and vision. The right questions upfront save weeks later.',
    accent: '#BCFF4F',
  },
  {
    num: '02', icon: PenTool, title: 'Design & Strategy',
    desc: 'Custom mockups built to your brief. Review, iterate, perfect — until every pixel is intentional.',
    accent: '#a78bfa',
  },
  {
    num: '03', icon: Code2, title: 'Build & Develop',
    desc: 'Clean, fast, accessible code. Every site is performance-optimized and SEO-ready from day one.',
    accent: '#60a5fa',
  },
  {
    num: '04', icon: Rocket, title: 'Launch & Support',
    desc: 'Deploy, analytics setup, handover. Ongoing support always available whenever you need us.',
    accent: '#fb923c',
  },
];

const testimonials = [
  { quote: 'Feather Studios completely transformed our online presence. Sales up 40% since launch.', name: 'Marcus K.', role: 'CEO, Apex Solutions', init: 'MK', accent: '#BCFF4F' },
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
      <section id="process" style={{ background: 'var(--black-2)', borderTop: '1px solid var(--border)', padding: 'var(--pad-y) var(--pad-x)' }}>
        <ProcessInner />
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

  return (
    <div ref={ref} style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.span
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          className="label" style={{ display: 'block', marginBottom: '1rem' }}
        >
          — How We Work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="display h2"
        >
          Idea to Live —{' '}
          <span style={{ color: 'var(--lime)' }}>4 Clear Steps</span>
        </motion.h2>
      </div>

      {/* Steps */}
      <div className="process-grid">
        {steps.map((step, i) => (
          <StepCard key={step.num} step={step} index={i} inView={inView} total={steps.length} />
        ))}
      </div>
    </div>
  );
}

function StepCard({ step, index, inView, total }: { step: typeof steps[0]; index: number; inView: boolean; total: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 20, padding: '2rem',
        cursor: 'default',
        overflow: 'hidden',
      }}
    >
      {/* Sliding Gradient Border (Behind Mask) */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', width: '200%', height: '200%',
        background: `conic-gradient(from 0deg, transparent 70%, ${step.accent} 100%)`,
        animation: 'spin-gradient 2.5s linear infinite',
        transformOrigin: '0 0', zIndex: 0,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.4s'
      }} />

      {/* Inner Mask (Solid Background) */}
      <div style={{
        position: 'absolute', inset: 1,
        background: hovered ? 'var(--black)' : 'transparent',
        borderRadius: 19, zIndex: 1, transition: 'background 0.4s',
        border: hovered ? 'none' : `1px solid transparent` // Border is handled by grid gap
      }} />

      {/* Subtle glow (Always On) */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 20,
        background: `radial-gradient(circle at 0% 0%, ${step.accent}0A 0%, transparent 60%)`,
        opacity: 1, transition: 'opacity 0.4s', pointerEvents: 'none',
        zIndex: 2,
      }} />

      {/* Content wrapper */}
      <div style={{ position: 'relative', zIndex: 3 }}>
        {/* Connector line between steps (not last) */}
        {index < total - 1 && (
          <div className="step-connector" style={{
            position: 'absolute', top: '2.5rem', right: '-2rem',
            width: 1, height: 'calc(100% - 5rem)',
            background: 'var(--border)', zIndex: 0,
          }} />
        )}

        {/* Step number */}
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
          color: step.accent, letterSpacing: '0.15em', marginBottom: '1.5rem',
        }}>
          {step.num}
        </div>

        {/* Icon */}
        <div style={{
          width: 52, height: 52, borderRadius: 16, marginBottom: '1.5rem',
          background: `${step.accent}14`,
          border: `1px solid ${step.accent}28`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform 0.4s var(--ease-out)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        }}>
          <Icon size={22} color={step.accent} />
        </div>

        {/* Text */}
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: '1.1rem', letterSpacing: '-0.02em',
          color: hovered ? 'var(--white)' : 'var(--white-2)',
          transition: 'color 0.3s', marginBottom: '0.75rem',
        }}>
          {step.title}
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--white-3)', lineHeight: 1.65, margin: 0 }}>
          {step.desc}
        </p>
      </div>
    </motion.div>
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
            className="display h2"
          >
            Don't Take Our<br />
            <span style={{ color: 'var(--lime)' }}>Word For It</span>
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
                <Star key={i} size={16} fill="#BCFF4F" color="#BCFF4F" />
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
    <div style={{
      width: 350, minWidth: 350, flexShrink: 0,
      background: 'var(--black-2)', border: '1px solid var(--border)',
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
