import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 320);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        right: '16px',
        bottom: '88px',
        padding: '12px 16px',
        borderRadius: '999px',
        border: '1px solid #dccfc1',
        background: '#f1e6d9',
        color: '#2a241d',
        fontWeight: 700,
        boxShadow: '0 12px 24px rgba(42, 36, 29, 0.18)',
        cursor: 'pointer',
        zIndex: 1200
      }}
    >
      Back to top
    </button>
  );
}
