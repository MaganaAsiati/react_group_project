import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchMissions } from './Redux/missions/missions';
import Navbar from './components/Navbar/Navbar';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions/Missions';
import Profile from './components/Profile/Profile';
import Error from './components/Error/Error';

function App() {
  const dispatch = useDispatch();
  // Call dispatch fetch only once on mount
  useEffect(() => dispatch(fetchMissions()), []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
