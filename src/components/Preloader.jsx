import { useEffect, useState } from 'react';
import logoVBege from '../assets/brand/logo-v-bege.svg';

const MIN_LOADER_MS = 500;

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = Date.now();
    function hide() {
      const wait = Math.max(0, MIN_LOADER_MS - (Date.now() - start));
      setTimeout(() => setHidden(true), wait);
    }
    if (document.readyState === 'complete') {
      hide();
      return undefined;
    }
    window.addEventListener('load', hide);
    return () => window.removeEventListener('load', hide);
  }, []);

  return (
    <div id="acv-loader" className={hidden ? 'is-hidden' : ''}>
      <div className="acv-loader-inner">
        <img src={logoVBege} className="acv-loader-logo" alt="Acervatio" />
        <div className="acv-loader-track"><div className="acv-loader-bar"></div></div>
        <div className="acv-loader-label">PREPARANDO</div>
      </div>
    </div>
  );
}
