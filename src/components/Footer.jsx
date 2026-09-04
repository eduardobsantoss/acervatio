import logoTagBege from '../assets/brand/logo-h-tag-bege.svg';
import { WA_URL } from '../data/content';

const SITE_LINKS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'metodo', label: 'Método' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'diferenca', label: 'A Diferença' },
  { id: 'cases', label: 'Cases' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="acv-footer">
      <div className="acv-footer-inner">
        <div className="acv-footer-grid">
          <div className="acv-footer-brand">
            <img src={logoTagBege} alt="Acervatio" />
            <div className="acv-footer-brand-text">
              Gestão privada de patrimônio em milhas. Atendimento sob indicação, em todo o Brasil.
            </div>
          </div>
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
              <a href={WA_URL}>WhatsApp · (34) 9 9235-9502</a>
              <a href="mailto:bruno@acervatio.com.br">bruno@acervatio.com.br</a>
              <a href="https://www.instagram.com/obrunohumberto" target="_blank" rel="noopener">
                Instagram
              </a>
            </div>
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
