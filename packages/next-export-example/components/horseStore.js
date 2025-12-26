import { readJson, writeJson } from './storage';

const KEY = 'fieldManualHorses';

export function loadHorses() {
  const parsed = readJson(KEY, []);
  return Array.isArray(parsed) ? parsed : [];
}

export function saveHorses(horses) {
  writeJson(KEY, horses);
}

export function makeId() {
  return String(Date.now());
}
