import React from 'react'

import DesktopMenu from './DesktopMenu'
import MobileMenu  from './MobileMenu'

import DrPicture from './assets/drPicture.png'
import mobileBG from './assets/mobileBg.svg'
import DrBg from './assets/drBG.svg'
import DesktopBG from './assets/desktopBG.svg'
import './styles.css'

const Header = ({ className, id }) => {

  return (
    <header className={className} id={id}>

      <DesktopMenu></DesktopMenu>
      <MobileMenu></MobileMenu>

      <div className="first-div">
        <img className="dr-picture" src={DrPicture}/>
        <img className= "mobile-background" src={mobileBG}/>
      </div>
      <img className="desktop-background" src={DesktopBG}/>
      <img className="dr-background" src={DrBg}/>

      <div className="second-div">
        <h2>Otorrinolaringologia</h2>
        
        <p>
          A otorrinolaringologia é a especialidade médica que cuida das doenças relacionadas ao nariz, aos ouvidos e à garganta.
          <br/>
          Quais são essas doenças? As que a gente mais vê: amígdala, adenóide, sinusite, problemas de ouvido. 
        </p>

        <button 
          className="contact-button"
          onClick={() => { window.open('http://wassmee.us/w/?c=db92', '_blank') }}
        >
          <span>Agende sua consulta!</span>
        </button>


      </div>

    </header>
  )
}

export default Header;