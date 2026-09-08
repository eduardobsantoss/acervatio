import useReveal from '../hooks/useReveal';
import PlaceholderGrid from './PlaceholderGrid';
import { DEPOIMENTOS_PLACEHOLDERS } from '../data/content';

export default function Depoimentos() {
  const headRef = useReveal();

  return (
    <section id="depoimentos" className="acv-depoimentos">
      <div className="acv-depoimentos-inner">
        <div className="acv-depoimentos-head rv" ref={headRef}>
          <div className="acv-eyebrow acv-eyebrow-gold">DEPOIMENTOS</div>
          <div className="acv-h2 acv-h2-light">Na voz de quem já vive a gestão.</div>
          <div className="acv-section-sub acv-section-sub-light">
            Ainda não temos depoimentos publicáveis — assim que os primeiros clientes topem compartilhar, eles
            aparecem aqui.
          </div>
        </div>
        <PlaceholderGrid labels={DEPOIMENTOS_PLACEHOLDERS} />
      </div>
    </section>
  );
}
