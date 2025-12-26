import { safeGet, safeSet } from './safeStorage';

const HORSE_KEY = 'fieldManualHorses';

export function loadSafeHorses() {
  if (typeof window === 'undefined') return [];

  const primary = safeGet(HORSE_KEY, null);
  if (primary) return primary;

  const legacy = safeGet('dio-fm-horses', null);
  if (legacy?.horses) {
    safeSet(HORSE_KEY, legacy.horses);
    return legacy.horses;
  }

  const legacyFlat = safeGet('horses', null);
  if (legacyFlat) {
    safeSet(HORSE_KEY, legacyFlat);
    return legacyFlat;
  }

  return [];
}

export function saveSafeHorses(horses) {
  if (typeof window === 'undefined') return false;
  return safeSet(HORSE_KEY, horses);
}
