import useReveal from '../hooks/useReveal';
import { STEPS } from '../data/content';

function Step({ step, index }) {
  const ref = useReveal(index);
  return (
    <div className="acv-step rv" ref={ref}>
      <div className="acv-step-num" style={{ color: step.numColor }}>
        {step.num}
      </div>
      <div className="acv-step-title">{step.title}</div>
      <div className="acv-step-desc">{step.desc}</div>
      <div className="acv-step-bar" style={{ background: step.barColor, width: step.barWidth }}></div>
    </div>
  );
}

export default function Metodo() {
  const headRef = useReveal();

  return (
    <section id="metodo" className="acv-metodo">
      <div className="acv-section-inner">
        <div className="acv-section-head rv" ref={headRef}>
          <div>
            <div className="acv-eyebrow">O MÉTODO</div>
            <div className="acv-h2">
              Quatro etapas, sem <span className="acv-thin-italic">nenhuma senha sua</span>.
            </div>
          </div>
          <div className="acv-section-sub">
            Do primeiro raio-x da sua estrutura de cartões até o bilhete emitido no seu nome.
          </div>
        </div>
        <div className="acv-steps">
          {STEPS.map((step, i) => (
            <Step key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
