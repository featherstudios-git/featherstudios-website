import { FaInstagram, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: 'Web Design', href: '#services' },
    { label: 'Landing Pages', href: '#services' },
    { label: 'E-Commerce', href: '#services' },
    { label: 'SEO Optimization', href: '#services' },
    { label: 'Social Media Ads', href: '#services' },
    { label: 'Brand Identity', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Process', href: '#process' },
    { label: 'Portfolio', href: '#work' },
    { label: 'FAQ', href: '#faq' },
  ],
  Contact: [
    { label: 'Start a Project', href: '#contact' },
    { label: 'Custom Quote', href: '#contact' },
    { label: 'featherstudiosxyz@gmail.com', href: 'mailto:featherstudiosxyz@gmail.com' },
  ],
};

const socialLinks = [
  { Icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/feather.studios.in/' },
  { Icon: FaXTwitter, label: 'X', href: 'https://x.com/featherstudiosx' },
  { Icon: FaLinkedin, label: 'LinkedIn', href: '#' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith('mailto')) return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ position: 'relative', background: 'var(--black-2)', borderTop: '1px solid var(--border)', overflow: 'hidden' }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', zIndex: 0, opacity: 0.35,
        }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260322_013248_a74099a8-be2b-4164-a823-eddd5e149fa1.mp4"
      />
      {/* Dark Overlay for Readability */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to bottom, var(--black-2) 0%, rgba(20,20,20,0.6) 40%, var(--black-2) 100%)',
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* CTA Band */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: 'clamp(3rem, 6vw, 5rem) var(--pad-x)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div className="display" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--white)', margin: 0, lineHeight: 1 }}>
            Ready to build<br />
            <span style={{ color: 'var(--lime)', fontStyle: 'italic' }}>something great?</span>
          </div>
          <a href="#contact" className="btn btn-lime"
            onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
            style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Let's Talk →
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div style={{ padding: '4rem var(--pad-x)', maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <div className="footer-grid">

          {/* Brand col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
              <img 
                src="/feather_icon.jpg" 
                alt="Feather Studios" 
                style={{ width: 28, height: 28, borderRadius: 7, objectFit: 'cover' }} 
              />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em' }}>
                Feather<span style={{ color: 'var(--lime)' }}>.</span>
              </span>
            </div>
            <p style={{ fontSize: '0.87rem', color: 'var(--white-3)', lineHeight: 1.7, maxWidth: 260, marginBottom: '1.5rem' }}>
              A boutique digital agency building premium websites, brands, and campaigns that drive real results.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {socialLinks.map(({ Icon, label, href }) => (
                <a key={label} href={href} aria-label={label} title={label}
                  style={{ width: 36, height: 36, borderRadius: 9, background: 'var(--black)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white-3)', transition: 'all 0.25s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,176,0,0.4)'; (e.currentTarget as HTMLElement).style.color = 'var(--lime)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--white-3)'; (e.currentTarget as HTMLElement).style.transform = ''; }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--white-3)', marginBottom: '1.25rem' }}>
                {col}
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}
                      onClick={(e) => { if (!href.startsWith('mailto')) { e.preventDefault(); scrollTo(href); } }}
                      style={{ fontSize: '0.87rem', color: 'var(--white-3)', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-3)')}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.67rem', color: 'var(--white-3)', letterSpacing: '0.08em' }}>
            © 2026 Feather Studios. All rights reserved.
          </span>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="/terms.html" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.67rem', color: 'var(--white-3)', letterSpacing: '0.08em', transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-3)')}
            >
              Terms of Service
            </a>
          </div>
      </div>
      </div>
      </div>
    </footer>
  );
}
