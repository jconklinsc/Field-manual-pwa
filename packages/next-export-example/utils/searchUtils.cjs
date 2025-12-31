const normalizeForSearch = (value = '') =>
  String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const computeSearchResults = (data = [], normalizedQuery = '', maxResults = 8) => {
  if (!normalizedQuery) return [];
  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);
  if (queryTokens.length === 0) return [];

  return data
    .map((item) => {
      const haystack = normalizeForSearch(
        [item.title, item.text, item.preview, item.keywords].filter(Boolean).join(' ')
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
};

const computeSuggestions = (data = [], normalizedQuery = '', maxSuggestions = 5) => {
  if (!normalizedQuery) return [];

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
};

const computePopularSearches = (data = [], maxPopular = 6) =>
  data
    .map((item) => item.title)
    .filter(Boolean)
    .slice(0, maxPopular);

const search = (
  query = '',
  data = [],
  { maxResults = 8, maxSuggestions = 5 } = {}
) => {
  const normalizedQuery = normalizeForSearch(query);
  return {
    results: computeSearchResults(data, normalizedQuery, maxResults),
    suggestions: computeSuggestions(data, normalizedQuery, maxSuggestions),
    meta: {
      normalizedQuery,
      isEmpty: normalizedQuery.length === 0,
    },
  };
};

module.exports = {
  normalizeForSearch,
  computeSearchResults,
  computeSuggestions,
  computePopularSearches,
  search,
};
