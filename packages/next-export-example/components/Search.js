import { useMemo, useState } from 'react';

export default function Search({ data = [] }) {
  const [query, setQuery] = useState('');
  const normalizeForSearch = (value) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
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

  const normalizedQuery = normalizeForSearch(query);
  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);
  const maxResults = 8;
  const maxSuggestions = 5;

  const results = useMemo(() => {
    if (queryTokens.length === 0) return [];

    return data
      .map((item) => {
        const haystack = normalizeForSearch(
          [
            item.title,
            item.text,
            item.preview,
            item.keywords,
          ]
            .filter(Boolean)
            .join(' ')
        );

        let score = 0;
        queryTokens.forEach((token) => {
          if (haystack.includes(token)) score += 1;
        });

        const title = normalizeForSearch(item.title || '');
        if (title.startsWith(normalizedQuery)) score += 2;
        if (title.includes(normalizedQuery)) score += 1;

        return { item, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, maxResults)
      .map(({ item }) => item);
  }, [data, normalizedQuery, queryTokens]);

  const suggestions = useMemo(() => {
    if (normalizedQuery.length < 2) return [];

    return data
      .map((item) => {
        const title = item.title || '';
        const normalizedTitle = normalizeForSearch(title);
        let score = 0;

        if (normalizedTitle.startsWith(normalizedQuery)) score += 3;
        if (normalizedTitle.includes(normalizedQuery)) score += 1;

        return { title, score };
      })
      .filter(({ score, title }) => score > 0 && title)
      .sort((a, b) => b.score - a.score)
      .slice(0, maxSuggestions)
      .map(({ title }) => title);
  }, [data, normalizedQuery]);

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
          {suggestions.length > 0 && (
            <div
              style={{
                marginTop: '8px',
                padding: '12px',
                borderRadius: '12px',
                border: '1px solid #e6d9c8',
                background: '#fffdf9',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '8px' }}>
                Suggestions
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {suggestions.map((title) => (
                  <button
                    key={title}
                    type="button"
                    onClick={() => setQuery(title)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '999px',
                      border: '1px solid #dccfc1',
                      background: '#fffaf4',
                      cursor: 'pointer',
                      fontWeight: 600,
                      color: '#2a241d',
                    }}
                  >
                    {title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
