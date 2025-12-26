import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ArticleCard from '../components/ArticleCard';
import { loadSafeHorses, saveSafeHorses } from '../components/safeStore';

export default function HorsesPage() {
  const [horses, setHorses] = useState([]);
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  function createHorseId() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
  }

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
  }

  return (
    <Layout>
      <h1>Horses</h1>
      <p>
        Track Rory and Nudge as individuals. Each horse has a dedicated log so
        you can spot patterns in workload, recovery, and behavior.
      </p>
      <ArticleCard title="Build a Record" eyebrow="In-depth article">
        <p>
          Add horses by name, then use the quick log prompts in each section to
          capture short updates. Small daily notes add up to a clear timeline.
        </p>
      </ArticleCard>

      <div style={{ marginBottom: '16px' }}>
        <input
          value={name}
          onChange={e => {
            setName(e.target.value);
            if (error) setError('');
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
            padding: '8px 14px',
            borderRadius: '999px',
            background: '#78be20',
            color: '#1f2a10',
            border: 'none',
            fontWeight: 600
          }}
        >
          Add
        </button>
      </div>
      {error && (
        <p style={{ color: '#9b4a1b', marginTop: '-8px' }}>{error}</p>
      )}

      {horses.length === 0 ? (
        <p>No horses yet. Add your current string to get started.</p>
      ) : (
        <ul>
          {horses.map(horse => (
            <li key={horse.id} style={{ marginBottom: '8px' }}>
              <a href={`/horses/${horse.id}`}>{horse.name}</a>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
}
