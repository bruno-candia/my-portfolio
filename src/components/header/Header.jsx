import React from 'react';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
import ME from '../../assets/me.png';

import './header.css';

const Header = (props) => {
  return(
    <header>
      <div className='container header__container'>
        <h5>Olá, me chamo</h5>
        <h1>Bruno Costa</h1>
        <h5 className='text-light'>Desenvolvedor de Software e UX/UI Design</h5>
        <CTA />
        <HeaderSocial/>

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
        </div> 
     
    </header>
  )
}

export default Header;