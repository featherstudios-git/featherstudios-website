import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Globe, Rocket, ShoppingBag, Search, Megaphone, Palette
} from 'lucide-react';

const services = [
  {
    id: 'web',
    num: '01',
    icon: Globe,
    name: 'Website Design & Development',
    desc: 'Custom-built from scratch. Pixel-perfect, performance-first, and designed to make your competitors jealous.',
    tags: ['HTML/CSS', 'React', 'Next.js', 'WordPress'],
    accent: '#BCFF4F',
  },
  {
    id: 'landing',
    num: '02',
    icon: Rocket,
    name: 'Landing Pages',
    desc: 'Conversion machines. Every element is intentional — built to turn traffic into customers and inquiries into revenue.',
    tags: ['Conversion CRO', 'A/B Testing', 'Analytics'],
    accent: '#60a5fa',
  },
  {
    id: 'ecom',
    num: '03',
    icon: ShoppingBag,
    name: 'E-Commerce Stores',
    desc: 'Full online stores with seamless checkout, product showcases, and payment integrations ready on day one.',
    tags: ['Shopify', 'WooCommerce', 'Custom'],
    accent: '#fb923c',
  },
  {
    id: 'seo',
    num: '04',
    icon: Search,
    name: 'Google SEO Optimization',
    desc: 'Get found. We handle keyword strategy, technical audits, and content optimization to own your search rankings.',
    tags: ['On-Page SEO', 'Technical Audit', 'Analytics'],
    accent: '#34d399',
  },
  {
    id: 'social',
    num: '05',
    icon: Megaphone,
    name: 'Social Media Ads',
    desc: 'Campaigns that actually perform. Meta, TikTok, and Google Ads built around your goals and your audience.',
    tags: ['Meta Ads', 'TikTok Ads', 'Google Ads'],
    accent: '#f472b6',
  },
  {
    id: 'brand',
    num: '06',
    icon: Palette,
    name: 'Brand Identity & Design',
    desc: 'Logos, typography, color systems, brand guidelines — everything to make you completely unmistakable.',
    tags: ['Logo Design', 'Brand Kit', 'Social Assets', 'Icons'],
    accent: '#a78bfa',
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section id="services" style={{ background: 'var(--black)', padding: 'var(--pad-y) 0' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--pad-x)' }}>

        {/* Header */}
        <div ref={ref} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <motion.div
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="label" style={{ marginBottom: '1rem', display: 'block' }}
            >
              — What We Do
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="display h2"
            >
              Services Built to<br />
              <span style={{ color: 'var(--lime)' }}>Grow Your Brand</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ maxWidth: 340, color: 'var(--white-2)', lineHeight: 1.7, fontSize: '0.95rem' }}
          >
            From beautiful websites to full digital campaigns — everything under one roof, one team.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.num} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-5% 0px' });
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: index === 0 || index === 5 ? 'span 2' : 'span 1',
        gridRow: index === 1 ? 'span 2' : 'span 1',
        position: 'relative',
        borderRadius: 20,
        padding: '2.5rem',
        cursor: 'default',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        minHeight: index === 1 ? '100%' : 340,
      }}
    >
      {/* Sliding Gradient Border (Behind Mask) */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', width: '200%', height: '200%',
        background: `conic-gradient(from 0deg, transparent 70%, ${service.accent} 100%)`,
        animation: 'spin-gradient 2.5s linear infinite',
        transformOrigin: '0 0', zIndex: 0,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.4s'
      }} />

      {/* Inner Mask (Solid Background) */}
      <div style={{
        position: 'absolute', inset: 1,
        background: hovered ? 'var(--black-3)' : 'var(--black-2)',
        borderRadius: 19, zIndex: 1, transition: 'background 0.4s',
        border: hovered ? 'none' : '1px solid var(--border)'
      }} />

      {/* Animated Background (Always on) */}
      <ServiceBg id={service.id} color={service.accent} />

      {/* Massive Watermark Number (Behind content) */}
      <div style={{
        position: 'absolute', bottom: '-5%', right: '-5%',
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(8rem, 15vw, 14rem)', lineHeight: 1,
        color: service.accent,
        opacity: hovered ? 0.05 : 0.02,
        pointerEvents: 'none', zIndex: 1,
        transition: 'opacity 0.5s ease',
        userSelect: 'none'
      }}>
        {service.num}
      </div>

      {/* Content wrapper to stay above bg */}
      <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', gap: '1.25rem', height: '100%' }}>
        
        {/* Accent glow top-right */}
        <div style={{
          position: 'absolute', top: -40, right: -40,
          width: 140, height: 140, borderRadius: '50%',
          background: `radial-gradient(circle, ${service.accent}1A 0%, transparent 70%)`,
          transition: 'transform 0.4s',
          opacity: 1,
          transform: hovered ? 'scale(1.2)' : 'scale(1)',
          pointerEvents: 'none',
        }} />

        {/* Top bar with icon */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{
            width: 52, height: 52, borderRadius: 16,
            background: `${service.accent}14`,
            border: `1px solid ${service.accent}33`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: hovered ? `0 0 20px ${service.accent}33` : 'none',
            transition: 'all 0.4s ease'
          }}>
            <Icon size={24} color={service.accent} />
          </div>
          
          {/* Arrow indicator */}
          <motion.div
            animate={{ x: hovered ? 0 : -8, opacity: hovered ? 1 : 0 }}
            style={{ color: service.accent, fontSize: '1.2rem', fontWeight: 600 }}
          >
            ↗
          </motion.div>
        </div>

        {/* Text content */}
        <div style={{ marginTop: 'auto' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: index === 0 || index === 5 ? 'clamp(1.8rem, 3vw, 2.2rem)' : '1.5rem',
            letterSpacing: '-0.02em', color: 'var(--white)',
            marginBottom: '0.75rem',
          }}>
            {service.name}
          </h3>
          <p style={{
            fontSize: '0.95rem', color: 'var(--white-2)', lineHeight: 1.6,
            maxWidth: index === 0 || index === 5 ? '70%' : '100%', margin: 0
          }}>
            {service.desc}
          </p>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          {service.tags.map(t => (
            <span key={t} style={{
              fontSize: '0.7rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em',
              textTransform: 'uppercase', padding: '0.4rem 0.8rem',
              background: 'rgba(255,255,255,0.03)', border: `1px solid ${hovered ? service.accent + '40' : 'rgba(255,255,255,0.05)'}`,
              borderRadius: 100, color: hovered ? service.accent : 'var(--white-3)',
              transition: 'all 0.3s'
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ---- Background Animations (Always On, Contextual) ----
function ServiceBg({ id, color }: { id: string; color: string }) {
  const bgStyle: React.CSSProperties = {
    position: 'absolute', inset: 0, zIndex: 2,
    opacity: 0.2,
    transition: 'opacity 0.5s ease',
    overflow: 'hidden',
    pointerEvents: 'none',
  };

  if (id === 'web') {
    return (
      <div style={bgStyle}>
        <motion.div 
          animate={{ y: ['0%', '-50%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color, whiteSpace: 'pre', padding: '2rem', opacity: 0.7 }}
        >
          {`const render = () => {
  return (
    <Container>
      <Header />
      <Hero3D />
      <Content />
    </Container>
  );
};

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
};
`}
        </motion.div>
      </div>
    );
  }

  if (id === 'landing') {
    return (
      <div style={bgStyle}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Funnel shape */}
          <path d="M20,20 L80,20 L60,50 L60,80 L40,80 L40,50 Z" fill="none" stroke={color} strokeWidth="1" opacity="0.3" />
          {/* Animated line moving down funnel */}
          <motion.path 
            d="M20,20 L80,20 L60,50 L60,80 L40,80 L40,50 Z" 
            fill="none" stroke={color} strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "linear", repeat: Infinity }}
          />
        </svg>
      </div>
    );
  }

  if (id === 'ecom') {
    return (
      <div style={bgStyle}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 15 }}>
          {/* Animated product boxes */}
          {[0, 1, 2].map((i) => (
             <motion.div key={i} style={{ width: 30, height: 40, border: `1.5px solid ${color}`, borderRadius: 4 }}
               animate={{
                 y: [-5, 5, -5],
                 opacity: [0.4, 1, 0.4]
               }}
               transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
             />
          ))}
        </div>
      </div>
    );
  }

  if (id === 'seo') {
    return (
      <div style={bgStyle}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Base graph line */}
          <path d="M10,80 L30,60 L50,65 L70,30 L90,20" fill="none" stroke={color} strokeWidth="1" opacity="0.3" />
          {/* Animated graph line */}
          <motion.path d="M10,80 L30,60 L50,65 L70,30 L90,20" fill="none" stroke={color} strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
          />
          {/* Nodes */}
          <circle cx="30" cy="60" r="2" fill={color} opacity="0.5" />
          <circle cx="50" cy="65" r="2" fill={color} opacity="0.5" />
          <circle cx="70" cy="30" r="2" fill={color} opacity="0.5" />
          <circle cx="90" cy="20" r="3" fill={color} />
        </svg>
      </div>
    );
  }

  if (id === 'social') {
    return (
      <div style={bgStyle}>
        {/* Network nodes */}
        {[...Array(6)].map((_, i) => (
          <motion.div key={i}
            style={{
              position: 'absolute',
              top: `${15 + (i * 12)}%`, left: `${15 + ((i * 17) % 60)}%`,
              width: 6, height: 6, borderRadius: '50%', backgroundColor: color
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          />
        ))}
      </div>
    );
  }

  if (id === 'brand') {
    return (
      <div style={bgStyle}>
        {/* Morphing color swatches */}
        <motion.div style={{ position: 'absolute', top: '30%', left: '30%', width: 50, height: 50, border: `2px solid ${color}` }}
          animate={{
            borderRadius: ['0%', '50%', '30%', '0%'],
            rotate: [0, 90, 180, 360]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div style={{ position: 'absolute', bottom: '20%', right: '20%', width: 30, height: 30, border: `1.5px dashed ${color}`, borderRadius: '50%' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    );
  }

  return null;
}
