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
    const load = () => {
      try {
        const stored = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
        setFavorites(stored);
      } catch {
        setFavorites([]);
      }
    };

    load();
    window.addEventListener('storage', load);
    window.addEventListener('focus', load);
    window.addEventListener('favoritesUpdated', load);
    return () => {
      window.removeEventListener('storage', load);
      window.removeEventListener('focus', load);
      window.removeEventListener('favoritesUpdated', load);
    };
  }, []);

  return (
    <Layout>
      <h1>Favorites</h1>
      <p>
        Your starred pages live here, organized so you can jump back to what
        matters most.
      </p>
      <ArticleCard
        title="Why Save Favorites?"
        eyebrow="In-depth article"
        href="/articles#why-save-favorites"
      >
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
                      minHeight: '44px',
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
