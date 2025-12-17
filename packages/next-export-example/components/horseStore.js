const KEY = 'fieldManualHorses';

export function loadHorses() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveHorses(horses) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify(horses));
}

export function makeId() {
  return String(Date.now());
}
