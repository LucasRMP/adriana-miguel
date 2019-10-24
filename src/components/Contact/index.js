import React, { useState } from 'react'
import axios from 'axios'

import logo from './assets/white-logo.svg'
import facebookLogo from './assets/facebook.svg'
import instagramLogo from './assets/instagram.svg'
import whatsappLogo from './assets/whatsapp.svg'
import './styles.css'

const Contact = ({ className, id }) => {

  const [ name, setName ]   = useState('');
  const [ email, setEmail ] = useState('');
  const [ msg, setMsg ]     = useState('');

  const resetForm = () => {
    document.querySelector('.name-field').value = '';
    document.querySelector('.email-field').value = '';
    document.querySelector('.msg-field').value = '';
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      _replyto: email,
      message: msg,
      name,
    }
    try {
      await axios.post('https://formspree.io/xoqajvkj', data);
      alert("Mensagem enviada com sucesso!");
      resetForm();
    }
    catch (err) {
      console.error(err);
      alert("A mensagem não pode ser enviada!");
    }
  }

  return (
      <div className={className} id={id}>
        <div className="content-1">
          <img className="logo" src={logo} alt=""/>
          <div className="social-media-icons">
            <a href="https://www.facebook.com/draadrianamiguel/" className="social-media-link">
              <img className="social-media-icon" src={facebookLogo} alt=""/>
            </a>
            <a href="https://www.instagram.com/draadrianamiguel/" className="social-media-link">
              <img className="social-media-icon" src={instagramLogo} alt=""/>
            </a>
            <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5562981856722&text=Oi!" className="social-media-link">
              <img className="social-media-icon" src={whatsappLogo} alt=""/>
            </a>
          </div>
          <div className="contacts">
            <p className="phones">(62) 3928-0988<br/>(62) 98185-6722</p>
            <p className="address">Rua 17-A, 899, Edifício Centro de Medicina Amyn Daher, 2 andar, St. Aeroporto, Goiânia-GO, CEP 74070-100</p>
          </div>
        </div>


        <form 
          className="form email-form" 
          onSubmit={handleSubmit}
        >
          <div className="field">
            <label className="label">Nome *</label>
            <div className="control">
              <input 
                className="field name-field input is-rounded" 
                type="text" 
                name="name" 
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome" 
                required
              />
            </div>
          </div>
          
          <div className="field">
            <label className="label">Email *</label>
            <div className="control">
              <input 
                className="field email-field input is-rounded" 
                type="email" 
                name="_replyto" 
                placeholder="Seu melhor e-mail!" 
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Mensagem *</label>
            <div className="control">
              <textarea 
                className="field msg-field textarea is-rounded" 
                name="message" 
                placeholder="Digite sua mensagem" 
                onChange={(e) => setMsg(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="field">
            <button className="submit-btn button is-rounded is-small" type="submit">Enviar</button>
          </div>

        </form>
      </div>
  )
}

export default Contact;