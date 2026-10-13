import { useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal';
import useCarousel from '../hooks/useCarousel';
import { SERVICOS } from '../data/content';

export default function Servicos() {
  const headRef = useReveal();
  const tabsRef = useRef(null);
  const { trackRef, index, goTo, prev, next } = useCarousel();

  useEffect(() => {
    const tabs = tabsRef.current;
    const tab = tabs.children[index];
    tabs.scrollTo({ left: tab.offsetLeft - tabs.clientWidth / 2 + tab.offsetWidth / 2, behavior: 'smooth' });
  }, [index]);

  return (
    <section id="servicos" className="acv-servicos">
      <div className="acv-servicos-inner">
        <div className="acv-servicos-head rv" ref={headRef}>
          <div className="acv-eyebrow acv-eyebrow-gold">SERVIÇOS</div>
          <div className="acv-h2 acv-h2-light">
            Gestão de ponta a ponta.<span className="pj-sub2">Do patrimônio acumulado à execução da viagem.</span>
          </div>
        </div>
        <div className="pj-tabs" role="tablist" ref={tabsRef}>
          {SERVICOS.map((s, i) => (
            <button
              key={s.title}
              className={`pj-tab${i === index ? ' is-active' : ''}`}
              role="tab"
              aria-selected={i === index}
              onClick={() => goTo(i)}
            >
              {s.tab}
            </button>
          ))}
        </div>
        <div className="pj-car">
          <div className="pj-track" ref={trackRef}>
            {SERVICOS.map((s, i) => (
              <div key={s.title} className={`pj-slide${i === index ? ' is-active' : ''}`}>
                <div className="pj-slide-title">{s.title}</div>
                <div className="pj-slide-desc">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="pj-arrows">
            <button className="pj-arrow pj-arrow-gold" aria-label="Serviço anterior" onClick={prev}>
              ‹
            </button>
            <button className="pj-arrow pj-arrow-gold" aria-label="Próximo serviço" onClick={next}>
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
