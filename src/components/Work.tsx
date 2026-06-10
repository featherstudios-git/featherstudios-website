import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    num: '01',
    category: 'Client',
    title: 'Nextlevel Studio',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85'
    ]
  },
  {
    num: '02',
    category: 'Personal',
    title: 'Aura Brand Identity',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85'
    ]
  },
  {
    num: '03',
    category: 'Client',
    title: 'Solaris Digital',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85'
    ]
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
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--pad-x)' }}>
        
        {/* Header */}
        <h2 className="display" style={{ 
          fontSize: 'clamp(3rem, 6vw, 5rem)', 
          color: 'var(--white)', 
          margin: '0 0 4rem 0', 
          lineHeight: 1 
        }}>
          Selected<br />
          <span style={{ color: 'var(--lime)', fontStyle: 'italic' }}>Work</span>
        </h2>

        {/* Sticky Scroll Container */}
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
        {/* Top Row */}
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

        {/* Bottom Row - Image Grid */}
        <div style={{ display: 'flex', gap: 'clamp(0.5rem, 1.5vw, 1.5rem)', flex: 1, minHeight: 0 }}>
          {/* Left Column (40%) */}
          <div style={{ flex: '4', display: 'flex', flexDirection: 'column', gap: 'clamp(0.5rem, 1.5vw, 1.5rem)' }}>
            <div style={{ flex: '0 0 auto', height: 'clamp(130px, 16vw, 230px)' }}>
              <img src={project.images[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'clamp(20px, 3vw, 40px)' }} />
            </div>
            <div style={{ flex: '1', minHeight: 0 }}>
              <img src={project.images[1]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'clamp(20px, 3vw, 40px)' }} />
            </div>
          </div>
          
          {/* Right Column (60%) */}
          <div style={{ flex: '6', height: '100%' }}>
            <img src={project.images[2]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'clamp(20px, 3vw, 40px)' }} />
          </div>
        </div>

      </motion.div>
    </div>
  );
}
