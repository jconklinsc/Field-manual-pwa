import { useMemo, useState } from 'react';

export default function Search({ data = [] }) {
  const [inputValue, setInputValue] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const suggestionListId = 'field-manual-search-suggestions';
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

  const normalizedQuery = normalizeForSearch(submittedQuery);
  const normalizedInput = normalizeForSearch(inputValue);
  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);
  const maxResults = 8;
  const maxSuggestions = 5;
  const maxPopular = 6;

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
    if (normalizedInput.length < 1) return [];

    return data
      .map((item) => {
        const title = item.title || '';
        const normalizedTitle = normalizeForSearch(title);
        let score = 0;

        if (normalizedTitle.startsWith(normalizedInput)) score += 3;
        if (normalizedTitle.includes(normalizedInput)) score += 1;

        return { title, score };
      })
      .filter(({ score, title }) => score > 0 && title)
      .sort((a, b) => b.score - a.score)
      .slice(0, maxSuggestions)
      .map(({ title }) => title);
  }, [data, normalizedInput]);

  const popularSearches = useMemo(
    () =>
      data
        .map((item) => item.title)
        .filter(Boolean)
        .slice(0, maxPopular),
    [data]
  );

  const handleSubmit = () => {
    const trimmed = inputValue.trim();
    setInputValue(trimmed);
    setSubmittedQuery(trimmed);
    setHasSubmitted(true);
  };

  return (
    <div style={{ marginBottom: '24px' }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        style={{ display: 'flex', gap: '12px', alignItems: 'center' }}
      >
        <input
          type="text"
          placeholder="Search the Draw It Out Field Manual..."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (!e.target.value.trim()) {
              setHasSubmitted(false);
              setSubmittedQuery('');
            }
          }}
          list={suggestionListId}
          style={{
            flex: 1,
            width: '100%',
            padding: '12px',
            fontSize: '16px',
            borderRadius: '999px',
            border: '1px solid #dccfc1',
            background: '#fffaf4',
            color: '#2a241d'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '12px 18px',
            borderRadius: '999px',
            border: 'none',
            background: '#78be20',
            color: '#2a241d',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 8px 16px rgba(42, 36, 29, 0.12)'
          }}
        >
          Search
        </button>
      </form>
      <datalist id={suggestionListId}>
        {suggestions.map((title) => (
          <option key={title} value={title} />
        ))}
      </datalist>

      {normalizedQuery.length === 0 && popularSearches.length > 0 && (
        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            borderRadius: '12px',
            border: '1px solid #e6d9c8',
            background: '#fffdf9',
          }}
        >
          <div style={{ fontWeight: 600, marginBottom: '8px' }}>
            Popular searches
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {popularSearches.map((title) => (
              <button
                key={title}
                type="button"
                onClick={() => {
                  setInputValue(title);
                  setSubmittedQuery(title);
                  setHasSubmitted(true);
                }}
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

      {normalizedInput.length > 0 && (
        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            borderRadius: '12px',
            border: '1px solid #e6d9c8',
            background: '#fffdf9',
          }}
        >
          <div style={{ fontWeight: 600, marginBottom: '8px' }}>
            Predictive matches
          </div>
          {suggestions.length > 0 ? (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {suggestions.map((title) => (
                <button
                  key={title}
                  type="button"
                  onClick={() => {
                    setInputValue(title);
                    setSubmittedQuery(title);
                    setHasSubmitted(true);
                  }}
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
          ) : (
            <p style={{ margin: 0, color: '#9b4a1b' }}>
              No predictive matches yet.
            </p>
          )}
        </div>
      )}

      {hasSubmitted && normalizedQuery.length > 0 && (
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
      {hasSubmitted && normalizedQuery.length === 0 && (
        <p style={{ marginTop: '16px', color: '#9b4a1b' }}>
          Enter a search term to see results.
        </p>
      )}
    </div>
  );
}
