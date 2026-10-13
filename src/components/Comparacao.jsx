import { useCallback, useEffect, useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';
import { CMP } from '../data/content';
import { prefersReducedMotion } from '../utils/motion';

const AUTO_MS = 6500;
const SWAP_MS = 260;

// One topic at a time: auto-advances while the block is on screen, until the
// visitor picks a topic, which hands control over for good.
export default function Comparacao() {
  const headRef = useReveal();
  const cpRef = useRef(null);
  const topicsRef = useRef(null);
  const activeRef = useRef(0);
  const manualRef = useRef(false);
  const autoTimer = useRef(null);
  const swapTimer = useRef(null);
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(0);
  const [swapping, setSwapping] = useState(false);
  const [manual, setManual] = useState(false);

  const show = useCallback((i, byUser) => {
    if (byUser) {
      manualRef.current = true;
      setManual(true);
      clearInterval(autoTimer.current);
      autoTimer.current = null;
    }
    if (i === activeRef.current) return;
    activeRef.current = i;
    setActive(i);
    if (prefersReducedMotion()) {
      setShown(i);
      return;
    }
    setSwapping(true);
    clearTimeout(swapTimer.current);
    swapTimer.current = setTimeout(() => {
      setShown(i);
      setSwapping(false);
    }, SWAP_MS);
  }, []);

  useEffect(() => {
    const topics = topicsRef.current;
    if (topics.scrollWidth > topics.clientWidth) {
      const btn = topics.children[active];
      topics.scrollTo({ left: btn.offsetLeft - topics.offsetLeft - 16, behavior: 'smooth' });
    }
  }, [active]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!autoTimer.current && !prefersReducedMotion() && !manualRef.current) {
            autoTimer.current = setInterval(() => show((activeRef.current + 1) % CMP.length), AUTO_MS);
          }
        } else {
          clearInterval(autoTimer.current);
          autoTimer.current = null;
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(cpRef.current);
    return () => {
      observer.disconnect();
      clearInterval(autoTimer.current);
      autoTimer.current = null;
      clearTimeout(swapTimer.current);
    };
  }, [show]);

  return (
    <section id="diferenca" className="acv-comparacao">
      <div className="acv-section-inner">
        <div className="acv-comparacao-head rv" ref={headRef}>
          <div className="acv-eyebrow">A DIFERENÇA</div>
          <div className="acv-h2">
            Por conta própria <span className="acv-thin">vs.</span> com a gestão da ACERVATIO
          </div>
        </div>
        <div className={`cp${manual ? ' is-manual' : ''}${swapping ? ' is-swap' : ''}`} ref={cpRef}>
          <div className="cp-topics" role="tablist" aria-label="Temas da comparação" ref={topicsRef}>
            {CMP.map((row, i) => (
              <button
                key={row.topic}
                className={`cp-topic${i === active ? ' is-active' : ''}`}
                role="tab"
                aria-selected={i === active}
                onClick={() => show(i, true)}
              >
                {row.topic}
                <i></i>
              </button>
            ))}
          </div>
          <div className="cp-panels" aria-live="polite">
            <div className="cp-panel cp-solo">
              <div className="cp-label">Por conta própria</div>
              <p>{CMP[shown].solo}</p>
            </div>
            <div className="cp-panel cp-ger">
              <div className="cp-label">Com a gestão da ACERVATIO</div>
              <p>{CMP[shown].gerido}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
