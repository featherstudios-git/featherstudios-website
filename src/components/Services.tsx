import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Rocket, ShoppingBag, Search, Megaphone, Palette, Video } from 'lucide-react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { 
  WebDevAnimation, LandingPageAnimation, EcomAnimation, 
  SeoAnimation, SocialAdsAnimation, BrandAnimation, ContentAnimation 
} from './ServiceAnimations';


gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: 'web', num: '01', icon: Globe, name: 'Website Design & Development', desc: 'Custom-built from scratch. Pixel-perfect, performance-first, and designed to make your competitors jealous.', tags: ['HTML/CSS', 'React', 'Next.js'], accent: 'var(--lime)', sloganParts: ['Build', 'Faster.', 'Scale', 'Further.'] },
  { id: 'landing', num: '02', icon: Rocket, name: 'Landing Pages', desc: 'Conversion machines. Every element is intentional — built to turn traffic into customers and inquiries into revenue.', tags: ['CRO', 'A/B Testing'], accent: '#60a5fa', sloganParts: ['Convert', 'Clicks.', 'Drive', 'Revenue.'] },
  { id: 'ecom', num: '03', icon: ShoppingBag, name: 'E-Commerce Stores', desc: 'Full online stores with seamless checkout, product showcases, and payment integrations ready on day one.', tags: ['Shopify', 'WooCommerce'], accent: '#fb923c', sloganParts: ['Sell', 'More.', 'Grow', 'Wildly.'] },
  { id: 'seo', num: '04', icon: Search, name: 'Google SEO Optimization', desc: 'Get found. We handle keyword strategy, technical audits, and content optimization to own your search rankings.', tags: ['On-Page SEO', 'Technical Audit'], accent: '#34d399', sloganParts: ['Rank', 'Higher.', 'Dominate', 'Search.'] },
  { id: 'social', num: '05', icon: Megaphone, name: 'Social Media Ads', desc: 'Campaigns that actually perform. Meta, TikTok, and Google Ads built around your goals and your audience.', tags: ['Meta Ads', 'TikTok Ads'], accent: '#f472b6', sloganParts: ['Reach', 'Millions.', 'Go', 'Viral.'] },
  { id: 'brand', num: '06', icon: Palette, name: 'Brand Identity & Design', desc: 'Logos, typography, color systems, brand guidelines — everything to make you completely unmistakable.', tags: ['Logo Design', 'Brand Kit'], accent: '#a78bfa', sloganParts: ['Be', 'Unmistakable.', 'Stand', 'Out.'] },
  { id: 'content', num: '07', icon: Video, name: 'Social Media Content Creation', desc: 'Engaging, viral-ready video and static content tailored for Instagram, TikTok, and LinkedIn to build your audience.', tags: ['Short-form Video', 'Reels/TikTok'], accent: '#eab308', sloganParts: ['Scroll', 'Stopping.', 'Cult', 'Following.'] },
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="service-card-wrapper"
      onHoverStart={() => !isMobile && setIsFlipped(true)}
      onHoverEnd={() => !isMobile && setIsFlipped(false)}
      onClick={() => isMobile && setIsFlipped(!isFlipped)}
      style={{
        width: isMobile ? '100%' : 'clamp(350px, 50vw, 650px)', 
        height: isMobile ? 'auto' : 'clamp(300px, 48vh, 480px)',
        minHeight: isMobile ? '380px' : 'auto',
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
            
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              {service.tags.map((tag: string) => (
                <span key={tag} style={{
                  padding: '0.4rem 0.8rem', background: 'var(--black-3)',
                  borderRadius: '100px', fontSize: '0.8rem', color: 'var(--white-2)',
                  border: '1px solid var(--border)', fontWeight: 500
                }}>
                  {tag}
                </span>
              ))}
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

function MobileStickyServiceCard({ service, index, totalCards, progress, isMobile }: any) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.04;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'sticky',
      top: 0
    }}>
      <motion.div style={{ width: '100%', scale, transformOrigin: 'top center', top: `calc(15vh + ${index * 20}px)`, position: 'relative' }}>
        <ServiceFlipCard service={service} isMobile={isMobile} index={index} />
      </motion.div>
    </div>
  );
}
// ------------------------------

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: mobileContainerRef,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    
    // Only apply horizontal scroll on desktop
    const isDesktop = window.innerWidth > 768;
    if (!section || !track || !isDesktop) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none'
      });

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section ref={sectionRef} id="services" style={{ 
      background: 'var(--black)', 
      height: 'auto', 
      minHeight: isMobile ? 'auto' : '100vh', 
      position: 'relative', 
      overflow: 'hidden',
      paddingBottom: isMobile ? '6rem' : 0
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

      {/* Intro Header Fixed Left (Desktop) or Normal (Mobile) */}
      <div className="services-header" style={{
        position: isMobile ? 'relative' : 'absolute', 
        top: isMobile ? 0 : 'max(5%, 2rem)', 
        left: isMobile ? 0 : 'max(5vw, 2rem)', 
        zIndex: 3,
        pointerEvents: 'none',
        padding: isMobile ? 'var(--pad-y) var(--pad-x) 2rem' : 0,
      }}>
        <h2 className="display" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--white)', margin: 0, lineHeight: 1 }}>
          Our<br /><span style={{ color: 'var(--lime)', fontStyle: 'italic' }}>Services</span>
        </h2>
        <p style={{ color: 'var(--white-2)', marginTop: '1rem', maxWidth: '300px', fontSize: '1.1rem' }}>
          We provide services that help you build your identity and dominate your market.
        </p>
      </div>

      {/* Horizontal Track (Desktop) or Vertical Stack (Mobile) */}
      {!isMobile ? (
        <div ref={trackRef} className="services-track" style={{
          display: 'flex', 
          flexDirection: 'row',
          height: '100vh', 
          alignItems: 'flex-end', 
          paddingBottom: '12vh',
          paddingLeft: 'max(40vw, 350px)', 
          paddingRight: '15vw', 
          width: 'fit-content',
          position: 'relative', zIndex: 2, 
          gap: '3rem',
        }}>
          {services.map((service, i) => (
            <ServiceFlipCard key={service.id} service={service} isMobile={false} index={i} />
          ))}
        </div>
      ) : (
        <div ref={mobileContainerRef} style={{ position: 'relative', zIndex: 2, padding: '0 var(--pad-x)' }}>
          {services.map((service, i) => (
            <MobileStickyServiceCard 
              key={service.id} 
              service={service} 
              index={i} 
              totalCards={services.length} 
              progress={scrollYProgress} 
              isMobile={true} 
            />
          ))}
        </div>
      )}
    </section>
  );
}
