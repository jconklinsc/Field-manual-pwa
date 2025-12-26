import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ArticleCard from '../components/ArticleCard';
import { loadSafeHorses, saveSafeHorses } from '../components/safeStore';

export default function HorsesPage() {
  const [horses, setHorses] = useState([]);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');

  function createHorseId() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
  }

  useEffect(() => {
    setHorses(loadSafeHorses());
  }, []);

  function addHorse() {
    if (!name.trim()) {
      setError('Enter a horse name to add.');
      return;
    }

    const updated = [
      ...horses,
      {
        id: createHorseId(),
        name: name.trim(),
        entries: []
      }
    ];

    setHorses(updated);
    saveSafeHorses(updated);
    setName('');
    setError('');
    setStatus('Horse added.');
    setTimeout(() => setStatus(''), 2000);
  }

  return (
    <Layout>
      <h1>Horses</h1>
      <p>
        Track each horse as an individual. Dedicated logs help you spot
        patterns in workload, recovery, and behavior.
      </p>
      <ArticleCard
        title="Build a Record"
        eyebrow="In-depth article"
        href="/articles#build-a-record"
      >
        <p>
          Add horses by name, then use the quick log prompts in each section to
          capture short updates. Small daily notes add up to a clear timeline.
        </p>
      </ArticleCard>

      <div style={{ marginTop: '18px', marginBottom: '8px' }}>
        <button
          type="button"
          onClick={() => {
            const input = document.getElementById('horse-name-input');
            if (input) input.focus();
          }}
          style={{
            padding: '8px 14px',
            borderRadius: '999px',
            border: '1px solid #dccfc1',
            background: '#f1e6d9',
            color: '#2a241d',
            fontWeight: 600,
            cursor: 'pointer',
            minHeight: '44px'
          }}
        >
          Add Horse to Log
        </button>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <input
          id="horse-name-input"
          value={name}
          onChange={e => {
            setName(e.target.value);
            if (error) setError('');
          }}
          onKeyDown={e => {
            if (e.key === 'Enter') addHorse();
          }}
          placeholder="Horse name"
          style={{
            padding: '8px',
            marginRight: '8px',
            width: '220px',
            borderRadius: '999px',
            border: '1px solid #dccfc1'
          }}
        />
        <button
          onClick={addHorse}
          style={{
            padding: '12px 18px',
            borderRadius: '999px',
            background: '#78be20',
            color: '#1f2a10',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer'
          }}
        >
          Save Horse
        </button>
      </div>
      {error && (
        <p style={{ color: '#9b4a1b', marginTop: '-8px' }}>{error}</p>
      )}
      {status && <p style={{ color: '#2a241d', marginTop: '-8px' }}>{status}</p>}

      {horses.length === 0 ? (
        <p>No horses yet. Add your current string to get started.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {horses.map(horse => (
            <li key={horse.id} style={{ marginBottom: '8px' }}>
              <a
                href={`/horses/${horse.id}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '10px 16px',
                  borderRadius: '999px',
                  border: '1px solid #dccfc1',
                  background: '#f1e6d9',
                  color: '#2a241d',
                  fontWeight: 600,
                  minHeight: '44px',
                  textDecoration: 'none'
                }}
              >
                {horse.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
}
