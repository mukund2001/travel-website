import React from 'react';
import styled from 'styled-components';
import { FaPlane, FaHotel, FaMapMarkedAlt } from 'react-icons/fa';

const ServicesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  text-align: center;

  .service {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }

  .icon {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Services = () => (
  <ServicesContainer>
    <div className="service">
      <FaPlane className="icon" />
      <h3>Flight Bookings</h3>
      <p>Affordable flights to your dream destinations.</p>
    </div>
    <div className="service">
      <FaHotel className="icon" />
      <h3>Hotels</h3>
      <p>Comfortable stays with great deals.</p>
    </div>
    <div className="service">
      <FaMapMarkedAlt className="icon" />
      <h3>Guided Tours</h3>
      <p>Explore with our expert guides.</p>
    </div>
  </ServicesContainer>
);

export default Services;
