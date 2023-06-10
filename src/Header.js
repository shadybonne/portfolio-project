import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className={`n-wrapper ${menuOpen ? 'menu-open' : ''}`}>
        <div className="n-left">
          <h1 className="n-name">Event Venue</h1>
          <span>The best place for events</span>
        </div>
        <div className={`n-right ${menuOpen ? 'menu-open' : ''}`}>
          <div className="n-list">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Bookings</li>
              <li>About</li>
            </ul>
          </div>
          <button className="button">Contact us</button>
        </div>
        <div className={`menu-button ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
