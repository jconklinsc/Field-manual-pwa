import { useEffect, useState } from 'react';
import { loadSafeHorses, saveSafeHorses } from './safeStore';

export default function SectionLogQuickAdd({ section }) {
  const [horses, setHorses] = useState([]);
  const [horseId, setHorseId] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    setHorses(loadSafeHorses());
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

    saveSafeHorses(updated);
    setHorses(updated);
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
        style={{
          width: '100%',
          marginTop: '8px',
          padding: '8px',
          borderRadius: '10px',
          border: '1px solid #dccfc1',
          background: '#ffffff'
        }}
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
        style={{
          width: '100%',
          marginTop: '8px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #dccfc1'
        }}
      />

      <button
        onClick={submit}
        style={{
          marginTop: '8px',
          padding: '8px 12px',
          background: '#b6855a',
          color: '#2a241d',
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
