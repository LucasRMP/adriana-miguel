import React from 'react';

import { Link } from 'gatsby';

import './NavBar.css';
import Logo       from './assets/logo.svg'
import FaceLogo   from './assets/facebook-logo.svg'
import WppLogo    from './assets/whatsapp-logo.svg'
import InstaLogo  from './assets/instagram-logo.svg'

const NavBar = () => {
  return (
    <nav className="desktop-top-nav">
      <img id="logo" src={Logo} alt="ADRIANA MIGUEL"/>

      <ul>
        <li><a className="social-media-icon" target="_blank" href="http://www.facebook.com/draadrianamiguel/">
          <img src={FaceLogo} alt=" "/>
        </a></li>
        <li><a className="social-media-icon" target="_blank" href="https://www.instagram.com/draadrianamiguel/">
          <img src={InstaLogo} alt=" "/>
        </a></li>
        <li><a className="social-media-icon" target="_blank" href="http://wassmee.us/w/?c=db92">
          <img src={WppLogo} alt=" "/> 
        </a></li>

        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre">Sobre mim</a></li>
        <li><a href="#specs">Especialidades</a></li>
        <li><a href="#fim">Fale comigo</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;