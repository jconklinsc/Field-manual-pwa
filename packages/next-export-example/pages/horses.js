import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { loadSafeHorses, saveSafeHorses } from '../components/safeStore';

export default function HorsesPage() {
  const [horses, setHorses] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    setHorses(loadSafeHorses());
  }, []);

  function addHorse() {
    if (!name.trim()) return;

    const updated = [
      ...horses,
      {
        id: crypto.randomUUID(),
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

      <div style={{ marginBottom: '16px' }}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Horse name"
          style={{
            padding: '8px',
            marginRight: '8px',
            width: '200px'
          }}
        />
        <button onClick={addHorse}>Add</button>
      </div>

      {horses.length === 0 ? (
        <p>No horses yet.</p>
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
