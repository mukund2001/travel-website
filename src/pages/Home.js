import React from 'react';
import Hero from '../components/Hero'; // Hero section component

const Home = () => (
  <div style={{ backgroundColor: '#f0f0f0', color: '#333', textAlign: 'center', padding: '2rem' }}>
    <Hero />
    <h2>Welcome to the Best Travel Experience</h2>
    <p>Explore the world with personalized plans!</p>
  </div>
);

export default Home;
