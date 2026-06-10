import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { X, Link2, Mail, Zap, Code2, Target, DollarSign } from 'lucide-react';

const values = [
  { icon: Zap, title: 'Performance First', desc: 'Every site is built for speed, accessibility, and Core Web Vitals from day one.' },
  { icon: Code2, title: 'No Templates', desc: 'Every design is built from scratch to match your brand — not the other way around.' },
  { icon: Target, title: 'End-to-End', desc: 'Design, dev, SEO, ads, branding — we handle everything so you don\'t have to.' },
  { icon: DollarSign, title: 'Transparent Pricing', desc: 'Fixed quotes or custom scopes — always clear, always fair, always negotiable.' },
];

const founders = [
  {
    initials: 'SC',
    name: 'Suyash Chandra',
    role: 'Co-Founder & Lead Developer',
    bio: 'Full-stack developer with a passion for building fast, elegant web experiences from the ground up.',
    twitter: 'https://x.com/',
    linkedin: 'https://linkedin.com/',
    email: 'suyash@featherstudios.co',
    accentBg: 'var(--lime)',
    accentText: 'var(--black)',
  },
  {
    initials: 'AN',
    name: 'Arindam Nanda',
    role: 'Co-Founder & Creative Director',
    bio: 'Designer with an eye for detail and a mind for strategy — turning complex ideas into clear, beautiful visuals.',
    twitter: 'https://x.com/',
    linkedin: 'https://linkedin.com/',
    email: 'arindam@featherstudios.co',
    accentBg: 'var(--border)',
    accentText: 'var(--white)',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="about" style={{
      position: 'relative',
      background: 'var(--black-2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: 'var(--pad-y) var(--pad-x)',
      overflow: 'hidden',
    }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', zIndex: 0, opacity: 0.35,
        }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
      />
      {/* Dark Overlays for Readability */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to bottom, var(--black-2) 0%, transparent 20%, transparent 80%, var(--black-2) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(circle at center, transparent 0%, var(--black-2) 90%)',
      }} />

      <div ref={ref} style={{ position: 'relative', zIndex: 2, maxWidth: 'var(--max-w)', margin: '0 auto' }}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          className="label" style={{ marginBottom: '5rem', display: 'block' }}
        />

        {/* Big statement */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="display h2"
          style={{ maxWidth: '18ch', marginBottom: '5rem' }}
        >
          <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>— Who We Are</span>
          A studio built by people who{' '}
          <em style={{ fontStyle: 'normal', color: 'var(--lime)' }}>actually care</em>{' '}
          about your results.
        </motion.h2>

        {/* Two column */}
        <div className="about-grid" style={{ marginBottom: '5rem' }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p style={{ fontSize: '1.1rem', color: 'var(--white-2)', lineHeight: 1.8, marginBottom: '2rem' }}>
              We're <strong style={{ color: 'var(--white)' }}>Feather Studios</strong> — a boutique digital agency run by two founders
              obsessed with design, code, and real results. No bloated teams. No generic templates.
              Just craft.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--white-3)', lineHeight: 1.8 }}>
              We work with businesses, social media creators, music artists, and anyone who
              wants to show up online in a way that reflects their true ambition.
              Every project is custom — because cookie-cutter doesn't cut it.
            </p>
          </motion.div>

          {/* Right — values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  style={{
                    display: 'flex', gap: '1rem', paddingBottom: '1.5rem',
                    borderBottom: i < values.length - 1 ? '1px solid var(--border)' : 'none',
                    marginBottom: i < values.length - 1 ? '1.5rem' : 0,
                  }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    background: 'rgba(201,27,0,0.08)', border: '1px solid rgba(201,27,0,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginTop: 2,
                  }}>
                    <Icon size={16} color="var(--lime)" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.35rem', letterSpacing: '-0.01em' }}>
                      {v.title}
                    </div>
                    <div style={{ fontSize: '0.87rem', color: 'var(--white-3)', lineHeight: 1.65 }}>
                      {v.desc}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Founders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--white-3)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            — Meet the Founders
          </div>
          <div className="founders-grid">
            {founders.map((f, i) => (
              <FounderCard key={f.name} founder={f} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function FounderCard({ founder, index, inView }: { founder: typeof founders[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.7 + index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 20,
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        overflow: 'hidden',
      }}
    >
      {/* Sliding Gradient Border */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', width: '200%', height: '200%',
        background: `conic-gradient(from 0deg, transparent 70%, var(--lime) 100%)`,
        animation: 'spin-gradient 2.5s linear infinite',
        transformOrigin: '0 0', zIndex: 0,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.4s'
      }} />

      {/* Inner Mask (Solid Background) */}
      <div style={{
        position: 'absolute', inset: 1,
        background: hovered ? 'var(--black-3)' : 'var(--black)',
        borderRadius: 19, zIndex: 1, transition: 'background 0.4s',
        border: hovered ? 'none' : '1px solid var(--border)'
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '1.25rem', height: '100%' }}>
        {/* Avatar + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%', flexShrink: 0,
            background: founder.accentBg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: '1.1rem', color: founder.accentText,
            border: '2px solid var(--border)',
            transition: 'transform 0.4s',
            transform: hovered ? 'scale(1.05)' : 'scale(1)'
          }}>
            {founder.initials}
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em', color: hovered ? 'var(--white)' : 'var(--white)' }}>
              {founder.name}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: hovered ? 'var(--lime)' : 'var(--white-3)', transition: 'color 0.4s', letterSpacing: '0.08em', marginTop: 3 }}>
              {founder.role}
            </div>
          </div>
        </div>

        {/* Bio */}
        <p style={{ fontSize: '0.88rem', color: 'var(--white-2)', lineHeight: 1.7, margin: 0 }}>
          {founder.bio}
        </p>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '0.6rem', paddingTop: '0.25rem', marginTop: 'auto' }}>
          <SocialBtn href={founder.twitter} label="X (Twitter)" icon={<X size={15} />} />
          <SocialBtn href={founder.linkedin} label="LinkedIn" icon={<Link2 size={15} />} />
          <SocialBtn href={`mailto:${founder.email}`} label="Email" icon={<Mail size={15} />} />
        </div>
      </div>
    </motion.div>
  );
}

function SocialBtn({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      style={{
        width: 36, height: 36, borderRadius: 10,
        background: 'var(--black-2)', border: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--white-3)', transition: 'all 0.25s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,27,0,0.4)';
        (e.currentTarget as HTMLElement).style.color = 'var(--lime)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
        (e.currentTarget as HTMLElement).style.color = 'var(--white-3)';
        (e.currentTarget as HTMLElement).style.transform = '';
      }}
    >
      {icon}
    </a>
  );
}
