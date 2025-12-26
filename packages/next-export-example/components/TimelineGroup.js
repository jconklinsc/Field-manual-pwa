export default function TimelineGroup({ entries }) {
  if (!entries || entries.length === 0) return null;

  const now = new Date();

  function daysAgo(date) {
    const diff = now - new Date(date);
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  const groups = {
    Today: [],
    Yesterday: [],
    'Last 7 Days': [],
    Older: []
  };

  entries.forEach(e => {
    const d = daysAgo(e.date);
    if (d === 0) groups.Today.push(e);
    else if (d === 1) groups.Yesterday.push(e);
    else if (d <= 7) groups['Last 7 Days'].push(e);
    else groups.Older.push(e);
  });

  return (
    <div>
      {Object.entries(groups).map(([label, items]) =>
        items.length === 0 ? null : (
          <section key={label} style={{ marginBottom: '24px' }}>
            <h3 style={{ marginBottom: '8px' }}>{label}</h3>

            {items.map(entry => (
              <div
                key={entry.id}
                style={{
                  padding: '12px',
                  marginBottom: '8px',
                  borderRadius: '12px',
                  background: '#fffaf4',
                  border: '1px solid #e6d9c8'
                }}
              >
                <div style={{ fontSize: '12px', color: '#6b6256' }}>
                  {new Date(entry.date).toLocaleString()} · {entry.section}
                </div>

                <div style={{ marginTop: '6px', whiteSpace: 'pre-wrap' }}>
                  {entry.text}
                </div>
              </div>
            ))}
          </section>
        )
      )}
    </div>
  );
}
