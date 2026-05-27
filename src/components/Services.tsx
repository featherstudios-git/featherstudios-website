import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Globe, Rocket, ShoppingBag, Search, Megaphone, Palette, CheckCircle2, TrendingUp
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'web', num: '01', icon: Globe,
    name: 'Website Design & Development',
    desc: 'Custom-built from scratch. Pixel-perfect, performance-first, and designed to make your competitors jealous.',
    tags: ['HTML/CSS', 'React', 'Next.js', 'WordPress'],
    accent: '#BCFF4F',
  },
  {
    id: 'landing', num: '02', icon: Rocket,
    name: 'Landing Pages',
    desc: 'Conversion machines. Every element is intentional — built to turn traffic into customers and inquiries into revenue.',
    tags: ['Conversion CRO', 'A/B Testing', 'Analytics'],
    accent: '#60a5fa',
  },
  {
    id: 'ecom', num: '03', icon: ShoppingBag,
    name: 'E-Commerce Stores',
    desc: 'Full online stores with seamless checkout, product showcases, and payment integrations ready on day one.',
    tags: ['Shopify', 'WooCommerce', 'Custom'],
    accent: '#fb923c',
  },
  {
    id: 'seo', num: '04', icon: Search,
    name: 'Google SEO Optimization',
    desc: 'Get found. We handle keyword strategy, technical audits, and content optimization to own your search rankings.',
    tags: ['On-Page SEO', 'Technical Audit', 'Analytics'],
    accent: '#34d399',
  },
  {
    id: 'social', num: '05', icon: Megaphone,
    name: 'Social Media Ads',
    desc: 'Campaigns that actually perform. Meta, TikTok, and Google Ads built around your goals and your audience.',
    tags: ['Meta Ads', 'TikTok Ads', 'Google Ads'],
    accent: '#f472b6',
  },
  {
    id: 'brand', num: '06', icon: Palette,
    name: 'Brand Identity & Design',
    desc: 'Logos, typography, color systems, brand guidelines — everything to make you completely unmistakable.',
    tags: ['Logo Design', 'Brand Kit', 'Social Assets', 'Icons'],
    accent: '#a78bfa',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(headerRef.current.children,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: headerRef.current, start: 'top 80%', toggleActions: 'play none none none' },
          }
        );
      }
      if (gridRef.current) {
        gsap.fromTo(gridRef.current.children,
          { y: 100, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" style={{ background: 'var(--black)', padding: 'var(--pad-y) 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', zIndex: 0, opacity: 0.35,
          filter: 'blur(4px)',
        }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_105838_084968f2-4415-42a4-971a-3bec54539549.mp4"
      />
      {/* Dark Overlays for Readability */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to bottom, var(--black) 0%, transparent 15%, transparent 85%, var(--black) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(circle at center, transparent 0%, var(--black) 90%)',
      }} />

      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '40%', height: 1, zIndex: 2,
        background: 'linear-gradient(90deg, transparent, rgba(188,255,79,0.2), transparent)',
      }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--pad-x)' }}>
        <div ref={headerRef} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div className="label" style={{ marginBottom: '1rem' }}>— What We Do</div>
            <h2 className="display h2">
              Services Built to<br />
              <span style={{ color: 'var(--lime)' }}>Grow Your Brand</span>
            </h2>
          </div>
          <p style={{ maxWidth: 340, color: 'var(--white-2)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            From beautiful websites to full digital campaigns — everything under one roof, one team.
          </p>
        </div>

        <div ref={gridRef} className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.num} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div style={{
      gridColumn: index === 0 || index === 5 ? 'span 2' : 'span 1',
      gridRow: index === 1 ? 'span 2' : 'span 1',
    }}>
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ scale: hovered ? 1.015 : 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative', borderRadius: 24, overflow: 'hidden',
          minHeight: index === 1 ? '100%' : 400,
          background: 'var(--black-2)', border: '1px solid',
          borderColor: hovered ? service.accent + '50' : 'var(--border)',
          transition: 'border-color 0.4s, box-shadow 0.4s',
          boxShadow: hovered ? `0 20px 50px ${service.accent}15` : 'none',
          display: 'flex', flexDirection: 'column', cursor: 'default',
        }}
      >
        {/* Glow Background */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(circle at 50% 100%, ${service.accent}${hovered ? '1F' : '05'} 0%, transparent ${hovered ? '80%' : '60%'})`,
          transition: 'background 0.5s', pointerEvents: 'none',
        }} />

        {/* Motion Graphic Visual — top half */}
        <div style={{
          position: 'relative', height: index === 1 ? '55%' : 220,
          overflow: 'hidden', flexShrink: 0,
          borderBottom: `1px solid ${hovered ? service.accent + '25' : 'var(--border)'}`,
          transition: 'border-color 0.4s',
        }}>
          <ServiceVisual id={service.id} color={service.accent} hovered={hovered} />
        </div>

        {/* Content — bottom half */}
        <div style={{
          padding: '2rem', display: 'flex', flexDirection: 'column',
          gap: '1rem', flex: 1, position: 'relative', zIndex: 2,
        }}>
          {/* Number + Icon row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.15em',
              color: service.accent, opacity: 0.8,
            }}>{service.num}</span>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: `${service.accent}15`, border: `1px solid ${service.accent}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'box-shadow 0.4s, transform 0.4s',
              boxShadow: hovered ? `0 0 20px ${service.accent}30` : 'none',
              transform: hovered ? 'scale(1.1)' : 'scale(1)',
            }}>
              <Icon size={20} color={service.accent} />
            </div>
          </div>

          {/* Title */}
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: index === 0 || index === 5 ? 'clamp(1.6rem, 2.5vw, 2rem)' : '1.3rem',
            letterSpacing: '-0.02em', color: 'var(--white)', lineHeight: 1.15,
            marginTop: '0.5rem',
          }}>
            {service.name}
          </h3>

          {/* Description */}
          <p style={{ fontSize: '0.9rem', color: 'var(--white-2)', lineHeight: 1.65, margin: 0 }}>
            {service.desc}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto', paddingTop: '1rem' }}>
            {service.tags.map(t => (
              <span key={t} style={{
                fontSize: '0.62rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em',
                textTransform: 'uppercase', padding: '0.35rem 0.75rem',
                background: hovered ? `${service.accent}10` : 'rgba(255,255,255,0.03)',
                border: `1px solid ${hovered ? service.accent + '30' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: 100, color: hovered ? service.accent : 'var(--white-3)',
                transition: 'all 0.4s',
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ──────────────────────────────────────────── */
/* Unique Motion Graphic Visuals per Service   */
/* ──────────────────────────────────────────── */

function ServiceVisual({ id, color, hovered }: { id: string; color: string; hovered: boolean }) {
  if (id === 'web') return <WebVisual color={color} hovered={hovered} />;
  if (id === 'landing') return <LandingVisual color={color} hovered={hovered} />;
  if (id === 'ecom') return <EcomVisual color={color} hovered={hovered} />;
  if (id === 'seo') return <SeoVisual color={color} hovered={hovered} />;
  if (id === 'social') return <SocialVisual color={color} hovered={hovered} />;
  if (id === 'brand') return <BrandVisual color={color} hovered={hovered} />;
  return null;
}

/* 01 — Website: Premium Browser Window with Code + 3D Shape */
function WebVisual({ color, hovered }: { color: string; hovered: boolean }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 2rem' }}>
      <motion.div
        animate={{ y: hovered ? -8 : 0, scale: hovered ? 1.02 : 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          width: '95%', maxWidth: 500, borderRadius: 12, overflow: 'hidden',
          border: `1px solid ${color}30`, background: 'var(--black-3)',
          boxShadow: hovered ? `0 20px 40px rgba(0,0,0,0.5), 0 0 40px ${color}15` : '0 10px 30px rgba(0,0,0,0.3)',
          display: 'flex', flexDirection: 'column', height: '100%',
        }}
      >
        {/* Browser bar */}
        <div style={{ height: 28, background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: 6, padding: '0 12px', borderBottom: `1px solid ${color}20` }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840' }} />
          <div style={{ flex: 1, height: 14, marginLeft: 12, borderRadius: 4, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)' }}>featherstudios.com/build</span>
          </div>
        </div>
        {/* Content area */}
        <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
          {/* Left Code Panel */}
          <div style={{ width: '45%', borderRight: `1px solid ${color}20`, padding: '12px', background: 'rgba(0,0,0,0.3)' }}>
            <motion.div
              animate={{ opacity: hovered ? 1 : 0.5 }}
              transition={{ duration: 0.4 }}
              style={{ fontFamily: 'var(--font-mono)', fontSize: 8, lineHeight: 1.8, whiteSpace: 'pre' }}
            >
              <span style={{ color: '#f472b6' }}>import</span> <span style={{ color: '#60a5fa' }}>{'{ motion }'}</span> <span style={{ color: '#f472b6' }}>from</span> <span style={{ color: '#34d399' }}>'framer-motion'</span>;<br/><br/>
              <span style={{ color: '#a78bfa' }}>export default function</span> <span style={{ color: '#fb923c' }}>App</span>() {'{'}<br/>
              {'  '}<span style={{ color: '#f472b6' }}>return</span> (<br/>
              {'    '}&lt;<span style={{ color: '#60a5fa' }}>motion.div</span><br/>
              {'      '}animate={'{'} rotate: <span style={{ color: color }}>360</span> {'}'}<br/>
              {'      '}className=<span style={{ color: '#34d399' }}>"hero-layer"</span><br/>
              {'    '}&gt;<br/>
              {'      '}Welcome<br/>
              {'    '}&lt;/<span style={{ color: '#60a5fa' }}>motion.div</span>&gt;<br/>
              {'  '});<br/>
              {'}'}
            </motion.div>
          </div>
          {/* Right Preview area */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{ width: 80, height: 80, border: `1px solid ${color}40`, borderRadius: '30%', position: 'absolute' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{ width: 60, height: 60, border: `1px dashed ${color}60`, borderRadius: '40%', position: 'absolute' }}
            />
            <div style={{ width: 30, height: 30, background: color, borderRadius: '50%', boxShadow: `0 0 30px ${color}` }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* 02 — Landing: Browser Mockup with Conversion UI */
function LandingVisual({ color, hovered }: { color: string; hovered: boolean }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <motion.div
        animate={{ y: hovered ? -8 : 0, scale: hovered ? 1.02 : 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          width: '100%', height: '100%', borderRadius: 12, overflow: 'hidden',
          border: `1px solid ${color}30`, background: 'var(--black-3)',
          display: 'flex', flexDirection: 'column', position: 'relative',
        }}
      >
        <div style={{ height: 20, background: 'rgba(255,255,255,0.03)', borderBottom: `1px solid ${color}15`, display: 'flex', alignItems: 'center', padding: '0 10px', gap: 4 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
        </div>
        <div style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
          {/* Mock Hero Text */}
          <motion.div animate={{ width: ['40%', '70%', '40%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} style={{ height: 6, background: 'rgba(255,255,255,0.4)', borderRadius: 4 }} />
          <motion.div animate={{ width: ['60%', '30%', '60%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} style={{ height: 6, background: 'rgba(255,255,255,0.2)', borderRadius: 4 }} />
          
          {/* Lead capture form */}
          <div style={{ width: '80%', padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: 8, border: `1px solid ${color}20`, display: 'flex', gap: 8 }}>
            <div style={{ flex: 1, height: 16, background: 'rgba(255,255,255,0.1)', borderRadius: 4 }} />
            <motion.div
              animate={{ background: [color + '40', color, color + '40'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: 30, height: 16, borderRadius: 4 }}
            />
          </div>

          {/* Floating conversion badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', right: '5%', top: '25%',
              background: 'var(--black)', border: `1px solid ${color}50`,
              padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 6,
              boxShadow: `0 10px 20px rgba(0,0,0,0.5), 0 0 15px ${color}20`
            }}
          >
            <TrendingUp size={12} color={color} />
            <span style={{ color, fontSize: 9, fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>+340% CVR</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* 03 — E-Commerce: Dynamic Product Cards */
function EcomVisual({ color, hovered }: { color: string; hovered: boolean }) {
  const products = [
    { w: 60, h: 80, price: '$49', rotate: -8, x: -40, z: 1 },
    { w: 70, h: 90, price: '$79', rotate: 0, x: 0, z: 3 },
    { w: 60, h: 80, price: '$35', rotate: 8, x: 40, z: 1 },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {products.map((p, i) => (
        <motion.div key={i}
          animate={{ 
            y: hovered ? (i === 1 ? -15 : -5) : 0, 
            x: hovered ? p.x * 1.2 : p.x,
            rotate: hovered ? p.rotate * 1.5 : p.rotate,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            position: 'absolute', width: p.w, height: p.h, borderRadius: 8,
            background: `linear-gradient(145deg, rgba(40,40,40,1), rgba(20,20,20,1))`,
            border: `1px solid ${color}${i === 1 ? '50' : '20'}`, padding: 8,
            display: 'flex', flexDirection: 'column', zIndex: p.z,
            boxShadow: `0 15px 30px rgba(0,0,0,0.4)`,
          }}
        >
          <div style={{ flex: 1, background: `${color}15`, borderRadius: 4, marginBottom: 8 }} />
          <div style={{ height: 4, width: '60%', background: 'rgba(255,255,255,0.4)', borderRadius: 2, marginBottom: 4 }} />
          <div style={{ height: 4, width: '40%', background: 'rgba(255,255,255,0.2)', borderRadius: 2 }} />
          
          {/* Add to cart btn */}
          <div style={{ marginTop: 'auto', height: 12, background: i === 1 ? color : 'rgba(255,255,255,0.1)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.4s' }}>
            <span style={{ fontSize: 6, fontWeight: 'bold', color: i === 1 ? '#000' : '#fff' }}>{p.price}</span>
          </div>
        </motion.div>
      ))}

      {/* Floating cart notification */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, type: 'spring', bounce: 0.5, delay: 0.1 }}
        style={{
          position: 'absolute', top: '20%', right: '20%', zIndex: 10,
          background: color, color: '#000', padding: '4px 8px', borderRadius: 12,
          fontSize: 10, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 4,
          boxShadow: `0 5px 15px ${color}40`
        }}
      >
        <ShoppingBag size={10} /> +1
      </motion.div>
    </div>
  );
}

/* 04 — SEO: Dashboard with charts and #1 ranking */
function SeoVisual({ color, hovered }: { color: string; hovered: boolean }) {
  const bars = [35, 50, 42, 65, 55, 78, 70, 90, 85, 100];
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Search Bar */}
      <div style={{ width: '100%', height: 28, background: 'var(--black-3)', borderRadius: 12, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', padding: '0 10px', gap: 8 }}>
        <Search size={12} color={color} />
        <motion.div 
          animate={{ width: hovered ? '80%' : '30%' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ height: 4, background: 'rgba(255,255,255,0.5)', borderRadius: 2 }} 
        />
      </div>

      <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
        {/* Search Result Card */}
        <motion.div
          animate={{ y: hovered ? -5 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ flex: 1, background: 'rgba(0,0,0,0.4)', border: `1px solid ${color}40`, borderRadius: 8, padding: '10px', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: color }} />
          <div style={{ display: 'flex', gap: 4, alignItems: 'center', marginBottom: 8 }}>
            <div style={{ width: 12, height: 12, background: color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={8} color="#000" />
            </div>
            <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>featherstudios.co</span>
          </div>
          <div style={{ width: '90%', height: 6, background: color, borderRadius: 2, marginBottom: 6 }} />
          <div style={{ width: '60%', height: 4, background: 'rgba(255,255,255,0.3)', borderRadius: 2 }} />
        </motion.div>

        {/* Chart */}
        <div style={{ width: '40%', display: 'flex', alignItems: 'flex-end', gap: 3 }}>
          {bars.map((h, i) => (
            <motion.div key={i}
              initial={{ scaleY: 0.2 }}
              animate={{ scaleY: hovered ? 1 : 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: 'easeOut' }}
              style={{
                flex: 1, height: `${h}%`,
                background: `linear-gradient(to top, ${color}20, ${color})`,
                borderRadius: '2px 2px 0 0', transformOrigin: 'bottom',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* 05 — Social: Mobile Feed UI */
function SocialVisual({ color, hovered }: { color: string; hovered: boolean }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        animate={{ y: hovered ? -10 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          width: 140, height: 260, background: 'rgba(0,0,0,0.8)', border: `2px solid ${color}40`,
          borderRadius: 20, padding: '12px', display: 'flex', flexDirection: 'column', gap: 12,
          boxShadow: hovered ? `0 15px 30px rgba(0,0,0,0.6), 0 0 20px ${color}20` : 'none',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: `${color}50` }} />
          <div style={{ width: 60, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.4)' }} />
        </div>
        {/* Main image/video */}
        <div style={{ flex: 1, borderRadius: 12, background: `linear-gradient(45deg, ${color}20, transparent)`, border: `1px solid ${color}30`, position: 'relative', overflow: 'hidden' }}>
          {/* Flying hearts */}
          <motion.div
            animate={{ y: hovered ? -100 : 0, opacity: hovered ? [0, 1, 0] : 0 }}
            transition={{ duration: 1.5, repeat: hovered ? Infinity : 0, repeatDelay: 0.5 }}
            style={{ position: 'absolute', bottom: 10, right: 10 }}
          >
            <span style={{ fontSize: 16 }}>❤️</span>
          </motion.div>
          <motion.div
            animate={{ y: hovered ? -120 : 0, x: -10, opacity: hovered ? [0, 1, 0] : 0 }}
            transition={{ duration: 1.8, repeat: hovered ? Infinity : 0, delay: 0.3 }}
            style={{ position: 'absolute', bottom: 10, right: 20 }}
          >
            <span style={{ fontSize: 12 }}>👍</span>
          </motion.div>
        </div>
        {/* Metrics */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 4px' }}>
          <div style={{ height: 4, width: '40%', background: 'rgba(255,255,255,0.2)', borderRadius: 2 }} />
          <div style={{ height: 4, width: '20%', background: color, borderRadius: 2 }} />
        </div>
      </motion.div>
    </div>
  );
}

/* 06 — Brand: Color Swatches & Typography Grid */
function BrandVisual({ color, hovered }: { color: string; hovered: boolean }) {
  const swatches = [color, '#F2F0EB', '#1C1C1C', '#60a5fa', '#a78bfa'];
  
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '2rem', display: 'flex', gap: '2rem' }}>
      {/* Swatches */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1, justifyContent: 'center' }}>
        {swatches.map((c, i) => (
          <motion.div key={i}
            animate={{ 
              width: hovered ? '100%' : '60%', 
              x: hovered ? (i % 2 === 0 ? 5 : -5) : 0
            }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            style={{ 
              height: 20, borderRadius: 6, background: c, 
              border: c === '#1C1C1C' ? '1px solid rgba(255,255,255,0.2)' : 'none',
              display: 'flex', alignItems: 'center', padding: '0 8px'
            }}
          >
            {hovered && c === color && <span style={{ fontSize: 8, fontFamily: 'var(--font-mono)', color: '#000', fontWeight: 'bold' }}>PRIMARY</span>}
          </motion.div>
        ))}
      </div>

      {/* Typography & Logo Scale */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center', borderLeft: `1px solid ${color}20`, paddingLeft: '2rem' }}>
        <motion.div
          animate={{ scale: hovered ? 1.1 : 1, color: hovered ? color : '#fff' }}
          transition={{ duration: 0.4 }}
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 48, lineHeight: 1 }}
        >
          Aa
        </motion.div>
        <div style={{ display: 'flex', gap: 4 }}>
          <div style={{ width: 40, height: 4, background: 'rgba(255,255,255,0.4)', borderRadius: 2 }} />
          <div style={{ width: 20, height: 4, background: color, borderRadius: 2 }} />
        </div>
      </div>
    </div>
  );
}
