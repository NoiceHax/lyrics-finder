// src/components/SongDetails.js
import React, { useEffect } from 'react';
import { useLyrics } from '../context/LyricsContext';

const SongDetails = () => {
  const { lyrics } = useLyrics();

  useEffect(() => {
    // Logic to handle any API call or fetch operation
  }, []);

  return (
    <div className="song-details">
      <h2>Song Lyrics</h2>
      <pre>{lyrics}</pre>
    </div>
  );
};

export default SongDetails;
