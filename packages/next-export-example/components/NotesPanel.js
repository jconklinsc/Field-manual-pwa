import { useEffect, useState } from 'react';

export default function NotesPanel({ id, title }) {
  const [note, setNote] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteLabel = title || id;
  const favoritesKey = 'fieldManualFavorites';

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedNote = window.localStorage.getItem(`dio-fm-notes-${id}`);
    if (storedNote) setNote(storedNote);

    const favRaw = window.localStorage.getItem(favoritesKey);
    if (favRaw) {
      try {
        const favs = JSON.parse(favRaw);
        setIsFavorite(favs.some(item => item.id === id));
      } catch {}
    }
  }, [id]);

  const handleNoteChange = (e) => {
    const v = e.target.value;
    setNote(v);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(`dio-fm-notes-${id}`, v);
    }
  };

  const toggleFavorite = () => {
    if (typeof window === 'undefined') return;

    const favRaw = window.localStorage.getItem(favoritesKey);
    let favs = [];
    if (favRaw) {
      try {
        favs = JSON.parse(favRaw);
      } catch {}
    }

    let nextFavs;
    if (isFavorite) {
      nextFavs = favs.filter((item) => item.id !== id);
      setIsFavorite(false);
    } else {
      nextFavs = [
        ...favs.filter((item) => item.id !== id),
        { id, label: favoriteLabel }
      ];
      setIsFavorite(true);
    }

    window.localStorage.setItem(favoritesKey, JSON.stringify(nextFavs));
  };

  return (
    <section
      style={{
        marginTop: '32px',
        padding: '16px 14px',
        borderRadius: '10px',
        border: '1px solid #e6d9c8',
        background: '#fffaf4'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px'
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: '16px',
            fontWeight: 600
          }}
        >
          Your Notes & Favorites
        </h3>
        <button
          onClick={toggleFavorite}
          style={{
            background: 'none',
            color: isFavorite ? '#78be20' : '#6b6256',
            border: 'none',
            padding: 0,
            fontSize: '14px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span style={{ fontSize: '16px' }}>{isFavorite ? '★' : '☆'}</span>
          <span>{isFavorite ? 'Favorited' : 'Favorite'}</span>
        </button>
      </div>

      <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#6b6256' }}>
        These notes are saved on this device for “{title}”.
      </p>

      <textarea
        value={note}
        onChange={handleNoteChange}
        rows={4}
        style={{
          width: '100%',
          borderRadius: '8px',
          border: '1px solid #dccfc1',
          padding: '8px 10px',
          fontSize: '14px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          resize: 'vertical'
        }}
        placeholder="Jot down what you observed, what you changed, or what to check next time..."
      />
    </section>
  );
}
