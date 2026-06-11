import { motion } from 'framer-motion';
import { Server } from 'lucide-react';

export const DiscoverAnimation = ({ accent }: { accent: string }) => {
  return (
    <div style={{ position: 'relative', width: '320px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="280" height="160" viewBox="0 0 280 160" style={{ overflow: 'visible' }}>
        {/* Winding Path */}
        <motion.path
          d="M 20 140 C 60 140, 80 40, 140 40 C 200 40, 220 120, 260 120"
          fill="none"
          stroke="var(--white-2)"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <motion.path
          d="M 20 140 C 60 140, 80 40, 140 40 C 200 40, 220 120, 260 120"
          fill="none"
          stroke={accent}
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.6, 0.8, 1] }}
          style={{ filter: `drop-shadow(0 0 8px ${accent})` }}
        />

        {/* Nodes */}
        <motion.circle cx="20" cy="140" r="8" fill="var(--black)" stroke={accent} strokeWidth="3"
          animate={{ scale: [0, 1, 1, 0], backgroundColor: ['var(--black)', accent, accent, 'var(--black)'] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.8, 1] }}
        />
        <motion.circle cx="140" cy="40" r="8" fill="var(--black)" stroke={accent} strokeWidth="3"
          animate={{ scale: [0, 0, 1, 1, 0], backgroundColor: ['var(--black)', 'var(--black)', accent, accent, 'var(--black)'] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.25, 0.35, 0.8, 1] }}
        />
        <motion.circle cx="260" cy="120" r="10" fill={accent}
          animate={{ scale: [0, 0, 1, 1, 0], boxShadow: [`0 0 0px ${accent}`, `0 0 0px ${accent}`, `0 0 20px ${accent}`, `0 0 20px ${accent}`, `0 0 0px ${accent}`] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.5, 0.6, 0.8, 1] }}
        />

        {/* Floating UI tooltips */}
        <motion.rect x="110" y="5" width="60" height="20" rx="4" fill="var(--white)" 
          animate={{ opacity: [0, 0, 1, 1, 0], y: [10, 10, 0, 0, 10] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.25, 0.35, 0.8, 1] }}
        />
        <motion.rect x="115" y="13" width="30" height="4" rx="2" fill="var(--black)" 
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.25, 0.35, 0.8, 1] }}
        />
      </svg>
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
      
      <div className="liquid-glass" style={{ width: '280px', height: '160px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        
        {/* Top Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Server size={20} color="var(--white-2)" />
            <div style={{ fontSize: '12px', color: 'var(--white-2)', fontWeight: 'bold', letterSpacing: '1px' }}>SYSTEM HEALTH</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: `${accent}20`, padding: '4px 10px', borderRadius: '100px', border: `1px solid ${accent}40` }}>
            <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: '6px', height: '6px', background: accent, borderRadius: '50%', boxShadow: `0 0 10px ${accent}` }} />
            <span style={{ fontSize: '12px', color: accent, fontWeight: 'bold' }}>100%</span>
          </div>
        </div>

        {/* Heartbeat Graph */}
        <div style={{ position: 'relative', height: '60px', width: '100%' }}>
           <motion.svg width="100%" height="100%" viewBox="0 0 240 60" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
              <motion.path 
                d="M 0 30 L 40 30 L 50 10 L 70 50 L 80 30 L 160 30 L 170 10 L 190 50 L 200 30 L 240 30"
                fill="none"
                stroke={accent}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDashoffset: 240, strokeDasharray: "240 240" }}
                animate={{ strokeDashoffset: [240, 0, -240] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                style={{ filter: `drop-shadow(0 0 6px ${accent}80)` }}
              />
           </motion.svg>
        </div>

        {/* Bottom Status */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
            <motion.div animate={{ x: ['-100%', '0%', '0%', '-100%'] }} transition={{ duration: 4, repeat: Infinity }} style={{ width: '100%', height: '100%', background: 'var(--white-2)' }} />
          </div>
          <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
            <motion.div animate={{ x: ['-100%', '0%', '0%', '-100%'] }} transition={{ duration: 4, repeat: Infinity, delay: 0.2 }} style={{ width: '100%', height: '100%', background: 'var(--white-2)' }} />
          </div>
          <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
            <motion.div animate={{ x: ['-100%', '0%', '0%', '-100%'] }} transition={{ duration: 4, repeat: Infinity, delay: 0.4 }} style={{ width: '100%', height: '100%', background: 'var(--white-2)' }} />
          </div>
        </div>

      </div>

    </div>
  );
};
