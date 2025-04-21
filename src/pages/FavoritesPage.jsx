// src/pages/FavoritesPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLyrics } from '../context/LyricsContext';

const FavoritesPage = () => {
  const { favorites, setSearchQuery } = useLyrics();
  const navigate = useNavigate();

  const handleFavoriteClick = (song) => {
    const query = `${song.title} - ${song.artist}`;
    setSearchQuery(query);
    navigate('/search');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Favorite Songs</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorites added yet.</p>
      ) : (
        <ul className="space-y-4">
          {favorites.map((song, index) => (
            <li key={index}>
              <button
                onClick={() => handleFavoriteClick(song)}
                className="w-full text-left bg-white shadow rounded px-4 py-2 hover:bg-blue-50 transition"
              >
                <span className="font-semibold">{song.title}</span> - {song.artist}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;
