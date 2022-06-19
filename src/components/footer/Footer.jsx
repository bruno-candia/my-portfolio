import React from 'react';
import './footer.css';

const Footer = () => {
  return(
    <footer>
      <a href='Home' className='footer__name'>BRUNO COSTA</a>
      <ul className='permalink'>
        <li><a href='#Home'>Home</a></li>
        <li><a href='#about'>Sobre</a></li>
        <li><a href='#experience'>Experiência</a></li>
        <li><a href='#services'>Serviços</a></li>
        <li><a href='#portfolio'>Portfólio</a></li>
        <li><a href='#contact'>Contato</a></li>
      </ul>

    </footer>
  )
}

export default Footer;