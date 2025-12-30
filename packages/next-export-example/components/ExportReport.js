import { useState } from 'react';

function toSlug(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-');
}

export default function ExportReport({ horse, entries }) {
  const [status, setStatus] = useState('');

  if (!horse) return null;

  const handleExport = () => {
    const payload = {
      horse: {
        id: horse.id,
        name: horse.name,
      },
      entries,
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json',
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const baseName = horse.name ? toSlug(horse.name) : 'horse-log';
    link.href = url;
    link.download = `${baseName}-log.json`;
    link.click();
    URL.revokeObjectURL(url);

    setStatus('Report exported.');
    setTimeout(() => setStatus(''), 2000);
  };

  return (
    <section
      style={{
        margin: '20px 0',
        padding: '14px',
        borderRadius: '12px',
        border: '1px solid #e6d9c8',
        background: '#fffaf4',
      }}
    >
      <h3 style={{ marginTop: 0 }}>Export Horse Log</h3>
      <p style={{ margin: '4px 0 12px', color: '#4a4036' }}>
        Download {horse.name}&apos;s entries as a JSON report so you can share or
        archive them.
      </p>
      <button
        type="button"
        onClick={handleExport}
        style={{
          padding: '10px 14px',
          background: '#b6855a',
          color: '#2a241d',
          border: 'none',
          borderRadius: '999px',
          fontWeight: 600,
        }}
      >
        Export Report
      </button>
      {status && <p style={{ marginTop: '10px' }}>{status}</p>}
    </section>
  );
}
