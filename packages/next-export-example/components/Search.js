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
        <div style={{ marginTop: '16px' }}>
          {results.length === 0 ? (
            <p style={{ color: '#9b4a1b' }}>No results found.</p>
          ) : (
            results.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  display: 'block',
                  marginBottom: '12px',
                  padding: '16px',
                  borderRadius: '16px',
                  border: '1px solid #e6d9c8',
                  background: '#fffaf4',
                  color: '#2a241d',
                  textDecoration: 'none',
                  boxShadow: '0 12px 24px rgba(42, 36, 29, 0.08)',
                  minHeight: '56px'
                }}
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
