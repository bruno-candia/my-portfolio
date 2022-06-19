import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id='contact'>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <h3>Email</h3>
            <h4>
              <a href="mailto:brunocosta96@gmail.com" target="_blank" rel="noreferrer">
                <h5>brunocosta96@gmail.com</h5>
              </a>
            </h4>
          </article>
          <article className="contact__option">
            <h3>Telefone</h3>
            <h4>
              <a href="tel:+55359999577899" target="_blank" rel="noreferrer">
                <h5>+55 35 9999-577899</h5>
              </a>
            </h4>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact;