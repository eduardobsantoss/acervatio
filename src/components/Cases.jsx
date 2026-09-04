import useReveal from '../hooks/useReveal';
import PlaceholderGrid from './PlaceholderGrid';
import { CASES_PLACEHOLDERS } from '../data/content';

export default function Cases() {
  const headRef = useReveal();

  return (
    <section id="cases" className="acv-cases">
      <div className="acv-section-inner">
        <div className="acv-cases-head rv" ref={headRef}>
          <div className="acv-eyebrow">CASES</div>
          <div className="acv-h2">Em construção.</div>
          <div className="acv-section-sub">
            Ainda não temos cases publicáveis. Conforme os projetos avançam, os primeiros exemplos entram aqui.
          </div>
        </div>
        <PlaceholderGrid labels={CASES_PLACEHOLDERS} light />
      </div>
    </section>
  );
}
