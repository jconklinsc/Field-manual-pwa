const HORSE_KEY = 'fieldManualHorses';

function safeParse(raw, fallback) {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function loadSafeHorses() {
  if (typeof window === 'undefined') return [];

  const primary = safeParse(localStorage.getItem(HORSE_KEY), null);
  if (primary) return primary;

  const legacy = safeParse(localStorage.getItem('dio-fm-horses'), null);
  if (legacy?.horses) {
    localStorage.setItem(HORSE_KEY, JSON.stringify(legacy.horses));
    return legacy.horses;
  }

  const legacyFlat = safeParse(localStorage.getItem('horses'), null);
  if (legacyFlat) {
    localStorage.setItem(HORSE_KEY, JSON.stringify(legacyFlat));
    return legacyFlat;
  }

  return [];
}

export function saveSafeHorses(horses) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(HORSE_KEY, JSON.stringify(horses));
}
