import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ArticleCard from '../components/ArticleCard';
import { safeGet } from '../components/safeStorage';

const FAVORITES_KEY = 'fieldManualFavorites';
const PAGE_LINKS = {
  'daily-care': '/daily-care',
  'pre-ride': '/pre-ride',
  'post-ride': '/post-ride',
  'skin-and-legs': '/skin-and-legs',
  'environment': '/environment',
  'quick-reference': '/quick-reference',
};

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(safeGet(FAVORITES_KEY, []));

    function handleFavoritesUpdate() {
      setFavorites(safeGet(FAVORITES_KEY, []));
    }

    window.addEventListener('favoritesUpdated', handleFavoritesUpdate);
    return () => window.removeEventListener('favoritesUpdated', handleFavoritesUpdate);
  }, []);

  return (
    <Layout>
      <h1>Favorites</h1>
      <p>
        Your starred entries live here, organized so you can revisit key moments
        in seconds.
      </p>
      <ArticleCard title="Why Save Favorites?" eyebrow="Guide">
        <p>
          Use favorites for high-signal entries: sudden swelling, a training
          breakthrough, or a response to new footing. This becomes a fast
          reference when you need history in a hurry.
        </p>
      </ArticleCard>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
          {favorites.map(item => {
            const href = PAGE_LINKS[item.id];
            return (
              <li key={item.id} style={{ marginBottom: '12px' }}>
                {href ? (
                  <a
                    href={href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '10px 16px',
                      borderRadius: '999px',
                      border: '1px solid #dccfc1',
                      background: '#f1e6d9',
                      color: '#2a241d',
                      fontWeight: 600,
                      textDecoration: 'none'
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </Layout>
  );
}
