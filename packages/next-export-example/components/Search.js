import { useMemo, useState } from 'react';
const {
  computePopularSearches,
  search,
} = require('../utils/searchUtils.cjs');

export default function Search({ data = [] }) {
  // SEARCH RULE: Single source of truth.
  // UI input value is the only query used for search/filtering.
  // Do not introduce submitted or derived query state.
  const [query, setQuery] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const suggestionListId = 'field-manual-search-suggestions';
  const searchMode = 'live'; // Live search on input changes.
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

  const maxResults = 8;
  const maxSuggestions = 5;
  const maxPopular = 6;

  const searchState = useMemo(
    () => search(query, data, { maxResults, maxSuggestions }),
    [data, maxResults, maxSuggestions, query]
  );
  const { results, suggestions, meta } = searchState;

  const popularSearches = useMemo(
    () => computePopularSearches(data, maxPopular),
    [data]
  );

  const handleSubmit = () => {
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
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!e.target.value.trim()) {
              setHasSubmitted(false);
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

      {searchMode === 'live' && meta.isEmpty && popularSearches.length > 0 && (
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
                  setQuery(title);
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

      {searchMode === 'live' && !meta.isEmpty && (
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
                    setQuery(title);
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

      {hasSubmitted && !meta.isEmpty && (
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
      {hasSubmitted && meta.isEmpty && (
        <p style={{ marginTop: '16px', color: '#9b4a1b' }}>
          Enter a search term to see results.
        </p>
      )}
    </div>
  );
}
