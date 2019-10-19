import React from 'react'

import './styles.css'

const Map = ({ className }) => {
  return (
    <div className={className}>
      <iframe width="100%" height="100%" className="gmap-canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.108103178218!2d-49.26930968554393!3d-16.67147298851132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3e6ce1e2507%3A0x59b800aaed2fc730!2sGOI%20-%20Grupo%20de%20Otorrinolaringologia%20Integrada%20(Centro%20de%20Medicina%20Amyn%20Daher%2C%20Segundo%20Andar)!5e0!3m2!1spt-BR!2sbr!4v1571435625719!5m2!1spt-BR!2sbr"></iframe>
    </div>
  )
}

export default Map;