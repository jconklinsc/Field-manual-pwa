import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [horses, setHorses] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [notes, setNotes] = useState([]);

  // Load from localStorage
  useEffect(() => {
    setHorses(JSON.parse(localStorage.getItem('horses') || '[]'));
    setFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
    setNotes(JSON.parse(localStorage.getItem('notes') || '[]'));
  }, []);

  // Persist
  useEffect(() => {
    localStorage.setItem('horses', JSON.stringify(horses));
  }, [horses]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
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
