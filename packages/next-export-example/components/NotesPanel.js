import { useEffect, useState } from 'react';

export default function NotesPanel({ id, title }) {
  const [note, setNote] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedNote = window.localStorage.getItem(`dio-fm-notes-${id}`);
    if (storedNote) setNote(storedNote);

    const favRaw = window.localStorage.getItem('dio-fm-favorites');
    if (favRaw) {
      try {
        const favs = JSON.parse(favRaw);
        setIsFavorite(favs.includes(id));
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

    const favRaw = window.localStorage.getItem('dio-fm-favorites');
    let favs = [];
    if (favRaw) {
      try {
        favs = JSON.parse(favRaw);
      } catch {}
    }

    let nextFavs;
    if (isFavorite) {
      nextFavs = favs.filter((x) => x !== id);
      setIsFavorite(false);
    } else {
      nextFavs = [...new Set([...favs, id])];
      setIsFavorite(true);
    }

    window.localStorage.setItem('dio-fm-favorites', JSON.stringify(nextFavs));
  };

  return (
    <section
      style={{
        marginTop: '32px',
        padding: '16px 14px',
        borderRadius: '10px',
        border: '1px solid #e5e5e5',
        background: '#f7f8f8'
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
            background: isFavorite ? '#78be20' : '#ffffff',
            color: isFavorite ? '#ffffff' : '#0f1111',
            borderRadius: '999px',
            border: '1px solid #78be20',
            padding: '4px 10px',
            fontSize: '13px',
            cursor: 'pointer'
          }}
        >
          {isFavorite ? '★ Favorited' : '☆ Favorite'}
        </button>
      </div>

      <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#586063' }}>
        These notes are saved on this device for “{title}”.
      </p>

      <textarea
        value={note}
        onChange={handleNoteChange}
        rows={4}
        style={{
          width: '100%',
          borderRadius: '8px',
          border: '1px solid #d1d5db',
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
