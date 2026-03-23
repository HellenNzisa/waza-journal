// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';

// Pages
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import SOS from './pages/SOS';
import Recap from './components/Recap';
import Home from './pages/Home';
import GoalSetter from './components/GoalSetter';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/goals" element={<GoalSetter />} />
        <Route path="/recap" element={<Recap />} />
        <Route path="/SOS" element={<SOS />} />
      </Routes>
    </Router>
  );
}

export default App;