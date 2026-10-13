import { useCallback, useEffect, useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';
import { prefersReducedMotion } from '../utils/motion';

const WORDS = ['Pontos', 'milhas', 'benefícios', 'experiências', 'histórias'];

// The five words rise in once the block is in view, then a highlight cycles
// through them; hovering or clicking a word takes over the highlight.
function NameOrigin() {
  const ref = useRef(null);
  const cycleTimer = useRef(null);
  const [stage, setStage] = useState('idle');
  const [hot, setHot] = useState(-1);

  const startCycle = useCallback(() => {
    clearInterval(cycleTimer.current);
    if (!prefersReducedMotion()) {
      cycleTimer.current = setInterval(() => setHot((h) => (h + 1) % WORDS.length), 1500);
    }
  }, []);

  useEffect(() => {
    let doneTimer;
    const start = () => {
      setStage('go');
      doneTimer = setTimeout(
        () => {
          setStage('done');
          setHot(0);
          startCycle();
        },
        prefersReducedMotion() ? 0 : 1900
      );
    };

    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            start();
            observer.disconnect();
          }
        },
        { threshold: 0.45 }
      );
      observer.observe(ref.current);
    } else {
      start();
    }

    return () => {
      observer?.disconnect();
      clearTimeout(doneTimer);
      clearInterval(cycleTimer.current);
    };
  }, [startCycle]);

  const className = `nm${stage !== 'idle' ? ' go' : ''}${stage === 'done' ? ' done' : ''}`;

  return (
    <div className={className} ref={ref}>
      <div className="nm-eyebrow">A origem do nome</div>
      <div className="nm-word">ACERVATIO</div>
      <p className="nm-def">
        Tem origem no latim e traduz a ideia de reunir, preservar e dar sentido ao que se acumula ao longo do tempo.
      </p>
      <div className="nm-words">
        {WORDS.map((word, i) => (
          <span key={word}>
            <b
              style={{ '--i': i }}
              className={hot === i ? 'is-hot' : undefined}
              onMouseEnter={() => {
                clearInterval(cycleTimer.current);
                setHot(i);
              }}
              onMouseLeave={startCycle}
              onClick={() => {
                setHot(i);
                startCycle();
              }}
            >
              {word}
            </b>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Conceito() {
  const ref = useReveal();

  return (
    <section id="conceito" className="acv-manifesto">
      <div className="acv-manifesto-inner rv" ref={ref}>
        <div className="acv-manifesto-text">
          Dessa percepção surgiu a ACERVATIO: uma empresa criada para assumir essa gestão de forma completa,
          acompanhando cada cliente de perto e transformando pontos, milhas e benefícios em{' '}
          <span className="acv-italic-gold-2">
            viagens planejadas, escolhas eficientes e experiências mais bem aproveitadas
          </span>
          .
        </div>
      </div>
      <NameOrigin />
    </section>
  );
}
