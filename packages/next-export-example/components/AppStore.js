import { createContext, useContext, useEffect, useState } from 'react';
import { safeGet, safeSet } from './safeStorage';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [horses, setHorses] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [notes, setNotes] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage
  useEffect(() => {
    setHorses(safeGet('horses', []));
    setFavorites(safeGet('favorites', []));
    setNotes(safeGet('notes', []));
  }, []);

  // Persist
  useEffect(() => {
    safeSet('horses', horses);
  }, [horses]);

  useEffect(() => {
    safeSet('favorites', favorites);
  }, [favorites]);

  useEffect(() => {
    safeSet('notes', notes);
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
