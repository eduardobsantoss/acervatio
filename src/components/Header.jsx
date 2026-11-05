import logoNavy from '../assets/brand/logo-h-navy.svg';
import useHeaderScroll from '../hooks/useHeaderScroll';
import { WA_URL, CLIENTE_URL, NAV_LINKS } from '../data/content';

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
          {NAV_LINKS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={activeNav === item.id ? 'is-active' : ''}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="acv-header-actions">
          <a href={CLIENTE_URL} className="acv-link-cliente">Acesso do Cliente</a>
          <a href={WA_URL} target="_blank" rel="noopener" className="acv-btn-dark">
            Falar com especialista
          </a>
        </div>
        <button className="acv-burger" onClick={onOpenMenu} aria-label="Abrir menu">
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
