import useReveal from '../hooks/useReveal';
import symbolDourado from '../assets/brand/symbol-dourado.svg';
import { WA_URL } from '../data/content';

export default function Contato() {
  const leftRef = useReveal();
  const cardRef = useReveal();

  return (
    <section id="contato" className="acv-contato">
      <img src={symbolDourado} className="acv-contato-symbol" alt="" />
      <div className="acv-contato-inner">
        <div className="rv" ref={leftRef}>
          <div className="acv-eyebrow acv-eyebrow-gold">PRÓXIMO PASSO</div>
          <div className="acv-h1-cta">Fale com a ACERVATIO.</div>
          <div className="acv-contato-sub">
            Faremos uma análise para entendermos sua estrutura de cartões e programas.
          </div>
          <div className="ct-hi">Comece hoje a organizar seu patrimônio em milhas.</div>
        </div>
        <div className="acv-contato-card rv" ref={cardRef}>
          <a href={WA_URL} target="_blank" rel="noopener" className="acv-btn-gold">
            Falar com o especialista <span className="acv-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
