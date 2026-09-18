import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CustomCursor — Curseur personnalisé premium
 * - Automatiquement désactivé sur mobile/tablette (touch devices)
 * - Curseur anneau suiveur avec délai fluide
 * - Point central synchronisé
 * - Effet "hover" agrandit le curseur sur éléments interactifs
 * - Effet "View" sur les cartes de projets
 */
function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'hover' | 'project' | 'text'
  const [projectLabel, setProjectLabel] = useState('');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Anneau : suit avec un léger délai (effet trainée)
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  // Taille de l'anneau selon l'état
  const ringSize = {
    default: 36,
    hover: 56,
    project: 96,
    text: 24,
  };

  useEffect(() => {
    // Ne pas activer sur les touch devices
    const isTouchDevice = () => window.matchMedia('(hover: none)').matches;
    if (isTouchDevice()) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const cursorType = target.getAttribute('data-cursor');
        const label = target.getAttribute('data-cursor-label') || '';
        setCursorState(cursorType);
        setProjectLabel(label);
      } else {
        // Detect interactive elements automatically
        const interactive = e.target.closest('a, button, [role="button"], input, textarea, select, label');
        if (interactive) {
          setCursorState('hover');
          setProjectLabel('');
        } else {
          setCursorState('default');
          setProjectLabel('');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  // Ne rien rendre sur mobile
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  const currentSize = ringSize[cursorState] ?? 36;

  return (
    <>
      {/* Anneau suiveur (avec délai) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: currentSize,
          height: currentSize,
          opacity: isVisible ? 1 : 0,
          backgroundColor:
            cursorState === 'project'
              ? 'rgba(157, 67, 0, 0.9)'
              : 'transparent',
          borderColor:
            cursorState === 'hover'
              ? 'rgba(157, 67, 0, 0.8)'
              : cursorState === 'project'
              ? 'transparent'
              : 'rgba(157, 67, 0, 0.5)',
          borderWidth: cursorState === 'project' ? 0 : 2,
        }}
        transition={{ duration: 0.2 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          borderStyle: 'solid',
        }}
      >
        {/* Label "View Project" sur les cartes */}
        {cursorState === 'project' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-white text-[10px] font-bold text-center leading-tight uppercase tracking-wide"
          >
            {projectLabel || 'View'}
          </motion.span>
        )}
      </motion.div>

      {/* Point central (suit exactement le curseur, sans délai) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorState === 'project' ? 0 : cursorState === 'hover' ? 6 : 5,
          height: cursorState === 'project' ? 0 : cursorState === 'hover' ? 6 : 5,
          opacity: isVisible ? 1 : 0,
          backgroundColor: 'rgb(157, 67, 0)',
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}

export default CustomCursor;
