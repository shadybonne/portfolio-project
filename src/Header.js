import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav className='header'>
                <div className="n-left">
                    <h1 className="n-name">Event Venue</h1>
                    <label htmlFor="menu-toggle" className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>&#9776;</label>
                    <div className={`n-list ${menuOpen ? 'open' : ''}`}>
                        <ul className="menu" id="menu-toggle">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">About</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="n-right">
                    <button className="button">Contact us</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
