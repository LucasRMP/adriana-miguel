import React from 'react'

import Logo       from './assets/logo.svg'
import FaceLogo   from './assets/facebook-logo.svg'
import WppLogo    from './assets/whatsapp-logo.svg'
import InstaLogo  from './assets/instagram-logo.svg'

const DesktopMenu = ({ className }) => {
  return (
    <nav className={`desktop-menu navbar-menu is-spaced is-primary is-fixed ${className}`}>

        <a href="#inicio">
        <img className="navbar-brand navbar-item" src={Logo} alt="ADRIANA MIGUEL"/>
        </a>

        <div className="navbar-end">
          <div className="navbar-item">
            <a className="social-media-icon" href="http://www.facebook.com/draadrianamiguel/" target="_blank">
            <img src={FaceLogo} alt=" "/>
            </a>
          </div>

          <div className="navbar-item">
            <a className="social-media-icon" href="https://www.instagram.com/draadrianamiguel/" target="_blank">
            <img src={InstaLogo} alt=" "/>
            </a>
          </div>

          <div className="navbar-item">
            <a className="social-media-icon" href="http://api.whatsapp.com/send?1=pt_BR&phone=5562981856722&text=Oi!" target="_blank">
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
            <a href="#fale-comigo">Fale comigo</a>
          </div>
        </div>
      </nav>
  );
}


export default DesktopMenu;