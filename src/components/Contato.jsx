import useReveal from '../hooks/useReveal';
import symbolDourado from '../assets/brand/symbol-dourado.svg';
import { WA_URL } from '../data/content';

export default function Contato() {
  const leftRef = useReveal();
  const cardRef = useReveal();

  return (
    <section id="contato" className="acv-contato">
      <div className="acv-contato-bg"></div>
      <img src={symbolDourado} className="acv-contato-symbol" alt="" />
      <div className="acv-contato-inner">
        <div className="rv" ref={leftRef}>
          <div className="acv-eyebrow acv-eyebrow-gold">PRÓXIMO PASSO</div>
          <div className="acv-h1-cta">Fale com a gente.</div>
          <div className="acv-contato-sub">
            Atendimento sob indicação. Fale com a Acervatio pelo WhatsApp para entendermos sua estrutura de cartões
            e programas e começarmos a organizar seu patrimônio em milhas.
          </div>
          <div className="acv-contato-info">
            Resposta em até 1 dia útil
            <br />
            WhatsApp (34) 9 9235-9502
          </div>
        </div>
        <div className="acv-contato-card rv" ref={cardRef}>
          <div className="acv-contato-card-title">Comece a conversa agora.</div>
          <div className="acv-contato-card-sub">
            Bruno Humberto, fundador da Acervatio, responde pessoalmente — sem formulários.
          </div>
          <a href={WA_URL} className="acv-btn-gold">
            Falar com especialista <span className="acv-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
