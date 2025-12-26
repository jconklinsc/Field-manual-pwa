import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ArticleCard from '../components/ArticleCard';

const FAVORITES_KEY = 'fieldManualFavorites';
const PAGE_LINKS = {
  'daily-care': '/daily-care',
  'pre-ride': '/pre-ride',
  'post-ride': '/post-ride',
  'skin-and-legs': '/skin-and-legs',
  environment: '/environment',
  'quick-reference': '/quick-reference',
  'horse-health-terms': '/horse-health-terms'
};

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
        Your starred pages live here, organized so you can jump back to what
        matters most.
      </p>
      <ArticleCard title="Why Save Favorites?" eyebrow="In-depth article">
        <p>
          Use favorites to keep high-importance pages close. It becomes a fast
          reference when you need guidance in a hurry.
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
