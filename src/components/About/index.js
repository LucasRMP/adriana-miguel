import React from 'react'

import './styles.css'
import aboutPicture from './assets/about-picture.png'

const About = ({ className, id }) => {
  return (
    <div className={className} id={id}>
      <div className="content">
        <h1>Sobre mim</h1>
        <img className="about-picture" src={aboutPicture}/>
        <p>
          Me formei em 2017 pela Faculdade de Medicina de São José do Rio Preto, interior de São Paulo. Fiz uma sub-especialização em ouvido no Hospital de Reabilitação de Anomalias Craniofaciais (HRAC/Centrinho) na unidade da USP de Bauru, em São Paulo.
          <br/>
          Como otorrinolaringologista, realizo consulta, exames e tratamentos para as doenças ligadas ao ouvido, tontura, nariz e garganta, tanto tratamento clínico como cirúrgico. Atendo desde as mais comuns ligadas a adenoide, amígdalas e septo, além das mais complexas ligadas as infecções frequentes de ouvido, zumbido, vertigem, perda de audição e reabilitação.
          <br/>
          Tenho experiência em cirurgia ORL, implante coclear, ORL ambulatorial, otologia clínica e cirúrgica.
          <br/> 
          Sou membro da SBO, Sociedade Brasileira de Otologia, 2018 - 2019 
        </p>
      </div>
    </div>   
  )
}

export default About;