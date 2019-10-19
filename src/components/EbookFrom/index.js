import React, { useState } from 'react'

import art from './assets/art.png'
import './styles.css'

const EbookForm = ({ className }) => {

  const [ email, setEmail ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    //? HOW TO USE MAILCHIMP TO MANAGE EMAILS

    console.log(email);
    document.querySelector('.form-input').value = '';
  }

  return (
    <div className={className}>
      <h1 className="form-title">Confira 50 dicas para  combater a rinite</h1>
      <img src={art} alt=""/>
      <form onSubmit={handleSubmit} className="ebook-form">
        <input className="form-input input is-primary is-rounded" type="email" placeholder="Seu melhor e-mail" onChange={(e) => setEmail(e.target.value)}/>
        <button className="submit-btn button is-rounded is-small" type="submit">Baixar E-book</button>
      </form>
    </div>
  )
}

export default EbookForm;