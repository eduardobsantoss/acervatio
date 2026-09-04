import { useEffect, useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';
import symbolBege from '../assets/brand/symbol-bege.svg';
import { PILARES } from '../data/content';

export default function Pilares() {
  const headingRef = useReveal();
  const visualRef = useReveal();
  const [active, setActive] = useState(0);
  const itemRefs = useRef([]);

  // Scroll (not click) drives which pillar is active, mirroring the Ceres
  // Wealth sticky-column reference: text blocks scroll past a pinned visual.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = itemRefs.current.indexOf(entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activePilar = PILARES[active];

  return (
    <section id="pilares" className="acv-pilares">
      <div className="acv-section-inner acv-pilares-grid">
        <div className="acv-pilares-list">
          <div className="acv-pilares-heading rv" ref={headingRef}>
            <div className="acv-eyebrow">PILARES</div>
            <div className="acv-h2">O que sustenta a relação.</div>
          </div>
          <div>
            {PILARES.map((p, i) => (
              <div
                key={p.title}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className={`acv-pilar-item${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                {/* No .rv fade-in here: acv-pilar-item already owns its own opacity
                    (active/inactive dimming) and the reveal system's opacity:0→1
                    would fight that via specificity. */}
                <div className="acv-pilar-title">{p.title}</div>
                <div className="acv-pilar-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="acv-pilares-visual rv" ref={visualRef}>
          <div className="acv-pilares-visual-bg"></div>
          <div className="acv-pilares-visual-gradient"></div>
          <img src={symbolBege} className="acv-pilares-symbol" alt="" />
          <div className="acv-pilares-pills">
            {PILARES.map((p, i) => (
              <div
                key={p.title}
                className={`acv-pill${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                {String(i + 1).padStart(2, '0')} {p.title}
              </div>
            ))}
          </div>
          <div className="acv-pilares-stage">
            <div className="acv-pilares-stage-num">{String(active + 1).padStart(2, '0')}</div>
            <div className="acv-pilares-stage-title">{activePilar.title}</div>
          </div>
          <div className="acv-pilares-panel">
            <div className="acv-pilares-panel-inner">
              <div className="acv-pilares-panel-col acv-pilares-panel-col-border">
                <div className="acv-panel-label">POR CONTA PRÓPRIA</div>
                <div className="acv-panel-value acv-panel-value-dim">{activePilar.solo}</div>
              </div>
              <div className="acv-pilares-panel-col">
                <div className="acv-panel-label acv-panel-label-gold">COM ACERVATIO</div>
                <div className="acv-panel-value">{activePilar.gerido}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
