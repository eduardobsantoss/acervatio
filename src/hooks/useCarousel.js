import { useCallback, useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../utils/motion';

// Scroll-snap track: the active slide is whichever child sits closest to the
// track's left edge, so native swipes and the arrow buttons stay in sync.
export default function useCarousel() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const closestIndex = useCallback(() => {
    const track = trackRef.current;
    // The last slide can never reach the left edge, so the scroll end means "last".
    if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 2) return track.children.length - 1;
    let best = 0;
    let bestDistance = Infinity;
    [...track.children].forEach((child, i) => {
      const distance = Math.abs(child.offsetLeft - track.scrollLeft);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = i;
      }
    });
    return best;
  }, []);

  const goTo = useCallback((i) => {
    const track = trackRef.current;
    const target = track.children[Math.max(0, Math.min(track.children.length - 1, i))];
    track.scrollTo({ left: target.offsetLeft, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const sync = () => setIndex(closestIndex());
    track.addEventListener('scroll', sync, { passive: true });
    sync();
    return () => track.removeEventListener('scroll', sync);
  }, [closestIndex]);

  return {
    trackRef,
    index,
    goTo,
    prev: () => goTo(closestIndex() - 1),
    next: () => goTo(closestIndex() + 1),
  };
}
