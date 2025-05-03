import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import { AppProvider } from './context/AppContext'; // ✅ uses your existing context
import KnowhereApp from './pages/knowhere/KnowhereApp';
import DestinationScroller from './components/DestinationScroller'; // ✅ component in /components

function App() {
  return (
    <AppProvider>
      <div className="app-wrapper">
        <header className="marvel-header">
          <img
            src="/src/assets/other/marvel-logo-wallpaper.webp"
            alt="Marvel Logo Background"
            className="background-img"
          />
          <div className="overlay">
            <h1>CineVerse Travel Co.</h1>
            <p>Book a trip across the Marvel Cinematic Universe.</p>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/knowhere">Knowhere</Link>
              {/* Later: Map through destinations */}
            </nav>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h2>Destinations</h2>
                  <DestinationScroller />
                </>
              }
            />
            <Route path="/knowhere" element={<KnowhereApp />} />
          </Routes>
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
