import useReveal from '../hooks/useReveal';
import { CASES } from '../data/content';

// Chat-bubble skeleton for the conversation print: [width %, height px, isReply].
const BUBBLES = [
  [62, 26, false],
  [48, 22, true],
  [70, 40, false],
  [40, 22, true],
  [56, 30, false],
];

function CaseCard({ value, n, hidden }) {
  return (
    <div className="rs-card" aria-hidden={hidden || undefined}>
      <div className="rs-print">
        <b>Print da conversa</b>
        {BUBBLES.map(([w, h, reply], m) => (
          <i
            key={m}
            className={reply ? 'r' : undefined}
            style={{ width: `${w + ((n * 7 + m * 5) % 18)}%`, height: h }}
          ></i>
        ))}
      </div>
      <div className="rs-save">
        <span>Economia</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

export default function Resultados() {
  const headRef = useReveal();

  return (
    <section id="resultados" className="acv-resultados">
      <div className="acv-resultados-inner">
        <div className="acv-resultados-head rv" ref={headRef}>
          <div className="acv-eyebrow acv-eyebrow-gold">RESULTADOS</div>
          <div className="acv-h2 acv-h2-light">O que a gestão preserva.</div>
        </div>
      </div>
      {/* The list is rendered twice so the marquee loops seamlessly at -50%. */}
      <div className="rs-marquee">
        <div className="rs-track">
          {[0, 1].map((copy) =>
            CASES.map((value, n) => <CaseCard key={`${copy}-${n}`} value={value} n={n} hidden={copy === 1} />)
          )}
        </div>
      </div>
    </section>
  );
}
