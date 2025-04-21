// src/context/LyricsContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context for lyrics
const LyricsContext = createContext();

export const useLyrics = () => useContext(LyricsContext);

export const LyricsProvider = ({ children }) => {
  const [lyrics, setLyrics] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (song) => {
    if (!favorites.some(fav => fav.title === song.title && fav.artist === song.artist)) {
      setFavorites([...favorites, song]);
    }
  };

  return (
    <LyricsContext.Provider
      value={{
        lyrics,
        setLyrics,
        searchQuery,
        setSearchQuery,
        favorites,
        addFavorite,
      }}
    >
      {children}
    </LyricsContext.Provider>
  );
};
