import { useMemo } from 'react';

export default function WeeklySummary({ entries }) {
  const summary = useMemo(() => {
    if (!entries || entries.length === 0) return null;

    const now = Date.now();
    const weekAgo = now - 7 * 24 * 60 * 60 * 1000;

    const recent = entries.filter(e => new Date(e.date).getTime() >= weekAgo);
    if (recent.length === 0) return null;

    const counts = {};
    recent.forEach(e => {
      counts[e.section] = (counts[e.section] || 0) + 1;
    });

    return Object.entries(counts);
  }, [entries]);

  if (!summary) return null;

  return (
    <section
      style={{
        marginTop: '24px',
        padding: '16px',
        borderRadius: '10px',
        background: '#f3f8ea',
        border: '1px solid #cfe3b5'
      }}
    >
      <strong>This week’s activity</strong>

      <ul style={{ marginTop: '8px', paddingLeft: '18px' }}>
        {summary.map(([section, count]) => (
          <li key={section}>
            {section} ({count})
          </li>
        ))}
      </ul>
    </section>
  );
}
