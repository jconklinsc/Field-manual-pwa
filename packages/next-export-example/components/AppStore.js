import { createContext, useContext, useEffect, useState } from 'react';
import { readJson, writeJson } from './storage';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [horses, setHorses] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [notes, setNotes] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage
  useEffect(() => {
    setHorses(readJson('horses', []));
    setFavorites(readJson('favorites', []));
    setNotes(readJson('notes', []));
    setHydrated(true);
  }, []);

  // Persist
  useEffect(() => {
    if (!hydrated) return;
    writeJson('horses', horses);
  }, [horses]);

  useEffect(() => {
    if (!hydrated) return;
    writeJson('favorites', favorites);
  }, [favorites]);

  useEffect(() => {
    if (!hydrated) return;
    writeJson('notes', notes);
  }, [notes]);

  return (
    <AppContext.Provider
      value={{
        horses,
        setHorses,
        favorites,
        setFavorites,
        notes,
        setNotes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
