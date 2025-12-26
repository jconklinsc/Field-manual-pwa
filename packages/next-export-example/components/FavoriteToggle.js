import { useEffect, useState } from 'react';

const KEY = 'fieldManualFavorites';

export default function FavoriteToggle({ id, label }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = JSON.parse(localStorage.getItem(KEY) || '[]');
      setActive(stored.some(f => f.id === id));
    } catch {
      setActive(false);
    }
  }, [id]);

  function toggle() {
    if (typeof window === 'undefined') return;
    let stored = [];
    try {
      stored = JSON.parse(localStorage.getItem(KEY) || '[]');
    } catch {
      stored = [];
    }

    let updated;
    if (active) {
      updated = stored.filter(f => f.id !== id);
    } else {
      updated = [...stored.filter(f => f.id !== id), { id, label }];
    }

    localStorage.setItem(KEY, JSON.stringify(updated));
    setActive(!active);
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
        color: active ? '#78be20' : '#9ca3af'
      }}
    >
      {active ? '★' : '☆'}
    </button>
  );
}
