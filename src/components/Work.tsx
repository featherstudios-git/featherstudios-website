import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Music2, Rocket, ShoppingBag, Palette, Smartphone, Building2 } from 'lucide-react';

const works = [
  { id: 'w1', label: 'Music Artist', title: 'SoundWave', desc: 'Artist portfolio with integrated music player, tour dates & merch store.', cat: 'Web', color: '#0d0618', accent: '#a855f7', Icon: Music2 },
  { id: 'w2', label: 'SaaS Landing', title: 'Launchify', desc: 'High-converting product launch page with 34% sign-up rate.', cat: 'Landing Page', color: '#001018', accent: '#06b6d4', Icon: Rocket },
  { id: 'w3', label: 'E-Commerce', title: 'Urban Threads', desc: 'Custom Shopify store — 3× revenue in 90 days post-launch.', cat: 'E-Commerce', color: '#100800', accent: '#f97316', Icon: ShoppingBag },
  { id: 'w4', label: 'Brand Identity', title: 'NovaCafe', desc: 'Complete brand system — logo, palette, packaging & guidelines.', cat: 'Branding', color: '#080f00', accent: '#BCFF4F', Icon: Palette },
  { id: 'w5', label: 'Creator Hub', title: 'Zara Vibes', desc: 'Influencer bio page with brand deals, content showcase & booking.', cat: 'Landing Page', color: '#0f0010', accent: '#ec4899', Icon: Smartphone },
  { id: 'w6', label: 'Corporate Site', title: 'Apex Group', desc: 'Multi-page corporate site with case studies and client portal.', cat: 'Web', color: '#00060f', accent: '#3b82f6', Icon: Building2 },
];

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="work" style={{ background: 'var(--black)', padding: 'var(--pad-y) var(--pad-x)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

        <div ref={ref} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <motion.span
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="label" style={{ display: 'block', marginBottom: '1rem' }}
            >
              — Selected Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="display h2"
            >
              Projects That<br />
              <span style={{ color: 'var(--lime)' }}>Speak for Themselves</span>
            </motion.h2>
          </div>
          <motion.a
            href="#contact"
            className="btn btn-outline"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{ alignSelf: 'flex-end' }}
          >
            Start Your Project →
          </motion.a>
        </div>

        <div className="work-grid">
          {works.map((w, i) => (
            <WorkCard key={w.id} work={w} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function WorkCard({ work, index }: { work: typeof works[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-5% 0px' });
  const [hovered, setHovered] = useState(false);
  const { Icon } = work;
  const isLarge = index === 0 || index === 3;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: isLarge ? 'span 2' : 'span 1',
        background: hovered ? work.color : 'var(--black-2)',
        border: `1px solid ${hovered ? work.accent + '40' : 'var(--border)'}`,
        borderRadius: 20, padding: '2.5rem',
        cursor: 'default',
        transition: 'all 0.5s var(--ease-out)',
        position: 'relative', overflow: 'hidden',
        minHeight: 240,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}
    >
      {/* Glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute', top: -60, right: -60,
          width: 260, height: 260, borderRadius: '50%',
          background: `radial-gradient(circle, ${work.accent}1A 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em',
            color: hovered ? work.accent : 'var(--white-3)', transition: 'color 0.3s', textTransform: 'uppercase',
          }}>
            {work.label}
          </span>
          <motion.div
            animate={{ x: hovered ? 0 : -6, opacity: hovered ? 1 : 0 }}
            style={{ color: work.accent, fontSize: '0.85rem' }}
          >
            ↗
          </motion.div>
        </div>

        {/* Icon box */}
        <div style={{
          width: isLarge ? 64 : 52, height: isLarge ? 64 : 52,
          borderRadius: 16, marginBottom: '1.5rem',
          background: `${work.accent}18`,
          border: `1px solid ${work.accent}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform 0.4s var(--ease-out), background 0.4s',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }}>
          <Icon size={isLarge ? 28 : 22} color={work.accent} />
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: isLarge ? 'clamp(1.4rem, 2.5vw, 2rem)' : '1.2rem',
          letterSpacing: '-0.025em', marginBottom: '0.5rem', color: 'var(--white)',
        }}>
          {work.title}
        </div>
        <motion.p
          animate={{ opacity: hovered ? 1 : 0.5 }}
          style={{ fontSize: '0.85rem', color: 'var(--white-2)', lineHeight: 1.65 }}
        >
          {work.desc}
        </motion.p>
      </div>
    </motion.div>
  );
}
