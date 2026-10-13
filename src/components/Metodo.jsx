import { useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal';
import { LEME } from '../data/content';
import { PLANE_PATH, clamp01, prefersReducedMotion } from '../utils/motion';

// The trail is a bezier chain through each letter node, measured from the live
// layout; scroll progress draws it and moves the plane, lighting each step.
export default function Metodo() {
  const headRef = useReveal();
  const trailRef = useRef(null);
  const basePathRef = useRef(null);
  const drawPathRef = useRef(null);
  const planeRef = useRef(null);

  useEffect(() => {
    const trail = trailRef.current;
    const basePath = basePathRef.current;
    const drawPath = drawPathRef.current;
    const plane = planeRef.current;
    const rows = [...trail.querySelectorAll('.lm-row')];
    const reduce = prefersReducedMotion();
    let length = 0;
    let rowAt = [];

    function update() {
      if (!length) return;
      const r = trail.getBoundingClientRect();
      const p = reduce ? 1 : clamp01((window.innerHeight * 0.58 - r.top) / r.height);
      const l = p * length;
      drawPath.style.strokeDashoffset = length - l;
      const a = drawPath.getPointAtLength(l);
      const ahead = drawPath.getPointAtLength(Math.min(length, l + 2));
      const behind = drawPath.getPointAtLength(Math.max(0, l - 2));
      const angle = (Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180) / Math.PI + 90;
      const narrow = window.innerWidth < 700;
      const scale = (narrow ? 1.3 : 1.5) + p * (narrow ? 1 : 2.1);
      plane.setAttribute('transform', `translate(${a.x} ${a.y}) rotate(${angle}) scale(${scale})`);
      plane.style.opacity = reduce ? 0 : 1;
      rows.forEach((row, i) => row.classList.toggle('is-on', l >= rowAt[i] - 6));
    }

    function build() {
      const r = trail.getBoundingClientRect();
      const W = r.width;
      const H = r.height;
      const points = rows.map((row) => {
        const n = row.querySelector('.lm-node').getBoundingClientRect();
        return { x: n.left - r.left + n.width / 2, y: n.top - r.top + n.height / 2 };
      });
      const narrow = W < 700;
      let prev = { x: narrow ? points[0].x : W / 2, y: 0 };
      let d = `M${prev.x},${prev.y}`;
      points.concat([{ x: narrow ? points[points.length - 1].x : W / 2, y: H }]).forEach((pt) => {
        const h = pt.y - prev.y;
        d += ` C${prev.x},${prev.y + h * 0.55} ${pt.x},${pt.y - h * 0.55} ${pt.x},${pt.y}`;
        prev = pt;
      });
      trail.querySelectorAll('svg').forEach((s) => s.setAttribute('viewBox', `0 0 ${W} ${H}`));
      basePath.setAttribute('d', d);
      drawPath.setAttribute('d', d);
      length = drawPath.getTotalLength();
      drawPath.style.strokeDasharray = length;
      // Path length at which the trail reaches each node's height (bisection).
      rowAt = points.map((pt) => {
        let lo = 0;
        let hi = length;
        for (let i = 0; i < 22; i++) {
          const mid = (lo + hi) / 2;
          if (drawPath.getPointAtLength(mid).y < pt.y) lo = mid;
          else hi = mid;
        }
        return lo;
      });
      update();
    }

    build();
    window.addEventListener('load', build);
    window.addEventListener('resize', build);
    window.addEventListener('scroll', update, { passive: true });
    document.fonts?.ready.then(build);
    return () => {
      window.removeEventListener('load', build);
      window.removeEventListener('resize', build);
      window.removeEventListener('scroll', update);
    };
  }, []);

  return (
    <section id="metodo" className="acv-metodo">
      <div className="acv-section-inner">
        <div className="acv-section-head rv" ref={headRef} style={{ marginBottom: 0 }}>
          <div>
            <div className="acv-eyebrow">O MÉTODO</div>
            <div className="acv-h2">Método LEME</div>
          </div>
          <div className="pj-metodo-intro">
            Assim como o leme orienta a direção de uma aeronave, o Método LEME conduz cada decisão da gestão até o
            objetivo de viagem do cliente.
          </div>
        </div>
        <div className="lm-trail" ref={trailRef}>
          <svg className="lm-svg" aria-hidden="true">
            <path className="lm-base" ref={basePathRef}></path>
            <path className="lm-draw" ref={drawPathRef}></path>
          </svg>
          <svg className="lm-svg lm-top" aria-hidden="true">
            <g className="lm-plane" ref={planeRef}>
              <path transform="translate(-12 -12)" d={PLANE_PATH}></path>
            </g>
          </svg>
          {LEME.map((step) => (
            <div className="lm-row" key={step.title}>
              <div className="lm-node">{step.letter}</div>
              <div className="lm-body">
                <div className="lm-title">{step.title}</div>
                <div className="lm-desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
