import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ArticleCard from '../components/ArticleCard';
import { loadSafeHorses, saveSafeHorses } from '../components/safeStore';

export default function HorsesPage() {
  const [horses, setHorses] = useState([]);
  const [name, setName] = useState('');

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
    if (!name.trim()) return;

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
  }

  return (
    <Layout>
      <h1>Horses</h1>
      <p>
        Track each horse as an individual. Dedicated logs help you spot
        patterns in workload, recovery, and behavior.
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
          onChange={e => setName(e.target.value)}
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
