import { useEffect, useState } from 'react';

const HORSE_KEY = 'fieldManualHorses';

function loadHorses() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(HORSE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHorses(horses) {
  localStorage.setItem(HORSE_KEY, JSON.stringify(horses));
}

export default function SectionLogQuickAdd({ section }) {
  const [horses, setHorses] = useState([]);
  const [horseId, setHorseId] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    setHorses(loadHorses());
  }, []);

  function submit() {
    if (!horseId || !text.trim()) return;

    const updated = horses.map(h =>
      h.id === horseId
        ? {
            ...h,
            entries: [
              {
                id: String(Date.now()),
                date: new Date().toISOString(),
                section,
                text: text.trim(),
              },
              ...(h.entries || [])
            ]
          }
        : h
    );

    saveHorses(updated);
    setText('');
    alert('Logged ✔');
  }

  if (horses.length === 0) {
    return <p>Add a horse to enable logging.</p>;
  }

  return (
    <section
      style={{
        marginTop: '24px',
        padding: '16px',
        border: '1px solid #e6d9c8',
        borderRadius: '12px',
        background: '#fffaf4'
      }}
    >
      <strong>Log for a Horse</strong>

      <select
        value={horseId}
        onChange={e => setHorseId(e.target.value)}
        style={{ width: '100%', marginTop: '8px', padding: '8px' }}
      >
        <option value="">Select horse…</option>
        {horses.map(h => (
          <option key={h.id} value={h.id}>
            {h.name}
          </option>
        ))}
      </select>

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder={`Log a note for ${section}…`}
        rows={3}
        style={{ width: '100%', marginTop: '8px', padding: '10px' }}
      />

      <button
        onClick={submit}
        style={{
          marginTop: '8px',
          padding: '8px 12px',
          background: '#78be20',
          color: '#1f2a10',
          border: 'none',
          borderRadius: '999px',
          fontWeight: 600
        }}
      >
        Save to Horse Log
      </button>
    </section>
  );
}
