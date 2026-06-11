import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, Mail, Zap, Code2, Target, X as CloseIcon } from 'lucide-react';

const founders = [
  {
    initials: 'SC',
    name: 'Suyash Chandra',
    role: 'Co-Founder & Lead Developer',
    bio: 'Full-stack developer with a passion for building fast, elegant web experiences from the ground up.',
    quote: '"Great code is like great poetry—it expresses complex ideas with elegance and simplicity."',
    twitter: 'https://x.com/',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/',
    email: 'suyash@featherstudios.co',
  },
  {
    initials: 'AN',
    name: 'Arindam Nanda',
    role: 'Co-Founder & Creative Director',
    bio: 'Designer with an eye for detail and a mind for strategy — turning complex ideas into clear, beautiful visuals.',
    quote: '"Design is not just what it looks like and feels like. Design is how it works."',
    twitter: 'https://x.com/',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/',
    email: 'arindam@featherstudios.co',
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
            className="liquid-glass" 
            style={{ 
              borderRadius: 'clamp(20px, 4vw, 40px)', 
              padding: 'clamp(2rem, 4vw, 4rem)', 
              minHeight: 'clamp(350px, 40vh, 450px)', 
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,0.02)' 
            }}
          >
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '500px' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--black)', marginBottom: '1.5rem' }}>
                <Code2 size={24} />
              </div>
              <h3 className="display" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', color: 'var(--white)', marginBottom: '1rem', fontStyle: 'italic' }}>
                Bespoke Strategy.
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--white-2)', lineHeight: 1.6 }}>
                Every brand has a story worth telling. We don't use templates. We craft custom digital architectures that perfectly align with your vision.
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
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '1rem', borderRadius: '24px' }}
              >
                {/* Better Avatar Circle */}
                <div style={{
                  width: 'clamp(100px, 12vw, 140px)',
                  aspectRatio: '1/1',
                  borderRadius: '50%',
                  position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.5rem',
                  color: 'var(--white)',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 2px 10px rgba(255,255,255,0.2)'
                }}>
                  {/* Animated Fluid Background */}
                  <motion.div 
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    style={{ position: 'absolute', inset: '-50%', background: i === 0 ? 'conic-gradient(from 0deg, var(--lime), #10b981, #3b82f6, var(--lime))' : 'conic-gradient(from 0deg, #a855f7, #ec4899, #f59e0b, #a855f7)', filter: 'blur(15px)', zIndex: 0 }}
                  />
                  <div style={{ position: 'absolute', inset: '4px', background: 'rgba(0,0,0,0.6)', borderRadius: '50%', backdropFilter: 'blur(10px)', zIndex: 1 }} />
                  <span style={{ position: 'relative', zIndex: 2, background: 'linear-gradient(135deg, var(--white), rgba(255,255,255,0.7))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
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

/* --- Founder Modal --- */
function FounderModal({ founder, onClose }: { founder: typeof founders[0]; onClose: () => void }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', cursor: 'pointer' }} 
      />

      {/* Modal Card */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
        className="liquid-glass"
        style={{ 
          position: 'relative', zIndex: 1, 
          width: '100%', maxWidth: '800px', 
          borderRadius: '32px', 
          padding: 'clamp(2rem, 5vw, 4rem)',
          display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'center',
          boxShadow: '0 40px 100px rgba(0,0,0,0.8)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)', cursor: 'pointer', transition: 'background 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--lime)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        >
          <CloseIcon size={20} />
        </button>

        {/* Modal Avatar */}
        <div style={{ flex: '1 1 200px', display: 'flex', justifyContent: 'center' }}>
          <motion.div 
            initial={{ rotate: -10, scale: 0.8 }} animate={{ rotate: 0, scale: 1 }} transition={{ delay: 0.2, type: 'spring' }}
            style={{
              width: '180px', aspectRatio: '1/1', borderRadius: '50%', position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '4rem', color: 'var(--white)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 2px 10px rgba(255,255,255,0.2)', overflow: 'hidden'
            }}
          >
            <motion.div 
              animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{ position: 'absolute', inset: '-50%', background: founder.name.includes('Suyash') ? 'conic-gradient(from 0deg, var(--lime), #10b981, #3b82f6, var(--lime))' : 'conic-gradient(from 0deg, #a855f7, #ec4899, #f59e0b, #a855f7)', filter: 'blur(20px)', zIndex: 0 }}
            />
            <div style={{ position: 'absolute', inset: '6px', background: 'rgba(0,0,0,0.6)', borderRadius: '50%', backdropFilter: 'blur(10px)', zIndex: 1 }} />
            <span style={{ position: 'relative', zIndex: 2 }}>{founder.initials}</span>
          </motion.div>
        </div>

        {/* Modal Content */}
        <div style={{ flex: '2 1 300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <motion.h3 initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="display" style={{ fontSize: '2.5rem', color: 'var(--white)', margin: '0 0 0.5rem 0' }}>
              {founder.name}
            </motion.h3>
            <motion.p initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--lime)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {founder.role}
            </motion.p>
          </div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', borderLeft: '4px solid var(--lime)' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--white)', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
              {founder.quote}
            </p>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ color: 'var(--white-2)', lineHeight: 1.6 }}>
            {founder.bio}
          </motion.p>
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
