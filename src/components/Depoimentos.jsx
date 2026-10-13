import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import useCarousel from '../hooks/useCarousel';
import { DEPOIMENTOS } from '../data/content';

const WAVE_BARS = 26;

// Áudio demonstrativo: o botão alterna o estado visual, ainda sem arquivo de som.
function AudioPlayer({ n, playing, onToggle }) {
  return (
    <div className={`au${playing ? ' is-playing' : ''}`}>
      <button className="au-btn" aria-label="Ouvir depoimento" aria-pressed={playing} onClick={onToggle}>
        <svg viewBox="0 0 24 24">
          <path className="au-play" d="M8 5v14l11-7z"></path>
          <path className="au-pause" d="M7 5h4v14H7zM13 5h4v14h-4z"></path>
        </svg>
      </button>
      <div className="au-wave">
        {Array.from({ length: WAVE_BARS }, (_, i) => (
          <i key={i} style={{ '--h': `${8 + ((i * 37 + n * 11) % 11) * 2}px`, '--d': `${-((i * 83) % 700)}ms` }}></i>
        ))}
      </div>
      <span className="au-time">{playing ? 'Pausar' : 'Ouvir'}</span>
    </div>
  );
}

export default function Depoimentos() {
  const headRef = useReveal();
  const { trackRef, prev, next } = useCarousel();
  const [playing, setPlaying] = useState(-1);

  return (
    <section id="depoimentos" className="acv-depoimentos">
      <div className="acv-depoimentos-inner">
        <div className="acv-depoimentos-head rv" ref={headRef}>
          <div className="acv-eyebrow acv-eyebrow-gold">DEPOIMENTOS</div>
          <div className="acv-h2 acv-h2-light">O Método LEME, na prática.</div>
          <div className="acv-section-sub acv-section-sub-light" style={{ marginTop: 14, maxWidth: 440 }}>
            Experiências de quem já confia à ACERVATIO a gestão dos seus pontos, milhas e benefícios.
          </div>
        </div>
        <div className="pj-car">
          <div className="pj-track" ref={trackRef}>
            {DEPOIMENTOS.map((initials, n) => (
              <div className="pj-depo" key={initials}>
                <div className="pj-depo-ini">{initials}</div>
                <div className="pj-depo-role">Iniciais do cliente</div>
                <div className="pj-depo-lines">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <AudioPlayer n={n} playing={playing === n} onToggle={() => setPlaying(playing === n ? -1 : n)} />
              </div>
            ))}
          </div>
          <div className="pj-arrows">
            <button className="pj-arrow" aria-label="Depoimento anterior" onClick={prev}>
              ‹
            </button>
            <button className="pj-arrow" aria-label="Próximo depoimento" onClick={next}>
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
