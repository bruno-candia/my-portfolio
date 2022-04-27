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
            <h3>UX/UI Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Mobile</h3>
          </div>
          <ul className='service__list'>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <div>
                <BiCheck className='service__list-icon' />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services;