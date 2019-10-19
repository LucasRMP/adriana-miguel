import React from 'react'

import './styles.css'

const Footer = ({ className, id }) => {
  return (
    <footer className={className} id={id}>
      <p>Copyright © Adriana Miguel 2019 - Todos os direitos reservados. Desenvolvido por <a href="https://www.mribeiro.com.br" target="_blank">MRibeiro</a>.</p>
    </footer>
  )
}

export default Footer;