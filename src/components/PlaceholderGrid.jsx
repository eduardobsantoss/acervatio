import useReveal from '../hooks/useReveal';

function PlaceholderCard({ label, index }) {
  const ref = useReveal(index);
  return (
    <div className="acv-placeholder-card rv" ref={ref}>
      <div className="acv-placeholder-value">Em breve</div>
      <div className="acv-placeholder-label">{label}</div>
    </div>
  );
}

// Shared "em breve" honest placeholder grid — reused by Resultados and Depoimentos.
export default function PlaceholderGrid({ labels }) {
  return (
    <div className="acv-placeholder-grid">
      {labels.map((label, i) => (
        <PlaceholderCard key={`${label}-${i}`} label={label} index={i} />
      ))}
    </div>
  );
}
