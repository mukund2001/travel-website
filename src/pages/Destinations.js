import React from 'react';

const Destinations = () => (
  <div style={{ backgroundColor: '#f7f8fa', color: '#333', textAlign: 'center', padding: '2rem' }}>
    <h1 style={{ fontSize: '2.5rem', color: '#ff558c', marginBottom: '1rem' }}>Top Destinations</h1>
    <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
      Explore the most popular destinations for your next adventure:
    </p>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div style={cardStyle}>
        <img
          src="https://th.bing.com/th/id/OIP.5tOhH2k9sSWia7xHgTSaKwHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Paris"
          style={imageStyle}
        />
        <h3 style={titleStyle}>Paris</h3>
        <p style={textStyle}>The city of love, art, and the iconic Eiffel Tower.</p>
      </div>
      <div style={cardStyle}>
        <img
          src="http://ts3.mm.bing.net/th?id=OIP.zfuQN48hniTpm8Uap_DN0QHaEK&pid=15.1"
          alt="Tokyo"
          style={imageStyle}
        />
        <h3 style={titleStyle}>Tokyo</h3>
        <p style={textStyle}>A vibrant city blending tradition with cutting-edge technology.</p>
      </div>
      <div style={cardStyle}>
        <img
          src="https://th.bing.com/th/id/OIP.-qvaBgo5VFT1MJvzQ8IqywHaE7?w=277&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="New York"
          style={imageStyle}
        />
        <h3 style={titleStyle}>New York</h3>
        <p style={textStyle}>The city that never sleeps, full of life and landmarks.</p>
      </div>
      <div style={cardStyle}>
        <img
          src="https://th.bing.com/th/id/OIP.W5uhQDtKFzC9tF3ggSuZEQHaE8?w=292&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Rome"
          style={imageStyle}
        />
        <h3 style={titleStyle}>Rome</h3>
        <p style={textStyle}>A timeless city with ancient ruins and rich culture.</p>
      </div>
    </div>
  </div>
);

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  padding: '1rem',
  width: '250px',
  transition: 'transform 0.3s',
  cursor: 'pointer',
};

const imageStyle = {
  width: '100%',
  borderRadius: '10px',
  marginBottom: '1rem',
};

const titleStyle = {
  fontSize: '1.5rem',
  color: '#ff558c',
  marginBottom: '0.5rem',
};

const textStyle = {
  fontSize: '1rem',
  color: '#555',
};

export default Destinations;
