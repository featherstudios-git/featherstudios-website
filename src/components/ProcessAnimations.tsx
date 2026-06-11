import { motion } from 'framer-motion';

export const DiscoverAnimation = ({ accent }: { accent: string }) => {
  return (
    <div style={{ position: 'relative', width: '320px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="liquid-glass" style={{ width: '280px', height: '160px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', padding: '15px', display: 'flex', gap: '15px' }}>
        {/* Left: Document/Data list */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
           {[0, 1, 2].map((i) => (
             <motion.div 
               key={i} 
               animate={{ opacity: [0.5, 1, 0.5], scale: [0.98, 1, 0.98] }} 
               transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} 
               style={{ height: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 8px', gap: '6px' }}
             >
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: i === 1 ? accent : 'var(--white-2)' }} />
                <div style={{ width: '40px', height: '4px', background: 'var(--white-2)', borderRadius: '2px', opacity: 0.5 }} />
             </motion.div>
           ))}
        </div>
        
        {/* Right: Scanning/Radar Area */}
        <div style={{ flex: 1, position: 'relative', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
           {/* Radar sweep */}
           <motion.div 
             animate={{ rotate: 360 }} 
             transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
             style={{ position: 'absolute', top: '50%', left: '50%', width: '150px', height: '150px', background: `conic-gradient(from 0deg, transparent 0deg, ${accent}60 90deg, transparent 90deg)`, transformOrigin: '0 0', marginTop: '-75px', marginLeft: '-75px', borderRadius: '50%' }}
           />
           {/* Target rings */}
           <div style={{ position: 'absolute', inset: '20px', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '50%' }} />
           <div style={{ position: 'absolute', inset: '40px', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '50%' }} />
           
           {/* Ping dots */}
           <motion.div animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} style={{ position: 'absolute', top: '30%', left: '60%', width: '6px', height: '6px', background: accent, borderRadius: '50%', boxShadow: `0 0 10px ${accent}` }} />
           <motion.div animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} style={{ position: 'absolute', top: '70%', left: '40%', width: '8px', height: '8px', background: 'var(--white)', borderRadius: '50%', boxShadow: `0 0 10px var(--white)` }} />
        </div>
      </div>
    </div>
  );
};

export const BuildAnimation = ({ accent }: { accent: string }) => {
  return (
    <div style={{ position: 'relative', width: '320px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Editor Panel */}
      <motion.div 
        className="liquid-glass"
        style={{ width: '140px', height: '180px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', padding: '15px', position: 'absolute', left: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}
      >
        <div style={{ width: '30px', height: '4px', background: 'var(--white-2)', borderRadius: '2px', marginBottom: '4px' }} />
        {[60, 80, 40, 90, 50].map((w, i) => (
          <motion.div 
            key={i}
            initial={{ width: 0 }}
            animate={{ width: `${w}%` }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: i * 0.2 }}
            style={{ height: '6px', background: i % 2 === 0 ? accent : 'var(--white-2)', borderRadius: '3px' }}
          />
        ))}
      </motion.div>

      {/* Output Panel (Assembling) */}
      <div style={{ width: '140px', height: '180px', position: 'absolute', right: '10px', border: '2px dashed rgba(255,255,255,0.2)', borderRadius: '12px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <motion.div
          animate={{ x: [50, 0, 0, 50], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', times: [0, 0.2, 0.8, 1] }}
          style={{ width: '100%', height: '30px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', border: `1px solid ${accent}` }}
        />
        <motion.div
          animate={{ x: [50, 0, 0, 50], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 0.2, times: [0, 0.2, 0.8, 1] }}
          style={{ width: '100%', flex: 1, background: `linear-gradient(135deg, rgba(255,255,255,0.05), ${accent}20)`, borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}
        />
        <div style={{ display: 'flex', gap: '8px' }}>
          <motion.div
            animate={{ y: [30, 0, 0, 30], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 0.4, times: [0, 0.2, 0.8, 1] }}
            style={{ flex: 1, height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px' }}
          />
          <motion.div
            animate={{ y: [30, 0, 0, 30], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 0.5, times: [0, 0.2, 0.8, 1] }}
            style={{ flex: 1, height: '40px', background: accent, borderRadius: '6px' }}
          />
        </div>
      </div>
      
      {/* Compiling arrows */}
      <motion.div 
        animate={{ x: [0, 10, 0] }} transition={{ duration: 1, repeat: Infinity }}
        style={{ position: 'absolute', color: accent, fontWeight: 'bold', fontSize: '24px' }}
      >
        →
      </motion.div>
    </div>
  );
};

export const GrowAnimation = ({ accent }: { accent: string }) => {
  return (
    <div style={{ position: 'relative', width: '320px', height: '220px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '20px', paddingBottom: '30px' }}>
      {/* Background Grid Lines (Subtle) */}
      <div style={{ position: 'absolute', bottom: '30px', left: '20px', right: '20px', borderBottom: '2px solid rgba(255,255,255,0.1)' }} />
      <div style={{ position: 'absolute', bottom: '90px', left: '20px', right: '20px', borderBottom: '1px dashed rgba(255,255,255,0.05)' }} />
      <div style={{ position: 'absolute', bottom: '150px', left: '20px', right: '20px', borderBottom: '1px dashed rgba(255,255,255,0.05)' }} />

      {/* Bar 1 */}
      <motion.div
        animate={{ height: ['0px', '60px', '60px', '0px'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', times: [0, 0.3, 0.8, 1] }}
        className="liquid-glass"
        style={{ width: '40px', borderRadius: '6px 6px 0 0', zIndex: 2, border: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none' }}
      />
      {/* Bar 2 */}
      <motion.div
        animate={{ height: ['0px', '100px', '100px', '0px'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 0.2, times: [0, 0.3, 0.8, 1] }}
        className="liquid-glass"
        style={{ width: '40px', borderRadius: '6px 6px 0 0', zIndex: 2, border: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none' }}
      />
      {/* Bar 3 (Breakout) */}
      <motion.div
        animate={{ height: ['0px', '190px', '190px', '0px'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 0.4, times: [0, 0.4, 0.8, 1] }}
        style={{ width: '50px', background: accent, borderRadius: '8px 8px 0 0', zIndex: 2, boxShadow: `0 0 30px ${accent}60`, border: `1px solid ${accent}` }}
      />

      {/* Line Graph following Breakout */}
      <motion.svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', zIndex: 3 }}>
        <motion.path
          d="M 60 160 L 120 120 L 190 30"
          fill="none"
          stroke="var(--white)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.2, times: [0, 0.5, 0.8, 1] }}
          style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.5))' }}
        />
        <motion.circle
          cx="190" cy="30" r="8" fill="var(--white)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 0.6, times: [0, 0.1, 0.8, 1] }}
        />
      </motion.svg>
    </div>
  );
};

export const SustainAnimation = ({ accent }: { accent: string }) => {
  return (
    <div style={{ position: 'relative', width: '320px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Surrounding Shield Rings */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', width: '240px', height: '240px', borderRadius: '50%', border: `1px solid ${accent}40`, filter: 'blur(2px)' }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{ position: 'absolute', width: '200px', height: '200px', borderRadius: '50%', border: `1px dashed ${accent}`, opacity: 0.5 }}
      />

      {/* Central Product Card */}
      <div className="liquid-glass" style={{ width: '160px', height: '120px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10, boxShadow: `0 0 30px ${accent}30` }}>
        <div style={{ width: '40px', height: '40px', background: 'var(--white)', borderRadius: '8px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{ width: '20px', height: '20px', border: '3px solid var(--black)', borderTopColor: accent, borderRadius: '50%' }}
          />
        </div>
        <div style={{ width: '80%', height: '6px', background: 'var(--white-2)', borderRadius: '3px', marginBottom: '6px' }} />
        <div style={{ width: '50%', height: '4px', background: accent, borderRadius: '2px' }} />
      </div>

      {/* Incoming Updates / Maintenance packets */}
      <motion.div
        animate={{ x: [-80, 0], y: [-60, -30], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
        style={{ position: 'absolute', width: '20px', height: '20px', background: accent, borderRadius: '4px', filter: `drop-shadow(0 0 10px ${accent})` }}
      />
      <motion.div
        animate={{ x: [80, 0], y: [60, 30], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
        style={{ position: 'absolute', width: '16px', height: '16px', background: 'var(--white)', borderRadius: '50%', filter: `drop-shadow(0 0 10px white)` }}
      />

    </div>
  );
};
