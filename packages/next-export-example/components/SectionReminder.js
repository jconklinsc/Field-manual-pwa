import { useEffect, useState } from 'react';

const HORSE_KEY = 'fieldManualHorses';

export default function SectionReminder({ section, days = 5 }) {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    try {
      const horses = JSON.parse(localStorage.getItem(HORSE_KEY) || '[]');

      const entries = horses.flatMap(h =>
        (h.entries || []).filter(e => e.section === section)
      );

      if (entries.length === 0) return;

      const last = entries.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      )[0];

      const lastDate = new Date(last.date);
      const diffDays = Math.floor(
        (Date.now() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (diffDays >= days) {
        setMessage(`You haven’t logged ${section} in ${diffDays} days.`);
      }
    } catch {
      // silent fail
    }
  }, [section, days]);

  if (!message) return null;

  return (
    <div
      style={{
        marginTop: '16px',
        padding: '12px',
        borderRadius: '8px',
        background: '#fff7ed',
        border: '1px solid #fed7aa',
        color: '#7c2d12'
      }}
    >
      {message}
    </div>
  );
}
