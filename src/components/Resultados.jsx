import { useCallback, useEffect, useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';
import useCoverflow from '../hooks/useCoverflow';
import PlaneArrow from './PlaneArrow';
import { CASES } from '../data/content';

// case-01.webp … case-19.webp, in the same order as CASES.
const PRINTS = Object.entries(import.meta.glob('../assets/cases/*.webp', { eager: true, import: 'default' }))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

function cardStyle(d, narrow) {
  const a = Math.abs(d);
  const gap = narrow ? 150 : 250;
  const scale = a === 0 ? 1 : Math.max(0.42, 0.62 - (a - 1) * 0.1);
  const x = d * gap - (d ? Math.sign(d) * (a - 1) * gap * 0.28 : 0);
  return {
    transform: `translateX(${x}px) scale(${scale})`,
    opacity: a > 3 ? 0 : a === 0 ? 1 : Math.max(0.12, 0.42 - (a - 1) * 0.15),
    filter: a ? `blur(${2 + a * 2}px) saturate(.55) brightness(.75)` : 'blur(0px) saturate(1) brightness(1)',
    zIndex: 20 - a,
    pointerEvents: a > 3 ? 'none' : undefined,
  };
}

function Lightbox({ n, onClose }) {
  const closeRef = useRef(null);
  const item = CASES[n];

  useEffect(() => {
    closeRef.current.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="lb"
      role="dialog"
      aria-modal="true"
      aria-label="Print do case"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button className="lb-x" aria-label="Fechar" ref={closeRef} onClick={onClose}>
        ×
      </button>
      <img src={PRINTS[n]} alt={`Print da conversa: ${item.context}`} />
      <div className="lb-cap">
        <strong>{item.value}</strong>
        <span>
          {item.label} · {item.context}
        </span>
      </div>
    </div>
  );
}

export default function Resultados() {
  const headRef = useReveal();
  const [zoomed, setZoomed] = useState(null);
  const closeZoom = useCallback(() => setZoomed(null), []);
  const { stageRef, index, narrow, offset, select, prev, next, wasDragged, stageHandlers, hoverHandlers } =
    useCoverflow(CASES.length, { paused: zoomed !== null, interval: 10000 });

  return (
    <section id="resultados" className="acv-resultados">
      <div className="acv-resultados-inner">
        <div className="acv-resultados-head rv" ref={headRef}>
          <div className="acv-eyebrow acv-eyebrow-gold">RESULTADOS</div>
          <div className="acv-h2 acv-h2-light">O que a gestão preserva.</div>
        </div>
      </div>
      <div className="acv-section-inner">
        <div
          className="cf"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Cases de resultados"
          {...hoverHandlers}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
          }}
        >
          <div className="cf-stage" ref={stageRef} {...stageHandlers}>
            {CASES.map((item, n) => {
              const d = offset(n);
              const on = d === 0;
              return (
                <button
                  key={n}
                  className={`cf-card${on ? ' is-on' : ''}`}
                  style={cardStyle(d, narrow)}
                  tabIndex={on ? 0 : -1}
                  aria-hidden={!on}
                  aria-label={on ? `Ampliar print: ${item.label} ${item.value}` : undefined}
                  onClick={() => {
                    if (wasDragged()) return;
                    if (on) setZoomed(n);
                    else select(n);
                  }}
                >
                  <div className="cf-print">
                    <div className="cf-glass">
                      <img
                        src={PRINTS[n]}
                        alt={`Print da conversa: ${item.context}`}
                        decoding="async"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  </div>
                  <div className="cf-info">
                    <span>{item.label}</span>
                    <strong className={item.value.length > 18 ? 'is-long' : undefined}>{item.value}</strong>
                    <em>{item.context}</em>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="cf-nav">
            <button className="pj-arrow" aria-label="Case anterior" onClick={prev}>
              <PlaneArrow dir="left" />
            </button>
            <span className="cf-count">
              {index + 1} / {CASES.length}
            </span>
            <button className="pj-arrow" aria-label="Próximo case" onClick={next}>
              <PlaneArrow dir="right" />
            </button>
          </div>
        </div>
      </div>
      {zoomed !== null && <Lightbox n={zoomed} onClose={closeZoom} />}
    </section>
  );
}
