import { useState } from 'react';

export default function Search({ data = [] }) {
  const [query, setQuery] = useState('');
  const resultStyle = {
    display: 'block',
    padding: '14px 16px',
    borderRadius: '16px',
    border: '1px solid #e6d9c8',
    background: '#fffaf4',
    textDecoration: 'none',
    color: '#2a241d',
    boxShadow: '0 12px 24px rgba(42, 36, 29, 0.08)'
  };

  const normalizedQuery = query.trim().toLowerCase();
  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);
  const results = queryTokens.length > 0
    ? data.filter(item => {
        const haystack = [
          item.title,
          item.text,
          item.preview,
          item.keywords,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();

        return queryTokens.every(token => haystack.includes(token));
      })
    : [];

  return (
    <div style={{ marginBottom: '24px' }}>
      <input
        type="text"
        placeholder="Search the Draw It Out Field Manual..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.currentTarget.blur();
          }
        }}
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
        <div style={{ marginTop: '16px', display: 'grid', gap: '12px' }}>
          {results.length === 0 ? (
            <p style={{ color: '#9b4a1b' }}>No results found.</p>
          ) : (
            results.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={resultStyle}
              >
                <div style={{ fontSize: '16px', fontWeight: 600 }}>
                  {item.title}
                </div>
                <p style={{ margin: '4px 0 0', color: '#4a4036' }}>
                  {item.preview}
                </p>
              </a>
            ))
          )}
        </div>
      )}
    </div>
  );
}
