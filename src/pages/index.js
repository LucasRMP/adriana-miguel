import React from 'react'

import Header from '../components/Header'
import About  from '../components/About'

import './styles.css'

const App = () => {
  return (
    <div className="content">
      
      <Header className="header" id="inicio"></Header>
      <About  className="about" id="sobre"></About>

    </div>
  );
}

export default App;