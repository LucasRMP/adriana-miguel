import React from 'react'

import Header from '../components/Header'
import About  from '../components/About'
import Specialities from '../components/Specialties'

import './styles.css'

const App = () => {
  return (
    <div className="content">
      <Header className="header" id="inicio"></Header>
      <About  className="about" id="sobre"></About>
      <Specialities className="specs" id="especialidades"></Specialities>
    </div>
  );
}

export default App;