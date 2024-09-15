

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ships from './pages/Ships';
import ShipDetails from './pages/ShipDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ships />} />
        <Route path="/ships/:id" element={<ShipDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

