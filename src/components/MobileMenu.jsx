import logoBege from '../assets/brand/logo-h-bege.svg';
import { WA_URL } from '../data/content';

const LINKS = [
  { id: 'sobre', label: 'Sobre', dim: false },
  { id: 'servicos', label: 'Serviços', dim: false },
  { id: 'metodo', label: 'Método', dim: false },
  { id: 'resultados', label: 'Resultados', dim: true },
  { id: 'diferenca', label: 'Diferença', dim: true },
  { id: 'depoimentos', label: 'Depoimentos', dim: true },
  { id: 'faq', label: 'FAQ', dim: true },
];

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`acv-mobile-menu${open ? ' is-open' : ''}`}>
      <div className="acv-mobile-menu-top">
        <img src={logoBege} alt="Acervatio" />
        <button className="acv-close" onClick={onClose} aria-label="Fechar menu">
          <span></span>
          <span></span>
        </button>
      </div>
      <nav className="acv-mobile-nav">
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`acv-mobile-link${link.dim ? ' acv-mobile-link-dim' : ''}`}
            onClick={onClose}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a href={WA_URL} target="_blank" rel="noopener" className="acv-mobile-cta" onClick={onClose}>
        Falar com especialista →
      </a>
    </div>
  );
}
