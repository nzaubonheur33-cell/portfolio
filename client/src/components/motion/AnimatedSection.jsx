import React from 'react';
import { motion } from 'framer-motion';

/**
 * Wrapper Framer Motion pour animer une section au scroll.
 * Usage: <AnimatedSection delay={0.2}> ... </AnimatedSection>
 */
export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  duration = 0.6,
  once = true,
  id = undefined,
}) {
  const directions = {
    up:    { y: 40,  x: 0   },
    down:  { y: -40, x: 0   },
    left:  { y: 0,   x: 40  },
    right: { y: 0,   x: -40 },
    none:  { y: 0,   x: 0   },
  };

  const initial = { opacity: 0, ...directions[direction] };
  const animate = { opacity: 1, y: 0, x: 0 };

  return (
    <motion.section
      id={id}
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.section>
  );
}

/**
 * Stagger container — anime les enfants avec un délai croissant.
 */
export function StaggerContainer({ children, className = '', stagger = 0.1, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Item de stagger — à utiliser à l'intérieur de StaggerContainer.
 */
export function StaggerItem({ children, className = '', direction = 'up' }) {
  const directions = {
    up:    { y: 30,  x: 0   },
    left:  { y: 0,   x: 30  },
    right: { y: 0,   x: -30 },
  };

  return (
    <motion.div
      className={className}
      variants={{
        hidden:  { opacity: 0, ...directions[direction] },
        visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Texte animé caractère par caractère (effet typewriter élégant).
 */
export function AnimatedText({ text, className = '', delay = 0 }) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {text}
    </motion.span>
  );
}
