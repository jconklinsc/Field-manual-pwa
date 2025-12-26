import { useEffect, useState } from 'react';
import { readJson } from './storage';

const HORSE_KEY = 'fieldManualHorses';

export default function SmartPrompt({ section }) {
  const [recent, setRecent] = useState(null);

  useEffect(() => {
    try {
      const horses = readJson(HORSE_KEY, []);

      const allEntries = horses.flatMap(h =>
        (h.entries || []).map(e => ({
          ...e,
          horse: h.name
        }))
      );

      const matches = allEntries
        .filter(e => e.section === section)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

      if (matches.length > 0) {
        setRecent(matches[0]);
      }
    } catch {}
  }, [section]);

  if (!recent) return null;

  return (
    <div
      style={{
        marginTop: '20px',
        padding: '14px',
        borderRadius: '8px',
        background: '#fff6e8',
        border: '1px solid #e7d6c0'
      }}
    >
      <strong>Last time you logged this:</strong>

      <div style={{ fontSize: '13px', marginTop: '6px', color: '#555' }}>
        {recent.horse} · {new Date(recent.date).toLocaleDateString()}
      </div>

      <div style={{ marginTop: '8px', whiteSpace: 'pre-wrap' }}>
        {recent.text}
      </div>
    </div>
  );
}
