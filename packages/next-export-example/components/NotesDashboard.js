import { useEffect, useState } from 'react';

export default function NotesDashboard() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');

  // Load saved notes
  useEffect(() => {
    const saved = localStorage.getItem('fieldManualNotes');
    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }, []);

  // Save notes automatically
  useEffect(() => {
    localStorage.setItem('fieldManualNotes', JSON.stringify(notes));
  }, [notes]);

  function addNote() {
    if (!text.trim()) return;

    setNotes([
      {
        id: Date.now(),
        text,
        createdAt: new Date().toISOString(),
      },
      ...notes,
    ]);

    setText('');
  }

  function deleteNote(id) {
    setNotes(notes.filter(n => n.id !== id));
  }

  return (
    <section style={{ marginTop: '32px' }}>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Write a note..."
        rows={4}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          resize: 'vertical',
        }}
      />

      <button
        onClick={addNote}
        style={{
          marginTop: '12px',
          padding: '10px 16px',
          background: '#0f1111',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Add Note
      </button>

      <ul style={{ marginTop: '24px', padding: 0 }}>
        {notes.map(note => (
          <li
            key={note.id}
            style={{
              listStyle: 'none',
              padding: '12px',
              marginBottom: '12px',
              background: '#f7f7f7',
              borderRadius: '6px',
            }}
          >
            <div style={{ whiteSpace: 'pre-wrap' }}>{note.text}</div>

            <button
              onClick={() => deleteNote(note.id)}
              style={{
                marginTop: '8px',
                background: 'none',
                border: 'none',
                color: '#c00',
                cursor: 'pointer',
                fontSize: '14px',
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
