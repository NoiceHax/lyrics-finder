// src/components/SongList.js
import React from 'react';
import { useLyrics } from '../context/LyricsContext';
import SongCard from './SongCard';

const SongList = () => {
  const { searchQuery, lyrics } = useLyrics();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Results for "{searchQuery}"</h2>
      {lyrics ? (
        <SongCard song={lyrics} />
      ) : (
        <p className="text-red-600">No lyrics found. Try a different search!</p>
      )}
    </div>
  );
};

export default SongList;
