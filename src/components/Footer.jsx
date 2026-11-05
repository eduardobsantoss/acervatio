import logoBege from '../assets/brand/logo-h-bege.svg';
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
                (34) 9 9652-1665
              </a>
              <a
                className="pj-contact"
                href="https://www.instagram.com/acervatio.br/"
                target="_blank"
                rel="noopener"
                aria-label="Abrir o Instagram @acervatio.br"
              >
                <svg viewBox="0 0 24 24">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M17.2 6.8h.01" />
                </svg>
                @acervatio.br
              </a>
              <a
                className="pj-contact"
                href="mailto:atendimento@acervatio.com.br?subject=Contato%20pelo%20site%20ACERVATIO"
                aria-label="Enviar e-mail para atendimento@acervatio.com.br"
              >
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3.5 7 8.5 6 8.5-6" />
                </svg>
                atendimento@acervatio.com.br
              </a>
            </div>
          </div>
          <div className="pj-footer-brand">
            <img src={logoBege} alt="Acervatio" />
          </div>
        </div>
        <div className="acv-footer-bottom">
          <div className="acv-footer-legal">
            <p>
              A ACERVATIO atua de forma independente e não possui vínculo, representação ou afiliação com companhias
              aéreas, instituições financeiras ou programas de fidelidade mencionados neste site.
            </p>
            <p>
              Todas as marcas citadas pertencem aos seus respectivos titulares. Resultados, economias e oportunidades
              podem variar conforme o perfil de cada cliente, disponibilidade, regras e condições dos respectivos
              programas.
            </p>
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
