import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  height: 100vh;
  background: url('https://25174313.fs1.hubspotusercontent-eu1.net/hub/25174313/hubfs/assets_singsaver/Travel-Agency.png?width=2040&name=Travel-Agency.png') center center/cover; /* Set background image */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  position: relative;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  }

  .buttons {
    display: flex;
    gap: 1rem;

    button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      background-color: #ff7eb3;
      color: white;
      font-weight: bold;
      transition: background-color 0.3s;

      &:hover {
        background-color: #ff558c;
      }
    }
  }

  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('your-video-thumbnail.jpg') center center/cover; /* You can optionally add a thumbnail for the video background */
    z-index: -1;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    visibility: ${({ showModal }) => (showModal ? 'visible' : 'hidden')};
    opacity: ${({ showModal }) => (showModal ? '1' : '0')};
    transition: opacity 0.3s ease;
  }

  iframe {
    width: 80%;
    height: 60%;
    border: none;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 2rem;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <HeroSection showModal={showModal}>
      <h1>Find the Perfect Place to Go</h1>
      <p>Receive personalized recommendations for activities, hotels, and more.</p>
      <div className="buttons">
        <Link to="/start-planning">
          <button>Start Planning</button>
        </Link>
        <button onClick={handleOpenModal}>Watch the Video</button>
      </div>

      {/* Modal for YouTube Video */}
      <div className="modal">
        <iframe
          src="https://www.youtube.com/embed/Xj4E0Zry6K4" // Embed code of the YouTube video
          title="Travel Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="close-btn" onClick={handleCloseModal}>
          &times;
        </div>
      </div>
    </HeroSection>
  );
};

export default Hero;
