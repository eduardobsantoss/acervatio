import useReveal from '../hooks/useReveal';
import brunoPhoto from '../assets/team/bruno-humberto.jpg';

export default function Sobre() {
  const headRef = useReveal();
  const photoRef = useReveal();

  return (
    <section id="sobre" className="acv-sobre">
      <div className="acv-section-inner acv-sobre-grid">
        <div className="acv-sobre-head rv" ref={headRef}>
          <div className="acv-eyebrow">SOBRE A ACERVATIO</div>
          <div className="acv-h2">Gestão de patrimônio.</div>
          <div className="sb-sub">Pontos, milhas e benefícios vistos como aquilo que realmente são: patrimônio.</div>
          <div className="sb-rule"></div>
          <div className="sb-lead">A ACERVATIO nasceu da minha própria relação com as viagens.</div>
          <div className="sb-text">
            Quanto mais eu buscava formas de viajar melhor, mais percebia que existia um universo de pontos, milhas e
            benefícios sendo pouco aproveitado, inclusive entre pessoas que já utilizavam o cartão de crédito de forma
            recorrente e acumulavam pontos e benefícios sem uma gestão adequada.
          </div>
        </div>
        <div className="acv-sobre-photo rv" ref={photoRef}>
          <img src={brunoPhoto} alt="Bruno Humberto, fundador da Acervatio" />
        </div>
      </div>
    </section>
  );
}
