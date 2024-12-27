import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import StartPlanning from './pages/StartPlanning';
import Destinations from './pages/Destinations';
import Blog from './pages/Blog';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Login from './pages/Login';

const App = () => (
  <Router>
    <GlobalStyles />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/start-planning" element={<StartPlanning />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
