import React from 'react'

const MobileMenu = ({ className }) => {
  return (
    <nav className={`${className} navbar-burger burger`}>
      <span></span>
      <span></span>
      <span></span>
    </nav>
  )
}

export default MobileMenu;