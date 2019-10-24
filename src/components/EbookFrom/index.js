import React, { useState } from 'react'
// import axios from 'axios'

import art from './assets/art.png'
import './styles.css'

const EbookForm = ({ className }) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    //? MAKE THE FORM SUBMIT WITH AXIOS
    // const API_KEY = '1de6150a15b5000615d310b365ec7bfd-us20';
 
    // const mcData = {
    //   email_address: 'lucas.rmagalhaes@gmail.com',
    //   status: 'pending'
    // };

    // const config = {
    //   url: 'https://cors-anywhere.herokuapp.com/https://us20.api.mailchimp.com/3.0/lists/654d27b74c/members',
    //   method: 'POST',
    //   headers: {
    //     Authorization: `apikey ${API_KEY}`,
    //   },
    //   body: JSON.stringify(mcData)
    // };

    // const response2 = await fetch(config);
    // console.log("Response: ", response2);

    document.querySelector('.form-input').value = '';
  }

  return (
    <div className={className}>
      <h1 className="form-title">Confira 50 dicas para  combater a rinite</h1>
      <img src={art} alt=""/>
      <form 
        action="https://draadrianamiguel.us20.list-manage.com/subscribe/post?u=b2ff45c4e1a5c76d761be2962&amp;id=654d27b74c" 
        method="POST"
        className="ebook-form validate"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
      >
        <input 
          className="form-input input is-primary is-rounded email" 
          id="mce-EMAIL"
          type="email" 
          name="EMAIL"
          placeholder="Seu melhor e-mail" 
          required
        />
        <button 
          className="submit-btn button is-rounded is-small" 
          id="mc-embedded-subscribe"
          type="submit"
          name="subscribe"
        >
          Baixar E-book
        </button>
      </form>
    </div>
  )
}

export default EbookForm;


