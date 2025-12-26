import { useEffect, useState } from 'react';

const KEY = 'fieldManualFavorites';

export default function FavoriteToggle({ id, label }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = JSON.parse(localStorage.getItem(KEY) || '[]');
    setActive(stored.some(f => f.id === id));
  }, [id]);

  function toggle() {
    const stored = JSON.parse(localStorage.getItem(KEY) || '[]');

    let updated;
    if (active) {
      updated = stored.filter(f => f.id !== id);
    } else {
      updated = [...stored, { id, label }];
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
        color: active ? '#78be20' : '#6b6256'
      }}
    >
      {active ? '★' : '☆'}
    </button>
  );
}
