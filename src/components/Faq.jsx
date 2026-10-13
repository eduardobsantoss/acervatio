import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { FAQS, WA_URL } from '../data/content';

export default function Faq() {
  const headRef = useReveal();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="acv-faq">
      <div className="acv-section-inner acv-faq-grid">
        <div className="acv-faq-heading rv" ref={headRef}>
          <div className="acv-eyebrow">DÚVIDAS</div>
          <div className="acv-h2">Antes de conversarmos.</div>
          <div className="acv-section-sub" style={{ marginTop: 14 }}>
            Se a sua dúvida não estiver aqui, fale com a nossa equipe.
          </div>
          <div className="pj-faq-more">Ainda ficou alguma dúvida?</div>
          <div className="pj-faq-cta" style={{ marginTop: 14 }}>
            <a href={WA_URL} target="_blank" rel="noopener" className="acv-btn-dark">
              Fale diretamente com a nossa equipe <span className="acv-arrow">→</span>
            </a>
          </div>
        </div>
        <div>
          {FAQS.map((item, i) => (
            <div key={item.q} className={`acv-faq-item${openIndex === i ? ' is-open' : ''}`}>
              <button className="acv-faq-q" onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
                <div className="acv-faq-q-text">{item.q}</div>
                <div className="acv-faq-plus">+</div>
              </button>
              <div className="acv-faq-a-wrap">
                <div className="acv-faq-a-inner">
                  <div className="acv-faq-a">{item.a}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
