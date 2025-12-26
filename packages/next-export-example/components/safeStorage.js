const memoryStore = {};

export function safeParse(raw, fallback) {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function safeGet(key, fallback) {
  if (typeof window === 'undefined') return fallback;
  try {
    const value = window.localStorage.getItem(key);
    if (value !== null) return safeParse(value, fallback);
  } catch {}
  try {
    const value = window.sessionStorage.getItem(key);
    if (value !== null) return safeParse(value, fallback);
  } catch {}
  return key in memoryStore ? memoryStore[key] : fallback;
}

export function safeSet(key, value) {
  if (typeof window === 'undefined') return false;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
  }
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    memoryStore[key] = value;
    return true;
  }
}
