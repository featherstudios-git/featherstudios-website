import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Rocket, ShoppingBag, Search, Megaphone, Palette } from 'lucide-react';
import { useMediaQuery } from '../hooks/useMediaQuery';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: 'web', num: '01', icon: Globe, name: 'Website Design & Development', desc: 'Custom-built from scratch. Pixel-perfect, performance-first, and designed to make your competitors jealous.', tags: ['HTML/CSS', 'React', 'Next.js'], accent: '#FFB000' },
  { id: 'landing', num: '02', icon: Rocket, name: 'Landing Pages', desc: 'Conversion machines. Every element is intentional — built to turn traffic into customers and inquiries into revenue.', tags: ['CRO', 'A/B Testing'], accent: '#60a5fa' },
  { id: 'ecom', num: '03', icon: ShoppingBag, name: 'E-Commerce Stores', desc: 'Full online stores with seamless checkout, product showcases, and payment integrations ready on day one.', tags: ['Shopify', 'WooCommerce'], accent: '#fb923c' },
  { id: 'seo', num: '04', icon: Search, name: 'Google SEO Optimization', desc: 'Get found. We handle keyword strategy, technical audits, and content optimization to own your search rankings.', tags: ['On-Page SEO', 'Technical Audit'], accent: '#34d399' },
  { id: 'social', num: '05', icon: Megaphone, name: 'Social Media Ads', desc: 'Campaigns that actually perform. Meta, TikTok, and Google Ads built around your goals and your audience.', tags: ['Meta Ads', 'TikTok Ads'], accent: '#f472b6' },
  { id: 'brand', num: '06', icon: Palette, name: 'Brand Identity & Design', desc: 'Logos, typography, color systems, brand guidelines — everything to make you completely unmistakable.', tags: ['Logo Design', 'Brand Kit'], accent: '#a78bfa' },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

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
      <div ref={trackRef} className="services-track" style={{
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        height: isMobile ? 'auto' : '100vh', 
        alignItems: isMobile ? 'center' : 'flex-end', 
        paddingBottom: isMobile ? '2rem' : '12vh',
        paddingLeft: isMobile ? '1rem' : 'max(40vw, 350px)', 
        paddingRight: isMobile ? '1rem' : '15vw', 
        width: isMobile ? '100%' : 'fit-content',
        position: 'relative', zIndex: 2, 
        gap: isMobile ? '1.5rem' : '3rem',
      }}>
        {services.map((service, i) => (
          <motion.div 
            key={service.id} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="liquid-glass" style={{
              width: isMobile ? '100%' : 'clamp(350px, 50vw, 650px)', 
              height: isMobile ? 'auto' : 'clamp(300px, 48vh, 480px)',
              minHeight: isMobile ? '380px' : 'auto',
              background: 'rgba(20, 20, 20, 0.65)', borderRadius: '24px',
              border: '1px solid var(--lime-border)',
              padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              position: 'relative', overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
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
                {service.tags.map(tag => (
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

            {/* Abstract Graphic Element per card */}
            <div style={{
              position: 'absolute', bottom: '-10%', right: '-5%',
              width: '50%', height: '60%', border: `1px solid ${service.accent}20`,
              borderRadius: '24px', background: `linear-gradient(135deg, ${service.accent}05, transparent)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', transform: 'rotate(-5deg)'
            }}>
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                 style={{ width: '200%', height: '200%', background: `conic-gradient(from 0deg, transparent 0%, ${service.accent}15 50%, transparent 100%)` }}
               />
               <motion.div
                 animate={{ rotate: -360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                 style={{ position: 'absolute', width: '150%', height: '150%', border: `1px dashed ${service.accent}30`, borderRadius: '50%' }}
               />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
