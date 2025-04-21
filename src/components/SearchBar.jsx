// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';
import { useLyrics } from '../context/LyricsContext';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const { setSearchQuery, setLyrics } = useLyrics();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (input.length > 2) {
        try {
          const response = await fetch(`https://api.lyrics.ovh/suggest/${input}`);
          const data = await response.json();
          setSuggestions(data.data);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [input]);

  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setInput(`${suggestion.title} - ${suggestion.artist.name}`);
    setSuggestions([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let artist = '';
    let title = '';

    if (selectedSuggestion) {
      artist = selectedSuggestion.artist.name;
      title = selectedSuggestion.title;
    } else {
      const parts = input.split(' - ');
      if (parts.length === 2) {
        [title, artist] = parts;
      } else {
        alert('Please select a suggestion from the dropdown for accurate results.');
        return;
      }
    }

    setSearchQuery(`${title} - ${artist}`);

    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      const data = await response.json();
      console.log('API response:', data);
      if (data.lyrics) {
        const songData = {
          title,
          artist,
          lyrics: data.lyrics,
        };
        setLyrics(songData);
      } else {
        setLyrics(null);
      }
    } catch (error) {
      console.error('Error fetching lyrics:', error);
      setLyrics(null);
    }
    navigate('/search');
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for lyrics, e.g. 'Hello - Adele'"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setSelectedSuggestion(null);
          }}
          required
        />
        <button type="submit">Search</button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions-dropdown" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {suggestions.slice(0, 5).map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{ cursor: 'pointer', padding: '5px 10px', borderBottom: '1px solid #ddd' }}
            >
              {suggestion.title} - {suggestion.artist.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
