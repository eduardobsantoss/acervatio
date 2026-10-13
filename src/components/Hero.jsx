import { useEffect, useRef } from 'react';
import { WA_URL } from '../data/content';
import { PLANE_PATH, clamp01 } from '../utils/motion';

const CURVE = 'M0,286 C240,278 380,254 560,214 S900,120 1120,66 S1330,26 1440,14';

export default function Hero({ onOpenForm }) {
  const heroRef = useRef(null);
  const pathRef = useRef(null);
  const layerRef = useRef(null);
  const planeRef = useRef(null);

  // The plane rides the curve (drawn in a 1440x320 viewBox stretched to the
  // layer) and grows as the hero scrolls away.
  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    function update() {
      const layer = layerRef.current;
      const plane = planeRef.current;
      const p = clamp01(window.scrollY / (heroRef.current.offsetHeight * 0.7));
      const t = (0.14 + p * 0.86) * length;
      const a = path.getPointAtLength(t);
      const ahead = path.getPointAtLength(Math.min(length, t + 2));
      const behind = path.getPointAtLength(Math.max(0, t - 2));
      const sx = layer.clientWidth / 1440;
      const sy = layer.clientHeight / 320;
      const angle = (Math.atan2((ahead.y - behind.y) * sy, (ahead.x - behind.x) * sx) * 180) / Math.PI;
      const scale = 1 + p * (window.innerWidth < 700 ? 1.1 : 2.1);
      plane.style.transform = `translate(${a.x * sx - 17}px,${a.y * sy - 17}px) rotate(${angle + 90}deg) scale(${scale})`;
      plane.style.opacity = p > 0.9 ? String((1 - p) * 10) : '';
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section className="acv-hero" ref={heroRef}>
      <div className="acv-hero-bg-pattern"></div>
      <div className="acv-hero-bg-gradient"></div>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="acv-hero-curve">
        <defs>
          <linearGradient id="acvA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#A69984" stopOpacity=".22"></stop>
            <stop offset="1" stopColor="#A69984" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
        <g className="acv-areawipe">
          <path d={`${CURVE} L1440,320 L0,320 Z`} fill="url(#acvA)"></path>
        </g>
        <path
          ref={pathRef}
          className="acv-drawline"
          d={CURVE}
          fill="none"
          stroke="#A69984"
          strokeWidth="2.25"
          strokeLinecap="round"
        ></path>
      </svg>
      <div className="pj-plane-layer" ref={layerRef}>
        <div className="pj-plane" ref={planeRef}>
          <svg viewBox="0 0 24 24">
            <path d={PLANE_PATH} />
          </svg>
        </div>
      </div>
      <div className="acv-hero-content">
        <div className="acv-overflow">
          <div className="acv-h1 acv-h1-dark acv-lineup acv-delay-1">Milhas não são</div>
        </div>
        <div className="acv-overflow">
          <div className="acv-h1 acv-h1-dark acv-lineup acv-delay-2">
            benefício. São <span className="acv-italic-gold-light">patrimônio</span>.
          </div>
        </div>
        <div className="acv-hero-sub acv-hero-sub-dark acv-fadeup acv-delay-3">
          E patrimônio se administra. Cuidamos da estrutura de cartões, das janelas de bônus e da emissão. Você
          recebe o relatório e embarca.
        </div>
        <div className="acv-hero-ctas acv-fadeup acv-delay-4">
          <a href={WA_URL} target="_blank" rel="noopener" className="acv-btn-gold acv-btn-lg" style={{ marginTop: 0 }}>
            Falar no WhatsApp <span className="acv-arrow">→</span>
          </a>
          <button className="acv-btn-outline acv-btn-outline-dark" onClick={onOpenForm}>
            Quero minha análise
          </button>
        </div>
      </div>
      <div className="acv-scroll-hint">
        <div className="pj-hint-plane">
          <svg viewBox="0 0 24 24">
            <path d={PLANE_PATH} />
          </svg>
        </div>
      </div>
    </section>
  );
}
