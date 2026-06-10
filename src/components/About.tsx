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
  },
  {
    initials: 'AN',
    name: 'Arindam Nanda',
    role: 'Co-Founder & Creative Director',
    bio: 'Designer with an eye for detail and a mind for strategy — turning complex ideas into clear, beautiful visuals.',
    twitter: 'https://x.com/',
    linkedin: 'https://linkedin.com/',
    email: 'arindam@featherstudios.co',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="about" style={{
      position: 'relative',
      background: 'var(--black)',
      paddingTop: 'calc(var(--pad-y) * 2)',
      paddingBottom: 'calc(var(--pad-y) * 2)',
      zIndex: 10,
    }}>
      {/* Cinematic Ambient Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <video
          autoPlay loop muted playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25, filter: 'blur(10px)' }}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--black), transparent 20%, transparent 80%, var(--black))' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, var(--black) 100%)' }} />
      </div>

      <div ref={ref} style={{ position: 'relative', zIndex: 2, maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--pad-x)' }}>
        
        {/* Sticky Layout for Philosophy & Values */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          {/* Responsive Layout Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', 
            gap: 'clamp(3rem, 6vw, 6rem)', 
            alignItems: 'start' 
          }}>
            
            {/* Left: Sticky Editorial Heading */}
            <div style={{ position: 'sticky', top: '20vh' }}>
              <motion.h2
                initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="display"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)', color: 'var(--white)', margin: 0, lineHeight: 0.9, marginBottom: '2rem' }}
              >
                Our<br /><span style={{ color: 'var(--lime)', fontStyle: 'italic' }}>Philosophy</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ fontSize: '1.2rem', color: 'var(--white-2)', lineHeight: 1.6, maxWidth: '400px' }}
              >
                We're a boutique digital agency obsessed with craft. No bloated teams, no generic templates. Just two founders building digital experiences that demand attention.
              </motion.p>
            </div>

            {/* Right: Scrolling Liquid-Glass Value Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 3vw, 2.5rem)', paddingTop: 'clamp(2rem, 15vw, 15rem)' }}>
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                    className="liquid-glass"
                    style={{
                      padding: 'clamp(2rem, 4vw, 3rem)',
                      borderRadius: 'clamp(20px, 3vw, 30px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.5rem',
                      background: 'rgba(255,255,255,0.02)',
                    }}
                  >
                    <div style={{ 
                      width: 56, height: 56, borderRadius: '50%', background: 'var(--lime)', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--black)' 
                    }}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="display" style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem', fontStyle: 'italic', letterSpacing: '-0.02em' }}>
                        {v.title}
                      </h3>
                      <p style={{ fontSize: '1.05rem', color: 'var(--white-2)', lineHeight: 1.6, margin: 0 }}>
                        {v.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Spacer */}
          <div style={{ height: 'clamp(4rem, 10vw, 8rem)' }} />

          {/* Founders Cinematic Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--white)', textAlign: 'center', marginBottom: '3rem', lineHeight: 1 }}>
              Meet the <span style={{ color: 'var(--lime)', fontStyle: 'italic' }}>Founders</span>
            </h2>
            
            <div className="liquid-glass" style={{
              borderRadius: 'clamp(30px, 4vw, 40px)',
              padding: 'clamp(2rem, 5vw, 5rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(3rem, 6vw, 6rem)',
              background: 'rgba(255,255,255,0.02)'
            }}>
              {founders.map((f, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {/* Avatar Circle */}
                  <div style={{
                    width: 'clamp(100px, 12vw, 140px)',
                    aspectRatio: '1/1',
                    borderRadius: '50%',
                    background: 'var(--black-2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.5rem',
                    color: 'var(--lime)', border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: 'inset 0 0 30px rgba(0,0,0,0.8)'
                  }}>
                    {f.initials}
                  </div>
                  <div>
                    <h3 className="display" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--white)', margin: 0, letterSpacing: '-0.02em' }}>
                      {f.name}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--lime)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                      {f.role}
                    </p>
                    <p style={{ fontSize: '1.05rem', color: 'var(--white-2)', lineHeight: 1.6, marginBottom: '2rem' }}>
                      {f.bio}
                    </p>
                    {/* Socials */}
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <SocialBtn href={f.twitter} label="X (Twitter)" icon={<X size={18} />} />
                      <SocialBtn href={f.linkedin} label="LinkedIn" icon={<Link2 size={18} />} />
                      <SocialBtn href={`mailto:${f.email}`} label="Email" icon={<Mail size={18} />} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function SocialBtn({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 48, height: 48, borderRadius: '50%',
        background: hovered ? 'var(--lime)' : 'rgba(255,255,255,0.03)',
        border: '1px solid',
        borderColor: hovered ? 'var(--lime)' : 'rgba(255,255,255,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hovered ? 'var(--black)' : 'var(--white)',
        transition: 'all 0.3s ease',
      }}
    >
      {icon}
    </a>
  );
}
