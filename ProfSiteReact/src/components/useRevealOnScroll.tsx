import { useEffect, useRef } from 'react';

export function useRevealOnScroll(
  threshold = 0.15,
  // rootMargin: string = '100px 0px 0px 0px'
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('reveal');
        } else {
          node.classList.remove('reveal');
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
} 