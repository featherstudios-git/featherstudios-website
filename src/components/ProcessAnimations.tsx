import { motion } from 'framer-motion';

export const DiscoverAnimation = ({ accent }: { accent: string }) => {
  // Chaos positions
  const chaos = [
    { x: -30, y: -20 }, { x: 40, y: -40 }, { x: -20, y: 30 },
    { x: 30, y: 20 }, { x: -40, y: 0 }, { x: 10, y: -30 },
    { x: 20, y: 40 }, { x: 0, y: 10 }
  ];
  
  // Ordered positions (grid 4x2)
  const order = [
    { x: -45, y: -15 }, { x: -15, y: -15 }, { x: 15, y: -15 }, { x: 45, y: -15 },
    { x: -45, y: 15 }, { x: -15, y: 15 }, { x: 15, y: 15 }, { x: 45, y: 15 }
  ];

  return (
    <div style={{ position: 'relative', width: '240px', height: '160px', background: 'var(--black-2)', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Scanning Line */}
      <motion.div
        animate={{ left: ['-20%', '120%', '-20%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: 0, width: '2px', height: '100%', background: accent, boxShadow: `0 0 15px ${accent}`, zIndex: 10 }}
      />
      <motion.div
        animate={{ left: ['-20%', '120%', '-20%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: 0, width: '40px', height: '100%', background: `linear-gradient(to right, transparent, ${accent}30)`, marginLeft: '-40px' }}
      />

      {chaos.map((pos, i) => (
        <motion.div
          key={i}
          animate={{
            x: [pos.x, order[i].x, order[i].x, pos.x],
            y: [pos.y, order[i].y, order[i].y, pos.y],
            scale: [1, 1.2, 1, 1],
            borderRadius: ['50%', '4px', '4px', '50%'],
            backgroundColor: ['var(--white-2)', accent, accent, 'var(--white-2)']
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', times: [0, 0.4, 0.6, 1] }}
          style={{ position: 'absolute', width: '12px', height: '12px' }}
        />
      ))}
    </div>
  );
};

export const BuildAnimation = ({ accent }: { accent: string }) => {
  return (
    <div style={{ position: 'relative', width: '240px', height: '160px', background: 'var(--black-2)', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden', padding: '15px' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', border: '1px dashed var(--border)', borderRadius: '4px' }}>
        
        {/* Header Block */}
        <motion.div
          animate={{ y: [-50, 0, 0, -50], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', times: [0, 0.2, 0.8, 1] }}
          style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '20%', background: 'var(--black-3)', borderBottom: `2px solid ${accent}` }}
        />

        {/* Sidebar Block */}
        <motion.div
          animate={{ x: [-100, 0, 0, -100], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 0.2, times: [0, 0.2, 0.8, 1] }}
          style={{ position: 'absolute', top: '20%', left: '0', width: '30%', height: '80%', background: 'var(--black)', borderRight: `1px solid ${accent}` }}
        />

        {/* Main Content Grid */}
        <div style={{ position: 'absolute', top: '25%', left: '35%', width: '60%', height: '70%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 0.4 + (i * 0.1), times: [0, 0.2, 0.8, 1] }}
              style={{ background: i === 0 ? accent : 'var(--white-2)', borderRadius: '4px', opacity: 0.8 }}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export const GrowAnimation = ({ accent }: { accent: string }) => {
  return (
    <div style={{ position: 'relative', width: '240px', height: '160px', background: 'var(--black-2)', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', alignItems: 'flex-end', padding: '20px', gap: '15px' }}>
      {/* Background Grid Lines */}
      <div style={{ position: 'absolute', inset: '20px', borderBottom: '1px solid var(--border)', borderLeft: '1px solid var(--border)' }} />
      <div style={{ position: 'absolute', top: '50px', left: '20px', right: '20px', borderBottom: '1px dashed var(--border)', opacity: 0.5 }} />

      {/* Bar 1 */}
      <motion.div
        animate={{ height: ['0%', '30%', '30%', '0%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', times: [0, 0.3, 0.8, 1] }}
        style={{ width: '30px', background: 'var(--white-2)', borderRadius: '4px 4px 0 0', zIndex: 2 }}
      />
      {/* Bar 2 */}
      <motion.div
        animate={{ height: ['0%', '50%', '50%', '0%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 0.2, times: [0, 0.3, 0.8, 1] }}
        style={{ width: '30px', background: 'var(--white-2)', borderRadius: '4px 4px 0 0', zIndex: 2 }}
      />
      {/* Bar 3 (Breakout) */}
      <motion.div
        animate={{ height: ['0%', '130%', '130%', '0%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 0.4, times: [0, 0.4, 0.8, 1] }}
        style={{ width: '40px', background: accent, borderRadius: '4px 4px 0 0', zIndex: 2, boxShadow: `0 0 20px ${accent}80` }}
      />

      {/* Line Graph following Breakout */}
      <motion.svg style={{ position: 'absolute', inset: '20px', width: '200px', height: '120px', overflow: 'visible', zIndex: 3 }}>
        <motion.path
          d="M 15 120 L 60 85 L 105 60 L 160 -40"
          fill="none"
          stroke="var(--white)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.2, times: [0, 0.5, 0.8, 1] }}
        />
        <motion.circle
          cx="160" cy="-40" r="6" fill="var(--white)"
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
    <div style={{ position: 'relative', width: '240px', height: '160px', background: 'var(--black-2)', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      
      {/* Emitting Pulses */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`pulse-${i}`}
          animate={{ scale: [0.5, 2.5], opacity: [0.8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: i * 1 }}
          style={{ position: 'absolute', width: '100px', height: '100px', border: `2px solid ${accent}`, borderRadius: '50%' }}
        />
      ))}

      {/* Infinity / Interlocking Loops */}
      <div style={{ display: 'flex', alignItems: 'center', zIndex: 2 }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{ width: '60px', height: '60px', border: '8px solid var(--black-3)', borderTopColor: accent, borderRadius: '50%', marginRight: '-15px', mixBlendMode: 'screen' }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{ width: '60px', height: '60px', border: '8px solid var(--black-3)', borderBottomColor: accent, borderRadius: '50%', marginLeft: '-15px', mixBlendMode: 'screen' }}
        />
      </div>

      {/* Central Core */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', width: '20px', height: '20px', background: 'var(--white)', borderRadius: '50%', boxShadow: `0 0 20px ${accent}`, zIndex: 3 }}
      />
    </div>
  );
};
