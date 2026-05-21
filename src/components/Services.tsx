import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Globe, Rocket, ShoppingBag, Search, Megaphone, Palette,
  ArrowRight, CheckCircle2
} from 'lucide-react';

const services = [
  {
    num: '01',
    icon: Globe,
    name: 'Website Design & Development',
    desc: 'Custom-built from scratch. Pixel-perfect, performance-first, and designed to make your competitors jealous.',
    tags: ['HTML/CSS', 'React', 'Next.js', 'WordPress'],
    accent: '#BCFF4F',
  },
  {
    num: '02',
    icon: Rocket,
    name: 'Landing Pages',
    desc: 'Conversion machines. Every element is intentional — built to turn traffic into customers and inquiries into revenue.',
    tags: ['Conversion CRO', 'A/B Testing', 'Analytics'],
    accent: '#60a5fa',
  },
  {
    num: '03',
    icon: ShoppingBag,
    name: 'E-Commerce Stores',
    desc: 'Full online stores with seamless checkout, product showcases, and payment integrations ready on day one.',
    tags: ['Shopify', 'WooCommerce', 'Custom'],
    accent: '#fb923c',
  },
  {
    num: '04',
    icon: Search,
    name: 'Google SEO Optimization',
    desc: 'Get found. We handle keyword strategy, technical audits, and content optimization to own your search rankings.',
    tags: ['On-Page SEO', 'Technical Audit', 'Analytics'],
    accent: '#34d399',
  },
  {
    num: '05',
    icon: Megaphone,
    name: 'Social Media Ads',
    desc: 'Campaigns that actually perform. Meta, TikTok, and Google Ads built around your goals and your audience.',
    tags: ['Meta Ads', 'TikTok Ads', 'Google Ads'],
    accent: '#f472b6',
  },
  {
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
        background: hovered ? 'var(--black-3)' : 'var(--black-2)',
        border: `1px solid ${hovered ? service.accent + '35' : 'var(--border)'}`,
        borderRadius: 20,
        padding: '2rem',
        cursor: 'default',
        transition: 'all 0.4s var(--ease-out)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      {/* Accent glow top-right */}
      <div style={{
        position: 'absolute', top: -40, right: -40,
        width: 140, height: 140, borderRadius: '50%',
        background: `radial-gradient(circle, ${service.accent}18 0%, transparent 70%)`,
        transition: 'opacity 0.4s',
        opacity: hovered ? 1 : 0,
        pointerEvents: 'none',
      }} />

      {/* Top row — icon + number */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          background: hovered ? `${service.accent}18` : 'rgba(255,255,255,0.04)',
          border: `1px solid ${hovered ? service.accent + '35' : 'var(--border)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.4s',
          flexShrink: 0,
        }}>
          <Icon size={20} color={hovered ? service.accent : 'var(--white-3)'} style={{ transition: 'color 0.4s' }} />
        </div>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
          color: hovered ? service.accent : 'var(--white-3)',
          letterSpacing: '0.12em', transition: 'color 0.4s',
        }}>
          {service.num}
        </span>
      </div>

      {/* Name */}
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
        letterSpacing: '-0.02em',
        color: hovered ? 'var(--white)' : 'var(--white-2)',
        transition: 'color 0.3s',
        lineHeight: 1.3,
      }}>
        {service.name}
      </div>

      {/* Desc — revealed on hover */}
      <motion.p
        animate={{ opacity: hovered ? 1 : 0.4, y: hovered ? 0 : 4 }}
        transition={{ duration: 0.3 }}
        style={{ fontSize: '0.85rem', color: 'var(--white-2)', lineHeight: 1.65, flex: 1 }}
      >
        {service.desc}
      </motion.p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {service.tags.map((tag) => (
          <span key={tag} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: hovered ? service.accent : 'var(--white-3)',
            border: `1px solid ${hovered ? service.accent + '40' : 'var(--border)'}`,
            padding: '0.25rem 0.6rem', borderRadius: 5,
            transition: 'all 0.3s',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* CTA arrow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
        transition={{ duration: 0.3 }}
        style={{
          display: 'flex', alignItems: 'center', gap: 6,
          fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 600,
          color: service.accent,
        }}
      >
        Learn more <ArrowRight size={14} />
      </motion.div>
    </motion.div>
  );
}
