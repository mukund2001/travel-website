import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 1rem 2rem;
  text-align: center;

  .social-icons {
    margin-top: 1rem;
    font-size: 1.5rem;

    a {
      margin: 0 0.5rem;
      color: white;
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} Travel Co. All rights reserved.</p>
    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebook />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
    </div>
  </FooterContainer>
);

export default Footer;
