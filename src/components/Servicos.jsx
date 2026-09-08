import useReveal from '../hooks/useReveal';
import { SERVICOS } from '../data/content';

function ServicoItem({ item, index }) {
  const ref = useReveal(index);
  const content = (
    <>
      <div className="acv-servico-title">{item.title}</div>
      <div className="acv-servico-desc">{item.desc}</div>
    </>
  );

  if (item.href) {
    return (
      <a href={item.href} className="acv-servico-item rv" ref={ref}>
        {content}
      </a>
    );
  }
  return (
    <div className="acv-servico-item rv" ref={ref}>
      {content}
    </div>
  );
}

export default function Servicos() {
  const headRef = useReveal();

  return (
    <section id="servicos" className="acv-servicos">
      <div className="acv-servicos-inner">
        <div className="acv-servicos-head rv" ref={headRef}>
          <div className="acv-eyebrow acv-eyebrow-gold">SERVIÇOS</div>
          <div className="acv-h2 acv-h2-light">Uma gestão, várias frentes.</div>
          <div className="acv-section-sub acv-section-sub-light">
            Do acúmulo estratégico ao pouso — cuidamos de cada etapa da viagem, não só das milhas.
          </div>
        </div>
        <div className="acv-servicos-grid">
          {SERVICOS.map((item, i) => (
            <ServicoItem key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
