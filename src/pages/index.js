import React from 'react'
import { Helmet } from 'react-helmet'
import ScrollUpButton from "react-scroll-up-button";

import Header from '../components/Header'
import About  from '../components/About'
import Specialities from '../components/Specialties'
import Map from '../components/Map'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import EbookFrom from '../components/EbookFrom'

import arrowUp from './assets/arrow-up.svg'
import './styles.css'

const App = () => {

  const backToTop = (e) => {
    e.preventDefault();
    if (window.scrollY > 20) {
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="content">
      <Helmet>
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
      />
    </div>
  );
}

export default App;