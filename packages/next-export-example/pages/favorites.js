import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ArticleCard from '../components/ArticleCard';
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
      <p>
        Your starred Rory + Nudge entries live here, organized so you can
        revisit key moments in seconds.
      </p>
      <ArticleCard title="Why Save Favorites?" eyebrow="In-depth article">
        <p>
          Use favorites for high-signal entries: sudden swelling, a training
          breakthrough, or a response to new footing. This becomes a fast
          reference when you need history in a hurry.
        </p>
      </ArticleCard>

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
