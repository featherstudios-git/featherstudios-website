import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingBag, Search, Megaphone, Palette, Video } from 'lucide-react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { 
  WebDevAnimation, LandingPageAnimation, EcomAnimation, 
  SeoAnimation, SocialAdsAnimation, BrandAnimation, ContentAnimation 
} from './ServiceAnimations';

const services = [
  { id: 'web', num: '01', icon: Globe, name: 'Website Design & Development', desc: 'Custom-built from scratch. Pixel-perfect, performance-first websites and high-converting landing pages designed to make your competitors jealous.', tags: ['HTML/CSS', 'React', 'Next.js'], accent: 'var(--lime)', sloganParts: ['Build', 'Faster.', 'Scale', 'Further.'] },
  { id: 'ecom', num: '02', icon: ShoppingBag, name: 'E-Commerce Stores', desc: 'Full online stores with seamless checkout, product showcases, and payment integrations ready on day one.', tags: ['Shopify', 'WooCommerce'], accent: '#fb923c', sloganParts: ['Sell', 'More.', 'Grow', 'Wildly.'] },
  { id: 'seo', num: '03', icon: Search, name: 'Google SEO Optimization', desc: 'Get found. We handle keyword strategy, technical audits, and content optimization to own your search rankings.', tags: ['On-Page SEO', 'Technical Audit'], accent: '#34d399', sloganParts: ['Rank', 'Higher.', 'Dominate', 'Search.'] },
  { id: 'social', num: '04', icon: Megaphone, name: 'Social Media Ads', desc: 'Campaigns that actually perform. Meta and Google Ads built around your goals and your audience.', tags: ['Meta Ads', 'Google Ads'], accent: '#f472b6', sloganParts: ['Reach', 'Millions.', 'Go', 'Viral.'] },
  { id: 'brand', num: '05', icon: Palette, name: 'Brand Identity & Design', desc: 'Logos, typography, color systems, brand guidelines — everything to make you completely unmistakable.', tags: ['Logo Design', 'Brand Kit'], accent: '#a78bfa', sloganParts: ['Be', 'Unmistakable.', 'Stand', 'Out.'] },
  { id: 'content', num: '06', icon: Video, name: 'Social Media Content Creation', desc: 'Engaging, viral-ready video and static content tailored for Instagram, YouTube, and LinkedIn to build your audience.', tags: ['Short-form Video', 'Reels/Shorts'], accent: '#eab308', sloganParts: ['Scroll', 'Stopping.', 'Cult', 'Following.'] },
];

// --- 3D Flip Card Component ---
function ServiceFlipCard({ service, isMobile, index }: { service: any, isMobile: boolean, index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const AbstractAnimation = () => {
    switch (service.id) {
      case 'web':
        return <WebDevAnimation accent={service.accent} />;
      case 'landing':
        return <LandingPageAnimation accent={service.accent} />;
      case 'ecom':
        return <EcomAnimation accent={service.accent} />;
      case 'seo':
        return <SeoAnimation accent={service.accent} />;
      case 'social':
        return <SocialAdsAnimation accent={service.accent} />;
      case 'brand':
        return <BrandAnimation accent={service.accent} />;
      case 'content':
        return <ContentAnimation accent={service.accent} />;
      default: return null;
    }
  };

  return (
    <motion.div
      initial={isMobile ? false : { opacity: 0, y: 50 }}
      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
      animate={isMobile ? { opacity: 1, y: 0 } : undefined}
      viewport={isMobile ? undefined : { once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => !isMobile && setIsFlipped(true)}
      onHoverEnd={() => !isMobile && setIsFlipped(false)}
      onClick={() => isMobile && setIsFlipped(!isFlipped)}
      style={{
        flex: isMobile ? '1 1 100%' : '1 1 350px',
        maxWidth: isMobile ? '100%' : '500px',
        width: '100%',
        minHeight: '450px',
        perspective: '1500px',
        position: 'relative',
        cursor: 'pointer'
      }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0, y: isFlipped ? -20 : 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '100%', height: '100%', position: 'relative',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* FRONT FACE */}
        <div className="liquid-glass" style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          background: 'rgba(20, 20, 20, 0.65)', borderRadius: '24px',
          border: '1px solid var(--lime-border)',
          padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        }}>
          {/* Massive Number */}
          <div className="display" style={{
            position: 'absolute', top: '-1rem', right: '-1rem',
            fontSize: '15rem', lineHeight: 0.8, opacity: 0.03, color: 'var(--white)',
            userSelect: 'none', pointerEvents: 'none'
          }}>
            {service.num}
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              width: 50, height: 50, borderRadius: '50%', background: 'var(--black)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: `1px solid ${service.accent}`, marginBottom: '1.5rem',
              boxShadow: `0 0 20px ${service.accent}40`
            }}>
              <service.icon size={24} color={service.accent} />
            </div>
            <h3 className="display" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '0.75rem', color: 'var(--white)', lineHeight: 1.1 }}>
              {service.name}
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--white-2)', maxWidth: '500px', lineHeight: 1.5 }}>
              {service.desc}
            </p>
            
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '24px' }}>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: ['20%', '100%', '20%'] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
                    style={{ width: '4px', background: service.accent, borderRadius: '4px', opacity: 0.5 }}
                  />
                ))}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ marginLeft: '1rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: service.accent, opacity: 0.8, alignSelf: 'center' }}
                >
                  {isMobile ? 'Tap to explore' : 'Hover to explore'} &rarr;
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* BACK FACE */}
        <div className="liquid-glass" style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: 'var(--black-2)', borderRadius: '24px',
          border: `1px solid ${service.accent}50`,
          padding: '3rem', display: 'flex', flexDirection: 'column', 
          alignItems: 'center', justifyContent: 'center', gap: '3rem',
          overflow: 'hidden', boxShadow: `0 20px 60px ${service.accent}20`,
        }}>
          {/* Animated Background Glow */}
          <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at center, ${service.accent}15 0%, transparent 70%)` }} />

          <AbstractAnimation />

          <motion.h3 className="display" style={{
             fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--white)', 
             textAlign: 'center', lineHeight: 1.1, zIndex: 2 
          }}>
            <motion.span animate={isFlipped ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.4, delay: 0.3 }} style={{ display: 'inline-block' }}>{service.sloganParts[0]}&nbsp;</motion.span>
            <motion.span animate={isFlipped ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.4, delay: 0.4 }} style={{ color: service.accent, fontStyle: 'italic', display: 'inline-block' }}>{service.sloganParts[1]}</motion.span><br/>
            <motion.span animate={isFlipped ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.4, delay: 0.5 }} style={{ display: 'inline-block' }}>{service.sloganParts[2]}&nbsp;</motion.span>
            <motion.span animate={isFlipped ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.4, delay: 0.6 }} style={{ color: service.accent, fontStyle: 'italic', display: 'inline-block' }}>{service.sloganParts[3]}</motion.span>
          </motion.h3>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ------------------------------

export default function Services() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section id="services" style={{ 
      background: 'var(--black)', 
      position: 'relative', 
      overflow: 'hidden',
      padding: 'var(--pad-y) var(--pad-x)'
    }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', zIndex: 0, opacity: 0.25,
          filter: 'contrast(1.2) brightness(0.8)',
        }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_105838_084968f2-4415-42a4-971a-3bec54539549.mp4"
      />

      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(to right, var(--black) 0%, transparent 15%, transparent 85%, var(--black) 100%), linear-gradient(to bottom, var(--black) 0%, transparent 20%, transparent 80%, var(--black) 100%)',
      }} />

      {/* Intro Header */}
      <div className="services-header" style={{
        position: 'relative',
        zIndex: 3,
        marginBottom: '4rem',
        textAlign: 'center'
      }}>
        <h2 className="display" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--white)', margin: 0, lineHeight: 1 }}>
          Our<br /><span style={{ color: 'var(--lime)', fontStyle: 'italic' }}>Services</span>
        </h2>
      </div>

      {/* Flex Layout for Cards */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2.5rem'
      }}>
        {services.map((svc, i) => (
          <ServiceFlipCard key={svc.id} service={svc} isMobile={isMobile} index={i} />
        ))}
      </div>
    </section>
  );
}
