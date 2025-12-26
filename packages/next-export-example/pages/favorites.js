import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ArticleCard from '../components/ArticleCard';
import { loadSafeHorses } from '../components/safeStore';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
    setFavorites(stored);
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
          {favorites.map(item => {
            const href = PAGE_LINKS[item.id];
            return (
              <li key={item.id} style={{ marginBottom: '12px' }}>
                {href ? <a href={href}>{item.label}</a> : <span>{item.label}</span>}
              </li>
            );
          })}
        </ul>
      )}
    </Layout>
  );
}
