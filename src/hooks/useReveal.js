import { useEffect, useRef } from 'react';

// A single shared IntersectionObserver (ported from the Ceres Wealth reference:
// .rv fades/slides in once, staggered by the --i custom property) instead of
// one instance per revealed element.
let sharedObserver;
function getObserver() {
  if (sharedObserver || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return sharedObserver;
  }
  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          sharedObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );
  return sharedObserver;
}

export default function useReveal(index) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (typeof index === 'number') el.style.setProperty('--i', index);

    const observer = getObserver();
    if (observer) {
      observer.observe(el);
      return () => observer.unobserve(el);
    }
    el.classList.add('in');
    return undefined;
  }, [index]);

  return ref;
}
