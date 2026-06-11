import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const individualServices = [
  { id: 'web', name: 'Web Design & Development', price: 49999, desc: 'High-performance, custom-coded websites tailored to your brand.' },
  { id: 'ecom', name: 'E-Commerce Solutions', price: 79999, desc: 'Scalable online stores built for high conversion and seamless checkout.' },
  { id: 'landing', name: 'Custom Landing Pages', price: 19999, desc: 'Laser-focused, single-page designs optimized for ad campaigns.' },
  { id: 'brand', name: 'Brand Identity Design', price: 29999, desc: 'Complete visual identity, including logo, typography, and color palette.' },
  { id: 'social', name: 'Social Media Ads', price: 24999, desc: 'Targeted ad campaigns designed to maximize your ROI.' },
  { id: 'content', name: 'Social Media Content', price: 19999, desc: 'Engaging, high-quality content creation for your social channels.' },
  { id: 'seo', name: 'Search Engine Optimization', price: 14999, desc: 'On-page and off-page SEO to rank higher and drive organic traffic.' },
];

const packages = [
  {
    id: 'starter', name: 'The Starter Kit', price: 69999,
    desc: 'Perfect for new businesses needing a foundational digital presence.',
    includes: ['Web Design', 'Brand Identity']
  },
  {
    id: 'growth', name: 'The Growth Engine', price: 89999,
    desc: 'For existing businesses wanting to launch high-conversion campaigns.',
    includes: ['Custom Landing Pages', 'Social Media Ads', 'Content Creation']
  },
  {
    id: 'scale', name: 'The Scale Matrix', price: 149999,
    desc: 'The ultimate all-in-one package for complete digital dominance.',
    includes: ['E-Commerce Solutions', 'SEO', 'Social Media Ads', 'Brand Identity']
  }
];

function formatINR(amount: number) {
  return amount.toLocaleString('en-IN');
}

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="pricing" style={{ background: 'var(--black-2)', borderTop: '1px solid var(--border)', padding: 'var(--pad-y) var(--pad-x)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

        {/* Header */}
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="display" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--white)', margin: 0, lineHeight: 1, marginBottom: '1.5rem' }}
          >
            Pricing &<br /><span style={{ color: 'var(--lime)', fontStyle: 'italic' }}>Packages</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            style={{ color: 'var(--white-2)', maxWidth: 460, margin: '0 auto', fontSize: '0.95rem' }}
          >
            Clear pricing. No hidden fees. Select individual services or bundle them for maximum value.
          </motion.p>
        </div>

        {/* Individual Services */}
        <div style={{ marginBottom: '5rem' }}>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--white)', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}
          >
            Individual Services
          </motion.h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {individualServices.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                className="liquid-glass"
                style={{
                  padding: '2rem', borderRadius: '16px',
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  display: 'flex', flexDirection: 'column', gap: '1rem'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--white-2)', textTransform: 'uppercase' }}>
                  {service.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--lime)' }}>₹</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--white)' }}>
                    {formatINR(service.price)}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--white-3)', marginLeft: '4px' }}>onwards</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--white-3)', lineHeight: 1.6, margin: 0 }}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bundle Packages */}
        <div style={{ marginBottom: '5rem' }}>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--white)', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}
          >
            Bundle Packages
          </motion.h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem' 
          }}>
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + (i * 0.1) }}
                whileHover={{ y: -5 }}
                className="liquid-glass"
                style={{
                  padding: '2.5rem', borderRadius: '24px',
                  background: pkg.id === 'scale' ? 'rgba(255,176,0,0.05)' : 'var(--black)', 
                  border: `1px solid ${pkg.id === 'scale' ? 'rgba(255,176,0,0.3)' : 'var(--border)'}`,
                  display: 'flex', flexDirection: 'column'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.15em', color: pkg.id === 'scale' ? 'var(--lime)' : 'var(--white)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  {pkg.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--white-2)' }}>₹</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 800, color: 'var(--white)', letterSpacing: '-0.02em' }}>
                    {formatINR(pkg.price)}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--white-3)', marginLeft: '4px' }}>onwards</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--white-2)', lineHeight: 1.6, marginBottom: '2rem', minHeight: '60px' }}>
                  {pkg.desc}
                </p>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--white-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Includes:</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: pkg.id === 'scale' ? 'var(--lime)' : 'var(--white-2)' }} />
                        <span style={{ fontSize: '0.85rem', color: 'var(--white)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className={pkg.id === 'scale' ? 'btn btn-lime' : 'btn'}
                  style={{
                    display: 'block', textAlign: 'center', marginTop: '2.5rem',
                    padding: '1rem', borderRadius: '999px', fontSize: '0.9rem',
                    background: pkg.id === 'scale' ? 'var(--lime)' : 'rgba(255,255,255,0.05)',
                    color: pkg.id === 'scale' ? 'var(--black)' : 'var(--white)',
                    border: pkg.id === 'scale' ? 'none' : '1px solid var(--border)',
                    textDecoration: 'none', fontWeight: 600, transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    if (pkg.id !== 'scale') e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    if (pkg.id !== 'scale') e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }}
                >
                  Choose Package →
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Custom Request */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            border: '1px dashed rgba(255,176,0,0.28)',
            borderRadius: 24, padding: '4rem 5vw',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '3rem', background: 'rgba(255,176,0,0.03)',
            transition: 'all 0.4s', cursor: 'pointer'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,176,0,0.06)'; e.currentTarget.style.transform = 'scale(1.015)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,176,0,0.03)'; e.currentTarget.style.transform = 'scale(1)'; }}
          onClick={(e) => {
            if ((e.target as HTMLElement).tagName !== 'A') {
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Have something unique in mind?
            </div>
            <p style={{ color: 'var(--white-2)', fontSize: '1.05rem', maxWidth: 650, lineHeight: 1.7 }}>
              Enterprise platforms, music artist sites, creator kits, large-scale campaigns — we love custom work.
              All prices are <strong style={{ color: 'var(--lime)' }}>negotiable</strong> based on scope.
            </p>
          </div>
          <a href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn btn-lime" style={{ whiteSpace: 'nowrap', fontSize: '1.1rem', padding: '1.1rem 3rem' }}>
            Let's Talk →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
