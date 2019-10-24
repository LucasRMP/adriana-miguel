import React from 'react'
import { Helmet } from 'react-helmet'
import ScrollUpButton from "react-scroll-up-button";

import './styles.css'
import icon from './assets/favicon.ico'

import Header from '../components/Header'
import About  from '../components/About'
import Specialities from '../components/Specialties'
import Map from '../components/Map'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import EbookFrom from '../components/EbookFrom'


const App = () => {
  return (
    <div className="content">
      <Helmet>
        <link rel="icon" type="image/x-icon" href={icon}></link>
        <title>Adriana Miguel</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"/>
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      </Helmet>

      <Header className="header" id="inicio"></Header>
      <About  className="about" id="sobre"></About>
      <Specialities className="specs" id="especialidades"></Specialities>
      <EbookFrom className="ebook-content"></EbookFrom>
      <Map className="google-map"></Map>
      <Contact className="contact" id="fale-comigo"></Contact>
      <Footer className="footer" id="rodape"></Footer>

      <ScrollUpButton
        ShowAtPosition={150}
        EasingType='easeOutCubic'
        AnimationDuration={500}
        ContainerClassName='ScrollUpButton__Container'
        TransitionClassName='ScrollUpButton__Toggled'
        style={{backgroundColor:"#302B59"}}
      />
    </div>
  );
}

export default App;