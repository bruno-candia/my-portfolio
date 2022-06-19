import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';
//  behance
import {FaBehance} from 'react-icons/fa';	


const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/bruno-costa-candia/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/bruno-candia" target="_blank" rel="noreferrer"><FaGithub/></a>
      <a href="https://dribbble.com/brunocandia" target="_blank" rel="noreferrer"><FiDribbble/></a>
      <a href="https://www.behance.net/brunocostac3" target="_blank" rel="noreferrer"><FaBehance/></a>
    </div>
  )
}

export default HeaderSocial;