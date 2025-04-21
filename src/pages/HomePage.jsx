// src/pages/HomePage.js
import React from 'react';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <div className="home-page p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Lyric Finder</h1>
      <SearchBar />
    </div>
  );
};

export default HomePage;
