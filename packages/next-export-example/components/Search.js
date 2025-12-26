import { useState } from 'react';

export default function Search({ data = [] }) {
  const [query, setQuery] = useState('');

  const normalizedQuery = query.trim().toLowerCase();
  const results = normalizedQuery.length > 0
    ? data.filter(item => {
        const text = `${item.text || ''} ${item.preview || ''}`.toLowerCase();
        const title = (item.title || '').toLowerCase();
        return text.includes(normalizedQuery) || title.includes(normalizedQuery);
      })
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
          borderRadius: '999px',
          border: '1px solid #dccfc1',
          background: '#fffaf4',
          color: '#2a241d'
        }}
      />

      {normalizedQuery.length > 0 && (
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
                  fontWeight: '600',
                  color: '#2a241d'
                }}
              >
                {item.title}
              </div>
              <p style={{ margin: '4px 0 0', color: '#4a4036' }}>
                {item.preview}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
