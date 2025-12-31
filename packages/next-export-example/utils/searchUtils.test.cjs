const assert = require('assert');
const searchDataModule = require('../data/searchData');
const searchData = searchDataModule.default || searchDataModule;
const { search } = require('./searchUtils.cjs');

const runScenario = (name, fn) => {
  try {
    fn();
    console.log(`PASS: ${name}`);
  } catch (error) {
    console.error(`FAIL: ${name}`);
    throw error;
  }
};

runScenario('Empty input shows guidance state', () => {
  const { results, meta } = search('', searchData);
  assert.strictEqual(meta.isEmpty, true);
  assert.deepStrictEqual(results, []);
});

runScenario('Single character typing updates results live', () => {
  const { results } = search('d', searchData);
  assert.ok(results.length > 0);
});

runScenario('Multi-word input narrows results', () => {
  const { results } = search('daily care', searchData);
  assert.ok(results.some((item) => item.title.toLowerCase().includes('daily')));
});

runScenario('No-match query shows no results', () => {
  const { results } = search('qzxjkv', searchData);
  assert.strictEqual(results.length, 0);
});

runScenario('Clear input restores guidance state', () => {
  const { suggestions, meta } = search(' ', searchData);
  assert.strictEqual(meta.isEmpty, true);
  assert.deepStrictEqual(suggestions, []);
});
