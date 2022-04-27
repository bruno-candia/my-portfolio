import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id='contact'>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <h4>E-mail</h4>
            <h5>turing@gmail.com</h5>
          </article>
          <article className="contact__option">
            <h4>Telefone</h4>
            <h5>+55 21 9 9878-9855</h5>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact;