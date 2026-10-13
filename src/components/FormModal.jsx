import { useState } from 'react';

// Demonstrativo: os campos e o destino das respostas ainda serão definidos.
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
          setSubmitted(true);
        }}
      >
        <h3>Quero minha análise</h3>
        <p>
          {submitted
            ? 'Nada foi enviado: este formulário é só uma demonstração do fluxo.'
            : 'Exemplo de formulário. Os campos e o destino das respostas ainda serão definidos.'}
        </p>
        <label htmlFor="f-nome">
          Nome
          <input id="f-nome" autoComplete="name" autoFocus />
        </label>
        <label htmlFor="f-wa">
          WhatsApp
          <input id="f-wa" inputMode="tel" />
        </label>
        <label htmlFor="f-gasto">
          Gasto mensal médio no cartão
          <select id="f-gasto">
            <option>Até R$ 10 mil</option>
            <option>R$ 10 a 30 mil</option>
            <option>Acima de R$ 30 mil</option>
          </select>
        </label>
        <div className="pj-form-row">
          <button type="button" className="pj-form-close" onClick={onClose}>
            Fechar
          </button>
          <button className="acv-btn-dark" style={{ borderRadius: 2, padding: '15px 24px' }}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
