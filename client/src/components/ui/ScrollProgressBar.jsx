import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgressBar — Barre de progression de défilement
 * Une fine barre colorée en haut de la page qui se remplit au scroll
 */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9998] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, var(--primary) 0%, var(--primary-container) 100%)',
      }}
    />
  );
}

export default ScrollProgressBar;
