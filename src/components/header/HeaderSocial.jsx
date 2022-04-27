import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.facebook.com/turingcom/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://www.github.com/turingcom" target="_blank" rel="noreferrer"><FaGithub/></a>
      <a href="https://www.dribbble.com/turingcom/" target="_blank" rel="noreferrer"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocial;