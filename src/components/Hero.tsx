
import { motion } from 'framer-motion';
import { Play, Clock, Globe, ArrowUpRight } from 'lucide-react';
import { FadingVideo } from './ui/FadingVideo';
import { BlurText } from './ui/BlurText';

const VIDEO_SRC = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4';

export default function Hero() {
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

      {/* Hero Content Wrapper */}
      <div style={{
        position: 'relative', zIndex: 10,
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', paddingTop: '18vh', paddingBottom: '3rem',
        paddingLeft: 'var(--pad-x)', paddingRight: 'var(--pad-x)',
      }}>
        
        {/* Badge */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="liquid-glass"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            padding: '0.25rem', paddingRight: '1rem', borderRadius: '100px',
            marginBottom: '2rem'
          }}
        >
          <span style={{
            background: 'var(--white)', color: 'var(--black)',
            padding: '0.25rem 0.75rem', borderRadius: '100px',
            fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase'
          }}>
            New
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--white)', fontWeight: 500 }}>
            Feather Studio Design System Arrives 2026
          </span>
        </motion.div>

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

        {/* Stats Row */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '4rem'
          }}
        >
          <div className="liquid-glass" style={{
            padding: '1.5rem', width: '220px', borderRadius: '1.25rem',
            display: 'flex', flexDirection: 'column', gap: '2rem'
          }}>
            <Clock size={28} color="var(--white)" strokeWidth={1.5} />
            <div>
              <div className="display" style={{ fontSize: '2.5rem', lineHeight: 1, fontStyle: 'italic', letterSpacing: '-0.02em' }}>34.5 Min</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--white-2)', marginTop: '0.5rem', fontWeight: 300 }}>Average Session Time</div>
            </div>
          </div>
          
          <div className="liquid-glass" style={{
            padding: '1.5rem', width: '220px', borderRadius: '1.25rem',
            display: 'flex', flexDirection: 'column', gap: '2rem'
          }}>
            <Globe size={28} color="var(--white)" strokeWidth={1.5} />
            <div>
              <div className="display" style={{ fontSize: '2.5rem', lineHeight: 1, fontStyle: 'italic', letterSpacing: '-0.02em' }}>2.8B+</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--white-2)', marginTop: '0.5rem', fontWeight: 300 }}>Users Reached Globally</div>
            </div>
          </div>
        </motion.div>



      </div>
    </section>
  );
}
