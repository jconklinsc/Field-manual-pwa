import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const KEY = 'fieldManualFavorites';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(KEY) || '[]');
      setFavorites(stored);
    } catch {
      setFavorites([]);
    }
  }, []);

  return (
    <Layout>
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet. Star sections to save them here.</p>
      ) : (
        <ul style={{ lineHeight: '1.8' }}>
          {favorites.map(f => (
            <li key={f.id}>
              <a href={`/${f.id}`}>{f.label}</a>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
}
