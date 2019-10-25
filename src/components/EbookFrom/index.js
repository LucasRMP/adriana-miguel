import React, { useState } from 'react'
// import axios from 'axios'

import art from './assets/art.png'
import './styles.css'

const EbookForm = ({ className }) => {

  const [ wasClicked, setWasClicked ] = useState(false);


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   //? MAKE THE FORM SUBMIT WITH AXIOS
  //   const API_KEY = '1de6150a15b5000615d310b365ec7bfd-us20';
 
  //   const mcData = {
  //     email_address: 'lucas.rmagalhaes@gmail.com',
  //     status: 'pending'
  //   };

  //   const config = {
  //     url: 'https://cors-anywhere.herokuapp.com/https://us20.api.mailchimp.com/3.0/lists/654d27b74c/members',
  //     method: 'POST',
  //     headers: {
  //       Authorization: `apikey ${API_KEY}`,
  //     },
  //     body: JSON.stringify(mcData)
  //   };

  //   const response2 = await fetch(config);
  //   console.log("Response: ", response2);

  //   document.querySelector('.form-input').value = '';
  // }

  const handleClick = () => {
    let VALID_EMAIL_TEMPLATE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (VALID_EMAIL_TEMPLATE.test(document.querySelector('.email').value)) {
      setWasClicked(true);
      let btn = document.querySelector('.submit-btn');
      btn.innerHTML = 'enviamos para seu e-mail!';
      document.querySelector('.ebook-form').submit();
      document.querySelector('.form-input').value = '';
    }
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
          className="field form-input input is-primary is-rounded email" 
          id="mce-EMAIL"
          type="email" 
          name="EMAIL"
          placeholder="Seu melhor e-mail" 
          required
        />
        <button 
          className={`field submit-btn button is-rounded is-small ${wasClicked ? 'was-clicked' : ''} `} 
          id="mc-embedded-subscribe"
          onClick={handleClick}
          type="submit"
          name="subscribe"
          disabled={wasClicked}
        >
          Baixar E-book
        </button>
      </form>
    </div>
  )
}

export default EbookForm;


