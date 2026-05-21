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
        position: 'relative', overflow: 'hidden',
        borderRadius: 20, padding: '2.5rem',
        cursor: 'default',
        minHeight: 240,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}
    >
      {/* Sliding Gradient Border (Behind Mask) */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', width: '200%', height: '200%',
        background: `conic-gradient(from 0deg, transparent 70%, ${work.accent} 100%)`,
        animation: 'spin-gradient 2.5s linear infinite',
        transformOrigin: '0 0', zIndex: 0,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.4s'
      }} />

      {/* Inner Mask (Solid Background) */}
      <div style={{
        position: 'absolute', inset: 1,
        background: hovered ? work.color : 'var(--black-2)',
        borderRadius: 19, zIndex: 1, transition: 'background 0.4s',
        border: hovered ? 'none' : '1px solid var(--border)'
      }} />

      {/* Animated Background (Always on) */}
      <WorkBg id={work.id} color={work.accent} hovered={hovered} />

      {/* Glow (Always on, brighter on hover) */}
      <motion.div
        animate={{ opacity: hovered ? 0.8 : 0.3 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute', top: -60, right: -60,
          width: 260, height: 260, borderRadius: '50%',
          background: `radial-gradient(circle, ${work.accent}1A 0%, transparent 70%)`,
          pointerEvents: 'none', zIndex: 2
        }}
      />

      <div style={{ position: 'relative', zIndex: 3 }}>
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

      <div style={{ position: 'relative', zIndex: 3 }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: isLarge ? 'clamp(1.4rem, 2.5vw, 2rem)' : '1.2rem',
          letterSpacing: '-0.025em', marginBottom: '0.5rem', color: 'var(--white)',
        }}>
          {work.title}
        </div>
        <motion.p
          animate={{ opacity: hovered ? 1 : 0.7 }}
          style={{ fontSize: '0.85rem', color: 'var(--white-2)', lineHeight: 1.65, margin: 0 }}
        >
          {work.desc}
        </motion.p>
      </div>
    </motion.div>
  );
}

// ---- Background Animations (Always On, Contextual) ----
function WorkBg({ id, color, hovered }: { id: string; color: string; hovered: boolean }) {
  const bgStyle: React.CSSProperties = {
    position: 'absolute', inset: 0, zIndex: 2,
    opacity: hovered ? 0.3 : 0.1,
    transition: 'opacity 0.5s ease',
    overflow: 'hidden',
    pointerEvents: 'none',
  };

  if (id === 'w1') { // Music Artist - Equalizer
    return (
      <div style={bgStyle}>
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', display: 'flex', gap: 6, alignItems: 'flex-end', height: '40%' }}>
          {[20, 60, 40, 80, 50, 90, 30].map((h, i) => (
             <motion.div key={i} style={{ width: 6, backgroundColor: color, borderRadius: 3, opacity: 0.6 }}
               animate={{ height: [`${h}%`, `${h * 0.4}%`, `${h}%`] }}
               transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
             />
          ))}
        </div>
      </div>
    );
  }

  if (id === 'w2') { // SaaS Landing - Dashboard wireframe
    return (
      <div style={bgStyle}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Sidebar */}
          <rect x="5" y="10" width="20" height="80" rx="2" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
          {/* Header */}
          <rect x="30" y="10" width="65" height="15" rx="2" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
          {/* Main Content Area */}
          <rect x="30" y="30" width="65" height="60" rx="2" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
          {/* Animated cursor/click */}
          <motion.circle cx="50" cy="50" r="4" fill={color}
            animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </div>
    );
  }

  if (id === 'w3') { // E-Commerce - Product grid
    return (
      <div style={bgStyle}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[10, 40, 70].map((x, i) => (
            <g key={i}>
              <rect x={x} y="20" width="20" height="25" rx="2" fill="none" stroke={color} strokeWidth="1" opacity="0.5" />
              <rect x={x} y="50" width="20" height="5" rx="1" fill={color} opacity="0.3" />
            </g>
          ))}
          {/* Animated cart addition indicator */}
          <motion.circle cx="80" cy="52" r="3" fill={color}
            animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
        </svg>
      </div>
    );
  }

  if (id === 'w4') { // Brand Identity - Geometric elements
    return (
      <div style={bgStyle}>
        <motion.div style={{ position: 'absolute', top: '20%', right: '20%', width: 60, height: 60, border: `2px solid ${color}`, opacity: 0.4 }}
          animate={{ rotate: 360, borderRadius: ['0%', '50%', '0%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div style={{ position: 'absolute', bottom: '20%', left: '30%', width: 40, height: 40, background: color, opacity: 0.2, borderRadius: '50%' }}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    );
  }

  if (id === 'w5') { // Creator Hub - Mobile social feed layout
    return (
      <div style={bgStyle}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Phone outline */}
          <rect x="35" y="5" width="30" height="90" rx="4" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
          {/* Profile pic */}
          <circle cx="50" cy="20" r="5" fill={color} opacity="0.4" />
          {/* Bio lines */}
          <rect x="42" y="30" width="16" height="2" fill={color} opacity="0.3" />
          <rect x="40" y="34" width="20" height="2" fill={color} opacity="0.3" />
          {/* Feed Grid */}
          <rect x="38" y="45" width="10" height="10" fill={color} opacity="0.2" />
          <rect x="52" y="45" width="10" height="10" fill={color} opacity="0.2" />
          <rect x="38" y="60" width="10" height="10" fill={color} opacity="0.2" />
          <rect x="52" y="60" width="10" height="10" fill={color} opacity="0.2" />
          {/* Animated scrolling effect via translation of a line */}
          <motion.rect x="38" y="75" width="24" height="10" fill="none" stroke={color} strokeWidth="1" opacity="0.5"
             animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>
      </div>
    );
  }

  if (id === 'w6') { // Corporate Site - Enterprise architecture layout
    return (
      <div style={bgStyle}>
         <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
           {/* Header */}
           <rect x="10" y="10" width="80" height="10" rx="1" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
           {/* Hero section */}
           <rect x="10" y="25" width="80" height="30" rx="1" fill={color} opacity="0.1" />
           {/* Three columns */}
           <rect x="10" y="60" width="23" height="30" rx="1" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
           <rect x="38" y="60" width="24" height="30" rx="1" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
           <rect x="67" y="60" width="23" height="30" rx="1" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
           
           {/* Data flow animated lines */}
           <motion.path d="M50,25 L50,55" fill="none" stroke={color} strokeWidth="2" strokeDasharray="4 4"
             animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
           />
         </svg>
      </div>
    );
  }

  return null;
}
