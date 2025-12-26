import { useEffect, useMemo, useState } from 'react';

const NOTES_KEY = 'fieldManualNotes';
const FAV_KEY = 'fieldManualFavorites';

export default function NotesDashboard() {
  const [notes, setNotes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const n = JSON.parse(localStorage.getItem(NOTES_KEY) || '[]');
      setNotes(Array.isArray(n) ? n : []);
    } catch {
      setNotes([]);
    }
    try {
      const f = JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
      setFavorites(Array.isArray(f) ? f : []);
    } catch {
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  }, [notes]);

  function addNote() {
    const trimmed = text.trim();
    if (!trimmed) {
      setError('Write a note before saving.');
      return;
    }
    const next = [
      { id: Date.now(), text: trimmed, date: new Date().toISOString() },
      ...notes,
    ];
    setNotes(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem(NOTES_KEY, JSON.stringify(next));
    }
    setText('');
    setError('');
  }

  function deleteNote(id) {
    setNotes(notes.filter(n => n.id !== id));
  }

  function exportData() {
    const payload = {
      notes,
      favorites,
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json',
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'field-manual-notes.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  const filteredNotes = useMemo(() => {
    if (!query.trim()) return notes;
    const q = query.toLowerCase();
    return notes.filter(n => n.text.toLowerCase().includes(q));
  }, [notes, query]);

  return (
    <section style={{ marginTop: '24px' }}>
      {favorites.length > 0 && (
        <section style={{ marginBottom: '20px' }}>
          <h3>Favorites</h3>
          <ul>
            {favorites.map(f => (
              <li key={f.id}>{f.label}</li>
            ))}
          </ul>
        </section>
      )}

      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search notes…"
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '10px',
          border: '1px solid #dccfc1',
          marginBottom: '12px',
        }}
      />

      <textarea
        id="notes-input"
        value={text}
        onChange={e => {
          setText(e.target.value);
          if (error) setError('');
        }}
        placeholder="Write a note…"
        rows={4}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          borderRadius: '10px',
          border: '1px solid #dccfc1',
        }}
      />

      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <button
          onClick={addNote}
          style={{
            padding: '10px 14px',
            background: '#78be20',
            color: '#1f2a10',
            border: 'none',
            borderRadius: '999px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Add Note
        </button>

        <button
          onClick={exportData}
          style={{
            padding: '10px 14px',
            background: '#fffaf4',
            border: '1px solid #dccfc1',
            borderRadius: '999px',
            fontWeight: 600,
          }}
        >
          Export
        </button>
      </div>
      {error && <p style={{ color: '#9b4a1b', marginTop: '8px' }}>{error}</p>}

      <ul style={{ marginTop: '24px', padding: 0 }}>
        {filteredNotes.map(n => (
          <li
            key={n.id}
            style={{
              listStyle: 'none',
              background: '#fffaf4',
              padding: '12px',
              marginBottom: '10px',
              borderRadius: '12px',
              border: '1px solid #e6d9c8',
            }}
          >
            <div style={{ whiteSpace: 'pre-wrap' }}>{n.text}</div>
            <button
              onClick={() => deleteNote(n.id)}
              style={{
                marginTop: '6px',
                padding: '6px 12px',
                borderRadius: '999px',
                border: '1px solid #e6d9c8',
                background: '#fff0e6',
                color: '#9b4a1b',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
