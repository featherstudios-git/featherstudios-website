import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, height: 2,
          background: '#BCFF4F', zIndex: 10001,
          transformOrigin: 'left',
          scaleX: progress / 100,
        }}
        className="w-full"
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 10000, height: 'var(--nav-h)',
          transition: 'background 0.4s ease, border-color 0.4s ease',
          background: scrolled ? 'rgba(12,12,12,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div style={{
          maxWidth: 'var(--max-w)', margin: '0 auto',
          padding: '0 var(--pad-x)', height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
            style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{
              width: 32, height: 32,
              background: '#BCFF4F',
              borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 15 C3 15 9 12 15 3 C12 6 9 9 9 15" stroke="#0C0C0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 15 C3 15 6 9 15 3" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em', color: 'var(--white)' }}>
              Feather<span style={{ color: 'var(--lime)' }}>.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  fontWeight: 400,
                  color: 'var(--white-2)',
                  transition: 'color 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-2)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="btn btn-lime nav-desktop"
              style={{ fontSize: '0.82rem', padding: '0.65rem 1.5rem' }}
            >
              Start a Project
            </a>

            {/* Hamburger */}
            <button
              className="nav-mobile-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: 'none', flexDirection: 'column', gap: 5,
                padding: 6, background: 'none', border: 'none',
              }}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                style={{ display: 'block', width: 22, height: 1.5, background: 'var(--white)', borderRadius: 2 }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                style={{ display: 'block', width: 22, height: 1.5, background: 'var(--white)', borderRadius: 2 }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                style={{ display: 'block', width: 22, height: 1.5, background: 'var(--white)', borderRadius: 2 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="nav-mobile-menu"
            style={{
              position: 'fixed', top: 'var(--nav-h)', left: 0, right: 0, bottom: 0,
              background: 'rgba(12,12,12,0.97)', backdropFilter: 'blur(20px)',
              zIndex: 9999, padding: '3rem var(--pad-x)',
              display: 'flex', flexDirection: 'column', gap: '1.5rem',
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: 'clamp(2rem, 8vw, 3rem)',
                  color: 'var(--white)', letterSpacing: '-0.02em',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="btn btn-lime" style={{ marginTop: '2rem', width: 'fit-content' }}>
              Start a Project →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
