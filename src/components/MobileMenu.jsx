import logoBege from '../assets/brand/logo-h-bege.svg';
import { WA_URL, CLIENTE_URL, NAV_LINKS } from '../data/content';

// The first three links get the large type; the rest are secondary.
const LINKS = NAV_LINKS.map((l, i) => ({ ...l, dim: i > 2 }));

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
      <a href={CLIENTE_URL} className="acv-mobile-cliente" onClick={onClose}>
        Acesso do Cliente
      </a>
      <a href={WA_URL} target="_blank" rel="noopener" className="acv-mobile-cta" onClick={onClose}>
        Falar com especialista →
      </a>
    </div>
  );
}
