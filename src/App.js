import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Event from './pages/Event/Event';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
     <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/event" element={<Event />} />
              <Route path="/login" element={<Login />} />
            </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
