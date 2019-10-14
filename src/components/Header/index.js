import React from 'react'

import './styles.css'
import Logo from './assets/logo.svg'
import FaceLogo   from './assets/facebook-logo.svg'
import WppLogo    from './assets/whatsapp-logo.svg'
import InstaLogo  from './assets/instagram-logo.svg'

const Header = ({ className }) => {
  return (
    <header className={className}>
      <nav className="desktop-menu navbar-menu">

      <img className="logo navbar-item" src={Logo} alt="ADRIANA MIGUEL"/>
      
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

        <div className="navbar-item"><a className="" href="#inicio">Inicio</a></div>
        <div className="navbar-item"><a href="#sobre">Sobre mim</a></div>
        <div className="navbar-item"><a href="#specs">Especialidades</a></div>
        <div className="navbar-item"><a href="#fim">Fale comigo</a></div>
          
      </nav>

    </header>
  )
}

export default Header;