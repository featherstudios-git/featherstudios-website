import { motion } from 'framer-motion';

export const DiscoverAnimation = ({ accent }: { accent: string }) => {
  return (
    <div style={{ position: 'relative', width: '320px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Abstract pulsating focal point */}
      <motion.div
        animate={{ scale: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', width: '60px', height: '60px', borderRadius: '50%', background: accent, filter: 'blur(30px)' }}
      />
      {/* Rotating geometric constellation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ width: '180px', height: '180px', position: 'relative' }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              width: '8px', height: '8px',
              background: 'var(--white)',
              borderRadius: '50%',
              boxShadow: '0 0 10px var(--white)',
              transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-80px)`
            }}
          />
        ))}
        {/* Connecting lines */}
        <div style={{ position: 'absolute', inset: '40px', border: '1px dashed rgba(255,255,255,0.2)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', inset: '20px', border: `1px solid ${accent}40`, borderRadius: '50%' }} />
      </motion.div>
    </div>
  );
};

export const BuildAnimation = ({ accent }: { accent: string }) => {
  return (
    <div style={{ position: 'relative', width: '320px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              scale: [1, 0.8, 1],
              rotate: [0, 90, 90, 0],
              opacity: [0.5, 1, 0.5],
              borderRadius: ['8px', '50%', '8px']
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              delay: (i % 3) * 0.2 + Math.floor(i / 3) * 0.2,
              ease: 'easeInOut' 
            }}
            style={{
              width: '40px', height: '40px',
              background: i === 4 ? accent : 'rgba(255,255,255,0.05)',
              border: `1px solid ${i === 4 ? accent : 'rgba(255,255,255,0.2)'}`,
              boxShadow: i === 4 ? `0 0 20px ${accent}` : 'none'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const GrowAnimation = ({ accent }: { accent: string }) => {
  return (
    <div style={{ position: 'relative', width: '320px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: '200px', height: '200px' }}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [0, 1.5],
              opacity: [1, 0],
              rotate: [0, 90]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeOut'
            }}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              width: '100px', height: '100px',
              marginTop: '-50px', marginLeft: '-50px',
              border: `2px solid ${i % 2 === 0 ? accent : 'var(--white)'}`,
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const SustainAnimation = ({ accent }: { accent: string }) => {
  return (
    <div style={{ position: 'relative', width: '320px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Mesmerizing breathing wave */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'linear'
          }}
          style={{
            position: 'absolute',
            width: `${100 + i * 40}px`,
            height: `${100 + i * 40}px`,
            border: `1px solid ${i === 2 ? accent : 'rgba(255,255,255,0.15)'}`,
            borderRadius: '40% 60% 50% 50% / 50% 40% 60% 50%',
            boxShadow: i === 2 ? `inset 0 0 20px ${accent}40` : 'none'
          }}
        />
      ))}
      <motion.div
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ width: '40px', height: '40px', background: 'var(--white)', borderRadius: '50%', boxShadow: '0 0 30px var(--white)' }}
      />
    </div>
  );
};
