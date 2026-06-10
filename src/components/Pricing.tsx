import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';

const plans = [
  {
    id: 'starter', name: 'Starter',
    price: { monthly: 14999, onetime: 19999 },
    desc: 'Perfect for freelancers, small businesses, and creators needing a clean, professional presence fast.',
    features: [
      { text: 'Up to 5 custom pages', active: true },
      { text: 'Fully mobile responsive', active: true },
      { text: 'Basic SEO + sitemap', active: true },
      { text: 'Contact form + Analytics', active: true },
      { text: 'E-commerce / store', active: false },
      { text: 'Brand identity package', active: false },
      { text: 'Ad campaign management', active: false },
    ],
    featured: false,
  },
  {
    id: 'growth', name: 'Growth',
    price: { monthly: 41999, onetime: 54999 },
    desc: 'For growing brands that want a powerful website + real digital marketing to drive results.',
    features: [
      { text: 'Up to 10 custom pages', active: true },
      { text: 'Advanced animations & UI', active: true },
      { text: 'Full SEO optimization', active: true },
      { text: 'Logo + brand color kit', active: true },
      { text: 'Social media setup × 2', active: true },
      { text: '1-month ad campaign', active: true },
      { text: 'E-commerce / store', active: false },
    ],
    featured: true,
  },
  {
    id: 'pro', name: 'Pro',
    price: { monthly: 83999, onetime: 109999 },
    desc: 'The complete package. Full website, marketing, branding, and priority ongoing support.',
    features: [
      { text: 'Unlimited pages + CMS', active: true },
      { text: 'E-commerce store', active: true },
      { text: 'Advanced SEO + content strategy', active: true },
      { text: 'Full brand identity kit', active: true },
      { text: '3-month ad campaign', active: true },
      { text: 'Social media setup × 4', active: true },
      { text: 'Priority WhatsApp support', active: true },
    ],
    featured: false,
  },
];

function formatINR(amount: number) {
  return amount.toLocaleString('en-IN');
}

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [isOneTime, setIsOneTime] = useState(false);

  return (
    <section id="pricing" style={{ background: 'var(--black-2)', borderTop: '1px solid var(--border)', padding: 'var(--pad-y) var(--pad-x)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

        <div ref={ref} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="label" style={{ display: 'block', marginBottom: '1rem' }}
          >
            — Transparent Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="display h2" style={{ marginBottom: '1.5rem' }}
          >
            Plans for Every Stage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            style={{ color: 'var(--white-2)', maxWidth: 460, margin: '0 auto 2rem', fontSize: '0.95rem' }}
          >
            All prices in Indian Rupees (₹). No hidden fees. Negotiable for custom projects.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--black)', border: '1px solid var(--border)', borderRadius: 999, padding: '0.35rem' }}
          >
            {['Monthly', 'One-Time'].map((label, idx) => {
              const active = (idx === 1) === isOneTime;
              return (
                <button
                  key={label}
                  onClick={() => setIsOneTime(idx === 1)}
                  style={{
                    padding: '0.5rem 1.4rem', borderRadius: 999,
                    fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.85rem',
                    background: active ? 'var(--white)' : 'transparent',
                    color: active ? 'var(--black)' : 'var(--white-2)',
                    border: 'none', cursor: 'pointer', transition: 'all 0.3s',
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}
                >
                  {label}
                  {idx === 1 && !isOneTime && (
                    <span style={{
                      background: 'var(--lime)', color: 'var(--black)',
                      fontSize: '0.58rem', fontWeight: 700,
                      padding: '0.1rem 0.45rem', borderRadius: 999, letterSpacing: '0.05em',
                    }}>SAVE 20%</span>
                  )}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Cards */}
        <div className="pricing-grid" style={{ marginBottom: '2rem' }}>
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: plan.featured ? 'var(--white)' : 'var(--black)',
                border: `1px solid ${plan.featured ? 'var(--white)' : 'var(--border)'}`,
                borderRadius: 20, padding: '2.5rem', position: 'relative',
                color: plan.featured ? 'var(--black)' : 'var(--white)',
              }}
            >
              {plan.featured && (
                <div style={{
                  position: 'absolute', top: 20, right: 20,
                  background: 'var(--lime)', color: 'var(--black)',
                  fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  padding: '0.28rem 0.75rem', borderRadius: 999, fontWeight: 700,
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  <Sparkles size={10} /> Most Popular
                </div>
              )}

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem', opacity: 0.5 }}>
                {plan.name}
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 3, marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, opacity: 0.55 }}>₹</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={isOneTime ? 'ot' : 'mo'}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.22 }}
                    style={{
                      fontFamily: 'var(--font-display)', fontWeight: 900,
                      fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', letterSpacing: '-0.04em', lineHeight: 1,
                    }}
                  >
                    {formatINR(isOneTime ? plan.price.onetime : plan.price.monthly)}
                  </motion.span>
                </AnimatePresence>
                <span style={{ opacity: 0.45, fontSize: '0.85rem' }}>
                  {isOneTime ? ' one-time' : '/mo'}
                </span>
              </div>

              <p style={{ fontSize: '0.84rem', opacity: 0.58, lineHeight: 1.65, marginBottom: '2rem', minHeight: 56 }}>
                {plan.desc}
              </p>

              <div style={{ borderTop: `1px solid ${plan.featured ? 'rgba(0,0,0,0.1)' : 'var(--border)'}`, paddingTop: '1.5rem', marginBottom: '2rem' }}>
                {plan.features.map((f, fi) => (
                  <div key={fi} style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.45rem 0', opacity: f.active ? 1 : 0.3,
                  }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                      background: f.active ? (plan.featured ? '#0C0C0C' : 'rgba(201,27,0,0.15)') : 'transparent',
                      border: `1px solid ${f.active ? (plan.featured ? '#0C0C0C' : 'rgba(201,27,0,0.4)') : 'currentColor'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {f.active
                        ? <Check size={10} color={plan.featured ? '#F2F0EB' : '#C91B00'} />
                        : <X size={9} color="currentColor" />
                      }
                    </span>
                    <span style={{ fontSize: '0.84rem' }}>{f.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{
                  display: 'block', textAlign: 'center', padding: '0.9rem',
                  borderRadius: 999, fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '0.9rem', transition: 'all 0.3s',
                  background: plan.featured ? 'var(--black)' : 'var(--lime)',
                  color: plan.featured ? 'var(--white)' : 'var(--black)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = '0.85';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = '1';
                  (e.currentTarget as HTMLElement).style.transform = '';
                }}
              >
                Get Started →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            border: '1px dashed rgba(201,27,0,0.28)',
            borderRadius: 24, padding: '4rem 5vw',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '3rem', background: 'rgba(201,27,0,0.03)',
            transition: 'all 0.4s', cursor: 'pointer'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201,27,0,0.06)'; e.currentTarget.style.transform = 'scale(1.015)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(201,27,0,0.03)'; e.currentTarget.style.transform = 'scale(1)'; }}
          onClick={(e) => {
            // Only trigger click if we aren't already clicking the button (avoid double fire)
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
