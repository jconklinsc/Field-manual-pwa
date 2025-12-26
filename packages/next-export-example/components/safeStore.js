import { readJson, writeJson } from './storage';

const HORSE_KEY = 'fieldManualHorses';

export function loadSafeHorses() {
  const primary = readJson(HORSE_KEY, null);
  if (primary) return primary;

  const legacy = readJson('dio-fm-horses', null);
  if (legacy?.horses) {
    writeJson(HORSE_KEY, legacy.horses);
    return legacy.horses;
  }

  const legacyFlat = readJson('horses', null);
  if (legacyFlat) {
    writeJson(HORSE_KEY, legacyFlat);
    return legacyFlat;
  }

  return [];
}

export function saveSafeHorses(horses) {
  writeJson(HORSE_KEY, horses);
}
