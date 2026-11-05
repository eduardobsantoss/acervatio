import { useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal';
import useCoverflow from '../hooks/useCoverflow';
import PlaneArrow from './PlaneArrow';
import { SERVICOS } from '../data/content';

function itemStyle(d, narrow) {
  const a = Math.abs(d);
  const gap = narrow ? 190 : 440;
  const scale = a === 0 ? 1 : Math.max(0.5, 0.78 - (a - 1) * 0.12);
  const x = d * gap - (d ? Math.sign(d) * (a - 1) * gap * 0.3 : 0);
  return {
    transform: `translate(${x}px,-50%) scale(${scale})`,
    opacity: a > 2 ? 0 : a === 0 ? 1 : a === 1 ? 0.55 : 0.25,
    filter: `blur(${a * 1.5}px)`,
    zIndex: 20 - a,
    pointerEvents: a > 2 ? 'none' : undefined,
  };
}

export default function Servicos() {
  const headRef = useReveal();
  const rowRef = useRef(null);
  const { stageRef, index, narrow, offset, select, prev, next, wasDragged, stageHandlers, hoverHandlers } =
    useCoverflow(SERVICOS.length);

  // Slide the tab row so the active tab sits in the middle of its box.
  useEffect(() => {
    const row = rowRef.current;
    const center = () => {
      const tab = row.children[index];
      row.style.transform = `translateX(${row.parentNode.clientWidth / 2 - (tab.offsetLeft + tab.offsetWidth / 2)}px)`;
    };
    center();
    window.addEventListener('resize', center);
    document.fonts?.ready.then(center);
    return () => window.removeEventListener('resize', center);
  }, [index]);

  return (
    <section id="servicos" className="acv-servicos">
      <div className="acv-servicos-inner">
        <div className="acv-servicos-head rv" ref={headRef}>
          <div className="acv-eyebrow acv-eyebrow-gold">O QUE FAZEMOS</div>
          <div className="acv-h2 acv-h2-light">
            Gestão de ponta a ponta.<span className="pj-sub2">Do patrimônio acumulado à execução da viagem.</span>
          </div>
        </div>
        <div className="pj-tabs">
          <div className="sv-row" role="tablist" ref={rowRef}>
            {SERVICOS.map((s, i) => (
              <button
                key={s.title}
                className={`pj-tab${i === index ? ' is-active' : ''}`}
                role="tab"
                aria-selected={i === index}
                onClick={() => select(i)}
              >
                {s.tab}
              </button>
            ))}
          </div>
        </div>
        <div className="pj-car" {...hoverHandlers}>
          <div className="sv-stage" ref={stageRef} {...stageHandlers}>
            {SERVICOS.map((s, n) => {
              const d = offset(n);
              const on = d === 0;
              return (
                <div
                  key={s.title}
                  className={`sv-item${on ? ' is-on' : ''}`}
                  style={itemStyle(d, narrow)}
                  aria-hidden={!on}
                  onClick={() => {
                    if (!wasDragged() && !on) select(n);
                  }}
                >
                  <div className={`pj-slide${on ? ' is-active' : ''}`}>
                    <div className="pj-slide-title">{s.title}</div>
                    <div className="pj-slide-desc">{s.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pj-arrows cf-nav sv-nav">
            <button className="pj-arrow" aria-label="Serviço anterior" onClick={prev}>
              <PlaneArrow dir="left" />
            </button>
            <span className="cf-count">
              {index + 1} / {SERVICOS.length}
            </span>
            <button className="pj-arrow" aria-label="Próximo serviço" onClick={next}>
              <PlaneArrow dir="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
