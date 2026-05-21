import { motion } from 'framer-motion';
import HeroBg3D from './HeroBg3D';

const marqueeItems = [
  'Web Design', 'Development', 'SEO', 'Branding', 'Social Ads',
  'Landing Pages', 'E-Commerce', 'Digital Strategy', 'UI/UX',
];

function SplitLine({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span style={{ display: 'block', overflow: 'hidden' }}>
      <motion.span
        style={{ display: 'block' }}
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: 'calc(var(--nav-h) + 4rem) var(--pad-x) 0',
    }}>

      {/* 3D Background */}
      <HeroBg3D />

      {/* Lime radial glow behind 3D */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 60% at 65% 50%, rgba(188,255,79,0.06) 0%, transparent 70%)',
      }} />

      {/* Dark vignette on edges */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 120% 100% at 50% 50%, transparent 40%, rgba(12,12,12,0.7) 100%)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 'var(--max-w)', margin: '0 auto', width: '100%' }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '2rem' }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--lime)', display: 'block', flexShrink: 0 }} />
          <span className="label" style={{ color: 'var(--lime)' }}>Available for new projects — 2025</span>
        </motion.div>

        {/* Heading */}
        <h1 className="display h1" style={{ marginBottom: '3rem', maxWidth: '16ch' }}>
          <SplitLine text="We Build" delay={0.05} />
          <SplitLine text="Digital" delay={0.12} />
          <SplitLine text="Experiences" delay={0.19} />
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <motion.span
              style={{ display: 'inline-block', color: 'var(--lime)' }}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            >
              That Convert.
            </motion.span>
          </span>
        </h1>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hero-bottom-row"
        >
          <div style={{ maxWidth: 420 }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--white-2)', lineHeight: 1.75, marginBottom: '2rem' }}>
              Feather Studios crafts premium websites, landing pages, and digital campaigns
              for businesses, creators, and music artists who refuse to blend in.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-lime"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Start a Project →
              </a>
              <a href="#work" className="btn btn-outline"
                onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); }}>
                View Our Work
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            {[
              { n: '50+', l: 'Projects\nDelivered' },
              { n: '100%', l: 'Client\nSatisfaction' },
              { n: '48h', l: 'Avg. Response\nTime' },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                className="hero-stat"
              >
                <div className="hero-stat-num">{s.n}</div>
                <div className="hero-stat-label">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{
          position: 'relative', zIndex: 2,
          borderTop: '1px solid var(--border)',
          marginTop: '4rem',
          overflow: 'hidden',
          padding: '1.2rem 0',
          maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <motion.div
          animate={{ x: [0, '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', width: 'max-content', gap: 0 }}
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
}
