import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
    <nav className='n-wrapper'>
      <div className="n-left">
          <h1 className="n-name">Event Venue</h1>
          <span>The best place for event</span>
      </div>
      <div className="n-right">
          <div className="n-list">
          <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Decorators</li>
              <li>About</li>
          </ul>
          </div>
          <button className="button">
            Contact us
          </button>
      </div>
        <a href="#" class="logo">@shadybonne</a>
        

    </nav>
        </header>
    )
}

export default Header
