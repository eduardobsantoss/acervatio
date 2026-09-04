import logoNavy from '../assets/brand/logo-h-navy.svg';
import useHeaderScroll from '../hooks/useHeaderScroll';
import { WA_URL, CLIENTE_URL } from '../data/content';

const NAV_ITEMS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'metodo', label: 'Método' },
  { id: 'diferenca', label: 'Diferença' },
  { id: 'faq', label: 'FAQ' },
];

export default function Header({ onOpenMenu }) {
  const { headerRef, progressBarRef, activeNav } = useHeaderScroll();

  return (
    <header className="acv-header" ref={headerRef}>
      <div className="acv-progress-track">
        <div className="acv-progress-bar" ref={progressBarRef}></div>
      </div>
      <div className="acv-header-inner">
        <img src={logoNavy} className="acv-header-logo" alt="Acervatio" />
        <nav className="acv-nav-desktop">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={activeNav === item.id ? 'is-active' : ''}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="acv-header-actions">
          {/* TODO: substituir CLIENTE_URL (em src/data/content.js) pela URL real do sistema externo de acesso do cliente */}
          <a href={CLIENTE_URL} className="acv-link-cliente">Acesso do Cliente</a>
          <a href={WA_URL} className="acv-btn-dark">Falar com especialista</a>
        </div>
        <button className="acv-burger" onClick={onOpenMenu} aria-label="Abrir menu">
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
