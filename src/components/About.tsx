import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { X, Link2, Mail, Zap, Code2, Target } from 'lucide-react';

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

      <style>
        {`
          .bento-large { grid-column: 1 / -1; }
          @media (min-width: 1024px) { .bento-large { grid-column: span 2; } }
        `}
      </style>
      <div ref={ref} style={{ position: 'relative', zIndex: 2, maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--pad-x)' }}>
        
        {/* The Hook */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} 
          style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto clamp(4rem, 8vw, 8rem) auto' }}
        >
          <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', color: 'var(--white)', lineHeight: 1.1, margin: 0, letterSpacing: '-0.02em' }}>
            Most of the internet is noise. It looks the same and feels the same. We design experiences that are <br/>
            <span style={{ color: 'var(--lime)', fontStyle: 'italic' }}>impossible to ignore.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: 'clamp(1rem, 2vw, 2rem)', 
          marginBottom: 'clamp(4rem, 10vw, 8rem)' 
        }}>
          
          {/* Tile 1: No Templates */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
            className="liquid-glass bento-large" 
            style={{ 
              borderRadius: 'clamp(20px, 4vw, 40px)', 
              padding: 'clamp(2rem, 4vw, 4rem)', 
              minHeight: 'clamp(350px, 40vh, 500px)', 
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,0.02)' 
            }}
          >
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '500px' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--black)', marginBottom: '1.5rem' }}>
                <Code2 size={24} />
              </div>
              <h3 className="display" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', color: 'var(--white)', marginBottom: '1rem', fontStyle: 'italic' }}>
                No Templates.
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--white-2)', lineHeight: 1.6 }}>
                Every design is built from scratch to match your brand. No shortcuts, no unnecessary complexity. Just thoughtful design and clean execution.
              </p>
            </div>
            
            {/* Ambient Animation Container */}
            <div style={{ position: 'absolute', right: '-10%', bottom: '-20%', width: '60%', height: '120%', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.4 }}>
               <WireframeAnimation />
            </div>
          </motion.div>

          {/* Tile 2: Performance */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}
            className="liquid-glass" 
            style={{ 
              borderRadius: 'clamp(20px, 4vw, 40px)', 
              padding: 'clamp(2rem, 3vw, 3rem)', 
              minHeight: '350px',
              display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,0.02)' 
            }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--black)', marginBottom: '1.5rem' }}>
                <Zap size={24} />
              </div>
              <h3 className="display" style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem', fontStyle: 'italic' }}>
                Performance First.
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--white-2)', lineHeight: 1.6 }}>
                Every site is engineered for speed, accessibility, and Core Web Vitals from day one. Because speed is revenue.
              </p>
            </div>
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, display: 'flex', alignItems: 'flex-end', padding: '2rem', opacity: 0.5 }}>
              <SpeedMetric />
            </div>
          </motion.div>

          {/* Tile 3: End-to-End */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }}
            className="liquid-glass" 
            style={{ 
              borderRadius: 'clamp(20px, 4vw, 40px)', 
              padding: 'clamp(2rem, 3vw, 3rem)', 
              minHeight: '350px',
              display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,0.02)' 
            }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--black)', marginBottom: '1.5rem' }}>
                <Target size={24} />
              </div>
              <h3 className="display" style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem', fontStyle: 'italic' }}>
                End-to-End.
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--white-2)', lineHeight: 1.6 }}>
                Design, dev, SEO, branding — we handle the entire ecosystem so you don't have to piece it together.
              </p>
            </div>
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '2rem', opacity: 0.3 }}>
              <NodeAnimation />
            </div>
          </motion.div>

        </div>

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

/* --- Mini Animations for Bento Grid --- */

function WireframeAnimation() {
  return (
    <div style={{ position: 'relative', width: '300px', height: '300px' }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', inset: 0,
            border: '1px solid var(--lime)',
            borderRadius: '40px',
            opacity: 0.3 - i * 0.1,
            transform: `rotate(${i * 15}deg)`
          }}
        />
      ))}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }} 
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', inset: '25%', background: 'radial-gradient(circle, var(--lime) 0%, transparent 70%)' }} 
      />
    </div>
  );
}

function SpeedMetric() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '100px', width: '100%' }}>
      {[40, 70, 45, 90, 60, 100].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: '0%' }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
          style={{ flex: 1, background: i === 5 ? 'var(--lime)' : 'rgba(255,255,255,0.1)', borderRadius: '4px 4px 0 0' }}
        />
      ))}
    </div>
  );
}

function NodeAnimation() {
  return (
    <div style={{ position: 'relative', width: '200px', height: '200px' }}>
      {/* Lines */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <motion.path 
          d="M 40,100 Q 100,20 160,100" 
          fill="transparent" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="5,5" 
          animate={{ strokeDashoffset: [0, 20] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path 
          d="M 40,100 Q 100,180 160,100" 
          fill="transparent" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="5,5" 
          animate={{ strokeDashoffset: [20, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
      {/* Nodes */}
      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} style={{ position: 'absolute', left: '30px', top: '90px', width: 20, height: 20, borderRadius: '50%', background: 'var(--white)' }} />
      <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 3, delay: 1, repeat: Infinity }} style={{ position: 'absolute', left: '90px', top: '40px', width: 20, height: 20, borderRadius: '50%', background: 'var(--lime)' }} />
      <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 3, delay: 1.5, repeat: Infinity }} style={{ position: 'absolute', left: '90px', top: '140px', width: 20, height: 20, borderRadius: '50%', background: 'var(--lime)' }} />
      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, delay: 2, repeat: Infinity }} style={{ position: 'absolute', right: '30px', top: '90px', width: 20, height: 20, borderRadius: '50%', background: 'var(--white)' }} />
    </div>
  );
}
