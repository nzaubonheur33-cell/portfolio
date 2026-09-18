import { useEffect, useRef, useState } from 'react';

/**
 * Hook pour déclencher une animation quand l'élément entre dans le viewport.
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Ne se déclenche qu'une fois
        }
      },
      { threshold: options.threshold || 0.15, ...options }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return [ref, isVisible];
}
