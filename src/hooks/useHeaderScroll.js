import { useEffect, useRef, useState } from 'react';

const NAV_SECTIONS = ['sobre', 'servicos', 'metodo', 'diferenca', 'faq'];

// Scroll-progress bar + hide-on-scroll-down/show-on-scroll-up are driven
// directly through refs (not React state) so a scroll listener never forces a
// re-render. Active-section nav highlight is rarer, so it's fine as state.
export default function useHeaderScroll() {
  const headerRef = useRef(null);
  const progressBarRef = useRef(null);
  const lastScrollY = useRef(0);
  const [activeNav, setActiveNav] = useState(null);

  useEffect(() => {
    function updateHeaderOnScroll() {
      const y = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, y / docHeight)) : 0;
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }

      if (headerRef.current) {
        if (y > 140 && y > lastScrollY.current) headerRef.current.classList.add('is-hidden');
        else headerRef.current.classList.remove('is-hidden');
      }
      lastScrollY.current = y;
    }

    window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
    updateHeaderOnScroll();
    return () => window.removeEventListener('scroll', updateHeaderOnScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!('IntersectionObserver' in window) || !sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return { headerRef, progressBarRef, activeNav };
}
