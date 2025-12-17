import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { loadHorses, saveHorses, makeId } from '../components/horseStore';

export default function Horses() {
  const [horses, setHorses] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    setHorses(loadHorses());
  }, []);

  function addHorse() {
    const trimmed = name.trim();
    if (!trimmed) return;

    const updated = [
      ...horses,
      {
        id: makeId(),
        name: trimmed,
        entries: []
      }
    ];

    setHorses(updated);
    saveHorses(updated);
    setName('');
  }

  function removeHorse(id) {
    const updated = horses.filter(h => h.id !== id);
    setHorses(updated);
    saveHorses(updated);
  }

  return (
    <Layout>
      <h1>Horses</h1>
      <p style={{ color: '#555' }}>
        Keep logs per horse. Everything is saved on this device.
      </p>

      <div style={{ display: 'flex', gap: '10px', margin: '16px 0' }}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Add horse name"
          style={{
            flex: 1,
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            fontSize: '16px'
          }}
        />
        <button
          onClick={addHorse}
          style={{
            padding: '10px 14px',
            borderRadius: '6px',
            border: 'none',
            background: '#0f1111',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          Add
        </button>
      </div>

      {horses.length === 0 ? (
        <p>No horses yet. Add your first horse above.</p>
      ) : (
        <ul style={{ lineHeight: '1.8', paddingLeft: '18px' }}>
          {horses.map(h => (
            <li key={h.id} style={{ marginBottom: '10px' }}>
              <a href={`/horses/${h.id}`} style={{ fontWeight: 700 }}>
                {h.name}
              </a>
              <span style={{ color: '#777', marginLeft: '8px' }}>
                ({h.entries.length} entries)
              </span>

              <button
                onClick={() => removeHorse(h.id)}
                style={{
                  marginLeft: '12px',
                  background: 'none',
                  border: 'none',
                  color: '#c00',
                  cursor: 'pointer'
                }}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
}
