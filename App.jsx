import React, { useContext, useState } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import Login from './components/login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import { PlayerContext } from './context/PlayerContext';

const App = () => {
  const { audioRef, track, songsData } = useContext(PlayerContext);

  const [showLoginSignup, setShowLoginSignup] = useState(null); // null means neither login nor signup
  const [activePage, setActivePage] = useState('home'); // 'home' | 'search'

  return (
    <div className="h-screen bg-black text-white">
      <Navbar
        setShowLoginSignup={setShowLoginSignup}
        setActivePage={setActivePage}
      />

      {showLoginSignup === 'login' && (
        <Login setShowLoginSignup={setShowLoginSignup} />
      )}

      {showLoginSignup === 'signup' && (
        <Signup setShowLoginSignup={setShowLoginSignup} />
      )}

      {!showLoginSignup && (
        <>
          {activePage === 'search' ? (
            <Search />
          ) : (
            <>
              {songsData.length !== 0 && (
                <div className="h-[90%] flex">
                  <Sidebar />
                  <Display />
                </div>
              )}
              <Player />
            </>
          )}
        </>
      )}

      <audio ref={audioRef} src={track ? track.file : ''} preload="auto" />
    </div>
  );
};

export default App;
