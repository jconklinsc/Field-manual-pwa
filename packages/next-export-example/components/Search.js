import { useState } from 'react';

export default function Search({ data }) {
  const [query, setQuery] = useState('');

  const results = query.length > 1
    ? data.filter(item =>
        item.text.toLowerCase().includes(query.toLowerCase()) ||
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div style={{ marginBottom: '24px' }}>
      <input
        type="text"
        placeholder="Search the Field Manual..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc'
        }}
      />

      {query.length > 1 && (
        <div style={{ marginTop: '16px' }}>
          {results.length === 0 && (
            <p>No matches found.</p>
          )}

          {results.map((item) => (
            <div key={item.href} style={{ marginBottom: '16px' }}>
              <a
                href={item.href}
                style={{
                  fontSize: '16px',
                  textDecoration: 'underline',
                  fontWeight: '600'
                }}
              >
                {item.title}
              </a>
              <p style={{ marginTop: '4px' }}>{item.preview}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
