import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: 'How long does it take to build a website?', a: 'Depends on complexity. A Starter site takes 5–7 business days. Growth and Pro packages typically take 2–4 weeks. Custom/enterprise projects are scoped individually. We\'ll always give you a clear timeline before starting.' },
  { q: 'Do you offer payment plans?', a: 'Yes. We work with a 50% deposit upfront and 50% on completion. For larger projects we can split into 3 milestones. We\'re always flexible — just tell us your situation and we\'ll figure it out.' },
  { q: 'Can I update my website myself after launch?', a: 'Absolutely. We can build on a CMS (WordPress or Webflow) so you can manage content without touching code. We also provide a training session and documentation so you\'re never stuck.' },
  { q: 'What if I need something not in your plans?', a: 'That\'s what custom quotes are for. We love unique projects — enterprise platforms, music portfolios, creator hubs, anything. Tell us what you need and we\'ll build a tailored proposal.' },
  { q: 'Do you work with international clients?', a: 'Yes — we work with clients globally. All communication is via email, WhatsApp, or video calls. Payments accepted in USD, EUR, and INR via bank transfer, UPI, or PayPal.' },
  { q: 'Is SEO included in every plan?', a: 'Basic on-page SEO (meta tags, alt text, sitemap, page speed) is in every plan. Full SEO strategy with keyword research, content planning, and monthly monitoring comes with Growth and Pro.' },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: 'var(--black)', padding: 'var(--pad-y) var(--pad-x)', borderTop: '1px solid var(--border)' }}>
      <div ref={ref} style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <div className="faq-grid">

          {/* Left sticky */}
          <div className="faq-left-sticky" style={{ position: 'sticky', top: 100 }}>
            <motion.span
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="label" style={{ display: 'block', marginBottom: '1rem' }}
            >
              — FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="display" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--white)', margin: 0, lineHeight: 1, marginBottom: '1.5rem' }}
            >
              Questions<br />
              <span style={{ color: 'var(--lime)', fontStyle: 'italic' }}>Answered</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              style={{ color: 'var(--white-2)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem' }}
            >
              Still have questions? We're always available.
            </motion.p>
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="btn btn-outline"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{ display: 'inline-flex' }}
            >
              Ask Us →
            </motion.a>
          </div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: '1.5rem',
                    padding: '1.5rem 0', background: 'none', border: 'none',
                    textAlign: 'left', cursor: 'pointer',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-display)', fontWeight: 600,
                    fontSize: '1rem', letterSpacing: '-0.01em',
                    color: open === i ? 'var(--lime)' : 'var(--white)',
                    transition: 'color 0.3s', lineHeight: 1.4,
                  }}>
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                      border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem', color: open === i ? 'var(--lime)' : 'var(--white-3)',
                      transition: 'color 0.3s, border-color 0.3s',
                      borderColor: open === i ? 'var(--lime-border)' : 'var(--border)',
                    }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{
                        padding: '0 0 1.5rem',
                        color: 'var(--white-2)', fontSize: '0.92rem', lineHeight: 1.75,
                      }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
