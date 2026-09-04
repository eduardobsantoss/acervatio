import useReveal from '../hooks/useReveal';
import { CMP } from '../data/content';

function CmpRow({ row, index }) {
  const ref = useReveal(index);
  return (
    <div className="acv-cmp-row rv" ref={ref}>
      <div className="acv-cmp-feature">{row.feature}</div>
      <div className="acv-cmp-solo">{row.solo}</div>
      <div className="acv-cmp-gerido">{row.gerido}</div>
    </div>
  );
}

export default function Comparacao() {
  const headRef = useReveal();

  return (
    <section id="diferenca" className="acv-comparacao">
      <div className="acv-section-inner">
        <div className="acv-comparacao-head rv" ref={headRef}>
          <div className="acv-eyebrow">A DIFERENÇA</div>
          <div className="acv-h2">
            Por conta própria <span className="acv-thin">vs.</span> com gestor
          </div>
        </div>
        <div className="acv-cmp-table">
          {CMP.map((row, i) => (
            <CmpRow key={row.feature} row={row} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
