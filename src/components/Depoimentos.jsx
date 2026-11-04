import { useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';
import useCarousel from '../hooks/useCarousel';
import PlaneArrow from './PlaneArrow';
import { DEPOIMENTOS } from '../data/content';

// depo-01.mp3 … depo-05.mp3, referenced by DEPOIMENTOS[].audio (1-based).
const AUDIOS = Object.entries(import.meta.glob('../assets/depoimentos/*.mp3', { eager: true, import: 'default' }))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const WAVE_BARS = 30;
let currentAudio = null;

const mmss = (s) => {
  const t = Math.max(0, Math.round(s || 0));
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`;
};

function AudioPlayer({ src, n }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const progress = duration ? time / duration : 0;
  const label = !duration ? '' : !playing && !time ? mmss(duration) : `${mmss(time)} / ${mmss(duration)}`;

  return (
    <div className={`au${playing ? ' is-playing' : ''}`}>
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onPlay={(e) => {
          if (currentAudio && currentAudio !== e.currentTarget) currentAudio.pause();
          currentAudio = e.currentTarget;
          setPlaying(true);
        }}
        onPause={() => setPlaying(false)}
        onEnded={(e) => {
          e.currentTarget.currentTime = 0;
          setTime(0);
        }}
      />
      <button
        className="au-btn"
        aria-label={playing ? 'Pausar' : 'Ouvir o depoimento completo'}
        aria-pressed={playing}
        onClick={() => {
          const au = audioRef.current;
          if (au.paused) au.play();
          else au.pause();
        }}
      >
        <svg viewBox="0 0 24 24">
          <path className="au-play" d="M8 5v14l11-7z"></path>
          <path className="au-pause" d="M7 5h4v14H7zM13 5h4v14h-4z"></path>
        </svg>
      </button>
      <div
        className="au-wave"
        onClick={(e) => {
          const au = audioRef.current;
          if (!duration) return;
          const r = e.currentTarget.getBoundingClientRect();
          au.currentTime = duration * Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
          setTime(au.currentTime);
        }}
      >
        {Array.from({ length: WAVE_BARS }, (_, i) => (
          <i
            key={i}
            className={i / WAVE_BARS < progress ? 'on' : undefined}
            style={{ '--h': `${8 + ((i * 37 + n * 11) % 11) * 2}px`, '--d': `${-((i * 83) % 700)}ms` }}
          ></i>
        ))}
      </div>
      <span className="au-time">{label}</span>
    </div>
  );
}

export default function Depoimentos() {
  const headRef = useReveal();
  const { trackRef, prev, next } = useCarousel();

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
          <div className="pj-track pj-depo-track" ref={trackRef}>
            {DEPOIMENTOS.map((d) => (
              <div className={`pj-depo${d.audio ? '' : ' is-text'}`} key={d.initials}>
                <div className="pj-depo-q">“</div>
                <div className="pj-depo-txt">
                  {d.text.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <div className="pj-depo-who">
                  <span className="pj-depo-ini">{d.initials}</span>
                </div>
                {d.audio && <AudioPlayer src={AUDIOS[d.audio - 1]} n={d.audio - 1} />}
              </div>
            ))}
          </div>
          <div className="pj-arrows">
            <button className="pj-arrow" aria-label="Depoimento anterior" onClick={prev}>
              <PlaneArrow dir="left" />
            </button>
            <button className="pj-arrow" aria-label="Próximo depoimento" onClick={next}>
              <PlaneArrow dir="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
