import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>O que ofereço</h5>
      <h2>Serviços</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>UX/UI Design</p>
            </li>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Pesquisa de Usuário</p>
            </li>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Criação de Logotipo</p>
            </li>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Prototipação</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Web</h3>
          </div>
          <ul className='service__list'>
            <li className='service__list_teste'>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Arquitetura do Site</p>
            </li>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Codificação Atualizada</p>
            </li>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Carregamento rápido</p>
            </li>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Sites Responsivos</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Ilustração</h3>
          </div>
          <ul className='service__list'>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Logo</p>
            </li>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Identidade Visual</p>
            </li>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Aplicação da Marca</p>
            </li>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Conteúdo para Redes Sociais</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services;