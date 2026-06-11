
import { motion } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';
import { FadingVideo } from './ui/FadingVideo';
import { BlurText } from './ui/BlurText';
import { useMediaQuery } from '../hooks/useMediaQuery';

const VIDEO_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

export default function Hero() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section className="hero-section" style={{
      position: 'relative', width: '100%', minHeight: '100vh',
      background: 'var(--black)', overflow: 'hidden',
      display: 'flex', flexDirection: 'column'
    }}>
      {/* Background Video */}
      <FadingVideo
        src={VIDEO_SRC}
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          transform: 'translateX(-50%)',
          width: '120%',
          height: '120%',
          objectFit: 'cover',
          objectPosition: 'top',
          zIndex: 0
        }}
      />
      
      {/* Floating Gallery */}
      {!isMobile && <FloatingGallery />}

      {/* Hero Content Wrapper */}
      <div style={{
        position: 'relative', zIndex: 10,
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', paddingTop: '18vh', paddingBottom: '3rem',
        paddingLeft: 'var(--pad-x)', paddingRight: 'var(--pad-x)',
      }}>
        
                {/* Headline */}
        <BlurText
          text="We Build Digital Experiences That Convert"
          className="display"
          style={{
            fontSize: 'clamp(3.5rem, 7.5vw, 5.5rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            color: 'var(--white)',
            textAlign: 'center',
            maxWidth: '18ch',
            margin: '0 auto',
            fontStyle: 'italic',
            textShadow: '0 0 40px rgba(255,255,255,0.1)'
          }}
        />

        {/* Subheading */}
        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: '2rem',
            fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
            color: 'var(--white-2)',
            maxWidth: '650px',
            textAlign: 'center',
            lineHeight: 1.6,
            fontWeight: 300
          }}
        >
          Discover the digital universe in ways once unimaginable. Our pioneering designs and breakthrough engineering bring premium web experiences within reach—secure and extraordinary.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '2.5rem'
          }}
        >
          <a href="#contact" className="liquid-glass-strong" style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.75rem 1.5rem', borderRadius: '100px',
            color: 'var(--white)', textDecoration: 'none',
            fontSize: '0.9rem', fontWeight: 500, transition: 'all 0.3s ease'
          }}>
            Start Your Project <ArrowUpRight size={18} />
          </a>
          <a href="#work" style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            color: 'var(--white)', textDecoration: 'none',
            fontSize: '0.9rem', fontWeight: 500, opacity: 0.8, transition: 'all 0.3s ease'
          }}>
            View Showreel <Play size={16} fill="currentColor" />
          </a>
        </motion.div>




      </div>
    </section>
  );
}

const galleryItems = [
  { id: 1, title: 'Brand Identity', top: '25%', left: '15%', delay: 0 },
  { id: 2, title: 'Web Design', bottom: '25%', left: '20%', delay: 2 },
  { id: 3, title: 'Content Creation', top: '15%', right: '20%', delay: 4 },
  { id: 4, title: 'E-Commerce', bottom: '30%', right: '15%', delay: 6 },
];

function FloatingGallery() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none' }}>
      {galleryItems.map((item) => (
        <motion.div
          key={item.id}
          className="liquid-glass"
          initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
          animate={{
            clipPath: ['inset(100% 0 0 0)', 'inset(0% 0 0 0)', 'inset(0% 0 0 0)', 'inset(0 0 100% 0)'],
            opacity: [0, 1, 1, 0],
            y: [20, 0, -10, -30],
            scale: [0.95, 1, 1, 0.95]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: item.delay,
            ease: [0.25, 1, 0.36, 1],
            times: [0, 0.15, 0.85, 1]
          }}
          style={{
            position: 'absolute',
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
            width: 'max-content',
            padding: '0.6rem 1.2rem',
            borderRadius: '100px',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--lime)', boxShadow: '0 0 10px var(--lime)' }} />
          <div style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.75rem', 
            color: 'var(--white)', 
            fontWeight: 500, 
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            {item.title}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
