import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MessageSquare, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="pricing" style={{ position: 'relative', background: 'var(--black-2)', padding: 'calc(var(--pad-y) * 2) var(--pad-x)', overflow: 'hidden' }}>
      
      {/* Background Animated Grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'linear-gradient(var(--white) 1px, transparent 1px), linear-gradient(90deg, var(--white) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="liquid-glass"
          style={{
            borderRadius: 'clamp(24px, 4vw, 40px)',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {/* Animated Glow Orbs */}
          <motion.div animate={{ x: ['-20%', '20%', '-20%'], y: ['-20%', '20%', '-20%'] }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50%', height: '50%', background: 'var(--lime)', opacity: 0.07, filter: 'blur(100px)', borderRadius: '50%', pointerEvents: 'none' }} />
          <motion.div animate={{ x: ['20%', '-20%', '20%'], y: ['20%', '-20%', '20%'] }} transition={{ duration: 15, repeat: Infinity, ease: 'linear', delay: 2 }} style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '60%', height: '60%', background: '#a855f7', opacity: 0.04, filter: 'blur(120px)', borderRadius: '50%', pointerEvents: 'none' }} />
          
          {/* Left Side: Content */}
          <div style={{ flex: '1 1 500px', padding: 'clamp(3rem, 6vw, 6rem) clamp(2rem, 5vw, 4rem)', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
                style={{ width: '8px', height: '8px', background: 'var(--lime)', borderRadius: '50%', boxShadow: '0 0 10px var(--lime)' }} 
              />
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--lime)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>Let's Collaborate</div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="display" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', color: 'var(--white)', margin: '0 0 1.5rem 0', lineHeight: 1.05 }}
            >
              Ready to <br /><span style={{ color: 'var(--lime)', fontStyle: 'italic' }}>Elevate</span> Your Brand?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ color: 'var(--white-2)', fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', lineHeight: 1.7, maxWidth: '500px', margin: '0 0 3rem 0' }}
            >
              Every project is unique. Let's discuss your vision, map out a custom strategy, and build something extraordinary together. Book a <strong style={{ color: 'var(--white)' }}>free advisory discussion</strong> today.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}
            >
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn btn-lime"
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '10px', 
                  padding: '1.2rem 2.5rem', fontSize: '1rem', borderRadius: '100px',
                  boxShadow: '0 0 40px rgba(191,255,0,0.15)', flex: '1 1 auto', justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                <Calendar size={18} />
                Schedule a Meet
              </a>
              
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn"
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '10px', 
                  padding: '1.2rem 2.5rem', fontSize: '1rem', borderRadius: '100px',
                  background: 'rgba(255,255,255,0.05)', color: 'var(--white)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s', flex: '1 1 auto', justifyContent: 'center',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              >
                <MessageSquare size={18} />
                Contact for Project
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Abstract Visual Animation */}
          <div style={{ flex: '1 1 400px', position: 'relative', minHeight: '400px', borderLeft: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
             
             {/* The Halo Effect */}
             <div style={{ position: 'relative', width: '280px', height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Main Halo */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  style={{
                    position: 'absolute', inset: 0,
                    borderRadius: '50%',
                    background: 'linear-gradient(to right, var(--lime) 0%, transparent 50%, transparent 100%)',
                    padding: '1px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))'
                  }}
                />
                
                {/* Secondary Offset Halo */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  style={{
                    position: 'absolute', inset: '20px',
                    borderRadius: '50%',
                    background: 'linear-gradient(to bottom, var(--white) 0%, transparent 40%, transparent 100%)',
                    padding: '1px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    opacity: 0.5
                  }}
                />

                {/* Inner Glow Core */}
                <motion.div
                  animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    width: '100px', height: '100px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--lime) 0%, transparent 70%)',
                    filter: 'blur(10px)',
                    opacity: 0.5
                  }}
                />

                {/* Center Sharp Dot */}
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--white)', boxShadow: '0 0 10px var(--white)' }} />
             </div>
             
             {/* Sweeping Light Ray */}
             <motion.div
               animate={{ x: ['-200%', '200%'] }}
               transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
               style={{
                 position: 'absolute',
                 top: 0, bottom: 0, left: '50%',
                 width: '1px',
                 background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.8), transparent)',
                 transform: 'rotate(45deg)',
                 filter: 'blur(2px)'
               }}
             />

          </div>
        </motion.div>

      </div>
    </section>
  );
}
