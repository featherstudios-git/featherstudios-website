import { motion } from 'framer-motion';
import { Heart, Share2, CheckCircle, Search, MousePointer2, ShoppingCart } from 'lucide-react';

export const WebDevAnimation = ({ accent }: { accent: string }) => (
  <div style={{ position: 'relative', width: '220px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'scale(1.4)', transformOrigin: 'center', perspective: '1000px' }}>
    {/* Base Browser Window (Isometric) */}
    <motion.div 
      initial={{ rotateX: 55, rotateZ: -40, y: 10 }}
      animate={{ y: [10, 0, 10] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'absolute', width: '140px', height: '100px', background: 'var(--black-2)', borderRadius: '6px', border: '1px solid var(--border)', boxShadow: `0 20px 40px rgba(0,0,0,0.8), inset 0 0 0 1px ${accent}40`, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
    >
      <div style={{ height: '12px', background: 'var(--black-3)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', padding: '0 4px', gap: '2px' }}>
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ff5f56' }} />
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ffbd2e' }} />
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#27c93f' }} />
      </div>
      <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ width: '100%', height: '20px', background: 'var(--black-3)', borderRadius: '4px' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
          <div style={{ height: '20px', background: 'var(--black-3)', borderRadius: '4px' }} />
          <div style={{ height: '20px', background: 'var(--black-3)', borderRadius: '4px' }} />
        </div>
      </div>
    </motion.div>

    {/* Floating UI Card 1 */}
    <motion.div
      initial={{ rotateX: 55, rotateZ: -40, z: 0, opacity: 0 }}
      animate={{ z: [0, 40, 40, 0], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', times: [0, 0.2, 0.8, 1] }}
      style={{ position: 'absolute', width: '100px', height: '30px', background: accent, borderRadius: '4px', top: '40px', left: '60px', boxShadow: `0 10px 20px ${accent}40`, display: 'flex', alignItems: 'center', padding: '0 8px', gap: '6px' }}
    >
      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--black-2)' }} />
      <div style={{ width: '40px', height: '4px', background: 'var(--black-2)', borderRadius: '2px' }} />
    </motion.div>

    {/* Floating UI Card 2 */}
    <motion.div
      initial={{ rotateX: 55, rotateZ: -40, z: 0, opacity: 0 }}
      animate={{ z: [0, 60, 60, 0], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 0.3, times: [0, 0.2, 0.8, 1] }}
      style={{ position: 'absolute', width: '80px', height: '20px', background: 'var(--white)', borderRadius: '4px', top: '70px', left: '40px', boxShadow: '0 10px 20px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', padding: '0 8px' }}
    >
      <div style={{ width: '30px', height: '4px', background: 'var(--black)', borderRadius: '2px' }} />
    </motion.div>
  </div>
);

export const LandingPageAnimation = ({ accent }: { accent: string }) => (
  <div style={{ position: 'relative', width: '180px', height: '140px', background: 'var(--black)', borderRadius: '8px', border: '1px solid var(--border)', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', overflow: 'hidden', transform: 'scale(1.4)', transformOrigin: 'center' }}>
    <div style={{ width: '80%', height: '8px', background: 'var(--white-2)', borderRadius: '4px' }} />
    <div style={{ width: '60%', height: '6px', background: 'var(--black-3)', borderRadius: '4px' }} />
    
    <motion.div 
      animate={{ scale: [1, 1, 0.9, 1, 1] }}
      transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.5, 0.6, 1] }}
      style={{ padding: '8px 24px', background: accent, borderRadius: '20px', marginTop: '10px', boxShadow: `0 0 15px ${accent}40` }}
    />

    {/* Cursor */}
    <motion.div
      animate={{ x: [40, 0, 0, 40], y: [40, 0, 0, 40] }}
      transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
      style={{ position: 'absolute', right: '40%', bottom: '20%', zIndex: 10 }}
    >
      <MousePointer2 size={24} fill="var(--white)" color="var(--black)" />
    </motion.div>

    {/* Success Modal */}
    <motion.div
      animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.8, 0.8, 1, 1, 0.8] }}
      transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.6, 0.9, 1] }}
      style={{ position: 'absolute', inset: '10px', background: 'rgba(20,20,20,0.95)', backdropFilter: 'blur(4px)', borderRadius: '8px', border: `1px solid ${accent}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', zIndex: 5 }}
    >
      <CheckCircle size={32} color={accent} />
      <div style={{ width: '60%', height: '4px', background: accent, borderRadius: '2px' }} />
    </motion.div>
  </div>
);

export const EcomAnimation = ({ accent }: { accent: string }) => (
  <div style={{ position: 'relative', width: '200px', height: '140px', background: 'var(--black)', borderRadius: '8px', border: '1px solid var(--border)', padding: '10px', transform: 'scale(1.4)', transformOrigin: 'center' }}>
    {/* Nav / Cart */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '8px', marginBottom: '8px' }}>
      <div style={{ width: '40px', height: '6px', background: 'var(--white)', borderRadius: '4px' }} />
      <div style={{ position: 'relative' }}>
        <ShoppingCart size={16} color="var(--white-2)" />
        <motion.div 
          animate={{ scale: [0, 0, 1.5, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.5, 0.6, 0.9, 1] }}
          style={{ position: 'absolute', top: '-4px', right: '-4px', width: '10px', height: '10px', background: accent, borderRadius: '50%', border: '2px solid var(--black)' }}
        />
      </div>
    </div>

    {/* Product Card */}
    <div style={{ background: 'var(--black-2)', borderRadius: '6px', padding: '10px', display: 'flex', gap: '10px' }}>
      <div style={{ width: '40px', height: '40px', background: 'var(--black-3)', borderRadius: '4px' }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ width: '80%', height: '6px', background: 'var(--white-2)', borderRadius: '4px' }} />
        <div style={{ width: '40%', height: '6px', background: accent, borderRadius: '4px' }} />
        <motion.div 
          animate={{ scale: [1, 1, 0.95, 1, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.25, 0.3, 1] }}
          style={{ width: '100%', height: '16px', background: 'var(--black-3)', borderRadius: '4px', marginTop: '4px' }}
        />
      </div>
    </div>

    {/* Flying Item */}
    <motion.div
      animate={{ 
        x: [0, 0, 80, 80], 
        y: [0, 0, -60, -60],
        scale: [0, 0, 1, 0],
        opacity: [0, 0, 1, 0]
      }}
      transition={{ duration: 4, repeat: Infinity, times: [0, 0.25, 0.4, 1] }}
      style={{ position: 'absolute', bottom: '40px', left: '100px', width: '16px', height: '16px', background: accent, borderRadius: '50%', boxShadow: `0 0 10px ${accent}`, zIndex: 10 }}
    />
  </div>
);

export const SeoAnimation = ({ accent }: { accent: string }) => (
  <div style={{ width: '200px', height: '140px', background: 'var(--black)', borderRadius: '8px', border: '1px solid var(--border)', padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px', transform: 'scale(1.4)', transformOrigin: 'center' }}>
    {/* Search Bar */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--black-2)', padding: '6px 10px', borderRadius: '100px', border: '1px solid var(--border)' }}>
      <Search size={12} color="var(--white-2)" />
      <motion.div 
        animate={{ width: ['0%', '60%', '60%', '0%'] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.9, 1] }}
        style={{ height: '4px', background: 'var(--white)', borderRadius: '2px' }}
      />
    </div>

    {/* Results */}
    <div style={{ position: 'relative', flex: 1 }}>
      <motion.div animate={{ y: [0, 0, 30, 30, 0] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.5, 0.9, 1] }} style={{ position: 'absolute', top: 0, width: '100%', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ width: '40%', height: '6px', background: '#3b82f6', borderRadius: '2px' }} />
        <div style={{ width: '90%', height: '4px', background: 'var(--white-2)', borderRadius: '2px' }} />
        <div style={{ width: '70%', height: '4px', background: 'var(--white-2)', borderRadius: '2px' }} />
      </motion.div>
      
      <motion.div animate={{ y: [0, 0, 30, 30, 0] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.5, 0.9, 1] }} style={{ position: 'absolute', top: '40px', width: '100%', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ width: '50%', height: '6px', background: '#3b82f6', borderRadius: '2px' }} />
        <div style={{ width: '80%', height: '4px', background: 'var(--white-2)', borderRadius: '2px' }} />
      </motion.div>

      {/* Our Result jumps to top */}
      <motion.div 
        animate={{ y: [80, 80, 0, 0, 80], scale: [1, 1, 1.05, 1, 1] }} 
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.5, 0.6, 1] }} 
        style={{ position: 'absolute', width: '100%', display: 'flex', flexDirection: 'column', gap: '4px', background: `${accent}15`, padding: '6px', borderRadius: '6px', border: `1px solid ${accent}40`, zIndex: 2 }}
      >
        <div style={{ width: '60%', height: '6px', background: accent, borderRadius: '2px' }} />
        <div style={{ width: '100%', height: '4px', background: 'var(--white)', borderRadius: '2px' }} />
        <div style={{ width: '80%', height: '4px', background: 'var(--white)', borderRadius: '2px' }} />
      </motion.div>
    </div>
  </div>
);

export const SocialAdsAnimation = ({ accent }: { accent: string }) => (
  <div style={{ position: 'relative', width: '200px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'scale(1.4)', transformOrigin: 'center' }}>
    {/* Target Grid BG */}
    <div style={{ position: 'absolute', inset: '10px', backgroundImage: 'radial-gradient(circle at center, var(--white-2) 1px, transparent 1px)', backgroundSize: '10px 10px', opacity: 0.1 }} />

    {/* Mobile Frame */}
    <motion.div
      animate={{ y: [0, -5, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      style={{ width: '60px', height: '100px', background: 'var(--black-2)', borderRadius: '10px', border: `2px solid ${accent}`, display: 'flex', flexDirection: 'column', overflow: 'hidden', zIndex: 5, boxShadow: `0 0 20px ${accent}40` }}
    >
      <div style={{ width: '100%', height: '40px', background: 'var(--black-3)' }} />
      <div style={{ padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ width: '100%', height: '15px', background: accent, borderRadius: '2px' }} />
        <div style={{ width: '80%', height: '4px', background: 'var(--white-2)', borderRadius: '2px' }} />
      </div>
    </motion.div>

    {/* Bursting Notifications */}
    <motion.div
      animate={{ x: [0, 40], y: [0, -30], opacity: [0, 1, 0], scale: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
      style={{ position: 'absolute', background: 'var(--white)', padding: '4px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
    >
      <Heart size={12} color="#ef4444" fill="#ef4444" />
    </motion.div>

    <motion.div
      animate={{ x: [0, -40], y: [0, -20], opacity: [0, 1, 0], scale: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
      style={{ position: 'absolute', background: 'var(--white)', padding: '4px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
    >
      <MousePointer2 size={12} color="#3b82f6" fill="#3b82f6" />
    </motion.div>

    <motion.div
      animate={{ x: [0, 20], y: [0, 40], opacity: [0, 1, 0], scale: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
      style={{ position: 'absolute', background: 'var(--white)', padding: '4px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
    >
      <Share2 size={12} color="#10b981" />
    </motion.div>
  </div>
);

export const BrandAnimation = ({ accent }: { accent: string }) => (
  <div style={{ width: '180px', height: '140px', background: 'var(--black)', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px', transform: 'scale(1.4)', transformOrigin: 'center' }}>
    
    {/* Color Palette dropping in */}
    <div style={{ display: 'flex', gap: '8px' }}>
      {['#3b82f6', accent, '#fb923c'].map((color, i) => (
        <motion.div 
          key={i}
          animate={{ y: [-20, 0, 0, -20], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.2 + (i*0.1), 0.8, 1] }}
          style={{ width: '20px', height: '20px', borderRadius: '50%', background: color }}
        />
      ))}
    </div>

    {/* Typography changing */}
    <motion.div 
      animate={{ 
        fontFamily: ['serif', 'serif', 'var(--font-display)', 'var(--font-display)', 'serif'],
        fontWeight: [400, 400, 700, 700, 400],
        letterSpacing: ['0px', '0px', '2px', '2px', '0px'],
        color: ['var(--white-2)', 'var(--white-2)', 'var(--white)', 'var(--white)', 'var(--white-2)']
      }}
      transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.5, 0.8, 1] }}
      style={{ fontSize: '14px', textTransform: 'uppercase' }}
    >
      Identity
    </motion.div>

    {/* Logo drawing itself */}
    <motion.svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <motion.path 
        d="M12 2L2 22h20L12 2z" 
        initial={{ pathLength: 0, fill: 'transparent' }}
        animate={{ pathLength: [0, 0, 1, 1, 0], fill: ['transparent', 'transparent', 'transparent', accent, 'transparent'] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.7, 0.8, 1] }}
      />
    </motion.svg>

  </div>
);

export const ContentAnimation = ({ accent }: { accent: string }) => (
  <div style={{ width: '80px', height: '150px', background: 'var(--black)', borderRadius: '12px', border: '2px solid var(--white)', overflow: 'hidden', position: 'relative', transform: 'scale(1.4)', transformOrigin: 'center' }}>
    {/* Video Feed Scrolling */}
    <motion.div 
      animate={{ y: ['0%', '-100%', '-100%', '-200%', '-200%'] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.2, 0.5, 0.7, 1] }}
      style={{ width: '100%', height: '300%', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ width: '100%', height: '33.33%', background: 'var(--black-2)', borderBottom: '1px solid var(--border)' }} />
      <div style={{ width: '100%', height: '33.33%', background: `linear-gradient(to bottom, var(--black-2), ${accent}20)`, position: 'relative' }}>
         <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '40px', height: '4px', background: 'var(--white)', borderRadius: '2px' }} />
         <div style={{ position: 'absolute', bottom: '20px', left: '10px', width: '30px', height: '4px', background: 'var(--white-2)', borderRadius: '2px' }} />
      </div>
      <div style={{ width: '100%', height: '33.33%', background: 'var(--black-2)' }} />
    </motion.div>

    {/* Right Sidebar UI */}
    <div style={{ position: 'absolute', right: '4px', bottom: '10px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
      <motion.div
        animate={{ scale: [1, 1, 1.5, 1, 1], color: ['var(--white-2)', 'var(--white-2)', '#ef4444', '#ef4444', 'var(--white-2)'] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.25, 0.3, 0.5, 1] }}
      >
        <Heart size={14} fill="currentColor" />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1, 1.2, 1, 1], color: ['var(--white-2)', 'var(--white-2)', 'var(--white)', 'var(--white)', 'var(--white-2)'] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.35, 0.4, 0.5, 1] }}
      >
        <Share2 size={14} color="currentColor" />
      </motion.div>
    </div>
  </div>
);
