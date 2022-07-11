import React from 'react';
import Header from './components/Header/Header'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap"
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Search from './pages/Search';
import Nav from './components/Nav/Nav';





function App() {
  return (
    <Container>
      <Nav></Nav>
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/search" element={<Search />} />
        </Routes>
    </Container>
  );
}

export default App;
