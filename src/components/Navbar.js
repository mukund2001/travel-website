import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #3f51b5; /* Colorful background */
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  .logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .menu-icon {
    display: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;

    div {
      width: 30px;
      height: 3px;
      background-color: white;
      transition: 0.3s;
    }
  }

  .dropdown {
    position: relative;
    cursor: pointer;

    &:hover .dropdown-menu {
      display: block;
    }

    .dropdown-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #ff7eb3;
      border-radius: 5px;
      padding: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      a {
        display: block;
        color: white;
        padding: 0.5rem 1rem;
        text-decoration: none;

        &:hover {
          background-color: #ff558c;
        }
      }
    }
  }

  .login-btn {
    padding: 0.8rem 1.5rem;
    background-color: #ff7eb3;
    color: white;
    border-radius: 5px;
    border: none;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ff558c;
    }
  }

  @media (max-width: 768px) {
    .links {
      display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
      flex-direction: column;
      gap: 1rem;
      position: absolute;
      top: 60px;
      right: 0;
      background-color: #3f51b5;
      width: 100%;
      padding: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .menu-icon {
      display: flex;
    }

    .login-btn {
      margin-top: 1rem;
    }
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer isMenuOpen={isMenuOpen}>
      <div className="logo">Anjali Travels</div>
      
      <div className="menu-icon" onClick={handleMenuToggle}>
        <div />
        <div />
        <div />
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/start-planning">Start Planning</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/contact">Contact</Link>

    

        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
