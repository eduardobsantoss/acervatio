import logoBege from '../assets/brand/logo-h-bege.svg';
import { WA_URL, CLIENTE_URL } from '../data/content';

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
        {/* TODO: substituir CLIENTE_URL (em src/data/content.js) pela URL real do sistema externo de acesso do cliente */}
        <a href={CLIENTE_URL} className="acv-mobile-link acv-mobile-link-dim" onClick={onClose}>
          Acesso do Cliente
        </a>
      </nav>
      <div className="acv-mobile-divider"></div>
      <div className="acv-mobile-label">FALE COM O GESTOR</div>
      <div className="acv-mobile-phone">WhatsApp · (34) 9 9235-9502</div>
      <a href={WA_URL} className="acv-mobile-cta" onClick={onClose}>
        Falar com especialista →
      </a>
    </div>
  );
}
