import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { loadSafeHorses } from '../components/safeStore';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const horses = loadSafeHorses();
    const favs = [];

    horses.forEach(horse => {
      horse.entries.forEach(entry => {
        if (entry.favorite) {
          favs.push({
            horseName: horse.name,
            ...entry
          });
        }
      });
    });

    setFavorites(
      favs.sort((a, b) => new Date(b.date) - new Date(a.date))
    );
  }, []);

  return (
    <Layout>
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul style={{ paddingLeft: '16px' }}>
          {favorites.map((item, idx) => (
            <li key={idx} style={{ marginBottom: '12px' }}>
              <strong>{item.horseName}</strong>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>
                {new Date(item.date).toLocaleDateString()} · {item.section}
              </div>
              <div>{item.text}</div>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
}
