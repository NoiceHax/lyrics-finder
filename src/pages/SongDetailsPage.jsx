// src/pages/SongDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Changed from useHistory to useNavigate
import { useLyrics } from '../context/LyricsContext';

const SongDetailsPage = () => {
  const { id } = useParams(); // Fetching the song ID from the URL
  const { addFavorite } = useLyrics();
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // use useNavigate hook

  useEffect(() => {
    // Simulating API fetch to get lyrics and song details
    const fetchSongDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://lyricsovh.api.letscode.com/v1/${id}`);
        const data = await response.json();
        
        if (data.lyrics) {
          setSong(data);
        } else {
          setSong(null);
        }
      } catch (error) {
        console.error('Error fetching song details:', error);
        setSong(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSongDetails();
  }, [id]);

  const handleAddFavorite = () => {
    if (song) {
      addFavorite(song);
      alert('Song added to favorites!');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="song-details-page">
      {song ? (
        <>
          <h2>{song.title}</h2>
          <h3>{song.artist}</h3>
          <pre>{song.lyrics}</pre>
          <button onClick={handleAddFavorite}>Add to Favorites</button>
          <button onClick={() => navigate('/favorites')}>Go to Favorites</button>
        </>
      ) : (
        <p>Song not found!</p>
      )}
    </div>
  );
};

export default SongDetailsPage;
