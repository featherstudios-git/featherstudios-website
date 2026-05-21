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
      {/* Animated Background */}
      <WorkBg id={work.id} color={work.accent} hovered={hovered} />

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

// ---- Background Animations ----
function WorkBg({ id, color, hovered }: { id: string; color: string; hovered: boolean }) {
  const bgStyle: React.CSSProperties = {
    position: 'absolute', inset: 0, zIndex: 0,
    opacity: hovered ? 0.2 : 0.02,
    transition: 'opacity 0.5s ease',
    overflow: 'hidden',
    pointerEvents: 'none',
  };

  if (id === 'w1') { // Music Artist
    return (
      <div style={bgStyle}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[20, 35, 50, 65, 80].map((x, i) => (
             <motion.rect key={i} x={x} y="40" width="8" height="20" fill={color} rx="4"
               animate={{
                 height: hovered ? [20, 60, 20] : 20,
                 y: hovered ? [40, 20, 40] : 40
               }}
               transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
             />
          ))}
        </svg>
      </div>
    );
  }

  if (id === 'w2') { // SaaS Landing
    return (
      <div style={bgStyle}>
        <motion.div
          style={{ position: 'absolute', top: '10%', right: '10%', width: '150%', height: '150%', background: \`radial-gradient(circle at 100% 0%, \${color} 0%, transparent 60%)\` }}
          animate={{ opacity: hovered ? 0.3 : 0, scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path d="M-10,80 Q25,20 50,50 T110,10" fill="none" stroke={color} strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    );
  }

  if (id === 'w3') { // E-Commerce
    return (
      <div style={bgStyle}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 10 }}>
          {[0, 1, 2].map((i) => (
             <motion.div key={i} style={{ width: 40, height: 60, border: \`2px solid \${color}\`, borderRadius: 8 }}
               animate={{
                 y: hovered ? [-10, 10, -10] : 0,
                 opacity: hovered ? [0.4, 1, 0.4] : 0.4
               }}
               transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
             />
          ))}
        </div>
      </div>
    );
  }

  if (id === 'w4') { // Brand Identity
    return (
      <div style={bgStyle}>
         <motion.div style={{ position: 'absolute', top: '30%', left: '20%', width: 100, height: 100, background: color, filter: 'blur(30px)', opacity: 0.5 }}
           animate={{
             x: hovered ? [0, 50, 0] : 0,
             scale: hovered ? [1, 1.5, 1] : 1
           }}
           transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
         />
         <motion.div style={{ position: 'absolute', bottom: '10%', right: '10%', width: 80, height: 80, border: \`4px solid \${color}\`, borderRadius: '50%' }}
           animate={{ scale: hovered ? [1, 1.2, 1] : 1, rotate: hovered ? 180 : 0 }}
           transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
         />
      </div>
    );
  }

  if (id === 'w5') { // Creator Hub
    return (
      <div style={bgStyle}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.rect x="30" y="20" width="40" height="20" rx="4" fill="none" stroke={color} strokeWidth="2"
            animate={{ opacity: hovered ? 1 : 0.2, y: hovered ? 15 : 20 }} transition={{ duration: 0.5 }}
          />
          <motion.circle cx="50" cy="60" r="15" fill="none" stroke={color} strokeWidth="2"
            animate={{ opacity: hovered ? 1 : 0.2, scale: hovered ? 1.2 : 1 }} transition={{ duration: 0.5, delay: 0.1 }}
          />
        </svg>
      </div>
    );
  }

  if (id === 'w6') { // Corporate Site
    return (
      <div style={bgStyle}>
         <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
           {[10, 40, 70].map((y, i) => (
             <motion.rect key={i} x="10" y={y} width="80" height="15" rx="2" fill="none" stroke={color} strokeWidth="1.5"
               animate={{
                 x: hovered ? (i % 2 === 0 ? 5 : -5) : 0,
                 opacity: hovered ? 1 : 0.2
               }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
             />
           ))}
         </svg>
      </div>
    );
  }

  return null;
}
