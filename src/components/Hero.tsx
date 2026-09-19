import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const VIDEO_SRC = '/hero_feat.mp4';

export default function Hero() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section id="hero" style={{
      position: 'relative', width: '100%', minHeight: '100vh',
      background: 'var(--black)', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 'var(--pad-y) var(--pad-x)',
      paddingTop: 'calc(var(--pad-y) + var(--nav-h))'
    }}>
      <div style={{
        maxWidth: 'var(--max-w)',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr',
        gap: isMobile ? '3rem' : '4rem',
        alignItems: 'center',
        zIndex: 10
      }}>
        {/* Left Side: Typography */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '650px' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="display"
            style={{
              fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
              lineHeight: 1.05,
              color: 'var(--white)',
              letterSpacing: '-0.03em',
              margin: 0
            }}
          >
            We Build Digital <br/>
            <span style={{ color: 'var(--lime)', fontStyle: 'italic' }}>Experiences</span> <br/>
            That Convert.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
              color: 'var(--white-2)',
              lineHeight: 1.6,
              fontWeight: 400,
              margin: 0,
              maxWidth: '550px'
            }}
          >
            We help individuals, startups, businesses, and organizations start, grow, and thrive through every stage of their journey. Together, we build stories worth telling and turn ambitions into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}
          >
            <a href="#contact" className="btn btn-lime">
              Start Your Project <ArrowUpRight size={18} strokeWidth={2.5} />
            </a>
            
            <a href="#work" className="btn btn-glass" style={{ background: 'transparent', border: 'none' }}>
              Explore Work <ArrowDown size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            margin: isMobile ? '0 auto' : '0 0 0 auto',
            aspectRatio: isMobile ? '4/3' : '4/5',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            background: 'var(--black-2)'
          }}
        >
          {/* Text Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            background: 'rgba(0,0,0,0.25)' // slight dark overlay to make text pop
          }}>
            <h2 className="display" style={{
              margin: 0,
              color: 'var(--white)',
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              lineHeight: 1,
              fontStyle: 'italic',
              textAlign: 'center',
              textShadow: '0 10px 30px rgba(0,0,0,0.8)'
            }}>
              Feather<br/>Studios
            </h2>
          </div>

          <video
            autoPlay
            muted
            loop
            playsInline
            src={VIDEO_SRC}
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 1
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
