import React from 'react'

import NavBar from '../NavBar/NavBar'

import './Header.css'

const Header = ({ className }) => {
  return (
    <header className={className}>
      
      <NavBar />
    </header>
  )
}

export default Header;