import React from 'react'

import mobileLogo from './assets/mobile/mobile-logo.svg'
import FaceLogo from './assets/mobile/facebook-mobile-logo.svg'
import InstaLogo from './assets/mobile/instagram-mobile-logo.svg'
import WppLogo from './assets/mobile/whatsapp-mobile-logo.svg'

const MobileMenu = ({ className }) => {
  return (
    <nav className={`${className} navbar-menu mobile-menu is-fixed is-spaced is-primary`}>
      <a href="#inicio">
        <img className="mobile-logo navbar-brand navbar-item" src={mobileLogo} alt="" />
      </a>
      
      <div className="mobile-menu-itens">
        <div className="mobile-menu-item">
          <a className="mobile-social-media-icon" href="http://www.facebook.com/draadrianamiguel/">
            <img src={FaceLogo} alt=""/>
          </a>
        </div>

        <div className="mobile-menu-item">
          <a className="mobile-social-media-icon" href="https://www.instagram.com/draadrianamiguel/">
            <img src={InstaLogo} alt=""/>
          </a>
        </div>
        
        <div className="mobile-menu-item">
          <a className="mobile-social-media-icon" href="http://api.whatsapp.com/send?1=pt_BR&phone=5562981856722&text=Oi!">
            <img src={WppLogo} alt=""/>
          </a>
        </div>
      </div>
      
    </nav>
  )
}

export default MobileMenu;