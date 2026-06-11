import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollFeather3D() {
  // Track the vertical scroll progress of the entire page (0 to 1)
  const { scrollYProgress } = useScroll();
  
  // Map the scroll progress to a rotation value (e.g., 2 full rotations)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem', // Attached to right bottom
        zIndex: 50,
        pointerEvents: 'none',
        width: '50px', // Smaller design
        height: '50px',
        rotate, // Rotates on its axis as the user scrolls
        filter: 'drop-shadow(0 0 10px rgba(56,189,248,0.5))',
      }}
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="url(#featherGradient)" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient id="featherGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="var(--lime)" />
          </linearGradient>
        </defs>
        {/* Unambiguous, elegant feather shape */}
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <path d="M17.5 15H9" />
      </svg>
    </motion.div>
  );
}
