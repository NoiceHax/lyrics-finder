// src/components/SongCard.js
import React from 'react';
import { useLyrics } from '../context/LyricsContext';

const SongCard = ({ song }) => {
  const { addFavorite, favorites } = useLyrics();

  const isFavorite = favorites.some(
    (fav) => fav.title === song.title && fav.artist === song.artist
  );

  return (
    <div className="bg-white shadow rounded p-4 my-4">
      <h3 className="text-xl font-bold">{song.title}</h3>
      <p className="text-gray-700">{song.artist}</p>
      <pre className="p-2 rounded mt-2 overflow-auto">{song.lyrics}</pre>
      {isFavorite ? (
        <p className="mt-2 text-green-600 font-semibold">Already in favorites</p>
      ) : (
        <button 
          onClick={() => addFavorite(song)}
          className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
        >
          Add to Favorites
        </button>
      )}
    </div>
  );
};

export default SongCard;
