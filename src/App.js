import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import Error from './pages/Error';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Rockets />} exact />
      <Route path="/rockets" element={<Rockets />} exact />
      <Route path="/missions" element={<Missions />} exact />
      <Route path="/my-profile" element={<MyProfile />} exact />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);

export default App;
