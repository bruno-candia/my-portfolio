import React from "react";
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Quais são minhas skills</h5>
      <h2>Minhas Experiências</h2>
      <div className="container experience__container">
        <div className="experience__softskills">
          <h3>Soft Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>Comunicação</h4>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>Liderança</h4>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>Pensamento Crítico</h4>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>Criatividade</h4>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>Trabalho em Equipe</h4>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>Motivado</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__hardskills">
          <h3>Hard Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>HTML/CSS</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience;


