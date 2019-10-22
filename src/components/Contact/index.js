import React from 'react'

import logo from './assets/white-logo.svg'
import facebookLogo from './assets/facebook.svg'
import instagramLogo from './assets/instagram.svg'
import whatsappLogo from './assets/whatsapp.svg'
import './styles.css'

const Contact = ({ className, id }) => {
  return (
    <>
      <div className={className} id={id}>
        <img className="logo" src={logo} />
        <div className="social-media-icons">
          <a href="https://www.facebook.com/draadrianamiguel/" className="social-media-link">
            <img className="social-media-icon" src={facebookLogo}/>
          </a>
          <a href="https://www.instagram.com/draadrianamiguel/" className="social-media-link">
            <img className="social-media-icon" src={instagramLogo}/>
          </a>
          <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5562981856722&text=Oi!" className="social-media-link">
            <img className="social-media-icon" src={whatsappLogo}/>
          </a>
        </div>
        <div className="contacts">
          <p className="phones">(62) 3928-0988<br/>(62) 98185-6722</p>
          <p className="address">Rua 17-A, 899, Edifício Centro de Medicina Amyn Daher, 2 andar, St. Aeroporto, Goiânia-GO, CEP 74070-100</p>
        </div>
      </div>
      <form className="form">

      </form>
    </>
  )
}

export default Contact;