import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const isHovering = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const enterLink = () => { isHovering.current = true; };
    const leaveLink = () => { isHovering.current = false; };

    window.addEventListener('mousemove', move);

    const addListeners = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', enterLink);
        el.addEventListener('mouseleave', leaveLink);
      });
    };

    addListeners();
    const interval = setInterval(addListeners, 2000);

    return () => {
      window.removeEventListener('mousemove', move);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Ring — follows with spring lag */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(0,71,171,0.6)',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          x: cursorXSpring,
          y: cursorYSpring,
          mixBlendMode: 'difference',
        }}
      />
      {/* Dot — follows instantly */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#0047AB',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          x: dotX,
          y: dotY,
        }}
      />
    </>
  );
}
