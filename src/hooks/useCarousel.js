import { useRef } from 'react';
import { prefersReducedMotion } from '../utils/motion';

// Scroll-snap track. Arrows step from the current scroll position rather than
// a slide index: near the end several slides are visible at once, so "the
// previous slide" may already be on screen and scrolling to it would not move.
export default function useCarousel() {
  const trackRef = useRef(null);

  const scrollToLeft = (left) => {
    trackRef.current.scrollTo({ left, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  const starts = () => [...trackRef.current.children].map((c) => c.offsetLeft);

  return {
    trackRef,
    prev: () => {
      const x = trackRef.current.scrollLeft;
      const before = starts().filter((left) => left < x - 4);
      scrollToLeft(before.length ? before[before.length - 1] : 0);
    },
    next: () => {
      const track = trackRef.current;
      const after = starts().find((left) => left > track.scrollLeft + 4);
      scrollToLeft(after ?? track.scrollWidth);
    },
  };
}
