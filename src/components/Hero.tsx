
import { motion } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';
import { FadingVideo } from './ui/FadingVideo';
import { BlurText } from './ui/BlurText';

const VIDEO_SRC = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4';

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
