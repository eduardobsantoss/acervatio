import useReveal from '../hooks/useReveal';

export default function Sobre() {
  const headRef = useReveal();
  const bodyRef = useReveal();

  return (
    <section id="sobre" className="acv-sobre">
      <div className="acv-section-inner acv-sobre-grid">
        <div className="acv-sobre-head rv" ref={headRef}>
          <div className="acv-eyebrow">SOBRE A ACERVATIO</div>
          <div className="acv-h2">
            Gestão de patrimônio. <span className="acv-thin-italic">Não agência de viagens.</span>
          </div>
        </div>
        <div className="acv-sobre-body rv" ref={bodyRef}>
          <div className="acv-sobre-text">
            Fundada por <span className="acv-bold">Bruno Humberto</span>, a Acervatio soma três anos cuidando do
            patrimônio em milhas de famílias em todo o Brasil, com atendimento presencial e online — geralmente por
            indicação. O diferencial não é uma ferramenta exclusiva: é a profundidade e a continuidade da gestão,
            mês após mês.
          </div>
          <div className="acv-sobre-facts">
            <div className="acv-sobre-fact">
              <div className="acv-sobre-fact-value">3 anos</div>
              <div className="acv-sobre-fact-label">de mercado</div>
            </div>
            <div className="acv-sobre-fact">
              <div className="acv-sobre-fact-value">Todo o Brasil</div>
              <div className="acv-sobre-fact-label">cobertura de atendimento</div>
            </div>
            <div className="acv-sobre-fact">
              <div className="acv-sobre-fact-value">Presencial e online</div>
              <div className="acv-sobre-fact-label">formato de atendimento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
