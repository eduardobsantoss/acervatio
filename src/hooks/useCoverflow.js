import { useCallback, useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../utils/motion';

const SWIPE_PX = 40;

// Circular selector: one item in the centre, the rest fanned out by their
// signed distance from it. Auto-advances while on screen, pauses on hover,
// keyboard focus (or when `paused`), and any manual move restarts the timer.
export default function useCoverflow(count, { paused = false, interval = 4500 } = {}) {
  const stageRef = useRef(null);
  const pointerX = useRef(null);
  const dragged = useRef(false);
  const [index, setIndex] = useState(0);
  const [narrow, setNarrow] = useState(false);
  const [inView, setInView] = useState(false);
  const [hover, setHover] = useState(false);
  const [focused, setFocused] = useState(false);
  const [manualMoves, setManualMoves] = useState(0);

  const wrap = useCallback((i) => ((i % count) + count) % count, [count]);

  const select = useCallback(
    (i) => {
      setIndex(wrap(i));
      setManualMoves((m) => m + 1);
    },
    [wrap]
  );

  const step = useCallback(
    (delta) => {
      setIndex((i) => wrap(i + delta));
      setManualMoves((m) => m + 1);
    },
    [wrap]
  );

  useEffect(() => {
    const stage = stageRef.current;
    const measure = () => setNarrow(stage.clientWidth < 700);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 });
    observer.observe(stageRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || hover || focused || paused || prefersReducedMotion()) return undefined;
    const timer = setInterval(() => setIndex((i) => wrap(i + 1)), interval);
    return () => clearInterval(timer);
  }, [inView, hover, focused, paused, interval, wrap, manualMoves]);

  const offset = (n) => {
    let d = wrap(n - index);
    if (d > count / 2) d -= count;
    return d;
  };

  return {
    stageRef,
    index,
    narrow,
    offset,
    select,
    prev: () => step(-1),
    next: () => step(1),
    // A swipe ends in a click on whatever card is under the pointer; ignore it.
    wasDragged: () => dragged.current,
    stageHandlers: {
      onPointerDown: (e) => {
        pointerX.current = e.clientX;
        dragged.current = false;
      },
      onPointerUp: (e) => {
        if (pointerX.current === null) return;
        const dx = e.clientX - pointerX.current;
        pointerX.current = null;
        if (Math.abs(dx) > SWIPE_PX) {
          dragged.current = true;
          step(dx < 0 ? 1 : -1);
          setTimeout(() => {
            dragged.current = false;
          }, 50);
        }
      },
    },
    hoverHandlers: {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      onFocus: () => setFocused(true),
      onBlur: (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
      },
    },
  };
}
