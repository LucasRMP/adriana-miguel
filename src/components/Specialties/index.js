import React, { useState } from 'react'

import './styles.css'
import mouthSVG from './assets/mouth.svg'
import earSVG from './assets/ear.svg'
import noseSVG from './assets/nose.svg'
import ellipse from './assets/ellipse.svg'
import ellipseFill from './assets/ellipse-fill.svg'


const Specialities = ({ className, id }) => {

  const [ selected, setSelected ] = useState(1);

  const scrollTo = (value) => {
    let carousel = document.querySelector('.carousel');
    carousel.scrollTo({
      top: 0,
      left: value,
      behavior: "smooth"
    });
  }

  return (
    <div className={className} id={id}>
      <div className="content">
        <h2>Especialidades</h2>
        <div className="carousel">

          <div className="carousel-item">
            <img src={mouthSVG} alt=""/>
            <h4>Garganta</h4>
            <p>Garganta é o nome que se dá ao conjunto de órgãos aerodigestivos situados no interior do pescoço, neles compreendidos a faringe e a laringe, além da primeira porção do esôfago e dos primeiros anéis da traquéia. Faz parte, portanto, dos aparelhos digestivo e respiratório.</p>
          </div>
          
          <div className="carousel-item">
            <img src={earSVG} alt=""/>
            <h4>Ouvido</h4>
            <p>A audição é o primeiro sentido desenvolvido pelo ser humano, responsável por desenvolver os processos da percepção, fala e comunicação, permitindo a interação interpessoal.</p>
          </div>
          
          <div className="carousel-item">
            <img src={noseSVG} alt=""/>
            <h4>Nariz</h4>
            <p>O nariz é a porta de entrada para as vias aéreas, responsável por filtrar, umidificar e aquecer o ar que vai para os pulmões.</p>
          </div>

          
        </div>

        <div className="shower">
          <a onClick={() => {
            scrollTo(0);
            setSelected(1);
          }}><img src={selected === 1 ? ellipseFill : ellipse}/></a>

          <a onClick={() => {
            scrollTo(window.innerWidth);
            setSelected(2);
          }}><img src={selected === 2 ? ellipseFill : ellipse}/></a>

          <a onClick={() => {
            scrollTo(window.innerWidth*2);
            setSelected(3);
          }}><img src={selected === 3 ? ellipseFill : ellipse}/></a>
        </div>
      </div>
    </div>   
  )
}

export default Specialities;