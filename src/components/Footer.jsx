import logoTagBege from '../assets/brand/logo-h-tag-bege.svg';
import { SITE_LINKS, WA_URL } from '../data/content';

export default function Footer() {
  return (
    <footer className="acv-footer">
      <div className="acv-footer-inner">
        <div className="pj-footer-grid">
          <div className="acv-footer-col">
            <div className="acv-footer-col-title">O SITE</div>
            <div className="acv-footer-col-items">
              {SITE_LINKS.map((l) => (
                <a key={l.id} href={`#${l.id}`}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="acv-footer-col">
            <div className="acv-footer-col-title">CONTATO</div>
            <div className="acv-footer-col-items">
              <a className="pj-contact" href={WA_URL} target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
                (34) 9 9235-9502
              </a>
              <a className="pj-contact" href="https://www.instagram.com/obrunohumberto" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M17.2 6.8h.01" />
                </svg>
                @obrunohumberto
              </a>
              <span className="pj-contact">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3.5 7 8.5 6 8.5-6" />
                </svg>
                bruno@acervatio.com.br
              </span>
            </div>
          </div>
          <div className="pj-footer-brand">
            <img src={logoTagBege} alt="Acervatio" />
          </div>
        </div>
        <div className="acv-footer-bottom">
          <div className="acv-footer-legal">
            A Acervatio é uma consultoria independente e não possui vínculo, representação ou afiliação com
            companhias aéreas, bancos ou programas de fidelidade. Marcas citadas pertencem a seus respectivos
            titulares. Resultados variam conforme perfil de gasto e disponibilidade dos programas.
          </div>
          <div className="acv-footer-copy">
            © 2026 ACERVATIO
            <br />
            CNPJ 59.240.670/0001-28
          </div>
        </div>
      </div>
    </footer>
  );
}
