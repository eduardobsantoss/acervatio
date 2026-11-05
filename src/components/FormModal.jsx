import { useState } from 'react';
import { GASTO_OPCOES, VIAGENS_OPCOES, waLink } from '../data/content';

// The site has no backend: submitting opens WhatsApp with the answers filled in.
export default function FormModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      className="pj-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <form
        className="pj-form"
        onSubmit={(e) => {
          e.preventDefault();
          const f = e.currentTarget.elements;
          const text = [
            'Olá! Quero minha análise.',
            `Nome: ${f.nome.value.trim()}`,
            `WhatsApp: ${f.whatsapp.value.trim()}`,
            `Média mensal de gastos no cartão: ${f.gasto.value}`,
            `Viagens por ano: ${f.viagens.value}`,
          ].join('\n');
          window.open(waLink(text), '_blank', 'noopener');
          setSubmitted(true);
        }}
      >
        <h3>Quero minha análise</h3>
        <p>
          {submitted
            ? 'Abrimos o WhatsApp com as suas respostas. É só enviar a mensagem para falar com a ACERVATIO.'
            : 'Conte um pouco sobre o seu perfil. Com essas informações, conseguimos entender como a ACERVATIO pode fazer mais sentido para você.'}
        </p>
        <label htmlFor="f-nome">
          Nome
          <input id="f-nome" name="nome" autoComplete="name" required autoFocus />
        </label>
        <label htmlFor="f-wa">
          WhatsApp
          <input id="f-wa" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" required />
        </label>
        <label htmlFor="f-gasto">
          Média mensal de gastos no cartão
          <select id="f-gasto" name="gasto" required defaultValue="">
            <option value="" disabled>
              Selecione
            </option>
            {GASTO_OPCOES.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label htmlFor="f-viagens">
          Quantas viagens você costuma fazer por ano?
          <select id="f-viagens" name="viagens" required defaultValue="">
            <option value="" disabled>
              Selecione
            </option>
            {VIAGENS_OPCOES.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <div className="pj-form-row">
          <button type="button" className="pj-form-close" onClick={onClose}>
            Fechar
          </button>
          <button className="acv-btn-dark" style={{ borderRadius: 2, padding: '15px 24px' }}>
            Solicitar análise
          </button>
        </div>
      </form>
    </div>
  );
}
