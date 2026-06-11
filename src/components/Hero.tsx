
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
  { id: 1, title: 'Brand Identity', image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85', top: '25%', left: '5%', delay: 0 },
  { id: 2, title: 'Web Design', image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85', bottom: '25%', left: '15%', delay: 2 },
  { id: 3, title: 'Content Creation', image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85', top: '15%', right: '15%', delay: 4 },
  { id: 4, title: 'E-Commerce', image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85', bottom: '30%', right: '5%', delay: 6 },
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
            width: '260px',
            height: '160px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            overflow: 'hidden'
          }}
        >
          <img 
            src={item.image} 
            alt={item.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          <div style={{ 
            position: 'absolute', bottom: 0, left: 0, right: 0, 
            padding: '1.5rem 1rem 1rem',
            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
            display: 'flex', alignItems: 'flex-end'
          }}>
            <div style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.7rem', 
              color: 'var(--lime)', 
              fontWeight: 500, 
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              {item.title}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
