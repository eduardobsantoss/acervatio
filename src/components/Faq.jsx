import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { FAQS } from '../data/content';

function FaqItem({ item, index, isOpen, onToggle }) {
  const ref = useReveal(index);
  return (
    <div className={`acv-faq-item rv${isOpen ? ' is-open' : ''}`} ref={ref}>
      <div className="acv-faq-q" onClick={onToggle}>
        <div className="acv-faq-q-text">{item.q}</div>
        <div className="acv-faq-plus">+</div>
      </div>
      <div className="acv-faq-a-wrap">
        <div className="acv-faq-a-inner">
          <div className="acv-faq-a">{item.a}</div>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const headRef = useReveal();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="acv-faq">
      <div className="acv-section-inner acv-faq-grid">
        <div className="acv-faq-heading rv" ref={headRef}>
          <div className="acv-eyebrow">DÚVIDAS</div>
          <div className="acv-h2">Antes de conversarmos.</div>
          <div className="acv-section-sub">Se a sua pergunta não estiver aqui, mande no WhatsApp — respondemos pessoalmente.</div>
        </div>
        <div>
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
