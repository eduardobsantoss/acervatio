import useReveal from '../hooks/useReveal';
import PlaceholderGrid from './PlaceholderGrid';
import { RESULTADOS_PLACEHOLDERS } from '../data/content';

export default function Resultados() {
  const headRef = useReveal();

  return (
    <section id="resultados" className="acv-resultados">
      <div className="acv-resultados-bg"></div>
      <div className="acv-resultados-inner">
        <div className="acv-resultados-head rv" ref={headRef}>
          <div className="acv-eyebrow acv-eyebrow-gold">RESULTADOS</div>
          <div className="acv-h2 acv-h2-light">Em construção, com transparência.</div>
          <div className="acv-section-sub acv-section-sub-light">
            Somos uma operação recente. Preferimos mostrar números reais mais adiante a preencher a página com
            estatísticas de exemplo.
          </div>
        </div>
        <PlaceholderGrid labels={RESULTADOS_PLACEHOLDERS} />
      </div>
    </section>
  );
}
