import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MessageSquare, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="pricing" style={{ background: 'var(--black-2)', padding: 'calc(var(--pad-y) * 1.5) var(--pad-x)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="liquid-glass"
          style={{
            borderRadius: 'clamp(20px, 4vw, 40px)',
            padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 5vw, 4rem)',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}
        >
          {/* Background Glows */}
          <div style={{ position: 'absolute', top: '-20%', left: '50%', width: '60%', height: '50%', background: 'var(--lime)', opacity: 0.05, filter: 'blur(100px)', transform: 'translateX(-50%)', borderRadius: '50%', pointerEvents: 'none' }} />
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--white)', margin: '0 0 1.5rem 0', lineHeight: 1.1 }}
            >
              Ready to <span style={{ color: 'var(--lime)', fontStyle: 'italic' }}>Elevate</span><br />
              Your Brand?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ color: 'var(--white-2)', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 3.5rem auto' }}
            >
              Every project is unique. Let's discuss your vision, map out a custom strategy, and build something extraordinary together. Book a <strong style={{ color: 'var(--white)' }}>free advisory discussion</strong> today.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', alignItems: 'center' }}
            >
              {/* Schedule a Meet */}
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn btn-lime"
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '10px', 
                  padding: '1.2rem 2.5rem', fontSize: '1.1rem', borderRadius: '100px',
                  boxShadow: '0 0 40px rgba(191,255,0,0.15)'
                }}
              >
                <Calendar size={20} />
                Schedule a Meet
              </a>
              
              {/* Contact for Project */}
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn"
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '10px', 
                  padding: '1.2rem 2.5rem', fontSize: '1.1rem', borderRadius: '100px',
                  background: 'rgba(255,255,255,0.05)', color: 'var(--white)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              >
                <MessageSquare size={20} />
                Contact for Project
                <ArrowRight size={18} style={{ marginLeft: '4px' }} />
              </a>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
