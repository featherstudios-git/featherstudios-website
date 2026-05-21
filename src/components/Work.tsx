import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

const works = [
  { id: 'w1', label: 'Music Artist', title: 'SoundWave', desc: 'Artist portfolio with integrated music player, tour dates & merch store.', cat: 'Web', color: '#0d0618', accent: '#a855f7' },
  { id: 'w2', label: 'SaaS Landing', title: 'Launchify', desc: 'High-converting product launch page with 34% sign-up rate.', cat: 'Landing Page', color: '#001018', accent: '#06b6d4' },
  { id: 'w3', label: 'E-Commerce', title: 'Urban Threads', desc: 'Custom Shopify store — 3× revenue in 90 days post-launch.', cat: 'E-Commerce', color: '#100800', accent: '#f97316' },
  { id: 'w4', label: 'Brand Identity', title: 'NovaCafe', desc: 'Complete brand system — logo, palette, packaging & guidelines.', cat: 'Branding', color: '#080f00', accent: '#BCFF4F' },
  { id: 'w5', label: 'Creator Hub', title: 'Zara Vibes', desc: 'Influencer bio page with brand deals, content showcase & booking.', cat: 'Landing Page', color: '#0f0010', accent: '#ec4899' },
  { id: 'w6', label: 'Corporate Site', title: 'Apex Group', desc: 'Multi-page corporate site with case studies and client portal.', cat: 'Web', color: '#00060f', accent: '#3b82f6' },
];

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="work" style={{ background: 'var(--black)', padding: 'var(--pad-y) var(--pad-x)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', perspective: 1000 }}>

        <div ref={ref} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
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

        <div className="work-grid" style={{ perspective: 1500 }}>
          {works.map((w, i) => (
            <WorkCard key={w.id} work={w} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function WorkCard({ work, index }: { work: typeof works[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-5% 0px' });
  const [hovered, setHovered] = useState(false);
  const isLarge = index === 0 || index === 3;

  // --- 3D Mouse Tracking ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const normX = useMotionValue(0);
  const normY = useMotionValue(0);

  const rotateX = useSpring(useTransform(normY, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(normX, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });
  
  // Spotlight effect
  const background = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, ${work.accent}12, transparent 80%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Pixel coordinates for spotlight
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

    // Normalized coordinates (-0.5 to 0.5) for 3D tilt
    normX.set((e.clientX - rect.left) / rect.width - 0.5);
    normY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    setHovered(false);
    normX.set(0);
    normY.set(0);
    // Move spotlight smoothly out or back to center
    mouseX.set(ref.current ? ref.current.offsetWidth / 2 : 0);
    mouseY.set(ref.current ? ref.current.offsetHeight / 2 : 0);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        gridColumn: isLarge ? 'span 2' : 'span 1',
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        position: 'relative',
        borderRadius: 24,
        cursor: 'default',
        minHeight: isLarge ? 340 : 280,
      }}
    >
      {/* Container holding the overflow: hidden styles to not clip the 3D children */}
      <div style={{
        position: 'absolute', inset: 0,
        borderRadius: 24,
        overflow: 'hidden',
        background: 'var(--black-2)',
      }}>
        {/* Sliding Gradient Border behind everything */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', width: '200%', height: '200%',
          background: `conic-gradient(from 0deg, transparent 70%, ${work.accent} 100%)`,
          animation: 'spin-gradient 2.5s linear infinite',
          transformOrigin: '0 0', zIndex: 0,
          opacity: hovered ? 1 : 0, transition: 'opacity 0.4s'
        }} />

        {/* Inner Mask - solid dark with subtle spotlight */}
        <div style={{
          position: 'absolute', inset: 1,
          background: 'var(--black-2)',
          borderRadius: 23, zIndex: 1,
          border: hovered ? 'none' : '1px solid var(--border)',
        }} />

        {/* Interactive Spotlight Overlay */}
        <motion.div
          style={{
            position: 'absolute', inset: 1,
            borderRadius: 23, zIndex: 2,
            background,
            opacity: hovered ? 1 : 0.3,
            transition: 'opacity 0.4s',
          }}
        />
        
        {/* Ambient static color splash (always visible) */}
        <div style={{
           position: 'absolute', top: '-10%', right: '-10%',
           width: '50%', height: '50%',
           background: `radial-gradient(circle, ${work.accent}1A 0%, transparent 70%)`,
           zIndex: 2, filter: 'blur(30px)'
        }} />
      </div>

      {/* Floating 3D Content (outside overflow: hidden to allow popping out) */}
      <div style={{
        position: 'absolute', inset: 0,
        padding: 'clamp(1.5rem, 5vw, 3rem)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        zIndex: 10,
        transform: 'translateZ(40px)', // The 3D pop-out effect
        pointerEvents: 'none',
      }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{
            padding: '0.4rem 1rem', borderRadius: 100,
            background: hovered ? `${work.accent}20` : 'rgba(255,255,255,0.03)',
            border: `1px solid ${hovered ? work.accent + '40' : 'rgba(255,255,255,0.1)'}`,
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase',
            color: hovered ? work.accent : 'var(--white-3)',
            transition: 'all 0.3s',
            boxShadow: hovered ? `0 0 20px ${work.accent}1A` : 'none',
          }}>
            {work.cat}
          </div>
          <motion.div
            animate={{ x: hovered ? 0 : -8, opacity: hovered ? 1 : 0 }}
            style={{ color: work.accent, fontSize: '1rem', fontWeight: 600 }}
          >
            ↗
          </motion.div>
        </div>

        {/* Huge Typography */}
        <div>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: isLarge ? 'clamp(1.8rem, 8vw, 3.5rem)' : 'clamp(1.5rem, 6vw, 2.5rem)',
            letterSpacing: '-0.04em', lineHeight: 1.1,
            marginBottom: '1rem', color: 'var(--white)',
            textShadow: hovered ? `0 10px 30px ${work.accent}33` : 'none',
            transition: 'text-shadow 0.4s',
          }}>
            {work.title}
          </div>
          <motion.p
            animate={{ opacity: hovered ? 1 : 0.6 }}
            style={{ 
              fontSize: '0.95rem', color: 'var(--white-2)', lineHeight: 1.7, 
              maxWidth: isLarge ? '60%' : '100%', margin: 0 
            }}
          >
            {work.desc}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
