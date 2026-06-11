import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MessageSquare, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="pricing" style={{ position: 'relative', background: 'var(--black)', padding: 'calc(var(--pad-y) * 2) 0', overflow: 'hidden' }}>
      
      {/* Massive Infinite Scrolling Background Text */}
      <div style={{ position: 'absolute', top: '15%', left: 0, width: '200%', display: 'flex', opacity: 0.02, pointerEvents: 'none', zIndex: 0 }}>
        <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ whiteSpace: 'nowrap', fontSize: '18vw', fontWeight: 900, fontFamily: 'var(--font-display)', lineHeight: 1 }}>
          LET'S COLLABORATE LET'S COLLABORATE LET'S COLLABORATE
        </motion.div>
      </div>

      {/* Atmospheric Aurora Glows */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 10, repeat: Infinity }} style={{ position: 'absolute', top: '10%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, var(--lime) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none', zIndex: 0 }} />
      <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 15, repeat: Infinity }} style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)', filter: 'blur(120px)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ width: '95%', maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* Unique Architectural Card Shape */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: 'clamp(24px, 4vw, 40px)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {/* Animated Glowing Border Trace */}
          <div 
            style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', pointerEvents: 'none', opacity: 0.6, zIndex: 10 }}
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              style={{ position: 'absolute', top: '50%', left: '50%', width: '150%', height: '150%', background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, var(--lime) 360deg)', transformOrigin: '0 0', marginTop: '-75%', marginLeft: '-75%' }}
            />
          </div>

          {/* Internal gradient map */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 60%)', pointerEvents: 'none' }} />
          
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
              className="display" style={{ fontSize: 'clamp(3.5rem, 6vw, 6rem)', color: 'var(--white)', margin: '0 0 1.5rem 0', lineHeight: 1.05, letterSpacing: '-0.02em' }}
            >
              Ready to <br />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <motion.span 
                  animate={{ backgroundPosition: ['0% center', '200% center'] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }} 
                  style={{ 
                    display: 'inline-block',
                    background: 'linear-gradient(90deg, var(--white), var(--lime), var(--white))', 
                    backgroundSize: '200% auto', 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent',
                    fontStyle: 'italic',
                    paddingRight: '10px'
                  }}
                >
                  Elevate
                </motion.span>
                {/* Decorative strike/underline */}
                <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }} style={{ position: 'absolute', bottom: '15%', left: 0, height: '6px', background: 'var(--lime)', borderRadius: '3px', zIndex: -1, opacity: 0.5 }} />
              </span> 
              <br />Your Brand?
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

          {/* Right Side: 3D Isometric Collaboration Mockup */}
          <div style={{ flex: '1 1 400px', position: 'relative', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
             
             {/* The Isometric Container */}
             <div style={{ position: 'relative', width: '280px', height: '280px', transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(-45deg)' }}>
                
                {/* Base Layer: Calendar Dashboard */}
                <div 
                  className="liquid-glass"
                  style={{ position: 'absolute', inset: 0, borderRadius: '24px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(0,0,0,0.4)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: '20px 20px 60px rgba(0,0,0,0.6)', transform: 'translateZ(0px)' }}
                >
                  <div style={{ width: '40%', height: '8px', background: 'var(--white)', borderRadius: '4px', marginBottom: '10px' }} />
                  {/* Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', flex: 1 }}>
                     {[...Array(12)].map((_, i) => (
                       <motion.div 
                         key={i}
                         animate={i === 5 || i === 9 ? { backgroundColor: ['rgba(255,255,255,0.05)', 'var(--lime)', 'rgba(255,255,255,0.05)'] } : {}}
                         transition={{ duration: 4, repeat: Infinity, delay: i * 0.15 }}
                         style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '6px', border: i === 5 || i === 9 ? '1px solid var(--lime)' : '1px solid rgba(255,255,255,0.02)' }}
                       />
                     ))}
                  </div>
                </div>

                {/* Layer 2: Floating Strategy Document */}
                <motion.div 
                  animate={{ translateZ: [40, 60, 40] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ position: 'absolute', top: '-10%', right: '-20%', width: '140px', height: '180px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '16px', padding: '20px', boxShadow: '20px 20px 40px rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column', gap: '12px' }}
                >
                  <div style={{ width: '24px', height: '24px', background: '#a855f7', borderRadius: '6px', marginBottom: '8px' }} />
                  <div style={{ width: '90%', height: '6px', background: 'var(--white)', borderRadius: '3px' }} />
                  <div style={{ width: '70%', height: '4px', background: 'rgba(255,255,255,0.5)', borderRadius: '2px' }} />
                  <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', marginTop: '10px' }} />
                  <div style={{ width: '80%', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }} />
                </motion.div>

                {/* Layer 4: Revenue / Growth Chart */}
                <motion.div 
                  animate={{ translateZ: [60, 80, 60], y: [-5, 5, -5] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  style={{ position: 'absolute', top: '-30%', left: '-15%', width: '140px', padding: '16px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '16px', boxShadow: '15px 15px 30px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', gap: '8px' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--lime)', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'var(--font-display)' }}>
                      <span>₹</span>
                      <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: '40px', height: '14px', background: 'rgba(255,255,255,0.8)', borderRadius: '2px' }} />
                    </div>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                  </div>
                  
                  {/* Animated Bar Chart */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '40px', marginTop: '8px' }}>
                    <motion.div animate={{ height: ['40%', '50%', '40%'] }} transition={{ duration: 3, repeat: Infinity }} style={{ flex: 1, background: 'rgba(255,255,255,0.1)', borderRadius: '3px 3px 0 0' }} />
                    <motion.div animate={{ height: ['60%', '70%', '60%'] }} transition={{ duration: 3.5, repeat: Infinity }} style={{ flex: 1, background: 'rgba(255,255,255,0.2)', borderRadius: '3px 3px 0 0' }} />
                    <motion.div animate={{ height: ['80%', '95%', '80%'] }} transition={{ duration: 4, repeat: Infinity }} style={{ flex: 1, background: 'var(--lime)', borderRadius: '3px 3px 0 0', boxShadow: '0 0 10px rgba(191,255,0,0.3)' }} />
                  </div>
                </motion.div>

                {/* Layer 3: Dynamic Chat Bubble / Notification */}
                <motion.div 
                  animate={{ translateZ: [80, 100, 80], x: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  style={{ position: 'absolute', bottom: '0%', left: '-30%', width: '180px', padding: '16px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid var(--lime)', borderRadius: '20px', boxShadow: '10px 10px 40px rgba(191,255,0,0.15)', display: 'flex', alignItems: 'center', gap: '12px' }}
                >
                  <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: '16px', height: '16px', background: 'var(--lime)', borderRadius: '50%', boxShadow: '0 0 15px var(--lime)' }} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ width: '100%', height: '4px', background: 'var(--white)', borderRadius: '2px' }} />
                    <div style={{ width: '60%', height: '4px', background: 'rgba(255,255,255,0.5)', borderRadius: '2px' }} />
                  </div>
                </motion.div>

                {/* Floating Animated Cursor */}
                <motion.div
                  animate={{ 
                    x: ['10%', '80%', '50%', '10%'], 
                    y: ['80%', '20%', '70%', '80%'],
                    translateZ: [140, 140, 140, 140] 
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ position: 'absolute', top: 0, left: 0, width: '32px', height: '32px', filter: 'drop-shadow(10px 10px 10px rgba(0,0,0,0.5))', zIndex: 100 }}
                >
                  <svg viewBox="0 0 24 24" fill="var(--white)" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                    <path d="M4 2L20 10L13 13L10 20L4 2Z" stroke="var(--black)" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                  {/* Clicking ripple effect */}
                  <motion.div
                    animate={{ scale: [0, 2], opacity: [1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                    style={{ position: 'absolute', top: '0', left: '0', width: '20px', height: '20px', border: '2px solid var(--lime)', borderRadius: '50%', transform: 'translate(-5px, -5px)' }}
                  />
                </motion.div>

                {/* Scanning Laser Overlay */}
                <motion.div
                  animate={{ y: ['-100%', '300%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  style={{ position: 'absolute', top: 0, left: '-50%', width: '200%', height: '30px', background: 'linear-gradient(to bottom, transparent, var(--lime) 50%, transparent)', opacity: 0.15, filter: 'blur(5px)', transform: 'translateZ(10px)' }}
                />

             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
