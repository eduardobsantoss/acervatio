import { WA_URL } from '../data/content';

export default function Hero() {
  return (
    <section className="acv-hero">
      <div className="acv-hero-bg-pattern"></div>
      <div className="acv-hero-bg-gradient"></div>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="acv-hero-curve">
        <defs>
          <linearGradient id="acvA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#A69984" stopOpacity=".22"></stop>
            <stop offset="1" stopColor="#A69984" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
        <path
          d="M0,286 C240,278 380,254 560,214 S900,120 1120,66 S1330,26 1440,14"
          fill="none"
          stroke="#EFEFE6"
          strokeOpacity=".12"
          strokeWidth="1.5"
          strokeDasharray="5 6"
        ></path>
        <g className="acv-areawipe">
          <path
            d="M0,286 C240,278 380,254 560,214 S900,120 1120,66 S1330,26 1440,14 L1440,320 L0,320 Z"
            fill="url(#acvA)"
          ></path>
        </g>
        <path
          className="acv-drawline"
          d="M0,286 C240,278 380,254 560,214 S900,120 1120,66 S1330,26 1440,14"
          fill="none"
          stroke="#A69984"
          strokeWidth="2.25"
          strokeLinecap="round"
        ></path>
      </svg>
      <div className="acv-hero-content">
        <div className="acv-overflow">
          <div className="acv-eyebrow acv-eyebrow-gold acv-lineup">CONSULTORIA PRIVADA · SOB INDICAÇÃO</div>
        </div>
        <div className="acv-overflow">
          <div className="acv-h1 acv-h1-dark acv-lineup acv-delay-1">Milhas não são</div>
        </div>
        <div className="acv-overflow">
          <div className="acv-h1 acv-h1-dark acv-lineup acv-delay-2">
            benefício. São <span className="acv-italic-gold-light">patrimônio</span>.
          </div>
        </div>
        <div className="acv-hero-sub acv-hero-sub-dark acv-fadeup acv-delay-3">
          E patrimônio se administra. Cuidamos da estrutura de cartões, das janelas de bônus e da emissão — você
          recebe o relatório e embarca.
        </div>
        <div className="acv-hero-ctas acv-fadeup acv-delay-4">
          <a href={WA_URL} className="acv-btn-gold acv-btn-lg">
            Falar no WhatsApp <span className="acv-arrow">→</span>
          </a>
          <a href="#metodo" className="acv-btn-outline acv-btn-outline-dark">
            Como funciona
          </a>
        </div>
      </div>
      <div className="acv-scroll-hint">
        <span>SCROLL</span>
      </div>
    </section>
  );
}
