import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MessageCircle, Clock, Camera, X, Link2, Paintbrush } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: '', budget: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'var(--black)', border: '1px solid var(--border)',
    borderRadius: 10, padding: '0.85rem 1rem', color: 'var(--white)',
    fontFamily: 'var(--font-body)', fontSize: '0.92rem', outline: 'none', transition: 'border-color 0.3s, box-shadow 0.3s',
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-mono)', fontSize: '0.63rem', letterSpacing: '0.12em',
    textTransform: 'uppercase', color: 'var(--white-3)', display: 'block', marginBottom: '0.5rem',
  };

  const infoItems = [
    { Icon: Mail, label: 'Email', value: 'hello@featherstudios.co' },
    { Icon: MessageCircle, label: 'WhatsApp', value: 'Available on request' },
    { Icon: Clock, label: 'Response Time', value: 'Within 24–48 hours' },
  ];

  const socialLinks = [
    { Icon: Camera, label: 'Instagram', href: '#' },
    { Icon: X, label: 'X (Twitter)', href: '#' },
    { Icon: Link2, label: 'LinkedIn', href: '#' },
    { Icon: Paintbrush, label: 'Behance', href: '#' },
  ];

  return (
    <section id="contact" style={{ background: 'var(--black)', padding: 'var(--pad-y) var(--pad-x)', borderTop: '1px solid var(--border)' }}>
      <div ref={ref} style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <div className="contact-grid">

          {/* Left */}
          <div>
            <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="label" style={{ display: 'block', marginBottom: '1rem' }}>— Get In Touch</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="display h2" style={{ marginBottom: '1.5rem' }}>
              Let's Build<br />Something<br /><span style={{ color: 'var(--lime)' }}>Amazing.</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }} style={{ color: 'var(--white-2)', lineHeight: 1.75, marginBottom: '3rem', maxWidth: 380, fontSize: '0.95rem' }}>
              Got a project in mind? Custom work is always welcome — all prices are{' '}
              <strong style={{ color: 'var(--white)' }}>negotiable</strong> based on scope. Just say hello.
            </motion.p>

            {infoItems.map(({ Icon, label, value }, i) => (
              <motion.div key={label} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 + i * 0.1 }}
                style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem 0', borderBottom: i < infoItems.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                  background: 'var(--black-2)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white-3)',
                }}>
                  <Icon size={17} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--white-3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}>{label}</div>
                  <div style={{ fontWeight: 500, fontSize: '0.9rem' }}>{value}</div>
                </div>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.75 }} style={{ display: 'flex', gap: '0.5rem', marginTop: '1.75rem' }}>
              {socialLinks.map(({ Icon, label, href }) => (
                <a key={label} href={href} title={label} aria-label={label}
                  style={{ width: 42, height: 42, borderRadius: 10, background: 'var(--black-2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white-3)', transition: 'all 0.25s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,71,171,0.4)'; (e.currentTarget as HTMLElement).style.color = 'var(--lime)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--white-3)'; (e.currentTarget as HTMLElement).style.transform = ''; }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: 'var(--black-2)', border: '1px solid var(--border)', borderRadius: 24, padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(0,71,171,0.12)', border: '1px solid rgba(0,71,171,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <Mail size={26} color="var(--lime)" />
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Message Sent!</div>
                <p style={{ color: 'var(--white-2)', fontSize: '0.92rem', lineHeight: 1.7 }}>Thanks for reaching out. We'll get back to you within 48 hours.<br />Looking forward to working with you!</p>
              </div>
            ) : (
              <>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.02em', marginBottom: '0.35rem' }}>Send a Message</div>
                <p style={{ fontSize: '0.84rem', color: 'var(--white-3)', marginBottom: '2rem' }}>Custom projects always welcome. Prices are negotiable.</p>
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={labelStyle} htmlFor="name">Name *</label>
                      <input id="name" style={inputStyle} type="text" placeholder="Your name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(0,71,171,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,71,171,0.07)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }} />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="email">Email *</label>
                      <input id="email" style={inputStyle} type="email" placeholder="your@email.com" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(0,71,171,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,71,171,0.07)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }} />
                    </div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={labelStyle} htmlFor="service">Service</label>
                    <select id="service" style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }} value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(0,71,171,0.5)'; }} onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}>
                      <option value="">Select a service...</option>
                      <option>Website Design & Development</option>
                      <option>Landing Page</option>
                      <option>E-Commerce Store</option>
                      <option>SEO Optimization</option>
                      <option>Social Media Ads</option>
                      <option>Brand Identity</option>
                      <option>Custom / Multiple</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={labelStyle} htmlFor="budget">Budget Range</label>
                    <select id="budget" style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }} value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(0,71,171,0.5)'; }} onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}>
                      <option value="">Select budget...</option>
                      <option>Under ₹10,000</option>
                      <option>₹10,000 – ₹25,000</option>
                      <option>₹25,000 – ₹60,000</option>
                      <option>₹60,000 – ₹1,50,000</option>
                      <option>₹1,50,000+</option>
                      <option>Let's Discuss</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={labelStyle} htmlFor="message">Project Details *</label>
                    <textarea id="message" style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                      placeholder="Tell us about your project, goals, timeline..." required
                      value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(0,71,171,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,71,171,0.07)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }} />
                  </div>
                  <button type="submit" disabled={loading}
                    style={{
                      width: '100%', padding: '1rem', background: loading ? 'var(--border)' : 'var(--lime)',
                      color: 'var(--black)', borderRadius: 999, fontFamily: 'var(--font-display)',
                      fontWeight: 700, fontSize: '0.95rem', border: 'none',
                      cursor: loading ? 'not-allowed' : 'pointer', transition: 'all 0.3s',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    }}
                    onMouseEnter={(e) => { if (!loading) { (e.currentTarget as HTMLElement).style.background = '#d4ff70'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; } }}
                    onMouseLeave={(e) => { if (!loading) { (e.currentTarget as HTMLElement).style.background = 'var(--lime)'; (e.currentTarget as HTMLElement).style.transform = ''; } }}
                  >
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
