import React from 'react'

import Logo       from './assets/logo.svg'
import FaceLogo   from './assets/facebook-logo.svg'
import WppLogo    from './assets/whatsapp-logo.svg'
import InstaLogo  from './assets/instagram-logo.svg'

const DesktopMenu = ({ className }) => {
  return (
    <nav className={`desktop-menu navbar-menu is-spaced is-primary ${className}`}>

        <a href="#inicio">
        <img className="navbar-brand navbar-item" src={Logo} alt="ADRIANA MIGUEL"/>
        </a>

        <div className="navbar-end">
          <div className="navbar-item">
            <a className="social-media-icon" target="_blank" href="http://www.facebook.com/draadrianamiguel/">
            <img src={FaceLogo} alt=" "/>
            </a>
          </div>

          <div className="navbar-item">
            <a className="social-media-icon" target="_blank" href="https://www.instagram.com/draadrianamiguel/">
            <img src={InstaLogo} alt=" "/>
            </a>
          </div>

          <div className="navbar-item">
            <a className="social-media-icon" target="_blank" href="http://wassmee.us/w/?c=db92">
            <img src={WppLogo} alt=" "/> 
            </a>
          </div>
          <div className="navbar-item">
            <a href="#sobre">Sobre mim</a>
          </div>
          <div className="navbar-item">
            <a href="#especialidades">Especialidades</a>
          </div>
          <div className="navbar-item">
            <a href="#fale_comigo">Fale comigo</a>
          </div>
        </div>
      </nav>
  );
}


export default DesktopMenu;