import React from 'react';
import logo from '../image/logo_media_bird.png';
import '../StylesCss/NavBar.css';


const NavBar = () => {
    return (
        <div>
    <header>
          <img src={logo} alt="logo enteprise" />
          <nav className='nav-right'>
            <li>Nos Réalisations</li>
            <li>Les Tarifs</li>
            <li>Contactez Nous </li>
          </nav>
    </header>
        </div>
    );
};

export default NavBar;