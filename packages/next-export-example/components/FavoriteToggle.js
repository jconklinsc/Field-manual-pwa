import { useEffect, useState } from 'react';
import { safeGet, safeSet } from './safeStorage';

const KEY = 'fieldManualFavorites';

export default function FavoriteToggle({ id, label }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    function syncFavorites() {
      const stored = safeGet(KEY, []);
      setActive(stored.some(f => f.id === id));
    }

    syncFavorites();
    window.addEventListener('favoritesUpdated', syncFavorites);
    return () => window.removeEventListener('favoritesUpdated', syncFavorites);
  }, [id]);

  function toggle() {
    if (typeof window === 'undefined') return;
    const stored = safeGet(KEY, []);

    let updated;
    if (active) {
      updated = stored.filter(f => f.id !== id);
    } else {
      updated = [...stored.filter(f => f.id !== id), { id, label }];
    }

    const saved = safeSet(KEY, updated);
    if (!saved) {
      setActive(!active);
    } else {
      setActive(!active);
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('favoritesUpdated'));
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle favorite"
      style={{
        marginLeft: '8px',
        fontSize: '20px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        lineHeight: 1,
        color: active ? '#b6855a' : '#9ca3af'
      }}
    >
      {active ? '★' : '☆'}
    </button>
  );
}
