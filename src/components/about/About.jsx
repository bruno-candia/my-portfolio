import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Conheça</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="https://live.staticflickr.com/3693/9391846254_b2fcdaa360_b.jpg" alt="Alan Turing" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experiências</h5>
              <small>+3 Anos Trabalhando</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clientes</h5>
              <small>+200 no mundo todo</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projetos</h5>
              <small>+80 Completos</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat est id vel repudiandae optio
            Saepe perferendis facere reiciendis explicabo delectus commodi dignissimos consectetu optio
            Ex illum possimus veritatis eos vitae impedit vel sit nam.</p>
          <a href="#contact" className='btn btn-primary'>Contato</a>
        </div>
      </div>
    </section>
  )
}

export default About;





