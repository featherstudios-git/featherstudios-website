import { motion } from 'framer-motion';
import { Heart, Share2, CheckCircle, Search, MousePointer2, ShoppingCart } from 'lucide-react';

export const WebDevAnimation = ({ accent }: { accent: string }) => (
  <div style={{ width: '220px', height: '140px', background: 'var(--black)', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
    {/* Mac Window Header */}
    <div style={{ height: '20px', background: 'var(--black-2)', display: 'flex', alignItems: 'center', padding: '0 8px', gap: '4px', borderBottom: '1px solid var(--border)' }}>
      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff5f56' }} />
      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffbd2e' }} />
      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27c93f' }} />
    </div>
    
    <div style={{ display: 'flex', flex: 1 }}>
      {/* Left: Code Editor */}
      <div style={{ flex: 1, padding: '10px', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {[40, 80, 60, 90, 50, 70].map((w, i) => (
          <motion.div 
            key={i}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: `${w}%`, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 2 }}
            style={{ height: '4px', background: i % 2 === 0 ? accent : 'var(--white-2)', borderRadius: '2px' }}
          />
        ))}
      </div>
      
      {/* Right: Live Website Output */}
      <div style={{ flex: 1, background: 'var(--black-2)', padding: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <motion.div 
          animate={{ opacity: [0, 1], y: [10, 0] }} transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 2 }}
          style={{ height: '6px', width: '100%', background: 'var(--white-2)', borderRadius: '2px' }} 
        />
        <motion.div 
          animate={{ opacity: [0, 1], scale: [0.9, 1] }} transition={{ duration: 0.5, delay: 1.4, repeat: Infinity, repeatType: 'reverse', repeatDelay: 2 }}
          style={{ height: '30px', width: '100%', background: accent, borderRadius: '4px', opacity: 0.8 }} 
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
          <motion.div animate={{ opacity: [0, 1], y: [10, 0] }} transition={{ duration: 0.5, delay: 1.6, repeat: Infinity, repeatType: 'reverse', repeatDelay: 2 }} style={{ height: '20px', background: 'var(--black-3)', borderRadius: '4px' }} />
          <motion.div animate={{ opacity: [0, 1], y: [10, 0] }} transition={{ duration: 0.5, delay: 1.8, repeat: Infinity, repeatType: 'reverse', repeatDelay: 2 }} style={{ height: '20px', background: 'var(--black-3)', borderRadius: '4px' }} />
        </div>
      </div>
    </div>
  </div>
);

export const LandingPageAnimation = ({ accent }: { accent: string }) => (
  <div style={{ position: 'relative', width: '180px', height: '140px', background: 'var(--black)', borderRadius: '8px', border: '1px solid var(--border)', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', overflow: 'hidden' }}>
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
  <div style={{ position: 'relative', width: '200px', height: '140px', background: 'var(--black)', borderRadius: '8px', border: '1px solid var(--border)', padding: '10px' }}>
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
  <div style={{ width: '200px', height: '140px', background: 'var(--black)', borderRadius: '8px', border: '1px solid var(--border)', padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
  <div style={{ width: '200px', height: '140px', background: 'var(--black)', borderRadius: '8px', border: '1px solid var(--border)', padding: '10px', display: 'flex', flexDirection: 'column' }}>
    {/* Dashboard Header */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
      <div style={{ width: '40px', height: '6px', background: 'var(--white)', borderRadius: '4px' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--black-2)', padding: '2px 6px', borderRadius: '100px' }}>
        <div style={{ fontSize: '8px', color: 'var(--white)' }}>Ads</div>
        <motion.div 
          animate={{ backgroundColor: ['var(--black-3)', accent, accent, 'var(--black-3)'] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
          style={{ width: '20px', height: '10px', borderRadius: '10px', position: 'relative' }}
        >
          <motion.div 
            animate={{ x: [2, 10, 10, 2] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
            style={{ width: '6px', height: '6px', background: 'var(--white)', borderRadius: '50%', position: 'absolute', top: '2px' }}
          />
        </motion.div>
      </div>
    </div>

    {/* Graph */}
    <div style={{ flex: 1, position: 'relative', borderBottom: '1px solid var(--border)', borderLeft: '1px solid var(--border)' }}>
      <motion.svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, overflow: 'visible' }}>
        {/* Flat line initially, then skyrockets */}
        <motion.path 
          d="M 0 45 L 30 45 L 50 35 L 70 10 L 100 0" 
          fill="none" 
          stroke={accent} 
          strokeWidth="3" 
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0.3, 0.3, 1, 1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.5, 0.9, 1] }}
        />
        <motion.path 
          d="M 0 45 L 30 45 L 50 35 L 70 10 L 100 0 L 100 50 L 0 50 Z" 
          fill={`url(#gradient-${accent})`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0.5, 0.5, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.5, 0.9, 1] }}
        />
        <defs>
          <linearGradient id={`gradient-${accent}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </motion.svg>
      
      {/* Metrics pop up */}
      <motion.div 
        animate={{ opacity: [0, 0, 1, 1, 0], y: [10, 0, 0, 0, 10] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.6, 0.7, 0.9, 1] }}
        style={{ position: 'absolute', top: '-10px', right: '-10px', background: 'var(--white)', color: 'var(--black)', fontSize: '10px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '10px', boxShadow: `0 0 10px ${accent}80` }}
      >
        +340%
      </motion.div>
    </div>
  </div>
);

export const BrandAnimation = ({ accent }: { accent: string }) => (
  <div style={{ width: '180px', height: '140px', background: 'var(--black)', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
    
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
  <div style={{ width: '80px', height: '150px', background: 'var(--black)', borderRadius: '12px', border: '2px solid var(--white)', overflow: 'hidden', position: 'relative' }}>
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
