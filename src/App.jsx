// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LyricsProvider } from './context/LyricsContext';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import SongDetailsPage from './pages/SongDetailsPage';
import FavoritesPage from './pages/FavoritesPage';

const App = () => {
  return (
    <LyricsProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/song/:id" element={<SongDetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </LyricsProvider>
  );
};

export default App;
