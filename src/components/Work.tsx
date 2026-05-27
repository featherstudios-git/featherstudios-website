import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Play, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const works = [
  { id: 'w1', num: '01', title: 'SoundWave', desc: 'Artist portfolio with integrated music player, tour dates & merch store.', cat: 'Web', accent: '#a855f7' },
  { id: 'w2', num: '02', title: 'Launchify', desc: 'High-converting product launch page with 34% sign-up rate.', cat: 'Landing Page', accent: '#06b6d4' },
  { id: 'w3', num: '03', title: 'Urban Threads', desc: 'Custom Shopify store — 3× revenue in 90 days post-launch.', cat: 'E-Commerce', accent: '#f97316' },
  { id: 'w4', num: '04', title: 'NovaCafe', desc: 'Complete brand system — logo, palette, packaging & guidelines.', cat: 'Branding', accent: '#BCFF4F' },
  { id: 'w5', num: '05', title: 'Zara Vibes', desc: 'Influencer bio page with brand deals, content showcase & booking.', cat: 'Landing Page', accent: '#ec4899' },
  { id: 'w6', num: '06', title: 'Apex Group', desc: 'Multi-page corporate site with case studies and client portal.', cat: 'Web', accent: '#3b82f6' },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      if (headerRef.current) {
        gsap.fromTo(headerRef.current.children,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: headerRef.current, start: 'top 80%', toggleActions: 'play none none none' },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" style={{ background: 'var(--black)', padding: 'var(--pad-y) var(--pad-x)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

        {/* Header */}
        <div ref={headerRef} style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: '6rem', flexWrap: 'wrap', gap: '2rem',
        }}>
          <div>
            <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>— Selected Work</span>
            <h2 className="display h2" style={{ lineHeight: 1.1 }}>
              Projects That<br />
              <span style={{ color: 'var(--lime)' }}>Speak for Themselves</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="btn btn-outline"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Start Your Project <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Project Grid - Editorial Offset */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'start' 
        }}>
          {works.map((w, i) => (
            <ProjectCard key={w.id} work={w} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ work, index }: { work: typeof works[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  
  // Create the alternating offset effect: even index cards are pushed down slightly
  const isOffset = index % 2 !== 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(cardRef.current,
          { y: 100, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: cardRef.current, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={isOffset ? 'work-card-offset' : ''}
      style={{
        display: 'flex', flexDirection: 'column', gap: '1.5rem',
        cursor: 'pointer',
      }}
    >
      {/* Visual Container */}
      <motion.div
        animate={{ scale: hovered ? 0.98 : 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '100%', aspectRatio: '4/5', borderRadius: 24, overflow: 'hidden',
          background: 'var(--black-2)', position: 'relative',
          border: '1px solid var(--border)',
        }}
      >
        {/* Animated Background Glow */}
        <motion.div
          animate={{ opacity: hovered ? 0.8 : 0.3, scale: hovered ? 1.2 : 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{
            position: 'absolute', inset: '-20%',
            background: `radial-gradient(circle at center, ${work.accent}30 0%, transparent 60%)`,
            filter: 'blur(40px)',
          }}
        />

        {/* Project Specific Graphic Mockup */}
        <ProjectVisual id={work.id} color={work.accent} hovered={hovered} />

        {/* View Project Overlay Badge */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'absolute', top: 24, right: 24,
            background: 'var(--black)', color: 'var(--white)',
            padding: '8px 16px', borderRadius: 100,
            display: 'flex', alignItems: 'center', gap: 6,
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem', textTransform: 'uppercase',
            letterSpacing: '0.05em', border: '1px solid var(--border)'
          }}
        >
          <Eye size={14} color={work.accent} /> View Case
        </motion.div>
      </motion.div>

      {/* Content Area */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: work.accent, letterSpacing: '0.1em' }}>
            {work.num}
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem', textTransform: 'uppercase',
            letterSpacing: '0.1em', color: 'var(--white-3)', border: '1px solid var(--border)',
            padding: '4px 10px', borderRadius: 100,
          }}>
            {work.cat}
          </span>
        </div>
        
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(2rem, 3vw, 2.5rem)', letterSpacing: '-0.03em',
          color: 'var(--white)', marginBottom: '0.5rem',
          display: 'flex', alignItems: 'center', gap: '1rem'
        }}>
          {work.title}
          <motion.span
            animate={{ x: hovered ? 10 : 0, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ color: work.accent, display: 'inline-flex' }}
          >
            <ArrowUpRight size={32} />
          </motion.span>
        </h3>
        
        <p style={{ color: 'var(--white-2)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '90%' }}>
          {work.desc}
        </p>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────── */
/* Project Visual Mockups                      */
/* ──────────────────────────────────────────── */

function ProjectVisual({ id, color, hovered }: { id: string; color: string; hovered: boolean }) {
  // Different visual layouts based on project
  if (id === 'w1') return <VisualSoundWave color={color} hovered={hovered} />;
  if (id === 'w2') return <VisualLaunchify color={color} hovered={hovered} />;
  if (id === 'w3') return <VisualUrbanThreads color={color} hovered={hovered} />;
  if (id === 'w4') return <VisualNovaCafe color={color} hovered={hovered} />;
  if (id === 'w5') return <VisualZaraVibes color={color} hovered={hovered} />;
  if (id === 'w6') return <VisualApexGroup color={color} hovered={hovered} />;
  return null;
}

// 1. SoundWave (Music Player UI)
function VisualSoundWave({ color, hovered }: { color: string; hovered: boolean }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        animate={{ y: hovered ? -20 : 0, scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '70%', height: '60%', background: 'var(--black-3)', borderRadius: 20,
          border: '1px solid var(--border)', display: 'flex', flexDirection: 'column',
          overflow: 'hidden', boxShadow: hovered ? `0 30px 60px rgba(0,0,0,0.5), 0 0 40px ${color}10` : '0 20px 40px rgba(0,0,0,0.4)',
        }}
      >
        <div style={{ flex: 1, background: `linear-gradient(180deg, ${color}30, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div animate={{ rotate: hovered ? 360 : 0 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            style={{ width: 100, height: 100, borderRadius: '50%', background: `var(--black)`, border: `2px solid ${color}50`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--black-2)', border: `1px solid ${color}` }} />
          </motion.div>
        </div>
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ width: '40%', height: 10, background: 'rgba(255,255,255,0.6)', borderRadius: 5 }} />
            <Play size={16} color={color} />
          </div>
          <div style={{ width: '100%', height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2, overflow: 'hidden' }}>
            <motion.div animate={{ width: hovered ? '80%' : '30%' }} transition={{ duration: 2, ease: 'easeInOut' }} style={{ height: '100%', background: color }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// 2. Launchify (Dashboard Chart)
function VisualLaunchify({ color, hovered }: { color: string; hovered: boolean }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        animate={{ y: hovered ? -20 : 0, scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '75%', height: '55%', background: 'var(--black)', borderRadius: 16,
          border: '1px solid var(--border)', padding: '24px', display: 'flex', flexDirection: 'column', gap: 20,
          boxShadow: hovered ? `0 30px 60px rgba(0,0,0,0.5), 0 0 40px ${color}10` : '0 20px 40px rgba(0,0,0,0.4)',
        }}
      >
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}20`, border: `1px solid ${color}40` }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center' }}>
            <div style={{ width: 80, height: 8, background: 'rgba(255,255,255,0.5)', borderRadius: 4 }} />
            <div style={{ width: 40, height: 6, background: 'rgba(255,255,255,0.2)', borderRadius: 3 }} />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, flex: 1, paddingBottom: 10 }}>
          {[30, 40, 25, 50, 65, 80, 100].map((h, i) => (
            <motion.div key={i}
              animate={{ height: hovered ? `${h}%` : `${h * 0.5}%` }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
              style={{ flex: 1, background: `linear-gradient(to top, ${color}30, ${color})`, borderRadius: '4px 4px 0 0' }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// 3. Urban Threads (Product Grid)
function VisualUrbanThreads({ color, hovered }: { color: string; hovered: boolean }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, width: '70%' }}>
        <motion.div animate={{ y: hovered ? -15 : 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ background: 'var(--black-2)', borderRadius: 16, border: '1px solid var(--border)', aspectRatio: '3/4', padding: 12, display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, background: `linear-gradient(135deg, ${color}20, transparent)`, borderRadius: 8, marginBottom: 12 }} />
          <div style={{ height: 6, width: '70%', background: 'rgba(255,255,255,0.5)', borderRadius: 3, marginBottom: 6 }} />
          <div style={{ height: 6, width: '40%', background: color, borderRadius: 3 }} />
        </motion.div>
        <motion.div animate={{ y: hovered ? -30 : -10 }} transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          style={{ background: 'var(--black-3)', borderRadius: 16, border: `1px solid ${color}40`, aspectRatio: '3/4', padding: 12, display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, background: `linear-gradient(135deg, transparent, ${color}40)`, borderRadius: 8, marginBottom: 12 }} />
          <div style={{ height: 6, width: '70%', background: 'rgba(255,255,255,0.7)', borderRadius: 3, marginBottom: 6 }} />
          <div style={{ height: 6, width: '40%', background: color, borderRadius: 3 }} />
        </motion.div>
      </div>
    </div>
  );
}

// 4. NovaCafe (Brand Package)
function VisualNovaCafe({ color, hovered }: { color: string; hovered: boolean }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div animate={{ scale: hovered ? 1.05 : 1, rotate: hovered ? 2 : 0 }} transition={{ duration: 0.6 }}
        style={{ width: '60%', aspectRatio: '1/1', background: 'var(--black)', borderRadius: '50%', border: `1px dashed ${color}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: '15%', background: `linear-gradient(45deg, ${color}40, transparent)`, borderRadius: '50%', border: '1px solid var(--border)' }} />
        <div style={{ position: 'absolute', inset: '35%', background: color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontFamily: 'var(--font-display)', fontWeight: 'bold', fontSize: 24 }}>
          NC
        </div>
      </motion.div>
    </div>
  );
}

// 5. Zara Vibes (Mobile App UI)
function VisualZaraVibes({ color, hovered }: { color: string; hovered: boolean }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div animate={{ y: hovered ? -20 : 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ width: 140, height: 280, background: 'var(--black)', borderRadius: 24, border: '4px solid var(--black-3)', padding: 10, display: 'flex', flexDirection: 'column', gap: 12, boxShadow: `0 20px 40px rgba(0,0,0,0.5)` }}>
        <div style={{ width: '100%', height: '40%', background: `linear-gradient(to bottom, ${color}30, transparent)`, borderRadius: 12, border: `1px solid ${color}40` }} />
        <div style={{ alignSelf: 'center', width: 40, height: 40, borderRadius: '50%', background: color, marginTop: -30, border: '2px solid var(--black)' }} />
        <div style={{ alignSelf: 'center', width: 60, height: 8, background: 'rgba(255,255,255,0.7)', borderRadius: 4 }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 10 }}>
          <div style={{ height: 40, background: 'var(--black-2)', borderRadius: 8 }} />
          <div style={{ height: 40, background: 'var(--black-2)', borderRadius: 8 }} />
        </div>
      </motion.div>
    </div>
  );
}

// 6. Apex Group (Corporate Bento)
function VisualApexGroup({ color, hovered }: { color: string; hovered: boolean }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gridTemplateRows: '1fr 1fr', gap: 10, width: '100%', height: '100%' }}>
        <motion.div animate={{ y: hovered ? -5 : 0 }} style={{ gridColumn: 'span 2', background: 'var(--black)', borderRadius: 12, border: `1px solid var(--border)`, padding: 12 }}>
          <div style={{ width: 20, height: 20, background: color, borderRadius: 4, marginBottom: 8 }} />
          <div style={{ width: '60%', height: 6, background: 'rgba(255,255,255,0.5)', borderRadius: 3 }} />
        </motion.div>
        <motion.div animate={{ x: hovered ? -5 : 0 }} style={{ background: `linear-gradient(45deg, ${color}30, transparent)`, borderRadius: 12, border: `1px solid ${color}40` }} />
        <motion.div animate={{ x: hovered ? 5 : 0 }} style={{ background: 'var(--black-2)', borderRadius: 12, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ArrowUpRight color={color} size={24} />
        </motion.div>
      </div>
    </div>
  );
}
