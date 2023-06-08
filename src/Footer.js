import React from 'react';
import './footer.css'; // Import the CSS file
const Footer = () => {
    const today = new Date();
    return (
        
    <footer>
        <p>Copyright &copy; {today.getFullYear()} All rights reserved. </p>
    </footer>


    )
}

export default Footer;
