import useReveal from '../hooks/useReveal';

export default function Conceito() {
  const ref = useReveal();

  return (
    <section id="conceito" className="acv-manifesto rv" ref={ref}>
      <div className="acv-manifesto-inner">
        <div className="acv-manifesto-text">
          Aquilo que se acumula ao longo do tempo também possui valor — e merece ser administrado. Pontos e milhas
          formam um <span className="acv-bold">patrimônio invisível</span>. Sem estratégia, ele se desperdiça em
          taxas, expirações e resgates ruins. Bem administrado, vira{' '}
          <span className="acv-italic-gold-2">economia, experiência e tempo de volta</span>.
        </div>
        <div className="acv-manifesto-foot">
          Acervatio · do latim, aquilo que é reunido e preservado por ter valor
        </div>
      </div>
    </section>
  );
}
