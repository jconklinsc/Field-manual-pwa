import { useEffect, useState } from 'react';
import { readJson, writeJson } from './storage';

const KEY = 'fieldManualFavorites';

export default function FavoriteToggle({ id, label }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const stored = readJson(KEY, []);
    setActive(stored.some(f => f.id === id));
  }, [id]);

  function toggle() {
    const stored = readJson(KEY, []);

    let updated;
    if (active) {
      updated = stored.filter(f => f.id !== id);
    } else {
      updated = [...stored.filter(f => f.id !== id), { id, label }];
    }

    writeJson(KEY, updated);
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
