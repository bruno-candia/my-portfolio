import React from 'react';
import './about.css';
import ME from '../../assets/me_2.png'
import { FaAward } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Conheça</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Bruno Costa" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <a  href="https://www.moneytimes.com.br/santander-anuncia-vencedores-do-programa-empreenda/#:~:text=Bruno%20Costa%20Candia%2C%20estudante%20do%20Instituto%20Nacional%20de%20Telecomunica%C3%A7%C3%B5es%20(Inatel)" target="_blank" rel="noreferrer" >
              <FaAward className='about__icon' />
              <h5>Prêmios</h5>
              <small>Empreenda Santander 2019</small>
              </a>
            </article>
            <article className="about__card">
              <FaCode className='about__icon' />
              <h5>Experiência</h5>
              <small>+4 anos como Desenvolvedor</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projetos</h5>
              <small>+20 Completos</small>
            </article>
          </div>
          <p>Desenvolvedor de Software e UX/UI Designer, 
            fundador da Aurem e estudante de Engenharia de 
            Controle de Automação pelo Instituto Nacional de Telecomunicações - Inatel.
            Vencedor do prêmio Empreende Santander 2019.</p>
          <a href="#contact" className='btn btn-primary'>Contato</a>
        </div>
      </div>
    </section>
  )
}

export default About;





