import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, Mail, Zap, Code2, Target, X as CloseIcon } from 'lucide-react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const founders = [
  {
    initials: 'SC',
    name: 'Suyash Chandra',
    role: 'Co-Founder & Lead Developer',
    bio: 'Full-stack developer with a passion for building fast, elegant web experiences from the ground up.',
    quote: '"Great code is like great poetry—it expresses complex ideas with elegance and simplicity."',
    twitter: 'https://x.com/suyash_xyz',
    linkedin: 'https://www.linkedin.com/in/suyash-chandra/',
    instagram: 'https://www.instagram.com/suyash_xyz/',
    email: 'featherstudiosxyz@gmail.com',
  },
  {
    initials: 'AN',
    name: 'Arindam Nanda',
    role: 'Co-Founder & Creative Director',
    bio: 'Designer with an eye for detail and a mind for strategy — turning complex ideas into clear, beautiful visuals.',
    quote: '"Design is not just what it looks like and feels like. Design is how it works."',
    twitter: 'https://x.com/arindamnanda9',
    linkedin: '',
    instagram: 'https://www.instagram.com/arindamnanda_18/',
    email: 'featherstudiosxyz@gmail.com',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [activeFounder, setActiveFounder] = useState<typeof founders[0] | null>(null);

  return (
    <section id="about" style={{
      position: 'relative',
      background: 'var(--black)',
      paddingTop: 'var(--pad-y)',
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
        
        {/* The Hook */}
        <motion.div 
          style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto clamp(4rem, 8vw, 8rem) auto' }}
        >
          <motion.h2 
            initial="hidden" 
            animate={inView ? "visible" : "hidden"} 
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {}
            }}
            className="display" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', color: 'var(--white)', lineHeight: 1.1, margin: 0, letterSpacing: '-0.02em' }}
          >
            {"Most of the internet is noise. It looks the same and feels the same. We design experiences that are impossible to ignore.".split(" ").map((word, i, arr) => (
              <motion.span 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                }}
                style={{ 
                  display: 'inline-block', 
                  marginRight: '0.25em',
                  color: i >= arr.length - 3 ? 'var(--lime)' : 'inherit',
                  fontStyle: i >= arr.length - 3 ? 'italic' : 'normal'
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: 'clamp(1rem, 2vw, 2rem)', 
          marginBottom: 'clamp(4rem, 10vw, 8rem)' 
        }}>
          
          {/* Tile 1: Bespoke Strategy */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="liquid-glass" 
            style={{ 
              borderRadius: 'clamp(20px, 4vw, 40px)', 
              padding: 'clamp(2rem, 4vw, 4rem)', 
              minHeight: 'clamp(350px, 40vh, 450px)', 
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,0.02)' 
            }}
          >
            <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} style={{ position: 'relative', zIndex: 2, maxWidth: '500px' }}>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--black)', marginBottom: '1.5rem' }}>
                <Code2 size={24} />
              </motion.div>
              <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} className="display" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', color: 'var(--white)', marginBottom: '1rem', fontStyle: 'italic' }}>
                Bespoke Strategy.
              </motion.h3>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} style={{ fontSize: '1.1rem', color: 'var(--white-2)', lineHeight: 1.6 }}>
                Every brand has a story worth telling. We don't use templates. We craft custom digital architectures that perfectly align with your vision.
              </motion.p>
            </motion.div>
            
            {/* Ambient Animation Container */}
            <div style={{ position: 'absolute', right: '-10%', bottom: '-20%', width: '60%', height: '120%', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.4 }}>
               <WireframeAnimation />
            </div>
          </motion.div>

          {/* Tile 2: Performance */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="liquid-glass" 
            style={{ 
              borderRadius: 'clamp(20px, 4vw, 40px)', 
              padding: 'clamp(2rem, 3vw, 3rem)', 
              minHeight: '350px',
              display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,0.02)' 
            }}
          >
            <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }} style={{ position: 'relative', zIndex: 2 }}>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--black)', marginBottom: '1.5rem' }}>
                <Zap size={24} />
              </motion.div>
              <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} className="display" style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem', fontStyle: 'italic' }}>
                Performance First.
              </motion.h3>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} style={{ fontSize: '1rem', color: 'var(--white-2)', lineHeight: 1.6 }}>
                Every site is engineered for speed, accessibility, and Core Web Vitals from day one. Because speed is revenue.
              </motion.p>
            </motion.div>
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, display: 'flex', alignItems: 'flex-end', padding: '2rem', opacity: 0.5 }}>
              <SpeedMetric />
            </div>
          </motion.div>

          {/* Tile 3: End-to-End */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="liquid-glass" 
            style={{ 
              borderRadius: 'clamp(20px, 4vw, 40px)', 
              padding: 'clamp(2rem, 3vw, 3rem)', 
              minHeight: '350px',
              display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,0.02)' 
            }}
          >
            <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }} style={{ position: 'relative', zIndex: 2 }}>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--black)', marginBottom: '1.5rem' }}>
                <Target size={24} />
              </motion.div>
              <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} className="display" style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem', fontStyle: 'italic' }}>
                End-to-End.
              </motion.h3>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} style={{ fontSize: '1rem', color: 'var(--white-2)', lineHeight: 1.6 }}>
                Design, dev, SEO, branding — we handle the entire ecosystem so you don't have to piece it together.
              </motion.p>
            </motion.div>
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
              <EndToEndAnimation />
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
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '1rem', borderRadius: '24px' }}
              >
                {/* Professional Avatar Circle with Blue Theme */}
                <div style={{
                  width: 'clamp(100px, 12vw, 140px)',
                  aspectRatio: '1/1',
                  borderRadius: '50%',
                  position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.5rem',
                  color: 'var(--lime)',
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%)',
                  border: '2px solid var(--lime)',
                  boxShadow: '0 10px 30px rgba(56,189,248,0.2), inset 0 0 15px rgba(56,189,248,0.1)'
                }}>
                  {/* Subtle Pulse */}
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, var(--lime-dim) 0%, transparent 70%)', zIndex: 1 }}
                  />
                  <span style={{ position: 'relative', zIndex: 2 }}>
                    {f.initials}
                  </span>
                </div>

                <div>
                  <h3 
                    className="display" 
                    onClick={() => setActiveFounder(f)}
                    style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--white)', margin: 0, letterSpacing: '-0.02em', cursor: 'pointer', display: 'inline-block', borderBottom: '2px solid transparent', transition: 'border-color 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--lime)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                  >
                    {f.name}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--lime)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem', marginBottom: '2rem' }}>
                    {f.role}
                  </p>
                  {/* Socials */}
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <SocialBtn href={f.twitter} label="X (Twitter)" icon={<X size={18} />} />
                    <SocialBtn href={f.linkedin} label="LinkedIn" icon={<LinkedinIcon />} />
                    <SocialBtn href={f.instagram} label="Instagram" icon={<InstagramIcon />} />
                    <SocialBtn href={`mailto:${f.email}`} label="Email" icon={<Mail size={18} />} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Founder Modal */}
      <AnimatePresence>
        {activeFounder && (
          <FounderModal founder={activeFounder} onClose={() => setActiveFounder(null)} />
        )}
      </AnimatePresence>

    </section>
  );
}

function SocialBtn({ href, label, icon, isMobile }: { href: string; label: string; icon: React.ReactNode, isMobile?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href || undefined}
      aria-label={label}
      target={!href || href.startsWith('mailto') ? undefined : '_blank'}
      rel={!href ? undefined : "noopener noreferrer"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: isMobile ? 40 : 48, height: isMobile ? 40 : 48, borderRadius: '50%',
        background: hovered ? 'var(--lime)' : 'rgba(255,255,255,0.03)',
        border: '1px solid',
        borderColor: hovered ? 'var(--lime)' : 'rgba(255,255,255,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hovered ? 'var(--black)' : 'var(--white)',
        transition: 'all 0.3s ease',
        cursor: !href ? 'default' : 'pointer',
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
      {/* Concentric rotating glowing rings */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.05, 1] }}
          transition={{ rotate: { duration: 20 + i * 10, repeat: Infinity, ease: 'linear' }, scale: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut' } }}
          style={{
            position: 'absolute',
            inset: `${i * 15}%`,
            border: `1px solid rgba(56,189,248,${0.3 - i * 0.05})`,
            borderRadius: i % 2 === 0 ? '50%' : '40%',
            borderStyle: i % 2 === 0 ? 'dashed' : 'solid',
          }}
        />
      ))}
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.4, 0.1] }} 
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', inset: '35%', background: 'radial-gradient(circle, var(--lime) 0%, transparent 70%)', filter: 'blur(10px)' }} 
      />
    </div>
  );
}

function SpeedMetric() {
  const bars = [40, 70, 45, 90, 60, 100];
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '120px', width: '100%', position: 'relative' }}>
      {/* Scanning Laser */}
      <motion.div 
        animate={{ x: ['-10%', '110%', '-10%'] }} 
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '10px', bottom: 0, width: '2px', background: 'var(--lime)', boxShadow: '0 0 10px var(--lime)', zIndex: 10 }}
      />
      {bars.map((h, i) => (
        <div key={i} style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'flex-end', position: 'relative' }}>
          <motion.div
            initial={{ height: '0%' }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ 
              width: '100%', 
              background: i === 5 ? 'linear-gradient(to top, rgba(56,189,248,0.2), var(--lime))' : 'linear-gradient(to top, rgba(255,255,255,0.02), rgba(255,255,255,0.1))', 
              borderRadius: '4px 4px 0 0',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Inner pulse for the highest bar */}
            {i === 5 && (
              <motion.div 
                animate={{ y: ['100%', '-100%'] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, transparent, rgba(255,255,255,0.8), transparent)' }}
              />
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

function EndToEndAnimation() {
  return (
    <div style={{ position: 'absolute', bottom: '3.5rem', left: '3rem', right: '3rem', height: '40px' }}>
      
      {/* Progress Track */}
      <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', background: 'rgba(255,255,255,0.05)', marginTop: '-1px' }} />
      
      {/* Traveling Laser */}
      <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', marginTop: '-1px', overflow: 'hidden' }}>
        <motion.div 
          animate={{ x: ['-100%', '200%'] }} 
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
          style={{ width: '50%', height: '100%', background: 'linear-gradient(90deg, transparent, var(--lime), transparent)' }} 
        />
      </div>

      {/* Pipeline Nodes */}
      {[0, 1, 2, 3].map((i) => (
        <div key={i} style={{ position: 'absolute', left: `${i * 33.33}%`, top: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            animate={{ scale: [1, 1.4, 1], boxShadow: ['0 0 0px var(--lime)', '0 0 20px var(--lime)', '0 0 0px var(--lime)'] }}
            transition={{ duration: 2.5, delay: i * (2.5 / 4), repeat: Infinity, ease: 'easeInOut' }}
            style={{ 
              width: 14, height: 14, borderRadius: '50%', 
              background: 'var(--black)', border: '2px solid var(--lime)',
              position: 'relative', zIndex: 2
            }}
          >
            <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2.5, delay: i * (2.5 / 4), repeat: Infinity }} style={{ position: 'absolute', inset: 2, background: 'var(--lime)', borderRadius: '50%' }} />
          </motion.div>
          {/* Stage Labels */}
          <span style={{ position: 'absolute', top: '22px', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--white-3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {['Idea', 'Design', 'Code', 'Scale'][i]}
          </span>
        </div>
      ))}
    </div>
  );
}

/* --- Founder Modal --- */
function FounderModal({ founder, onClose }: { founder: typeof founders[0]; onClose: () => void }) {
  const quoteWords = founder.quote.split(" ");
  const bioWords = founder.bio.split(" ");
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div style={{ 
      position: 'fixed', inset: 0, zIndex: 9999, 
      display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'center', 
      padding: isMobile ? '4rem 1rem 2rem' : '2rem',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch'
    }}>
      
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', cursor: 'pointer' }} 
      />

      {/* Fixed Close Button */}
      <button 
        onClick={onClose}
        style={{ 
          position: 'fixed', top: isMobile ? '0.75rem' : '1.5rem', right: isMobile ? '0.75rem' : '1.5rem', 
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', 
          borderRadius: '50%', width: isMobile ? 36 : 44, height: isMobile ? 36 : 44, 
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)', 
          cursor: 'pointer', transition: 'all 0.3s ease', zIndex: 10000 
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--lime)'; e.currentTarget.style.color = 'var(--black)'; e.currentTarget.style.borderColor = 'var(--lime)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--white)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
      >
        <CloseIcon size={isMobile ? 16 : 18} />
      </button>

      {/* Modal Card - Glassmorphic Masterpiece */}
      <motion.div 
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass-strong no-scrollbar"
        style={{ 
          position: 'relative', zIndex: 1, 
          width: '100%', maxWidth: '1000px', 
          maxHeight: isMobile ? 'none' : '90vh',
          height: 'auto',
          borderRadius: isMobile ? '20px' : '32px', 
          overflowY: isMobile ? 'visible' : 'auto',
          display: 'flex', flexDirection: isMobile ? 'column' : 'row',
          boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 40px rgba(56,189,248,0.05)'
        }}
      >
        {/* Glow effect behind */}
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '50%', height: '50%', background: 'var(--lime)', opacity: 0.1, filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }} />

        {/* Left Side: Avatar Panel */}
        <div style={{ flex: isMobile ? 'none' : '1 1 350px', padding: isMobile ? '3rem 2rem 2rem' : '4rem 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1, borderRight: isMobile ? 'none' : '1px solid rgba(255,255,255,0.05)', borderBottom: isMobile ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, rotateY: -30 }} animate={{ scale: 1, opacity: 1, rotateY: 0 }} transition={{ delay: 0.1, duration: 0.8, type: 'spring' }}
            style={{
              width: isMobile ? '120px' : '180px', aspectRatio: '1/1', borderRadius: '50%', position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: isMobile ? '3rem' : '4rem', color: 'var(--lime)',
              background: 'linear-gradient(145deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)',
              border: '2px solid var(--lime)',
              boxShadow: '0 0 40px rgba(56,189,248,0.3), inset 0 0 20px rgba(56,189,248,0.2)', marginBottom: isMobile ? '2rem' : '3rem'
            }}
          >
            <span style={{ position: 'relative', zIndex: 2 }}>{founder.initials}</span>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ display: 'flex', gap: '1rem' }}>
             <SocialBtn href={founder.twitter} label="X (Twitter)" icon={<X size={16} />} isMobile={isMobile} />
             <SocialBtn href={founder.linkedin} label="LinkedIn" icon={<LinkedinIcon />} isMobile={isMobile} />
             <SocialBtn href={founder.instagram} label="Instagram" icon={<InstagramIcon />} isMobile={isMobile} />
          </motion.div>
        </div>

        {/* Right Side: Editorial Content */}
        <div style={{ flex: isMobile ? 'none' : '2 1 400px', padding: isMobile ? '2rem' : 'clamp(3rem, 5vw, 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} 
              className="display" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', color: 'var(--white)', margin: '0 0 1rem 0', letterSpacing: '-0.03em', lineHeight: 1 }}
            >
              {founder.name}
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
              style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1.2rem', background: 'var(--lime-dim)', border: '1px solid var(--lime-border)', borderRadius: '100px', color: 'var(--lime)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}
            >
              {founder.role}
            </motion.div>
          </div>
          
          <div style={{ marginBottom: isMobile ? '1.5rem' : '2.5rem', position: 'relative' }}>
            <span style={{ position: 'absolute', left: '-1rem', top: '-1rem', color: 'rgba(56,189,248,0.15)', fontSize: isMobile ? '4rem' : '6rem', fontFamily: 'var(--font-display)', lineHeight: 1, pointerEvents: 'none' }}>"</span>
            <h4 className="display" style={{ fontSize: isMobile ? '1.25rem' : '1.6rem', color: 'var(--white)', fontStyle: 'italic', margin: 0, lineHeight: 1.4, position: 'relative', zIndex: 1, fontWeight: 400 }}>
              {quoteWords.map((word, i) => (
                <motion.span 
                  key={i} initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.5, delay: 0.3 + (i * 0.04), ease: 'easeOut' }}
                  style={{ display: 'inline-block', marginRight: '0.25em' }}
                >
                  {word}
                </motion.span>
              ))}
            </h4>
          </div>

          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.5, duration: 0.8 }} style={{ width: '60px', height: '2px', background: 'var(--lime-border)', marginBottom: isMobile ? '1.5rem' : '2.5rem', transformOrigin: 'left' }} />

          <p style={{ color: 'var(--white-2)', lineHeight: 1.8, fontSize: isMobile ? '0.95rem' : '1.1rem', margin: 0, maxWidth: '100%' }}>
            {bioWords.map((word, i) => (
              <motion.span 
                key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.6 + (i * 0.02) }}
                style={{ display: 'inline-block', marginRight: '0.25em' }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>

      </motion.div>
    </div>
  );
}

/* --- Custom SVG Icons --- */
function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}
