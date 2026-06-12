import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, animate, useInView as useFramerInView } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

const projects = [
  {
    num: '01',
    category: 'Web Development',
    title: 'Featured Websites',
    type: 'images',
    images: [
      '/images/work/media__1781246197866.png',
      '/images/work/media__1781246197889.png',
      '/images/work/media__1781246197886.png'
    ]
  },
  {
    num: '02',
    category: 'Creative Dev',
    title: 'Digital Experiences',
    type: 'images',
    images: [
      '/images/work/media__1781246197934.png',
      '/images/work/media__1781246238653.png',
      '/images/work/media__1781246197866.png'
    ]
  },
  {
    num: '03',
    category: 'Growth & Content',
    title: 'Marketing Engine',
    type: 'animations',
  }
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="work" style={{ 
      background: 'var(--black)',
      position: 'relative',
      zIndex: 10,
      paddingTop: 'var(--pad-y)',
      paddingBottom: 'var(--pad-y)'
    }}>
      {/* Dynamic Ambient Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50%', height: '50%', background: 'var(--lime)', opacity: 0.08, filter: 'blur(120px)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '25%', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.03), transparent)' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent)' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '75%', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.03), transparent)' }} />
      </div>

      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--pad-x)', position: 'relative', zIndex: 2 }}>
        
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
          <h2 className="display" style={{ 
            fontSize: 'clamp(4rem, 8vw, 6rem)', 
            color: 'var(--white)', 
            margin: 0, 
            lineHeight: 0.9,
            letterSpacing: '-0.02em'
          }}>
            Featured<br />
            <span style={{ color: 'var(--lime)', fontStyle: 'italic' }}>Projects</span>
          </h2>
          <p style={{ maxWidth: '320px', color: 'var(--white-2)', margin: 0, paddingBottom: '0.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
            A curated collection of bespoke digital architectures. Designed to perform, built to scale.
          </p>
        </div>

        <div ref={containerRef} style={{ position: 'relative' }}>
          {projects.map((project, i) => (
            <StickyCard 
              key={i} 
              project={project} 
              index={i} 
              totalCards={projects.length} 
              progress={scrollYProgress} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}

function StickyCard({ project, index, totalCards, progress }: any) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'sticky',
      top: 0
    }}>
      <motion.div
        style={{
          width: '100%',
          height: '85vh',
          background: 'var(--black-2)',
          border: '1px solid var(--border)',
          borderRadius: 'clamp(30px, 4vw, 50px)',
          padding: 'clamp(1rem, 2vw, 2rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          transformOrigin: 'top center',
          scale,
          top: `calc(10vh + ${index * 30}px)`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '0 0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span className="display" style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', lineHeight: 1, color: 'var(--white)' }}>
              {project.num}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--white-2)' }}>
                {project.category}
              </span>
              <h3 className="display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', margin: 0, fontStyle: 'italic', letterSpacing: '-0.02em', color: 'var(--white)' }}>
                {project.title}
              </h3>
            </div>
          </div>
          <button style={{
            background: 'transparent', border: '1px solid var(--border)', borderRadius: '100px',
            padding: '0.75rem 1.5rem', color: 'var(--white)', textTransform: 'uppercase',
            letterSpacing: '0.1em', fontSize: '0.8rem', cursor: 'pointer', transition: 'all 0.3s'
          }}>
            View Case
          </button>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          gap: 'clamp(0.5rem, 1.5vw, 1.5rem)', 
          flex: 1, 
          minHeight: 0 
        }}>
          {project.type === 'images' ? (
            <>
              <div style={{ flex: isMobile ? '1' : '4', display: 'flex', flexDirection: isMobile ? 'row' : 'column', gap: 'clamp(0.5rem, 1.5vw, 1.5rem)' }}>
                <div style={{ flex: '1', height: isMobile ? 'auto' : 'clamp(130px, 16vw, 230px)' }}>
                  <img src={project.images[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'clamp(12px, 3vw, 40px)' }} />
                </div>
                {!isMobile && (
                  <div style={{ flex: '1', minHeight: 0 }}>
                    <img src={project.images[1]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'clamp(12px, 3vw, 40px)' }} />
                  </div>
                )}
              </div>
              <div style={{ flex: isMobile ? '2' : '6', minHeight: 0 }}>
                <img src={project.images[2]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'clamp(12px, 3vw, 40px)' }} />
              </div>
            </>
          ) : (
            <>
              <div style={{ flex: isMobile ? '1' : '4', display: 'flex', flexDirection: isMobile ? 'row' : 'column', gap: 'clamp(0.5rem, 1.5vw, 1.5rem)' }}>
                <div style={{ flex: '1', height: isMobile ? 'auto' : 'clamp(130px, 16vw, 230px)' }}>
                  <FbAdsAnimation />
                </div>
                {!isMobile && (
                  <div style={{ flex: '1', minHeight: 0 }}>
                    <GoogleAdsAnimation />
                  </div>
                )}
              </div>
              <div style={{ flex: isMobile ? '2' : '6', minHeight: 0 }}>
                <ContentCreationAnimation />
              </div>
              {isMobile && (
                <div style={{ flex: '1', height: 'auto' }}>
                  <GoogleAdsAnimation />
                </div>
              )}
            </>
          )}
        </div>

      </motion.div>
    </div>
  );
}

// Custom Animations

function AnimatedNumber({ value, prefix = '', suffix = '', isFloat = false }: { value: number, prefix?: string, suffix?: string, isFloat?: boolean }) {
  const ref = useRef(null);
  const inView = useFramerInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => 
    isFloat ? latest.toFixed(1) : Math.round(latest).toString()
  );
  
  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2.5, ease: "easeOut" });
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} style={{ display: 'inline-block' }}>
      {prefix}<motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

function FbAdsAnimation() {
  return (
    <div style={{ background: '#18191A', borderRadius: 'clamp(12px, 3vw, 40px)', padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ color: '#E4E6EB', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'auto' }}>Meta Ads Manager</div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ color: '#B0B3B8', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Impressions Generated</div>
        <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1877F2', fontWeight: 800, fontFamily: 'var(--font-display)', lineHeight: 1 }}>
          <AnimatedNumber value={10} suffix="M+" />
        </div>
      </div>
      <RisingChart color="rgba(24, 119, 242, 0.4)" />
    </div>
  );
}

function GoogleAdsAnimation() {
  return (
    <div style={{ background: '#202124', borderRadius: 'clamp(12px, 3vw, 40px)', padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ color: '#E8EAED', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'auto' }}>Google Ads</div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ color: '#9AA0A6', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Revenue Earned</div>
        <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#34A853', fontWeight: 800, fontFamily: 'var(--font-display)', lineHeight: 1 }}>
          <AnimatedNumber value={2.5} prefix="$" suffix="M+" isFloat={true} />
        </div>
      </div>
      <RisingChart color="rgba(52, 168, 83, 0.4)" />
    </div>
  );
}

function ContentCreationAnimation() {
  return (
    <div style={{ background: 'linear-gradient(145deg, #111, #1a1a1a)', borderRadius: 'clamp(12px, 3vw, 40px)', padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ color: '#FFF', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>Content Studio</div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--lime)', fontWeight: 800, fontFamily: 'var(--font-display)', lineHeight: 1, marginBottom: '0.5rem' }}>
          <AnimatedNumber value={150} suffix="+" />
        </div>
        <div style={{ color: 'var(--white-2)', fontSize: '1.1rem' }}>Videos Shot, Edited & Designed</div>
      </div>
      <VideoTimeline />
    </div>
  );
}

function RisingChart({ color }: { color: string }) {
  const bars = [20, 35, 25, 50, 45, 70, 60, 85, 80, 100];
  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', display: 'flex', alignItems: 'flex-end', gap: '4px', padding: '0 1rem', opacity: 0.5, zIndex: 1 }}>
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8, delay: i * 0.05, ease: 'easeOut' }}
          style={{ flex: 1, background: color, borderRadius: '4px 4px 0 0' }}
        />
      ))}
    </div>
  );
}

function VideoTimeline() {
  return (
    <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', height: '60px', opacity: 0.3, zIndex: 1 }}>
      <div style={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.2)', position: 'absolute', top: '50%' }} />
      <motion.div 
        animate={{ x: ['0%', '400%'] }} 
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', top: 0, bottom: 0, width: '2px', background: 'var(--lime)', zIndex: 2, boxShadow: '0 0 10px var(--lime)' }}
      />
      <div style={{ display: 'flex', gap: '10px', width: '100%', height: '100%', alignItems: 'center' }}>
        {[40, 60, 30, 80, 50].map((w, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ height: '20px', width: `${w}px`, background: 'rgba(255,255,255,0.1)', borderRadius: '4px', transformOrigin: 'left' }}
          />
        ))}
      </div>
    </div>
  );
}
